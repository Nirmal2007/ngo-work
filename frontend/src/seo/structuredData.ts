export const BASE_URL = 'https://nammapathugaputhozhi.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${BASE_URL}/#organization`,
  name: 'PEACE TRUST',
  alternateName: 'அமைதி அறக்கட்டளை திண்டுக்கல்',
  url: BASE_URL,
  logo: `${BASE_URL}/images/peace-trust-logo.svg`,
  description: 'A registered social welfare non-governmental organization working since 1984 for marginalized communities, women safety, health, and dignity in Tamil Nadu, India.',
  telephone: '+91-451-2410021',
  email: 'info@peacetrust.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Police Housing Colony, Trichy Road',
    addressLocality: 'Dindigul',
    addressRegion: 'Tamil Nadu',
    postalCode: '624005',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9042580158',
      contactType: 'Women Helpline and Community Support',
      areaServed: 'IN',
      availableLanguage: ['Tamil', 'English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-451-2410021',
      contactType: 'Headquarters Office',
      areaServed: 'IN',
      availableLanguage: ['Tamil', 'English'],
    },
  ],
  sameAs: [
    'https://nammapathugaputhozhi.com',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: 'நம்ம பாதுகாப்புத் தோழி - Paadhukaappu Thozhi',
  alternateName: 'Namma Pathukappu Thozhi',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
  inLanguage: ['ta', 'en'],
};

export const createWebPageSchema = (path: string, title: string, description: string, inLanguage: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}${path}#webpage`,
  url: `${BASE_URL}${path}`,
  name: title,
  description: description,
  isPartOf: {
    '@id': `${BASE_URL}/#website`,
  },
  inLanguage: inLanguage,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: inLanguage === 'ta' ? 'முகப்பு' : 'Home',
        item: `${BASE_URL}/`,
      },
      ...(path !== '/'
        ? [
          {
            '@type': 'ListItem',
            position: 2,
            name: title.split('|')[0].trim(),
            item: `${BASE_URL}${path}`,
          },
        ]
        : []),
    ],
  },
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

