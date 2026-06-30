import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const icons = [
  'logos:react',
  'logos:astro-icon',
  'logos:javascript',
  'logos:typescript-icon',
  'logos:html-5',
  'logos:css-3',
  'logos:tailwindcss-icon',
  'logos:bootstrap',
  'logos:nodejs-icon',
  'simple-icons:express',
  'logos:java',
  'logos:spring-icon',
  'logos:python',
  'logos:django-icon',
  'logos:postgresql',
  'logos:docker-icon',
  'logos:git-icon',
  'mdi:github',
  'logos:supabase-icon',
  'logos:visual-studio-code',
  'ph:coffee-duotone',
  'ph:cat-duotone',
  'ph:game-controller-duotone',
  'ph:terminal-window-duotone',
  'mdi:incognito',
  'ph:paint-brush-duotone',
  'ph:headphones-duotone',
  'ph:mouse-duotone',
  'ph:plugs-connected-duotone',
  'ph:rocket-launch-duotone',
  'logos:vitejs',
  'logos:npm-icon',
  'ph:pizza-duotone',
  'ph:cookie-duotone',
  'pixelarticons:code',
  'pixelarticons:terminal',
  'pixelarticons:gamepad',
  'pixelarticons:heart'
];

const destDir = path.join(process.cwd(), 'public', 'icons');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

console.log(`Downloading ${icons.length} icons to ${destDir}...`);

async function downloadIcon(icon) {
  const filename = `${icon.replace(':', '-')}.svg`;
  const destPath = path.join(destDir, filename);
  
  if (fs.existsSync(destPath)) {
    console.log(`- Already downloaded: ${filename}`);
    return;
  }

  const url = `https://api.iconify.design/${icon}.svg`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const svgText = await res.text();
    fs.writeFileSync(destPath, svgText, 'utf-8');
    console.log(`+ Downloaded: ${filename}`);
  } catch (error) {
    console.error(`x Failed to download ${icon}:`, error.message);
  }
}

async function run() {
  for (const icon of icons) {
    await downloadIcon(icon);
    // Tiny delay to avoid hitting rate limits
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  console.log('Done!');
}

run();
