import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul S.",
      text: "The doctor is very cooperative and explains everything clearly. Best dental clinic in Patna!",
      treatment: "Root Canal"
    },
    {
      name: "Sneha P.",
      text: "Very satisfying RCT experience. I was scared of the pain, but it was completely painless. Highly recommend.",
      treatment: "Painless RCT"
    },
    {
      name: "Amit K.",
      text: "Friendly staff and extremely clean clinic. Got my braces here and seeing great results.",
      treatment: "Dental Braces"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[32px] p-8 lg:p-12 shadow-lg relative overflow-hidden text-white">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
            <span className="text-[300px] font-serif leading-none">"</span>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <h3 className="text-xs font-bold text-brand-blue-light text-blue-200 uppercase tracking-widest mb-3 flex items-center gap-3">
                Patient Stories
                <span className="w-12 h-px bg-blue-300"></span>
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white">What Our Patients Say</h2>
            </div>
            <div className="flex flex-col items-center md:items-end bg-brand-blue-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="flex text-amber-400 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="font-bold text-white text-lg">5.0 / 5.0 Rating</p>
              <p className="text-blue-200 text-sm font-medium mt-1">Based on 250+ Reviews</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="border-t border-white/20 pt-4 mt-auto">
                  <p className="text-xs font-bold text-blue-100 italic text-right">— {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
