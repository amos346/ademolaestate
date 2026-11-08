import React from 'react';
import { Property, FilterState } from '../types';
import { PropertyCard } from './PropertyCard';
import { Building2 } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  filters: FilterState;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onWhatsAppInquire: (property: Property) => void;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  filters,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  onWhatsAppInquire,
}) => {
  // Filter logic
  const filtered = properties.filter((prop) => {
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
    <div>
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl border border-neutral-200 p-16 text-center shadow-sm">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">No Matching Properties Found</h3>
          <p className="text-neutral-500 max-w-md mx-auto mb-6 text-sm">
            We couldn't find any luxury properties matching your exact criteria. Try adjusting your search filters or contact our concierge for off-market listings.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectProperty={onSelectProperty}
              onWhatsAppInquire={onWhatsAppInquire}
            />
          ))}
        </div>
      )}
    </div>
  );
};
