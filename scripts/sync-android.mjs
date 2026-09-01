/**
 * sync-android.mjs
 *
 * Copies the Astro build output (dist/) into the Android project's assets so
 * the WebView can serve the app locally without a network connection.
 *
 * Usage:
 *   npm run sync-android          # copies dist/ → android/app/src/main/assets/public/
 *   npm run build:android         # builds Astro then syncs (recommended)
 */

import { cpSync, rmSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src  = resolve(root, 'dist');
const dest = resolve(root, 'android', 'app', 'src', 'main', 'assets', 'public');

if (!existsSync(src)) {
  console.error('❌  dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

console.log('🗑  Clearing', dest);
if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

console.log('📦  Copying dist/ →', dest);
cpSync(src, dest, { recursive: true });

console.log('✅  Android assets synced. Open android/ in Android Studio and run the app.');
