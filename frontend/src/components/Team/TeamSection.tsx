import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { teamMembers } from '../../data/teamMembers';
import { TeamMemberCard } from './TeamMemberCard';

export const TeamSection: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const leadershipMembers = teamMembers.filter((m) => m.category === 'leadership');
  const coordinationMembers = teamMembers.filter((m) => m.category === 'coordination');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section
      id="team"
      className="py-16 sm:py-24 bg-gradient-to-b from-rose-white via-white to-rose-white px-4 sm:px-6 lg:px-8 border-t border-rose-border/70 relative overflow-hidden"
    >
      {/* Decorative subtle background circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-rose-soft/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-deep" />
            <span>{t.teamSection.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-burgundy font-tamil leading-tight tracking-tight">
            {t.teamSection.heading}
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans max-w-2xl mx-auto">
            {t.teamSection.subtitle}
          </p>
        </div>

        {/* 1. Core Leadership Grid (3 Columns) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-xl bg-rose-soft text-rose-deep flex items-center justify-center font-bold shadow-xs">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil">
              {t.teamSection.leadershipBadge}
            </h3>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-md md:max-w-none mx-auto w-full items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {leadershipMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants} className="h-full">
                <TeamMemberCard member={member} isLeadership={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider with subtle design */}
        <div className="relative py-4 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-rose-border" />
          </div>
          <div className="relative bg-rose-white px-4 flex items-center gap-2 text-rose-deep">
            <Users className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest text-burgundy">
              {isTamil ? 'அமைதி அறக்கட்டளை வழிகாட்டுதல்' : 'Peace Trust Advisory'}
            </span>
          </div>
        </div>

        {/* 2. Coordination Committee Subsection (6 Members in 3 Columns x 2 Rows) */}
        <div className="space-y-8">
          <div className="text-center sm:text-left space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-soft/80 border border-rose-border text-burgundy text-[11px] font-bold">
              <Users className="w-3.5 h-3.5 text-rose-deep" />
              <span>{t.teamSection.coordinationBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-burgundy font-tamil">
              {t.teamSection.coordinationHeading}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
              {t.teamSection.coordinationSubtitle}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-md sm:max-w-none mx-auto w-full items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {coordinationMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants} className="h-full">
                <TeamMemberCard member={member} isLeadership={false} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
