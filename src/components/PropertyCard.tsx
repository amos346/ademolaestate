import React from 'react';
import { Property } from '../types';
import { formatNaira } from '../data/properties';
import { handleImageError } from '../utils/imageFallback';
import { Bed, Bath, Maximize2, Heart, MapPin, ShieldCheck, Eye, MessageCircle } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onWhatsAppInquire: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelectProperty,
  onWhatsAppInquire,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
      {/* Image & Badges */}
      <div className="relative h-64 overflow-hidden bg-neutral-100 cursor-pointer" onClick={() => onSelectProperty(property)}>
        <img
          src={property.images[0]}
          alt={property.title}
          onError={(e) => handleImageError(e, 'property')}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/20"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-neutral-900/80 backdrop-blur-md text-amber-400 font-semibold text-xs rounded-full border border-amber-500/30 shadow">
            {property.status}
          </span>
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-neutral-900 font-bold text-xs rounded-full shadow">
            {property.city}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(property.id);
          }}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-neutral-900 backdrop-blur-md shadow-md transition-transform active:scale-95"
          title={isFavorite ? 'Remove from Saved' : 'Save Property'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'text-rose-600 fill-rose-600' : 'text-neutral-700 hover:text-rose-600'
            }`}
          />
        </button>

        {/* Bottom Image Overlay Info */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
              {property.type}
            </span>
            <span className="text-2xl font-serif font-bold text-white tracking-tight drop-shadow">
              {formatNaira(property.price)}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900/70 backdrop-blur text-neutral-200 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{property.titleDocument}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-xs text-neutral-500 mb-2 gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3
            onClick={() => onSelectProperty(property)}
            className="font-serif text-xl font-bold text-neutral-900 mb-2 hover:text-amber-600 transition-colors cursor-pointer line-clamp-1"
          >
            {property.title}
          </h3>

          <p className="text-sm text-neutral-600 mb-6 line-clamp-2 font-light">
            {property.tagline}
          </p>
        </div>

        <div>
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-neutral-100 mb-6 text-neutral-700 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-amber-600" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-amber-600" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4 text-amber-600" />
              <span>{property.sqm} sqm</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onSelectProperty(property)}
              className="py-2.5 px-4 rounded-xl border border-neutral-300 hover:border-neutral-900 text-neutral-900 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-4 h-4" />
              <span>Details</span>
            </button>
            <button
              onClick={() => onWhatsAppInquire(property)}
              className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
