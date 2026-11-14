import React from 'react';
import { ShieldCheck, Lock, EyeOff, AlertTriangle } from 'lucide-react';
import { SEOHandler } from '../seo/SEOHandler';
import { useLanguage } from '../i18n/LanguageContext';
import { HelplineBanner } from '../components/Helpline/HelplineBanner';

export const PrivacyPolicy: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <>
      <SEOHandler pageKey="privacy" />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 sm:space-y-10 bg-rose-white">
        {/* Header Breadcrumb & Title */}
        <section className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy text-xs font-black uppercase tracking-wider">
            {isTamil ? 'பாதுகாப்பு & நெறிமுறைகள்' : 'Ethics & Data Privacy'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-burgundy font-tamil">
            {t.privacy.title}
          </h1>
          <p className="text-xs text-charcoal-muted font-sans">{t.privacy.lastUpdated}</p>
        </section>

        {/* Content Box */}
        <article className="bg-white rounded-3xl p-5 sm:p-10 shadow-card border-2 border-rose-border space-y-8 text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
          <p className="text-sm sm:text-base text-charcoal font-medium border-l-4 border-rose-deep pl-4">
            {t.privacy.intro}
          </p>

          {/* Section 1: Non-Negotiable Survivor Confidentiality */}
          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil flex items-center gap-2">
              <Lock className="w-5 h-5 text-rose-deep" />
              <span>{isTamil ? '1. பாதிக்கப்பட்டோரின் இரகசியத்தன்மை பாதுகாப்பு' : '1. Inviolable Survivor Confidentiality'}</span>
            </h2>
            <p>
              {isTamil
                ? 'எங்கள் உதவி எண், அலுவலகம் அல்லது களத் தோழிகள் மூலம் தொடர்பு கொள்ளும் எந்தவொரு பெண்ணின் தனிநபர் விவரங்களும் (பெயர், முகவரி, தொடர்பு எண், குடும்ப வரலாறு, அல்லது புகாரின் விவரங்கள்) எக்காரணத்தைக் கொண்டும் பொதுவெளியிலோ, இணையத்திலோ அல்லது வணிக நோக்கங்களுக்காகவோ பகிரப்பட மாட்டாது.'
                : 'Under no circumstances are the personal narratives, names, addresses, or phone numbers of women reaching our helpline or field volunteers published online or shared with third parties for commercial use.'}
            </p>
          </section>

          {/* Section 2: Child Protection & POCSO Compliance */}
          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-rose-deep" />
              <span>{isTamil ? '2. குழந்தைகள் மற்றும் வளரிளம் பெண்கள் பாதுகாப்பு (POCSO)' : '2. Child Identity Protection (POCSO Act)'}</span>
            </h2>
            <p>
              {isTamil
                ? 'பாலியல் குற்றங்களிலிருந்து குழந்தைகளைப் பாதுகாக்கும் சட்டம் (POCSO Act 2012) பிரிவு 23-இன் படி, பாதிக்கப்பட்ட எந்தவொரு குழந்தையின் அடையாளத்தையோ அல்லது புகைப்படத்தையோ வெளியிடுவது சட்டப்படி தண்டனைக்குரிய குற்றமாகும். அமைதி அறக்கட்டளை அமைப்பின் அனைத்து ஆவணங்களும் இச்சட்ட விதிகளுக்கு 100% உட்பட்டு இரகசியமாக பராமரிக்கப்படுகின்றன.'
                : 'In accordance with Section 23 of the POCSO Act 2012, disclosing the identity, residence, school, or visual depiction of a child survivor is strictly prohibited. Peace Trust enforces a zero-disclosure protocol on all minor-related interventions.'}
            </p>
          </section>

          {/* Section 3: Safe Browsing Reassurance */}
          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{isTamil ? '3. பாதுகாப்பான இணையதள உலாவல் வழிகாட்டல்' : '3. Discreet Browsing Guidelines'}</span>
            </h2>
            <p>
              {isTamil
                ? 'குடும்ப வன்முறை அல்லது அச்சுறுத்தலை எதிர்கொள்ளும் பெண்கள் இந்த தளத்தை அணுகும்போது அவர்களின் பாதுகாப்பிற்காக உலாவிய பிறகு உலாவி வரலாற்றை (Browser History) அழிக்குமாறு பரிந்துரைக்கிறோம்.'
                : 'For visitors living in dangerous or surveilled domestic environments, we recommend clearing browser history after reviewing sensitive legal and helpline information.'}
            </p>
          </section>

          {/* Section 4: Public Grievance Database Prohibition */}
          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-extrabold text-burgundy font-tamil flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-deep" />
              <span>{isTamil ? '4. பொது புகார் தரவுத்தளம் இல்லை' : '4. No Unprotected Public Grievance Log'}</span>
            </h2>
            <p>
              {isTamil
                ? 'பாதிக்கப்பட்ட பெண்களின் பெயர்களையோ அல்லது புகார்களையோ காட்டும் எந்தவொரு பொதுப் பட்டியலும் இந்த இணையதளத்தில் இல்லை. அனைத்து வழக்குகளும் பாதுகாப்பான அலுவலக கோப்புகளில் மட்டுமே சட்டரீதியாக ஆவணப்படுத்தப்படுகின்றன.'
                : 'This platform does not publish public complaint registers or live victim trackers. All case records are managed under sealed physical and encrypted departmental protocols at Peace Trust headquarters.'}
            </p>
          </section>

          {/* Section 5: Statutory Disclaimer */}
          <section className="bg-rose-soft/50 p-4 sm:p-5 rounded-2xl border border-rose-border space-y-2">
            <h3 className="font-extrabold text-xs sm:text-sm text-burgundy">
              {isTamil ? 'சட்டரீதியான பொறுப்புத்துறப்பு:' : 'Statutory Disclaimer:'}
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              {isTamil
                ? 'நம்ம பாதுகாப்புத் தோழி என்பது அமைதி அறக்கட்டளை அமைப்பின் சமூக ஆதரவு திட்டமாகும். இது ஒரு தன்னார்வ வழிகாட்டல் அமைப்பாகும்; இது காவல்துறைக்கோ, நீதிமன்றத்திற்கோ அல்லது அரசு அவசர சேவைகளுக்கோ மாற்றாகாது.'
                : 'Paadhukaappu Thozhi is a community guidance and legal literacy initiative by Peace Trust. It does not replace statutory police forces, courts of law, or emergency government rescue helplines.'}
            </p>
          </section>
        </article>

        {/* Helpline */}
        <HelplineBanner />
      </main>
    </>
  );
};
