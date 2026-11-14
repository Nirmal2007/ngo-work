import React from 'react';
import {
  Scale,
  HeartPulse,
  Home,
  Smile,
  Landmark,
  ShieldAlert,
  X,
  Phone,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { ServiceItem } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const renderServiceIcon = (iconName: string, className = 'w-6 h-6') => {
  switch (iconName) {
    case 'Scale':
      return <Scale className={className} />;
    case 'HeartPulse':
      return <HeartPulse className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Smile':
      return <Smile className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const { isTamil, t } = useLanguage();

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border-2 border-rose-border overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-burgundy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-warm text-burgundy flex items-center justify-center shadow-soft flex-shrink-0">
              {renderServiceIcon(service.icon, 'w-6 h-6')}
            </div>
            <div>
              <h2 id="service-modal-title" className="text-xl font-extrabold font-tamil text-white">
                {isTamil ? service.titleTa : service.titleEn}
              </h2>
              <p className="text-xs text-gold-warm font-bold mt-0.5">
                {isTamil ? service.taglineTa : service.taglineEn}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t.nav.close}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs font-black text-rose-deep uppercase tracking-wider mb-2">
              {isTamil ? 'சேவை விளக்கம்' : 'Detailed Overview'}
            </h3>
            <p className="text-sm text-charcoal leading-relaxed font-sans">
              {isTamil ? service.fullDescTa : service.fullDescEn}
            </p>
          </div>

          {/* Assistance Provided (What We Do) */}
          <div className="bg-rose-soft/40 p-4 rounded-2xl border border-rose-border">
            <h4 className="text-xs font-black text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isTamil ? 'நாங்கள் வழங்கும் உதவிகள் (Scope of Assistance)' : 'Assistance Provided'}</span>
            </h4>
            <ul className="space-y-2">
              {(isTamil ? service.assistanceProvidedTa : service.assistanceProvidedEn).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-charcoal leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Limitations (What We Do Not Do) */}
          <div className="bg-gold-warm/15 p-4 rounded-2xl border border-gold-warm/60">
            <h4 className="text-xs font-black text-burgundy uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-burgundy" />
              <span>{isTamil ? 'சேவை எல்லைகள் (Important Limitations)' : 'Service Limitations'}</span>
            </h4>
            <ul className="space-y-2">
              {(isTamil ? service.limitationsTa : service.limitationsEn).map((lim, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-charcoal leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-deep flex-shrink-0 mt-1.5" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct helpline referral callout */}
          <div className="p-4 rounded-2xl bg-rose-soft border border-rose-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-burgundy font-bold text-center sm:text-left">
              {isTamil ? service.helplineNoticeTa : service.helplineNoticeEn}
            </div>
            <a
              href="tel:+919042580158"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-deep text-white text-xs font-extrabold shadow-soft hover:bg-rose-deep/90 transition-colors flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-gold-warm" />
              <span className="font-sans">{isTamil ? 'அழைக்க: 9042580158' : 'Call 9042580158'}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-rose-soft/50 border-t border-rose-border flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-burgundy text-white hover:bg-rose-deep transition-colors"
          >
            {t.services.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
