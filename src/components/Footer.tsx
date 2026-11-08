import React from 'react';
import { Building2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white block">
                  ADEMOLA
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-amber-400 block -mt-1">
                  Real Estate Nigeria
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 font-light max-w-sm">
              The definitive standard in Nigerian luxury real estate. Specializing in architectural masterpieces, waterfront penthouses, and secure diaspora investments in Lagos, Abuja, and Port Harcourt.
            </p>
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Ademola Real Estate Ltd. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Portfolio</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">Ikoyi & Banana Island</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">Eko Atlantic City</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">Maitama & Asokoro</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">Lekki Phase 1</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">GRA Port Harcourt</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Advisory</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#ai-matchmaker" className="hover:text-amber-400 transition-colors">AI Property Advisor</a></li>
              <li><a href="#mortgage" className="hover:text-amber-400 transition-colors">Mortgage Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Diaspora Acquisition</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Title Verification</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Schedule Inspection</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Headquarters</h4>
            <p className="text-sm text-neutral-400 font-light mb-2">
              Ademola Towers, 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
            </p>
            <p className="text-sm text-amber-400 font-semibold mb-2">+234 803 123 4567</p>
            <p className="text-sm text-neutral-400">concierge@ademolarealestate.com</p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>Licensed by the Lagos State Real Estate Regulatory Authority (LASRERA) & Abuja Geographic Information Systems (AGIS).</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300">Legal Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
