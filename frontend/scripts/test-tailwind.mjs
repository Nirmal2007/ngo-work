import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs';

const css = fs.readFileSync('src/index.css', 'utf8');

postcss([tailwindcss, autoprefixer])
  .process(css, { from: 'src/index.css' })
  .then(result => {
    console.log('PostCSS compiled successfully, total length:', result.css.length);
    const classesToCheck = [
      'bg-burgundy',
      'bg-rose-deep',
      'bg-gold-warm',
      'from-burgundy',
      'text-burgundy',
      'text-rose-deep',
      'bg-rose-soft',
      'bg-rose-white'
    ];
    for (const cls of classesToCheck) {
      const found = result.css.includes(cls);
      console.log(`Class .${cls}: ${found}`);
      if (found) {
        const match = result.css.match(new RegExp(`\\.${cls}[^{]*\\{[^}]*\\}`));
        if (match) console.log('  ', match[0]);
      }
    }
  })
  .catch(err => {
    console.error('PostCSS error:', err);
  });

