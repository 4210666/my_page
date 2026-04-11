import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const assets = [
  {
    source: path.join(root, 'node_modules', 'swiper', 'swiper-element-bundle.min.js'),
    target: path.join(root, 'public', 'vendor', 'swiper', 'swiper-element-bundle.min.js'),
  },
  {
    source: path.join(root, 'node_modules', 'swiper', 'swiper-bundle.min.css'),
    target: path.join(root, 'public', 'vendor', 'swiper', 'swiper-bundle.min.css'),
  },
  {
    source: path.join(root, 'node_modules', 'gsap', 'dist', 'gsap.min.js'),
    target: path.join(root, 'public', 'vendor', 'gsap', 'gsap.min.js'),
  },
];

for (const asset of assets) {
  if (!fs.existsSync(asset.source)) {
    throw new Error(`asset not found: ${asset.source}`);
  }

  fs.mkdirSync(path.dirname(asset.target), { recursive: true });
  fs.copyFileSync(asset.source, asset.target);
}

console.log('Synced presentation assets to public/vendor');
