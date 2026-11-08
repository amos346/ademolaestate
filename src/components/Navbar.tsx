import React, { useState, useEffect } from 'react';
import { Building2, Heart, Phone, Menu, X, MessageSquare, Calendar } from 'lucide-react';

interface NavbarProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenInspectionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoritesCount,
  onOpenFavorites,
  onNavigate,
  onOpenInspectionModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md text-white py-4 shadow-xl'
          : 'bg-gradient-to-b from-neutral-900/9 to-transparent text-neutral-900 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-amber-500 text-neutral-900' : 'bg-neutral-900 text-amber-400'
            }`}>
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider block">
                ADEMOLA
              </span>
              <span className={`text-[10px] uppercase tracking-[0.25em] font-medium block -mt-1 ${
                isScrolled ? 'text-amber-400' : 'text-amber-600'
              }`}>
                Real Estate Nigeria
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <button
              onClick={() => onNavigate('properties')}
              className={`transition-colors hover:text-amber-500 ${isScrolled ? 'text-neutral-200' : 'text-neutral-800'}`}
            >
              Properties
            </button>
            <button
              onClick={() => onNavigate('ai-matchmaker')}
              className={`transition-colors hover:text-amber-500 flex items-center gap-1.5 ${isScrolled ? 'text-neutral-200' : 'text-neutral-800'}`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              AI Advisor
            </button>
            <button
              onClick={() => onNavigate('neighborhoods')}
              className={`transition-colors hover:text-amber-500 ${isScrolled ? 'text-neutral-200' : 'text-neutral-800'}`}
            >
              Neighborhoods
            </button>
            <button
              onClick={() => onNavigate('mortgage')}
              className={`transition-colors hover:text-amber-500 ${isScrolled ? 'text-neutral-200' : 'text-neutral-800'}`}
            >
              Mortgage Calculator
            </button>
            <button
              onClick={() => onNavigate('testimonials')}
              className={`transition-colors hover:text-amber-500 ${isScrolled ? 'text-neutral-200' : 'text-neutral-800'}`}
            >
              Testimonials
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors hover:text-amber-500 ${isScrolled ? 'text-neutral-200' : 'text-neutral-800'}`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenFavorites}
              className={`relative p-2.5 rounded-full border transition-all ${
                isScrolled
                  ? 'border-neutral-700 hover:border-amber-500 text-white'
                  : 'border-neutral-300 hover:border-neutral-900 text-neutral-900 bg-white/50 backdrop-blur'
              }`}
              title="Saved Properties"
            >
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-900 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenInspectionModal}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold text-sm rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Inspection</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onOpenFavorites}
              className={`relative p-2 rounded-full border ${isScrolled ? 'border-neutral-700 text-white' : 'border-neutral-300 text-neutral-900'}`}
            >
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-900 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-white' : 'text-neutral-900'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-neutral-900 text-white border-t border-neutral-800 shadow-2xl py-6 px-6 space-y-4">
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('properties'); }}
            className="block w-full text-left font-medium text-lg py-2 hover:text-amber-400 border-b border-neutral-800"
          >
            Properties
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('ai-matchmaker'); }}
            className="block w-full text-left font-medium text-lg py-2 hover:text-amber-400 border-b border-neutral-800 flex items-center justify-between"
          >
            <span>AI Advisor</span>
            <span className="bg-amber-500 text-neutral-900 text-xs px-2 py-0.5 rounded-full font-bold">New</span>
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('neighborhoods'); }}
            className="block w-full text-left font-medium text-lg py-2 hover:text-amber-400 border-b border-neutral-800"
          >
            Neighborhoods
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('mortgage'); }}
            className="block w-full text-left font-medium text-lg py-2 hover:text-amber-400 border-b border-neutral-800"
          >
            Mortgage Calculator
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('testimonials'); }}
            className="block w-full text-left font-medium text-lg py-2 hover:text-amber-400 border-b border-neutral-800"
          >
            Testimonials
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }}
            className="block w-full text-left font-medium text-lg py-2 hover:text-amber-400"
          >
            Contact
          </button>
          <div className="pt-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInspectionModal(); }}
              className="w-full py-3 bg-amber-500 text-neutral-900 font-bold rounded-xl text-center shadow"
            >
              Schedule Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
