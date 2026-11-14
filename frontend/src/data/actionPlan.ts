export interface TeamRole {
  count: string;
  titleTa: string;
  titleEn: string;
  roleTa: string;
  roleEn: string;
  icon: string;
  responsibilitiesTa: string[];
  responsibilitiesEn: string[];
}

export interface PillarArea {
  id: string;
  titleTa: string;
  titleEn: string;
  categoryTa: string;
  categoryEn: string;
  icon: string;
  summaryTa: string;
  summaryEn: string;
  pointsTa: string[];
  pointsEn: string[];
}

export interface CalendarWeek {
  week: string;
  weekTa: string;
  titleTa: string;
  titleEn: string;
  badgeTa: string;
  badgeEn: string;
  descTa: string;
  descEn: string;
  deliverablesTa: string[];
  deliverablesEn: string[];
  timing: string;
}

export const villageActionTeam: TeamRole[] = [
  {
    count: '1',
    titleTa: 'குழுத் தலைவி',
    titleEn: 'Team Leader',
    roleTa: 'கிராமக் குழுவை வழிநடத்துதல் மற்றும் அமைதி அறக்கட்டளை தலைமையகத்துடன் ஒருங்கிணைப்பு.',
    roleEn: 'Overall village coordination and primary liaison with Peace Trust headquarters.',
    icon: 'Crown',
    responsibilitiesTa: [
      'மாதாந்திர செயல்பாடுகளைத் திட்டமிட்டு கிராம அளவில் வழிநடத்துதல்',
      'அமைதி அறக்கட்டளை திட்ட அதிகாரிகளுக்கு வாராந்திர கள அறிக்கைகளை சமர்ப்பித்தல்',
      'அவசர கால வழக்குகளில் உடனடி கிராம அளவிலான தலையீடுகளை முன்னெடுத்தல்',
    ],
    responsibilitiesEn: [
      'Strategic planning and execution of monthly village activities',
      'Submitting regular field progress reports to Peace Trust coordinators',
      'Serving as the primary local focal point during critical distress interventions',
    ],
  },
  {
    count: '1',
    titleTa: 'துணைத் தலைவி',
    titleEn: 'Deputy Leader',
    roleTa: 'தலைவிக்கு உறுதுணையாக இருத்தல் மற்றும் கள ஆவணங்களை பராமரித்தல்.',
    roleEn: 'Assists the team leader, oversees record-keeping and rapid response.',
    icon: 'UserCheck',
    responsibilitiesTa: [
      'கிராம மட்ட கூட்டங்களின் வருகை மற்றும் நிகழ்வுகளை ஆவணப்படுத்துதல்',
      'தலைவி இல்லாத போது குழுவின் பணிகளை தடையின்றி நடத்துதல்',
      'பாதிக்கப்பட்ட பெண்களின் விவரங்களை பாதுகாப்பாக ஆவணப்படுத்துதல்',
    ],
    responsibilitiesEn: [
      'Maintaining confidential records and activity attendance documentation',
      'Assuming leadership duties in the absence of the Team Leader',
      'Assisting with on-ground crisis mobilization and victim support logistics',
    ],
  },
  {
    count: '2',
    titleTa: 'சட்டத் தோழிகள்',
    titleEn: 'Legal Thozhis',
    roleTa: 'அடிப்படை பெண்கள் சட்ட விழிப்புணர்வு மற்றும் சட்ட உதவி ஆணைக்குழு வழிகாட்டல்.',
    roleEn: 'Grassroots legal literacy and facilitation of free legal aid services.',
    icon: 'Scale',
    responsibilitiesTa: [
      'குடும்ப வன்முறை, வரதட்சணை மற்றும் பணியிட பாலியல் சட்டம் குறித்து எளிய விழிப்புணர்வு',
      'பாதிக்கப்பட்ட பெண்களை இலவச சட்ட உதவி மையங்களுடன் (DLSA) இணைத்தல்',
      'காவல் நிலையத்தில் புகார் அளிக்கச் செல்லும் பெண்களுக்கு தைரியமும் துணையும் அளித்தல்',
    ],
    responsibilitiesEn: [
      'Educating village women on domestic violence laws and POSH protections',
      'Facilitating applications for free legal counsel through the District Legal Services Authority',
      'Accompanying vulnerable women to police stations or legal offices for moral support',
    ],
  },
  {
    count: '2',
    titleTa: 'சுகாதாரத் தோழிகள்',
    titleEn: 'Health Thozhis',
    roleTa: 'பெண்கள் உடல்நலம், ஊட்டச்சத்து, ரத்தசோகை பரிசோதனை மற்றும் மருத்துவ முகாம்கள்.',
    roleEn: 'Community health monitoring, anaemia checks, and menstrual hygiene.',
    icon: 'HeartPulse',
    responsibilitiesTa: [
      'வளரிளம் பெண்கள் மற்றும் தாய்மார்களுக்கான ரத்தசோகை (Anaemia) விழிப்புணர்வு',
      'சானிட்டரி நாப்கின் பயன்பாடு மற்றும் பாதுகாப்பான கழிவு மேலாண்மை பயிற்சி',
      'கிராம ஆரம்ப சுகாதார நிலைய (PHC) செவிலியர்களுடன் இணைந்து சிறப்பு முகாம்கள் நடத்துதல்',
    ],
    responsibilitiesEn: [
      'Conducting periodic anaemia awareness and haemoglobin screening drives',
      'Promoting dignified menstrual hygiene management in schools and village centres',
      'Collaborating with Village Health Nurses (VHN) and Primary Health Centres',
    ],
  },
  {
    count: '2',
    titleTa: 'கல்வி & அரசுத் திட்ட தோழிகள்',
    titleEn: 'Education & Govt Schemes Thozhis',
    roleTa: 'பெண் குழந்தைகள் இடைநிற்றல் தடுப்பு மற்றும் அரசு நலத்திட்ட விண்ணப்ப உதவி.',
    roleEn: 'Preventing school dropout and facilitating access to social welfare schemes.',
    icon: 'GraduationCap',
    responsibilitiesTa: [
      'பள்ளிப் படிப்பை பாதியில் நிறுத்தும் பெண் குழந்தைகளைக் கண்டறிந்து மீண்டும் சேர்க்க உதவுதல்',
      'புதுமைப் பெண் மற்றும் மகளிர் உரிமைத் தொகை போன்ற திட்டங்களுக்கு வழிகாட்டல்',
      'சுயஉதவிக்குழுக்கள் (SHGs) மூலம் பெண்களுக்கு தொழில் கடன் வாய்ப்புகளை அறிமுகப்படுத்துதல்',
    ],
    responsibilitiesEn: [
      'Identifying adolescent girls at risk of dropping out and facilitating re-enrolment',
      'Guiding eligible applicants through Pudhumai Penn and higher education stipends',
      'Linking women to local self-help group microcredit and vocational skilling programs',
    ],
  },
  {
    count: '2',
    titleTa: 'மனநல ஆதரவுத் தோழிகள்',
    titleEn: 'Mental Health Support Thozhis',
    roleTa: 'கனிவான கேட்டறியும் தோழி அமர்வுகள் மற்றும் மனநல நிபுணர் பரிந்துரை.',
    roleEn: 'Empathetic "Listening Thozhi" sessions and psychological counseling referrals.',
    icon: 'Smile',
    responsibilitiesTa: [
      'குடும்ப பிரச்சனை மற்றும் தனிமையால் தவிக்கும் பெண்களுக்கு ஆறுதல் தருதல்',
      'வளரிளம் பெண்களுக்கு சமூக ஊடக பாதுகாப்பு மற்றும் பாலியல் சீண்டல் தடுப்பு விழிப்புணர்வு',
      'தீவிர மன அழுத்தம் உள்ள பெண்களை தகுதிவாய்ந்த மனநல ஆலோசகர்களிடம் பரிந்துரைத்தல்',
    ],
    responsibilitiesEn: [
      'Providing confidential emotional first-aid through empathetic peer listening',
      'Guiding adolescent girls on cyber safety, safe/unsafe touch, and stress reduction',
      'Facilitating timely referrals to certified psychologists and psychiatric counselors',
    ],
  },
];

