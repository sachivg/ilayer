# Resume point — iLayer Solutions redesign

**Status as of 2026-07-09 evening:** v1 of the redesign is complete and verified working (desktop + mobile, no console errors). Paused here for the night.

## Start / stop

```bash
./scripts/start-dev.sh   # starts on http://localhost:3000, waits until ready
./scripts/stop-dev.sh    # graceful SIGTERM, falls back to SIGKILL after 10s
```

Both are safe to re-run — `start-dev.sh` no-ops if already running or if port 3000 is taken by something else; `stop-dev.sh` no-ops if nothing is running.

## What's built

Single-page site in `src/app/page.tsx`, sections in `src/components/`:
`Header` → `Hero` → `StatsBar` → `Services` → `Expertise` → `Vision` → `Story` → `Contact` (includes `Locations`) → `Footer`.

Dark navy/cyan design system, all copy sourced from the live ilayersolutions.com (services, stats, certifications, offices). Contact form currently opens a prefilled `mailto:info@ilayersolutions.com` — there's no backend.

## Open items / decisions for next session

- No form backend — if you want submissions to actually go somewhere (email service, DB), need to pick one (Resend, Formspree, etc.) and wire it up.
- No hosting/deployment yet — still local-only.
- No feedback given yet on the visual direction (colors, layout, tone) — first thing to check in the morning is whether the design itself is a hit or needs changes before going further.
- `ilayer/` is a git repo, currently on `main`, one commit ahead of the create-next-app baseline (see `git log`).

## Backup

- Git commit: `e8da213` ("Full redesign: dark tech UI with hero, services, expertise, vision, story, contact") on `main`, one commit after the create-next-app baseline (`94e9f9e`).
- Standalone tarball (source only, no `node_modules`/`.next`/`.git`): `../backups/ilayer-backup-20260709-220641.tar.gz` — restore with `tar -xzf` into a fresh folder, then `npm install`.
