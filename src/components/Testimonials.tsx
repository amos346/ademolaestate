import React from 'react';
import { TESTIMONIALS } from '../data/properties';
import { handleImageError } from '../utils/imageFallback';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-400 block mb-2">
            Client Success Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Trusted by Elite Investors & Diaspora Buyers
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Hear from discerning homeowners and business leaders who found their dream residences and high-yield investments through Ademola Real Estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-800/80 border border-neutral-700/80 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative group hover:border-amber-500/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/20" />

              <div>
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 font-light text-sm sm:text-base italic leading-relaxed mb-8">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-neutral-700">
                <img
                  src={t.avatar}
                  alt={t.name}
                  onError={(e) => handleImageError(e, 'avatar')}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h4 className="font-serif font-bold text-white text-base">{t.name}</h4>
                  <p className="text-xs text-amber-400 font-medium">{t.role}</p>
                  <p className="text-[11px] text-neutral-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
