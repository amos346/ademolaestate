import { Property, Testimonial, NeighborhoodInfo } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Obsidian Sky Penthouse',
    tagline: 'Unrivaled 360-degree Atlantic Ocean & City Views in Banana Island',
    price: 1850000000, // ₦1.85B
    location: 'Banana Island, Ikoyi, Lagos',
    city: 'Lagos',
    neighborhood: 'Ikoyi',
    type: 'Penthouse',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 850,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural masterpiece situated in elite Banana Island. The Obsidian Sky Penthouse features double-volume ceilings, Italian marble flooring, private infinity pool on the terrace, fully integrated smart home automation, bulletproof glass, and 24-hour concierge services.',
    features: ['Private Infinity Pool', 'Smart Home Automation', 'Bulletproof Doors & Windows', 'Private Elevator', '24/7 Armed Security & Power', 'Wine Cellar', 'Private Gym', 'Yacht Dock Access'],
    titleDocument: "Governor's Consent",
    yearBuilt: 2024,
    featured: true
  },
  {
    id: 'prop-2',
    title: 'The Azure Horizon Smart Villa',
    tagline: 'Contemporary Minimalist Living in Eko Atlantic City',
    price: 950000000, // ₦950M
    location: 'Marina District, Eko Atlantic City, Lagos',
    city: 'Lagos',
    neighborhood: 'Eko Atlantic',
    type: 'Luxury Villa',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 5,
    sqm: 620,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Experience futuristic coastal living in Eko Atlantic. This pristine minimalist villa boasts floor-to-ceiling glass walls overlooking the Atlantic coastline, solar-backed 24/7 independent power grid, modular Italian kitchen, and lush Zen garden.',
    features: ['Oceanfront View', 'Solar & Generator Backup', 'Modular Italian Kitchen', 'Zen Garden', 'Home Cinema', 'Biometric Access', 'Central AC System'],
    titleDocument: "C of O",
    yearBuilt: 2025,
    featured: true
  },
  {
    id: 'prop-3',
    title: 'Maitama Diplomatic Oasis',
    tagline: 'Ultra-Private Luxury Residence in Abuja’s Most Prestigious Zone',
    price: 1200000000, // ₦1.2B
    location: 'Maitama District, Abuja',
    city: 'Abuja',
    neighborhood: 'Maitama',
    type: 'Luxury Villa',
    status: 'For Sale',
    bedrooms: 6,
    bathrooms: 7,
    sqm: 980,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set in the diplomatic heart of Maitama, Abuja, this palatial residence blends majestic architecture with minimalist interior styling. Surrounded by high perimeter security walls, landscaped fountains, and spacious multi-car subterranean parking.',
    features: ['Subterranean Garage (6 Cars)', 'State-of-the-Art Security', 'Private Swimming Pool', 'Staff Quarters (2 Rooms)', 'Panic Room', 'Piped Sound System', 'Outdoor Gazebo'],
    titleDocument: "C of O",
    yearBuilt: 2023,
    featured: true
  },
  {
    id: 'prop-4',
    title: 'The Lumina Waterfront Duplex',
    tagline: 'Sophisticated Water-View Living in Lekki Phase 1',
    price: 480000000, // ₦480M
    location: 'Admiralty Way Waterfont, Lekki Phase 1, Lagos',
    city: 'Lagos',
    neighborhood: 'Lekki Phase 1',
    type: 'Townhouse',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 5,
    sqm: 450,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Direct waterfront views of the Lekki lagoon. Designed for modern executives and discerning families, featuring rooftop lounge terrace, ensuite walk-in closets, fully fitted gourmet kitchen with Bosch appliances, and smart intercom security.',
    features: ['Rooftop Terrace', 'Lagoon Water View', 'Bosch Kitchen Appliances', 'Ensuite Bedrooms', 'Fiber Optic Ready', 'Borehole & Water Treatment'],
    titleDocument: "Governor's Consent",
    yearBuilt: 2024,
    featured: true
  },
  {
    id: 'prop-5',
    title: 'Asokoro Presidential Crest',
    tagline: 'Exclusive Elite Compound with Panoramic Hilltop Views',
    price: 1500000000, // ₦1.5B
    location: 'Asokoro Hills, Abuja',
    city: 'Abuja',
    neighborhood: 'Asokoro',
    type: 'Luxury Villa',
    status: 'For Sale',
    bedrooms: 7,
    bathrooms: 8,
    sqm: 1100,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched on the elevated terrain of Asokoro, this grand estate offers breathtaking views of the capital city. Features include a private elevator, Olympic-length swimming pool, cinema room, bulletproof master suite, and custom Italian finishes.',
    features: ['Hilltop Panoramic View', 'Private Elevator', 'Home Cinema (12 Seats)', 'Olympic Pool', 'Bulletproof Master Wing', 'Full House Generator', 'Smart Security'],
    titleDocument: "C of O",
    yearBuilt: 2024,
    featured: false
  },
  {
    id: 'prop-6',
    title: 'GRA Phase 2 Executive Suites',
    tagline: 'Modern Serviced Apartments in Port Harcourt’s Prime Hub',
    price: 320000000, // ₦320M
    location: 'GRA Phase 2, Port Harcourt',
    city: 'Port Harcourt',
    neighborhood: 'GRA',
    type: 'Smart Apartment',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 4,
    sqm: 320,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The epitome of refined living in Port Harcourt. Located in serene GRA Phase 2, offering uninterrupted power supply, rooftop lounge, fully equipped fitness center, and professional property management.',
    features: ['24/7 Power Supply', 'Rooftop Lounge & Bar', 'Fitness Gym', 'Elevator Access', 'Ample Parking', 'CCTV Surveillance'],
    titleDocument: "Deed of Assignment",
    yearBuilt: 2023,
    featured: false
  },
  {
    id: 'prop-7',
    title: 'Victoria Island Zenith Tower',
    tagline: 'High-Yield Commercial & Residential Mixed-Use Penthouse',
    price: 750000000, // ₦750M
    location: 'Ahmadu Bello Way, Victoria Island, Lagos',
    city: 'Lagos',
    neighborhood: 'Victoria Island',
    type: 'Penthouse',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    sqm: 510,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Situated right in the financial capital of West Africa. Floor-to-ceiling glass offering skyline views of Eko Atlantic and the Lagos Lagoon. Ideal for corporate executives or premium rental yield investment.',
    features: ['Skyline Views', 'Concierge Service', 'Meeting Rooms', 'High-Speed Elevators', 'Underground Parking', 'Smart Climate Control'],
    titleDocument: "Governor's Consent",
    yearBuilt: 2024,
    featured: false
  },
  {
    id: 'prop-8',
    title: 'Ikoyi Oasis Botanical Townhouse',
    tagline: 'Serene Luxury Hidden in Old Ikoyi greenery',
    price: 890000000, // ₦890M
    location: 'McDonald Road, Old Ikoyi, Lagos',
    city: 'Lagos',
    neighborhood: 'Ikoyi',
    type: 'Townhouse',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 5,
    sqm: 580,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A botanical haven in prestigious Old Ikoyi. This stunning 4-bedroom terrace townhouse features vertical gardens, private dipping pool, Italian porcelain tiles, and a private courtyard.',
    features: ['Private Dipping Pool', 'Vertical Garden Courtyard', 'Italian Porcelain Tiles', 'Solar Inverter System', 'Smart Intercom', '24hr Security'],
    titleDocument: "Governor's Consent",
    yearBuilt: 2025,
    featured: true
  }
];

