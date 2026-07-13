# Resume point — iLayer Solutions

**Status as of 2026-07-13: LIVE.** Deployed to Firebase Hosting at **https://ilayersolutions.web.app** (project `ilayersolutions`, same Firebase account as the other iLayer/yogi projects). Static export (`output: "export"` in `next.config.ts`), no backend. Verified via headless Chromium against the live URL — correct title, zero console errors, all 6 routes return 200.

Custom domain (`ilayersolutions.com`) is not yet pointed at this — still on the `.web.app` URL. To redeploy after future changes: `nvm use 22 && npm run build && firebase deploy --only hosting`.

## Start / stop

Requires Node ≥20.9 — the system default `node` is v17, so use nvm first:

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && nvm use 22
./start.sh   # starts on http://localhost:3000, waits until ready
./stop.sh    # graceful SIGTERM, falls back to SIGKILL after 10s, takes a backup tarball
```

Both are safe to re-run — `start.sh` no-ops if already running or if port 3000 is taken; `stop.sh` no-ops if nothing is running. `start.sh` auto-commits any pending work before launching.

## What's built

Multi-page site (App Router), routes in `src/app/`: `/` (home), `/vision`, `/about`, `/services`, `/expertise`, `/contact`. Shared `Header`/`Footer` with nav list in `src/lib/nav.ts`.

**Brand identity (new, 2026-07-13):**
- Real logo wired in (`public/logo.png`, `public/logo-icon.png`, favicon/apple-icon) — derived from `~/Downloads/ilayer-logo.png` via transparency-keying since the source had a baked-in background.
- Palette pulled from the logo's own rainbow-layer spectrum: warm amber (`--accent: #ff8a3d`) + teal (`--accent-2: #2dd4bf`) on warm charcoal neutrals, replacing the original generic cyan/indigo scheme. Tokens in `src/app/globals.css`.
- Custom SVG "stacked layers" illustration (`src/components/LayersMark.tsx`) echoing the logo mark — used as hero art and as subtle rotated watermarks on Vision/About/Services/Expertise/Contact.
- 5-hue color-cycle utility (`src/lib/swatches.ts`) used for icon chips, timeline dots, location pins, and stat numbers so cards don't all repeat the same accent color.

## Hosting

Firebase Hosting, project `ilayersolutions`. Config in `firebase.json` (`public: "out"`, `cleanUrls: true`) and `.firebaserc` (default alias → `ilayersolutions`). Deploy flow:

```bash
nvm use 22
npm run build        # static export to out/
firebase deploy --only hosting
```

Verified via headless Chromium (Playwright, added as a devDependency): all 6 routes × desktop/mobile against both the local static export and the live `.web.app` URL — zero console errors, zero failed requests, clean `tsc --noEmit`.

## Open items / decisions for next session

- Point the real domain (`ilayersolutions.com`) at Firebase Hosting via the console (Hosting → Add custom domain) — that's the actual public "launch" moment, still pending.
- No form backend — contact form still opens a prefilled `mailto:info@ilayersolutions.com`.
- Design direction (new palette + layers illustration) was applied based on user's "surprise me" steer — now viewable live at the URL above for a final gut-check.

## Backup

- Git: pushed to `origin/main` on GitHub (`sachivg/ilayer`) as of this session.
- `stop.sh` also writes a standalone tarball snapshot to `~/Documents/ilayer-backups/` on every stop.
- Live site itself is a durable backup surface — every `firebase deploy` is a new hosting version, rollback-able from the Firebase console (Hosting → release history).
