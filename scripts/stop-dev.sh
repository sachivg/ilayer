#!/usr/bin/env bash
# Stops the dev server started by start-dev.sh: SIGTERM first, SIGKILL only
# if it hasn't exited after a grace period.
set -euo pipefail
cd "$(dirname "$0")/.."

PID_FILE=".dev-server.pid"

if [ ! -f "$PID_FILE" ]; then
  echo "No PID file found — nothing to stop (or it wasn't started with start-dev.sh)."
  exit 0
fi

PID=$(cat "$PID_FILE")

if ! kill -0 "$PID" 2>/dev/null; then
  echo "Process $PID isn't running. Removing stale PID file."
  rm -f "$PID_FILE"
  exit 0
fi

echo "Stopping dev server (PID $PID)..."
kill -TERM "$PID" 2>/dev/null || true

for _ in $(seq 1 10); do
  if ! kill -0 "$PID" 2>/dev/null; then
    echo "Stopped gracefully."
    rm -f "$PID_FILE"
    exit 0
  fi
  sleep 1
done

echo "Still running after 10s — sending SIGKILL."
kill -KILL "$PID" 2>/dev/null || true
rm -f "$PID_FILE"
echo "Stopped."
