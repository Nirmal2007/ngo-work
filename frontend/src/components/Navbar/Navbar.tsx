import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { HelplineModal } from '../Helpline/HelplineModal';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage, toggleLanguage, isTamil } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelplineModalOpen, setIsHelplineModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/action-plan', label: t.nav.actionPlan },
    { to: '/team', label: t.nav.team },
    { to: '/rights', label: t.nav.rights },
    { to: '/schemes', label: t.nav.schemes },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/join', label: t.nav.joinUs },
    { to: '/contact', label: t.nav.contact },
  ];

  // Tamil labels are much wider than English, so Tamil gets a second nav row
  // and switches to the hamburger drawer below 1400px. English stays single-row.
  // (Full class strings are written out so Tailwind can detect them.)
  const mobileOnly = isTamil ? 'min-[1400px]:hidden' : 'xl:hidden';
  const helplineBtnVisibility = isTamil ? 'hidden min-[1400px]:inline-flex' : 'hidden 2xl:inline-flex';
  const helplineNumberVisibility = isTamil ? 'hidden min-[1400px]:inline' : 'hidden min-[1800px]:inline';

  const renderDesktopLink = (link: { to: string; label: string }) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        `px-2.5 py-1.5 rounded-lg text-[13px] font-bold font-tamil whitespace-nowrap transition-all ${isActive
          ? 'bg-rose-deep text-white shadow-soft font-extrabold'
          : 'text-burgundy hover:text-rose-deep hover:bg-rose-soft/80'
        }`
      }
    >
      {link.label}
    </NavLink>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled
            ? 'bg-rose-white/98 backdrop-blur-md shadow-card border-b border-rose-border py-2 sm:py-2.5'
            : 'bg-rose-white py-2.5 sm:py-3 border-b border-rose-border/60'
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-4">
            {/* Left: Brand */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-rose-deep rounded-xl p-0.5 flex-shrink-0"
              aria-label={isTamil ? 'நம்ம பாதுகாப்புத் தோழி முகப்பு' : 'Paadhukaappu Thozhi Home'}
            >
              <img
                src="/images/logo.png"
                alt="நம்ம பாதுகாப்புத் தோழி - PEACE TRUST Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-contain shadow-soft flex-shrink-0 transition-transform group-hover:scale-105"
              />

              <div className="flex flex-col justify-center items-start">
                <span className="font-extrabold text-[13px] sm:text-base lg:text-lg text-burgundy tracking-tight font-tamil leading-tight whitespace-nowrap">
                  {t.brand.name}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                  <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-wider font-sans leading-none bg-rose-soft px-1.5 py-0.5 rounded text-burgundy border border-rose-border">
                    PEACE TRUST
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-charcoal-light font-bold">
                    • DINDIGUL
                  </span>
                </div>
              </div>
            </Link>

            {/* Center: inline desktop nav (English only, xl: >= 1280px) */}
            {!isTamil && (
              <nav className="hidden xl:flex flex-1 min-w-0 items-center justify-center gap-0.5">
                {navLinks.map(renderDesktopLink)}
              </nav>
            )}

            {/* Right: Language, Helpline, Mobile Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0 h-8">
              {/* Full language pill (sm and above) */}
              <div
                className="hidden sm:inline-flex items-center rounded-full bg-white p-0.5 border border-rose-border shadow-xs text-xs font-bold"
                role="group"
                aria-label="Language selection"
              >
                <button
                  onClick={() => setLanguage('ta')}
                  className={`px-3 py-1 rounded-full text-xs font-tamil transition-all ${language === 'ta'
                      ? 'bg-rose-deep text-white shadow-xs font-bold'
                      : 'text-charcoal-muted hover:text-burgundy'
                    }`}
                  aria-pressed={language === 'ta'}
                >
                  தமிழ்
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-sans transition-all ${language === 'en'
                      ? 'bg-rose-deep text-white shadow-xs font-bold'
                      : 'text-charcoal-muted hover:text-burgundy'
                    }`}
                  aria-pressed={language === 'en'}
                >
                  English
                </button>
              </div>

              {/* Compact language toggle (< sm) */}
              <button
                onClick={toggleLanguage}
                className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-rose-soft border border-rose-border text-burgundy font-extrabold text-xs shadow-xs active:bg-rose-border"
                title={isTamil ? 'Switch to English' : 'தமிழுக்கு மாறுக'}
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5 text-rose-deep" />
                <span className="font-extrabold text-[11px] leading-none uppercase">
                  {language === 'ta' ? 'ENG' : 'தமிழ்'}
                </span>
              </button>

              {/* Helpline button */}
              <a
                href="tel:+919042580158"
                className={`${helplineBtnVisibility} items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-warm hover:bg-gold-hover text-burgundy font-black text-xs shadow-soft transition-transform hover:scale-102 flex-shrink-0 whitespace-nowrap`}
                title={isTamil ? 'அவசர உதவிக்கு அழைக்கவும்' : 'Call our helpline'}
                aria-label="Call our helpline"
              >
                <Phone className="w-3.5 h-3.5 text-burgundy" />
                <span className={`${helplineNumberVisibility} font-sans font-bold`}>9042580158</span>
              </a>

              {/* Mobile / Tablet menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${mobileOnly} p-2 rounded-xl bg-white border border-rose-border text-burgundy hover:bg-rose-soft transition-colors focus:outline-none focus:ring-2 focus:ring-rose-deep flex-shrink-0`}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? t.nav.close : t.nav.menu}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-burgundy" /> : <Menu className="w-5 h-5 text-burgundy" />}
              </button>
            </div>
          </div>

          {/* Tamil only: second-row desktop nav (>= 1400px) */}
          {isTamil && (
            <nav className="hidden min-[1400px]:flex items-center justify-center gap-0.5 mt-2 pt-2 border-t border-rose-border/60">
              {navLinks.map(renderDesktopLink)}
            </nav>
          )}
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className={`${mobileOnly} bg-rose-white border-b border-rose-border px-4 pt-4 pb-6 space-y-4 shadow-elevated animate-fadeIn`}>
            {/* Language switcher inside drawer */}
            <div className="flex justify-center pb-2 border-b border-rose-border/60">
              <div
                className="inline-flex items-center rounded-full bg-white p-1 border border-rose-border shadow-xs text-xs font-bold"
                role="group"
                aria-label="Language selection"
              >
                <button
                  onClick={() => setLanguage('ta')}
                  className={`px-4 py-1.5 rounded-full text-xs font-tamil transition-all ${language === 'ta'
                      ? 'bg-rose-deep text-white shadow-xs font-bold'
                      : 'text-charcoal-muted hover:text-burgundy'
                    }`}
                >
                  தமிழ் (Tamil)
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all ${language === 'en'
                      ? 'bg-rose-deep text-white shadow-xs font-bold'
                      : 'text-charcoal-muted hover:text-burgundy'
                    }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-1 gap-1.5 max-w-sm mx-auto w-full">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-bold font-tamil text-center transition-all ${isActive
                      ? 'bg-rose-deep text-white shadow-sm font-extrabold'
                      : 'text-burgundy hover:bg-rose-soft hover:text-rose-deep'
                    }`
                  }
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Helpline actions in menu */}
            <div className="pt-2 border-t border-rose-border space-y-2 max-w-sm mx-auto w-full">
              <a
                href="tel:+919042580158"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-deep text-white font-extrabold text-sm shadow-soft active:scale-98 transition-transform"
              >
                <Phone className="w-4 h-4 text-gold-warm" />
                <span className="font-tamil">{t.nav.helplineBtn}</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsHelplineModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-rose-border text-burgundy font-semibold text-xs active:scale-98 transition-transform"
              >
                <Shield className="w-4 h-4 text-rose-deep" />
                <span className="font-tamil">{isTamil ? 'அரசு அவசர உதவி எண்கள் (181, 112)' : 'Govt Helplines (181, 112)'}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating Sticky Mobile Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-border p-2 px-3 shadow-elevated flex items-center justify-center gap-2">
        <a
          href="tel:+919042580158"
          className="flex-1 max-w-xs flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-rose-deep text-white font-bold text-xs shadow-soft active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-gold-warm animate-pulse" />
          <span className="truncate font-sans font-bold">{isTamil ? 'உதவி எண்: 9042580158' : 'Helpline: 9042580158'}</span>
        </a>

        <a
          href="https://wa.me/919042580158"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-3 rounded-xl bg-[#25D366] text-white shadow-soft active:scale-98 transition-transform"
          aria-label="WhatsApp Helpline"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
          </svg>
        </a>

        <button
          onClick={() => setIsHelplineModalOpen(true)}
          className="flex-shrink-0 px-3 py-3 rounded-xl bg-gold-warm text-burgundy font-black text-xs active:scale-98 transition-transform font-sans"
          aria-label="National Helplines"
        >
          181 / 112
        </button>
      </div>

      <HelplineModal isOpen={isHelplineModalOpen} onClose={() => setIsHelplineModalOpen(false)} />
    </>
  );
};