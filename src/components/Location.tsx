import { MapPin, Navigation, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 w-full text-center lg:text-left">
            <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 h-px bg-brand-blue/20 lg:hidden"></span>
              Find Us
              <span className="w-12 h-px bg-brand-blue/20"></span>
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-6">Visit Our Clinic</h2>
            
            <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0">
              Conveniently located in Anisabad, Patna. Reach out if you need directions!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-2xl mx-auto lg:mx-0">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Address</h4>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      Muskaan Dental Care<br />
                      Opposite Canara Bank,<br />
                      near Khoja Imli Mazaar,<br />
                      Purnendu Nagar, Anisabad,<br />
                      Patna, Bihar 800002
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 mb-2">Hours</h4>
                    <ul className="text-sm font-medium text-slate-500 space-y-2 w-full">
                      <li className="flex justify-between items-center border-b border-slate-200/60 pb-1">
                        <span>Mon - Sat</span>
                        <span className="text-slate-800 font-semibold whitespace-nowrap ml-2">9:30 AM - 8 PM</span>
                      </li>
                      <li className="flex justify-between items-center pt-1">
                        <span>Sunday</span>
                        <span className="text-slate-800 font-semibold whitespace-nowrap ml-2">9:30 AM - 6 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a 
                href="https://maps.app.goo.gl/UMpcPAbKkKsF4ij18" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions on Maps</span>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="bg-slate-50 rounded-[32px] p-2 sm:p-4 border border-slate-100 shadow-sm">
              <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden relative border border-slate-200">
                <iframe 
                  src="https://maps.google.com/maps?q=Muskaan%20Dental%20Care%2C%20Anisabad%2C%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Muskaan Dental Care"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
