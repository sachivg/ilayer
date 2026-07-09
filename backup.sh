#!/usr/bin/env bash
# Two-layer backup: (1) local git commit of any pending work, (2) an
# off-project tar.gz snapshot in ~/Documents/ilayer-backups/, pruned to the
# newest 15.
set -euo pipefail
cd "$(dirname "$0")"

PROJECT_NAME="ilayer"
BACKUP_DIR="$HOME/Documents/${PROJECT_NAME}-backups"
KEEP=15

# --- layer 1: git commit ---
if [ -d .git ]; then
  if [ -n "$(git status --porcelain)" ]; then
    git add -A
    git commit -m "Backup checkpoint $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null
    echo "Committed pending changes ($(git rev-parse --short HEAD))."
  else
    echo "Nothing to commit — working tree clean ($(git rev-parse --short HEAD))."
  fi
fi

# --- layer 2: off-project tarball ---
AVAILABLE_GB=$(df -g /System/Volumes/Data 2>/dev/null | awk 'NR==2 {print $4}')
if [ -n "${AVAILABLE_GB:-}" ] && [ "$AVAILABLE_GB" -lt 1 ]; then
  echo "Low disk space (${AVAILABLE_GB}GB free) — skipping tarball snapshot."
  exit 0
fi

mkdir -p "$BACKUP_DIR"
TS=$(date +%Y%m%d-%H%M%S)
ARCHIVE="$BACKUP_DIR/${PROJECT_NAME}-${TS}.tar.gz"

tar --exclude='node_modules' --exclude='.next' --exclude='.git' \
  -czf "$ARCHIVE" -C .. "$PROJECT_NAME"

echo "Snapshot written: $ARCHIVE"

# prune to newest $KEEP
ls -1t "$BACKUP_DIR"/${PROJECT_NAME}-*.tar.gz 2>/dev/null | tail -n +$((KEEP + 1)) | while read -r old; do
  rm -f "$old"
  echo "Pruned old snapshot: $(basename "$old")"
done