export const actionPlanPillars: PillarArea[] = [
  {
    id: 'legal-aid',
    titleTa: 'A. சட்ட விழிப்புணர்வு & உதவி (Legal Aid)',
    titleEn: 'A. Legal Aid & Community Awareness',
    categoryTa: 'சட்ட விழிப்புணர்வு',
    categoryEn: 'Legal Awareness',
    icon: 'Scale',
    summaryTa: 'சட்ட விழிப்புணர்வை கிராமத்து பெண்களின் வீட்டு வாசலுக்கே கொண்டு செல்வது.',
    summaryEn: 'Demystifying statutory protections and extending legal assistance directly to rural households.',
    pointsTa: [
      'மாதாந்திர சட்ட விழிப்புணர்வு கூட்டங்களை கிராமப் பொது இடங்களில் நடத்துதல்',
      'பணியிட பாலியல் துன்புறுத்தல் தடுப்புச் சட்டம் (POSH Act 2013) குறித்த எளிய விளக்கங்கள்',
      'குடும்ப வன்முறை தடுப்புச் சட்டம் (DV Act 2005) மற்றும் பாதுகாப்பு உத்தரவுகள் வழிகாட்டல்',
      'குழந்தைத் திருமண தடைச் சட்டம் (PCMA 2006) குறித்த தீவிர விழிப்புணர்வு',
      'போக்சோ (POCSO Act 2012) குழந்தைகளுக்கான பாதுகாப்பு விழிப்புணர்வு அமர்வுகள்',
      'காவல்துறை மற்றும் மாவட்ட சட்டப் பணிகள் ஆணைக்குழுவை (DLSA) தைரியமாக அணுக பயிற்சி',
      'பாதிக்கப்பட்ட பெண்களின் அனைத்து புகார்களையும் தீவிர இரகசியத்தன்மையுடன் கையாளுதல்',
    ],
    pointsEn: [
      'Convening monthly legal literacy assemblies in central community gathering spots',
      'Clear explanations of the Sexual Harassment of Women at Workplace (POSH) Act 2013',
      'Educating families on the Protection of Women from Domestic Violence Act 2005',
      'Proactive village vigilance against child marriages under PCMA 2006',
      'Conducting child safety and Protection of Children from Sexual Offences (POCSO) workshops',
      'Orientation on lodging formal complaints at All-Women Police Stations and DLSA',
      'Strict, inviolable confidentiality protocols for every recorded grievance',
    ],
  },
  {
    id: 'medical-aid',
    titleTa: 'B. மருத்துவ ஆதரவு & நல்வாழ்வு (Medical Aid)',
    titleEn: 'B. Medical Aid & Health Camps',
    categoryTa: 'சுகாதாரம் & நல்வாழ்வு',
    categoryEn: 'Healthcare & Wellness',
    icon: 'HeartPulse',
    summaryTa: 'பெண்களின் ஊட்டச்சத்து, மாதவிடாய் சுகாதாரம் மற்றும் ஆரம்ப சுகாதார மைய இணைப்பு.',
    summaryEn: 'Targeting anaemia eradication, menstrual hygiene dignity, and primary care linkage.',
    pointsTa: [
      'கிராம மட்ட பெண்கள் நல்வாழ்வு மற்றும் ஊட்டச்சத்து விழிப்புணர்வு முகாம்கள்',
      'ரத்தசோகை (Anaemia) விழிப்புணர்வு, ஹீமோகுளோபின் அளவு பரிசோதனை மற்றும் இரும்புச்சத்து உணவு வழிகாட்டல்',
      'வளரிளம் பெண்களுக்கு அறிவியல் பூர்வமான மாதவிடாய் சுகாதாரக் கல்வி மற்றும் நாப்கின் விநியோகம்',
      'மார்பக புற்றுநோய் மற்றும் கர்ப்பப்பை வாய் புற்றுநோய் ஆரம்ப அறிகுறிகள் குறித்த விழிப்புணர்வு',
      'கர்ப்பிணி தாய்மார்களுக்கான ஊட்டச்சத்து மற்றும் அரசு ஆரம்ப சுகாதார நிலைய (PHC) பரிந்துரைகள்',
      'மருத்துவ உதவி தேவைப்படும் ஏழை எளிய பெண்களுக்கு அரசு மருத்துவமனைகளுடன் நேரடி இணைப்பு',
    ],
    pointsEn: [
      'Organizing periodic community wellness camps with certified healthcare practitioners',
      'Anaemia detection camps, dietary guidance, and iron-folic acid supplementation awareness',
      'Adolescent menstrual health workshops dismantling social taboos around menstruation',
      'Awareness on early symptoms of breast cancer and cervical cancer screening importance',
      'Antenatal care monitoring and government nutrition kit registration for pregnant women',
      'Facilitated patient referrals and navigation support at government taluk and district hospitals',
    ],
  },
  {
    id: 'govt-schemes',
    titleTa: 'C. அரசு நலத்திட்டங்கள் & வாழ்வாதாரம் (Government Schemes)',
    titleEn: 'C. Government Schemes & Livelihoods',
    categoryTa: 'அரசு நலத்திட்டங்கள்',
    categoryEn: 'Social Welfare Schemes',
    icon: 'Landmark',
    summaryTa: 'அரசு உதவித்தொகைகள், மகளிர் சுயஉதவிக்குழுக்கள் மற்றும் சுயதொழில் வழிகாட்டல்.',
    summaryEn: 'Unlocking state welfare benefits, higher education grants, and women micro-enterprises.',
    pointsTa: [
      'பெண்களுக்கான உயர்கல்வி உதவித்தொகைகள் (புதுமைப் பெண் திட்டம் போன்றவை) வழிகாட்டல்',
      'மகளிர் சுயஉதவிக்குழுக்கள் (SHGs) மூலம் பொருளாதார தன்னிறைவு பெற இணைத்தல்',
      'தையல், கைவினை, கால்நடை வளர்ப்பு உள்ளிட்ட வாழ்வாதார திறன் பயிற்சிகளுக்கு பரிந்துரை',
      'விதவை மற்றும் முதியோர் உதவித்தொகை, மாற்றுத்திறனாளி நலத்திட்ட விண்ணப்ப உதவி',
      'அரசு நலத்திட்டங்களுக்கு விண்ணப்பிக்க தேவையான ஆவணங்கள் மற்றும் இ-சேவை மையம் வழிகாட்டல்',
      'பெண்களின் பெயரில் வங்கிக் கணக்கு தொடங்குதல் மற்றும் சேமிப்பு விழிப்புணர்வு',
    ],
    pointsEn: [
      'Facilitating higher education financial aid applications (such as Pudhumai Penn Scheme)',
      'Integrating rural women into Tamil Nadu Women Development Corporation (TNWDC) self-help groups',
      'Connecting women to vocational livelihood programs: tailoring, organic farming, handicrafts',
      'Assistance in applying for widow pensions, destitute women certificates, and disability stipends',
      'Procedural handholding on acquiring birth, community, and income certificates via e-Sevai',
      'Promoting financial inclusion, independent zero-balance bank accounts, and digital literacy',
    ],
  },
  {
    id: 'mental-health',
    titleTa: 'D. மனநல ஆதரவு & ஆற்றுப்படுத்துதல் (Mental Health Support)',
    titleEn: 'D. Mental Health & Peer Support',
    categoryTa: 'மனநலம் & ஆறுதல்',
    categoryEn: 'Mental Health & Resilience',
    icon: 'Smile',
    summaryTa: 'கேட்டறியும் தோழி அமர்வுகள், இளம்பெண்கள் வழிகாட்டல் மற்றும் தகுதியான மனநல பரிந்துரைகள்.',
    summaryEn: 'Empathetic listening circles, adolescent cyber safety, and professional psychological referrals.',
    pointsTa: [
      'கிராம அளவில் "கேட்டறியும் தோழி" (Listening Thozhi) வாராந்திர ஆறுதல் அமர்வுகள்',
      'வளரிளம் பெண்களுக்கு சமூக ஊடக விழிப்புணர்வு, சைபர் பாதுகாப்பு மற்றும் தவறான தொடுதல் தடுப்பு பயிற்சி',
      'குடும்பப் பிரச்சனைகள், தனிமை மற்றும் மன உளைச்சலில் உள்ள பெண்களுக்கு உடனடி ஆறுதல்',
      'கடினமான மன அழுத்தத்தால் பாதிக்கப்பட்டவர்களை அரசு/அங்கீகரிக்கப்பட்ட மனநல ஆலோசகர்களிடம் பரிந்துரைத்தல்',
      'பெண்களுக்கு எதிரான வன்முறையால் பாதிக்கப்பட்டவர்களுக்கு தன்னம்பிக்கை மீட்டெடுக்கும் ஆற்றுப்படுத்துதல்',
      'தேசிய மனநல உதவி எண் (Tele-MANAS: 14416) குறித்த பரவலான விழிப்புணர்வு',
    ],
    pointsEn: [
      'Hosting regular "Listening Thozhi" open-door peer circles in safe village spaces',
      'Cyber-safety workshops for adolescent girls addressing online bullying and digital privacy',
      'Empathetic first-response de-escalation for women experiencing severe domestic turbulence',
      'Disciplined referrals to clinical psychologists and psychiatric social workers when necessary',
      'Trauma-informed rehabilitation and emotional resilience building for gender-based violence survivors',
      'Popularizing 24/7 national mental health helplines including Tele-MANAS (14416)',
    ],
  },
];

