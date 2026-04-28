/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import { LanguageProvider } from './contexts/LanguageContext';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import DoctorProfile from './components/DoctorProfile';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Appointment from './components/Appointment';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import AIAssistant from './components/AIAssistant';

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-slate-900 bg-white selection:bg-brand-blue selection:text-white">
        <Navbar />
        <div className="mt-20">
          <Offers />
        </div>
        <main>
          <Hero />
          <TrustBadges />
          <Services />
          <WhyChooseUs />
          <DoctorProfile />
          <BeforeAfter />
          <Testimonials />
          <FAQ />
          <Appointment />
          <Location />
        </main>
        <Footer />
        <StickyWhatsApp />
        <AIAssistant />
      </div>
    </LanguageProvider>
  );
}

