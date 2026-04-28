
import { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Loader2, User, Bot, MessageSquareText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { getDentalAdvice } from '../services/geminiService';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const botResponse = await getDentalAdvice(userMessage, language);
    setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-brand-blue hover:bg-brand-blue-dark text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
        aria-label="AI Dental Assistant"
      >
        <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          {language === 'en' ? 'Ask AI Assistant' : 'AI सहायक से पूछें'}
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">Muskaan AI Assistant</p>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest leading-none mt-1">Online & Smart</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-lg transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm mx-2">
                  <div className="bg-brand-blue/10 p-4 rounded-3xl mb-4">
                    <MessageSquareText className="w-8 h-8 text-brand-blue" />
                  </div>
                  <p className="font-bold text-slate-800 mb-2">
                    {language === 'en' ? 'Hi! How can I help you today?' : 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?'}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {language === 'en' 
                      ? 'Ask me about dental pain, treatments, or how to prepare for your visit.' 
                      : 'मुझसे दांतों के दर्द, उपचार, या अपनी यात्रा की तैयारी के बारे में पूछें।'}
                  </p>
                  <button 
                    onClick={() => setInput(language === 'en' ? 'How to keep teeth white?' : 'दांत सफेद कैसे रखें?')}
                    className="mt-6 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-full transition-colors"
                  >
                     {language === 'en' ? '"How to keep teeth white?"' : '"दांत सफेद कैसे रखें?"'}
                  </button>
                </div>
              )}
              
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-brand-blue text-white'}`}>
                      {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-brand-blue text-white rounded-tr-none' : 'bg-white border border-slate-100 shadow-sm rounded-tl-none text-slate-800'}`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="flex gap-2">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center shrink-0 text-white animate-pulse">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-4 h-4 animate-spin text-brand-blue" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={language === 'en' ? "Ask a dental question..." : "दांतों से जुड़ा सवाल पूछें..."}
                  className="w-full bg-slate-100 text-slate-800 px-5 py-3 pr-12 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-blue text-white p-2 rounded-xl hover:bg-brand-blue-dark transition-colors disabled:opacity-50"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">
                AI can provide advice but not medical diagnosis.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
