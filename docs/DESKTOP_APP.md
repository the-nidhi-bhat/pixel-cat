# Desktop app

Pixel Cat includes an Electron shell in `electron/`. It is intentionally local-first: the renderer has no Node integration, and the preload exposes only notification and tray-break events.

## Development

1. Start the Next.js site with `pnpm dev`.
2. In another terminal, run `PIXEL_CAT_DEV_URL=http://localhost:3000 pnpm desktop:dev`.

Without `PIXEL_CAT_DEV_URL`, Electron opens the offline renderer at `electron/renderer.html`.

## Packaging

Run `pnpm desktop:make` on the target operating system. Windows installers must be built on Windows; macOS artifacts and signing must be built on macOS. Code signing credentials are intentionally not included.

Global activity hooks, draggable transparent overlays, startup registration, and full settings IPC remain follow-up native work; the web simulation does not claim those capabilities.
