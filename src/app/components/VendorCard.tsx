import { MapPin, Star, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface VendorCardProps {
  // New format (preferred)
  vendorName?: string;
  location?: string;
  reviewCount?: number;
  price?: number;
  distance?: number;

  // Legacy format (for backward compatibility)
  name?: string;
  category?: string;
  rating: number;
  reviews?: number;
  verified?: boolean;
  startingPrice?: number;

  // Common props
  imageUrl?: string;
  onViewDetails?: () => void;
}

export function VendorCard({
  vendorName,
  location,
  reviewCount,
  price,
  distance: distanceNum,
  name,
  category,
  rating,
  reviews,
  verified = true,
  startingPrice,
  imageUrl,
  onViewDetails
}: VendorCardProps) {
  const { isDarkMode } = useTheme();

  // Use new format if available, fallback to legacy
  const displayName = vendorName || name || '';
  const displayLocation = location || category || '';
  const displayReviews = reviewCount || reviews || 0;
  const displayPrice = price || startingPrice || 0;
  const displayDistance = distanceNum ? `${distanceNum} km away` : (typeof distanceNum === 'string' ? distanceNum : '');
  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  return (
    <div className={`rounded-[16px] border p-3 transition-all duration-300 ${
      isDarkMode
        ? 'bg-[#1E293B] border-[#334155] shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:border-[#475569]'
        : 'bg-white border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
    }`}>
      <div className="flex gap-3">
        {/* Vendor Image */}
        <div className="w-24 h-24 rounded-[12px] bg-[#F3F4F6] flex-shrink-0 overflow-hidden relative">
          {imageUrl ? (
            <img src={imageUrl} alt={displayName} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">
              {displayLocation.includes('Priest') ? '🕉️' : displayLocation.includes('Decorator') ? '🎨' : '🍽️'}
            </div>
          )}
          {verified && (
            <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[#22A55A] border-2 border-white flex items-center justify-center">
              <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            </div>
          )}
        </div>

        {/* Vendor Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              className={`font-semibold line-clamp-1 transition-colors duration-300 ${
                isDarkMode ? 'text-[#F1F5F9]' : 'text-[#1F2937]'
              }`}
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              {displayName}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-[#F1F5F9]' : 'text-[#1F2937]'
                }`}
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {rating}
              </span>
            </div>
          </div>

          <p
            className={`mb-1 transition-colors duration-300 ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#6B7280]'
            }`}
            style={{ fontSize: '13px', lineHeight: '18px' }}
          >
            {displayLocation}
          </p>

          <div className="flex items-center gap-1 mb-2">
            <span
              className={`transition-colors duration-300 ${
                isDarkMode ? 'text-[#64748B]' : 'text-[#9CA3AF]'
              }`}
              style={{ fontSize: '12px', lineHeight: '16px' }}
            >
              ({displayReviews} reviews)
            </span>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <MapPin className={`w-3.5 h-3.5 transition-colors duration-300 ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#6B7280]'
            }`} />
            <span
              className={`transition-colors duration-300 ${
                isDarkMode ? 'text-[#94A3B8]' : 'text-[#6B7280]'
              }`}
              style={{ fontSize: '12px', lineHeight: '16px' }}
            >
              {displayDistance}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div>
              <p
                className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-[#94A3B8]' : 'text-[#6B7280]'
                }`}
                style={{ fontSize: '11px', lineHeight: '14px' }}
              >
                Starting from
              </p>
              <p
                className={`font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-[#F1F5F9]' : 'text-[#1F2937]'
                }`}
                style={{ fontSize: '16px', lineHeight: '20px' }}
              >
                ₹{formatIndianNumber(displayPrice)}
              </p>
            </div>
            <button
              onClick={onViewDetails}
              className={`px-4 py-2 rounded-[8px] bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-semibold hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'shadow-lg shadow-orange-500/30' : ''
              }`}
              style={{ fontSize: '13px', lineHeight: '16px' }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
