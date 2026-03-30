#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Deploying to gh-pages..."
git subtree push --prefix dist origin gh-pages

echo "Done! Site deployed."
