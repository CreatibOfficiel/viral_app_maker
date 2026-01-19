# MCP Tools pour Apps Mobiles Virales

> Guide complet des outils MCP pour développer, optimiser et scaler des applications mobiles virales.

---

## 1. Automatisation Mobile

### Mobile MCP
**Le plus complet pour l'automatisation mobile**

| Feature | Description |
|---------|-------------|
| Devices | iOS + Android (simulateurs, émulateurs, vrais appareils) |
| Actions | Screenshots, taps, swipes, navigation, typing |
| Apps | Install, launch, terminate, uninstall |
| Use case | Test automatisé des flows d'onboarding |

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": ["-y", "@mobilenext/mobile-mcp@latest"]
    }
  }
}
```

**Prérequis:**
- Xcode CLI tools (iOS)
- Android Platform Tools (Android)
- Node.js v22+

**Repo:** https://github.com/mobile-next/mobile-mcp

---

## 2. App Store Optimization (ASO)

### App Store Scraper MCP
**Analyse ASO cross-platform**

- Analyse keywords (difficulté, trafic, potentiel)
- Scraping Google Play + Apple App Store
- Analyse des reviews et sentiment
- Métriques de compétition

```json
{
  "mcpServers": {
    "appstore": {
      "command": "npx",
      "args": ["-y", "@appreply/mcp-appstore"]
    }
  }
}
```

**Repo:** https://github.com/appreply-co/mcp-appstore

### Astro MCP
**Analytics ASO avancés**

- Suivi rankings mots-clés (historique)
- Analyse tendances avec stats (avg, min, max, volatilité)
- Comparaison performance entre dates
- Détection de trends

**Site:** https://mcpmarket.com/server/astro-1

### App Market Intelligence MCP
**Intelligence de marché**

- Données cross-platform (App Store + Google Play)
- Analyse concurrentielle
- Tendances du marché
- Feedback utilisateurs

**Repo:** https://mcpservers.org/servers/JiantaoFu/AppInsightMCP

---

## 3. Growth & Viral Marketing

### viral.app TikTok MCP
**Analytics TikTok en temps réel**

| Tool | Description |
|------|-------------|
| `get-tiktok-profile` | Followers, engagement, stats profil |
| `get-tiktok-video` | Stats vidéo, auteur, transcript |
| `get-recent-videos` | Vidéos récentes avec métriques |

- 20 crédits gratuits/mois
- Analyse de viralité
- Transcripts pour repurposing

```json
{
  "mcpServers": {
    "tiktok": {
      "command": "npx",
      "args": ["-y", "@fmd-labs/viral-app-mcp"]
    }
  }
}
```

**Site:** https://viral.app/free-tools/tiktok-mcp

### Composio TikTok MCP
**9+ outils d'automatisation**

- Intégration Claude, Cursor, Windsurf
- Publication automatisée
- Analytics avancés

**Site:** https://mcp.composio.dev/tiktok

### Social Media MCP (Postiz)
**Multi-plateforme**

- TikTok, Instagram, YouTube, Twitter, LinkedIn
- Création et scheduling de contenu
- Génération de short-form videos

**Site:** https://postiz.com/blog/social-media-mcp

---

## 4. Design to Code

### Figma MCP (Officiel)
**Design-informed code generation**

- Contexte Figma dans Claude Code
- Génération de code aligné avec le design
- Dev Mode integration

**Blog:** https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/

### Figma to React Native MCP
**Conversion directe**

- Figma → Composants React Native
- Maintient hiérarchie, props, types
- TypeScript + styled-components

```json
{
  "mcpServers": {
    "figma-rn": {
      "command": "npx",
      "args": ["-y", "@kailashg/mcp-figma-to-code"],
      "env": {
        "FIGMA_TOKEN": "your-token",
        "FIGMA_FILE": "file-id",
        "PROJECT_DIR": "./src/components"
      }
    }
  }
}
```

**Site:** https://playbooks.com/mcp/kailashg-figma-to-react-native

---

## 5. Suite Complète: Claude Code GLM Suite

### Overview
Suite de 41 agents + 15 MCP tools + 9 coordinateurs pour automatisation complète.

### Agents pertinents pour apps virales

| Catégorie | Agents | Use Case |
|-----------|--------|----------|
| **Engineering** | mobile-app-builder, rapid-prototyper, test-writer-fixer | Dev rapide |
| **Marketing** | tiktok-strategist, growth-hacker, app-store-optimizer | Acquisition |
| **Design** | ui-ux-pro-max, whimsy-injector | UX virale |
| **Product** | feedback-synthesizer, trend-researcher | Product-market fit |

### MCP Tools inclus

- `analyze_image` - Analyse screenshots
- `analyze_video` - Analyse vidéos
- `ui_to_artifact` - UI vers code
- `diagnose_error` - Debug automatique
- `ui_diff_check` - Comparaison UI

### Features clés

- **95% token reduction** via analyse 5-layer
- **Auto-triggering** des agents selon contexte
- **Ralph CLI** pour exécution autonome

### Installation

```bash
git clone https://github.rommark.dev/admin/claude-code-glm-suite.git
cd claude-code-glm-suite
chmod +x auto-installer.sh
./auto-installer.sh
```

### Pricing

| Provider | Coût |
|----------|------|
| Anthropic Claude | Standard API pricing |
| Z.AI GLM 4.7 | ~90% moins cher (code promo: `R0K78RJKNW`) |

**Source:** https://www.rommark.dev/blog/2026/01/15/ultimate-claude-code-glm-suite-40-agents-mcp-tools-complete-automation/

---

## 6. Configuration Recommandée

### Stack Minimal (Gratuit/Low-cost)

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": ["-y", "@mobilenext/mobile-mcp@latest"]
    },
    "appstore": {
      "command": "npx",
      "args": ["-y", "@appreply/mcp-appstore"]
    }
  }
}
```

### Stack Growth

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": ["-y", "@mobilenext/mobile-mcp@latest"]
    },
    "appstore": {
      "command": "npx",
      "args": ["-y", "@appreply/mcp-appstore"]
    },
    "tiktok": {
      "command": "npx",
      "args": ["-y", "@fmd-labs/viral-app-mcp"]
    },
    "figma": {
      "command": "npx",
      "args": ["-y", "@anthropic/figma-mcp"]
    }
  }
}
```

---

## 7. Workflow Type "App Virale en 2 semaines"

```
Jour 1-2: Research
├── trend-researcher → Identifier niche
├── app-store-optimizer → Analyser keywords
└── tiktok-strategist → Étudier trends

Jour 3-5: Design
├── ui-ux-pro-max → Wireframes
├── figma-mcp → Design system
└── whimsy-injector → Micro-interactions

Jour 6-10: Dev
├── rapid-prototyper → MVP
├── mobile-app-builder → Features core
└── test-writer-fixer → Tests auto

Jour 11-13: Polish
├── mobile-mcp → Test E2E
├── ui_diff_check → QA visuelle
└── performance-benchmarker → Optim

Jour 14: Launch
├── app-store-optimizer → ASO final
├── growth-hacker → Launch strategy
└── project-shipper → Deployment
```

---

## Resources

- [MCP Protocol Docs](https://modelcontextprotocol.io/)
- [Claude Code MCP Docs](https://docs.claude.com/en/docs/claude-code/mcp)
- [Docker MCP Toolkit](https://www.docker.com/blog/add-mcp-servers-to-claude-code-with-mcp-toolkit/)
- [MCPcat - Best MCP Servers](https://mcpcat.io/guides/best-mcp-servers-for-claude-code/)
