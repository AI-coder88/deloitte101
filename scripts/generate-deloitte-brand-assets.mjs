#!/usr/bin/env node
/**
 * Regenerate raster brand assets from SVG sources in `public/`.
 * Requires: npx sharp-cli (pulled on first run via npx).
 */
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");

const sharpCli = "npx";
const sharpArgs = ["--yes", "sharp-cli", "resize"];

function exportPng(width, height, input, output) {
  execFileSync(
    sharpCli,
    [...sharpArgs, String(width), String(height), "-i", input, "-o", output],
    { stdio: "inherit", cwd: root },
  );
}

const favicon = join(pub, "favicon.svg");
const maskable = join(pub, "maskable-icon.svg");
const og = join(pub, "og-image.svg");

exportPng(16, 16, favicon, join(pub, "favicon-16x16.png"));
exportPng(32, 32, favicon, join(pub, "favicon-32x32.png"));
exportPng(180, 180, favicon, join(pub, "apple-touch-icon.png"));
exportPng(192, 192, favicon, join(pub, "android-chrome-192x192.png"));
exportPng(512, 512, favicon, join(pub, "android-chrome-512x512.png"));
exportPng(192, 192, maskable, join(pub, "maskable_icon_x192.png"));
exportPng(512, 512, maskable, join(pub, "maskable_icon_x512.png"));
exportPng(1200, 630, og, join(pub, "og-image.png"));

console.log("Deloitte brand PNG assets updated in public/");