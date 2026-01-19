import "dotenv/config";
import { execSync } from "child_process";
import { writeFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from "fs";
import { join } from "path";

const GLADIA_API_KEY = process.env.GLADIA_API_KEY;
const BASE_DIR = join(import.meta.dirname, "..", "transcriptions");
const CONCURRENCY = 25; // Gladia paid plan allows 25 concurrent transcriptions

let OUTPUT_DIR = BASE_DIR; // Will be set based on --output flag or playlist name

if (!GLADIA_API_KEY) {
  console.error("Error: GLADIA_API_KEY not found in environment variables");
  console.error("Create a .env file with your Gladia API key");
  process.exit(1);
}

interface GladiaTranscriptionResponse {
  id: string;
  result_url: string;
}

interface GladiaResultResponse {
  status: "queued" | "processing" | "done" | "error";
  result?: {
    transcription: {
      full_transcript: string;
      utterances?: Array<{
        speaker: number;
        text: string;
        start: number;
        end: number;
      }>;
    };
  };
  error?: string;
}

interface VideoInfo {
  url: string;
  title: string;
  uploadDate: string;
}

interface PlaylistInfo {
  title: string;
  channel: string;
  videos: VideoInfo[];
}

function sanitizeDirName(name: string): string {
  return name
    .replace(/[<>:"/\\|?*]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
    .substring(0, 50);
}

async function getPlaylistInfo(playlistUrl: string): Promise<PlaylistInfo> {
  console.log("Extracting playlist info...");

  try {
    // Get playlist metadata
    const metaOutput = execSync(
      `yt-dlp --flat-playlist --print "%(playlist_title)s|||%(playlist_channel)s" "${playlistUrl}" | head -1`,
      { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 }
    );
    const [playlistTitle, channel] = metaOutput.trim().split("|||");

    // Get video URLs and metadata from playlist
    const output = execSync(
      `yt-dlp --flat-playlist --print "%(url)s|||%(title)s|||%(upload_date)s" "${playlistUrl}"`,
      { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 }
    );

    const videos = output
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [url, title, uploadDate] = line.split("|||");
        return {
          url: url.startsWith("http") ? url : `https://www.youtube.com/watch?v=${url}`,
          title: title || "Unknown",
          uploadDate: uploadDate || "unknown",
        };
      });

    console.log(`Playlist: ${playlistTitle}`);
    console.log(`Channel: ${channel}`);
    console.log(`Found ${videos.length} videos`);

    return {
      title: playlistTitle || "unknown-playlist",
      channel: channel || "unknown-channel",
      videos,
    };
  } catch (error) {
    console.error("Error extracting playlist. Make sure yt-dlp is installed:");
    console.error("  brew install yt-dlp");
    throw error;
  }
}

async function getVideoInfo(videoUrl: string): Promise<VideoInfo> {
  try {
    const output = execSync(
      `yt-dlp --print "%(title)s|||%(upload_date)s" "${videoUrl}"`,
      { encoding: "utf-8" }
    );
    const [title, uploadDate] = output.trim().split("|||");
    return { url: videoUrl, title, uploadDate };
  } catch {
    return { url: videoUrl, title: "Unknown", uploadDate: "unknown" };
  }
}

async function submitToGladia(videoUrl: string): Promise<GladiaTranscriptionResponse> {
  const response = await fetch("https://api.gladia.io/v2/pre-recorded", {
    method: "POST",
    headers: {
      "x-gladia-key": GLADIA_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      audio_url: videoUrl,
      diarization: true,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gladia API error: ${response.status} - ${error}`);
  }

  return response.json();
}

async function pollForResult(resultUrl: string, prefix = ""): Promise<GladiaResultResponse> {
  const maxAttempts = 120; // 20 minutes max (10s intervals)
  let attempts = 0;

  while (attempts < maxAttempts) {
    const response = await fetch(resultUrl, {
      headers: { "x-gladia-key": GLADIA_API_KEY! },
    });

    if (!response.ok) {
      throw new Error(`Failed to get result: ${response.status}`);
    }

    const result: GladiaResultResponse = await response.json();

    if (result.status === "done") {
      return result;
    }

    if (result.status === "error") {
      throw new Error(`Transcription error: ${result.error}`);
    }

    // Log progress every 3 attempts (30s) to reduce noise
    if (attempts % 3 === 0) {
      console.log(`${prefix} Status: ${result.status}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10s
    attempts++;
  }

  throw new Error("Transcription timed out");
}

function sanitizeFilename(title: string): string {
  return title
    .replace(/[<>:"/\\|?*]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 100);
}

function formatDate(dateStr: string): string {
  if (!dateStr || dateStr === "unknown" || dateStr.length !== 8) {
    return new Date().toISOString().split("T")[0];
  }
  // Format YYYYMMDD to YYYY-MM-DD
  return `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
}

function saveTranscription(video: VideoInfo, transcript: string): string {
  const date = formatDate(video.uploadDate);
  const filename = `${date}-${sanitizeFilename(video.title)}.md`;
  const filepath = join(OUTPUT_DIR, filename);

  const content = `# ${video.title}

**Date**: ${date}
**URL**: ${video.url}

---

## Transcription

${transcript}
`;

  writeFileSync(filepath, content, "utf-8");
  return filepath;
}

async function transcribeVideo(video: VideoInfo, index: number, total: number): Promise<boolean> {
  const filename = `${formatDate(video.uploadDate)}-${sanitizeFilename(video.title)}.md`;
  const filepath = join(OUTPUT_DIR, filename);
  const prefix = `[${index}/${total}]`;

  // Skip if already transcribed
  if (existsSync(filepath)) {
    console.log(`${prefix} Skipping (already exists): ${video.title}`);
    return true;
  }

  console.log(`${prefix} Starting: ${video.title}`);

  try {
    const submission = await submitToGladia(video.url);
    console.log(`${prefix} Submitted (ID: ${submission.id})`);

    const result = await pollForResult(submission.result_url, prefix);
    console.log(`${prefix} Complete!`);

    const transcript = result.result?.transcription.full_transcript || "";
    const savedPath = saveTranscription(video, transcript);
    console.log(`${prefix} Saved: ${savedPath}`);
    return true;
  } catch (error) {
    console.error(`${prefix} Failed: ${video.title}`, error);
    return false;
  }
}

async function processBatch(videos: VideoInfo[], startIndex: number, total: number): Promise<void> {
  const promises = videos.map((video, i) =>
    transcribeVideo(video, startIndex + i + 1, total)
  );
  await Promise.all(promises);
}

async function generateConsolidatedAnalysis(title: string): Promise<void> {
  const files = readdirSync(OUTPUT_DIR)
    .filter((f) => f.endsWith(".md") && !f.includes("-analysis.md"))
    .sort();

  if (files.length === 0) {
    console.log("No transcriptions found to consolidate");
    return;
  }

  let consolidated = `# ${title} - Analyse des vidéos

> Généré automatiquement à partir de ${files.length} transcriptions

## Index des vidéos

`;

  // Build index
  for (const file of files) {
    const name = file.replace(".md", "");
    consolidated += `- [${name}](#${name.toLowerCase().replace(/\s+/g, "-")})\n`;
  }

  consolidated += `\n---\n\n`;

  // Add all transcriptions
  for (const file of files) {
    const content = readFileSync(join(OUTPUT_DIR, file), "utf-8");
    consolidated += content + "\n\n---\n\n";
  }

  const outputPath = join(OUTPUT_DIR, `${sanitizeDirName(title)}-analysis.md`);
  writeFileSync(outputPath, consolidated, "utf-8");
  console.log(`\nConsolidated analysis saved to: ${outputPath}`);
}

function parseArgs(args: string[]): {
  command: "playlist" | "video" | "consolidate" | "help";
  url?: string;
  output?: string;
  title?: string;
} {
  let command: "playlist" | "video" | "consolidate" | "help" = "help";
  let url: string | undefined;
  let output: string | undefined;
  let title: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--playlist" || arg === "-p") {
      command = "playlist";
      url = args[++i];
    } else if (arg === "--output" || arg === "-o") {
      output = args[++i];
    } else if (arg === "--title" || arg === "-t") {
      title = args[++i];
    } else if (arg === "--consolidate" || arg === "-c") {
      command = "consolidate";
    } else if (arg === "--help" || arg === "-h") {
      command = "help";
    } else if (arg.startsWith("http")) {
      command = "video";
      url = arg;
    }
  }

  return { command, url, output, title };
}

function showHelp() {
  console.log(`
YouTube to Gladia Transcription Tool

Usage:
  npx tsx scripts/youtube-to-gladia.ts --playlist <url> [--output <name>]
  npx tsx scripts/youtube-to-gladia.ts <video-url> [--output <name>]
  npx tsx scripts/youtube-to-gladia.ts --consolidate --output <name> [--title <title>]

Options:
  -p, --playlist <url>   Transcribe all videos from a playlist
  -o, --output <name>    Output folder name (default: auto from playlist/channel)
  -t, --title <title>    Title for consolidated analysis
  -c, --consolidate      Generate consolidated analysis file
  -h, --help             Show this help

Examples:
  # Transcribe a playlist (auto-creates folder from channel name)
  npx tsx scripts/youtube-to-gladia.ts --playlist "https://youtube.com/playlist?list=..."

  # Transcribe a playlist to a custom folder
  npx tsx scripts/youtube-to-gladia.ts --playlist "https://youtube.com/playlist?list=..." -o indie-hackers

  # Consolidate existing transcriptions
  npx tsx scripts/youtube-to-gladia.ts --consolidate -o indie-hackers -t "Indie Hackers Analysis"

Output folders are created in: transcriptions/<name>/
`);
}

async function main() {
  const args = process.argv.slice(2);
  const { command, url, output, title } = parseArgs(args);

  if (command === "help" || (command !== "consolidate" && !url)) {
    showHelp();
    process.exit(command === "help" ? 0 : 1);
  }

  // Ensure base directory exists
  if (!existsSync(BASE_DIR)) {
    mkdirSync(BASE_DIR, { recursive: true });
  }

  // Handle consolidation
  if (command === "consolidate") {
    if (!output) {
      console.error("Please specify --output <folder> for consolidation");
      process.exit(1);
    }
    OUTPUT_DIR = join(BASE_DIR, output);
    if (!existsSync(OUTPUT_DIR)) {
      console.error(`Folder not found: ${OUTPUT_DIR}`);
      process.exit(1);
    }
    await generateConsolidatedAnalysis(title || output);
    return;
  }

  let videos: VideoInfo[] = [];
  let analysisTitle = title || "Video";

  // Handle playlist
  if (command === "playlist") {
    const playlistInfo = await getPlaylistInfo(url!);
    videos = playlistInfo.videos;
    analysisTitle = title || playlistInfo.title || playlistInfo.channel;

    // Set output directory
    const folderName = output || sanitizeDirName(playlistInfo.channel || playlistInfo.title);
    OUTPUT_DIR = join(BASE_DIR, folderName);
  } else {
    // Single video URL
    const video = await getVideoInfo(url!);
    videos = [video];
    analysisTitle = title || video.title;

    // Set output directory
    const folderName = output || "single-videos";
    OUTPUT_DIR = join(BASE_DIR, folderName);
  }

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`\nOutput folder: ${OUTPUT_DIR}`);
  console.log(`Starting transcription of ${videos.length} video(s) with ${CONCURRENCY} concurrent jobs...\n`);

  // Process videos in batches of CONCURRENCY
  for (let i = 0; i < videos.length; i += CONCURRENCY) {
    const batch = videos.slice(i, i + CONCURRENCY);
    console.log(`\n--- Batch ${Math.floor(i / CONCURRENCY) + 1}/${Math.ceil(videos.length / CONCURRENCY)} ---`);
    await processBatch(batch, i, videos.length);
  }

  // Generate consolidated file
  await generateConsolidatedAnalysis(analysisTitle);

  console.log("\nDone!");
}

main().catch(console.error);
