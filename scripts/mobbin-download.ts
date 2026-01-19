import fs from "fs";
import path from "path";

const PREFIX =
  "https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/pro";

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(`--${name}`);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

async function main() {
  const name = getArg("name");
  const inputFile = getArg("input") ?? "input.html";

  if (!name) {
    console.error("❌ Argument manquant --name");
    console.error(
      "Exemple : npx tsx scripts/mobbin-download.ts --name landing-ios --input input.txt"
    );
    process.exit(1);
  }

  const BASE_DIR = path.resolve("mental_health");
  const OUTPUT_DIR = path.join(BASE_DIR, name);

  // lire le fichier
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Fichier introuvable: ${inputFile}`);
    process.exit(1);
  }

  const content = fs.readFileSync(inputFile, "utf-8");

  // extraire toutes les URLs
  const urls = content.match(/https?:\/\/[^\s"'<>]+/g) ?? [];

  // filtrer + dédupliquer
  const images = Array.from(
    new Set(urls.filter((u) => u.startsWith(PREFIX)))
  );

  console.log(`🔎 ${images.length} images trouvées`);

  // créer dossiers
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // télécharger
  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    const pathname = new URL(url).pathname;
    const ext = path.extname(pathname) || ".jpg";
    const filePath = path.join(OUTPUT_DIR, `${i + 1}${ext}`);

    console.log(`⬇️  ${i + 1}/${images.length}`);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
    } catch (err) {
      console.error(`❌ Erreur téléchargement: ${url}`);
    }
  }

  console.log(`✅ Téléchargement terminé : ${OUTPUT_DIR}`);
}

main();
