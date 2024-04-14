#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

WD=$(pwd)
mkdir dist
cp index.html "$WD"/dist/index.html
export VITE_BASE=/vue-jsx/vue2/
cd "$WD"/vue2 || exit
pnpm install
npm run build
mv dist "$WD"/dist/vue2
export VITE_BASE=/vue-jsx/vue3/
cd "$WD"/vue3 || exit
pnpm install
npm run build
mv dist "$WD"/dist/vue3

