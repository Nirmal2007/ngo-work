import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const Hero: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-soft/60 via-rose-white to-rose-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 border-b border-rose-border">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] h-[350px] bg-gradient-to-r from-rose-deep/10 via-gold-warm/15 to-burgundy/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Peace Trust Initiative Badge with Highlighting */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-deep animate-ping" />
              <span className="font-extrabold font-sans tracking-wide">
                PEACE TRUST • {isTamil ? 'திண்டுக்கல் பெண்கள் பாதுகாப்பு சமூக முயற்சி' : 'Dindigul Social Welfare Initiative'}
              </span>
            </div>

            {/* Main Headings */}
            <div className={`w-full ${isTamil ? 'space-y-3 sm:space-y-4' : 'space-y-1.5 sm:space-y-2'}`}>
              <h1
                className={`font-extrabold text-burgundy font-tamil ${isTamil
                    ? 'text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.45] tracking-normal'
                    : 'text-2xl sm:text-4xl md:text-4xl lg:text-[3.25rem] leading-tight tracking-tight'
                  }`}
              >
                {t.hero.titleMain}
              </h1>
              <div
                className={`font-black text-rose-deep font-tamil ${isTamil
                    ? 'text-lg sm:text-2xl md:text-3xl leading-[1.45]'
                    : 'text-xl sm:text-3xl md:text-4xl leading-snug'
                  }`}
              >
                {t.hero.titleSub}
              </div>
            </div>

            {/* Emotional & Supportive Subtext */}
            <p className="text-xs sm:text-base md:text-lg text-charcoal-muted leading-relaxed max-w-2xl font-sans">
              {t.hero.description}
            </p>

            {/* Official Tagline Banner from Poster */}
            <div className="bg-rose-soft/80 border border-rose-border px-4 py-2.5 rounded-2xl w-full max-w-md mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-bold text-burgundy font-tamil">
              <Heart className="w-4 h-4 text-rose-deep flex-shrink-0" />
              <span>
                {isTamil ? 'தனியாக இல்லை, தோழி இருக்கிறாள்! உங்கள் பாதுகாப்பு, எங்கள் பொறுப்பு' : 'You are not alone, Thozhi is with you! Your safety, our responsibility'}
              </span>
            </div>

            {/* Main Helpline Highlight Card - Centered on Mobile, Row on Desktop */}
            <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-3 bg-white rounded-2xl border-2 border-rose-deep/20 shadow-soft mx-auto lg:mx-0">
              <div className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto">
                <div className="w-11 h-11 rounded-xl bg-rose-deep text-gold-warm flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-rose-deep tracking-wider block font-sans">
                    {isTamil ? 'அவசர / ஆலோசனை உதவி எண்' : 'Primary Project Helpline'}
                  </span>
                  <a
                    href="tel:+919042580158"
                    className="text-xl sm:text-2xl font-black text-burgundy hover:text-rose-deep tracking-wide font-sans block leading-tight"
                  >
                    +91 9042580158
                  </a>
                </div>
              </div>

              <a
                href="tel:+919042580158"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-rose-deep hover:bg-rose-deep/90 text-white font-extrabold text-xs shadow-sm transition-transform hover:scale-102 flex items-center justify-center gap-1.5 flex-shrink-0"
              >
                <span>{t.hero.ctaHelp}</span>
                <Phone className="w-3.5 h-3.5 text-gold-warm" />
              </a>
            </div>

            {/* Dual CTAs - Balanced & Centered on Mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-md mx-auto lg:mx-0">
              <Link
                to="/about"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-xs sm:text-sm shadow-soft transition-all duration-200"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-rose-soft text-burgundy font-bold text-xs sm:text-sm border-2 border-rose-deep/25 shadow-xs transition-all duration-200"
              >
                <span>{t.nav.services}</span>
                <ArrowRight className="w-4 h-4 text-rose-deep" />
              </Link>
            </div>

            {/* Credibility Badges - Balanced 3-column Grid on Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-5 border-t border-rose-border/70 w-full max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-base sm:text-xl font-extrabold text-burgundy flex items-center justify-center gap-1 font-sans">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 hidden sm:inline" />
                  <span>{t.hero.stat1}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-charcoal-muted font-medium mt-0.5 leading-snug">
                  {isTamil ? 'இரகசியத்தன்மை' : 'Confidential'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-xl font-extrabold text-burgundy flex items-center justify-center gap-1 font-sans">
                  <Users className="w-4 h-4 text-rose-deep hidden sm:inline" />
                  <span>{t.hero.stat2}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-charcoal-muted font-medium mt-0.5 leading-snug">
                  {isTamil ? 'கிராமத் தோழிகள்' : 'Village Thozhis'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-xl font-extrabold text-burgundy flex items-center justify-center gap-1 font-sans">
                  <Award className="w-4 h-4 text-gold-warm hidden sm:inline" />
                  <span>{t.hero.stat3}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-charcoal-muted font-medium mt-0.5 leading-snug">
                  {isTamil ? 'ஆண்டுகள் சேவை' : 'Years of Trust'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic featuring Official Emblem */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-deep via-gold-warm to-burgundy opacity-20 blur-lg" />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-elevated border-2 border-rose-deep/15 w-full">
                {/* Official Logo Display */}
                <div className="bg-gradient-to-br from-rose-soft via-white to-rose-soft/60 relative flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden text-center">
                  <div className="w-44 h-44 sm:w-56 sm:h-56 relative flex items-center justify-center mb-3">
                    <div className="absolute inset-0 rounded-full bg-rose-deep/5 animate-pulse" />
                    <img
                      src="/images/logo.png"
                      alt="நம்ம பாதுகாப்புத் தோழி - PEACE TRUST Official Logo"
                      className="w-full h-full object-contain drop-shadow-md rounded-full"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil mt-1">
                    {isTamil ? 'ஒரு கிராமம் – ஒரு குழு – 10 தோழிகள்' : 'One Village – One Team – 10 Thozhis'}
                  </h3>
                  <p className="text-xs text-rose-deep font-bold mt-0.5">
                    PEACE TRUST • DINDIGUL
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 w-full text-left">
                    <div className="bg-white/90 p-2.5 rounded-xl border border-rose-border text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold text-charcoal">
                        {isTamil ? 'சட்ட வழிகாட்டல்' : 'Legal Guidance'}
                      </span>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-rose-border text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold text-charcoal">
                        {isTamil ? 'மருத்துவ ஆதரவு' : 'Medical Referrals'}
                      </span>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-rose-border text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold text-charcoal">
                        {isTamil ? 'மனநல ஆலோசனை' : 'Peer Counselling'}
                      </span>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-rose-border text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold text-charcoal">
                        {isTamil ? 'அரசு நலத்திட்டங்கள்' : 'Govt Schemes'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="p-4 bg-rose-soft/40 border-t border-rose-border/60 space-y-1.5 text-center sm:text-left">
                  <div className="flex items-center justify-between text-xs font-bold text-burgundy">
                    <span className="flex items-center gap-1.5 text-rose-deep">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {isTamil ? 'அனைத்து பெண்களுக்கும் திறந்த களம்' : 'Open to All Women'}
                    </span>
                    <span className="text-burgundy bg-gold-warm px-2 py-0.5 rounded-md text-[10px] font-black">
                      {isTamil ? '100% இலவசம்' : '100% Free'}
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed font-sans">
                    {t.brand.subTagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
