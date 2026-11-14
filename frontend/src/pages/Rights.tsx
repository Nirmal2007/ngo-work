import React, { useState } from 'react';
import {
  Scale,
  ChevronDown,
  FileText,
  UserCheck,
  CheckCircle2,
  Phone,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { legalRightsData } from '../data/rights';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const Rights: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [openActId, setOpenActId] = useState<string | null>('posh-act-2013');

  return (
    <>
      <SEOHandler pageKey="rights" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'சட்ட விழிப்புணர்வு & பாதுகாப்பு' : 'Legal Rights & Statutory Protections'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.rights.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.rights.subheading}
          </p>

          {/* Educational Disclaimer */}
          <div className="bg-rose-soft/80 border border-rose-border p-4 rounded-2xl text-xs text-charcoal text-left max-w-2xl mx-auto flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-deep flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">{t.rights.disclaimer}</p>
          </div>
        </section>

        {/* Expandable Accordion Cards for 4 Laws - Centered in mobile */}
        <section className="max-w-4xl mx-auto space-y-5 sm:space-y-6 w-full">
          {legalRightsData.map((act) => {
            const isOpen = openActId === act.id;
            return (
              <div
                key={act.id}
                className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden shadow-soft w-full max-w-md sm:max-w-none mx-auto ${
                  isOpen ? 'border-rose-deep shadow-card' : 'border-rose-border hover:border-rose-deep/40'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenActId(isOpen ? null : act.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center sm:items-start justify-between gap-3 sm:gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center sm:items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black bg-gold-warm/25 text-burgundy border border-gold-warm/60 mb-1 inline-block">
                        {act.year} Act
                      </span>
                      <h2 className="text-base sm:text-xl font-extrabold text-burgundy font-tamil leading-snug">
                        {isTamil ? act.titleTa : act.titleEn}
                      </h2>
                      <p className="text-xs text-rose-deep font-bold mt-0.5">
                        {isTamil ? act.shortNameTa : act.shortNameEn}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-rose-soft text-rose-deep flex-shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-rose-border/60 space-y-5 animate-fadeIn">
                    {/* Purpose of the law */}
                    <div>
                      <h3 className="text-xs font-black text-rose-deep uppercase tracking-wider mb-1">
                        {isTamil ? 'சட்டத்தின் நோக்கம் (Purpose of the Law):' : 'Purpose of the Act:'}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
                        {isTamil ? act.purposeTa : act.purposeEn}
                      </p>
                    </div>

                    {/* Who it protects */}
                    <div className="bg-rose-soft/40 p-4 rounded-2xl border border-rose-border">
                      <h3 className="text-xs font-bold text-burgundy uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-rose-deep" />
                        <span>{isTamil ? 'யாருக்கு பாதுகாப்பு அளிக்கிறது:' : 'Who It Protects:'}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                        {isTamil ? act.whoItProtectsTa : act.whoItProtectsEn}
                      </p>
                    </div>

                    {/* Basic explanation */}
                    <div>
                      <h3 className="text-xs font-black text-burgundy uppercase tracking-wider mb-2">
                        {isTamil ? 'அடிப்படை சட்ட விளக்கங்கள்:' : 'Key Legal Provisions:'}
                      </h3>
                      <ul className="space-y-2 font-sans">
                        {(isTamil ? act.explanationTa : act.explanationEn).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-deep flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to seek help */}
                    <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                      <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{isTamil ? 'உதவி பெறுவது எப்படி:' : 'How to Seek Assistance:'}</span>
                      </h3>
                      <ul className="space-y-2 font-sans">
                        {(isTamil ? act.howToSeekHelpTa : act.howToSeekHelpEn).map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-charcoal leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Official source link & Action */}
                    <div className="pt-4 border-t border-rose-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <a
                        href={act.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-rose-deep hover:text-burgundy inline-flex items-center gap-1.5"
                      >
                        <FileText className="w-4 h-4 text-rose-deep" />
                        <span>{t.rights.officialLinkText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href="tel:+919042580158"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-deep hover:bg-rose-deep/90 text-white text-xs font-extrabold shadow-soft transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-warm" />
                        <span>{t.rights.seekHelpBtn}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
