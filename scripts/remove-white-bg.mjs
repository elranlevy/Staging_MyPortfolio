/**
 * Make white (and near-white) pixels transparent in PNGs.
 * Usage: node scripts/remove-white-bg.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'src/assets');

const FILES = ['bit-annotated-flow-1.png', 'bit-annotated-flow-2.png', 'bit-annotated-flow-3.png'];
// Pixels with R,G,B all >= this are made transparent (0–255)
const WHITE_THRESHOLD = 240;

async function processFile(filename) {
  const imgPath = path.join(assetsDir, filename);
  const { data, info } = await sharp(imgPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.from(data);

  for (let i = 0; i < out.length; i += channels) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      out[i + 3] = 0;
    }
  }

  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile(imgPath);
  console.log('Done:', filename);
}

for (const file of FILES) {
  await processFile(file);
}
console.log('All white backgrounds removed.');
