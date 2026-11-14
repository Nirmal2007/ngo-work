import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, HeartHandshake, ArrowRight, Phone } from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { TeamSection } from '../components/Team/TeamSection';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const Team: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <>
      <SEOHandler pageKey="team" />

      <main className="min-h-screen bg-rose-white">
        {/* Page Hero Header */}
        <section className="pt-8 sm:pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 text-xs font-semibold text-charcoal-muted flex items-center justify-center sm:justify-start gap-1.5">
            <Link to="/" className="hover:text-rose-deep transition-colors">
              {t.nav.home}
            </Link>
            <span>/</span>
            <span className="text-burgundy font-bold">{t.nav.team}</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider shadow-xs">
              <Shield className="w-3.5 h-3.5 text-rose-deep" />
              <span>{isTamil ? 'அமைதி அறக்கட்டளை வழிகாட்டுதல்' : 'Peace Trust Advisory Governance'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight tracking-tight">
              {t.teamSection.heading}
            </h1>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans max-w-2xl mx-auto">
              {t.teamSection.subtitle}
            </p>
          </div>

          {/* Overview Callout Card */}
          <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-rose-border shadow-soft max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center flex-shrink-0 shadow-xs">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil">
                  {isTamil ? 'கூட்டுப் பொறுப்பு & சமூகப் பாதுகாப்பு' : 'Collective Accountability & Community Care'}
                </h2>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
                  {isTamil
                    ? 'நம்ம பாதுகாப்புத் தோழி இயக்கம் கிராம மட்டத்திலிருந்து தலைமை வரை வெளிப்படைத்தன்மையுடன் செயல்படுகிறது. அமைதி அறக்கட்டளையின் 40 ஆண்டுகால மக்கள் சேவை பாரம்பரியத்தின் அடிப்படையில், பாதிக்கப்பட்ட பெண்களுக்கு உடனடி ஆதரவும் வழிகாட்டுதலும் கிடைப்பதை இவ்வழிகாட்டும் குழு உறுதி செய்கிறது.'
                    : 'The Paadhukaappu Thozhi mission operates with utmost transparency and accountability from village volunteer units to central advisory guidance. Grounded in Peace Trust\'s 40-year legacy of community service in Tamil Nadu, this committee ensures every woman and girl receives responsible, compassionate, and timely assistance.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Team Profiles Section */}
        <TeamSection />

        {/* CTA to Village Action Plan & Helpline */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-burgundy via-burgundy-dark to-burgundy rounded-3xl p-6 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card border-2 border-gold-warm/30">
            <div className="space-y-2 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-gold-warm text-burgundy font-black text-[11px] uppercase tracking-wider inline-block">
                {isTamil ? 'கிராம தோழிகள் குழு' : '10-Thozhi Village Cohort'}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-tamil leading-tight">
                {isTamil ? 'ஒவ்வொரு கிராமத்திலும் 10 தோழிகள் பாதுகாப்பு வளையம்' : 'A 10-Thozhi Protection Shield in Every Village'}
              </h2>
              <p className="text-xs sm:text-sm text-rose-soft font-sans leading-relaxed">
                {isTamil
                  ? 'வழிகாட்டும் குழுவின் நெறிமுறைகளுடன், ஒவ்வொரு கிராமத்திலும் பயிற்சி பெற்ற 10 பெண்கள் களத்தில் பணியாற்றுகின்றனர்.'
                  : 'Guided by the advisory committee, each participating village establishes a trained 10-member peer collective on the ground.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                to="/action-plan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-xs shadow-soft transition-transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>{t.nav.actionPlan}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors whitespace-nowrap"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{t.nav.joinUs}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Helpline Banner */}
        <HelplineBanner />
      </main>
    </>
  );
};

export default Team;

