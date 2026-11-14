import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartHandshake, User } from 'lucide-react';
import { TeamMember } from '../../data/teamMembers';
import { useLanguage } from '../../i18n/LanguageContext';

interface TeamMemberCardProps {
  member: TeamMember;
  isLeadership?: boolean;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isLeadership = false }) => {
  const { isTamil, t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const name = isTamil ? member.nameTamil : member.nameEnglish;
  const designation = isTamil ? member.designationTamil : member.designationEnglish;
  const organization = isTamil ? member.organizationTamil : member.organizationEnglish;
  const responsibility = isTamil ? member.responsibilityTamil : member.responsibilityEnglish;

  // Generate clean initials for photo placeholder fallback
  const getInitials = (str: string) => {
    const parts = str.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0].charAt(0)}${parts[1].charAt(0)}`;
    }
    return str.slice(0, 2);
  };

  const isChairperson = member.id === 'roobabalan';
  const isCoordinator = member.id === 'srinivasan';

  if (isLeadership) {
    return (
      <motion.div
        className={`group relative bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full border-2 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1 ${isChairperson
          ? 'border-gold-warm/90 ring-2 ring-gold-warm/20 bg-gradient-to-b from-white via-rose-white to-rose-soft/30'
          : isCoordinator
            ? 'border-rose-deep/40 ring-1 ring-rose-deep/15 bg-gradient-to-b from-white to-rose-soft/20'
            : 'border-rose-border hover:border-rose-deep/40'
          }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Top Header / Hierarchy Badge */}
        <div className="flex items-center justify-between gap-2 mb-5">
          {isChairperson ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-warm text-burgundy text-[11px] font-black uppercase tracking-wider shadow-xs">
              <Award className="w-3.5 h-3.5 text-burgundy" />
              <span>{isTamil ? 'குழுத் தலைவர்' : 'Committee Head'}</span>
            </span>
          ) : isCoordinator ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-soft text-rose-deep border border-rose-border text-[11px] font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-deep" />
              <span>{isTamil ? 'திட்ட ஒருங்கிணைப்பு' : 'Project Direction'}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-soft/60 text-burgundy text-[11px] font-bold">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-deep" />
              <span>{isTamil ? 'சமூக நலன்' : 'Community Welfare'}</span>
            </span>
          )}

          {
            member.nameEnglish != "Arockiamary A" ? <span className="text-[10px] font-extrabold text-charcoal-muted uppercase tracking-wider bg-rose-soft/50 px-2 py-0.5 rounded-md border border-rose-border/60">
              PEACE TRUST
            </span> : ''
          }

        </div>

        {/* Profile Photograph Frame */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-white shadow-soft transition-transform duration-300 group-hover:scale-105 border-2 ${isChairperson
                ? 'border-gold-warm shadow-gold-warm/20'
                : 'border-rose-border group-hover:border-rose-deep/60'
                }`}
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-rose-soft flex items-center justify-center relative">
                {!imageError ? (
                  <img
                    src={`/images/team/${member.image}`}
                    alt={`${name} - ${designation}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-burgundy p-2">
                    <User className="w-10 h-10 text-rose-deep/50 mb-1" />
                    <span className="font-extrabold text-sm tracking-tight text-burgundy">
                      {getInitials(name)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle Status Indicator */}
            <div
              className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-soft border-2 border-white ${isChairperson ? 'bg-gold-warm text-burgundy' : 'bg-rose-deep text-white'
                }`}
              title={designation}
            >
              {isChairperson ? (
                <Award className="w-3.5 h-3.5" />
              ) : (
                <ShieldCheck className="w-3.5 h-3.5" />
              )}
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-1 mb-3">
            <h3 className="text-lg sm:text-xl font-extrabold text-burgundy font-tamil tracking-tight">
              {name}
            </h3>
            <p className="text-xs sm:text-[13px] font-extrabold text-rose-deep leading-snug">
              {designation}
            </p>
            {organization && (
              <p className="text-[11px] font-bold text-charcoal-muted leading-tight pt-0.5">
                {organization}
              </p>
            )}
          </div>
        </div>

        {/* Mission Responsibility */}
        <div className="pt-4 mt-2 border-t border-rose-border/70 bg-rose-soft/30 rounded-2xl p-3.5 text-left">
          <div className="text-[10px] font-black uppercase tracking-wider text-rose-deep mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-deep" />
            <span>{t.teamSection.responsibilitiesLabel}</span>
          </div>
          <p className="text-xs text-charcoal leading-relaxed font-sans line-clamp-4">
            {responsibility}
          </p>
        </div>
      </motion.div>
    );
  }

  // Coordination Committee Member Card
  return (
    <motion.div
      className="group bg-white rounded-2xl p-5 border border-rose-border/80 shadow-soft hover:shadow-card hover:border-rose-deep/40 transition-all duration-300 flex flex-col justify-between h-full"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3.5 mb-3.5">
        {/* Photo Frame */}
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl p-0.5 bg-white border-2 border-rose-border group-hover:border-rose-deep/60 shadow-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full rounded-[14px] overflow-hidden bg-rose-soft flex items-center justify-center">
            {!imageError ? (
              <img
                src={`/images/team/${member.image}`}
                alt={`${name} - ${designation}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-burgundy">
                <User className="w-6 h-6 text-rose-deep/50 mb-0.5" />
                <span className="font-extrabold text-[11px] tracking-tight text-burgundy">
                  {getInitials(name)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Member Name & Designation */}
        <div className="min-w-0 flex-1">
          <span className="inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-rose-soft text-burgundy border border-rose-border/60 mb-1">
            {isTamil ? 'ஒருங்கிணைப்பாளர்' : 'Coordinator'}
          </span>
          <h4 className="font-extrabold text-sm sm:text-base text-burgundy font-tamil truncate">
            {name}
          </h4>
          <p className="text-[11px] font-bold text-rose-deep leading-tight truncate">
            {designation}
          </p>
        </div>
      </div>

      {/* Responsibility snippet */}
      <div className="pt-2.5 border-t border-rose-border/50 text-left">
        <p className="text-[11px] text-charcoal-muted leading-relaxed line-clamp-2 font-sans">
          {responsibility}
        </p>
      </div>
    </motion.div>
  );
};
