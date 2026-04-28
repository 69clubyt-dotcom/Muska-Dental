import { CalendarCheck, PhoneCall, MessageCircle, Clock } from 'lucide-react';

export default function Appointment() {
  return (
    <section id="appointment" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[40px] px-8 py-16 text-center shadow-sm border border-slate-200">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green-dark px-4 py-1.5 rounded-full mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Quick Consultation Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-800 mb-6 leading-tight">
            Book Your Appointment Now <br className="hidden md:block"/>
            <span className="text-brand-blue">No Waiting Required</span>
          </h2>
          
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Skip the line with our strict appointment-based system. Call or WhatsApp us to schedule your visit today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/918757087454" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-100 transition-colors">
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:8757087454" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-slate-200 transition-colors">
              <PhoneCall className="w-5 h-5" />
              <span>Call: 8757087454</span>
            </a>
          </div>
          
          <p className="mt-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            * Prior appointment required to ensure a painless, zero-waiting experience.
          </p>
        </div>
      </div>
    </section>
  );
}
