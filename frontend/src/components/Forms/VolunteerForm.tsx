import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { API_BASE_URL } from '../../config/api';

export const VolunteerForm: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    village: '',
    district: 'Dindigul',
    occupation: '',
    areaOfInterest: t.join.areas[0],
    intro: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = isTamil ? 'பெயரை உள்ளிடவும்' : 'Full name is required';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = isTamil ? 'கைபேசி எண் அவசியம்' : 'Mobile number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = isTamil
        ? 'சரியான 10 இலக்க இந்திய கைபேசி எண்ணை உள்ளிடவும்'
        : 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.village.trim()) {
      newErrors.village = isTamil ? 'கிராமப் பெயரை உள்ளிடவும்' : 'Village/Ward is required';
    }

    if (!formData.district.trim()) {
      newErrors.district = isTamil ? 'மாவட்டப் பெயரை உள்ளிடவும்' : 'District is required';
    }

    if (!formData.consent) {
      newErrors.consent = isTamil
        ? 'தன்னார்வ ஒப்புதலை ஏற்கவும்'
        : 'Please agree to the volunteer pledge';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(
        `${API_BASE_URL}/submissions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName.trim(),
            phone: formData.phone.replace(/[\s-]/g, ''),
            village: formData.village.trim(),
            district: formData.district.trim(),
            occupation: formData.occupation,
            areaOfInterest: formData.areaOfInterest,
            intro: formData.intro,
            consent: formData.consent,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({
            general: result.message || 'Submission failed. Please try again.',
          });
        }

        return;
      }

      setIsSubmitted(true);

    } catch (error) {
      console.error('Submission error:', error);

      setErrors({
        general: 'Unable to connect to the server. Please try again later.',
      });

    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-card border-2 border-emerald-300 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-burgundy font-tamil">
          {t.join.successTitle}
        </h3>
        <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed font-sans">
          {t.join.successDesc}
        </p>
        <div className="p-4 rounded-2xl bg-rose-soft/50 border border-rose-border text-xs text-charcoal text-left max-w-sm mx-auto space-y-1 font-sans">
          <div>
            <span className="font-bold text-burgundy">{isTamil ? 'விண்ணப்பதாரர்:' : 'Applicant:'}</span>{' '}
            {formData.fullName}
          </div>
          <div>
            <span className="font-bold text-burgundy">{isTamil ? 'கிராமம்:' : 'Village:'}</span>{' '}
            {formData.village}, {formData.district}
          </div>
          <div>
            <span className="font-bold text-burgundy">{isTamil ? 'முதன்மை ஆர்வம்:' : 'Selected Focus:'}</span>{' '}
            {formData.areaOfInterest}
          </div>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              village: '',
              district: 'Dindigul',
              occupation: '',
              areaOfInterest: t.join.areas[0],
              intro: '',
              consent: false,
            });
          }}
          className="text-xs font-bold text-rose-deep hover:text-burgundy pt-2"
        >
          {isTamil ? 'மற்றொரு விண்ணப்பத்தை சமர்ப்பிக்க' : 'Submit Another Volunteer Form'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-6 sm:p-8 rounded-3xl shadow-card border-2 border-rose-border space-y-5"
    >
      <div className="border-b border-rose-border pb-3 flex items-center gap-2">
        <HeartHandshake className="w-5 h-5 text-rose-deep" />
        <h3 className="font-extrabold text-lg text-burgundy font-tamil">{t.join.formTitle}</h3>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-bold text-charcoal mb-1">
          {t.join.name} <span className="text-rose-deep">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder={t.join.namePlaceholder}
          className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.fullName ? 'border-rose-deep bg-rose-soft/30' : 'border-rose-border bg-rose-white/50'
            } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans`}
        />
        {errors.fullName && (
          <p className="text-rose-deep text-xs mt-1 flex items-center gap-1 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-xs font-bold text-charcoal mb-1">
          {t.join.phone} <span className="text-rose-deep">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder={t.join.phonePlaceholder}
          maxLength={10}
          className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.phone ? 'border-rose-deep bg-rose-soft/30' : 'border-rose-border bg-rose-white/50'
            } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans`}
        />
        {errors.phone && (
          <p className="text-rose-deep text-xs mt-1 flex items-center gap-1 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* Village & District (2 cols on tablet+) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="village" className="block text-xs font-bold text-charcoal mb-1">
            {t.join.village} <span className="text-rose-deep">*</span>
          </label>
          <input
            type="text"
            id="village"
            value={formData.village}
            onChange={(e) => setFormData({ ...formData, village: e.target.value })}
            placeholder={t.join.villagePlaceholder}
            className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.village ? 'border-rose-deep bg-rose-soft/30' : 'border-rose-border bg-rose-white/50'
              } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans`}
          />
          {errors.village && (
            <p className="text-rose-deep text-xs mt-1 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.village}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="district" className="block text-xs font-bold text-charcoal mb-1">
            {t.join.district} <span className="text-rose-deep">*</span>
          </label>
          <input
            type="text"
            id="district"
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            placeholder={t.join.districtPlaceholder}
            className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.district ? 'border-rose-deep bg-rose-soft/30' : 'border-rose-border bg-rose-white/50'
              } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans`}
          />
          {errors.district && (
            <p className="text-rose-deep text-xs mt-1 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.district}</span>
            </p>
          )}
        </div>
      </div>

      {/* Occupation */}
      <div>
        <label htmlFor="occupation" className="block text-xs font-bold text-charcoal mb-1">
          {t.join.occupation}
        </label>
        <input
          type="text"
          id="occupation"
          value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          placeholder={t.join.occupationPlaceholder}
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-rose-border bg-rose-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans"
        />
      </div>

      {/* Area of Interest */}
      <div>
        <label htmlFor="areaOfInterest" className="block text-xs font-bold text-charcoal mb-1">
          {t.join.areaOfInterest}
        </label>
        <select
          id="areaOfInterest"
          value={formData.areaOfInterest}
          onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-rose-border bg-rose-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans"
        >
          {t.join.areas.map((area, idx) => (
            <option key={idx} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Short Intro */}
      <div>
        <label htmlFor="intro" className="block text-xs font-bold text-charcoal mb-1">
          {t.join.introLabel}
        </label>
        <textarea
          id="intro"
          rows={3}
          value={formData.intro}
          onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
          placeholder={t.join.introPlaceholder}
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-rose-border bg-rose-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-deep transition-all font-sans"
        />
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 mt-0.5 rounded text-rose-deep focus:ring-rose-deep"
          />
          <span className="text-xs text-charcoal-muted leading-relaxed font-sans">
            {t.join.consentText}
          </span>
        </label>
        {errors.consent && (
          <p className="text-rose-deep text-xs mt-1 flex items-center gap-1 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.consent}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-2xl bg-rose-deep hover:bg-rose-deep/90 text-white font-extrabold text-sm shadow-soft transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        <Send className="w-4 h-4 text-gold-warm" />
        <span>{isSubmitting ? t.join.submitting : t.join.submitBtn}</span>
      </button>

      <p className="text-[11px] text-center text-charcoal-muted font-sans">
        {isTamil
          ? 'உங்கள் தகவல்கள் அமைதி அறக்கட்டளை அமைப்பால் இரகசியமாக பராமரிக்கப்படும்.'
          : 'Your details will be maintained confidentially by Peace Trust.'}
      </p>
    </form>
  );
};
