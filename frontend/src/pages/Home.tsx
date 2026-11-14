import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Heart,
  Users,
  ChevronDown,
  Phone,
  Scale,
  Calendar,
  GraduationCap,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { Hero } from '../components/Hero/Hero';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';
import { servicesData, ServiceItem } from '../data/services';
import { ServiceModal, renderServiceIcon } from '../components/ServiceCard/ServiceModal';
import { villageActionTeam } from '../data/actionPlan';
import { TeamSection } from '../components/Team/TeamSection';
import { legalRightsData } from '../data/rights';
import { govtSchemesData } from '../data/schemes';
import { galleryData } from '../data/galleryData';
import { GalleryLightbox } from '../components/Gallery/GalleryLightbox';
import { faqData } from '../data/faq';
import { createFAQSchema } from '../seo/structuredData';

export const Home: React.FC = () => {
  const { t, isTamil } = useLanguage();

  // State for Service Modal
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // State for Gallery Lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // State for FAQ Accordion
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-01');

  // Preview data subsets
  const featuredServices = servicesData.slice(0, 6);
  const featuredGallery = galleryData.slice(0, 6);
  const featuredSchemes = govtSchemesData.slice(0, 3);
  const featuredRights = legalRightsData.slice(0, 4);

  // Generate FAQ schema for search engines
  const homeFaqSchema = createFAQSchema(
    faqData.map((f) => ({
      question: isTamil ? f.questionTa : f.questionEn,
      answer: isTamil ? f.answerTa : f.answerEn,
    }))
  );

  return (
    <>
      <SEOHandler pageKey="home" customStructuredData={homeFaqSchema} />

      <main className="min-h-screen bg-rose-white">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. DEDICATED HIGH-VISIBILITY HELPLINE SECTION */}
        <HelplineBanner />

        {/* 3. ABOUT THE MISSION OVERVIEW */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-bold">
                <Heart className="w-3.5 h-3.5 text-rose-deep" />
                <span className="font-extrabold">PEACE TRUST • DINDIGUL</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-burgundy font-tamil leading-tight">
                {t.about.heading}
              </h2>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
                {t.about.introP1}
              </p>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                {t.about.whyInitiatedText}
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-deep hover:bg-rose-deep/90 text-white font-extrabold text-xs shadow-soft transition-all duration-200"
                >
                  <span>{isTamil ? 'முழுமையான நோக்கம் & கொள்கைகள்' : 'Read Full Mission & Values'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Core Values Grid - Centered in mobile */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md sm:max-w-none mx-auto w-full">
              {t.about.values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-rose-border shadow-soft hover:border-rose-deep transition-all group flex flex-col items-center sm:items-start text-center sm:text-left w-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-soft group-hover:bg-gold-warm text-rose-deep group-hover:text-burgundy flex items-center justify-center transition-colors mb-3">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-burgundy font-tamil mb-1">{v.name}</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SIX SUPPORT SERVICES - Soft Pink Section Background */}
        <section className="py-14 sm:py-20 bg-rose-soft/50 border-y border-rose-border px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-rose-deep text-white text-xs font-bold uppercase tracking-wider">
                {isTamil ? 'ஆதரவு வழிகாட்டல்கள்' : 'Community Services'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-burgundy font-tamil">
                {t.services.heading}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
                {t.services.subheading}
              </p>
              <p className="text-xs text-rose-deep italic pt-1">
                {t.services.disclaimer}
              </p>
            </div>

            {/* 6 Premium Service Cards - Soft Pink & Clean Border */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto w-full">
              {featuredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-6 border-2 border-rose-border/80 shadow-soft hover:shadow-card hover:border-rose-deep/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center sm:items-start text-center sm:text-left w-full"
                >
                  <div className="space-y-4 w-full flex flex-col items-center sm:items-start">
                    <div className="w-12 h-12 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center shadow-xs">
                      {renderServiceIcon(service.icon, 'w-6 h-6')}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-burgundy font-tamil">
                        {isTamil ? service.titleTa : service.titleEn}
                      </h3>
                      <p className="text-xs text-rose-deep font-bold mt-0.5">
                        {isTamil ? service.taglineTa : service.taglineEn}
                      </p>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3 font-sans">
                      {isTamil ? service.shortDescTa : service.shortDescEn}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-rose-border/60 mt-6 flex items-center justify-between w-full">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-extrabold text-rose-deep hover:text-burgundy inline-flex items-center gap-1 group focus:outline-none"
                    >
                      <span>{t.services.learnMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                      href="tel:+919042580158"
                      className="p-2 rounded-xl bg-rose-soft hover:bg-gold-warm text-burgundy transition-colors"
                      title={isTamil ? 'அழைக்க' : 'Call'}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border-2 border-rose-deep/30 text-burgundy font-bold text-xs hover:bg-rose-soft transition-colors shadow-xs"
              >
                <span>{isTamil ? 'அனைத்து சேவைகள் & விளக்கங்கள்' : 'View All Service Details'}</span>
                <ArrowRight className="w-4 h-4 text-rose-deep" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. VILLAGE ACTION PLAN TEASER */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-burgundy rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-elevated relative overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left border-2 border-gold-warm/30">
            <div className="relative max-w-3xl space-y-4 w-full flex flex-col items-center lg:items-start">
              <span className="px-3.5 py-1 rounded-full bg-gold-warm text-burgundy font-black text-xs uppercase tracking-wider">
                {isTamil ? 'முக்கிய மாதிரி கட்டமைப்பு' : 'Community Model'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-tamil leading-tight">
                {t.actionPlan.subheading}
              </h2>
              <p className="text-sm sm:text-base text-rose-soft leading-relaxed font-sans">
                {t.actionPlan.description}
              </p>

              {/* Roles Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 w-full">
                {villageActionTeam.map((team, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-center sm:text-left"
                  >
                    <div className="font-extrabold text-gold-warm">
                      {team.count} × {isTamil ? team.titleTa : team.titleEn}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/action-plan"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-xs shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <span>{isTamil ? 'கிராம செயல் திட்டத்தை ஆராய்க' : 'Explore Village Action Plan'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. LEADERSHIP & GUIDANCE TEAM */}
        <TeamSection />

        {/* 6. KNOW YOUR RIGHTS HIGHLIGHT */}
        <section className="py-14 sm:py-20 bg-rose-white border-t border-rose-border px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left items-center md:items-end">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-deep">
                  {isTamil ? 'சட்டக் கல்வி' : 'Legal Literacy'}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-burgundy font-tamil">
                  {t.rights.heading}
                </h2>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  {t.rights.subheading}
                </p>
              </div>
              <Link
                to="/rights"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-rose-deep hover:text-burgundy flex-shrink-0"
              >
                <span>{isTamil ? 'அனைத்து சட்டங்கள்' : 'View All 4 Acts'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-md sm:max-w-none mx-auto w-full">
              {featuredRights.map((act) => (
                <div
                  key={act.id}
                  className="bg-white rounded-3xl p-5 border border-rose-border shadow-soft hover:shadow-card hover:border-rose-deep/40 transition-all flex flex-col justify-between items-center sm:items-start text-center sm:text-left w-full"
                >
                  <div className="space-y-3 w-full flex flex-col items-center sm:items-start">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-soft text-burgundy">
                      {act.year}
                    </span>
                    <h3 className="font-extrabold text-base text-burgundy font-tamil leading-snug">
                      {isTamil ? act.shortNameTa : act.shortNameEn}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3 font-sans">
                      {isTamil ? act.purposeTa : act.purposeEn}
                    </p>
                  </div>
                  <Link
                    to="/rights"
                    className="pt-4 mt-4 border-t border-rose-border/60 text-xs font-bold text-rose-deep hover:text-burgundy inline-flex items-center gap-1 w-full justify-center sm:justify-start"
                  >
                    <span>{isTamil ? 'சட்ட விளக்கம்' : 'Read Summary'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GALLERY HIGHLIGHTS */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left items-center md:items-end">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-deep">
                {isTamil ? 'களப்பணிகள் & நிகழ்வுகள்' : 'Field Updates'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-burgundy font-tamil">
                {t.gallery.heading}
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                {t.gallery.subheading}
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-rose-deep hover:text-burgundy flex-shrink-0"
            >
              <span>{isTamil ? 'அனைத்து புகைப்படங்கள்' : 'Open Photo Gallery'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid - Centered on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md sm:max-w-none mx-auto w-full">
            {featuredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-rose-border shadow-soft hover:shadow-card hover:border-rose-deep/40 transition-all w-full max-w-md mx-auto"
              >
                <div className="aspect-[16/10] bg-rose-soft/50 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={isTamil ? item.altTamil : item.altEnglish}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-burgundy/90 text-white text-[10px] font-bold backdrop-blur-xs">
                    {item.date}
                  </div>
                </div>
                <div className="p-4 space-y-1 text-center sm:text-left">
                  <div className="text-[11px] text-rose-deep font-bold">{item.location}</div>
                  <h3 className="font-bold text-sm text-burgundy font-tamil line-clamp-1 group-hover:text-rose-deep transition-colors">
                    {isTamil ? item.titleTamil : item.titleEnglish}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. ACTIVE GOVERNMENT SCHEMES HIGHLIGHT - Soft Pink Section */}
        <section className="py-14 sm:py-20 bg-rose-soft/40 border-y border-rose-border px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-deep">
                {isTamil ? 'தமிழ்நாடு அரசு உதவிகள்' : 'Tamil Nadu Government Schemes'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-burgundy font-tamil">
                {t.schemes.heading}
              </h2>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                {t.schemes.disclaimer}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto w-full">
              {featuredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-3xl p-6 border border-rose-border shadow-soft flex flex-col justify-between items-center sm:items-start text-center sm:text-left w-full"
                >
                  <div className="space-y-3 w-full flex flex-col items-center sm:items-start">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold-warm/25 text-burgundy border border-gold-warm/50">
                      {isTamil ? scheme.badgeTa : scheme.badgeEn}
                    </span>
                    <h3 className="font-extrabold text-base text-burgundy font-tamil">
                      {isTamil ? scheme.nameTa : scheme.nameEn}
                    </h3>
                    <p className="text-[11px] text-charcoal-muted">
                      {isTamil ? scheme.deptTa : scheme.deptEn}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-rose-border/60 w-full flex justify-center sm:justify-start">
                    <Link
                      to="/schemes"
                      className="text-xs font-bold text-rose-deep hover:text-burgundy inline-flex items-center gap-1"
                    >
                      <span>{isTamil ? 'தகுதிகள் & விண்ணப்பிக்கும் முறை' : 'Check Eligibility & Apply'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                to="/schemes"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-deep hover:bg-rose-deep/90 text-white font-extrabold text-xs shadow-soft transition-colors"
              >
                <span>{isTamil ? 'அனைத்து அரசு நலத்திட்டங்கள்' : 'View All Active Schemes'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. VOLUNTEER INVITATION / JOIN US CALLOUT */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-burgundy via-burgundy-dark to-burgundy rounded-3xl p-6 sm:p-12 lg:p-16 text-white text-center space-y-6 shadow-card max-w-5xl mx-auto w-full border-2 border-gold-warm/30">
            <span className="px-3.5 py-1 rounded-full bg-rose-deep text-white font-black text-xs uppercase tracking-wider inline-block">
              {isTamil ? 'தன்னார்வலர் சேர்க்கை' : 'Volunteer Enrolment'}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-tamil max-w-2xl mx-auto leading-tight">
              {t.join.heading}
            </h2>

            <p className="text-sm sm:text-base text-rose-soft max-w-2xl mx-auto leading-relaxed font-sans">
              {t.join.subheading}
            </p>

            <div>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-sm shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                <Users className="w-4 h-4 text-burgundy" />
                <span>{t.nav.joinUs}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 10. FAQ ACCORDION */}
        <section className="py-14 sm:py-20 bg-rose-white border-t border-rose-border px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 w-full">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-deep">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-burgundy font-tamil">
                {t.faq.heading}
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                {t.faq.subheading}
              </p>
            </div>

            <div className="space-y-3 w-full">
              {faqData.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-rose-border shadow-soft overflow-hidden transition-all w-full"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full p-4 sm:p-5 text-left font-extrabold text-sm sm:text-base text-burgundy hover:text-rose-deep flex items-center justify-between gap-4 font-tamil focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span>{isTamil ? faq.questionTa : faq.questionEn}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-rose-deep transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-muted border-t border-rose-border/50 animate-fadeIn font-sans leading-relaxed">
                        <p>{isTamil ? faq.answerTa : faq.answerEn}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={featuredGallery}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}

        {/* Service Modal */}
        <ServiceModal
          service={selectedService}
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
        />
      </main>
    </>
  );
};
