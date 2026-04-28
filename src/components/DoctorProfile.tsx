import { User, Award, GraduationCap } from 'lucide-react';

export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-slate-100 outline outline-4 outline-slate-50 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Meet the Doctor" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8">
                <p className="text-brand-green font-bold text-sm tracking-widest uppercase mb-1">Lead Specialist</p>
                <h3 className="text-3xl font-display font-bold text-white">Dr. [Doctor's Name]</h3>
                <p className="text-white/80 font-medium">BDS, MDS - Dental Surgery</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display text-slate-800">10+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3 flex items-center gap-3">
              Meet The Doctor
              <span className="w-12 h-px bg-brand-green/20"></span>
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-6">Expert Care Behind Every Smile.</h2>
            
            <p className="text-lg text-slate-500 mb-8">
              At Muskaan Dental Care, we believe that a great smile is built on trust and expertise. Our lead dentist brings years of experience treating complex dental issues with a priority on painless, personalized care.
            </p>

            <ul className="space-y-6 mb-8">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-brand-blue">
                   <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Highly Qualified</h4>
                  <p className="font-medium text-slate-500 text-sm">Specialized training in root canals, cosmetic dentistry, and advanced orthodontic treatments.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-rose-500">
                   <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Patient-First Approach</h4>
                  <p className="font-medium text-slate-500 text-sm">Focuses on transparent communication and ensuring every patient feels relaxed and comfortable.</p>
                </div>
              </li>
            </ul>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="italic text-slate-600 font-medium leading-relaxed">
                "My mission is to change the way people perceive dental visits by providing a stress-free environment and long-lasting, painless treatments."
              </p>
              <p className="mt-4 font-bold text-sm text-slate-800">— Dr. [Doctor's Name]</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
