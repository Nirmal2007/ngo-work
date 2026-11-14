
export interface TeamMember {
  id: string;
  nameTamil: string;
  nameEnglish: string;
  designationTamil: string;
  designationEnglish: string;
  organizationTamil?: string;
  organizationEnglish?: string;
  responsibilityTamil: string;
  responsibilityEnglish: string;
  image: string; // filename in /images/team/
  category: 'leadership' | 'coordination';
  order: number;
}

export const teamMembers: TeamMember[] = [
  // 1. COMMITTEE CHAIRPERSON
  {
    id: 'roobabalan',
    nameTamil: 'பா. ரூபபாலன்',
    nameEnglish: 'P. Rubabalan',
    designationTamil: 'வழிகாட்டுக் குழுத் தலைவர்',
    designationEnglish: 'Guidance Committee Chairperson',
    organizationTamil: 'தலைவர், அமைதி அறக்கட்டளை',
    organizationEnglish: 'Chairman, Peace Trust',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் ஒட்டுமொத்த வழிகாட்டுதல், தலைமைத்துவம் மற்றும் நிறுவன ரீதியான ஆதரவை வழங்குதல். திட்டத்தின் நோக்கங்கள் மற்றும் செயல்பாடுகள் சிறப்பாக முன்னெடுக்கப்படுவதை வழிநடத்துதல்.',
    responsibilityEnglish:
      'Provides overall leadership, institutional guidance and strategic direction for the Paadhukaappu Thozhi initiative. Supports the implementation and development of the mission in alignment with Peace Trust\'s objectives.',
    image: 'roobabalan.jpg',
    category: 'leadership',
    order: 1,
  },

  // 2. PROJECT COORDINATOR AND ADVISOR
  {
    id: 'srinivasan',
    nameTamil: 'டாக்டர் ஆ. சீனிவாசன்',
    nameEnglish: 'Dr. A. Srinivasan',
    designationTamil: 'ஒருங்கிணைப்புக்குழு தலைவர், மன நல ஆலோசகர், பெண்கள் பாதுகாப்பு குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Chairperson, Mental Health Counsellor & Women\'s Safety Committee Member',
    organizationTamil: 'மேலாளர், அமைதி அறக்கட்டளை',
    organizationEnglish: 'Manager, Peace Trust',
    responsibilityTamil:
      'திட்டத்தின் செயல்பாடுகளை ஒருங்கிணைத்தல், கிராம அளவிலான பாதுகாப்புத் தோழிகள் குழுக்களை வழிநடத்துதல், மனநல ஆலோசனை மற்றும் ஆதரவு நடவடிக்கைகளுக்கு வழிகாட்டுதல் மற்றும் திட்ட முன்னேற்றத்தை கண்காணித்தல்.',
    responsibilityEnglish:
      'Coordinates the project\'s activities, guides village-level Paadhukaappu Thozhi teams, provides direction for mental health support initiatives and oversees the overall progress of the mission.',
    image: 'srinivasan.jpg',
    category: 'leadership',
    order: 2,
  },

  // 3. SOCIAL WELFARE AND TRAINING OFFICER
  {
    id: 'pavithra',
    nameTamil: 'வே. பவித்ரா',
    nameEnglish: 'V. Pavithra',
    designationTamil: 'சமூக நலன் பயிற்சி அலுவலர்',
    designationEnglish: 'Social Welfare & Training Officer',
    organizationTamil: 'நம்ம பாதுகாப்பு தோழி அமைப்பின் ஒருங்கிணைப்பாளர்',
    organizationEnglish: 'Coordinator, Namma Paadhukaappu Thozhi',
    responsibilityTamil:
      'சமூக நலன் தொடர்பான செயல்பாடுகளை முன்னெடுத்தல், பாதுகாப்புத் தோழிகளுக்கான பயிற்சிகளை ஒருங்கிணைத்தல், பெண்களுக்கான விழிப்புணர்வு நிகழ்ச்சிகளைத் திட்டமிடுதல் மற்றும் கிராம அளவிலான சமூகப் பங்கேற்பை வலுப்படுத்துதல்.',
    responsibilityEnglish:
      'Coordinates social welfare activities, facilitates training programmes for Paadhukaappu Thozhis, supports women\'s awareness campaigns and strengthens community participation at the village level.',
    image: 'pavithra.jpg',
    category: 'leadership',
    order: 3,
  },

  // 4. PSYCHOLOGY COUNSELLOR
  {
    id: 'arockiamary',
    nameTamil: 'ஆரோக்கியமேரி ஆ',
    nameEnglish: 'Arockiamary A',
    designationTamil: 'உளவியல் ஆலோசகர்',
    designationEnglish: 'Psychology Counsellor',
    responsibilityTamil:
      'பெண்கள் மற்றும் சமூக உறுப்பினர்களுக்கு உளவியல் ஆலோசனை மற்றும் மனநல ஆதரவு வழங்குதல். மனநல விழிப்புணர்வை ஏற்படுத்துதல், உணர்வுப்பூர்வமான சவால்களை எதிர்கொள்ள வழிகாட்டுதல் மற்றும் தேவையான ஆதரவு சேவைகளுடன் அவர்களை இணைத்தல்.',
    responsibilityEnglish:
      'Provides psychological counselling and mental health support to women and community members. Promotes mental health awareness, guides individuals in addressing emotional challenges and connects them with appropriate support services.',
    image: 'arockiamary.jpg',
    category: 'coordination',
    order: 4,
  },


  // 5. COORDINATION COMMITTEE MEMBER - Bhuvaneswari
  {
    id: 'bhuvaneswari',
    nameTamil: 'புவனேஸ்வரி',
    nameEnglish: 'Bhuvaneswari',
    designationTamil: 'ஒருங்கிணைப்புக் குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Member',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் களப்பணிகள், சமூகத் தொடர்புகள், விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் திட்ட ஒருங்கிணைப்பு நடவடிக்கைகளுக்கு ஆதரவளித்தல்.',
    responsibilityEnglish:
      'Supports field-level activities, community engagement, awareness programmes and coordination efforts to strengthen the implementation of the Paadhukaappu Thozhi initiative.',
    image: 'bhuvaneswari.jpg',
    category: 'coordination',
    order: 5,
  },

  // 6. COORDINATION COMMITTEE MEMBER - Sangeetha
  {
    id: 'sangeetha',
    nameTamil: 'சங்கீதா',
    nameEnglish: 'Sangeetha',
    designationTamil: 'ஒருங்கிணைப்புக் குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Member',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் களப்பணிகள், சமூகத் தொடர்புகள், விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் திட்ட ஒருங்கிணைப்பு நடவடிக்கைகளுக்கு ஆதரவளித்தல்.',
    responsibilityEnglish:
      'Supports field-level activities, community engagement, awareness programmes and coordination efforts to strengthen the implementation of the Paadhukaappu Thozhi initiative.',
    image: 'sangeetha.jpg',
    category: 'coordination',
    order: 6,
  },

  // 7. COORDINATION COMMITTEE MEMBER - Rajeswari
  {
    id: 'rajeswari',
    nameTamil: 'ராஜேஸ்வரி',
    nameEnglish: 'Rajeswari',
    designationTamil: 'ஒருங்கிணைப்புக் குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Member',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் களப்பணிகள், சமூகத் தொடர்புகள், விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் திட்ட ஒருங்கிணைப்பு நடவடிக்கைகளுக்கு ஆதரவளித்தல்.',
    responsibilityEnglish:
      'Supports field-level activities, community engagement, awareness programmes and coordination efforts to strengthen the implementation of the Paadhukaappu Thozhi initiative.',
    image: 'rajeswari.jpg',
    category: 'coordination',
    order: 7,
  },

  // 8. COORDINATION COMMITTEE MEMBER - Muniyandi
  {
    id: 'Muniyandi',
    nameTamil: 'முனியாண்டி',
    nameEnglish: 'Muniyandi',
    designationTamil: 'ஒருங்கிணைப்புக் குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Member',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் களப்பணிகள், சமூகத் தொடர்புகள், விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் திட்ட ஒருங்கிணைப்பு நடவடிக்கைகளுக்கு ஆதரவளித்தல்.',
    responsibilityEnglish:
      'Supports field-level activities, community engagement, awareness programmes and coordination efforts to strengthen the implementation of the Paadhukaappu Thozhi initiative.',
    image: 'muniyandi.jpg',
    category: 'coordination',
    order: 8,
  },

  // 9. COORDINATION COMMITTEE MEMBER - Nathiya
  {
    id: 'Nathiya',
    nameTamil: 'நதியா',
    nameEnglish: 'Nathiya',
    designationTamil: 'ஒருங்கிணைப்புக் குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Member',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் களப்பணிகள், சமூகத் தொடர்புகள், விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் திட்ட ஒருங்கிணைப்பு நடவடிக்கைகளுக்கு ஆதரவளித்தல்.',
    responsibilityEnglish:
      'Supports field-level activities, community engagement, awareness programmes and coordination efforts to strengthen the implementation of the Paadhukaappu Thozhi initiative.',
    image: 'Nathiya.jpg',
    category: 'coordination',
    order: 9,
  },


  // 10. COORDINATION COMMITTEE MEMBER - Renuka Devi

  {
    id: 'renuka-devi',
    nameTamil: 'ரேணுகா தேவி',
    nameEnglish: 'Renuka Devi',
    designationTamil: 'ஒருங்கிணைப்புக் குழு உறுப்பினர்',
    designationEnglish: 'Coordination Committee Member',
    responsibilityTamil:
      'நம்ம பாதுகாப்புத் தோழி திட்டத்தின் களப்பணிகள், சமூகத் தொடர்புகள், விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் திட்ட ஒருங்கிணைப்பு நடவடிக்கைகளுக்கு ஆதரவளித்தல்.',
    responsibilityEnglish:
      'Supports field-level activities, community engagement, awareness programmes and coordination efforts to strengthen the implementation of the Paadhukaappu Thozhi initiative.',
    image: 'renuka-devi.jpg',
    category: 'coordination',
    order: 10,
  },
];
