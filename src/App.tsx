import React, { useState, useEffect } from 'react';
import { PROPERTIES } from './data/properties';
import { Property, FilterState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySearch } from './components/PropertySearch';
import { PropertyList } from './components/PropertyList';
import { PropertyModal } from './components/PropertyModal';
import { AiMatchmaker } from './components/AiMatchmaker';
import { MortgageCalculator } from './components/MortgageCalculator';
import { Neighborhoods } from './components/Neighborhoods';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { InspectionModal } from './components/InspectionModal';

export default function App() {
  const [properties] = useState<Property[]>(PROPERTIES);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('ademola_favorites');
    return saved ? JSON.parse(saved) : ['prop-1', 'prop-3'];
  });

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    city: 'All',
    type: 'All',
    priceMax: 3000000000,
    bedrooms: 'All',
    status: 'All',
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [targetPropertyTitle, setTargetPropertyTitle] = useState<string | undefined>(undefined);
  const [whatsappProperty, setWhatsappProperty] = useState<Property | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('ademola_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNavigate = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchFromHero = (city: string, type: string) => {
    setFilters((prev) => ({
      ...prev,
      city,
      type,
    }));
  };

  const handleSelectNeighborhood = (cityName: string) => {
    setFilters((prev) => ({
      ...prev,
      city: cityName === 'Abuja' ? 'Abuja' : cityName === 'Port Harcourt' ? 'Port Harcourt' : 'Lagos',
    }));
    const elem = document.getElementById('properties-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppInquire = (property: Property) => {
    const text = `Hello Ademola Real Estate, I am inquiring about "${property.title}" listed at ${property.location} for ₦${property.price.toLocaleString()}. Please provide further details.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348031234567?text=${encoded}`, '_blank');
  };

  const filteredProperties = properties.filter((prop) => {
    if (filters.city !== 'All' && prop.city !== filters.city) return false;
    if (filters.type !== 'All' && prop.type !== filters.type) return false;
    if (filters.status !== 'All' && prop.status !== filters.status) return false;
    if (filters.bedrooms !== 'All' && prop.bedrooms < parseInt(filters.bedrooms)) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matchText = `${prop.title} ${prop.location} ${prop.neighborhood} ${prop.description}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900 selection:bg-amber-500 selection:text-neutral-950 font-sans">
      {/* Navbar */}
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        onNavigate={handleNavigate}
        onOpenInspectionModal={() => {
          setTargetPropertyTitle(undefined);
          setInspectionModalOpen(true);
        }}
      />

      {/* Hero Section */}
      <Hero
        onSearch={handleSearchFromHero}
        onExplore={() => {
          const elem = document.getElementById('properties-section');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Properties Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PropertySearch
          filters={filters}
          onFilterChange={setFilters}
          totalResults={filteredProperties.length}
        />

        <PropertyList
          properties={properties}
          filters={filters}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onWhatsAppInquire={handleWhatsAppInquire}
        />
      </main>

      {/* AI Matchmaker Section */}
      <AiMatchmaker />

      {/* Neighborhoods Showcase */}
      <Neighborhoods onSelectNeighborhood={handleSelectNeighborhood} />

      {/* Mortgage Calculator */}
      <MortgageCalculator />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleInspection={(title) => {
          setSelectedProperty(null);
          setTargetPropertyTitle(title);
          setInspectionModalOpen(true);
        }}
        onWhatsAppInquire={handleWhatsAppInquire}
      />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favorites={favorites}
        properties={properties}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
      />

      {/* General Inspection Modal */}
      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
        propertyTitle={targetPropertyTitle}
      />
    </div>
  );
}
