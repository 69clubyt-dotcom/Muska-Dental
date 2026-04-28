import { Heart, Activity, Settings, Calendar, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Painless Dental Experience",
      desc: "Our priority is your comfort. We use modern techniques to ensure virtually pain-free treatments."
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-blue" />,
      title: "Personalized Treatment",
      desc: "Every smile is unique. We create custom treatment plans tailored to your specific needs."
    },
    {
      icon: <Settings className="w-6 h-6 text-slate-700" />,
      title: "Advanced Equipment",
      desc: "Equipped with state-of-the-art dental technology for precise and effective results."
    },
    {
      icon: <Calendar className="w-6 h-6 text-brand-green" />,
      title: "No Long Waiting",
      desc: "Strict appointment-based system ensures you are seen on time, every time."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Clean & Comfortable",
      desc: "Spotless clinic, clean restrooms, and a relaxing waiting area to put you at ease."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3 flex items-center gap-3">
              Why Choose Us
              <span className="w-12 h-px bg-brand-green/20"></span>
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 mb-8">Crafting Smiles with Care</h2>
            
            <ul className="space-y-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                    <span className="text-brand-green font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 mb-1">{reason.title}</h4>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-md">{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white bg-slate-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipPG9PFcoSvh8U3uPaL9CYBhjawlR7ihCFuqHaMU=w800-h600-k-no" 
              alt="Clean Dental Clinic" 
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20 text-white pr-6">
              <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Facility Highlight</p>
              <p className="font-display text-xl font-bold">Modern Clinic in Anisabad</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
