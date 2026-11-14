export interface GalleryItem {
  id: string;
  image: string;
  titleTamil: string;
  titleEnglish: string;
  descriptionTamil: string;
  descriptionEnglish: string;
  date: string;
  location: string;
  category: 'safety-awareness' | 'legal-awareness' | 'medical-camps' | 'village-activities' | 'women-empowerment' | 'training-meetings';
  altTamil: string;
  altEnglish: string;
  isSamplePlaceholder?: boolean;
}

export interface GalleryCategory {
  key: string;
  labelTa: string;
  labelEn: string;
}

export const galleryCategories: GalleryCategory[] = [
  { key: 'all', labelTa: 'அனைத்து செயல்பாடுகள்', labelEn: 'All Activities' },
  { key: 'safety-awareness', labelTa: 'பாதுகாப்பு விழிப்புணர்வு', labelEn: 'Safety Awareness' },
  { key: 'legal-awareness', labelTa: 'சட்ட விழிப்புணர்வு முகாம்', labelEn: 'Legal Awareness' },
  { key: 'medical-camps', labelTa: 'மருத்துவ & ரத்தசோகை முகாம்', labelEn: 'Medical Camps' },
  { key: 'village-activities', labelTa: 'கிராம தோழிகள் களப்பணி', labelEn: 'Village Activities' },
  { key: 'women-empowerment', labelTa: 'மகளிர் அதிகாரமளித்தல்', labelEn: 'Women Empowerment' },
  { key: 'training-meetings', labelTa: 'பயிற்சி & ஆய்வுக் கூட்டங்கள்', labelEn: 'Training & Meetings' },
];

/**
 * GALLERY DATA REGISTRY
 * -------------------------------------------------------------
 * To add a new photo to the website:
 * 1. Place the JPG/PNG/WebP image in: public/gallery/<your-image-filename>.jpg
 * 2. Add an entry to the galleryData array below.
 * 3. Save the file. The gallery page will automatically render the new photo with filters and lightbox.
 */
