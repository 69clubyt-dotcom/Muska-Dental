import { Activity, Beaker, Smile, Sparkles, Syringe, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Activity className="w-8 h-8 text-brand-blue" />,
      title: "Root Canal Treatment",
      desc: "Painless RCT procedures to save your natural tooth and relieve severe pain quickly.",
      image: "/regenerated_image_1777387126734.jpeg"
    },
    {
      icon: <Smile className="w-8 h-8 text-purple-500" />,
      title: "Dental Braces",
      desc: "Straighten your teeth and correct your bite with modern, comfortable braces.",
      image: "/regenerated_image_1777388804790.png"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: "Smile Makeover",
      desc: "Custom cosmetic treatments designed to give you the perfect, confident smile.",
      image: "/regenerated_image_1777388778332.jpeg"
    },
    {
      icon: <Beaker className="w-8 h-8 text-teal-500" />,
      title: "Cleaning & Whitening",
      desc: "Professional teeth cleaning and whitening for a brighter, healthier appearance.",
      image: "/regenerated_image_1777387157919.jpeg"
    },
    {
      icon: <Zap className="w-8 h-8 text-rose-500" />,
      title: "Crown & Cap",
      desc: "Durable, natural-looking dental crowns to restore damaged or decayed teeth.",
      image: "/regenerated_image_1777387168245.jpeg"
    },
    {
      icon: <Syringe className="w-8 h-8 text-indigo-500" />,
      title: "Tooth Extraction",
      desc: "Safe and comfortable extractions, including wisdom teeth, with skilled care.",
      image: "https://images.pexels.com/photos/4270095/pexels-photo-4270095.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-3">
              Our Services
              <span className="w-12 h-px bg-brand-blue/20"></span>
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800">Complete Dental Care</h2>
          </div>
          <p className="text-slate-500 text-lg max-w-lg mt-4 md:mt-0 md:text-right">We provide a comprehensive range of dental treatments using advanced technology in a safe and hygienic environment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold font-display text-slate-800">{service.title}</h4>
                </div>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
