export interface FAQItem {
  id: string;
  questionTa: string;
  questionEn: string;
  answerTa: string;
  answerEn: string;
  category: 'general' | 'help' | 'volunteer' | 'emergency';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'general',
    questionTa: 'நம்ம பாதுகாப்புத் தோழி என்றால் என்ன?',
    questionEn: 'What is Paadhukaappu Thozhi?',
    answerTa: 'நம்ம பாதுகாப்புத் தோழி என்பது திண்டுக்கல் அமைதி அறக்கட்டளை (PEACE TRUST) அமைப்பால் தொடங்கப்பட்ட ஒரு பெண்கள் பாதுகாப்பு மற்றும் சமூக அதிகாரமளித்தல் மக்கள் இயக்கமாகும். குடும்ப வன்முறை, பணியிட பாலியல் துன்புறுத்தல், ஊட்டச்சத்துக் குறைபாடு மற்றும் சமூக இன்னல்களை எதிர்கொள்ளும் பெண்களுக்கு உள்ளூர் மட்டத்திலேயே 10 தோழிகள் கொண்ட கிராம பாதுகாப்பு வளையம் மூலம் உதவி வழங்குவதே இதன் நோக்கம்.',
    answerEn: 'Paadhukaappu Thozhi is a women’s safety and empowerment grassroots initiative initiated by Peace Trust, Dindigul. It establishes trained 10-member peer volunteer "Thozhi Teams" across rural communities to provide empathetic guidance, legal literacy, healthcare referrals, and confidential crisis support.',
  },
  {
    id: 'faq-02',
    category: 'help',
    questionTa: 'யாரெல்லாம் இந்த உதவியை நாடலாம்?',
    questionEn: 'Who can seek help from this initiative?',
    answerTa: 'பணியிடத்திலோ, வீட்டிலோ, பொது இடங்களிலோ அல்லது இணையத்திலோ துன்புறுத்தல், அச்சுறுத்தல், வன்முறை அல்லது பாகுபாட்டை எதிர்கொள்ளும் எந்தவொரு பெண்ணும், வளரிளம் பெண்களும் மற்றும் பெண் குழந்தைகளும் தயக்கமின்றி எங்களை அணுகலாம். சாதி, மதம், சமூகப் பின்னணி பாரபட்சமின்றி அனைத்து பெண்களுக்கும் இச்சேவை திறக்கப்பட்டுள்ளது.',
    answerEn: 'Any woman, adolescent girl, or guardian representing a vulnerable child facing domestic violence, workplace sexual harassment (POSH), cyber stalking, child marriage, or severe mental distress can access our services regardless of caste, creed, or socio-economic background.',
  },
  {
    id: 'faq-03',
    category: 'help',
    questionTa: 'உதவி எண்ணை எவ்வாறு தொடர்பு கொள்வது?',
    questionEn: 'How do I contact the helpline?',
    answerTa: 'எங்கள் நேரடி உதவி எண் +91 9042580158. நீங்கள் உங்கள் அலைபேசியில் இருந்து நேரடியாக அழைக்கலாம் அல்லது வாட்ஸ்அப் செய்தி அனுப்பலாம். மேலும், திண்டுக்கல்லில் உள்ள அமைதி அறக்கட்டளை தலைமை அலுவலகத்தை நேரடியாக அணுகியும் ஆலோசனை பெறலாம்.',
    answerEn: 'You can directly call our primary helpline at +91 9042580158. The line is staffed by empathetic, trained counsellors. You can also send a WhatsApp inquiry or visit our Peace Trust headquarters in Dindigul in person.',
  },
  {
    id: 'faq-04',
    category: 'help',
    questionTa: 'இத்திட்டத்தில் என்னென்ன சேவைகள் கிடைக்கின்றன?',
    questionEn: 'What services are available?',
    answerTa: '1. இலவச சட்ட ஆலோசனை மற்றும் மாவட்ட சட்டப் பணிகள் ஆணைக்குழு (DLSA) இணைப்பு; 2. ரத்தசோகை மற்றும் ஊட்டச்சத்து மருத்துவ முகாம்கள்; 3. அரசு ஒருங்கிணைய மையம் (One Stop Centre) மற்றும் தங்குமிட வழிகாட்டல்; 4. கேட்டறியும் தோழி மனநல ஆறுதல்; 5. அரசு நலத்திட்டங்கள் மற்றும் கல்வி உதவித்தொகை விண்ணப்ப வழிகாட்டல்; 6. பணியிட மற்றும் காவல் நிலைய புகார் மனு வழிகாட்டல்.',
    answerEn: '1. Free legal literacy and DLSA court-counsel facilitation; 2. Healthcare referrals, anaemia testing, and menstrual hygiene camps; 3. Shelter guidance through government One Stop Centres (Sakhi); 4. Empathetic psychological listening and counselling referrals; 5. Social welfare scheme and Pudhumai Penn scholarship support; 6. Confidential harassment petition handholding.',
  },
  {
    id: 'faq-05',
    category: 'help',
    questionTa: 'எனது தகவல்கள் இரகசியமாக வைக்கப்படுமா?',
    questionEn: 'Is my personal information kept strictly confidential?',
    answerTa: 'ஆம், 100% இரகசியத்தன்மை உறுதி செய்யப்படுகிறது. எங்களை நாடும் பெண்களின் பெயரோ, குடும்ப விவரங்களோ அல்லது பிரச்சனை குறித்த தகவல்களோ பாதிக்கப்பட்ட பெண்ணின் வெளிப்படையான எழுத்துப்பூர்வ அனுமதியின்றி யாருடனும் பகிரப்படாது. பொதுவெளியிலோ அல்லது ஊடகங்களிலோ பாதிக்கப்பட்டவர்களின் அடையாளங்கள் ஒருபோதும் வெளியிடப்படாது.',
    answerEn: 'Yes, absolutely. We observe a strict, non-negotiable confidentiality protocol. A survivor’s identity, background, and personal narrative are never disclosed to third parties or published in any public medium without informed, written consent.',
  },
  {
    id: 'faq-06',
    category: 'help',
    questionTa: 'இங்கு எனக்கு சட்ட ஆலோசனை மற்றும் நீதிமன்ற உதவி கிடைக்குமா?',
    questionEn: 'Can I receive legal guidance through this initiative?',
    answerTa: 'ஆம். பெண்கள் பாதுகாப்புச் சட்டங்கள் (குடும்ப வன்முறை தடுப்புச் சட்டம், POSH சட்டம், போக்சோ) குறித்த தெளிவான வழிகாட்டலை எங்கள் சட்டத் தோழிகள் வழங்குவார்கள். மேலும் நீதிமன்றத்தில் இலவசமாக வழக்காட மாவட்ட சட்டப் பணிகள் ஆணைக்குழுவின் (DLSA) அரசு இலவச வழக்கறிஞர் சேவையைப் பெற முழுமையான விண்ணப்ப வழிகாட்டல் வழங்கப்படும்.',
    answerEn: 'Yes. Our Legal Thozhis explain statutory remedies under Indian law and guide you step-by-step to obtain free, state-sponsored legal representation through the District Legal Services Authority (DLSA).',
  },
  {
    id: 'faq-07',
    category: 'volunteer',
    questionTa: 'எனது கிராமத்திலும் தோழியாக இணைந்து செயல்பட முடியுமா?',
    questionEn: 'Can I join as a village Thozhi in my community?',
    answerTa: 'நிச்சயமாக! சமூக நலனில் அக்கறையுள்ள 18 வயதுக்கு மேற்பட்ட பெண்கள் எங்கள் "தோழியாக இணையுங்கள்" பக்கத்திலுள்ள விண்ணப்பப் படிவத்தை பூர்த்தி செய்து சமர்ப்பிக்கலாம். அமைதி அறக்கட்டளை உங்களுக்கு தேவையான சட்ட, சுகாதார மற்றும் ஆலோசனைப் பயிற்சிகளை இலவசமாக வழங்கி உங்கள் கிராமத்தில் 10 தோழிகள் குழுவை அமைக்க வழிகாட்டும்.',
    answerEn: 'Yes! Women aged 18 and above with a passion for community welfare are invited to apply via our "Join as a Thozhi" enrolment form. Peace Trust provides complete leadership, legal awareness, and healthcare orientation for all accepted volunteers.',
  },
  {
    id: 'faq-08',
    category: 'emergency',
    questionTa: 'தீவிர அவசர ஆபத்து வேளையில் நான் என்ன செய்ய வேண்டும்?',
    questionEn: 'What should I do in an immediate life-threatening emergency?',
    answerTa: 'உடனடி உயிராபத்து, தாக்குதல் அல்லது அவசர மீட்பு தேவைப்படும் சூழலில் தயங்காமல் உடனடியாக காவல் துறை அவசர எண் 112 அல்லது அரசு மகளிர் அவசர உதவி எண் 181-ஐ அழைக்கவும். அவசர மருத்துவ உதவிக்கு 108 ஆம்புலன்ஸை அழைக்கவும். அமைதி அறக்கட்டளை உதவி எண் ஆலோசனை மற்றும் வழிகாட்டலுக்கான சமூக அமைப்பாகும்; இது காவல் துறையையோ அல்லது அரசு அவசர சேவையையோ மாற்றீடு செய்யாது.',
    answerEn: 'In acute emergencies where there is imminent physical harm or crime in progress, dial National Emergency 112 or Women Helpline 181 immediately. For acute medical trauma, dial 108 for an ambulance. Paadhukaappu Thozhi provides non-profit community support and is not an alternative to statutory police and government first-responders.',
  },
];

