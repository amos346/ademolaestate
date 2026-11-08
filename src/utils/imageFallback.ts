// Utility to handle image loading errors gracefully with a luxury fallback
export const FALLBACK_PROPERTY_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
export const FALLBACK_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
export const FALLBACK_NEIGHBORHOOD = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80';

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, type: 'property' | 'avatar' | 'neighborhood' = 'property') {
  const target = e.currentTarget;
  if (target.dataset.fallbackApplied) return;
  target.dataset.fallbackApplied = 'true';
  
  if (type === 'avatar') {
    target.src = FALLBACK_AVATAR;
  } else if (type === 'neighborhood') {
    target.src = FALLBACK_NEIGHBORHOOD;
  } else {
    target.src = FALLBACK_PROPERTY_IMAGE;
  }
}
