import { Star, HeartPulse, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <Star className="w-8 h-8 text-amber-400 fill-amber-400" />,
      title: "5.0 Rating",
      desc: "250+ Happy Patients"
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      title: "Women-Owned",
      desc: "Compassionate Care"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-brand-green" />,
      title: "Accessible",
      desc: "Wheelchair Entrance"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
      title: "Hygienic",
      desc: "100% Safe Environment"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-indigo-500" />,
      title: "Friendly Staff",
      desc: "Comfortable Experience"
    }
  ];

  return (
    <section className="py-8 bg-white relative z-20 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                {badge.icon}
              </div>
              <div className="text-left">
                <h3 className="font-bold text-slate-800 text-sm leading-tight">{badge.title}</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide font-bold mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