export const NEIGHBORHOODS: NeighborhoodInfo[] = [
  {
    name: 'Ikoyi & Banana Island',
    city: 'Lagos',
    description: 'The pinnacle of West African wealth, security, and prestige. Home to billionaires, diplomats, and elite executives.',
    avgPrice: '₦850M - ₦3.5B+',
    highlights: ['Strict gated security', 'Waterfront jetties', 'High capital appreciation', 'Pristine infrastructure'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Eko Atlantic City',
    city: 'Lagos',
    description: 'A futuristic marvel of coastal engineering. Independent power grid, sleek skyscrapers, and world-class urban planning.',
    avgPrice: '₦600M - ₦2.0B',
    highlights: ['Independent 24hr power', 'Modern drainage & fiber optics', 'Coastal promenade', 'Tax-free zone benefits'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Maitama & Asokoro',
    city: 'Abuja',
    description: 'Abuja’s diplomatic and political stronghold. Majestic hill views, embassies, and ultra-secure leafy avenues.',
    avgPrice: '₦700M - ₦2.5B',
    highlights: ['Diplomatic security zone', 'Scenic hilly terrain', 'Spacious land plots', 'Quiet exclusivity'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Lekki Phase 1',
    city: 'Lagos',
    description: 'The vibrant cosmopolitan heartbeat of Lagos. Bustling cafes, tech hubs, elite lounges, and scenic lagoon views.',
    avgPrice: '₦350M - ₦900M',
    highlights: ['Vibrant nightlife & dining', 'High rental demand', 'Waterfront promenades', 'Central connectivity'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. & Mrs. Olawale',
    role: 'Diaspora Tech Founders',
    location: 'London & Banana Island',
    comment: 'Buying our penthouse in Ikoyi while living in London felt completely seamless with Ademola Real Estate. Their transparency with Governor’s Consent titles and live video inspections gave us 100% confidence.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Chief Emeka Okafor',
    role: 'Energy Executive',
    location: 'Abuja & Port Harcourt',
    comment: 'Ademola Real Estate represents the highest standard of luxury and professionalism in Nigeria. Their attention to architectural detail and legal verification is unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Amina Bello',
    role: 'Investment Banker',
    location: 'Eko Atlantic, Lagos',
    comment: 'The ROI on my Eko Atlantic smart villa recommended by Ademola Real Estate has exceeded expectations. Their market insight is truly world-class.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS = [
  {
    question: 'How does Ademola Real Estate verify property titles in Nigeria?',
    answer: 'Every property in our portfolio undergoes rigorous legal due diligence. We verify titles at the Lagos State Land Bureau or Abuja Geographic Information Systems (AGIS) to guarantee valid Governor\'s Consent, Certificate of Occupancy (C of O), or Gazette status free from encumbrances.'
  },
  {
    question: 'Can diaspora Nigerians purchase properties remotely?',
    answer: 'Yes! Over 45% of our clients are based in the UK, USA, Canada, and UAE. We offer immersive 3D virtual tours, live video walkthroughs, and secure legal representation via power of attorney handled by top-tier Nigerian property law firms.'
  },
  {
    question: 'What payment structures and mortgage options are available?',
    answer: 'We offer flexible off-plan milestone payment plans (typically 30% initial deposit with balance spread over construction milestones) as well as partnerships with leading mortgage institutions offering Naira and US Dollar financing.'
  },
  {
    question: 'How do I schedule a physical inspection of a luxury property?',
    answer: 'You can instantly book an inspection through our website, via our WhatsApp concierge widget (+234 803 123 4567), or by speaking directly with your dedicated Ademola Real Estate private advisor.'
  }
];

export function formatNaira(amount: number): string {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(2)}B`;
  }
  if (amount >= 1000000) {
    return `₦${(amount / 1000000).toFixed(0)}M`;
  }
  return `₦${amount.toLocaleString()}`;
}
