import { CalendarCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center relative overflow-hidden">
          
          <div className="max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-bold uppercase tracking-wider">⭐ {t.hero.rating}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-800 leading-[1.1] mb-6 whitespace-pre-line">
              {t.hero.title.split('Treatment').map((part, i) => i === 0 ? (
                <span key={i}>{part}<span className="text-brand-blue">Treatment</span></span>
              ) : <span key={i}>{part}</span>)}
            </h1>
            
            <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <a href="https://wa.me/918757087454" target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-green hover:bg-brand-green-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 transition-colors">
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t.hero.whatsapp}</span>
              </a>
              <a href="tel:8757087454" className="flex-[0.8] bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-200 transition-colors">
                <PhoneCall className="w-5 h-5" />
                <span>{t.hero.call}</span>
              </a>
            </div>
          </div>
          
          <div className="relative w-full flex justify-center lg:justify-end z-10">
            <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-brand-blue/5 rounded-full flex items-center justify-center border-[8px] border-white shadow-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Friendly Dentist at Work" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating review badge */}
            <div className="absolute bottom-4 -left-4 sm:left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Clinic Feature</p>
              <p className="text-sm font-bold text-slate-800">{t.hero.feature}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
