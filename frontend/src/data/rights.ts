export interface LegalRight {
  id: string;
  year: string;
  titleTa: string;
  titleEn: string;
  shortNameTa: string;
  shortNameEn: string;
  purposeTa: string;
  purposeEn: string;
  whoItProtectsTa: string;
  whoItProtectsEn: string;
  explanationTa: string[];
  explanationEn: string[];
  howToSeekHelpTa: string[];
  howToSeekHelpEn: string[];
  officialUrl: string;
  officialSourceLabel: string;
}

export const legalRightsData: LegalRight[] = [
  {
    id: 'posh-act-2013',
    year: '2013',
    titleTa: 'பணியிடத்தில் பெண்கள் மீதான பாலியல் துன்புறுத்தல் (தடுப்பு, தடை மற்றும் தீர்வு) சட்டம், 2013',
    titleEn: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    shortNameTa: 'POSH சட்டம், 2013',
    shortNameEn: 'POSH Act, 2013',
    purposeTa: 'அனைத்து நிறுவனங்கள், தொழிற்கூடங்கள் மற்றும் அலுவலகங்களில் பெண்கள் பயமின்றி கண்ணியத்துடன் பணிபுரிய பாதுகாப்பான சூழலை உருவாக்குதல்.',
    purposeEn: 'To provide a safe, secure, and harassment-free working environment for women across formal and informal employment sectors.',
    whoItProtectsTa: 'நிரந்தர பணியாளர்கள், தற்காலிக ஊழியர்கள், ஒப்பந்தப் பணியாளர்கள், பயிற்சி ஊழியர்கள், வீட்டுப் பணியாளர்கள் மற்றும் பணியிடத்திற்கு வரும் பெண் பார்வையாளர்கள் உட்பட அனைத்து பெண்களும்.',
    whoItProtectsEn: 'All women employees—permanent, temporary, contractual, interns, daily wage earners, domestic workers, and visitors to a workplace.',
    explanationTa: [
      'பணியிடத்தில் விரும்பத்தகாத உடல் ரீதியான தொடுதல், பாலியல் ரீதியான வார்த்தைகள் அல்லது செய்கைகள், ஆபாசப் படங்கள் அல்லது குறுஞ்செய்திகள் காட்டுவது பாலியல் துன்புறுத்தலாகும்.',
      '10 அல்லது அதற்கு மேற்பட்ட பணியாளர்களைக் கொண்ட ஒவ்வொரு நிறுவனமும் கட்டாயமாக "உள் புகார்க் குழு" (Internal Complaints Committee - ICC) அமைக்க வேண்டும்.',
      'குழுவின் தலைவராக ஒரு மூத்த பெண் பணியாளரும், பெண்களின் உரிமைகளுக்காக களப்பணியாற்றும் ஒரு தன்னார்வ தொண்டு நிறுவனப் பிரதிநிதியும் இருக்க வேண்டும்.',
      '10-க்கும் குறைவான பணியாளர்கள் உள்ள நிறுவனங்கள் மற்றும் முறைசாரா துறைக்காக மாவட்ட ஆட்சித் தலைவர் தலைமையில் "உள்ளூர் புகார்க் குழு" (Local Complaints Committee - LCC) செயல்படுகிறது.',
      'துன்புறுத்தல் நடந்த 3 மாதங்களுக்குள் பாதிக்கப்பட்ட பெண் புகார் மனுவை சமர்ப்பிக்கலாம்.',
    ],
    explanationEn: [
      'Unwelcome physical touch, sexually coloured remarks, demanding sexual favours, or displaying pornography constitute actionable sexual harassment.',
      'Every employer with 10 or more employees is legally mandated to constitute an Internal Complaints Committee (ICC).',
      'The Presiding Officer of the ICC must be a senior woman employee, and the committee must include an independent external member from an NGO.',
      'For workplaces with fewer than 10 workers or informal sector establishments, complaints are heard by the district Local Committee (LC).',
      'A formal written complaint can be submitted within three months of the alleged incident (extendable by the committee under valid grounds).',
    ],
    howToSeekHelpTa: [
      'உங்கள் நிறுவனத்தின் உள் புகார்க் குழுவுக்கு (ICC) எழுத்துப்பூர்வமாக புகார் அளியுங்கள்.',
      'நிறுவனத்தில் குழு இல்லாவிட்டால் மாவட்ட சமூக நல அலுவலகத்தின் கீழ் உள்ள உள்ளூர் குழுவை (Local Committee) அணுகலாம்.',
      'மத்திய அரசின் இணையதளம் (SHe-Box - Sexual Harassment electronic Box) மூலமாகவும் ஆன்லைனில் புகார் அளிக்கலாம்.',
      'அமைதி அறக்கட்டளை உதவி எண்ணை (9042580158) அழைத்து புகார் மனு தயாரிப்பதற்கான வழிகாட்டலை இலவசமாகப் பெறலாம்.',
    ],
    howToSeekHelpEn: [
      'Submit a written complaint to your organization’s Internal Complaints Committee (ICC).',
      'If your organization lacks an ICC, contact the District Officer / Local Committee under the Social Welfare Department.',
      'Register an online grievance via the Ministry of Women and Child Development’s SHe-Box portal.',
      'Call the Paadhukaappu Thozhi helpline (9042580158) for confidential petition drafting guidance.',
    ],
    officialUrl: 'https://wcd.nic.in/act/sexual-harassment-women-workplace-preventionprohibition-and-redressal-act-2013',
    officialSourceLabel: 'Ministry of Women and Child Development (WCD), Government of India',
  },
  {
    id: 'pwdva-2005',
    year: '2005',
    titleTa: 'குடும்ப வன்முறையிலிருந்து பெண்களைப் பாதுகாக்கும் சட்டம், 2005',
    titleEn: 'Protection of Women from Domestic Violence Act, 2005 (PWDVA)',
    shortNameTa: 'குடும்ப வன்முறை தடுப்புச் சட்டம், 2005',
    shortNameEn: 'Domestic Violence Act, 2005',
    purposeTa: 'குடும்பத்திற்குள் பெண்களுக்கு ஏற்படும் உடல், வாய்மொழி, உணர்ச்சி, பாலியல் மற்றும் பொருளாதார வன்முறைகளுக்கு எதிராக உடனடி சட்ட நிவாரணம் வழங்குதல்.',
    purposeEn: 'To provide immediate civil and criminal protection to women facing domestic abuse within shared households.',
    whoItProtectsTa: 'மனைவி, தாய், சகோதரி, மகள், விதவை அல்லது ஒரே வீட்டில் சேர்ந்து வாழும் (shared household) குடும்ப உறவில் உள்ள எந்தவொரு பெண்ணும்.',
    whoItProtectsEn: 'Wives, mothers, daughters, sisters, widows, and female live-in partners sharing a household with the respondent.',
    explanationTa: [
      'உடல் ரீதியான தாக்குதல் மட்டுமின்றி, கடுமையான அவதூறான வார்த்தைகள், அவமதிப்பு, வரதட்சணை வற்புறுத்தல், குழந்தையில்லை என்று திட்டுவது போன்றவையும் சட்டப்படி குற்றமாகும்.',
      'பொருளாதார வன்முறை: பெண்ணின் வருமானத்தைப் பறிப்பது, அடிப்படை உணவு மற்றும் மருத்துவச் செலவுக்குப் பணம் தராமல் மறுப்பதும் குற்றமாகும்.',
      'பாதுகாப்பு உத்தரவு (Protection Order): குற்றவாளி பெண்ணை நெருங்கவோ, தொடர்பு கொள்ளவோ நீதிமன்றம் தடை விதிக்க முடியும்.',
      'இருப்பிட உத்தரவு (Residence Order): பெண்ணை அவர் வாழும் வீட்டில் இருந்து வலுக்கட்டாயமாக வெளியேற்றக் கூடாது என நீதிமன்றம் உத்தரவிடலாம்.',
      'பராமரிப்பு மற்றும் இழப்பீட்டுத் தொகை (Monetary Relief): பெண் மற்றும் அவரது குழந்தைகளின் வாழ்வாதாரத்திற்கான செலவை கணவர் வழங்க நீதிமன்றம் ஆணையிடும்.',
    ],
    explanationEn: [
      'The law recognizes physical harm, verbal insults, emotional humiliation, sexual assault, and economic deprivation as domestic violence.',
      'Economic abuse includes withholding financial support, alienating stridhan (personal jewellery), or denying food and medical care.',
      'Protection Orders: Courts can strictly prohibit the abuser from entering the victim\'s workplace, home, or communicating with her.',
      'Residence Orders: Prevents the abuser from dispossessing or throwing the woman out of the shared household.',
      'Monetary Relief: Empowers magistrates to order maintenance for food, shelter, clothes, and children’s education.',
    ],
    howToSeekHelpTa: [
      'மாவட்ட பாதுகாப்பு அலுவலரை (Protection Officer) அணுகி ' + 'உள்நாட்டு நிகழ்வு அறிக்கை' + ' (DIR) பதிவு செய்யலாம்.',
      'அருகிலுள்ள மாஜிஸ்திரேட் நீதிமன்றத்தில் நேரடியாகவோ அல்லது இலவச சட்ட உதவி வழக்கறிஞர் மூலமாகவோ மனு தாக்கல் செய்யலாம்.',
      'காவல்துறை அல்லது பெண்கள் உதவி எண் 181-ஐ தொடர்பு கொண்டு பாதுகாப்பு கோரலாம்.',
      'அமைதி அறக்கட்டளை தோழிகள் பாதிக்கப்பட்ட பெண்களுக்கு உடனடி ஆதரவையும் இலவச சட்ட ஆலோசனைப் பரிந்துரையையும் வழங்குவார்கள்.',
    ],
    howToSeekHelpEn: [
      'Contact the District Protection Officer (PO) to file a Domestic Incident Report (DIR).',
      'File an application directly before the Judicial Magistrate with the assistance of a DLSA legal aid advocate.',
      'Dial the toll-free Women Helpline 181 or contact the nearest All-Women Police Station.',
      'Reach Paadhukaappu Thozhi at 9042580158 for empathetic procedural guidance and safety planning.',
    ],
    officialUrl: 'https://wcd.nic.in/act/protection-women-domestic-violence-act-2005',
    officialSourceLabel: 'Legislative Department, Ministry of Law and Justice',
  },
  {
    id: 'pcma-2006',
    year: '2006',
    titleTa: 'குழந்தைத் திருமண தடைச் சட்டம், 2006',
    titleEn: 'Prohibition of Child Marriage Act, 2006 (PCMA)',
    shortNameTa: 'குழந்தைத் திருமண தடைச் சட்டம்',
    shortNameEn: 'Prohibition of Child Marriage Act',
    purposeTa: '18 வயதுக்குட்பட்ட பெண்களுக்கும் 21 வயதுக்குட்பட்ட ஆண்களுக்கும் திருமணம் செய்யப்படுவதை முற்றிலுமாகத் தடுத்து, குழந்தைகளின் கல்வி மற்றும் நல்வாழ்வை உறுதி செய்தல்.',
    purposeEn: 'To eradicate child marriages, safeguard adolescent physical and mental health, and ensure the right to education.',
    whoItProtectsTa: '18 வயது பூர்த்தியடையாத அனைத்து பெண் குழந்தைகளும் மற்றும் 21 வயது பூர்த்தியடையாத ஆண் பிள்ளைகளும்.',
    whoItProtectsEn: 'All female children below 18 years of age and male youths below 21 years of age.',
    explanationTa: [
      'குழந்தைத் திருமணம் செய்வது, ஏற்பாடு செய்வது, புரோகிதர் உள்ளிட்ட சடங்குகளை நடத்துவது அல்லது அதை ஊக்குவிப்பது கடுமையான ஜாமீனில் வெளிவர முடியாத குற்றமாகும்.',
      'குழந்தைத் திருமணத்தில் ஈடுபடும் பெற்றோர், உறவினர்கள் மற்றும் ஏற்பாட்டாளர்களுக்கு 2 ஆண்டுகள் வரை சிறைத் தண்டனையும் ₹1 லட்சம் வரை அபராதமும் விதிக்கப்படலாம்.',
      'குழந்தைத் திருமணம் செய்யப்பட்ட பெண் விரும்பினால், அவர் மேஜர் ஆன பிறகு அந்தத் திருமணத்தை நீதிமன்றத்தில் செல்லாது என அறிவிக்கக் கோரலாம்.',
      'மாவட்ட குழந்தைகள் பாதுகாப்பு அலுவலர் (DCPO) மற்றும் கிராம நிர்வாக அலுவலர் (VAO) குழந்தைத் திருமண தடை அலுவலர்களாக செயல்படுகிறார்கள்.',
    ],
    explanationEn: [
      'Performing, conducting, directing, abetting, or promoting a child marriage is a cognizable and non-bailable criminal offense.',
      'Parents, guardians, solemnizers, or participants can face up to two years of rigorous imprisonment and fines up to ₹1,00,000.',
      'A child marriage is voidable at the option of the contracting party who was a child at the time of marriage upon attaining adulthood.',
      'District Child Protection Officers (DCPO), Village Administrative Officers (VAO), and police are empowered to stop impending child marriages.',
    ],
    howToSeekHelpTa: [
      'குழந்தைத் திருமணம் நடைபெறவிருப்பது தெரிந்தால் உடனடியாக 1098 (Childline) அல்லது 112-ஐ அழைக்கவும் (உங்கள் விவரம் இரகசியமாக வைக்கப்படும்).',
      'கிராம நிர்வாக அலுவலர் (VAO) அல்லது வட்டார வளர்ச்சி அலுவலரிடம் (BDO) புகார் தெரிவிக்கலாம்.',
      'மாவட்ட குழந்தைகள் நலக் குழுவை (Child Welfare Committee - CWC) தொடர்பு கொள்ளலாம்.',
      'அமைதி அறக்கட்டளை கிராமத் தோழிகளிடம் தகவல் தெரிவித்தால் அவர்கள் உரிய அதிகாரிகளுடன் இணைந்து திருமணத்தை நிறுத்தி குழந்தைக்கு ஆதரவு தருவார்கள்.',
    ],
    howToSeekHelpEn: [
      'Dial 1098 (Childline) or 112 immediately if a child marriage is planned (caller identity is kept strictly confidential).',
      'Notify the Village Administrative Officer (VAO) or Block Development Officer (BDO).',
      'Alert the District Child Protection Unit (DCPU) or Child Welfare Committee (CWC).',
      'Inform Paadhukaappu Thozhi community workers for rapid administrative escalation and child welfare care.',
    ],
    officialUrl: 'https://wcd.nic.in/act/prohibition-child-marriage-act-2006',
    officialSourceLabel: 'Ministry of Women and Child Development, Government of India',
  },
  {
    id: 'pocso-act-2012',
    year: '2012',
    titleTa: 'பாலியல் குற்றங்களிலிருந்து குழந்தைகளைப் பாதுகாக்கும் சட்டம், 2012 (POCSO)',
    titleEn: 'Protection of Children from Sexual Offences (POCSO) Act, 2012',
    shortNameTa: 'போக்சோ (POCSO) சட்டம், 2012',
    shortNameEn: 'POCSO Act, 2012',
    purposeTa: '18 வயதுக்குட்பட்ட பெண் மற்றும் ஆண் குழந்தைகளை பாலியல் சீண்டல், பாலியல் வன்கொடுமை மற்றும் ஆபாசப் படங்களாக்கல் போன்ற குற்றங்களிலிருந்து பாதுகாத்து துரித நீதி வழங்குதல்.',
    purposeEn: 'To protect children below 18 years from sexual assault, sexual harassment, and child pornography with child-friendly judicial procedures.',
    whoItProtectsTa: '18 வயதுக்குட்பட்ட அனைத்து பெண் மற்றும் ஆண் குழந்தைகள் (பாலின வேறுபாடின்றி).',
    whoItProtectsEn: 'All individuals below the age of 18, regardless of gender.',
    explanationTa: [
      'குழந்தைகளிடம் முறையற்ற முறையில் தொடுதல், பாலியல் நோக்கத்துடன் பேசுவது அல்லது சமிக்ஞை செய்வது, மற்றும் ஆபாசப் படங்களை காட்டுவது தண்டனைக்குரிய தீவிர குற்றங்களாகும்.',
      'குழந்தை மீதான பாலியல் குற்றங்கள் குறித்து தகவல் தெரிந்த எவரும் அதை காவல்துறைக்கு தெரிவிப்பது கட்டாயக் கடமையாகும்; மறைப்பது சட்டப்படி குற்றமாகும்.',
      'குழந்தையின் வாக்குமூலத்தை பதிவு செய்யும் போது சீருடை அணியாத காவலரே வர வேண்டும்; காவல் நிலையத்தில் வைத்து விசாரிக்கக் கூடாது; குழந்தையின் பெற்றோரின் முன்னிலையிலேயே பதிவு செய்ய வேண்டும்.',
      'பாதிக்கப்பட்ட குழந்தையின் பெயர், புகைப்படம், பள்ளி அல்லது முகவரி போன்ற எந்தவொரு அடையாளத்தையும் ஊடகங்களிலோ சமூக வலைத்தளங்களிலோ வெளியிடுவது மிகக்கடுமையான குற்றமாகும்.',
      'வழக்குகளை விரைவாக விசாரிக்க சிறப்பு நீதிமன்றங்கள் (Special POCSO Courts) அமைக்கப்பட்டுள்ளன.',
    ],
    explanationEn: [
      'Penalizes penetrative sexual assault, aggravated sexual assault, sexual harassment, and use of children for pornographic purposes.',
      'Mandatory reporting: Anyone with knowledge of a sexual offense against a child must report it to the Special Juvenile Police Unit (SJPU) or police.',
      'Child-friendly investigation: Police officers must not wear uniforms during statements, and examinations occur at the child\'s residence.',
      'Strict ban on victim identity disclosure: Publishing a child survivor\'s name, photograph, school, or address is punishable with imprisonment.',
      'Fast-track special courts handle trials in-camera to protect the child from intimidating courtroom environments.',
    ],
    howToSeekHelpTa: [
      'குழந்தைகள் உதவி எண் 1098 அல்லது அவசர உதவி எண் 112-ஐ உடனடியாக தொடர்பு கொள்ளவும்.',
      'அருகிலுள்ள காவல் நிலையத்திலுள்ள குழந்தைகள் சிறப்பு சிறார் காவல் பிரிவை (SJPU) அணுகலாம்.',
      'மாவட்ட குழந்தைகள் நலக் குழுவிடம் (CWC) பாதுகாப்பு மற்றும் மறுவாழ்வு கோரலாம்.',
      'அமைதி அறக்கட்டளை சட்ட மற்றும் மருத்துவ வழிகாட்டல் குழுவினர் பாதிக்கப்பட்ட குழந்தைக்கு தேவையான உடனடி மருத்துவ மற்றும் மனநல ஆதரவை ஒருங்கிணைக்க உதவுவர்.',
    ],
    howToSeekHelpEn: [
      'Call Childline 1098 or Police 112 immediately for crisis intervention.',
      'Approach the Special Juvenile Police Unit (SJPU) at the local police station.',
      'Petition the District Child Welfare Committee (CWC) for care, protection, and rehabilitation.',
      'Contact Paadhukaappu Thozhi for supportive guidance linking the family to registered medical and psychosocial support.',
    ],
    officialUrl: 'https://wcd.nic.in/act/protection-children-sexual-offences-pocso-act-2012',
    officialSourceLabel: 'Ministry of Law and Justice, Government of India',
  },
];

