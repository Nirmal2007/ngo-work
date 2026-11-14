import React, { useState } from 'react';
import {
  MapPin,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { galleryData, galleryCategories } from '../data/galleryData';
import { GalleryLightbox } from '../components/Gallery/GalleryLightbox';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const Gallery: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered gallery items
  const filteredItems =
    selectedCategory === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SEOHandler pageKey="gallery" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'களப்பணி பதிவுகள் & நிகழ்வுகள்' : 'Field Records & Community Conclaves'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.gallery.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.gallery.subheading}
          </p>

          {/* Survivor & Child Privacy Protection Note */}
          <div className="bg-rose-soft/80 border border-rose-border p-4 rounded-2xl text-xs text-charcoal text-left max-w-2xl mx-auto flex items-start gap-3 font-sans">
            <ShieldCheck className="w-5 h-5 text-rose-deep flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">{t.gallery.note}</p>
          </div>
        </section>

        {/* Category Filters Bar */}
        <section className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {galleryCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-rose-deep text-white shadow-soft scale-105'
                    : 'bg-white text-burgundy hover:bg-rose-soft border border-rose-border'
                }`}
              >
                {isTamil ? cat.labelTa : cat.labelEn}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid - Centered in mobile */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md sm:max-w-none mx-auto w-full">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border-2 border-rose-border/70 shadow-soft hover:shadow-card hover:border-rose-deep/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-full max-w-md mx-auto"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-[16/10] bg-rose-soft/40 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={isTamil ? item.altTamil : item.altEnglish}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category Pill on top */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-burgundy/90 text-white text-[10px] font-black backdrop-blur-xs">
                    {item.date}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-rose-deep/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white text-rose-deep shadow-soft">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] text-rose-deep font-bold">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-burgundy font-tamil group-hover:text-rose-deep transition-colors line-clamp-2">
                    {isTamil ? item.titleTamil : item.titleEnglish}
                  </h3>
                  <p className="text-xs text-charcoal-muted line-clamp-2 font-sans leading-relaxed">
                    {isTamil ? item.descriptionTamil : item.descriptionEnglish}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>

      {/* Accessible Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filteredItems}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
};
