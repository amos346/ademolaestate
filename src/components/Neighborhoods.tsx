import React from 'react';
import { NEIGHBORHOODS } from '../data/properties';
import { handleImageError } from '../utils/imageFallback';
import { MapPin, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

interface NeighborhoodsProps {
  onSelectNeighborhood: (cityName: string) => void;
}

export const Neighborhoods: React.FC<NeighborhoodsProps> = ({ onSelectNeighborhood }) => {
  return (
    <section id="neighborhoods" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-600 block mb-2">
            Prime Destinations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Nigeria's Elite Neighborhoods
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light">
            Explore the most sought-after addresses in Lagos, Abuja, and Port Harcourt, offering unmatched security, infrastructure, and investment yields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEIGHBORHOODS.map((n, idx) => (
            <div
              key={idx}
              onClick={() => onSelectNeighborhood(n.city)}
              className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 text-white"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={n.image}
                  alt={n.name}
                  onError={(e) => handleImageError(e, 'neighborhood')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 uppercase tracking-widest font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{n.city}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                  {n.name}
                </h3>

                <p className="text-xs text-neutral-300 font-light mb-4 line-clamp-2">
                  {n.description}
                </p>

                <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase block">Avg Portfolio Price</span>
                    <span className="text-sm font-bold text-amber-400">{n.avgPrice}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