export const galleryData: GalleryItem[] = [
  {
    id: 'gallery-01',
    image: '/gallery/village-awareness-assembly.jpg',
    titleTamil: 'கிராமப்புற பெண்கள் பாதுகாப்பு விழிப்புணர்வு பேரணி',
    titleEnglish: 'Rural Women Safety Awareness Assembly',
    descriptionTamil: 'பணியிட மற்றும் குடும்ப வன்முறைக்கு எதிரான பாதுகாப்பு உரிமைகள் குறித்து பெண்களிடம் எடுத்துரைத்த கள நிகழ்வு.',
    descriptionEnglish: 'Community assembly discussing women safety, domestic violence prevention, and mutual peer solidarity.',
    date: '2026-10-18',
    location: 'Sukkampatti Village, Dindigul',
    category: 'safety-awareness',
    altTamil: 'கிராமப்புற பெண்கள் பாதுகாப்பு விழிப்புணர்வு கூட்டம் - திண்டுக்கல்',
    altEnglish: 'Rural women participating in safety awareness assembly in Dindigul',
  },
  {
    id: 'gallery-02',
    image: '/gallery/legal-literacy-workshop.jpg',
    titleTamil: 'மகளிர் சட்ட உரிமைகள் & POSH சட்ட விளக்கக் கருத்தரங்கம்',
    titleEnglish: 'Women Legal Rights & POSH Act Workshop',
    descriptionTamil: 'பணியிடப் பாலியல் துன்புறுத்தல் தடுப்புச் சட்டம் மற்றும் இலவச சட்ட உதவி மையத்தை அணுகும் வழிமுறைகள் குறித்த பயிற்சி.',
    descriptionEnglish: 'Interactive workshop on POSH Act, free legal aid access, and filing petitions with confidence.',
    date: '2026-09-24',
    location: 'Peace College of Education, Vittalanayakanpatti',
    category: 'legal-awareness',
    altTamil: 'சட்ட உரிமைகள் மற்றும் POSH சட்டம் குறித்த விளக்கக் கருத்தரங்கம்',
    altEnglish: 'Legal literacy workshop on POSH Act for rural women and college students',
  },
  {
    id: 'gallery-03',
    image: '/gallery/anaemia-medical-screening.jpg',
    titleTamil: 'ரத்தசோகை பரிசோதனை & ஊட்டச்சத்து விழிப்புணர்வு முகாம்',
    titleEnglish: 'Anaemia Screening & Maternal Nutrition Camp',
    descriptionTamil: 'வளரிளம் பெண்கள் மற்றும் இளம் தாய்மார்களுக்கான ஹீமோகுளோபின் பரிசோதனை மற்றும் இரும்புச்சத்து உணவு வழிகாட்டல் முகாம்.',
    descriptionEnglish: 'Haemoglobin testing, iron-rich nutrition guidance, and menstrual health consultation camp.',
    date: '2026-09-08',
    location: 'Vembarpatti Panchayat, Dindigul',
    category: 'medical-camps',
    altTamil: 'பெண்கள் ரத்தசோகை பரிசோதனை மற்றும் ஊட்டச்சத்து விழிப்புணர்வு முகாம்',
    altEnglish: 'Community health checkup and anaemia screening for women',
  },
  {
    id: 'gallery-04',
    image: '/gallery/village-10-thozhi-formation.jpg',
    titleTamil: '10 தோழிகள் கிராமக் குழு அறிமுகம் & உறுதிமொழி ஏற்பு',
    titleEnglish: 'Formation of 10-Thozhi Village Safety Unit',
    descriptionTamil: 'கிராமப் பாதுகாப்பிற்காக தேர்ந்தெடுக்கப்பட்ட 10 பெண் தன்னார்வலர்கள் குழுவின் உறுதிமொழி மற்றும் முதற்கட்ட அறிமுகக் கூட்டம்.',
    descriptionEnglish: 'Inauguration and oath-taking of the 10-member peer volunteer safety team in the village.',
    date: '2026-08-15',
    location: 'Sirumalai Foothills Village',
    category: 'village-activities',
    altTamil: '10 தோழிகள் கிராமப் பாதுகாப்பு குழு உருவாக்கம் மற்றும் உறுதிமொழி',
    altEnglish: 'Village 10-member Thozhi team formation and community pledge',
  },
  {
    id: 'gallery-05',
    image: '/gallery/livelihood-shg-training.jpg',
    titleTamil: 'மகளிர் சுயஉதவிக்குழு தையல் மற்றும் வாழ்வாதார திறன் பயிற்சி',
    titleEnglish: 'Women SHG Tailoring & Livelihood Skill Program',
    descriptionTamil: 'பொருளாதார தன்னிறைவு மூலம் பெண்களின் பாதுகாப்பை உறுதிப்படுத்தும் தொழிற்பயிற்சி மற்றும் சுயதொழில் வழிகாட்டல்.',
    descriptionEnglish: 'Livelihood skill training promoting economic independence as a foundation for women safety.',
    date: '2026-07-28',
    location: 'Peace Trust Community Centre, Dindigul',
    category: 'women-empowerment',
    altTamil: 'சுயஉதவிக்குழு பெண்களுக்கான தையல் மற்றும் வாழ்வாதார பயிற்சி',
    altEnglish: 'Self-help group women participating in vocational livelihood training',
  },
  {
    id: 'gallery-06',
    image: '/gallery/listening-thozhi-session.jpg',
    titleTamil: 'மனநல ஆற்றுப்படுத்துதல்: கேட்டறியும் தோழி அமர்வு',
    titleEnglish: 'Empathetic Peer Listening: Listening Thozhi Circle',
    descriptionTamil: 'மன அழுத்தம் மற்றும் குடும்பச் சிக்கல்களைக் கடக்க பெண்களுக்கு கனிவான ஆறுதலும் ஆலோசனையும் வழங்கிய நிகழ்வு.',
    descriptionEnglish: 'Confidential peer-listening circle offering emotional solace and stress de-escalation for rural women.',
    date: '2026-07-11',
    location: 'Reddiarchatram Block, Dindigul',
    category: 'village-activities',
    altTamil: 'கேட்டறியும் தோழி மனநல ஆறுதல் கலந்துரையாடல்',
    altEnglish: 'Listening Thozhi peer support circle in a village setting',
  },
  {
    id: 'gallery-07',
    image: '/gallery/adolescent-cyber-safety.jpg',
    titleTamil: 'வளரிளம் பெண்களுக்கான இணையவழி பாதுகாப்பு & சைபர் விழிப்புணர்வு',
    titleEnglish: 'Adolescent Girl Cyber Safety & Digital Literacy Camp',
    descriptionTamil: 'சமூக வலைத்தளங்களில் நடக்கும் சைபர் சீண்டல்கள், மிரட்டல்கள் மற்றும் பாதுகாப்பு அமைப்புகள் குறித்த விழிப்புணர்வு.',
    descriptionEnglish: 'Orientation for young women on cyber bullying prevention, social media privacy, and reporting harassment.',
    date: '2026-06-20',
    location: 'Government Higher Secondary School, Dindigul District',
    category: 'safety-awareness',
    altTamil: 'வளரிளம் பெண்களுக்கான இணைய பாதுகாப்பு கருத்தரங்கம்',
    altEnglish: 'Cyber safety and digital harassment prevention workshop for young women',
  },
];
