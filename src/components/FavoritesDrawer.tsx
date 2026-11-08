import React from 'react';
import { Property } from '../types';
import { formatNaira } from '../data/properties';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  properties: Property[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  properties,
  onToggleFavorite,
  onSelectProperty,
}) => {
  if (!isOpen) return null;

  const savedProperties = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm" onClick={onClose}></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-amber-500 fill-amber-500" />
              <h3 className="font-serif font-bold text-lg">Saved Properties ({savedProperties.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedProperties.length === 0 ? (
              <div className="text-center py-20 text-neutral-500">
                <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <h4 className="font-serif font-bold text-lg text-neutral-800 mb-1">No Saved Properties</h4>
                <p className="text-xs font-light">Click the heart icon on any property card to save it to your wishlist.</p>
              </div>
            ) : (
              savedProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="flex gap-4 p-4 rounded-2xl border border-neutral-200 hover:border-amber-500 transition-all bg-neutral-50 group cursor-pointer"
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                >
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-24 h-24 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-600 block">{prop.city}</span>
                      <h4 className="font-serif font-bold text-sm text-neutral-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                        {prop.title}
                      </h4>
                      <span className="font-serif font-bold text-neutral-900 text-sm">{formatNaira(prop.price)}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-neutral-200/60">
                      <span className="text-[11px] text-neutral-500">{prop.bedrooms} Beds • {prop.sqm} sqm</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(prop.id);
                        }}
                        className="text-rose-600 hover:text-rose-700 p-1 rounded"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedProperties.length > 0 && (
            <div className="p-6 bg-neutral-100 border-t border-neutral-200">
              <button
                onClick={() => {
                  onClose();
                  const elem = document.getElementById('contact');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl text-center text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Inquire About Saved Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
