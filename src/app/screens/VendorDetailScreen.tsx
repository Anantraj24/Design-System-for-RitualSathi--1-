import { ChevronLeft, Star, MapPin, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { PackageCard } from '../components/PackageCard';
import { ReviewCard } from '../components/ReviewCard';
import { Vendor } from '../../data/vendors';

interface VendorDetailScreenProps {
  vendor: Vendor;
  onBack: () => void;
  onBookNow?: () => void;
}

export function VendorDetailScreen({ vendor, onBack, onBookNow }: VendorDetailScreenProps) {
  // Get ceremony icons for display
  const getCeremonyIcon = (ceremony: string) => {
    const iconMap: Record<string, string> = {
      Wedding: '💍',
      Engagement: '💐',
      Annaprashan: '🍚',
      Puja: '🪔',
      'Festival Puja': '🪔',
      Shraddh: '🕉️',
      Funeral: '🕉️',
      'Thread Ceremony': '📿',
      'Griha Pravesh': '🏠',
      Anniversary: '🎂',
      Haldi: '🌼',
      Mehendi: '🎨',
      Sangeet: '🎵',
      'Birthday Party': '🎂',
    };
    return iconMap[ceremony] || '🎉';
  };

  const packages = vendor.packages.map((pkg, index) => ({
    title: pkg.name,
    price: pkg.price,
    inclusions: pkg.inclusions,
    popular: index === 1, // Middle package is popular
  }));

  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  // Get icon for category
  const getCategoryIcon = () => {
    const iconMap: Record<string, string> = {
      Priest: '🕉️',
      Decorator: '🎨',
      Caterer: '🍽️',
      Photographer: '📸',
      Venue: '🏛️',
      Makeup: '💄',
      Music: '🎵',
      Florist: '💐',
    };
    return iconMap[vendor.mainCategory.split(' / ')[0]] || '🎉';
  };

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header with gradient background */}
      <div className="relative bg-gradient-to-br from-[#F97316] to-[#EA580C] pb-36">
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
            <span className="text-white text-xl">❤️</span>
          </button>
        </div>

        {/* Vendor Info Card - Overlapping */}
        <div className="absolute bottom-0 left-0 right-0 px-4 translate-y-1/2">
          <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
            {/* Vendor Icon */}
            <div className="w-16 h-16 rounded-full bg-[#FFF7ED] flex items-center justify-center mb-4 border-4 border-white shadow-md -mt-12">
              <span className="text-3xl">{getCategoryIcon()}</span>
            </div>

            {/* Vendor Name & Verification */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex-1">
                <h1
                  className="font-bold text-[#1F2937] mb-1"
                  style={{ fontSize: '22px', lineHeight: '30px' }}
                >
                  {vendor.name}
                </h1>
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  {vendor.niche}
                </p>
              </div>
              {vendor.verified && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#22A55A]">
                  <CheckCircle className="w-4 h-4 text-[#22A55A]" />
                  <span
                    className="text-[#22A55A] font-semibold"
                    style={{ fontSize: '12px', lineHeight: '16px' }}
                  >
                    Verified
                  </span>
                </div>
              )}
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 text-[#FBBF24] fill-[#FBBF24]" />
                <span
                  className="font-bold text-[#1F2937]"
                  style={{ fontSize: '18px', lineHeight: '24px' }}
                >
                  {vendor.rating.toFixed(1)}
                </span>
                <span
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  ({vendor.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#6B7280]" />
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {vendor.area}, {vendor.city} • {vendor.distance} km away
              </span>
            </div>

            {/* Starting Price */}
            <div className="mt-4 pt-4 border-t border-[#F3F4F6]">
              <p
                className="text-[#6B7280] mb-1"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Starting from
              </p>
              <p
                className="font-bold text-[#F97316]"
                style={{ fontSize: '24px', lineHeight: '32px' }}
              >
                ₹{formatIndianNumber(vendor.startingPrice)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-36 pb-28">
        {/* About Vendor */}
        <section className="mb-8">
          <h2
            className="font-semibold text-[#1F2937] mb-3"
            style={{ fontSize: '18px', lineHeight: '26px' }}
          >
            About Vendor
          </h2>
          <p
            className="text-[#6B7280]"
            style={{ fontSize: '15px', lineHeight: '22px' }}
          >
            {vendor.description}. {vendor.experienceYears} years of experience serving families across {vendor.city}.
          </p>
        </section>

        {/* Services Offered */}
        <section className="mb-8">
          <h2
            className="font-semibold text-[#1F2937] mb-3"
            style={{ fontSize: '18px', lineHeight: '26px' }}
          >
            Services Offered
          </h2>
          <div className="flex flex-wrap gap-2">
            {vendor.servicesOffered.map((service, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-[#FFF7ED] border border-[#F97316]/20"
              >
                <span
                  className="text-[#F97316] font-medium"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Ceremony Types Supported */}
        <section className="mb-8">
          <h2
            className="font-semibold text-[#1F2937] mb-3"
            style={{ fontSize: '18px', lineHeight: '26px' }}
          >
            Ceremony Types Supported
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {vendor.ceremonyTypes.map((ceremony) => (
              <div
                key={ceremony}
                className="flex flex-col items-center gap-2 p-3 rounded-[12px] bg-white border border-[#E5E7EB]"
              >
                <span className="text-2xl">{getCeremonyIcon(ceremony)}</span>
                <span
                  className="text-[#1F2937] text-center font-medium"
                  style={{ fontSize: '12px', lineHeight: '16px' }}
                >
                  {ceremony}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="mb-8">
          <h2
            className="font-semibold text-[#1F2937] mb-4"
            style={{ fontSize: '18px', lineHeight: '26px' }}
          >
            Pricing Packages
          </h2>
          <div className="space-y-4">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                inclusions={pkg.inclusions}
                popular={pkg.popular}
                onSelect={() => console.log('Selected:', pkg.title)}
              />
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="font-semibold text-[#1F2937]"
              style={{ fontSize: '18px', lineHeight: '26px' }}
            >
              Reviews ({vendor.reviewCount})
            </h2>
            <button
              className="text-[#F97316] font-semibold hover:text-[#EA580C]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              See All
            </button>
          </div>
          <div className="space-y-3">
            {vendor.reviews.map((review, index) => (
              <ReviewCard
                key={index}
                userName={review.userName}
                rating={review.rating}
                comment={review.comment}
                date={review.date}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto bg-white border-t border-[#F3F4F6] px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-[10px] bg-[#22A55A] flex items-center justify-center hover:bg-[#16A34A] transition-all duration-200">
            <Phone className="w-5 h-5 text-white" />
          </button>
          <button className="w-12 h-12 rounded-[10px] bg-[#22A55A] flex items-center justify-center hover:bg-[#16A34A] transition-all duration-200">
            <MessageCircle className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={onBookNow}
            className="flex-1 h-12 rounded-[10px] bg-[#F97316] text-white font-semibold hover:bg-[#FB923C] transition-all duration-200 shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
          >
            <span style={{ fontSize: '16px', lineHeight: '20px' }}>
              Book Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
