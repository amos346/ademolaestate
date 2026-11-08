import React, { useState } from 'react';
import { Property } from '../types';
import { formatNaira } from '../data/properties';
import { handleImageError } from '../utils/imageFallback';
import { X, Bed, Bath, Maximize2, MapPin, ShieldCheck, Calendar, MessageCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleInspection: (propertyTitle: string) => void;
  onWhatsAppInquire: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onScheduleInspection,
  onWhatsAppInquire,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inspectionBooked, setInspectionBooked] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleInspectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInspectionBooked(true);
    setTimeout(() => {
      onScheduleInspection(property.title);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white backdrop-blur transition-all shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel */}
        <div className="relative h-72 sm:h-[450px] bg-neutral-900 overflow-hidden">
          <img
            src={property.images[activeImageIndex]}
            alt={property.title}
            onError={(e) => handleImageError(e, 'property')}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>

          {property.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <div className="flex gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-500 text-neutral-950 font-bold text-xs rounded-full">
                  {property.status}
                </span>
                <span className="px-3 py-1 bg-white/90 text-neutral-900 font-semibold text-xs rounded-full">
                  {property.type}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
                {property.title}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-medium block">Asking Price</span>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow">
                {formatNaira(property.price)}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Row */}
        {property.images.length > 1 && (
          <div className="flex gap-2 p-4 bg-neutral-100 overflow-x-auto border-b border-neutral-200">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" onError={(e) => handleImageError(e, 'property')} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left 2 Cols: Details & Specs */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{property.location}</span>
              </div>
              <p className="text-neutral-700 leading-relaxed text-base font-light">
                {property.description}
              </p>
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div>
                <span className="block text-xs uppercase text-neutral-400 font-semibold mb-1">Bedrooms</span>
                <div className="flex items-center gap-2 font-serif font-bold text-lg text-neutral-900">
                  <Bed className="w-5 h-5 text-amber-600" />
                  <span>{property.bedrooms} Beds</span>
                </div>
              </div>
              <div>
                <span className="block text-xs uppercase text-neutral-400 font-semibold mb-1">Bathrooms</span>
                <div className="flex items-center gap-2 font-serif font-bold text-lg text-neutral-900">
                  <Bath className="w-5 h-5 text-amber-600" />
                  <span>{property.bathrooms} Baths</span>
                </div>
              </div>
              <div>
                <span className="block text-xs uppercase text-neutral-400 font-semibold mb-1">Area Size</span>
                <div className="flex items-center gap-2 font-serif font-bold text-lg text-neutral-900">
                  <Maximize2 className="w-5 h-5 text-amber-600" />
                  <span>{property.sqm} sqm</span>
                </div>
              </div>
              <div>
                <span className="block text-xs uppercase text-neutral-400 font-semibold mb-1">Title Document</span>
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                  <span>{property.titleDocument}</span>
                </div>
              </div>
            </div>

            {/* Amenities & Features */}
            <div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">Luxury Amenities & Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-sm font-medium text-neutral-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Booking & WhatsApp Inquiry */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-neutral-900 text-white shadow-xl">
              <h3 className="font-serif text-xl font-bold mb-2">Interested in this Property?</h3>
              <p className="text-xs text-neutral-400 mb-6 font-light">
                Schedule a private physical or virtual tour with our senior Nigerian real estate advisors.
              </p>

              {inspectionBooked ? (
                <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white text-base">Inspection Requested!</h4>
                  <p className="text-xs text-neutral-300 mt-1">Our concierge will call you within 30 minutes to confirm your private viewing.</p>
                </div>
              ) : (
                <form onSubmit={handleInspectionSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Chief Adebayo Johnson"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+234 803 000 0000"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Preferred Inspection Date</label>
                    <input
                      type="date"
                      required
                      value={inspectionDate}
                      onChange={(e) => setInspectionDate(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Private Inspection</span>
                  </button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
                <span className="block text-xs text-neutral-400 mb-3 font-medium">Or chat instantly with an agent</span>
                <button
                  onClick={() => onWhatsAppInquire(property)}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
