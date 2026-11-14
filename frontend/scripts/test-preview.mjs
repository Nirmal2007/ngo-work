import http from 'http';
import fs from 'fs';
import path from 'path';

// Minimal static preview test verifying dist contents
const distDir = path.resolve('dist');
console.log('Testing dist output:');
const filesToCheck = [
  'index.html',
  'about/index.html',
  'services/index.html',
  'action-plan/index.html',
  'rights/index.html',
  'schemes/index.html',
  'gallery/index.html',
  'join/index.html',
  'contact/index.html',
  'privacy/index.html',
  'images/logo.png',
  'favicon.svg',
  'manifest.webmanifest'
];

let allValid = true;
for (const file of filesToCheck) {
  const fullPath = path.join(distDir, file);
  if (fs.existsSync(fullPath)) {
    const stat = fs.statSync(fullPath);
    console.log(`[PASS] ${file} (${stat.size} bytes)`);
  } else {
    console.error(`[FAIL] ${file} missing!`);
    allValid = false;
  }
}

if (!allValid) {
  process.exit(1);
} else {
  console.log('All static files and assets verified successfully!');
}

