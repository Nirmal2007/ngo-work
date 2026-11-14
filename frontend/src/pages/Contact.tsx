import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Building,
  GraduationCap,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const Contact: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <>
      <SEOHandler pageKey="contact" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-14 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'அமைப்பின் முகவரிகள் & உதவி மையம்' : 'Official Centres & Contacts'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.contact.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.contact.subheading}
          </p>
        </section>

        {/* Location Cards - Centered on Mobile */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-md md:max-w-none mx-auto w-full">
          {/* Card 1: PEACE TRUST HEADQUARTERS */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-rose-border shadow-soft space-y-5 flex flex-col justify-between items-center sm:items-start text-center sm:text-left w-full">
            <div className="space-y-4 w-full flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center shadow-xs flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black text-burgundy bg-gold-warm/25 border border-gold-warm/60 px-2.5 py-0.5 rounded-full">
                    {isTamil ? 'தலைமை அலுவலகம்' : 'Headquarters'}
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil mt-1">
                    {t.contact.hqTitle}
                  </h2>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-charcoal leading-relaxed pt-2 text-left font-sans">
                <MapPin className="w-4 h-4 text-rose-deep flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Near Police Housing Colony, Trichy Road, Dindigul – 624005, Tamil Nadu, India.
                </address>
              </div>

              {/* Phones & Emails */}
              <div className="space-y-2 pt-2 border-t border-rose-border/60 text-xs w-full text-left font-sans">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    <a href="tel:+914512410021" className="font-bold text-burgundy hover:text-rose-deep">
                      +91 451-2410021
                    </a>
                    <span className="text-rose-border">|</span>
                    <a href="tel:+918667265272" className="font-bold text-burgundy hover:text-rose-deep">
                      +91 8667265272
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    <a href="mailto:chairman@peacetrust.in" className="text-rose-deep hover:underline font-semibold">
                      chairman@peacetrust.in
                    </a>
                    <span className="text-rose-border">|</span>
                    <a href="mailto:info@peacetrust.in" className="text-rose-deep hover:underline font-semibold">
                      info@peacetrust.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-rose-border/60 w-full flex justify-center sm:justify-start">
              <a
                href="https://maps.google.com/?q=Peace+Trust+Trichy+Road+Dindigul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-deep hover:text-burgundy"
              >
                <span>{isTamil ? 'கூகிள் வரைபடத்தில் பார்க்க' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: PEACE COLLEGE OF EDUCATION */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-rose-border shadow-soft space-y-5 flex flex-col justify-between items-center sm:items-start text-center sm:text-left w-full">
            <div className="space-y-4 w-full flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center shadow-xs flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black text-burgundy bg-rose-soft border border-rose-border px-2.5 py-0.5 rounded-full">
                    {isTamil ? 'கல்வி வளாகம்' : 'Educational Institution'}
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil mt-1">
                    {t.contact.collegeTitle}
                  </h2>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-charcoal leading-relaxed pt-2 text-left font-sans">
                <MapPin className="w-4 h-4 text-rose-deep flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Vittalanayakanpatti, Karur Road, NH-7, Sukkampatti Post, Dindigul – 624709, Tamil Nadu, India.
                </address>
              </div>

              <div className="space-y-2 pt-2 border-t border-rose-border/60 text-xs w-full text-left font-sans">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <a href="tel:+914512410021" className="font-bold text-burgundy hover:text-rose-deep">
                    +91 451-2410021
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <a href="mailto:info@peacetrust.in" className="text-rose-deep hover:underline font-semibold">
                    info@peacetrust.in
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-rose-border/60 w-full flex justify-center sm:justify-start">
              <a
                href="https://maps.google.com/?q=Peace+College+of+Education+Dindigul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-deep hover:text-burgundy"
              >
                <span>{isTamil ? 'கூகிள் வரைபடத்தில் பார்க்க' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section - Centered */}
        <section className="max-w-2xl mx-auto w-full">
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
