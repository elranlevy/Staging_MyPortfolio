/**
 * One-off: make black (and near-black) pixels transparent in the Bit app screens image.
 * Usage: node scripts/remove-black-bg.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const imgPath = path.join(root, 'src/assets/b24a6933276b23eb0257405e8532b066b7ce6c41.png');

// Pixels with R,G,B all below this are made transparent (0–255)
const BLACK_THRESHOLD = 35;

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
  if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
    out[i + 3] = 0; // alpha = transparent
  }
}

await sharp(out, { raw: { width, height, channels } })
  .png()
  .toFile(imgPath);

console.log('Done: black background made transparent:', imgPath);
