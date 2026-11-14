import React, { useState } from 'react';
import { Phone, ArrowRight, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData, ServiceItem } from '../data/services';
import { ServiceModal, renderServiceIcon } from '../components/ServiceCard/ServiceModal';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const Services: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <SEOHandler pageKey="services" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'பாதுகாப்பு & வழிகாட்டல் நெறிகள்' : 'Comprehensive Support Pathways'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.services.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.services.subheading}
          </p>

          {/* Transparent Scope Disclaimer */}
          <div className="bg-rose-soft/80 border border-rose-border p-4 rounded-2xl text-xs text-charcoal text-left max-w-2xl mx-auto flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-deep flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">{t.services.disclaimer}</p>
          </div>
        </section>

        {/* 6 Comprehensive Service Cards - Centered on Mobile */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto w-full max-w-none">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-rose-border/80 shadow-soft hover:shadow-card hover:border-rose-deep/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center sm:items-stretch text-center sm:text-left w-full"
            >
              <div className="space-y-4 w-full flex flex-col items-center sm:items-stretch">
                <div className="flex items-center justify-between w-full">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center shadow-xs">
                    {renderServiceIcon(service.icon, 'w-6 h-6 sm:w-7 sm:h-7')}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-rose-soft text-burgundy text-[11px] font-black border border-rose-border">
                    {isTamil ? 'இலவச வழிகாட்டல்' : 'Free Guidance'}
                  </span>
                </div>

                <div className="w-full">
                  <h2 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil">
                    {isTamil ? service.titleTa : service.titleEn}
                  </h2>
                  <p className="text-xs text-rose-deep font-bold mt-1">
                    {isTamil ? service.taglineTa : service.taglineEn}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                  {isTamil ? service.shortDescTa : service.shortDescEn}
                </p>

                {/* Key Support Bullets Preview */}
                <div className="pt-2 space-y-1.5 border-t border-rose-border/60 w-full text-left">
                  <div className="text-[11px] font-black text-rose-deep uppercase tracking-wider">
                    {isTamil ? 'வழங்கப்படும் முதன்மை உதவிகள்:' : 'Primary Assistance Highlights:'}
                  </div>
                  {(isTamil ? service.assistanceProvidedTa : service.assistanceProvidedEn)
                    .slice(0, 2)
                    .map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-rose-border/60 mt-6 flex items-center justify-between gap-2 w-full">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-rose-deep hover:bg-rose-deep/90 text-white font-extrabold text-xs shadow-soft transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.services.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="tel:+919042580158"
                  className="p-2.5 rounded-xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-xs shadow-soft transition-colors flex-shrink-0"
                  title={isTamil ? 'உதவி எண் அழைக்க' : 'Call Helpline'}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};
