/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
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

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-brand-blue selection:text-white">
      <Navbar />
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
    </div>
  );
}

