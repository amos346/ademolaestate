import React, { useState } from 'react';
import { FAQS } from '../data/properties';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-600 block mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light">
            Everything you need to know about purchasing luxury properties, title verification, and diaspora acquisitions in Nigeria.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-neutral-50 transition-colors"
              >
                <span className="font-serif font-bold text-lg text-neutral-900">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform ${openIndex === idx ? 'rotate-180 bg-amber-500 text-neutral-950' : 'text-neutral-600'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
