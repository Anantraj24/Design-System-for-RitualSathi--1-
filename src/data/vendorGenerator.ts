import { Vendor } from './vendors';

const LOCATIONS = [
  { city: 'Kolkata', areas: ['Tollygunge', 'Ballygunge', 'Park Street', 'Behala'] },
  { city: 'Howrah', areas: ['Howrah', 'Shibpur', 'Liluah'] },
  { city: 'Salt Lake', areas: ['Salt Lake Sector 1', 'Salt Lake Sector 5', 'Bidhannagar'] },
  { city: 'New Town', areas: ['New Town', 'Action Area 1', 'Action Area 2'] },
  { city: 'Dum Dum', areas: ['Dum Dum', 'Dum Dum Cantonment', 'Nagerbazar'] },
  { city: 'Garia', areas: ['Garia', 'Baishnabghata', 'Tentulberia'] },
  { city: 'Barasat', areas: ['Barasat', 'Madhyamgram', 'Hridaypur'] },
  { city: 'Siliguri', areas: ['Siliguri', 'Pradhan Nagar', 'Matigara'] },
];

const VENDOR_NAMES = {
  priest: [
    'Pandit Ramesh Sharma', 'Pandit Subhash Mishra', 'Pandit Anil Kumar', 'Pandit Rajesh Joshi',
    'Pandit Dinesh Pandey', 'Pandit Suresh Tiwari', 'Pandit Mahesh Dubey', 'Pandit Ganesh Shukla',
    'Pandit Naresh Pathak', 'Pandit Umesh Ojha', 'Pandit Ritesh Tripathi', 'Pandit Kamlesh Rai',
  ],
  decorator: [
    'Maa Durga Decorators', 'Royal Mandap Creations', 'Shubh Vivah Decor', 'Dream Wedding Decors',
    'Kolkata Mandap House', 'Elegant Events Decor', 'Shree Decoration', 'Golden Touch Decorators',
    'Perfect Moments Decor', 'Utsav Decorations', 'Blooming Decor Studio', 'Grand Event Decorators',
  ],
  caterer: [
    'Shri Santosh Catering', 'Annapurna Caterers', 'Bengal Bhoj Catering', 'Royal Feast Caterers',
    'Maharaja Catering Service', 'Traditional Taste Caterers', 'Kolkata Kitchen Caterers', 'Elite Food Services',
    'Premium Catering Co', 'Heritage Food Caterers', 'Delicious Bites Catering', 'Grand Feast Services',
  ],
  photographer: [
    'Shubh Moments Photography', 'Royal Frame Studio', 'Candid Clicks Photography', 'Perfect Shot Studios',
    'Eternal Memories Photo', 'Kolkata Wedding Films', 'Vivid Captures Studio', 'Golden Hour Photography',
    'Classic Frames Studio', 'Blissful Moments Photo', 'Dream Wedding Films', 'Premium Pixels Studio',
  ],
  venue: [
    'Utsav Banquet Hall', 'Royal Palace Banquet', 'Grand Convention Centre', 'Elite Party Hall',
    'Heritage Banquet', 'Golden Jubilee Hall', 'Premium Events Venue', 'Celebration Banquet',
    'Imperial Banquet Hall', 'Crystal Palace Venue', 'Maharaja Convention', 'Shubh Vivah Hall',
  ],
  makeup: [
    'Kolkata Bridal Glow', 'Glamour Studio Kolkata', 'Bridal Makeover Studio', 'Elite Beauty Lounge',
    'Perfect Look Makeup', 'Royal Bridal Studio', 'Gorgeous You Makeup', 'Radiant Beauty Studio',
    'Premium Glam Studio', 'Elegant Bridal Makeup', 'Style Icon Studio', 'Makeup Maestro Kolkata',
  ],
  music: [
    'Sangeet Beats DJ', 'Royal DJ Services', 'Bass Thumpers DJ', 'Wedding Vibes DJ',
    'Kolkata DJ Nights', 'Premier Sound System', 'Beat Box DJ Services', 'Party Rockers DJ',
    'Elite DJ Entertainment', 'Wedding DJ Pro', 'Sound Master Services', 'Musical Moments DJ',
  ],
  florist: [
    'Pushpanjali Florist', 'Rose Garden Flowers', 'Blooming Petals Florist', 'Fresh Flower Decor',
    'Kolkata Flower Market', 'Premium Blooms', 'Garden of Eden Florist', 'Floral Fantasy',
    'Elegant Flowers Studio', 'Blossom Paradise', 'Royal Flower Decor', 'Nature\'s Beauty Florist',
  ],
};

