export interface GovtScheme {
  id: string;
  nameTa: string;
  nameEn: string;
  deptTa: string;
  deptEn: string;
  badgeTa: string;
  badgeEn: string;
  eligibilityTa: string[];
  eligibilityEn: string[];
  benefitsTa: string[];
  benefitsEn: string[];
  howToApplyTa: string[];
  howToApplyEn: string[];
  officialUrl: string;
  lastVerified: string;
}

export const govtSchemesData: GovtScheme[] = [
  {
    id: 'pudhumai-penn-scheme',
    nameTa: 'புதுமைப் பெண் திட்டம் (மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதித் திட்டம்)',
    nameEn: 'Pudhumai Penn Scheme (Higher Education Assurance Scheme)',
    deptTa: 'சமூக நலம் மற்றும் மகளிர் உரிமைத் துறை, தமிழ்நாடு அரசு',
    deptEn: 'Department of Social Welfare & Women Empowerment, Government of Tamil Nadu',
    badgeTa: 'உயர்கல்வி உதவித்தொகை',
    badgeEn: 'Higher Education Stipend',
    eligibilityTa: [
      'தமிழ்நாடு அரசுப் பள்ளிகளில் 6-ஆம் வகுப்பு முதல் 12-ஆம் வகுப்பு வரை படித்து தேர்ச்சி பெற்ற மாணவிகள்.',
      'அரசு நிதியுதவி பெறும் பள்ளிகளில் தமிழ் வழியில் பயின்ற மாணவிகளும் தகுதியுடையவர்கள்.',
      'பட்டப்படிப்பு (Undergraduate), தொழிற்கல்வி (Engineering, Medicine, Agriculture) அல்லது பட்டயப் படிப்பு (Diploma) பயிலும் மாணவிகள்.',
      'இடைநிற்றல் இன்றி கல்லூரியில் தொடர்ந்து பயில வேண்டும்.',
    ],
    eligibilityEn: [
      'Female students who studied continuously from Classes 6 to 12 in Tamil Nadu government schools.',
      'Students from government-aided schools studying in Tamil medium (under revised guidelines).',
      'Enrolled in recognized undergraduate, professional degree, or polytechnic diploma courses.',
      'Must maintain active college enrolment without unexcused discontinuance.',
    ],
    benefitsTa: [
      'மாதந்தோறும் ₹1,000 மாணவிகளின் வங்கிக் கணக்கில் நேரடியாக (DBT) செலுத்தப்படுகிறது.',
      'பட்டப்படிப்பு அல்லது தொழிற்கல்வி முடியும் வரை (3 முதல் 5 ஆண்டுகள் வரை) தொடர்ந்து வழங்கப்படும்.',
      'பெண் கல்வி இடைநிற்றலை தடுத்து அவர்களின் சுயசார்பையும் வேலைவாய்ப்பையும் உறுதி செய்கிறது.',
    ],
    benefitsEn: [
      'Direct monthly financial stipend of ₹1,000 credited straight to the student’s bank account (DBT).',
      'Assistance continues throughout the duration of the undergraduate or diploma course (3–5 years).',
      'Prevents early marriage and enables completion of university graduation.',
    ],
    howToApplyTa: [
      'மாணவிகள் பயிலும் கல்லூரி அலுவலகம் மற்றும் கல்லூரி கல்வி இயக்ககம் மூலமாக விண்ணப்பிக்கலாம்.',
      'புதுமைப் பெண் அதிகாரப்பூர்வ இணையதளத்தில் (penkalvi.tn.gov.in) கல்லூரி நிர்வாகம் மூலம் பதிவு செய்ய வேண்டும்.',
      'தேவையான ஆவணங்கள்: 10, 12-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ், 6-12 அரசுப் பள்ளி மாற்றுச் சான்றிதழ் (TC), ஆதார் அட்டை, மற்றும் வங்கிக் கணக்கு புத்தகம்.',
    ],
    howToApplyEn: [
      'Applications are verified and submitted through the student’s affiliated college nodal officer.',
      'Online enrolment is processed on the dedicated state portal (penkalvi.tn.gov.in).',
      'Required documents: 10th & 12th marksheets, Classes 6–12 school transfer certificate proving government school study, Aadhaar card, and student bank passbook.',
    ],
    officialUrl: 'https://penkalvi.tn.gov.in',
    lastVerified: 'November 2026',
  },
  {
    id: 'magalir-urimai-thittam',
    nameTa: 'கலைஞர் மகளிர் உரிமைத் திட்டம்',
    nameEn: 'Kalaignar Magalir Urimai Thittam (Basic Income for Women)',
    deptTa: 'சிறப்புத் திட்ட செயலாக்கத் துறை & வருவாய்த் துறை, தமிழ்நாடு அரசு',
    deptEn: 'Special Programme Implementation Department, Government of Tamil Nadu',
    badgeTa: 'மாதாந்திர உரிமைத் தொகை',
    badgeEn: 'Universal Basic Income',
    eligibilityTa: [
      'குடும்ப அட்டை (Ration Card)-யில் குடும்பத் தலைவியாகக் குறிப்பிடப்பட்டுள்ள 21 வயது பூர்த்தியடைந்த பெண்.',
      'குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்கு மிகாமல் இருக்க வேண்டும்.',
      'குடும்பம் 5 ஏக்கருக்கு குறைவான நன்செய் நிலம் அல்லது 10 ஏக்கருக்கு குறைவான புன்செய் நிலம் கொண்டிருக்க வேண்டும்.',
      'ஆண்டு மின் நுகர்வு 3,600 யூனிட்டுகளுக்கு குறைவாக இருக்க வேண்டும்.',
    ],
    eligibilityEn: [
      'Women recognized as the head of the family in the smart family ration card, aged 21 and above.',
      'Annual family household income must not exceed ₹2.5 lakh.',
      'Household must own less than 5 acres of wetland or 10 acres of dryland.',
      'Annual domestic electricity consumption must be below 3,600 units.',
    ],
    benefitsTa: [
      'மாதந்தோறும் ₹1,000 குடும்பத் தலைவிகளின் வங்கிக் கணக்கில் நேரடியாக செலுத்தப்படுகிறது.',
      'பெண்களின் உழைப்பை அங்கீகரித்து அவர்களின் வாழ்வாதாரத்தை உறுதி செய்கிறது.',
      'வாழ்நாள் முழுவதும் பொருளாதார தன்னம்பிக்கையை வளர்க்க உதவுகிறது.',
    ],
    benefitsEn: [
      'Guaranteed monthly direct benefit transfer of ₹1,000 to the eligible woman\'s bank account.',
      'Recognizes unpaid domestic labour and supports household financial stability.',
      'Fosters independent decision-making and emergency economic resilience.',
    ],
    howToApplyTa: [
      'நியாயவிலைக் கடை (Ration shop) அளவில் நடைபெறும் சிறப்பு முகாம்களில் விண்ணப்பப் படிவங்களை பூர்த்தி செய்து சமர்ப்பிக்கலாம்.',
      'ஆதார் எண், ரேஷன் அட்டை, மின் கட்டண அட்டை மற்றும் ஆதார் இணைக்கப்பட்ட வங்கிக் கணக்கு விபரங்களை இணைக்க வேண்டும்.',
      'விண்ணப்பத்தின் நிலையை kmut.tn.gov.in இணையதளத்தில் சரிபார்க்கலாம்.',
    ],
    howToApplyEn: [
      'Apply at organized registration camps held at designated fair price ration shops.',
      'Submit Aadhaar number, smart ration card, electricity consumer card, and bank account details.',
      'Track status and register appeals through the official state portal (kmut.tn.gov.in).',
    ],
    officialUrl: 'https://kmut.tn.gov.in',
    lastVerified: 'November 2026',
  },
  {
    id: 'muthulakshmi-reddy-scheme',
    nameTa: 'டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு நிதி உதவித் திட்டம்',
    nameEn: 'Dr. Muthulakshmi Reddy Maternity Benefit Scheme',
    deptTa: 'மக்கள் நல்வாழ்வு மற்றும் குடும்ப நலத் துறை, தமிழ்நாடு அரசு',
    deptEn: 'Health & Family Welfare Department, Government of Tamil Nadu',
    badgeTa: 'மகப்பேறு & தாய்மை உதவி',
    badgeEn: 'Maternity Nutrition Support',
    eligibilityTa: [
      '19 வயதுக்கு மேற்பட்ட ஏழ்மை நிலையில் உள்ள கர்ப்பிணித் தாய்மார்கள் (முதல் இரண்டு பிரசவங்களுக்கு மட்டும்).',
      'கர்ப்பம் உறுதி செய்யப்பட்ட 12 வாரங்களுக்குள் கிராம சுகாதார செவிலியரிடம் (VHN) பதிவு செய்திருக்க வேண்டும்.',
      'அரசு ஆரம்ப சுகாதார நிலையம் (PHC) அல்லது அரசு மருத்துவமனையில் மட்டுமே பிரசவம் நடைபெற வேண்டும்.',
    ],
    eligibilityEn: [
      'Expectant mothers living below the poverty line, aged 19 and above (for the first two deliveries).',
      'Must register pregnancy with the Village Health Nurse (VHN) within 12 weeks of conception.',
      'Institutional delivery must take place in a government PHC, taluk hospital, or medical college.',
    ],
    benefitsTa: [
      'மொத்தம் ₹18,000 மதிப்பிலான நிதி உதவி மற்றும் ஊட்டச்சத்துப் பொருட்கள்.',
      '₹14,000 ரொக்க உதவி தவணைகளாக தாயின் வங்கிக் கணக்கில் வரவு வைக்கப்படுகிறது.',
      '₹4,000 மதிப்புள்ள இரண்டு அம்மா ஊட்டச்சத்து பெட்டகங்கள் (Nutrition Kits - புரோட்டீன் மாவு, இரும்புச்சத்து டானிக், பேரிச்சம்பழம், நெய் போன்றவை) வழங்கப்படுகின்றன.',
    ],
    benefitsEn: [
      'Total composite assistance worth ₹18,000 across five milestone instalments.',
      'Direct cash transfer of ₹14,000 credited into the mother’s account across key milestones.',
      'Two maternal nutrition kits worth ₹4,000 containing health mix, iron syrup, dates, and ghee.',
    ],
    howToApplyTa: [
      'கர்ப்பம் உறுதி செய்யப்பட்டவுடன் அருகிலுள்ள அரசு ஆரம்ப சுகாதார நிலையத்தின் (PHC) கிராம சுகாதார செவிலியரை (VHN) அணுகவும்.',
      'PICME (Pregnancy and Infant Cohort Monitoring and Evaluation) எண்ணை பதிவு செய்து RCH ஐடி பெற வேண்டும்.',
      'ஆதார் அட்டை, தாய்-சேய் நல அட்டை (RCH Card) மற்றும் வங்கிக் கணக்கு புத்தகம் அவசியம்.',
    ],
    howToApplyEn: [
      'Register early with the Village Health Nurse (VHN) or Urban Health Nurse at the local PHC.',
      'Obtain an official 12-digit PICME number for health tracking and financial disbursements.',
      'Submit Aadhaar card, RCH booklet, and bank passbook with correct IFSC code.',
    ],
    officialUrl: 'https://picme.tn.gov.in',
    lastVerified: 'November 2026',
  },
  {
    id: 'one-stop-centre-sakhi',
    nameTa: 'ஒருங்கிணைய மையம் – சகி திட்டம் (One Stop Centre - Sakhi)',
    nameEn: 'One Stop Centre (Sakhi Scheme)',
    deptTa: 'மத்திய மகளிர் & குழந்தைகள் மேம்பாட்டு அமைச்சகம் & தமிழக சமூக நலத்துறை',
    deptEn: 'Ministry of Women and Child Development & Tamil Nadu Social Welfare Department',
    badgeTa: 'பாதுகாப்பு & அவசர மீட்பு',
    badgeEn: 'Crisis Redressal Hub',
    eligibilityTa: [
      'வன்முறை, குடும்பக் கொடுமை, பாலியல் துன்புறுத்தல், கடத்தல் மற்றும் ஆசிட் தாக்குதலால் பாதிக்கப்பட்ட எந்தவொரு பெண்ணும் (வயது வரம்பின்றி).',
      '18 வயதுக்குட்பட்ட பெண் குழந்தைகள் மற்றும் ஆதரவற்ற பெண்கள்.',
      'சாதி, மதம், வருமான வரம்பின்றி அனைத்து பெண்களுக்கும் முற்றிலும் இலவச சேவை.',
    ],
    eligibilityEn: [
      'Any woman or girl facing domestic violence, sexual assault, dowry harassment, trafficking, or crisis.',
      'Girls below 18 years linked with Child Welfare Committees (CWC).',
      'Open to all women regardless of age, caste, religion, marital status, or income bracket.',
    ],
    benefitsTa: [
      'ஒரே கூரையின் கீழ் 5 முக்கிய சேவைகள்: அவசர மருத்துவ உதவி, தற்காலிக பாதுகாப்பு தங்குமிடம் (5 நாட்கள் வரை), சட்ட உதவி, காவல்துறை உதவி மற்றும் உளவியல் ஆலோசனை.',
      '24 மணி நேர இலவச உதவி மற்றும் வழிகாட்டல்.',
      'பாதிக்கப்பட்ட பெண்ணின் பெயர் மற்றும் குடும்ப விபரங்கள் முழுமையான இரகசியமாக வைக்கப்படும்.',
    ],
    benefitsEn: [
      'Integrated under-one-roof assistance: immediate medical aid, police intervention, short-term shelter (up to 5 days), legal aid, and professional psycho-social counselling.',
      'Round-the-clock emergency assistance linked with the 181 Women Helpline.',
      'Complete confidentiality and sensitive trauma-informed survivor care.',
    ],
    howToApplyTa: [
      'அரசு பெண்கள் உதவி எண் 181-ஐ அழைக்கலாம் அல்லது மாவட்ட தலைமை அரசு மருத்துவமனை வளாகத்திலுள்ள சகி மையத்தை நேரடியாக அணுகலாம்.',
      'காவல்துறை அல்லது அமைதி அறக்கட்டளை போன்ற அங்கீகரிக்கப்பட்ட தொண்டு நிறுவனங்கள் மூலமாகவும் பரிந்துரை பெறலாம்.',
    ],
    howToApplyEn: [
      'Dial toll-free helpline 181 or visit the One Stop Centre located at the District Headquarters Hospital.',
      'Referrals can be facilitated via the local police station or Paadhukaappu Thozhi coordinators.',
    ],
    officialUrl: 'https://wcd.nic.in/schemes/one-stop-centre-scheme-1',
    lastVerified: 'November 2026',
  },
  {
    id: 'thozhi-hostels',
    nameTa: 'பணிபுரியும் பெண்களுக்கான தோழி விடுதிகள் (TNWDC Thozhi Hostels)',
    nameEn: 'Thozhi Working Women\'s Hostels',
    deptTa: 'தமிழ்நாடு மகளிர் மேம்பாட்டு நிறுவனம் (TNWDC)',
    deptEn: 'Tamil Nadu Women\'s Development Corporation (TNWDC)',
    badgeTa: 'பாதுகாப்பான தங்குமிடம்',
    badgeEn: 'Safe Accommodation',
    eligibilityTa: [
      'வேலைக்குச் செல்லும் பெண்கள், சுயதொழில் செய்யும் பெண்கள், மற்றும் உயர்கல்வி / போட்டித் தேர்வுகளுக்கு தயாராகும் மாணவிகள்.',
      'குடும்பத்தை விட்டு வெளியூர்களில் வந்து பணிபுரியும் பெண்கள்.',
    ],
    eligibilityEn: [
      'Working women, self-employed women, interns, and women studying for competitive examinations away from home.',
      'Women from rural areas seeking safe, affordable accommodation in urban and district centres.',
    ],
    benefitsTa: [
      '24 மணி நேர சிசிடிவி கண்காணிப்பு மற்றும் பெண் பாதுகாவலர்களுடன் கூடிய முழுமையான பாதுகாப்பு.',
      'மலிவான மற்றும் நியாயமான மாத வாடகையில் தூய்மையான நவீன அறைகள்.',
      'உணவு வசதி, சுத்திகரிக்கப்பட்ட குடிநீர், வைஃபை மற்றும் சலவை வசதிகள்.',
    ],
    benefitsEn: [
      'Round-the-clock CCTV surveillance, biometric access, and female security personnel.',
      'Clean, comfortable single, double, and dormitory rooms at subsidised state tariffs.',
      'Hygienic catering, purified RO drinking water, Wi-Fi connectivity, and laundry amenities.',
    ],
    howToApplyTa: [
      'தோழி விடுதிகளின் அதிகாரப்பூர்வ இணையதளமான thozhihostels.tn.gov.in மூலமாக ஆன்லைனில் பதிவு செய்யலாம்.',
      'பணிபுரியும் நிறுவனத்தின் அடையாள அட்டை, முகவரி சான்று மற்றும் ஆதார் அட்டை சமர்ப்பிக்க வேண்டும்.',
    ],
    howToApplyEn: [
      'Apply online via the official portal at thozhihostels.tn.gov.in.',
      'Upload company employment verification letter / ID card, Aadhaar card, and passport-size photo.',
    ],
    officialUrl: 'https://thozhihostels.tn.gov.in',
    lastVerified: 'November 2026',
  },
];