export const monthlyCalendarData: CalendarWeek[] = [
  {
    week: 'Week 1',
    weekTa: 'வாரம் 1',
    titleTa: 'கிராம களப்பார்வை & தேவைகள் கண்டறிதல்',
    titleEn: 'Village Visit & Community Needs Identification',
    badgeTa: 'கள ஆய்வு & திட்டமிடல்',
    badgeEn: 'Field Assessment & Survey',
    descTa: 'கிராமத்தின் விளிம்புநிலை குடியிருப்புப் பகுதிகளைப் பார்வையிட்டு, பாதுகாப்பு அச்சுறுத்தல்கள், பெண்கள் உடல்நலப் பிரச்சனைகள் மற்றும் பள்ளி இடைநிற்றல் நிலவரத்தைக் கண்டறிதல்.',
    descEn: 'Door-to-door village mapping to identify acute vulnerability pockets, safety concerns, adolescent school attendance gaps, and health priorities.',
    deliverablesTa: [
      'கிராம அளவிலான தேவைகள் மதிப்பீட்டுப் பட்டியல் தயாரித்தல்',
      'ஆபத்தில் உள்ள பெண்கள் மற்றும் வளரிளம் பெண்கள் குறித்த இரகசிய விழிப்புணர்வு பட்டியல்',
      'மாதாந்திர செயல்பாட்டுக்கான நேர அட்டவணை இறுதி செய்தல்',
    ],
    deliverablesEn: [
      'Village Community Needs Assessment log prepared',
      'Confidential identification of vulnerable households requiring priority follow-ups',
      'Calendar finalized with village elders, school teachers, and Anganwadi workers',
    ],
    timing: 'முதல் வாரம் (Days 1–7)',
  },
  {
    week: 'Week 2',
    weekTa: 'வாரம் 2',
    titleTa: 'மருத்துவ முகாம் & சட்ட விழிப்புணர்வு சந்திப்பு',
    titleEn: 'Medical Screening & Legal Awareness Assembly',
    badgeTa: 'சுகாதாரம் & சட்டம்',
    badgeEn: 'Health & Legal Literacy',
    descTa: 'ஆரம்ப சுகாதார நிலையப் பணியாளர்களுடன் இணைந்து ரத்தசோகை பரிசோதனை முகாமும், பெண்களுக்கு சட்டப் பாதுகாப்பு குறித்த சிறப்பு விழிப்புணர்வு அமர்வும் நடத்துதல்.',
    descEn: 'Collaborative medical checkup focusing on anaemia screening and adolescent nutrition, paired with an interactive legal rights orientation.',
    deliverablesTa: [
      'ஹீமோகுளோபின் பரிசோதனை மற்றும் இரும்புச்சத்து மாத்திரைகள் வழிகாட்டல்',
      'குடும்ப வன்முறை தடுப்புச் சட்டம் மற்றும் இலவச சட்ட உதவி குறித்த துண்டுப்பிரசுரம் விநியோகம்',
      'சட்ட ரீதியான உதவிகள் தேவைப்படும் பெண்களுடன் தனிப்பட்ட சந்திப்பு',
    ],
    deliverablesEn: [
      'Haemoglobin testing and iron supplement distribution coordination with PHC',
      'Educational brochures distributed on domestic violence laws and free legal aid',
      'Private one-on-one sessions with women seeking legal direction',
    ],
    timing: 'இரண்டாம் வாரம் (Days 8–14)',
  },
  {
    week: 'Week 3',
    weekTa: 'வாரம் 3',
    titleTa: 'அரசு நலத்திட்ட வழிகாட்டல் & சுயஉதவிக்குழு கூட்டம்',
    titleEn: 'Government Scheme Facilitation & SHG Conclave',
    badgeTa: 'வாழ்வாதாரம் & கல்வி',
    badgeEn: 'Schemes & Livelihood',
    descTa: 'புதுமைப் பெண், மகளிர் உரிமைத் தொகை மற்றும் அரசு கல்வி உதவித்தொகைகளுக்கு விண்ணப்பிக்க வழிகாட்டுதல்; பெண்களின் சுயதொழில் வாய்ப்புகளை மேம்படுத்துதல்.',
    descEn: 'Special session assisting women and students with e-Sevai documentation for government welfare stipends, and coordinating with local self-help groups.',
    deliverablesTa: [
      'உயர்கல்வி பயிலும் மாணவிகளுக்கான கல்வி ஊக்கத்தொகை விண்ணப்ப வழிகாட்டல்',
      'விதவை, கைவிடப்பட்ட பெண்கள் மற்றும் முதியோர் ஓய்வூதிய விண்ணப்பங்கள் சேகரிப்பு',
      'வாழ்வாதாரத் தொழில் பயிற்சிகளுக்கான விருப்பப் பட்டியல் தயார் செய்தல்',
    ],
    deliverablesEn: [
      'Application guidance for college students under the Pudhumai Penn scheme',
      'Collection and document verification for destitute women and widow pension schemes',
      'Enrolment drives for vocational skills (tailoring, food processing, handicrafts)',
    ],
    timing: 'மூன்றாம் வாரம் (Days 15–21)',
  },
  {
    week: 'Week 4',
    weekTa: 'வாரம் 4',
    titleTa: 'மனநல ஆலோசனை & மாதாந்திர ஆய்வுக் கூட்டம்',
    titleEn: 'Mental Health Peer Circles & Monthly Review',
    badgeTa: 'ஆற்றுப்படுத்துதல் & ஆய்வு',
    badgeEn: 'Peer Circles & Evaluation',
    descTa: 'கேட்டறியும் தோழி குழு அமர்வுகள் மூலம் மன அழுத்தத்தை போக்குதல், மற்றும் 10 தோழிகள் குழுவின் மாதாந்திர செயல்பாடுகளை ஆய்வு செய்து அறிக்கை தயாரித்தல்.',
    descEn: 'Convene empathetic peer-listening circles for emotional relief, followed by a monthly performance evaluation with Peace Trust coordinators.',
    deliverablesTa: [
      'மன உளைச்சலில் உள்ள பெண்களுக்கு தனிப்பட்ட ஆலோசனை மற்றும் வழிகாட்டல்',
      'நடப்பு மாதத்தில் தீர்க்கப்பட்ட பிரச்சனைகள் மற்றும் நிலுவையில் உள்ள வழக்குகளின் ஆய்வு',
      'அடுத்த மாதத்திற்கான செயல்திட்டம் தயாரித்து தலைமை அலுவலகத்திற்கு சமர்ப்பித்தல்',
    ],
    deliverablesEn: [
      'Confidential listening circles conducted for women in domestic turbulence',
      'Review of assisted cases, resolved grievances, and pending hospital/legal referrals',
      'Monthly synthesis report compiled and submitted to Peace Trust leadership',
    ],
    timing: 'நான்காம் வாரம் (Days 22–28)',
  },
];

export const specialActivityData = {
  titleTa: 'சிறப்பு நிகழ்வு: முதல் ஞாயிறு சட்ட விழிப்புணர்வு சந்திப்பு',
  titleEn: 'Special Routine: First Sunday Legal Literacy Circle',
  badgeTa: 'மாதாந்திர சிறப்பு நிகழ்வு',
  badgeEn: 'Monthly Flagship Event',
  descTa: 'ஒவ்வொரு மாதத்தின் முதல் ஞாயிற்றுக்கிழமை, கிராமத்தின் பெண்கள் மற்றும் வளரிளம் பெண்கள் ஒன்றிணைந்து பெண்களுக்கான சட்ட உரிமைகள், சமத்துவம் மற்றும் பாதுகாப்பு குறித்து வெளிப்படையாக விவாதிக்கும் பிரத்யேக களம்.',
  descEn: 'On the first Sunday of every calendar month, village women and adolescent girls gather for a facilitated discussion on constitutional rights, domestic peace, and mutual safety solidarity.',
  timingTa: 'ஒவ்வொரு மாதமும் முதல் ஞாயிறு | காலை 10:00 - 12:00',
  timingEn: 'Every First Sunday of the Month | 10:00 AM – 12:00 PM',
};