const CEREMONY_TYPES = ['Wedding', 'Engagement', 'Annaprashan', 'Puja', 'Shraddh', 'Funeral', 'Thread Ceremony', 'Griha Pravesh', 'Anniversary', 'Haldi', 'Mehendi', 'Sangeet'];

const CATEGORY_IMAGES: Record<string, string[]> = {
  priest: [
    'https://images.unsplash.com/photo-1609137882613-38054523772f?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1602631985686-2bb0f303796e?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621252179027-94459d278660?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561361513-2d000a50f0db?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1608976451614-4113e11786d7?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505232458627-5aec97ef0921?w=600&auto=format&fit=crop'
  ],
  decorator: [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519225495810-7517c319b516?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop'
  ],
  caterer: [
    'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490717064594-3be2c4d736f6?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop'
  ],
  photographer: [
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520856729051-7b6a125024a5?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop'
  ],
  venue: [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505232458627-5aec97ef0921?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop'
  ],
  makeup: [
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500840216050-6efe9c59f47b?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526045431048-f857369abd09?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&auto=format&fit=crop'
  ],
  music: [
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1482440308425-276ad0f28b19?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484755560695-a4c74891d06b?w=600&auto=format&fit=crop'
  ],
  florist: [
    'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550950158-d0d960dff51b?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508784409605-2f1d43a6d962?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop'
  ]
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRating(): number {
  return parseFloat((4.1 + Math.random() * 0.8).toFixed(1));
}

export function generateVendors(): Vendor[] {
  const vendors: Vendor[] = [];
  let vendorId = 1;

  // Define vendor templates for each niche with realistic data
  const nicheConfigs: Record<string, any> = {
    'priest-Wedding Pandit': {
      priceRange: [5000, 25000],
      services: ['Bengali Wedding Rituals', 'North Indian Wedding', 'Vedic Mantras', 'Marriage Registration', 'Engagement Ceremony'],
      ceremonies: ['Wedding', 'Engagement'],
      packageMultipliers: [1, 2, 3],
    },
    'priest-Puja Pandit': {
      priceRange: [2000, 10000],
      services: ['Durga Puja', 'Lakshmi Puja', 'Saraswati Puja', 'Ganesh Puja', 'Satyanarayan Katha'],
      ceremonies: ['Puja', 'Festival Puja'],
      packageMultipliers: [1, 1.8, 2.5],
    },
    'priest-Shraddh / Funeral Pandit': {
      priceRange: [3000, 15000],
      services: ['Shraddh Ceremony', 'Last Rites', 'Asthi Visarjan', 'Monthly Shraddh', 'Annual Shraddh'],
      ceremonies: ['Shraddh', 'Funeral'],
      packageMultipliers: [1, 1.7, 2.3],
    },
    'priest-Griha Pravesh Pandit': {
      priceRange: [3000, 12000],
      services: ['Griha Pravesh Puja', 'Vastu Shanti', 'Ganesh Puja', 'Navagraha Puja'],
      ceremonies: ['Griha Pravesh', 'Puja'],
      packageMultipliers: [1, 1.8, 2.5],
    },
    'priest-Annaprashan Pandit': {
      priceRange: [2000, 8000],
      services: ['Annaprashan Ceremony', 'Naming Ceremony', 'Baby Blessings', 'Traditional Rituals'],
      ceremonies: ['Annaprashan'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'priest-Thread Ceremony Pandit': {
      priceRange: [4000, 15000],
      services: ['Upanayana Ceremony', 'Sacred Thread Ritual', 'Vedic Mantras', 'Traditional Blessings'],
      ceremonies: ['Thread Ceremony'],
      packageMultipliers: [1, 1.8, 2.6],
    },
    'decorator-Wedding Mandap Decorator': {
      priceRange: [50000, 250000],
      services: ['Wedding Mandap Setup', 'Stage Decoration', 'Floral Arrangements', 'Lighting Setup', 'Entry Gate Decor'],
      ceremonies: ['Wedding'],
      packageMultipliers: [1, 1.8, 2.5],
    },
    'decorator-Haldi / Mehendi Decorator': {
      priceRange: [15000, 80000],
      services: ['Haldi Decoration', 'Mehendi Setup', 'Flower Decoration', 'Seating Arrangement', 'Photo Corner'],
      ceremonies: ['Haldi', 'Mehendi', 'Wedding'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'decorator-Floral Decorator': {
      priceRange: [20000, 150000],
      services: ['Fresh Flower Decoration', 'Floral Mandap', 'Flower Ceiling', 'Bouquets', 'Floral Jewelry'],
      ceremonies: ['Wedding', 'Engagement', 'Anniversary'],
      packageMultipliers: [1, 1.8, 2.6],
    },
    'decorator-Balloon Decorator': {
      priceRange: [8000, 50000],
      services: ['Balloon Arches', 'Balloon Columns', 'Helium Balloons', 'Balloon Walls', 'Birthday Decor'],
      ceremonies: ['Anniversary', 'Engagement', 'Birthday Party'],
      packageMultipliers: [1, 1.5, 2],
    },
    'decorator-Puja Decoration': {
      priceRange: [10000, 60000],
      services: ['Puja Mandap', 'Traditional Decor', 'Flower Arrangements', 'Lighting', 'Sacred Setup'],
      ceremonies: ['Puja', 'Griha Pravesh', 'Annaprashan'],
      packageMultipliers: [1, 1.7, 2.3],
    },
    'decorator-Funeral / Shraddh Decoration': {
      priceRange: [8000, 40000],
      services: ['Shraddh Setup', 'Funeral Decorations', 'Traditional Arrangements', 'Flower Decor'],
      ceremonies: ['Shraddh', 'Funeral'],
      packageMultipliers: [1, 1.5, 2],
    },
    'caterer-Wedding Caterer': {
      priceRange: [150000, 500000],
      services: ['Full Course Meal', 'Live Counters', 'Welcome Drinks', 'Dessert Counter', 'Service Staff'],
      ceremonies: ['Wedding', 'Engagement'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'caterer-Bengali Traditional Caterer': {
      priceRange: [100000, 350000],
      services: ['Bengali Cuisine', 'Traditional Dishes', 'Fish Preparations', 'Sweets', 'Luchi-Alur Dom'],
      ceremonies: ['Wedding', 'Puja', 'Annaprashan'],
      packageMultipliers: [1, 1.7, 2.3],
    },
    'caterer-Pure Veg Caterer': {
      priceRange: [80000, 300000],
      services: ['Vegetarian Menu', 'Satvik Food', 'Paneer Dishes', 'Dal Makhani', 'Sabzi Varieties'],
      ceremonies: ['Wedding', 'Puja', 'Thread Ceremony', 'Griha Pravesh'],
      packageMultipliers: [1, 1.6, 2.1],
    },
    'caterer-Snacks & Starter Caterer': {
      priceRange: [30000, 120000],
      services: ['Chaat Counter', 'Pakoras', 'Samosas', 'Spring Rolls', 'Paneer Tikka', 'Momos'],
      ceremonies: ['Wedding', 'Engagement', 'Haldi', 'Mehendi', 'Sangeet'],
      packageMultipliers: [1, 1.5, 2],
    },
    'caterer-Sweet Counter Caterer': {
      priceRange: [25000, 100000],
      services: ['Bengali Sweets', 'Rasgulla', 'Sandesh', 'Mishti Doi', 'Gulab Jamun', 'Jalebi'],
      ceremonies: ['Wedding', 'Puja', 'Annaprashan', 'Anniversary'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'caterer-Small Family Function Caterer': {
      priceRange: [15000, 60000],
      services: ['Home Style Cooking', 'Small Gatherings', 'Traditional Menu', 'Delivery Service'],
      ceremonies: ['Puja', 'Annaprashan', 'Thread Ceremony', 'Griha Pravesh', 'Shraddh'],
      packageMultipliers: [1, 1.5, 2],
    },
    'photographer-Wedding Photographer': {
      priceRange: [40000, 200000],
      services: ['Full Day Coverage', 'Pre-Wedding Shoot', 'Candid Photography', 'Cinematic Video', 'Drone Shots'],
      ceremonies: ['Wedding'],
      packageMultipliers: [1, 1.8, 2.5],
    },
    'photographer-Engagement Photographer': {
      priceRange: [20000, 80000],
      services: ['Engagement Ceremony', 'Ring Ceremony Photos', 'Couple Portraits', 'Family Photos'],
      ceremonies: ['Engagement'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'photographer-Candid Photographer': {
      priceRange: [35000, 150000],
      services: ['Candid Shots', 'Natural Moments', 'Storytelling Photography', 'Edited Photos'],
      ceremonies: ['Wedding', 'Engagement', 'Haldi', 'Mehendi', 'Sangeet'],
      packageMultipliers: [1, 1.7, 2.4],
    },
    'photographer-Traditional Photographer': {
      priceRange: [25000, 100000],
      services: ['Traditional Poses', 'Family Portraits', 'Ritual Photography', 'Photo Album'],
      ceremonies: ['Wedding', 'Thread Ceremony', 'Annaprashan', 'Puja'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'photographer-Videographer': {
      priceRange: [30000, 150000],
      services: ['Full HD Video', '4K Cinematic Film', 'Highlights Reel', 'Drone Coverage', 'Same Day Edit'],
      ceremonies: ['Wedding', 'Engagement', 'Sangeet'],
      packageMultipliers: [1, 1.8, 2.6],
    },
    'photographer-Small Ceremony Photographer': {
      priceRange: [8000, 40000],
      services: ['Small Function Coverage', 'Basic Photography', 'Digital Photos', 'Few Hours Coverage'],
      ceremonies: ['Puja', 'Annaprashan', 'Griha Pravesh', 'Thread Ceremony'],
      packageMultipliers: [1, 1.5, 2],
    },
    'venue-Wedding Banquet': {
      priceRange: [100000, 500000],
      services: ['Banquet Hall', 'AC Venue', 'Seating for 500+', 'Parking Space', 'Catering Area', 'Decoration Setup'],
      ceremonies: ['Wedding', 'Engagement'],
      packageMultipliers: [1, 1.5, 2],
    },
    'venue-Small Party Hall': {
      priceRange: [40000, 150000],
      services: ['Party Hall', 'Seating for 100-200', 'AC Facility', 'Music System', 'Basic Decoration'],
      ceremonies: ['Engagement', 'Sangeet', 'Haldi', 'Mehendi', 'Anniversary'],
      packageMultipliers: [1, 1.5, 2],
    },
    'venue-Community Hall': {
      priceRange: [20000, 80000],
      services: ['Community Hall Booking', 'Basic Facilities', 'Seating Arrangement', 'Parking'],
      ceremonies: ['Puja', 'Annaprashan', 'Thread Ceremony', 'Engagement'],
      packageMultipliers: [1, 1.4, 1.8],
    },
    'venue-Puja Hall': {
      priceRange: [15000, 60000],
      services: ['Puja Venue', 'Traditional Setup Space', 'Basic Amenities', 'Idol Setup Area'],
      ceremonies: ['Puja', 'Griha Pravesh', 'Shraddh'],
      packageMultipliers: [1, 1.5, 2],
    },
    'venue-Outdoor Lawn': {
      priceRange: [80000, 400000],
      services: ['Open Air Lawn', 'Garden Wedding', 'Large Capacity', 'Tent Setup', 'Lighting Arrangements'],
      ceremonies: ['Wedding', 'Sangeet', 'Mehendi'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'venue-Budget Venue': {
      priceRange: [10000, 50000],
      services: ['Budget Friendly Venue', 'Basic Hall', 'Simple Facilities', 'Small Gatherings'],
      ceremonies: ['Puja', 'Annaprashan', 'Thread Ceremony', 'Small Function'],
      packageMultipliers: [1, 1.3, 1.6],
    },
    'makeup-Bridal Makeup Artist': {
      priceRange: [15000, 75000],
      services: ['Bridal Makeup', 'Hair Styling', 'Draping', 'Pre-Bridal Services', 'Touch-ups'],
      ceremonies: ['Wedding'],
      packageMultipliers: [1, 1.8, 2.5],
    },
    'makeup-Engagement Makeup Artist': {
      priceRange: [8000, 35000],
      services: ['Engagement Makeup', 'Hair Styling', 'Party Look', 'Light Makeup'],
      ceremonies: ['Engagement', 'Sangeet'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'makeup-Party Makeup Artist': {
      priceRange: [5000, 25000],
      services: ['Party Makeup', 'Glamour Look', 'Hair Styling', 'Quick Touch-ups'],
      ceremonies: ['Sangeet', 'Mehendi', 'Haldi', 'Anniversary'],
      packageMultipliers: [1, 1.5, 2],
    },
    'makeup-Traditional Makeup Artist': {
      priceRange: [6000, 30000],
      services: ['Traditional Look', 'Bengali Bridal Makeup', 'Saree Draping', 'Traditional Hair'],
      ceremonies: ['Wedding', 'Puja', 'Thread Ceremony'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'makeup-Hair Stylist': {
      priceRange: [4000, 20000],
      services: ['Hair Styling', 'Braiding', 'Bun Styles', 'Hair Extensions', 'Floral Hair Decor'],
      ceremonies: ['Wedding', 'Engagement', 'Sangeet', 'Mehendi'],
      packageMultipliers: [1, 1.5, 2],
    },
    'makeup-Family Function Makeup': {
      priceRange: [3000, 15000],
      services: ['Simple Makeup', 'Natural Look', 'Family Event Makeup', 'Quick Service'],
      ceremonies: ['Puja', 'Annaprashan', 'Thread Ceremony', 'Griha Pravesh'],
      packageMultipliers: [1, 1.4, 1.8],
    },
    'music-Wedding DJ': {
      priceRange: [25000, 150000],
      services: ['Professional DJ', 'Sound System', 'Lighting Setup', 'Dance Floor', 'Music Playlist'],
      ceremonies: ['Wedding', 'Sangeet'],
      packageMultipliers: [1, 1.7, 2.4],
    },
    'music-Sangeet DJ': {
      priceRange: [20000, 100000],
      services: ['Sangeet Night DJ', 'Dance Music', 'Bollywood Hits', 'Sound System', 'Stage Lighting'],
      ceremonies: ['Sangeet', 'Mehendi', 'Haldi'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'music-Traditional Music Group': {
      priceRange: [15000, 80000],
      services: ['Live Music', 'Traditional Instruments', 'Bengali Songs', 'Folk Music'],
      ceremonies: ['Wedding', 'Puja', 'Thread Ceremony'],
      packageMultipliers: [1, 1.7, 2.3],
    },
    'music-Bhajan / Kirtan Group': {
      priceRange: [8000, 40000],
      services: ['Bhajan Singing', 'Kirtan Performance', 'Devotional Songs', 'Live Performance'],
      ceremonies: ['Puja', 'Griha Pravesh', 'Thread Ceremony', 'Shraddh'],
      packageMultipliers: [1, 1.5, 2],
    },
    'music-Shehnai Player': {
      priceRange: [10000, 50000],
      services: ['Shehnai Performance', 'Traditional Music', 'Welcome Music', 'Ceremony Music'],
      ceremonies: ['Wedding', 'Thread Ceremony'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'music-Sound & Light Service': {
      priceRange: [15000, 80000],
      services: ['Sound System Rental', 'Stage Lighting', 'LED Screens', 'Microphones', 'Speakers'],
      ceremonies: ['Wedding', 'Sangeet', 'Engagement', 'Puja'],
      packageMultipliers: [1, 1.5, 2],
    },
    'florist-Wedding Florist': {
      priceRange: [30000, 150000],
      services: ['Wedding Flowers', 'Bridal Bouquet', 'Groom Sehra', 'Car Decoration', 'Stage Flowers'],
      ceremonies: ['Wedding'],
      packageMultipliers: [1, 1.7, 2.4],
    },
    'florist-Mandap Flower Decor': {
      priceRange: [25000, 120000],
      services: ['Mandap Decoration', 'Floral Archways', 'Ceiling Flowers', 'Pillar Decor'],
      ceremonies: ['Wedding', 'Engagement'],
      packageMultipliers: [1, 1.6, 2.2],
    },
    'florist-Garland Maker': {
      priceRange: [5000, 30000],
      services: ['Jaimala Garlands', 'Fresh Flower Garlands', 'Rose Garlands', 'Marigold Garlands'],
      ceremonies: ['Wedding', 'Puja', 'Engagement'],
      packageMultipliers: [1, 1.5, 2],
    },
    'florist-Puja Flower Supplier': {
      priceRange: [3000, 20000],
      services: ['Puja Flowers', 'Lotus Flowers', 'Marigolds', 'Rose Petals', 'Fresh Flowers'],
      ceremonies: ['Puja', 'Griha Pravesh', 'Thread Ceremony', 'Shraddh'],
      packageMultipliers: [1, 1.4, 1.8],
    },
    'florist-Car Flower Decor': {
      priceRange: [5000, 25000],
      services: ['Car Decoration', 'Flower Strings', 'Bonnet Decoration', 'Door Handle Flowers'],
      ceremonies: ['Wedding'],
      packageMultipliers: [1, 1.5, 2],
    },
    'florist-Stage Flower Decor': {
      priceRange: [20000, 100000],
      services: ['Stage Decoration', 'Backdrop Flowers', 'Table Centerpieces', 'Floral Arrangements'],
      ceremonies: ['Wedding', 'Engagement', 'Sangeet'],
      packageMultipliers: [1, 1.6, 2.2],
    },
  };

  // Generate vendors for each category and niche
  Object.entries({
    priest: ['Wedding Pandit', 'Puja Pandit', 'Shraddh / Funeral Pandit', 'Griha Pravesh Pandit', 'Annaprashan Pandit', 'Thread Ceremony Pandit'],
    decorator: ['Wedding Mandap Decorator', 'Haldi / Mehendi Decorator', 'Floral Decorator', 'Balloon Decorator', 'Puja Decoration', 'Funeral / Shraddh Decoration'],
    caterer: ['Wedding Caterer', 'Bengali Traditional Caterer', 'Pure Veg Caterer', 'Snacks & Starter Caterer', 'Sweet Counter Caterer', 'Small Family Function Caterer'],
    photographer: ['Wedding Photographer', 'Engagement Photographer', 'Candid Photographer', 'Traditional Photographer', 'Videographer', 'Small Ceremony Photographer'],
    venue: ['Wedding Banquet', 'Small Party Hall', 'Community Hall', 'Puja Hall', 'Outdoor Lawn', 'Budget Venue'],
    makeup: ['Bridal Makeup Artist', 'Engagement Makeup Artist', 'Party Makeup Artist', 'Traditional Makeup Artist', 'Hair Stylist', 'Family Function Makeup'],
    music: ['Wedding DJ', 'Sangeet DJ', 'Traditional Music Group', 'Bhajan / Kirtan Group', 'Shehnai Player', 'Sound & Light Service'],
    florist: ['Wedding Florist', 'Mandap Flower Decor', 'Garland Maker', 'Puja Flower Supplier', 'Car Flower Decor', 'Stage Flower Decor'],
  }).forEach(([category, niches]) => {
    niches.forEach((niche) => {
      const nicheKey = `${category}-${niche}`;
      const config = nicheConfigs[nicheKey] || {
        priceRange: [10000, 100000],
        services: ['Service 1', 'Service 2', 'Service 3'],
        ceremonies: ['Wedding'],
        packageMultipliers: [1, 2, 3],
      };

      for (let i = 0; i < 10; i++) {
        const location = getRandomElement(LOCATIONS);
        const area = getRandomElement(location.areas);
        const vendorNameList = VENDOR_NAMES[category as keyof typeof VENDOR_NAMES];
        const baseName = getRandomElement(vendorNameList);
        const name = i > 0 && i < vendorNameList.length ? vendorNameList[i] : `${baseName} ${i > 9 ? i : ''}`.trim();

        const basePrice = getRandomInt(config.priceRange[0], Math.floor((config.priceRange[0] + config.priceRange[1]) / 2));
        const rating = getRandomRating();
        const reviews = getRandomInt(25, 350);

        const categoryImages = CATEGORY_IMAGES[category] || [];
        const imageUrl = categoryImages[i % categoryImages.length] || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop';

        vendors.push({
          id: `${category}-${niche.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${String(vendorId).padStart(3, '0')}`,
          name,
          mainCategory: category.charAt(0).toUpperCase() + category.slice(1),
          niche,
          description: `Professional ${niche.toLowerCase()} service in ${location.city} with ${getRandomInt(5, 25)} years of experience`,
          city: location.city,
          area,
          distance: parseFloat((Math.random() * 15 + 0.5).toFixed(1)),
          rating,
          reviewCount: reviews,
          verified: Math.random() > 0.2,
          startingPrice: basePrice,
          priceRange: `₹${basePrice.toLocaleString('en-IN')} - ₹${(basePrice * 3).toLocaleString('en-IN')}`,
          ceremonyTypes: config.ceremonies,
          servicesOffered: config.services.slice(0, getRandomInt(3, 5)),
          availabilityStatus: getRandomElement(['Available', 'Available', 'Available', 'Busy']),
          experienceYears: getRandomInt(3, 25),
          imageUrl,
          packages: [
            {
              name: 'Basic Package',
              price: basePrice,
              inclusions: [
                `${niche} service`,
                'Basic setup',
                `${getRandomInt(2, 4)} hours coverage`,
              ],
            },
            {
              name: 'Standard Package',
              price: Math.floor(basePrice * config.packageMultipliers[1]),
              inclusions: [
                `Complete ${niche.toLowerCase()} service`,
                'Premium setup',
                `${getRandomInt(4, 6)} hours coverage`,
                'Additional arrangements',
              ],
            },
            {
              name: 'Premium Package',
              price: Math.floor(basePrice * config.packageMultipliers[2]),
              inclusions: [
                `Full ${niche.toLowerCase()} package`,
                'Luxury setup',
                `${getRandomInt(6, 10)} hours coverage`,
                'VIP treatment',
                'Extra services included',
              ],
            },
          ],
          reviews: [
            {
              userName: getRandomElement(['Amit Kumar', 'Priya Sharma', 'Rajesh Das', 'Sneha Roy', 'Vikram Singh', 'Anita Desai']),
              rating: parseFloat((rating - 0.2 + Math.random() * 0.4).toFixed(1)),
              comment: getRandomElement([
                'Excellent service! Highly recommended.',
                'Very professional and on time.',
                'Great experience, will book again.',
                'Wonderful service, exceeded expectations.',
              ]),
              date: getRandomElement(['1 week ago', '2 weeks ago', '3 weeks ago', '1 month ago']),
            },
            {
              userName: getRandomElement(['Sanjay Gupta', 'Meera Patel', 'Arjun Reddy', 'Kavita Joshi', 'Rahul Sharma', 'Divya Singh']),
              rating: parseFloat((rating - 0.3 + Math.random() * 0.5).toFixed(1)),
              comment: getRandomElement([
                'Good service at reasonable prices.',
                'Professional and courteous staff.',
                'Met all our requirements perfectly.',
                'Satisfied with the overall experience.',
              ]),
              date: getRandomElement(['2 weeks ago', '3 weeks ago', '1 month ago', '2 months ago']),
            },
          ],
        });

        vendorId++;
      }
    });
  });

  return vendors;
}
