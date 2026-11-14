# நம்ம பாதுகாப்புத் தோழி (Paadhukaappu Thozhi)
### Official Website for Peace Trust Women Safety Initiative

> **Brand**: நம்ம பாதுகாப்புத் தோழி (Paadhukaappu Thozhi)  
> **Parent Organization**: PEACE TRUST, Dindigul, Tamil Nadu, India  
> **Official Domain**: [https://nammapathugaputhozhi.com](https://nammapathugaputhozhi.com)  
> **Primary Project Helpline**: **+91 9042580158**  
> **Headquarters**: Near Police Housing Colony, Trichy Road, Dindigul – 624005, Tamil Nadu, India.

---

## 1. Project Overview
**நம்ம பாதுகாப்புத் தோழி (Paadhukaappu Thozhi)** is a flagship community safety and welfare initiative pioneered by **Peace Trust**, a non-governmental organization headquartered in Dindigul, Tamil Nadu, with over 40 years of grassroots service for marginalized communities.

This platform connects women and adolescent girls facing workplace harassment (POSH), domestic violence, cyber harassment, child marriage, anaemia, and discrimination with compassionate peer volunteers ("Thozhis"), free legal aid (DLSA), healthcare camps, and government welfare schemes.

---

## 2. Technical Stack
- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 6
- **Routing**: React Router DOM (v6)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS smooth transitions
- **SEO & Metadata**: React Helmet Async + Automated static SSG prerender script (`scripts/prerender.mjs`)
- **i18n**: Tamil-first bilingual context (`ta` default, `en` toggle with `localStorage` persistence)

---

## 3. Brand & Color Palette
- **Primary Color**: Deep Teal (`#075765`)
- **Secondary Color**: Dark Teal (`#034653`)
- **Accent Color**: Warm Yellow (`#FFC928`)
- **Background Color**: Warm Cream (`#FFF9F0`)
- **Highlight Color**: Coral (`#E76B62`)
- **Typography**: `Noto Sans Tamil`, `Noto Serif Tamil`, and `Inter`

---

## 4. Development & Production Commands

### Installation
```bash
npm install
```

### Local Development Server
```bash
npm run dev
```
Runs the local development server at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Executes:
1. `tsc` - TypeScript compilation check
2. `vite build` - Bundles and minifies client assets into `dist/`
3. `node scripts/prerender.mjs` - Prerenders static HTML files for all 10 public routes for SEO crawlers.

### Preview Production Build
```bash
npm run preview
```

---

## 5. How to Update the Gallery (Adding, Editing, Removing Photos)

The gallery is data-driven and requires no code changes to component logic.

### File Locations:
- **Image Files Directory**: `public/gallery/`
- **Gallery Registry**: `src/data/galleryData.ts`

### Steps to Add a New Photo:
1. Copy your photograph (in `.jpg`, `.png`, or `.webp` format) into `public/gallery/`.
   - Example: `public/gallery/medical-camp-dindigul-2026.jpg`
2. Open `src/data/galleryData.ts`.
3. Add a new object to the `galleryData` array:
   ```typescript
   {
     id: 'gallery-10',
     image: '/gallery/medical-camp-dindigul-2026.jpg',
     titleTamil: 'திண்டுக்கல் பெண்கள் மருத்துவ முகாம்',
     titleEnglish: 'Dindigul Community Women Health Camp',
     descriptionTamil: 'ரத்தசோகை பரிசோதனை மற்றும் தாய்-சேய் ஊட்டச்சத்து வழிகாட்டல்.',
     descriptionEnglish: 'Anaemia screening and maternal nutrition consultation drive.',
     date: '2026-11-20',
     location: 'Dindigul West Block',
     category: 'medical-camps', // categories: 'safety-awareness' | 'legal-awareness' | 'medical-camps' | 'village-activities' | 'women-empowerment' | 'training-meetings'
     altTamil: 'பெண்கள் மருத்துவ முகாம் திண்டுக்கல்',
     altEnglish: 'Community health camp for women in Dindigul',
   },
   ```
4. Save the file. The website will automatically render the new photo with filters and fullscreen lightbox support.

### To Remove a Photo:
- Delete the image file from `public/gallery/` and remove its corresponding entry from `src/data/galleryData.ts`.

> **Ethical & Legal Safeguards**: Never publish images that reveal the identities of child survivors (mandated by POCSO Act 2012) or survivors of domestic violence without prior informed written consent.

---

## 6. Technical SEO & Google Search Console Guide

### Verified Technical SEO Features Built In:
1. **Tamil-First Bilingual Metadata**: Dynamic titles, meta descriptions, and keywords in Tamil and English managed centrally via `src/seo/seoConfig.ts`.
2. **Canonical URLs**: Canonical link tags point to non-www canonical URL (`https://nammapathugaputhozhi.com/...`).
3. **Alternate Language Tags**: `hreflang="ta"`, `hreflang="en"`, and `hreflang="x-default"` annotations are embedded.
4. **Structured Data (JSON-LD)**:
   - `Organization` schema for PEACE TRUST
   - `WebSite` schema
   - `WebPage` schema on every route
   - `FAQPage` schema on FAQ content
5. **Static Prerendering**: Pre-generated static route HTML files inside `dist/` ensure search engine bots (Googlebot, Bingbot) receive fully rendered Tamil content even without executing JavaScript.
6. **Robots.txt & Sitemap**: Located at `public/robots.txt` and `public/sitemap.xml`.

### Google Search Console & DNS Setup:
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property and enter `nammapathugaputhozhi.com`.
3. Add the TXT verification record provided by Google into your DNS management portal (GoDaddy / Cloudflare / Hostinger).
4. Once verified, submit your sitemap:
   - Navigate to **Sitemaps** > Enter `sitemap.xml` > Click **Submit**.
5. Enable HTTPS enforcement and ensure all HTTP requests redirect to `https://nammapathugaputhozhi.com`.

---

## 7. Organization Centres

### 1. PEACE TRUST HEADQUARTERS
Near Police Housing Colony, Trichy Road, Dindigul – 624005, Tamil Nadu, India.  
- **Phone**: +91 451-2410021, +91 8667265272  
- **Email**: chairman@peacetrust.in, info@peacetrust.in  
- **Helpline**: +91 9042580158  

### 2. PEACE COLLEGE OF EDUCATION
Vittalanayakanpatti, Karur Road, NH-7, Sukkampatti Post, Dindigul – 624709, Tamil Nadu, India.  
- **Phone**: +91 451-2410021  

---

## 8. License & Privacy
© 2026 PEACE TRUST, Dindigul. All Rights Reserved.  
Dedicated to women's safety, constitutional equality, and community dignity.

