import { Phone, MapPin, Clock, Menu, X, CheckCircle, Star, Languages } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-2xl font-display">
                M
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-none font-display text-brand-blue-dark">Muskaan Dental Care</h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Anisabad, Patna</p>
              </div>
            </a>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">{t.nav.home}</a>
            <a href="#services" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">{t.nav.services}</a>
            <a href="#why-us" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">{t.nav.whyUs}</a>
            <a href="#doctor" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">{t.nav.doctor}</a>
            <a href="#testimonials" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">{t.nav.reviews}</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            {/* Language Toggle */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors border border-slate-200 px-3 py-1.5 rounded-full"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <div className="text-right border-r pr-6 border-slate-200 hidden lg:block">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Open till 8 PM</p>
              <p className="text-sm font-bold text-brand-blue mt-0.5">+91 87570 87454</p>
            </div>
            <a href="#appointment" className="bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-brand-blue/30 transition-colors">
              {t.nav.book}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Services</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Why Choose Us</a>
            <a href="#doctor" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Meet Doctor</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Reviews</a>
            <a href="tel:8757087454" className="bg-slate-100 text-slate-900 font-semibold py-3 px-4 rounded-lg text-center flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: 8757087454</span>
            </a>
            <a href="#appointment" onClick={() => setIsMenuOpen(false)} className="bg-brand-blue text-white font-semibold py-3 px-4 rounded-lg text-center">
              Book Appointment Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
