#!/usr/bin/env bash
# Starts the iLayer dev server. Idempotent: no-ops if already running.
# Auto-commits any pending work first so nothing in-progress is ever lost
# before a fresh launch.
set -euo pipefail
cd "$(dirname "$0")"

PORT="${PORT:-3000}"
PID_FILE=".dev.pid"
LOG_FILE=".dev.log"

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Already running (PID $(cat "$PID_FILE")) at http://localhost:$PORT"
  exit 0
fi

if [ -d .git ] && [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "Auto-commit before start $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null
  echo "Auto-committed pending changes ($(git rev-parse --short HEAD))."
fi

if lsof -i ":$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "Port $PORT is already in use by another process. Aborting."
  exit 1
fi

if [ ! -x "./node_modules/.bin/next" ]; then
  echo "Dependencies not installed. Run 'npm install' first."
  exit 1
fi

nohup ./node_modules/.bin/next dev -p "$PORT" > "$LOG_FILE" 2>&1 &
disown
echo $! > "$PID_FILE"

echo -n "Waiting for server to be ready"
for _ in $(seq 1 30); do
  if curl -sf "http://localhost:$PORT" >/dev/null 2>&1; then
    echo
    echo "iLayer dev server is up: http://localhost:$PORT (PID $(cat "$PID_FILE"))"
    exit 0
  fi
  echo -n "."
  sleep 1
done

echo
echo "Server did not become ready in time — check $LOG_FILE"
exit 1
