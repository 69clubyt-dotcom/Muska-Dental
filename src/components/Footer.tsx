import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-8 py-10 md:py-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 pl-0">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left w-full lg:w-auto">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Address</p>
              <p className="text-sm font-semibold max-w-[250px] mx-auto md:mx-0">Purnendu Nagar, Anisabad, Patna, Bihar 800002</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Status</p>
              <p className="text-sm font-semibold flex items-center justify-center md:justify-start gap-2">
                <span className="w-2.5 h-2.5 bg-brand-green rounded-full animate-pulse shadow-[0_0_8px_rgba(22,163,74,0.6)]"></span> 
                Open Now
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Facility</p>
              <p className="text-sm font-semibold">Women-Owned Clinic</p>
            </div>
          </div>
          
          <a href="https://wa.me/918757087454" target="_blank" rel="noopener noreferrer" className="bg-brand-green hover:bg-brand-green-dark transition-colors px-6 py-4 rounded-xl flex items-center gap-3 cursor-pointer group shadow-2xl shadow-green-900/50 w-full sm:w-auto justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
            <span className="text-sm font-black tracking-tight uppercase">Book via WhatsApp Now</span>
          </a>
          
        </div>
        
        <div className="border-t border-slate-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Muskaan Dental Care. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Design inspired by <span className="text-blue-400">Professional Polish</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
