export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number; // in Naira (₦)
  location: string;
  city: 'Lagos' | 'Abuja' | 'Port Harcourt';
  neighborhood: string;
  type: 'Penthouse' | 'Luxury Villa' | 'Smart Apartment' | 'Townhouse' | 'Commercial' | 'Land';
  status: 'For Sale' | 'For Rent' | 'Off-Plan' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  images: string[];
  description: string;
  features: string[];
  titleDocument: 'Governor\'s Consent' | 'C of O' | 'Gazette' | 'Deed of Assignment';
  yearBuilt: number;
  featured?: boolean;
}

export interface FilterState {
  search: string;
  city: string;
  type: string;
  priceMax: number;
  bedrooms: string;
  status: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface NeighborhoodInfo {
  name: string;
  city: string;
  description: string;
  avgPrice: string;
  highlights: string[];
  image: string;
}
