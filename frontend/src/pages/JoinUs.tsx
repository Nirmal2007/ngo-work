import React from 'react';
import {
  HeartHandshake,
  CheckCircle2,
  Users,
  Award,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { VolunteerForm } from '../components/Forms/VolunteerForm';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const JoinUs: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <>
      <SEOHandler pageKey="join" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'தன்னார்வலர் சேர்க்கை' : 'Volunteer Enrolment & Community Leadership'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.join.heading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.join.subheading}
          </p>
        </section>

        {/* Content & Form Grid - Centered in mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-md lg:max-w-none mx-auto w-full">
          {/* Left Column: Why Join, Who Can Join, What Peace Trust Provides (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-border shadow-soft space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start w-full">
              <h2 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-rose-deep" />
                <span>{isTamil ? 'ஏன் தோழியாக இணைய வேண்டும்?' : 'Why Join As A Thozhi?'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
                {t.join.intro}
              </p>
            </div>

            {/* Criteria & Expectations */}
            <div className="bg-rose-soft/40 rounded-3xl p-6 sm:p-8 border border-rose-border space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start w-full">
              <h3 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-deep" />
                <span>{t.join.criteriaTitle}</span>
              </h3>
              <ul className="space-y-3 text-left w-full font-sans">
                {t.join.criteria.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Peace Trust Provides to Volunteers */}
            <div className="bg-gradient-to-br from-burgundy via-burgundy-dark to-burgundy text-white rounded-3xl p-6 sm:p-8 shadow-soft space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start w-full border-2 border-gold-warm/40">
              <h3 className="text-base sm:text-lg font-extrabold font-tamil text-gold-warm flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-warm" />
                <span>
                  {isTamil ? 'அமைதி அறக்கட்டளை வழங்கும் ஆதரவு:' : 'What Peace Trust Provides:'}
                </span>
              </h3>
              <ul className="space-y-2.5 text-xs text-rose-soft text-left w-full font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-warm flex-shrink-0 mt-1.5" />
                  <span>
                    {isTamil
                      ? 'பெண்கள் பாதுகாப்புச் சட்டங்கள் மற்றும் புகார் நடைமுறைகள் குறித்த முழுமையான நேரடிப் பயிற்சி.'
                      : 'Comprehensive structured orientation on women protection acts and crisis escalation.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-warm flex-shrink-0 mt-1.5" />
                  <span>
                    {isTamil
                      ? 'அதிகாரப்பூர்வ "பாதுகாப்புத் தோழி" கையேடு மற்றும் அடையாள அட்டை.'
                      : 'Official Paadhukaappu Thozhi community handbook and volunteer credential card.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-warm flex-shrink-0 mt-1.5" />
                  <span>
                    {isTamil
                      ? 'களப்பணிகளின் போது அமைதி அறக்கட்டளை மூத்த ஒருங்கிணைப்பாளர்களின் நேரடி உதவி.'
                      : 'Active mentorship and on-call guidance from senior Peace Trust coordinators.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Enrolment Form (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <VolunteerForm />
          </div>
        </div>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
