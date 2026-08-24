# Pixel Cat

Pixel Cat is a browser-first prototype for a future Tauri or Electron desktop companion. It includes a pixel-art cat state machine, a state simulator, local settings persistence, live palette swapping, a Pomodoro focus loop, and gentle in-app stretch reminders.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
pnpm start
```

## Desktop shell roadmap

The current app intentionally keeps OS-level behavior behind a clean simulation boundary. A Tauri/Electron wrapper can later replace the simulator with a transparent always-on-top window, tray menu, global mouse/keyboard/scroll hooks, platform permission explainers, and signed installers. No telemetry or external data service is required; settings are stored in the browser's local storage for this prototype.

## Status interface

The state machine is represented by `CatState` and `trigger()` in `components/pixel-cat-app.tsx`. A future desktop shell or local file/socket adapter can call the same state transition boundary to report `working`, `idle`, `away`, or `break` without coupling Pixel Cat to a specific coding tool.

## GitHub

Create a private repository named `pixel-cat` and connect this project through the v0 GitHub settings. The connected GitHub credential in this environment is read-only, so repository creation cannot be completed automatically here.
