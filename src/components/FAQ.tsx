import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Is root canal treatment really painless?",
      answer: "Yes! With modern anesthesia and advanced techniques, a root canal is very similar to getting a routine filling. Our priority is your comfort throughout the procedure."
    },
    {
      question: "Do I need an appointment before visiting?",
      answer: "Yes, we work on a strict appointment basis. This ensures that you don't have to wait in the clinic and allows us to dedicate the proper time needed for your specific treatment."
    },
    {
      question: "What types of braces do you offer?",
      answer: "We offer several options including traditional metal braces, ceramic (clear) braces, and invisible aligners. The best choice depends on your specific dental needs and lifestyle."
    },
    {
      question: "How long does teeth whitening take?",
      answer: "In-clinic laser teeth whitening usually takes about 45 minutes to an hour, and you can see visible results immediately after the session."
    },
    {
      question: "At what age should children have their first dental visit?",
      answer: "We recommend that children have their first dental visit by their first birthday, or within six months after their first tooth appears. Early checkups help prevent cavities and build good dental habits."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Questions & Answers</h3>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Find answers to the most common queries about our treatments and clinic policies.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-brand-blue bg-blue-50/30' : 'border-slate-200 bg-white'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg pr-8 ${openIndex === index ? 'text-brand-blue' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
