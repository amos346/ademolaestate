import React, { useState } from 'react';
import { handleImageError } from '../utils/imageFallback';
import { Search, MapPin, Building, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onSearch: (city: string, type: string) => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExplore }) => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedCity, selectedType);
    const elem = document.getElementById('properties-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950 text-white">
      {/* Background Image with Dark Luxury Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Nigerian Real Estate"
          onError={(e) => handleImageError(e, 'property')}
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-soft"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full mt-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-300">
            Nigeria's Premier Luxury Property Portfolio
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Redefining <span className="italic font-normal text-amber-400">Luxury Living</span> Across Nigeria
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-300 font-light mb-12 leading-relaxed">
          Discover architectural masterpieces, waterfront penthouses, and secure high-yield smart homes in <span className="text-white font-medium">Ikoyi, Eko Atlantic, Lekki, Maitama & Asokoro</span>.
        </p>

        {/* Quick Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-4xl mx-auto bg-neutral-900/90 border border-neutral-800 p-3 sm:p-4 rounded-2xl sm:rounded-full shadow-2xl backdrop-blur-xl grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
        >
          {/* City Selector */}
          <div className="flex items-center space-x-3 px-4 py-3 bg-neutral-800/60 rounded-xl sm:rounded-full border border-neutral-700/50">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="w-full text-left">
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">City / Location</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-neutral-900">All Nigerian Cities</option>
                <option value="Lagos" className="bg-neutral-900">Lagos (Ikoyi, Lekki, VI)</option>
                <option value="Abuja" className="bg-neutral-900">Abuja (Maitama, Asokoro)</option>
                <option value="Port Harcourt" className="bg-neutral-900">Port Harcourt (GRA)</option>
              </select>
            </div>
          </div>

          {/* Property Type Selector */}
          <div className="flex items-center space-x-3 px-4 py-3 bg-neutral-800/60 rounded-xl sm:rounded-full border border-neutral-700/50">
            <Building className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="w-full text-left">
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-neutral-900">All Property Types</option>
                <option value="Penthouse" className="bg-neutral-900">Penthouse</option>
                <option value="Luxury Villa" className="bg-neutral-900">Luxury Villa</option>
                <option value="Smart Apartment" className="bg-neutral-900">Smart Apartment</option>
                <option value="Townhouse" className="bg-neutral-900">Townhouse</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-bold rounded-xl sm:rounded-full shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Explore Portfolio</span>
            </button>
          </div>
        </form>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-neutral-800/80 max-w-5xl mx-auto text-left sm:text-center">
          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Verified Titles</h4>
              <p className="text-xs text-neutral-400">C of O & Gov Consent</p>
            </div>
          </div>
          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Prime Locations</h4>
              <p className="text-xs text-neutral-400">Ikoyi, Maitama & Eko Atlantic</p>
            </div>
          </div>
          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Diaspora Support</h4>
              <p className="text-xs text-neutral-400">Secure Remote Acquisition</p>
            </div>
          </div>
          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Smart Automation</h4>
              <p className="text-xs text-neutral-400">Solar & 24/7 Power Grids</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
