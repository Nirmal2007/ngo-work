import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Eye,
  Target,
  CheckCircle2,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const About: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <>
      <SEOHandler pageKey="about" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'அமைப்பின் பின்னணி & தொலைநோக்கு' : 'Mission & Core Vision'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.about.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.about.subheading}
          </p>
        </section>

        {/* Narrative Section: What is Paadhukaappu Thozhi & Why Peace Trust initiated it */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-rose-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-xl sm:text-3xl font-extrabold text-burgundy font-tamil">
                {t.about.whyInitiatedTitle}
              </h2>
              <p className="text-xs sm:text-base text-charcoal leading-relaxed font-sans">
                {t.about.introP1}
              </p>
              <p className="text-xs sm:text-base text-charcoal-muted leading-relaxed font-sans">
                {t.about.introP2}
              </p>
              <p className="text-xs sm:text-sm text-burgundy leading-relaxed bg-rose-soft/70 p-4 rounded-2xl border-l-4 border-rose-deep font-sans text-left w-full font-medium">
                {t.about.whyInitiatedText}
              </p>
            </div>

            {/* Right illustration / highlights - Centered on mobile */}
            <div className="lg:col-span-5 bg-gradient-to-br from-rose-soft via-white to-rose-soft/60 p-5 sm:p-8 rounded-3xl border border-rose-border space-y-4 text-xs text-charcoal w-full max-w-md mx-auto">
              <div className="font-extrabold text-sm sm:text-base text-burgundy font-tamil text-center lg:text-left">
                {isTamil ? 'கள ஆதரவு தூண்கள்:' : 'Grassroots Pillars:'}
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-burgundy">{isTamil ? 'பணியிடப் பாதுகாப்பு:' : 'Workplace Safety:'}</strong>{' '}
                    {isTamil
                      ? 'POSH சட்டம் மூலம் பெண்களுக்கு பாதுகாப்பான பணிச்சூழல்.'
                      : 'Zero tolerance for workplace harassment through POSH compliance.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-burgundy">{isTamil ? 'குடும்ப வன்முறை ஆதரவு:' : 'Domestic Harmony:'}</strong>{' '}
                    {isTamil
                      ? 'கண்ணியமான ஆற்றுப்படுத்துதல் மற்றும் சட்ட நிவாரண வழிகாட்டல்.'
                      : 'Compassionate crisis mediation and legal protection order guidance.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-burgundy">{isTamil ? 'வளரிளம் பெண்கள் நல்வாழ்வு:' : 'Adolescent Care:'}</strong>{' '}
                    {isTamil
                      ? 'ரத்தசோகை பரிசோதனை, கல்வி உதவித்தொகை மற்றும் சைபர் பாதுகாப்பு.'
                      : 'Anaemia testing, menstrual hygiene dignity, and cyber security literacy.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards - Centered on mobile */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-md md:max-w-none mx-auto w-full">
          {/* Vision */}
          <div className="bg-gradient-to-br from-burgundy via-burgundy-dark to-burgundy text-white rounded-3xl p-6 sm:p-10 shadow-soft space-y-4 relative overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left w-full border-2 border-gold-warm/40">
            <div className="w-12 h-12 rounded-2xl bg-gold-warm text-burgundy flex items-center justify-center shadow-soft font-black">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-tamil text-white">
              {t.about.visionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-rose-soft leading-relaxed font-sans">
              {t.about.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white text-charcoal rounded-3xl p-6 sm:p-10 shadow-soft border-2 border-rose-border space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left w-full">
            <div className="w-12 h-12 rounded-2xl bg-rose-deep text-white flex items-center justify-center shadow-soft">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-tamil text-burgundy">
              {t.about.missionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
              {t.about.missionText}
            </p>
          </div>
        </section>

        {/* Core Values Section - Centered on Mobile */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-burgundy font-tamil">
              {t.about.coreValuesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              {isTamil
                ? 'எங்கள் களப்பணிகளை வழிநடத்தும் ஆறு அடிப்படை நெறிமுறைகள்.'
                : 'The six foundational tenets anchoring every intervention.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-md sm:max-w-none mx-auto w-full">
            {t.about.values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-rose-border shadow-soft hover:shadow-card hover:border-rose-deep transition-all space-y-2 flex flex-col items-center sm:items-start text-center sm:text-left w-full"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-soft text-rose-deep flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil">{v.name}</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Peace Trust Heritage with Highlighting */}
        <section className="bg-rose-soft/50 rounded-3xl p-6 sm:p-10 border border-rose-border">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-burgundy text-white text-xs font-black uppercase tracking-wider inline-block">
              ESTD. 1984 • DINDIGUL
            </span>
            <div className="flex items-center justify-center gap-3">
              <img
                src="/images/logo.png"
                alt="PEACE TRUST"
                className="w-10 h-10 rounded-full object-contain"
              />
              <h2 className="text-xl sm:text-3xl font-extrabold text-burgundy font-tamil">
                PEACE TRUST, Dindigul
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
              {isTamil
                ? 'நான்கு தசாப்தங்களுக்கும் மேலாக கிராமப்புற கல்வி, பெண்களுக்கான வாழ்வாதார மேம்பாடு, குழந்தைகள் பாதுகாப்பு மற்றும் சட்ட உரிமைகளுக்காக உறுதியுடன் உழைத்து வரும் அரசு சாரா சமூக நல அமைப்பு.'
                : 'With four decades of dedicated grassroots service, Peace Trust continues to advocate for social justice, inclusive child education, and women’s constitutional dignity across Tamil Nadu.'}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/action-plan"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-deep text-white font-extrabold text-xs hover:bg-rose-deep/90 transition-colors shadow-soft"
              >
                <span>{isTamil ? 'கிராம செயல் திட்டம்' : 'Explore Action Plan'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border-2 border-rose-deep/30 text-burgundy font-bold text-xs hover:bg-rose-soft transition-colors shadow-xs"
              >
                <span>{isTamil ? 'அலுவலக முகவரி & தொடர்பு' : 'Contact Headquarters'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
