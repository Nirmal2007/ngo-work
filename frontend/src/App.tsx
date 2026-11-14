import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/Common/ScrollToTop';
import { ScrollProgressBar } from './components/Common/ScrollProgressBar';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ActionPlan } from './pages/ActionPlan';
import { Team } from './pages/Team';
import { Rights } from './pages/Rights';
import { Schemes } from './pages/Schemes';
import { Gallery } from './pages/Gallery';
import { JoinUs } from './pages/JoinUs';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-rose-white text-charcoal">
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <div className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/action-plan" element={<ActionPlan />} />
          <Route path="/team" element={<Team />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
