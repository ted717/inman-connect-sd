#!/usr/bin/env bash
# Build the static site and push it to the gh-pages branch.
# Usage: npm run deploy
set -euo pipefail

REPO_URL="https://github.com/ted717/inman-connect-sd.git"
BRANCH="gh-pages"
WORK=$(mktemp -d)

cd "$(dirname "$0")/.."
PROJECT_ROOT=$(pwd)

echo "→ building static export"
rm -rf out
GITHUB_ACTIONS=true npm run build

echo "→ staging to $WORK"
cp -r "$PROJECT_ROOT/out/." "$WORK/"
cd "$WORK"
git init -b "$BRANCH" -q
git remote add origin "$REPO_URL"
git add .
git -c user.email=eliot@inman.com -c user.name=ted717 commit -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" -q
git push -f origin "$BRANCH"

echo "→ deployed. https://ted717.github.io/inman-connect-sd/"
rm -rf "$WORK"
