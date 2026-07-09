#!/usr/bin/env bash
# Stops the dev server started by start.sh: SIGTERM first, SIGKILL only if
# it hasn't exited after a grace period. Finishes with a parting backup.
set -euo pipefail
cd "$(dirname "$0")"

PID_FILE=".dev.pid"

if [ ! -f "$PID_FILE" ]; then
  echo "No PID file found — nothing to stop (or it wasn't started with start.sh)."
else
  PID=$(cat "$PID_FILE")

  if ! kill -0 "$PID" 2>/dev/null; then
    echo "Process $PID isn't running. Removing stale PID file."
    rm -f "$PID_FILE"
  else
    echo "Stopping dev server (PID $PID)..."
    kill -TERM "$PID" 2>/dev/null || true

    stopped=false
    for _ in $(seq 1 10); do
      if ! kill -0 "$PID" 2>/dev/null; then
        stopped=true
        break
      fi
      sleep 1
    done

    if [ "$stopped" = true ]; then
      echo "Stopped gracefully."
    else
      echo "Still running after 10s — sending SIGKILL."
      kill -KILL "$PID" 2>/dev/null || true
      echo "Stopped."
    fi
    rm -f "$PID_FILE"
  fi
fi

echo "Taking a parting backup..."
./backup.sh
