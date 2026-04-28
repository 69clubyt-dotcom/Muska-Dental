
import { Tag, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Offers() {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-blue/5 border-y border-brand-blue/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
            <Tag className="w-4 h-4" />
            <span className="uppercase tracking-wider">{t.offers.title}:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-slate-700">{t.offers.rct}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-slate-700">{t.offers.checkup}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium italic">
            <Clock className="w-3 h-3" />
            <span>{t.offers.validity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
