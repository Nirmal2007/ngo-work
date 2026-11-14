import React, { useState } from 'react';
import {
  Users,
  Scale,
  HeartPulse,
  Landmark,
  Smile,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Shield,
  Award,
} from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import {
  villageActionTeam,
  actionPlanPillars,
  monthlyCalendarData,
  specialActivityData,
} from '../data/actionPlan';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const ActionPlan: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [activeWeek, setActiveWeek] = useState<string>('Week 1');

  return (
    <>
      <SEOHandler pageKey="actionPlan" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {t.actionPlan.heading}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight">
            {t.actionPlan.subheading}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {t.actionPlan.description}
          </p>
        </section>

        {/* 1. VISUAL ORGANIZATIONAL STRUCTURE: 10-MEMBER TEAM - Centered in mobile */}
        <section className="bg-white rounded-3xl p-5 sm:p-10 shadow-card border-2 border-rose-border space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-3xl font-extrabold text-burgundy font-tamil">
              {t.actionPlan.structureTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted font-sans">
              {t.actionPlan.structureDesc}
            </p>
          </div>

          {/* Org Chart Layout: Level 1 (Leaders), Level 2 (Specialist Thozhis) */}
          <div className="space-y-6 sm:space-y-8">
            {/* Leadership Tier - Centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
              {villageActionTeam.slice(0, 2).map((role, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-burgundy via-burgundy-dark to-burgundy text-white rounded-2xl p-5 shadow-soft border-2 border-gold-warm/40 relative flex flex-col items-center sm:items-start text-center sm:text-left w-full"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-gold-warm text-burgundy font-black flex items-center justify-center text-sm shadow-xs flex-shrink-0">
                      {role.count}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-base font-tamil text-white">
                        {isTamil ? role.titleTa : role.titleEn}
                      </h3>
                      <p className="text-[11px] text-gold-warm font-bold">{role.count} உறுப்பினர்</p>
                    </div>
                  </div>
                  <p className="text-xs text-rose-soft leading-relaxed font-sans">
                    {isTamil ? role.roleTa : role.roleEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Specialist Thozhis Tier - Centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-md sm:max-w-none mx-auto w-full">
              {villageActionTeam.slice(2).map((role, idx) => (
                <div
                  key={idx}
                  className="bg-rose-soft/40 rounded-2xl p-5 border border-rose-border shadow-soft space-y-3 hover:border-rose-deep/40 transition-all flex flex-col items-center sm:items-start text-center sm:text-left w-full"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="w-8 h-8 rounded-xl bg-white text-burgundy font-black flex items-center justify-center text-xs shadow-xs border border-rose-border">
                      {role.count}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-burgundy bg-gold-warm/30 border border-gold-warm/60 px-2.5 py-0.5 rounded-full">
                      {isTamil ? 'களத் தோழி' : 'Field Thozhi'}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-sm text-burgundy font-tamil">
                      {isTamil ? role.titleTa : role.titleEn}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1 leading-relaxed font-sans">
                      {isTamil ? role.roleTa : role.roleEn}
                    </p>
                  </div>

                  <ul className="pt-2 border-t border-rose-border/60 space-y-1 text-[11px] text-charcoal-muted w-full text-left font-sans">
                    {(isTamil ? role.responsibilitiesTa : role.responsibilitiesEn).map((res, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-deep flex-shrink-0 mt-1.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. FOUR PRIMARY PILLARS OF ACTION - Centered on Mobile */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-deep">
              {isTamil ? 'முக்கிய செயல்பாடுகள்' : 'Core Intervention Areas'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-burgundy font-tamil">
              {t.actionPlan.pillarsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md md:max-w-none mx-auto w-full">
            {actionPlanPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-border/80 shadow-soft space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left w-full hover:border-rose-deep/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-soft text-rose-deep flex items-center justify-center shadow-xs flex-shrink-0">
                    {pillar.icon === 'Scale' && <Scale className="w-6 h-6" />}
                    {pillar.icon === 'HeartPulse' && <HeartPulse className="w-6 h-6" />}
                    {pillar.icon === 'Landmark' && <Landmark className="w-6 h-6" />}
                    {pillar.icon === 'Smile' && <Smile className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-burgundy font-tamil">
                      {isTamil ? pillar.titleTa : pillar.titleEn}
                    </h3>
                    <p className="text-xs text-rose-deep font-bold mt-0.5">
                      {isTamil ? pillar.categoryTa : pillar.categoryEn}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                  {isTamil ? pillar.summaryTa : pillar.summaryEn}
                </p>

                <ul className="space-y-2 pt-2 border-t border-rose-border/60 w-full text-left font-sans">
                  {(isTamil ? pillar.pointsTa : pillar.pointsEn).map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-charcoal leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3. INTERACTIVE MONTHLY ACTIVITY CALENDAR */}
        <section className="bg-gradient-to-b from-rose-soft/40 to-rose-soft/70 rounded-3xl p-5 sm:p-10 border border-rose-border shadow-soft space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-burgundy text-gold-warm text-xs font-black">
              <Calendar className="w-3.5 h-3.5" />
              <span>{isTamil ? 'வாராந்திர சுழற்சி' : 'Weekly Operating Rhythm'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-burgundy font-tamil">
              {t.actionPlan.timelineTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted font-sans">
              {t.actionPlan.timelineDesc}
            </p>
          </div>

          {/* Week Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {monthlyCalendarData.map((item) => (
              <button
                key={item.week}
                onClick={() => setActiveWeek(item.week)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                  activeWeek === item.week
                    ? 'bg-rose-deep text-white shadow-soft scale-105'
                    : 'bg-white text-burgundy hover:bg-rose-soft border border-rose-border'
                }`}
              >
                {isTamil ? item.weekTa : item.week}
              </button>
            ))}
          </div>

          {/* Active Week Display Card */}
          {(() => {
            const currentWeekData =
              monthlyCalendarData.find((w) => w.week === activeWeek) || monthlyCalendarData[0];
            return (
              <div className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-rose-border shadow-card max-w-3xl mx-auto space-y-5 animate-fadeIn w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-border/60 pb-4 text-center sm:text-left items-center sm:items-start">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-gold-warm/25 text-burgundy border border-gold-warm/60">
                      {isTamil ? currentWeekData.badgeTa : currentWeekData.badgeEn}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil mt-1">
                      {isTamil ? currentWeekData.titleTa : currentWeekData.titleEn}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-burgundy bg-rose-soft px-3 py-1.5 rounded-xl flex-shrink-0 border border-rose-border">
                    <Clock className="w-3.5 h-3.5 text-rose-deep" />
                    <span>{currentWeekData.timing}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal leading-relaxed text-center sm:text-left font-sans">
                  {isTamil ? currentWeekData.descTa : currentWeekData.descEn}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-black text-rose-deep uppercase tracking-wider text-center sm:text-left">
                    {isTamil ? 'வாராந்திர இலக்குகள் & பணிகள்:' : 'Key Weekly Deliverables:'}
                  </div>
                  <ul className="space-y-2 text-left font-sans">
                    {(isTamil
                      ? currentWeekData.deliverablesTa
                      : currentWeekData.deliverablesEn
                    ).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}

          {/* Special Flagship Activity: First Sunday Circle */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-burgundy via-burgundy-dark to-burgundy text-white rounded-3xl p-5 sm:p-7 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left w-full border-2 border-gold-warm/30">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold-warm text-burgundy inline-block">
                {isTamil ? specialActivityData.badgeTa : specialActivityData.badgeEn}
              </span>
              <h4 className="text-base sm:text-lg font-bold font-tamil">
                {isTamil ? specialActivityData.titleTa : specialActivityData.titleEn}
              </h4>
              <p className="text-xs text-rose-soft font-sans max-w-xl">
                {isTamil ? specialActivityData.descTa : specialActivityData.descEn}
              </p>
              <div className="text-xs text-gold-warm font-black pt-1">
                {isTamil ? specialActivityData.timingTa : specialActivityData.timingEn}
              </div>
            </div>
            <Award className="w-10 h-10 text-gold-warm flex-shrink-0 hidden sm:block" />
          </div>
        </section>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
