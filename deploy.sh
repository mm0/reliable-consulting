#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Cleaning up dist..."
rm -f dist/img/img  # Remove symlink if it exists

echo "Committing dist changes..."
git add dist/
git commit -m "Deploy: update build" || true  # Allow commit to fail if no changes

echo "Deploying to gh-pages..."
git push origin --delete gh-pages 2>/dev/null || true
git subtree push --prefix dist origin gh-pages

echo "Done! Site deployed to https://www.reliable.consulting/"
