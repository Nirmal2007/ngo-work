export interface PageSEOMetadata {
  titleTa: string;
  titleEn: string;
  descTa: string;
  descEn: string;
  keywordsTa: string;
  keywordsEn: string;
  path: string;
  ogImage?: string;
  schemaType?: 'Organization' | 'WebPage' | 'FAQPage' | 'Service';
}

export const seoRoutesConfig: Record<string, PageSEOMetadata> = {
  home: {
    path: '/',
    titleTa: 'நம்ம பாதுகாப்புத் தோழி | பெண்கள் பாதுகாப்பு மற்றும் உதவி | Peace Trust',
    titleEn: 'Paadhukaappu Thozhi | Women\'s Safety & Support | Peace Trust',
    descTa: 'பெண்கள் பாதுகாப்பு, பணியிடத் துன்புறுத்தல், குடும்ப வன்முறை, சட்ட உதவி, மருத்துவ ஆதரவு மற்றும் ஆலோசனைக்காக Peace Trust முன்னெடுக்கும் நம்ம பாதுகாப்புத் தோழி முயற்சி. உதவி எண்: 9042580158.',
    descEn: 'Paadhukaappu Thozhi by Peace Trust provides guidance and support for women facing workplace harassment, domestic violence and other safety challenges. Call 9042580158.',
    keywordsTa: 'நம்ம பாதுகாப்புத் தோழி, பெண்கள் பாதுகாப்பு, பெண்கள் உதவி எண், பெண்கள் சட்ட உதவி, குடும்ப வன்முறை உதவி, பணியிட பாலியல் துன்புறுத்தல், திண்டுக்கல் பெண்கள் உதவி, பெண்கள் நல அமைப்பு',
    keywordsEn: 'Paadhukaappu Thozhi, Namma Pathukappu Thozhi, Women\'s Safety Tamil Nadu, Women\'s Helpline Dindigul, Women Legal Support Dindigul, Domestic Violence Support Tamil Nadu, Workplace Harassment Assistance, Peace Trust Dindigul',
    ogImage: '/images/og-share.jpg',
  },
  about: {
    path: '/about',
    titleTa: 'எங்கள் நோக்கம் | ஒரு பெண்ணின் கண்ணீருக்கு ஒரு தோழி | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'About Our Mission | A Trusted Companion | Paadhukaappu Thozhi - Peace Trust',
    descTa: 'அமைதி அறக்கட்டளை (PEACE TRUST) திண்டுக்கல் முன்னெடுக்கும் பெண்கள் பாதுகாப்பு, சமத்துவம் மற்றும் கிராமப்புற அதிகாரமளித்தல் இயக்கத்தின் தொலைநோக்கு மற்றும் கொள்கைகள்.',
    descEn: 'Learn about Peace Trust\'s flagship women\'s safety mission, core values of dignity and equality, and 40+ years of grassroots community welfare in Tamil Nadu.',
    keywordsTa: 'அமைதி அறக்கட்டளை திண்டுக்கல், பெண்கள் நோக்கம், கிராம பெண்கள் பாதுகாப்பு, பெண்கள் சமத்துவம், அதிகாரமளித்தல்',
    keywordsEn: 'About Peace Trust Dindigul, women safety mission, grassroots community welfare, gender equality Tamil Nadu',
    ogImage: '/images/og-share.jpg',
  },
  services: {
    path: '/services',
    titleTa: 'எங்கள் சேவைகள் | சட்ட, மருத்துவ & ஆலோசனை ஆதரவு | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'Our Services | Legal, Medical, Counselling & Shelter Support | Paadhukaappu Thozhi',
    descTa: 'சட்ட உதவி, மருத்துவ ஆதரவு, பாதுகாப்பான தங்குமிட வழிகாட்டல், மனநல ஆலோசனை, அரசு நலத்திட்டங்கள் மற்றும் புகார் வழிகாட்டல் சேவைகள்.',
    descEn: 'Comprehensive support services: Free legal aid facilitation, community medical camps, One Stop Centre shelter referrals, peer counselling, and POSH guidance.',
    keywordsTa: 'பெண்கள் சட்ட உதவி, மருத்துவ முகாம் திண்டுக்கல், பெண்கள் மனநல ஆலோசனை, சகி ஒருங்கிணைய மையம், POSH புகார் உதவி',
    keywordsEn: 'Free legal aid women, medical health camps, One Stop Centre referral, mental health peer counseling, POSH complaint support Tamil Nadu',
    ogImage: '/images/og-share.jpg',
  },
  actionPlan: {
    path: '/action-plan',
    titleTa: 'கிராம செயல் திட்டம் | ஒரு கிராமம் – ஒரு குழு – 10 தோழிகள் | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'Village Action Plan | 10-Thozhi Community Safety Model | Paadhukaappu Thozhi',
    descTa: 'கிராம மட்டத்தில் 10 தோழிகள் கொண்ட பாதுகாப்பு கட்டமைப்பு: சட்ட உதவி, சுகாதாரம், அரசு நலத்திட்டங்கள், மனநலம் மற்றும் மாதாந்திர செயல்பாட்டு காலண்டர்.',
    descEn: 'Empowering villages through a 10-member peer volunteer safety model covering legal awareness, anaemia testing, welfare schemes, and weekly interventions.',
    keywordsTa: 'கிராம செயல் திட்டம், 10 தோழிகள், கிராம பெண்கள் குழு, பெண்கள் விழிப்புணர்வு காலண்டர், முதல் ஞாயிறு சட்ட கூட்டம்',
    keywordsEn: 'Village Action Plan, 10 Thozhi model, grassroots women collective, rural safety framework, monthly activity calendar',
    ogImage: '/images/og-share.jpg',
  },
  team: {
    path: '/team',
    titleTa: 'வழிகாட்டும் குழு | Leadership & Guidance Team | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'Leadership & Guidance Team | Paadhukaappu Thozhi - Peace Trust',
    descTa: 'நம்ம பாதுகாப்புத் தோழி திட்டத்தை வழிநடத்தி, ஆலோசனை வழங்கி, சமூக அளவில் சிறப்பாகச் செயல்படுத்த உறுதுணையாக இருக்கும் வழிகாட்டும் குழு மற்றும் ஒருங்கிணைப்பாளர்கள்.',
    descEn: 'Meet the dedicated leadership, advisors, and coordination committee members guiding the Paadhukaappu Thozhi mission by Peace Trust.',
    keywordsTa: 'வழிகாட்டும் குழு, அமைதி அறக்கட்டளை தலைவர்கள், பெண்கள் பாதுகாப்பு ஒருங்கிணைப்பாளர்கள், திண்டுக்கல் வழிகாட்டுதல் குழு',
    keywordsEn: 'Leadership team, guidance committee, Peace Trust advisors, women safety coordinators Dindigul, Paadhukaappu Thozhi team',
    ogImage: '/images/og-share.jpg',
  },
  rights: {
    path: '/rights',
    titleTa: 'உங்கள் உரிமைகள் | பெண்கள் பாதுகாப்புச் சட்டங்கள் | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'Know Your Rights | Women Legal Protections & Acts in India | Paadhukaappu Thozhi',
    descTa: 'POSH சட்டம் 2013, குடும்ப வன்முறை தடுப்புச் சட்டம் 2005, குழந்தைத் திருமண தடைச் சட்டம் 2006 மற்றும் போக்சோ சட்டம் 2012 குறித்த எளிய வழிகாட்டல்.',
    descEn: 'Educational guide on women’s statutory rights: POSH Act 2013, Domestic Violence Act 2005, Prohibition of Child Marriage Act 2006, and POCSO 2012.',
    keywordsTa: 'பெண்கள் சட்ட உரிமைகள், POSH சட்டம், குடும்ப வன்முறை சட்டம், குழந்தை திருமணம் தடை சட்டம், போக்சோ சட்டம் எளிய விளக்கம்',
    keywordsEn: 'POSH Act 2013 guide, Domestic Violence Act 2005 explanation, Child Marriage Prohibition, POCSO Act 2012 rights India',
    ogImage: '/images/og-share.jpg',
  },
  schemes: {
    path: '/schemes',
    titleTa: 'அரசு நலத்திட்டங்கள் | புதுமைப் பெண் & மகளிர் உரிமைத் தொகை | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'Government Schemes | Pudhumai Penn & Women Welfare Schemes Tamil Nadu',
    descTa: 'புதுமைப் பெண் திட்டம், கலைஞர் மகளிர் உரிமைத் தொகை, டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவி, சகி மையம் மற்றும் தோழி விடுதிகள் விபரம்.',
    descEn: 'Verified Tamil Nadu women welfare schemes: Pudhumai Penn, Kalaignar Magalir Urimai Thittam, Dr. Muthulakshmi Reddy Maternity, Sakhi Centre, Thozhi Hostels.',
    keywordsTa: 'புதுமைப் பெண் திட்டம், கலைஞர் மகளிர் உரிமைத் தொகை, முத்துலட்சுமி ரெட்டி மகப்பேறு திட்டம், தோழி விடுதிகள் தமிழ்நாடு',
    keywordsEn: 'Pudhumai Penn scheme eligibility, Magalir Urimai Thittam application, Dr Muthulakshmi Reddy maternity benefit, Thozhi hostels Tamil Nadu',
    ogImage: '/images/og-share.jpg',
  },
  gallery: {
    path: '/gallery',
    titleTa: 'புகைப்படங்கள் & களப்பணிகள் | மாற்றத்தை உருவாக்கும் பயணம் | நம்ம பாதுகாப்புத் தோழி',
    titleEn: 'Gallery & Field Updates | Our Grassroots Journey | Paadhukaappu Thozhi - Peace Trust',
    descTa: 'கிராமப்புற பெண்கள் பாதுகாப்பு விழிப்புணர்வு, மருத்துவ முகாம்கள், சட்டக் கருத்தரங்குகள் மற்றும் மகளிர் அதிகாரமளித்தல் களப்பணிப் புகைப்படங்கள்.',
    descEn: 'View authentic photos and field reports from safety awareness rallies, anaemia testing camps, legal literacy circles, and women empowerment workshops.',
    keywordsTa: 'அமைதி அறக்கட்டளை புகைப்படங்கள், பெண்கள் விழிப்புணர்வு முகாம், திண்டுக்கல் கிராம களப்பணிகள், பாதுகாப்புத் தோழி புகைப்படங்கள்',
    keywordsEn: 'Peace Trust photos, women safety awareness gallery, Dindigul field camps, grassroots NGO photos Tamil Nadu',
    ogImage: '/images/og-share.jpg',
  },
  join: {
    path: '/join',
    titleTa: 'தோழியாக இணையுங்கள் | உங்கள் கிராமத்திலும் பாதுகாப்புத் தோழி | Peace Trust',
    titleEn: 'Join as a Thozhi | Become a Volunteer Companion | Paadhukaappu Thozhi',
    descTa: 'உங்கள் கிராமத்துப் பெண்களுக்கு ஆதரவாக நிற்க விருப்பமா? அமைதி அறக்கட்டளை அமைப்பின் 10 தோழிகள் பாதுகாப்பு வலையமைப்பில் தன்னார்வலராக இணையுங்கள்.',
    descEn: 'Enrol as a community volunteer in your village. Join Peace Trust to champion women\'s safety, legal rights, and health with structured leadership training.',
    keywordsTa: 'தோழியாக இணையுங்கள், பெண்கள் தன்னார்வலர் விண்ணப்பம், அமைதி அறக்கட்டளை தன்னார்வ தொண்டு, கிராம பெண்கள் பாதுகாப்பு பணி',
    keywordsEn: 'Volunteer for women safety, Join Peace Trust, grassroots community volunteer Tamil Nadu, rural women empowerment',
    ogImage: '/images/og-share.jpg',
  },
  contact: {
    path: '/contact',
    titleTa: 'தொடர்புக்கு | தலைமை அலுவலகம் & உதவி எண் | Peace Trust திண்டுக்கல்',
    titleEn: 'Contact Us | Headquarters & Helpline 9042580158 | Peace Trust Dindigul',
    descTa: 'அமைதி அறக்கட்டளை தலைமை அலுவலகம், திருச்சி ரோடு, திண்டுக்கல் மற்றும் அமைதி கல்வியியல் கல்லூரி முகவரி, தொலைபேசி எண்கள் மற்றும் உதவி எண்: 9042580158.',
    descEn: 'Contact Peace Trust Headquarters at Trichy Road, Dindigul, and Peace College of Education. Helpline: +91 9042580158, Phone: +91 451-2410021.',
    keywordsTa: 'அமைதி அறக்கட்டளை முகவரி, திண்டுக்கல் பெண்கள் உதவி எண், அமைதி கல்வியியல் கல்லூரி, தொடர்பு விவரங்கள்',
    keywordsEn: 'Peace Trust Dindigul contact, Trichy Road Dindigul office, women helpline 9042580158, Peace College of Education',
    ogImage: '/images/og-share.jpg',
  },
  privacy: {
    path: '/privacy',
    titleTa: 'தனியுரிமைக் கொள்கை | இரகசியத்தன்மை & பாதுகாப்பு நெறிமுறைகள் | Peace Trust',
    titleEn: 'Privacy & Protection Policy | Confidentiality & Ethics | Paadhukaappu Thozhi',
    descTa: 'பாதிக்கப்பட்ட பெண்கள் மற்றும் குழந்தைகளின் இரகசியத்தன்மை, தனிநபர் தகவல் பாதுகாப்பு மற்றும் நெறிமுறை வழிகாட்டுதல்கள்.',
    descEn: 'Our rigorous privacy policy and ethical protocols safeguarding the confidentiality, dignity, and identities of women and children seeking support.',
    keywordsTa: 'தனியுரிமைக் கொள்கை, இரகசியத்தன்மை உறுதிமொழி, பெண்கள் தகவல் பாதுகாப்பு',
    keywordsEn: 'Privacy policy, victim confidentiality, child protection protocols, data privacy NGO Tamil Nadu',
    ogImage: '/images/og-share.jpg',
  },
};

