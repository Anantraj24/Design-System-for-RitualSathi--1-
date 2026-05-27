import { generateVendors } from './vendorGenerator';

export interface VendorPackage {
  name: string;
  price: number;
  inclusions: string[];
}

export interface VendorReview {
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Vendor {
  id: string;
  name: string;
  mainCategory: string;
  niche: string;
  description: string;
  city: string;
  area: string;
  distance: number;
  rating: number;
  reviewCount: number;
  verified: boolean;
  startingPrice: number;
  priceRange: string;
  ceremonyTypes: string[];
  servicesOffered: string[];
  availabilityStatus: 'Available' | 'Busy' | 'Booked';
  experienceYears: number;
  packages: VendorPackage[];
  reviews: VendorReview[];
  imageUrl: string;
}

export const MAIN_CATEGORIES = [
  { id: 'priest', name: 'Priest / Pandit', icon: '🕉️' },
  { id: 'decorator', name: 'Decorator', icon: '🎨' },
  { id: 'caterer', name: 'Caterer', icon: '🍽️' },
  { id: 'photographer', name: 'Photographer', icon: '📸' },
  { id: 'venue', name: 'Venue / Banquet', icon: '🏛️' },
  { id: 'makeup', name: 'Makeup Artist', icon: '💄' },
  { id: 'music', name: 'Music / DJ', icon: '🎵' },
  { id: 'florist', name: 'Florist', icon: '💐' },
];

export const NICHES = {
  priest: [
    'Wedding Pandit',
    'Puja Pandit',
    'Shraddh / Funeral Pandit',
    'Griha Pravesh Pandit',
    'Annaprashan Pandit',
    'Thread Ceremony Pandit',
  ],
  decorator: [
    'Wedding Mandap Decorator',
    'Haldi / Mehendi Decorator',
    'Floral Decorator',
    'Balloon Decorator',
    'Puja Decoration',
    'Funeral / Shraddh Decoration',
  ],
  caterer: [
    'Wedding Caterer',
    'Bengali Traditional Caterer',
    'Pure Veg Caterer',
    'Snacks & Starter Caterer',
    'Sweet Counter Caterer',
    'Small Family Function Caterer',
  ],
  photographer: [
    'Wedding Photographer',
    'Engagement Photographer',
    'Candid Photographer',
    'Traditional Photographer',
    'Videographer',
    'Small Ceremony Photographer',
  ],
  venue: [
    'Wedding Banquet',
    'Small Party Hall',
    'Community Hall',
    'Puja Hall',
    'Outdoor Lawn',
    'Budget Venue',
  ],
  makeup: [
    'Bridal Makeup Artist',
    'Engagement Makeup Artist',
    'Party Makeup Artist',
    'Traditional Makeup Artist',
    'Hair Stylist',
    'Family Function Makeup',
  ],
  music: [
    'Wedding DJ',
    'Sangeet DJ',
    'Traditional Music Group',
    'Bhajan / Kirtan Group',
    'Shehnai Player',
    'Sound & Light Service',
  ],
  florist: [
    'Wedding Florist',
    'Mandap Flower Decor',
    'Garland Maker',
    'Puja Flower Supplier',
    'Car Flower Decor',
    'Stage Flower Decor',
  ],
};

// Helper to generate vendors (This is a sample - full data would be in a separate file)
export const VENDORS: Vendor[] = [
  // PRIEST - Wedding Pandit (10 vendors)
  {
    id: 'priest-wedding-001',
    name: 'Pandit Ramesh Sharma',
    mainCategory: 'Priest / Pandit',
    niche: 'Wedding Pandit',
    description: 'Experienced wedding priest specializing in Bengali and North Indian wedding rituals',
    city: 'Kolkata',
    area: 'Tollygunge',
    distance: 3.1,
    rating: 4.8,
    reviewCount: 156,
    verified: true,
    startingPrice: 5000,
    priceRange: '₹5,000 - ₹15,000',
    ceremonyTypes: ['Wedding', 'Engagement'],
    servicesOffered: ['Bengali Wedding Rituals', 'North Indian Wedding', 'Vedic Mantras', 'Marriage Registration'],
    availabilityStatus: 'Available',
    experienceYears: 15,
    packages: [
      { name: 'Basic Package', price: 5000, inclusions: ['Wedding ceremony', 'Basic rituals', 'Traditional mantras'] },
      { name: 'Standard Package', price: 10000, inclusions: ['Full wedding ceremony', 'Haldi & mehendi rituals', 'Vedic mantras', 'Detailed explanations'] },
      { name: 'Premium Package', price: 15000, inclusions: ['Complete wedding rituals', 'Pre-wedding ceremonies', 'Personalized mantras', 'Post-wedding blessings', 'Marriage registration guidance'] },
    ],
    reviews: [
      { userName: 'Amit Kumar', rating: 5, comment: 'Excellent service! Very knowledgeable and made our wedding ceremony memorable.', date: '2 weeks ago' },
      { userName: 'Priya Sharma', rating: 4.5, comment: 'Professional and patient. Explained each ritual beautifully.', date: '1 month ago' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1609137882613-38054523772f?w=600&auto=format&fit=crop',
  },
  {
    id: 'priest-wedding-002',
    name: 'Pandit Subhash Mishra',
    mainCategory: 'Priest / Pandit',
    niche: 'Wedding Pandit',
    description: 'Traditional wedding priest with expertise in Sanskrit shlokas and Bengali rituals',
    city: 'Kolkata',
    area: 'Salt Lake',
    distance: 4.5,
    rating: 4.7,
    reviewCount: 142,
    verified: true,
    startingPrice: 6000,
    priceRange: '₹6,000 - ₹18,000',
    ceremonyTypes: ['Wedding', 'Engagement', 'Thread Ceremony'],
    servicesOffered: ['Bengali Wedding', 'Sanskrit Shlokas', 'Vedic Rituals', 'Engagement Ceremony'],
    availabilityStatus: 'Available',
    experienceYears: 18,
    packages: [
      { name: 'Basic Package', price: 6000, inclusions: ['Wedding ceremony', 'Traditional rituals'] },
      { name: 'Standard Package', price: 12000, inclusions: ['Full wedding', 'Engagement ceremony', 'Sanskrit mantras'] },
      { name: 'Premium Package', price: 18000, inclusions: ['Complete wedding package', 'Multiple ceremonies', 'Personalized blessings'] },
    ],
    reviews: [
      { userName: 'Rajesh Das', rating: 4.8, comment: 'Very experienced pandit ji. Made the ceremony perfect.', date: '3 weeks ago' },
      { userName: 'Sneha Roy', rating: 4.6, comment: 'Wonderful experience. Highly recommended!', date: '1 month ago' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&auto=format&fit=crop',
  },
  // Add more vendors here... Due to length, I'll create a comprehensive data generation system
];

// Generate all 480 vendors for production use
console.log('🔄 Generating 480 vendors for RitualSathi...');
const generatedVendors = generateVendors();
console.log(`✅ Generated ${generatedVendors.length} vendors successfully!`);

// Export all generated vendors (10 per niche × 6 niches × 8 categories = 480 vendors)
export const ALL_VENDORS = generatedVendors;

/**
 * Get all vendors (same as ALL_VENDORS, for backward compatibility)
 */
export function getAllVendors(): Vendor[] {
  return ALL_VENDORS;
}
