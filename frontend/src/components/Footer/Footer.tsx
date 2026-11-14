import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <footer className="bg-burgundy text-white pt-14 pb-24 md:pb-12 border-t-4 border-gold-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Brand & Organization */}
          <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="PEACE TRUST - Paadhukaappu Thozhi Logo"
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 shadow-soft flex-shrink-0"
              />
              <div className="text-left">
                <h3 className="font-extrabold text-base sm:text-lg text-white font-tamil leading-tight">
                  {t.brand.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="px-2 py-0.5 rounded bg-gold-warm text-burgundy text-[10px] font-black uppercase tracking-wider font-sans">
                    PEACE TRUST
                  </span>
                  <span className="text-[10px] text-rose-soft font-bold">
                    • DINDIGUL
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-rose-soft/90 leading-relaxed font-sans max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="pt-2 border-t border-rose-deep/40 w-full">
              <p className="text-xs text-gold-warm font-bold mb-1">
                {isTamil ? 'அமைப்பின் நேரடி உதவி எண்:' : 'Direct Project Helpline:'}
              </p>
              <a
                href="tel:+919042580158"
                className="inline-flex items-center gap-2 text-white font-black text-base hover:text-gold-warm transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-warm" />
                <span className="font-sans">+91 9042580158</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-gold-warm">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/action-plan" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.actionPlan}
                </Link>
              </li>
              <li>
                <Link to="/rights" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.rights}
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.schemes}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.joinUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-rose-soft hover:text-gold-warm transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gold-warm hover:underline transition-colors font-semibold">
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Emergency & Govt Resources */}
          <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start w-full">
            <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-gold-warm flex items-center justify-center sm:justify-start gap-2">
              <Shield className="w-4 h-4 text-rose-blush" />
              <span>{t.footer.helplinesTitle}</span>
            </h4>
            <div className="space-y-2 text-xs w-full max-w-xs sm:max-w-none">
              <div className="bg-burgundy-dark/70 p-2.5 rounded-xl border border-rose-deep/40 text-left">
                <div className="font-bold text-white flex justify-between items-center">
                  <span className="font-black text-sm">181</span>
                  <span className="text-[10px] text-gold-warm font-bold">Women Helpline</span>
                </div>
                <div className="text-[11px] text-rose-soft">24/7 மகளிர் அவசர உதவி</div>
              </div>

              <div className="bg-burgundy-dark/70 p-2.5 rounded-xl border border-rose-deep/40 text-left">
                <div className="font-bold text-white flex justify-between items-center">
                  <span className="font-black text-sm">112</span>
                  <span className="text-[10px] text-gold-warm font-bold">National Emergency</span>
                </div>
                <div className="text-[11px] text-rose-soft">காவல்துறை & அவசர மீட்பு</div>
              </div>

              <div className="bg-burgundy-dark/70 p-2.5 rounded-xl border border-rose-deep/40 text-left">
                <div className="font-bold text-white flex justify-between items-center">
                  <span className="font-black text-sm">1098</span>
                  <span className="text-[10px] text-gold-warm font-bold">Child Helpline</span>
                </div>
                <div className="text-[11px] text-rose-soft">குழந்தைகள் பாதுகாப்பு</div>
              </div>

              <div className="bg-burgundy-dark/70 p-2.5 rounded-xl border border-rose-deep/40 text-left">
                <div className="font-bold text-white flex justify-between items-center">
                  <span className="font-black text-sm">15100</span>
                  <span className="text-[10px] text-gold-warm font-bold">Free Legal Aid</span>
                </div>
                <div className="text-[11px] text-rose-soft">இலவச சட்ட உதவி மையம்</div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Addresses */}
          <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start w-full">
            <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-gold-warm">
              {t.footer.contactTitle}
            </h4>

            {/* HQ */}
            <div className="text-xs space-y-1 bg-burgundy-dark/70 p-3.5 rounded-2xl border border-rose-deep/40 w-full max-w-xs sm:max-w-none text-left">
              <div className="font-black text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-warm flex-shrink-0" />
                <span>PEACE TRUST HEADQUARTERS</span>
              </div>
              <p className="text-rose-soft pl-5 leading-relaxed">
                Near Police Housing Colony, Trichy Road, Dindigul – 624005, Tamil Nadu.
              </p>
              <div className="pt-2 pl-5 space-y-1">
                <a href="tel:+914512410021" className="block text-rose-soft hover:text-white font-sans">
                  +91 451-2410021
                </a>
                <a href="tel:+918667265272" className="block text-rose-soft hover:text-white font-sans">
                  +91 8667265272
                </a>
                <a href="mailto:info@peacetrust.in" className="block text-gold-warm hover:underline font-sans font-bold">
                  info@peacetrust.in
                </a>
              </div>
            </div>

            {/* College of Education */}
            <div className="text-xs space-y-1 bg-burgundy-dark/70 p-3 rounded-2xl border border-rose-deep/40 w-full max-w-xs sm:max-w-none text-left">
              <div className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-warm flex-shrink-0" />
                <span>Peace College of Education</span>
              </div>
              <p className="text-rose-soft pl-5">
                Vittalanayakanpatti, Karur Road, NH-7, Dindigul – 624709.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-rose-deep/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-soft text-center sm:text-left">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center justify-center gap-2">
            <span>{t.footer.designedFor}</span>
            <Heart className="w-3.5 h-3.5 text-gold-warm inline fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
