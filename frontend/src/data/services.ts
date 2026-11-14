export interface ServiceItem {
  id: string;
  icon: string;
  titleTa: string;
  titleEn: string;
  taglineTa: string;
  taglineEn: string;
  shortDescTa: string;
  shortDescEn: string;
  fullDescTa: string;
  fullDescEn: string;
  assistanceProvidedTa: string[];
  assistanceProvidedEn: string[];
  limitationsTa: string[];
  limitationsEn: string[];
  helplineNoticeTa: string;
  helplineNoticeEn: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'legal-assistance',
    icon: 'Scale',
    titleTa: 'சட்ட உதவி & வழிகாட்டல்',
    titleEn: 'Legal Assistance & Guidance',
    taglineTa: 'சட்ட விழிப்புணர்வு மற்றும் இலவச சட்டப் பணிகள் ஆணைக்குழு வழிகாட்டல்',
    taglineEn: 'Legal literacy and District Legal Services Authority facilitation',
    shortDescTa: 'குடும்ப வன்முறை, வரதட்சணை கொடுமை, சொத்துரிமை மறுப்பு மற்றும் விவாகரத்து விவகாரங்களில் தகுதியான சட்ட வழிகாட்டல்.',
    shortDescEn: 'Guiding women facing domestic abuse, dowry harassment, property denial, and marital disputes toward certified legal aid.',
    fullDescTa: 'சட்டங்களை அணுகுவது சாதாரண கிராமப்புற பெண்களுக்கு அச்சுறுத்தலாக இருக்கக்கூடாது. அமைதி அறக்கட்டளை, பாதிக்கப்பட்ட பெண்களுக்கு அவர்களின் அடிப்படை உரிமைகளை எளிய தமிழில் விளக்கி, மாவட்ட மற்றும் தாலுகா சட்டப் பணிகள் ஆணைக்குழு (DLSA / TLSA) மூலம் இலவச அரசு வழக்கறிஞர் சேவையைப் பெற வழிகாட்டுகிறது.',
    fullDescEn: 'Navigating the legal system should never be intimidating for rural or underprivileged women. Paadhukaappu Thozhi explains women\'s legal protections in clear terms and connects them with the District Legal Services Authority (DLSA) for free government-appointed legal counsel.',
    assistanceProvidedTa: [
      'பெண்களுக்கான உரிமைகள் மற்றும் சட்டப் பிரிவுகள் குறித்த எளிய ஆலோசனை',
      'இலவச சட்டப் பணிகள் ஆணைக்குழுவின் (DLSA) இலவச வழக்கறிஞர் உதவிக்கு விண்ணப்பித்தல்',
      'புகார் மனு தயாரிப்பதற்கான அடிப்படை வழிகாட்டல்',
      'குடும்ப வன்முறை தடுப்புச் சட்டம் (PWDVA 2005) சார்ந்த நடைமுறைகள் விளக்கம்',
    ],
    assistanceProvidedEn: [
      'Clear explanations of legal rights and statutory remedies available to women',
      'Assistance in applying for free court-appointed counsel through DLSA / TLSA',
      'Empathetic guidance on drafting and submitting petitions to authorities',
      'Procedural guidance regarding the Protection of Women from Domestic Violence Act',
    ],
    limitationsTa: [
      'அமைதி அறக்கட்டளை ஒரு நீதிமன்றமோ அல்லது தீர்ப்பு வழங்கும் அமைப்போ அல்ல',
      'வழக்குகளில் குறிப்பிட்ட சட்ட முடிவுகளுக்கோ அல்லது நீதிமன்றத் தீர்ப்புகளுக்கோ உத்தரவாதம் அளிக்க முடியாது',
      'தனிப்பட்ட தனியார் வழக்கறிஞர் கட்டணங்களை அமைப்பு ஏற்காது',
    ],
    limitationsEn: [
      'Peace Trust is not a court of law and does not adjudicate legal disputes',
      'We cannot guarantee specific case outcomes or judicial verdicts',
      'The organization does not finance private litigation expenses',
    ],
    helplineNoticeTa: 'இலவச சட்ட வழிகாட்டலுக்கு தொடர்பு கொள்ளவும்: 9042580158 அல்லது தேசிய சட்ட உதவி: 15100',
    helplineNoticeEn: 'For legal guidance, contact our helpline: 9042580158 or Free Legal Aid: 15100',
  },
  {
    id: 'medical-assistance',
    icon: 'HeartPulse',
    titleTa: 'மருத்துவ ஆதரவு & சுகாதார முகாம்',
    titleEn: 'Medical Assistance & Health Camps',
    taglineTa: 'ரத்தசோகை பரிசோதனை, மாதவிடாய் நல்வாழ்வு & அரசு மருத்துவமனை இணைப்பு',
    taglineEn: 'Anaemia screening, menstrual hygiene & government hospital referrals',
    shortDescTa: 'கிராமப்புற பெண்கள் மற்றும் வளரிளம் பெண்களுக்கான ஊட்டச்சத்து விழிப்புணர்வு, ரத்தசோகை பரிசோதனை மற்றும் மருத்துவப் பரிந்துரை.',
    shortDescEn: 'Community health screenings, menstrual hygiene education, anaemia testing, and primary healthcare centre referrals.',
    fullDescTa: 'பெண்களின் உடல்நலம் குடும்பத்தின் அஸ்திவாரம். பல கிராமப்புற பெண்கள் கடுமையான ரத்தசோகை (Anaemia), மாதவிடாய் கோளாறுகள் மற்றும் ஊட்டச்சத்துக் குறைபாட்டால் பாதிக்கப்படுகிறார்கள். கிராமத் தோழிகள் மூலம் ஆரம்ப சுகாதார நிலையங்கள் (PHC) மற்றும் அரசு தலைமை மருத்துவமனைகளுடன் இணைந்து விழிப்புணர்வு முகாம்களும் பரிந்துரைகளும் மேற்கொள்ளப்படுகின்றன.',
    fullDescEn: 'A woman’s physical health is the cornerstone of community well-being. Grassroots surveys indicate severe prevalence of anaemia and unaddressed reproductive health challenges. Our Health Thozhis collaborate with Primary Health Centres (PHCs) and government hospitals to organize screenings and medical referrals.',
    assistanceProvidedTa: [
      'கிராம மட்ட ரத்தசோகை மற்றும் ஊட்டச்சத்து விழிப்புணர்வு முகாம்கள்',
      'பருவமடைந்த வளரிளம் பெண்களுக்கு பாதுகாப்பான மாதவிடாய் சுகாதார விழிப்புணர்வு',
      'கர்ப்பிணி பெண்களுக்கு அரசு தாய்-சேய் நலத் திட்டங்கள் குறித்த வழிகாட்டல்',
      'அரசு ஆரம்ப சுகாதார நிலையங்கள் (PHC) மற்றும் அரசு மருத்துவக் கல்லூரிகளுக்கு பரிந்துரை',
    ],
    assistanceProvidedEn: [
      'Community-level haemoglobin awareness and anaemia screening drives',
      'Menstrual hygiene orientation and sanitary care education for adolescent girls',
      'Nutritional guidance and antenatal care registration assistance for expectant mothers',
      'Facilitated referrals to government Primary Health Centres and district hospitals',
    ],
    limitationsTa: [
      'அமைதி அறக்கட்டளை ஒரு முழுநேர மருத்துவமனையோ அல்லது அவசர தீவிர சிகிச்சைப் பிரிவோ அல்ல',
      'மருத்துவ மருந்துகளை நேரடியாக விநியோகிக்காது; அங்கீகரிக்கப்பட்ட மருத்துவர்களிடமே பரிந்துரைக்கும்',
      'அவசர உயிராபத்து வேளையில் உடனடியாக 108 ஆம்புலன்ஸை அழைக்க வேண்டும்',
    ],
    limitationsEn: [
      'Peace Trust does not run an acute inpatient clinic or intensive care hospital',
      'We do not dispense prescription medications; all medical care is referred to licensed doctors',
      'In acute medical emergencies, visitors must immediately call the 108 emergency ambulance',
    ],
    helplineNoticeTa: 'சுகாதார விழிப்புணர்வு ஆலோசனைகளுக்கு அழைக்கவும்: 9042580158',
    helplineNoticeEn: 'For community health support inquiries, call: 9042580158',
  },
  {
    id: 'shelter-support',
    icon: 'Home',
    titleTa: 'பாதுகாப்பான தங்குமிட வழிகாட்டுதல்',
    titleEn: 'Shelter Support & Government Links',
    taglineTa: 'அரசு ஒருங்கிணைய மையம் (One Stop Centre) & மகளிர் தங்கும் விடுதிகள் இணைப்பு',
    taglineEn: 'Guidance to government Sakhi One Stop Centres & short-stay shelter homes',
    shortDescTa: 'உடனடி ஆபத்தில் வீட்டை விட்டு வெளியேறும் பெண்களுக்கு அரசு அங்கீகரித்த குறுகிய கால தங்குமிடங்கள் குறித்த வழிகாட்டல்.',
    shortDescEn: 'Compassionate assistance linking women in distress to government-accredited short-stay homes and One Stop Centres.',
    fullDescTa: 'குடும்ப வன்முறை அல்லது தீவிர ஆபத்து காரணமாக வீட்டை விட்டு வெளியேற வேண்டிய கட்டாயத்தில் உள்ள பெண்களுக்கு உடனடியாக பாதுகாப்பான தங்குமிடம் தேவைப்படுகிறது. அமைதி அறக்கட்டளை, சமூக நலத்துறை நடத்தும் அரசு ஒருங்கிணைய மையங்கள் (One Stop Centre - Sakhi) மற்றும் அரசு அங்கீகாரம் பெற்ற குறுகிய கால தங்குமிடங்களுடன் (Short Stay Homes) பெண்களை பாதுகாப்பாக இணைக்கிறது.',
    fullDescEn: 'When women face extreme violence or eviction and have nowhere safe to go, finding immediate, dignified shelter is vital. Paadhukaappu Thozhi coordinates with the Social Welfare Department’s One Stop Centres (Sakhi) and registered non-profit short-stay shelters to help women find temporary refuge.',
    assistanceProvidedTa: [
      'மாவட்ட சமூக நல அலுவலகத்தின் அரசு ஒருங்கிணைய மையம் (One Stop Centre) வழிகாட்டல்',
      'அரசு அங்கீகாரம் பெற்ற குறுகிய கால மகளிர் தங்குமிடங்கள் குறித்த தகவல்',
      'பணிபுரியும் பெண்களுக்கான அரசு தோழி தங்கும் விடுதிகள் (TNWDC Thozhi Hostels) விபரம்',
      'பாதுகாப்பான போக்குவரத்துக்கான வழிகாட்டல்',
    ],
    assistanceProvidedEn: [
      'Coordination with District Social Welfare Department’s Sakhi One Stop Centre',
      'Information and trusted referrals to registered short-stay homes for women in crisis',
      'Guidance for working women to access state-run Thozhi Hostels',
      'Safe travel and transit advice during crises',
    ],
    limitationsTa: [
      'அமைதி அறக்கட்டளை நேரடி நிரந்தர தங்குமிட விடுதிகளை சொந்தமாக நடத்தவில்லை',
      'தங்குமிடம் வழங்குவது அரசு மற்றும் அங்கீகரிக்கப்பட்ட காப்பகங்களின் விதிமுறைகள் மற்றும் இடவசதிக்கு உட்பட்டது',
      'அனைத்து தங்குமிட சேர்க்கைகளுக்கும் உரிய அரசு ஆவணங்கள் மற்றும் வழிமுறைகள் அவசியமாகும்',
    ],
    limitationsEn: [
      'Peace Trust does not own or operate a direct institutional permanent shelter facility',
      'Shelter admission depends entirely on government protocols, identity verification, and shelter capacity',
      'Formal admission requires standard departmental intake and police/medical clearance as mandated by law',
    ],
    helplineNoticeTa: 'தங்குமிட வழிகாட்டுதல் உதவிக்கு: 9042580158 அல்லது பெண்கள் உதவி எண்: 181',
    helplineNoticeEn: 'For shelter guidance, dial: 9042580158 or Women Helpline: 181',
  },
  {
    id: 'counselling-support',
    icon: 'Smile',
    titleTa: 'மனநல ஆலோசனை & ஆறுதல்',
    titleEn: 'Counselling & Emotional Support',
    taglineTa: 'கேட்டறியும் தோழி (Listening Thozhi) & உளவியல் நிபுணர் பரிந்துரை',
    taglineEn: 'Empathetic "Listening Thozhi" sessions & clinical psychologist referrals',
    shortDescTa: 'மன அழுத்தம், குடும்பப் பிரச்சனைகள், தனிமை மற்றும் அதிர்ச்சியில் உள்ள பெண்களுக்கு கனிவான கேட்டறிதலும் உளவியல் வழிகாட்டலும்.',
    shortDescEn: 'Confidential peer listening, emotional first aid, stress relief, and qualified mental health practitioner referrals.',
    fullDescTa: 'மன அழுத்தம் மற்றும் வன்முறையால் பாதிக்கப்பட்ட பெண்களுக்கு முதலில் தேவைப்படுவது தன்னை நிதானமாகக் கேட்கும் ஒரு கனிவான தோழி. கிராம மட்டத்திலுள்ள "கேட்டறியும் தோழிகள்" எந்தவித தீர்ப்போ அல்லது குற்றச்சாட்டோ இன்றி பெண்களின் மனச்சுமையைக் கேட்கிறார்கள். தீவிர மனக்கவலை அல்லது உளவியல் பிரச்சனை இருப்பின் பதிவுபெற்ற மருத்துவ உளவியலாளர்களிடம் பரிந்துரைக்கப்படுகிறார்கள்.',
    fullDescEn: 'Survivors of trauma and emotional abuse often need someone who listens with unreserved empathy. Our trained "Listening Thozhis" provide non-judgmental emotional first-aid. For clinical trauma, post-traumatic stress, or chronic depression, cases are responsibly referred to certified mental health professionals.',
    assistanceProvidedTa: [
      'இரகசியத்தன்மையுடன் கூடிய முதற்கட்ட "கேட்டறியும் தோழி" கலந்துரையாடல்',
      'குடும்பச் சிக்கல்களுக்கான முதற்கட்ட சமரச வழிகாட்டல் மற்றும் ஆதரவு',
      'வளரிளம் பெண்களுக்கான மன அழுத்தம் மற்றும் தேர்வு பயம் நீக்கும் வழிகாட்டல்',
      'அரசு மற்றும் பதிவுபெற்ற தகுதிவாய்ந்த மனநல ஆலோசகர்களிடம் பரிந்துரை',
    ],
    assistanceProvidedEn: [
      'Strictly confidential, one-on-one compassionate peer listening sessions',
      'Emotional de-escalation and constructive familial dialogue support',
      'Adolescent girl stress alleviation, body positivity, and self-confidence building',
      'Referrals to verified clinical psychologists and psychiatric social workers when indicated',
    ],
    limitationsTa: [
      'கிராமத் தோழிகள் மனநல மருத்துவர்கள் அல்ல; அவர்கள் முதலுதவி ஆறுதலாளர்கள் மட்டுமே',
      'மனநோய்களுக்கான மருந்துகளைப் பரிந்துரைக்கும் அதிகாரம் தோழிகளுக்கு கிடையாது',
      'தற்கொலை எண்ணம் போன்ற தீவிர ஆபத்துகளில் உடனடியாக 104 அல்லது 112-ஐ அழைக்க வேண்டும்',
    ],
    limitationsEn: [
      'Community Thozhis are empathetic peer supporters, not licensed clinical psychiatrists',
      'Volunteers do not prescribe medications or perform clinical psychiatric diagnoses',
      'For acute suicidal ideation or psychiatric emergencies, call Tele-MANAS (14416) or 112 immediately',
    ],
    helplineNoticeTa: 'ஆறுதல் பெற எங்கள் தோழியை அழைக்கவும்: 9042580158',
    helplineNoticeEn: 'Speak to a compassionate companion: 9042580158',
  },
  {
    id: 'government-schemes',
    icon: 'Landmark',
    titleTa: 'அரசு நலத்திட்ட வழிகாட்டல்',
    titleEn: 'Government Scheme Assistance',
    taglineTa: 'புதுமைப் பெண், மகளிர் உரிமைத் தொகை & சுயஉதவிக்குழு வழிகாட்டல்',
    taglineEn: 'Pudhumai Penn, Magalir Urimai Thittam & livelihood connections',
    shortDescTa: 'தமிழக அரசின் முக்கிய பெண்கள் நலத்திட்டங்கள், உதவித்தொகைகள் மற்றும் வாழ்வாதார சுயதொழில் வாய்ப்புகளுக்கு வழிகாட்டல்.',
    shortDescEn: 'Facilitating access to active Tamil Nadu welfare schemes, higher education aid, and women SHG livelihood programs.',
    fullDescTa: 'அரசு பெண்களுக்காகப் பல பயனுள்ள திட்டங்களை அறிமுகப்படுத்தினாலும், பல கிராமப்புற பெண்களுக்கு விண்ணப்பிக்கும் வழிமுறைகள் தெரிவதில்லை. புதுமைப் பெண் திட்டம், கலைஞர் மகளிர் உரிமைத் தொகை, டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவித் திட்டம் போன்றவற்றிற்குத் தகுதியுள்ள பெண்கள் முறையாக விண்ணப்பிக்க எங்கள் தோழிகள் உதவுகிறார்கள்.',
    fullDescEn: 'While the state offers substantial welfare programs, marginalized women often miss out due to procedural opacity or lack of digital literacy. Our Education & Schemes Thozhis assist eligible women in understanding eligibility criteria, organizing documentation, and applying on designated government portals.',
    assistanceProvidedTa: [
      'தற்போது நடைமுறையிலுள்ள அரசுத் திட்டங்களின் தகுதி வரம்புகளை விளக்குதல்',
      'இ-சேவை மையம் மூலம் விண்ணப்பிக்க தேவையான ஆவணங்களை தயார் செய்ய உதவுதல்',
      'பெண் கல்வி ஊக்கத்தொகை மற்றும் முதியோர் உதவித்தொகை வழிகாட்டல்',
      'மகளிர் சுயஉதவிக்குழுக்கள் (SHGs) மற்றும் வாழ்வாதார திறன் பயிற்சிகளுடன் இணைப்பு',
    ],
    assistanceProvidedEn: [
      'Accurate breakdowns of eligibility criteria for active state and central schemes',
      'Assistance in gathering necessary identity and socio-economic certificates for e-Sevai centres',
      'Higher education assistance registration for girl students (Pudhumai Penn Scheme)',
      'Linkage to Tamil Nadu Women Development Corporation (TNWDC) self-help livelihood groups',
    ],
    limitationsTa: [
      'திட்டங்களுக்கான பயனாளிகளைத் தேர்வு செய்வது முழுமையாக சம்பந்தப்பட்ட அரசுத் துறைகளின் முடிவாகும்',
      'அமைதி அறக்கட்டளை அரசு சார்பாக எவ்வித பணப்பலன்களையும் நேரடியாக வழங்காது',
      'போலி அல்லது தகுதியற்ற விண்ணப்பங்களுக்கு வழிகாட்டப்பட மாட்டாது',
    ],
    limitationsEn: [
      'Final beneficiary approval and disbursement rests solely with the designated government department',
      'Peace Trust does not directly disburse government cash transfers or public subsidies',
      'We do not facilitate fraudulent or non-compliant applications under any circumstances',
    ],
    helplineNoticeTa: 'திட்ட விபரங்களுக்கு தொடர்பு கொள்ளவும்: 9042580158',
    helplineNoticeEn: 'For scheme facilitation assistance: 9042580158',
  },
  {
    id: 'complaint-assistance',
    icon: 'ShieldAlert',
    titleTa: 'துன்புறுத்தல் புகார் வழிகாட்டுதல்',
    titleEn: 'Complaint Assistance & Safety Protection',
    taglineTa: 'பணியிட பாலியல் துன்புறுத்தல், வரதட்சணை மற்றும் சைபர் குற்றங்கள் வழிகாட்டல்',
    taglineEn: 'Workplace harassment (POSH), domestic distress & cybercrime reporting',
    shortDescTa: 'பணியிடப் பாலியல் அச்சுறுத்தல், சமூக ஊடக அவதூறு மற்றும் குடும்ப வன்முறைக்கு எதிராக தைரியமாக புகார் அளிக்க வழிகாட்டல்.',
    shortDescEn: 'Safe, confidential guidance for lodging complaints with Internal Committees (POSH), cybercrime units, and all-women police.',
    fullDescTa: 'துன்புறுத்தலை சந்திக்கும் ஒரு பெண், புகாரளிக்கச் செல்லும் போது ஏற்படும் மனபயத்தையும் தயக்கத்தையும் போக்குவதே இப்பிரிவின் நோக்கம். பணியிடத்தில் POSH சட்டம் மூலமாக உள் புகார்க் குழுவை (IC) அணுகுவது, இணையவழி புகைப்படத் தவறான பயன்பாட்டிற்கு சைபர் க்ரைம் புகார் பதிவு செய்வது, மற்றும் மகளிர் காவல் நிலையங்களை அணுகுவது குறித்து முழுமையான இரகசிய ஆதரவு வழங்கப்படுகிறது.',
    fullDescEn: 'A woman facing harassment often fears retaliation, shame, or administrative indifference. We provide discreet, confidential handholding on reporting violations to Internal Complaints Committees (under POSH Act 2013), filing reports on the National Cyber Crime Portal (cybercrime.gov.in), or registering petitions at All-Women Police Stations (AWPS).',
    assistanceProvidedTa: [
      'பணியிட பாலியல் புகார் (POSH Internal Committee) மனு அளிப்பதற்கான ஆலோசனை',
      'இணையவழி பாலியல் மிரட்டல் மற்றும் போலி கணக்குகளுக்கு எதிரான சைபர் கிரைம் புகார் வழிகாட்டல்',
      'அனைத்து மகளிர் காவல் நிலையங்களை (AWPS) பயமின்றி அணுக உடனிருந்து ஆற்றுப்படுத்துதல்',
      'முழுமையான இரகசியத்தன்மை மற்றும் தகவல்கள் பாதுகாப்பு',
    ],
    assistanceProvidedEn: [
      'Confidential advice on formulating formal complaints to workplace Internal Committees under POSH',
      'Assistance in reporting non-consensual image sharing or cyber harassment on cybercrime.gov.in',
      'Moral support and procedural orientation when visiting All-Women Police Stations (AWPS)',
      'Guaranteed identity protection and discreet handling of sensitive distress calls',
    ],
    limitationsTa: [
      'அமைதி அறக்கட்டளை ஒரு சட்ட அமலாக்க முகமையோ அல்லது காவல் துறையோ அல்ல',
      'வழக்குகளை புலனாய்வு செய்யும் அதிகாரம் காவல்துறையிடம் மட்டுமே உள்ளது',
      'அவசர உயிராபத்து வேளையில் உடனடியாக 112 அல்லது 1091 (மகளிர் காவல்துறை)-ஐ அழைக்கவும்',
    ],
    limitationsEn: [
      'Peace Trust is not a law enforcement authority or police department',
      'Investigative powers and criminal prosecutions are conducted strictly by authorized police authorities',
      'In active life-threatening danger, victims must immediately dial 112 or 1091 (Women Police)',
    ],
    helplineNoticeTa: 'துன்புறுத்தல் குறித்த இரகசிய ஆலோசனைக்கு: 9042580158',
    helplineNoticeEn: 'Confidential harassment support helpline: 9042580158',
  },
];

