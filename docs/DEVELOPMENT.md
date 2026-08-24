# Development

Requirements: Node.js 22+, pnpm 10+, and Git.

```bash
pnpm install
pnpm dev
```

For the desktop shell, run the web server first, then in a second terminal:

```bash
PIXEL_CAT_DEV_URL=http://localhost:3000 pnpm desktop:dev
```

To build the site: `pnpm build`. To package Electron on the current OS: `pnpm desktop:make`.
