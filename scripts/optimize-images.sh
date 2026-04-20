#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

optimize_webp() {
  local file="$1"
  local max_dim="$2"
  local quality="$3"
  local tmp
  local before
  local after

  tmp="$(mktemp "${TMPDIR:-/tmp}/imgopt-webp.XXXXXX.webp")"
  before="$(stat -f '%z' "$file")"

  magick "$file" \
    -auto-orient \
    -resize "${max_dim}x${max_dim}>" \
    -strip \
    -quality "$quality" \
    "$tmp"

  after="$(stat -f '%z' "$tmp")"

  if [[ "$after" -lt "$before" ]]; then
    mv "$tmp" "$file"
    printf 'optimized %s (%s -> %s bytes)\n' "$file" "$before" "$after"
  else
    rm -f "$tmp"
  fi
}

optimize_jpeg() {
  local file="$1"
  local max_dim="$2"
  local quality="$3"
  local tmp
  local before
  local after

  tmp="$(mktemp "${TMPDIR:-/tmp}/imgopt-jpeg.XXXXXX.jpg")"
  before="$(stat -f '%z' "$file")"

  magick "$file" \
    -auto-orient \
    -resize "${max_dim}x${max_dim}>" \
    -strip \
    -interlace Plane \
    -quality "$quality" \
    "$tmp"

  after="$(stat -f '%z' "$tmp")"

  if [[ "$after" -lt "$before" ]]; then
    mv "$tmp" "$file"
    printf 'optimized %s (%s -> %s bytes)\n' "$file" "$before" "$after"
  else
    rm -f "$tmp"
  fi
}

create_webp_from_jpeg() {
  local source_file="$1"
  local target_file="$2"
  local max_dim="$3"
  local quality="$4"

  magick "$source_file" \
    -auto-orient \
    -resize "${max_dim}x${max_dim}>" \
    -strip \
    -quality "$quality" \
    "$target_file"

  printf 'created %s from %s\n' "$target_file" "$source_file"
}

while IFS= read -r -d '' file; do
  optimize_webp "$file" 1400 68
done < <(find "$ROOT_DIR/src/assets/products" "$ROOT_DIR/src/assets/Gallery" -type f -name '*.webp' -print0)

while IFS= read -r -d '' file; do
  optimize_webp "$file" 1200 70
done < <(find "$ROOT_DIR/src/assets/AboutUs" "$ROOT_DIR/src/assets/Card" -type f -name '*.webp' -print0)

optimize_webp "$ROOT_DIR/src/assets/home-page-hero.webp" 1400 68

while IFS= read -r -d '' file; do
  optimize_jpeg "$file" 1400 76
done < <(find "$ROOT_DIR/public" -maxdepth 1 -type f \( -name '*.jpg' -o -name '*.jpeg' \) -print0)

create_webp_from_jpeg "$ROOT_DIR/public/before-after-before.jpeg" "$ROOT_DIR/public/before-after-before.webp" 1400 72
create_webp_from_jpeg "$ROOT_DIR/public/before-after-after.jpeg" "$ROOT_DIR/public/before-after-after.webp" 1400 72
