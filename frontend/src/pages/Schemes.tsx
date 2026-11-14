import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileCheck,
  Phone,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { govtSchemesData } from '../data/schemes';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const Schemes: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <>
      <SEOHandler pageKey="schemes" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'அரசு நலத்திட்டங்கள் & உதவிகள்' : 'Tamil Nadu Government Welfare Initiatives'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.schemes.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.schemes.subheading}
          </p>

          {/* Scheme Verification Disclaimer */}
          <div className="bg-rose-soft/80 border border-rose-border p-4 rounded-2xl text-xs text-charcoal text-left max-w-2xl mx-auto flex items-start gap-3 font-sans">
            <AlertCircle className="w-5 h-5 text-rose-deep flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">{t.schemes.disclaimer}</p>
          </div>
        </section>

        {/* Scheme Cards Grid - Centered in mobile */}
        <section className="space-y-6 sm:space-y-8 max-w-5xl mx-auto w-full">
          {govtSchemesData.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-rose-border shadow-soft space-y-6 w-full max-w-md md:max-w-none mx-auto"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-rose-border/60 pb-5 text-center sm:text-left items-center sm:items-start">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-black bg-gold-warm/25 text-burgundy border border-gold-warm/60">
                      {isTamil ? scheme.badgeTa : scheme.badgeEn}
                    </span>
                    <span className="text-[11px] text-charcoal-muted flex items-center gap-1 font-sans">
                      <Calendar className="w-3.5 h-3.5 text-rose-deep" />
                      <span>{t.schemes.lastVerifiedLabel} {scheme.lastVerified}</span>
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-2xl font-extrabold text-burgundy font-tamil pt-1">
                    {isTamil ? scheme.nameTa : scheme.nameEn}
                  </h2>
                  <p className="text-xs text-rose-deep font-bold">
                    {isTamil ? scheme.deptTa : scheme.deptEn}
                  </p>
                </div>

                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-soft hover:bg-rose-deep hover:text-white text-burgundy font-black text-xs transition-colors flex-shrink-0 border border-rose-border"
                >
                  <span>{t.schemes.officialPortalBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Three Details Columns / Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                {/* 1. Eligibility */}
                <div className="bg-rose-soft/30 p-4 rounded-2xl border border-rose-border space-y-2">
                  <div className="font-black text-rose-deep uppercase tracking-wider text-center sm:text-left">
                    {t.schemes.eligibilityLabel}
                  </div>
                  <ul className="space-y-2 text-left font-sans">
                    {(isTamil ? scheme.eligibilityTa : scheme.eligibilityEn).map((el, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-charcoal leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Benefits */}
                <div className="bg-rose-soft/60 p-4 rounded-2xl border border-rose-border space-y-2">
                  <div className="font-black text-burgundy uppercase tracking-wider text-center sm:text-left">
                    {t.schemes.benefitsLabel}
                  </div>
                  <ul className="space-y-2 text-left font-sans">
                    {(isTamil ? scheme.benefitsTa : scheme.benefitsEn).map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-charcoal leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-deep flex-shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. How to Apply */}
                <div className="bg-gold-warm/15 p-4 rounded-2xl border border-gold-warm/60 space-y-2">
                  <div className="font-black text-burgundy uppercase tracking-wider text-center sm:text-left">
                    {t.schemes.howToApplyLabel}
                  </div>
                  <ul className="space-y-2 text-left font-sans">
                    {(isTamil ? scheme.howToApplyTa : scheme.howToApplyEn).map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-charcoal leading-relaxed">
                        <FileCheck className="w-3.5 h-3.5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Support Callout */}
              <div className="pt-4 border-t border-rose-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-charcoal-muted text-center sm:text-left font-sans">
                  {isTamil
                    ? 'விண்ணப்ப படிவங்களை நிரப்ப அமைதி அறக்கட்டளை கிராமத் தோழிகளின் நேரடி உதவிக்கு:'
                    : 'Need guidance filling these forms? Contact Peace Trust village volunteers:'}
                </span>
                <a
                  href="tel:+919042580158"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-deep text-white font-extrabold text-xs shadow-soft hover:bg-rose-deep/90 transition-colors flex-shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-warm" />
                  <span>+91 9042580158</span>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
