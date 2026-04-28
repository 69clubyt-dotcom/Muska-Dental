import { ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  const cases = [
    {
      title: "Teeth Whitening",
      before: "/regenerated_image_1777386061994.png",
      after: "/regenerated_image_1777386068823.png",
      treatment: "Advanced Laser Whitening",
      beforeClass: "",
      afterClass: ""
    },
    {
      title: "Orthodontic Focus",
      before: "/regenerated_image_1777387193477.jpeg",
      after: "/regenerated_image_1777387198684.jpeg",
      treatment: "Invisible Braces",
      beforeClass: "grayscale opacity-80",
      afterClass: ""
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-brand-green/20"></span>
            Real Results
            <span className="w-8 h-px bg-brand-green/20"></span>
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 mb-6">Smile Transformations</h2>
          <p className="text-slate-500 text-lg">See the difference our expert treatments can make. Real patients, real smiles.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-[32px] p-6 lg:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                <span className="text-[10px] uppercase px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-bold tracking-widest">{item.treatment}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <img src={item.before} alt="Before" className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${item.beforeClass || 'grayscale opacity-80'}`} />
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white tracking-wider">BEFORE</div>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center justify-center -mx-6 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm relative hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-brand-blue" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <img src={item.after} alt="After" className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${item.afterClass || ''}`} />
                    <div className="absolute top-2 left-2 bg-brand-blue/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white tracking-wider">AFTER</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
