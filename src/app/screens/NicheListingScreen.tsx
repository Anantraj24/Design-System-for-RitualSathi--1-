import { useState, useMemo } from 'react';
import { ChevronLeft, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { VendorCard } from '../components/VendorCard';
import { ALL_VENDORS, Vendor } from '../../data/vendors';

interface NicheListingScreenProps {
  categoryId: string;
  niche: string;
  onBack: () => void;
  onViewVendor: (vendor: Vendor) => void;
}

export function NicheListingScreen({
  categoryId,
  niche,
  onBack,
  onViewVendor,
}: NicheListingScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'distance'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'premium'>('all');

  // Get vendors for this niche
  const nicheVendors = useMemo(() => {
    return ALL_VENDORS.filter((v) => v.niche === niche);
  }, [niche]);

  // Get unique areas
  const areas = useMemo(() => {
    const uniqueAreas = Array.from(new Set(nicheVendors.map((v) => v.area)));
    return uniqueAreas.sort();
  }, [nicheVendors]);

  // Filter and sort vendors
  const filteredVendors = useMemo(() => {
    let filtered = [...nicheVendors];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (v) =>
          v.name.toLowerCase().includes(query) ||
          v.area.toLowerCase().includes(query) ||
          v.city.toLowerCase().includes(query)
      );
    }

    // Area filter
    if (selectedArea) {
      filtered = filtered.filter((v) => v.area === selectedArea);
    }

    // Price range filter
    if (priceRange !== 'all') {
      filtered = filtered.filter((v) => {
        if (priceRange === 'budget') return v.startingPrice < 20000;
        if (priceRange === 'mid') return v.startingPrice >= 20000 && v.startingPrice < 50000;
        if (priceRange === 'premium') return v.startingPrice >= 50000;
        return true;
      });
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.startingPrice - b.startingPrice;
      if (sortBy === 'distance') return a.distance - b.distance;
      return 0;
    });

    return filtered;
  }, [nicheVendors, searchQuery, selectedArea, priceRange, sortBy]);

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-20">
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-[#1F2937]" />
            </button>
            <div className="flex-1">
              <h1
                className="font-bold text-[#1F2937]"
                style={{ fontSize: '18px', lineHeight: '26px' }}
              >
                {niche}
              </h1>
              <p
                className="text-[#6B7280]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                {filteredVendors.length} vendors near you
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search by name or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-[16px] bg-[#FFFDF8] border-[1.5px] border-[#E5E7EB] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED] transition-all duration-200"
              style={{ fontSize: '15px', lineHeight: '22px' }}
            />
          </div>

          {/* Filter & Sort Row */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 h-10 rounded-full border-[1.5px] transition-all duration-200 ${
                showFilters || selectedArea || priceRange !== 'all'
                  ? 'bg-[#F97316] border-[#F97316] text-white'
                  : 'bg-white border-[#E5E7EB] text-[#1F2937]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 600 }}>
                Filters
              </span>
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="flex-1 h-10 px-4 rounded-full bg-white border-[1.5px] border-[#E5E7EB] text-[#1F2937] font-semibold focus:outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED] transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m7 15 5 5 5-5'/%3E%3Cpath d='m7 9 5-5 5 5'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 12px center',
              }}
            >
              <option value="rating">Sort: Top Rated</option>
              <option value="price">Sort: Price Low to High</option>
              <option value="distance">Sort: Nearest First</option>
            </select>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-3 p-4 bg-[#FFFDF8] rounded-[16px] border border-[#E5E7EB] space-y-3">
              {/* Area Filter */}
              <div>
                <label
                  className="block text-[#1F2937] font-semibold mb-2"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Area
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedArea(null)}
                    className={`px-3 py-1.5 rounded-full border-[1.5px] transition-all duration-200 ${
                      !selectedArea
                        ? 'bg-[#F97316] border-[#F97316] text-white'
                        : 'bg-white border-[#E5E7EB] text-[#1F2937]'
                    }`}
                    style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 600 }}
                  >
                    All Areas
                  </button>
                  {areas.slice(0, 5).map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area === selectedArea ? null : area)}
                      className={`px-3 py-1.5 rounded-full border-[1.5px] transition-all duration-200 ${
                        selectedArea === area
                          ? 'bg-[#F97316] border-[#F97316] text-white'
                          : 'bg-white border-[#E5E7EB] text-[#1F2937]'
                      }`}
                      style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 600 }}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label
                  className="block text-[#1F2937] font-semibold mb-2"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Price Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'budget', label: 'Under ₹20K' },
                    { value: 'mid', label: '₹20K - ₹50K' },
                    { value: 'premium', label: 'Above ₹50K' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value as any)}
                      className={`px-3 py-1.5 rounded-full border-[1.5px] transition-all duration-200 ${
                        priceRange === option.value
                          ? 'bg-[#F97316] border-[#F97316] text-white'
                          : 'bg-white border-[#E5E7EB] text-[#1F2937]'
                      }`}
                      style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 600 }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Vendors List */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-6">
        <div className="max-w-md mx-auto space-y-4">
          {filteredVendors.length > 0 ? (
            filteredVendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendorName={vendor.name}
                rating={vendor.rating}
                reviewCount={vendor.reviewCount}
                location={`${vendor.area}, ${vendor.city}`}
                distance={vendor.distance}
                price={vendor.startingPrice}
                verified={vendor.verified}
                imageUrl={vendor.imageUrl}
                onViewDetails={() => onViewVendor(vendor)}
              />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-[#9CA3AF]" />
              </div>
              <p
                className="text-[#6B7280] mb-2"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                No vendors found
              </p>
              <p
                className="text-[#9CA3AF]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Try adjusting your filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
