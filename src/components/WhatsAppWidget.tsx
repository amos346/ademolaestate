import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface WhatsAppWidgetProps {
  propertyName?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ propertyName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phoneNumber = '2348031234567'; // Ademola Real Estate official WhatsApp line

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleSend(customMsg);
    setCustomMsg('');
  };

  const quickMessages = [
    'Hello Ademola Real Estate, I would like to inquire about available luxury properties.',
    propertyName ? `Hello, I am interested in inquiring about "${propertyName}".` : 'Hello, I want to schedule a physical property inspection in Lagos/Abuja.',
    'Hello, I am a diaspora buyer looking for high-yield real estate investment.',
    'Hello, I would like to speak with a senior property advisor.'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce"
          title="Chat with Ademola Real Estate on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white" />
          <span className="absolute -top-2 -left-2 bg-neutral-900 text-amber-400 font-bold text-[10px] px-2 py-0.5 rounded-full border border-amber-500/50 shadow">
            Online 24/7
          </span>
        </button>
      )}

      {/* Chat Popup Card */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 w-80 sm:w-96 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-neutral-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-neutral-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Ademola Concierge</h4>
                <p className="text-[10px] text-emerald-400 font-medium">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-neutral-50 space-y-3 max-h-80 overflow-y-auto text-xs">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-200 text-neutral-800 max-w-[85%]">
              <p className="font-semibold text-neutral-900 mb-1">Welcome to Ademola Real Estate! 👋</p>
              <p>How can we assist you with luxury property acquisition in Lagos, Abuja, or Port Harcourt today?</p>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-bold text-neutral-500 block px-1">Quick WhatsApp Inquiry:</span>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 text-neutral-800 font-medium transition-all shadow-sm flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{msg}</span>
                  <span className="text-emerald-600 shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input */}
          <form onSubmit={handleCustomSubmit} className="p-3 bg-white border-t border-neutral-200 flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow transition-colors flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
