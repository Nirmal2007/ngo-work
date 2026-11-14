import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { seoRoutesConfig, PageSEOMetadata } from './seoConfig';
import { BASE_URL, organizationSchema, websiteSchema, createWebPageSchema } from './structuredData';

interface SEOHandlerProps {
  pageKey: keyof typeof seoRoutesConfig;
  customStructuredData?: object;
}

export const SEOHandler: React.FC<SEOHandlerProps> = ({ pageKey, customStructuredData }) => {
  const { language, isTamil } = useLanguage();
  const config: PageSEOMetadata = seoRoutesConfig[pageKey] || seoRoutesConfig.home;

  const title = isTamil ? config.titleTa : config.titleEn;
  const description = isTamil ? config.descTa : config.descEn;
  const keywords = isTamil ? config.keywordsTa : config.keywordsEn;
  const canonicalUrl = `${BASE_URL}${config.path === '/' ? '' : config.path}`;
  const ogImageUrl = config.ogImage ? `${BASE_URL}${config.ogImage}` : `${BASE_URL}/images/og-share.jpg`;

  const webPageSchema = createWebPageSchema(config.path, title, description, language);

  const schemasToInject = [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    ...(customStructuredData ? [customStructuredData] : []),
  ];

  return (
    <Helmet>
      {/* Primary HTML metadata */}
      <html lang={language} dir="ltr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Alternate language annotations */}
      <link rel="alternate" hrefLang="ta" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={isTamil ? 'நம்ம பாதுகாப்புத் தோழி - Peace Trust' : 'Paadhukaappu Thozhi - Peace Trust'} />
      <meta property="og:locale" content={isTamil ? 'ta_IN' : 'en_IN'} />
      <meta property="og:locale:alternate" content={isTamil ? 'en_IN' : 'ta_IN'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': schemasToInject,
        })}
      </script>
    </Helmet>
  );
};

