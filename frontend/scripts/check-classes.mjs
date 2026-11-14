import fs from 'fs';

function glob(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = dir + '/' + file;
    if (fs.statSync(full).isDirectory()) results = results.concat(glob(full));
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) results.push(full);
  });
  return results;
}

const files = glob('src');
const legacy = [];
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const tokens = ['teal', 'cream', 'coral', 'yellow'];
  for (const t of tokens) {
    if (code.includes(t)) {
      legacy.push({ file, token: t });
    }
  }
}
console.log('Legacy references in src:', legacy);

