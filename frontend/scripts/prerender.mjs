import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'நம்ம பாதுகாப்புத் தோழி | பெண்கள் பாதுகாப்பு மற்றும் உதவி | Peace Trust',
    description: 'பெண்கள் பாதுகாப்பு, பணியிடத் துன்புறுத்தல், குடும்ப வன்முறை, சட்ட உதவி, மருத்துவ ஆதரவு மற்றும் ஆலோசனைக்காக Peace Trust முன்னெடுக்கும் நம்ம பாதுகாப்புத் தோழி முயற்சி. உதவி எண்: 9042580158.',
    canonical: 'https://nammapathugaputhozhi.com/',
    heading: 'பெண்களின் பாதுகாப்பு... நமது பொறுப்பு! - நம்ம பாதுகாப்புத் தோழி',
    bodyText: 'பணியிடம், குடும்பம், சமூகம் என எந்த இடத்திலும் பெண்கள் எதிர்கொள்ளும் துன்புறுத்தல்களுக்கு எதிராக, பாதுகாப்பும் ஆதரவும் வழங்கும் நம்பிக்கையான முயற்சி. அமைதி அறக்கட்டளை (PEACE TRUST), திண்டுக்கல். உதவி எண்: +91 9042580158.',
  },
  {
    path: '/about',
    outPath: 'about/index.html',
    title: 'எங்கள் நோக்கம் | ஒரு பெண்ணின் கண்ணீருக்கு ஒரு தோழி | நம்ம பாதுகாப்புத் தோழி',
    description: 'அமைதி அறக்கட்டளை (PEACE TRUST) திண்டுக்கல் முன்னெடுக்கும் பெண்கள் பாதுகாப்பு, சமத்துவம் மற்றும் கிராமப்புற அதிகாரமளித்தல் இயக்கத்தின் தொலைநோக்கு மற்றும் கொள்கைகள்.',
    canonical: 'https://nammapathugaputhozhi.com/about',
    heading: 'ஒரு பெண்ணின் கண்ணீருக்கு ஒரு தோழி இருக்க வேண்டும்! - அமைப்பின் நோக்கம்',
    bodyText: 'நம்ம பாதுகாப்புத் தோழி என்பது திண்டுக்கல்லை தலைமையிடமாகக் கொண்டு நான்கு தசாப்தங்களுக்கும் மேலாக சமூக விளிம்புநிலை மக்களுக்காக களப்பணியாற்றி வரும் அமைதி அறக்கட்டளை (PEACE TRUST) அமைப்பின் ஒரு உன்னத சமூக பாதுகாப்பு முன்னெடுப்பாகும். உதவி எண்: 9042580158.',
  },
  {
    path: '/services',
    outPath: 'services/index.html',
    title: 'எங்கள் சேவைகள் | சட்ட, மருத்துவ & ஆலோசனை ஆதரவு | நம்ம பாதுகாப்புத் தோழி',
    description: 'சட்ட உதவி, மருத்துவ ஆதரவு, பாதுகாப்பான தங்குமிட வழிகாட்டல், மனநல ஆலோசனை, அரசு நலத்திட்டங்கள் மற்றும் புகார் வழிகாட்டல் சேவைகள்.',
    canonical: 'https://nammapathugaputhozhi.com/services',
    heading: 'எங்கள் விரிவான ஆதரவு சேவைகள் - நம்ம பாதுகாப்புத் தோழி',
    bodyText: 'சட்ட உதவி & வழிகாட்டல் (DLSA), மருத்துவ ஆதரவு & சுகாதார முகாம், பாதுகாப்பான தங்குமிட வழிகாட்டுதல் (One Stop Centre Sakhi), மனநல ஆலோசனை (கேட்டறியும் தோழி), அரசு நலத்திட்ட வழிகாட்டல், மற்றும் துன்புறுத்தல் புகார் வழிகாட்டுதல்.',
  },
  {
    path: '/action-plan',
    outPath: 'action-plan/index.html',
    title: 'கிராம செயல் திட்டம் | ஒரு கிராமம் – ஒரு குழு – 10 தோழிகள் | நம்ம பாதுகாப்புத் தோழி',
    description: 'கிராம மட்டத்தில் 10 தோழிகள் கொண்ட பாதுகாப்பு கட்டமைப்பு: சட்ட உதவி, சுகாதாரம், அரசு நலத்திட்டங்கள், மனநலம் மற்றும் மாதாந்திர செயல்பாட்டு காலண்டர்.',
    canonical: 'https://nammapathugaputhozhi.com/action-plan',
    heading: 'கிராம செயல் திட்டம்: ஒரு கிராமம் – ஒரு குழு – 10 தோழிகள்',
    bodyText: 'ஒவ்வொரு கிராமத்திலும் 10 பெண் தன்னார்வலர்கள் கொண்ட பாதுகாப்பு வளையம்: 1 குழுத் தலைவி, 1 துணைத் தலைவி, 2 சட்டத் தோழிகள், 2 சுகாதாரத் தோழிகள், 2 கல்வி & அரசுத் திட்டத் தோழிகள், 2 மனநல ஆதரவுத் தோழிகள்.',
  },
  {
    path: '/team',
    outPath: 'team/index.html',
    title: 'வழிகாட்டும் குழு | Leadership & Guidance Team | நம்ம பாதுகாப்புத் தோழி',
    description: 'நம்ம பாதுகாப்புத் தோழி திட்டத்தை வழிநடத்தி, ஆலோசனை வழங்கி, சமூக அளவில் சிறப்பாகச் செயல்படுத்த உறுதுணையாக இருக்கும் வழிகாட்டும் குழு மற்றும் ஒருங்கிணைப்பாளர்கள்.',
    canonical: 'https://nammapathugaputhozhi.com/team',
    heading: 'வழிகாட்டும் குழு - Guidance & Advisory Committee',
    bodyText: 'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் வழிகாட்டுக் குழுத் தலைவர் பா. ரூபபாலன் (தலைவர், அமைதி அறக்கட்டளை), ஒருங்கிணைப்புக் குழுத் தலைவர் டாக்டர் ஆ. சீனிவாசன், சமூக நலன் பயிற்சி அலுவலர் வே. பவித்ரா மற்றும் ஒருங்கிணைப்புக் குழு உறுப்பினர்கள்.',
  },
  {
    path: '/rights',
    outPath: 'rights/index.html',
    title: 'உங்கள் உரிமைகள் | பெண்கள் பாதுகாப்புச் சட்டங்கள் | நம்ம பாதுகாப்புத் தோழி',
    description: 'POSH சட்டம் 2013, குடும்ப வன்முறை தடுப்புச் சட்டம் 2005, குழந்தைத் திருமண தடைச் சட்டம் 2006 மற்றும் போக்சோ சட்டம் 2012 குறித்த எளிய வழிகாட்டல்.',
    canonical: 'https://nammapathugaputhozhi.com/rights',
    heading: 'உங்கள் சட்ட உரிமைகளை அறிந்து கொள்ளுங்கள்',
    bodyText: 'பணியிடத்தில் பாலியல் துன்புறுத்தல் தடுப்புச் சட்டம் 2013 (POSH Act), குடும்ப வன்முறையிலிருந்து பெண்களைப் பாதுகாக்கும் சட்டம் 2005, குழந்தைத் திருமண தடைச் சட்டம் 2006, பாலியல் குற்றங்களிலிருந்து குழந்தைகளைப் பாதுகாக்கும் சட்டம் 2012 (POCSO). இலவச சட்ட உதவி எண்: 15100.',
  },
  {
    path: '/schemes',
    outPath: 'schemes/index.html',
    title: 'அரசு நலத்திட்டங்கள் | புதுமைப் பெண் & மகளிர் உரிமைத் தொகை | நம்ம பாதுகாப்புத் தோழி',
    description: 'புதுமைப் பெண் திட்டம், கலைஞர் மகளிர் உரிமைத் தொகை, டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவி, சகி மையம் மற்றும் தோழி விடுதிகள் விபரம்.',
    canonical: 'https://nammapathugaputhozhi.com/schemes',
    heading: 'பெண்களுக்கான தமிழ்நாடு அரசு நலத்திட்டங்கள்',
    bodyText: 'புதுமைப் பெண் திட்டம் (மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதித் திட்டம் மாதந்தோறும் ₹1,000), கலைஞர் மகளிர் உரிமைத் திட்டம் (மாதந்தோறும் ₹1,000), டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு நிதி உதவித் திட்டம் (₹18,000 உதவி), ஒருங்கிணைய மையம் சகி (One Stop Centre Sakhi), தோழி தங்கும் விடுதிகள்.',
  },
  {
    path: '/gallery',
    outPath: 'gallery/index.html',
    title: 'புகைப்படங்கள் & களப்பணிகள் | மாற்றத்தை உருவாக்கும் பயணம் | நம்ம பாதுகாப்புத் தோழி',
    description: 'கிராமப்புற பெண்கள் பாதுகாப்பு விழிப்புணர்வு, மருத்துவ முகாம்கள், சட்டக் கருத்தரங்குகள் மற்றும் மகளிர் அதிகாரமளித்தல் களப்பணிப் புகைப்படங்கள்.',
    canonical: 'https://nammapathugaputhozhi.com/gallery',
    heading: 'மாற்றத்தை உருவாக்கும் நமது பயணம்! - அமைதி அறக்கட்டளை களப்பணிகள்',
    bodyText: 'கிராமப்புற பெண்கள் பாதுகாப்பு விழிப்புணர்வு பேரணி, மகளிர் சட்ட உரிமைகள் & POSH விளக்கக் கருத்தரங்கம், ரத்தசோகை பரிசோதனை முகாம்கள், மற்றும் 10 தோழிகள் கிராமக் குழு களப்பணிகள்.',
  },
  {
    path: '/join',
    outPath: 'join/index.html',
    title: 'தோழியாக இணையுங்கள் | உங்கள் கிராமத்திலும் பாதுகாப்புத் தோழி | Peace Trust',
    description: 'உங்கள் கிராமத்துப் பெண்களுக்கு ஆதரவாக நிற்க விருப்பமா? அமைதி அறக்கட்டளை அமைப்பின் 10 தோழிகள் பாதுகாப்பு வலையமைப்பில் தன்னார்வலராக இணையுங்கள்.',
    canonical: 'https://nammapathugaputhozhi.com/join',
    heading: 'உங்கள் கிராமத்திலும் ஒரு பாதுகாப்புத் தோழி உருவாகட்டும்!',
    bodyText: '18 வயதுக்கு மேற்பட்ட சேவை மனப்பான்மையுள்ள பெண்களை அமைதி அறக்கட்டளை அன்புடன் அழைக்கிறது. உங்கள் பகுதியில் பெண்களுக்கு ஆதரவாக நிற்க தன்னார்வலராக இணையுங்கள். நேரடி உதவி எண்: 9042580158.',
  },
  {
    path: '/contact',
    outPath: 'contact/index.html',
    title: 'தொடர்புக்கு | தலைமை அலுவலகம் & உதவி எண் | Peace Trust திண்டுக்கல்',
    description: 'அமைதி அறக்கட்டளை தலைமை அலுவலகம், திருச்சி ரோடு, திண்டுக்கல் மற்றும் அமைதி கல்வியியல் கல்லூரி முகவரி, தொலைபேசி எண்கள் மற்றும் உதவி எண்: 9042580158.',
    canonical: 'https://nammapathugaputhozhi.com/contact',
    heading: 'அமைதி அறக்கட்டளை தொடர்பு விவரங்கள் - Dindigul',
    bodyText: 'PEACE TRUST HEADQUARTERS: Near Police Housing Colony, Trichy Road, Dindigul – 624005, Tamil Nadu. Phone: +91 451-2410021, +91 8667265272. Email: info@peacetrust.in. Main Project Helpline: +91 9042580158.',
  },
  {
    path: '/privacy',
    outPath: 'privacy/index.html',
    title: 'தனியுரிமைக் கொள்கை | இரகசியத்தன்மை & பாதுகாப்பு நெறிமுறைகள் | Peace Trust',
    description: 'பாதிக்கப்பட்ட பெண்கள் மற்றும் குழந்தைகளின் இரகசியத்தன்மை, தனிநபர் தகவல் பாதுகாப்பு மற்றும் நெறிமுறை வழிகாட்டுதல்கள்.',
    canonical: 'https://nammapathugaputhozhi.com/privacy',
    heading: 'தனியுரிமை மற்றும் பாதுகாப்பு நெறிமுறைக் கொள்கை',
    bodyText: 'நம்ம பாதுகாப்புத் தோழி மற்றும் அமைதி அறக்கட்டளை அமைப்பில் பெண்களின் தனியுரிமை, POCSO சட்ட விதிகள் மற்றும் இரகசியத்தன்மைக்கு மிக உயர்ந்த முன்னுரிமை அளிக்கப்படுகிறது.',
  },
];

