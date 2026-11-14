import fs from 'fs';

const buf = fs.readFileSync('public/images/logo.png');
const b64 = buf.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image href="data:image/png;base64,${b64}" width="512" height="512" />
</svg>`;
fs.writeFileSync('public/favicon.svg', svg);
console.log('favicon.svg successfully generated with embedded official logo.');

