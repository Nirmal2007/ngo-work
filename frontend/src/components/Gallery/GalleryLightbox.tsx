import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '../../data/galleryData';
import { useLanguage } from '../../i18n/LanguageContext';

interface GalleryLightboxProps {
  images?: GalleryItem[];
  initialIndex?: number;
  item?: GalleryItem | null;
  isOpen?: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  initialIndex = 0,
  item: propItem,
  isOpen = true,
  onClose,
  onPrev: propOnPrev,
  onNext: propOnNext,
}) => {
  const { isTamil, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const activeItem = images && images.length > 0 ? images[currentIndex] : propItem;
  const canGoPrev = images && images.length > 1 ? currentIndex > 0 : Boolean(propOnPrev);
  const canGoNext = images && images.length > 1 ? currentIndex < images.length - 1 : Boolean(propOnNext);

  const handlePrev = () => {
    if (images && images.length > 1) {
      if (currentIndex > 0) setCurrentIndex((i) => i - 1);
    } else if (propOnPrev) {
      propOnPrev();
    }
  };

  const handleNext = () => {
    if (images && images.length > 1) {
      if (currentIndex < images.length - 1) setCurrentIndex((i) => i + 1);
    } else if (propOnNext) {
      propOnNext();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && canGoPrev) handlePrev();
      if (e.key === 'ArrowRight' && canGoNext) handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, canGoPrev, canGoNext, currentIndex]);

  if (!isOpen || !activeItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-charcoal/90 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label={t.nav.close}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-warm"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {canGoPrev && (
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-warm"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Next Button */}
      {canGoNext && (
        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-warm"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Main Container */}
      <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-elevated border-2 border-rose-border flex flex-col max-h-[92vh]">
        {/* Image Display */}
        <div className="bg-black/90 flex items-center justify-center p-2 sm:p-4 min-h-[250px] max-h-[58vh]">
          <img
            src={activeItem.image}
            alt={isTamil ? activeItem.altTamil : activeItem.altEnglish}
            className="max-h-[54vh] w-auto max-w-full object-contain rounded-xl shadow-sm"
          />
        </div>

        {/* Captions & Info */}
        <div className="p-4 sm:p-6 bg-white overflow-y-auto space-y-3 font-sans">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-soft text-burgundy font-black text-[11px] border border-rose-border">
              <Tag className="w-3.5 h-3.5 text-rose-deep" />
              <span>{activeItem.category.replace('-', ' ').toUpperCase()}</span>
            </span>

            <span className="inline-flex items-center gap-1 text-charcoal-muted">
              <Calendar className="w-3.5 h-3.5 text-rose-deep" />
              <span>{activeItem.date}</span>
            </span>

            <span className="inline-flex items-center gap-1 text-charcoal-muted">
              <MapPin className="w-3.5 h-3.5 text-rose-deep" />
              <span>{activeItem.location}</span>
            </span>
          </div>

          <h3 id="lightbox-title" className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil">
            {isTamil ? activeItem.titleTamil : activeItem.titleEnglish}
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
            {isTamil ? activeItem.descriptionTamil : activeItem.descriptionEnglish}
          </p>

          {activeItem.isSamplePlaceholder && (
            <p className="text-[11px] text-rose-deep italic pt-1 border-t border-rose-border/60">
              {isTamil
                ? 'வடிவமைப்பு முன்னோட்டப் படம். அமைதி அறக்கட்டளை நேரடி புகைப்படங்களை எளிதாக சேர்க்கலாம்.'
                : 'Sample visual preview. Easily replaceable with official Peace Trust photographs.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
