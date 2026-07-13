# Resume point — iLayer Solutions

**Status as of 2026-07-13, paused for PC restart:** Site is multi-page with a real brand identity applied. Working tree was clean and fully pushed to `origin/main` on GitHub (`sachivg/ilayer`) before this pause — nothing uncommitted. Dev server stopped gracefully via `./stop.sh`, which also wrote a tarball snapshot to `~/Documents/ilayer-backups/ilayer-20260713-123314.tar.gz`. Not deployed/hosted anywhere yet — still local-only for live testing.

Next session: run `./start.sh` (after `nvm use 22`) to pick back up — see below.

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

## Testing

No hosting configured yet. For live/real-device testing without deploying to the real domain, options discussed: Vercel preview deployment (recommended — real HTTPS/CDN URL, not the production domain), a quick ngrok/Cloudflare tunnel (ephemeral, zero setup), or local-network-only via LAN IP. Decision pending — was about to set up the GitHub push as the first step toward a Vercel preview when this session paused.

Verified via headless Chromium (Playwright, added as a devDependency): all 6 routes × desktop/mobile, zero console errors, zero failed requests, clean `tsc --noEmit`.

## Open items / decisions for next session

- Pick and set up the live-testing path (Vercel preview / tunnel / LAN) — see "Testing" above.
- No form backend — contact form still opens a prefilled `mailto:info@ilayersolutions.com`.
- No custom domain/hosting for the real launch yet.
- Design direction (new palette + layers illustration) was applied based on user's "surprise me" steer — worth a final gut-check once viewable on a real device/live URL, not just local screenshots.

## Backup

- Git: pushed to `origin/main` on GitHub (`sachivg/ilayer`) as of this session.
- `stop.sh` also writes a standalone tarball snapshot to `~/Documents/ilayer-backups/` on every stop.
