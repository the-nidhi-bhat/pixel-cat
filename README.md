# Pixel Cat Site

A cozy, fast marketing site for Pixel Cat, a tiny desktop companion for focused humans. This is a static Next.js App Router site with playful simulated states, coat previews, responsive sections, and a clearly marked placeholder release link.

## Local setup

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Production build

```bash
pnpm build
pnpm start
```

No environment variables are required. The site does not call an external API or store user data.

## Release downloads

The macOS and Windows buttons currently point to the placeholder URL below. Replace `your-github-username` after creating the repository and publishing signed desktop builds:

`https://github.com/your-github-username/pixel-cat-site/releases/latest`

There are no image or GIF placeholders in the current site; the mascot is rendered with lightweight CSS. If you add media later, label it in the UI and README as `PLACEHOLDER` until replaced.

## Project structure

- `app/page.tsx` — page entry
- `components/pixel-cat-landing.tsx` — interactive marketing sections
- `app/globals.css` — responsive Chummi visual system and animations

## Desktop app roadmap

The marketing site intentionally stays static while the future Tauri/Electron app handles transparent overlays, tray controls, global activity hooks, signed builds, and local settings.
