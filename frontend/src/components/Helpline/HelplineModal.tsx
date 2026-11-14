import React from 'react';
import { Phone, MessageCircle, X, Shield, ExternalLink, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface HelplineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelplineModal: React.FC<HelplineModalProps> = ({ isOpen, onClose }) => {
  const { t, isTamil } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="helpline-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border-2 border-rose-border overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-burgundy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-warm/20 flex items-center justify-center text-gold-warm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h2 id="helpline-modal-title" className="text-xl font-extrabold font-tamil text-white">
                {t.helpline.bannerTitle}
              </h2>
              <p className="text-xs text-rose-soft font-semibold">{t.brand.parentOrg}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t.nav.close}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Peace Trust Helpline Card */}
          <div className="bg-rose-soft/40 rounded-2xl p-5 border-2 border-rose-deep/30 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-deep text-white mb-1">
                  {isTamil ? 'அமைப்பின் பிரத்யேக உதவி எண்' : 'Project Helpline'}
                </span>
                <div className="text-3xl font-black text-burgundy tracking-wide font-sans">
                  +91 9042580158
                </div>
                <p className="text-xs text-charcoal-muted mt-1">
                  {isTamil ? 'அலுவலக மற்றும் கள வழிகாட்டுதல் நேரம்' : 'Office & field guidance hours'}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-col gap-2">
                <a
                  href="tel:+919042580158"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-deep hover:bg-rose-deep/90 text-white font-extrabold text-sm shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-warm" />
                  <span>{t.helpline.callAction}</span>
                </a>
                <a
                  href="https://wa.me/919042580158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-rose-border text-xs text-charcoal-muted">
              <p>{t.helpline.peaceTrustDisclaimer}</p>
              <p className="mt-1 text-burgundy font-semibold">{t.helpline.whatsappNotice}</p>
            </div>
          </div>

          {/* Emergency Alert Banner */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-warm/20 border border-gold-warm/60">
            <AlertTriangle className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
            <div className="text-xs text-burgundy leading-relaxed font-bold">
              {t.helpline.emergencyNotice}
            </div>
          </div>

          {/* National / Government Emergency Numbers */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-rose-deep" />
              <h3 className="font-extrabold text-sm text-burgundy">{t.helpline.govResourcesTitle}</h3>
            </div>
            <p className="text-xs text-charcoal-muted mb-4">{t.helpline.govResourcesSub}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.govHelplines.map((item) => (
                <div
                  key={item.number}
                  className="p-3.5 rounded-xl bg-rose-soft/40 border border-rose-border hover:border-rose-deep/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-sm text-burgundy">{item.name}</div>
                    <div className="text-[11px] text-charcoal-muted line-clamp-1">{item.desc}</div>
                  </div>
                  <a
                    href={`tel:${item.number}`}
                    className="flex-shrink-0 ml-3 px-3 py-1.5 rounded-lg bg-burgundy hover:bg-rose-deep text-white font-black text-xs transition-colors flex items-center gap-1 font-sans"
                    aria-label={`Call ${item.number}`}
                  >
                    <Phone className="w-3 h-3 text-gold-warm" />
                    <span>{item.number}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-rose-soft/50 border-t border-rose-border flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-burgundy text-white hover:bg-rose-deep font-bold text-xs transition-colors"
          >
            {t.nav.close}
          </button>
        </div>
      </div>
    </div>
  );
};