const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf-8');

console.log('Generating SEO prerendered static pages...');

routes.forEach((route) => {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace Open Graph title and desc
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // Inject prerendered semantic fallback content inside <div id="root">
  const prerenderedContent = `
    <div id="prerender-fallback" style="padding: 2rem; max-width: 1200px; margin: 0 auto; font-family: 'Noto Sans Tamil', system-ui, sans-serif; background-color: #FFF8FA; color: #2D1520;">
      <h1 style="color: #831843; font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">${route.heading}</h1>
      <p style="color: #633B4E; font-size: 1.125rem; line-height: 1.6; margin-bottom: 1.5rem;">${route.bodyText}</p>
      <div style="background: #FCE4EC; border-left: 4px solid #C2185B; padding: 1rem; margin-bottom: 2rem; border-radius: 0.75rem;">
        <strong style="color: #831843;">உதவி எண்: </strong> <a href="tel:+919042580158" style="color: #C2185B; font-weight: 800; text-decoration: underline;">+91 9042580158</a>
        <span style="margin: 0 10px;">|</span>
        <strong style="color: #831843;">அரசு அவசர எண்: </strong> <span style="color: #C2185B; font-weight: 700;">181 / 112</span>
      </div>
      <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #F8BBD0; font-size: 0.875rem; color: #633B4E;">
        PEACE TRUST, Near Police Housing Colony, Trichy Road, Dindigul – 624005, Tamil Nadu, India.
      </footer>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${prerenderedContent}</div>`);

  const targetPath = path.join(distDir, route.outPath);
  const targetDir = path.dirname(targetPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetPath, html, 'utf-8');
  console.log(`Prerendered: ${route.path} -> dist/${route.outPath}`);
});

console.log('All static route HTML files successfully created!');

