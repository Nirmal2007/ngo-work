import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldAlert, LifeBuoy } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { HelplineModal } from './HelplineModal';

export const HelplineBanner: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-burgundy via-burgundy-dark to-burgundy text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-card my-6 sm:my-8 rounded-3xl mx-3 sm:mx-6 lg:mx-auto max-w-7xl border-2 border-gold-warm/30">
        {/* Subtle decorative background circles */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gold-warm/15 pointer-events-none blur-2xl" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-rose-deep/20 pointer-events-none blur-2xl" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Text area - Centered on mobile */}
          <div className="text-center lg:text-left space-y-2 max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-gold-warm text-xs font-bold backdrop-blur-sm border border-gold-warm/30">
              <ShieldAlert className="w-4 h-4 text-gold-warm" />
              <span>{isTamil ? 'பாதுகாப்பு & ஆலோசனை உதவி மையம்' : 'Safety & Guidance Helpline'}</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-tamil tracking-tight text-white">
              {t.helpline.bannerTitle}
            </h2>

            <p className="text-xs sm:text-sm text-rose-soft leading-relaxed font-sans">
              {isTamil
                ? 'துன்புறுத்தல், குடும்ப வன்முறை அல்லது அச்சத்தில் உள்ள பெண்களுக்கு நம்பிக்கையான தோழமை. தயங்காமல் அழையுங்கள்.'
                : 'Facing harassment, domestic distress, or safety concerns? Speak confidentially to a caring peer companion.'}
            </p>

            <p className="text-[11px] text-gold-light italic">
              {t.helpline.peaceTrustDisclaimer}
            </p>
          </div>

          {/* Actions & Number display - Centered on mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md lg:max-w-none lg:w-auto justify-center mx-auto lg:mx-0">
            {/* Phone button in Warm Gold */}
            <a
              href="tel:+919042580158"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-sm sm:text-base shadow-elevated transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5 text-burgundy animate-bounce flex-shrink-0" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-extrabold opacity-90 leading-none">
                  {t.helpline.callAction}
                </div>
                <div className="text-base sm:text-lg font-black font-sans leading-tight">
                  +91 9042580158
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919042580158"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{t.helpline.whatsappAction}</span>
            </a>

            {/* View Govt helplines */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-rose-deep hover:bg-rose-deep/80 text-white font-bold text-xs border border-white/15 transition-colors"
            >
              <LifeBuoy className="w-4 h-4 text-gold-warm" />
              <span>{isTamil ? 'அரசு அவசர எண்கள்' : 'Govt Helplines'}</span>
            </button>
          </div>
        </div>
      </section>

      <HelplineModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
