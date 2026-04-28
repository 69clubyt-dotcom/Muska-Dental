import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      {/* Tooltip */}
      <div className="hidden sm:block absolute right-full mr-4 bottom-2 bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Book Appointment Instantly
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
      </div>
      
      <a 
        href="https://wa.me/918757087454" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-brand-green hover:bg-brand-green-dark text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-110"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
