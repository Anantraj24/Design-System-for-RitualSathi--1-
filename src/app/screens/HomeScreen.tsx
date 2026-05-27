import { useState, useMemo } from 'react';
import { Search, Bell, MapPin, DollarSign, Star, CheckCircle, Clock, MessageCircle, Sparkles, Moon, Sun } from 'lucide-react';
import { VendorCard } from '../components/VendorCard';
import { CategoryIcon } from '../components/CategoryIcon';
import { FilterChipButton } from '../components/FilterChipButton';
import { BottomNavigation } from '../components/BottomNavigation';
import { ALL_VENDORS, Vendor } from '../../data/vendors';
import { useTheme } from '../context/ThemeContext';

interface HomeScreenProps {
  onVendorClick?: (vendor: Vendor) => void;
  onCategoryClick?: (categoryId: string, categoryName: string) => void;
  onNavigate?: (tab: string) => void;
  onOpenChatbot?: () => void;
  onOpenNotifications?: () => void;
}

export function HomeScreen({ onVendorClick, onCategoryClick, onNavigate, onOpenChatbot, onOpenNotifications }: HomeScreenProps) {
  const [activeTab, setActiveTab] = useState('home');
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const categories = [
    { id: 'priest', icon: '🕉️', label: 'Priest / Pandit' },
    { id: 'decorator', icon: '🎨', label: 'Decorator' },
    { id: 'caterer', icon: '🍽️', label: 'Caterer' },
    { id: 'photographer', icon: '📸', label: 'Photographer' },
    { id: 'venue', icon: '🏛️', label: 'Venue / Banquet' },
    { id: 'makeup', icon: '💄', label: 'Makeup Artist' },
    { id: 'music', icon: '🎵', label: 'Music / DJ' },
    { id: 'florist', icon: '💐', label: 'Florist' },
  ];

  // Get featured vendors from different categories for home screen
  const featuredVendors = useMemo(() => {
    const caterer = ALL_VENDORS.find(v => v.mainCategory === 'Caterer' && v.niche === 'Wedding Caterer');
    const decorator = ALL_VENDORS.find(v => v.mainCategory === 'Decorator' && v.niche === 'Wedding Mandap Decorator');
    const priest = ALL_VENDORS.find(v => v.mainCategory === 'Priest' && v.niche === 'Wedding Pandit');

    return [caterer, decorator, priest].filter(Boolean) as Vendor[];
  }, []);

  return (
    <div className={`h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-[#0F172A]' : 'bg-[#FFFDF8]'}`}>
      {/* Header Section */}
      <div className={`border-b backdrop-blur-sm transition-all duration-300 ${
        isDarkMode
          ? 'bg-[#1E293B]/95 border-[#334155] shadow-lg shadow-black/20'
          : 'bg-white border-[#F3F4F6]'
      }`}>
        <div className="px-4 pt-3 pb-4">
          {/* Top Bar */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1
                className={`font-semibold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-[#F1F5F9]' : 'text-[#1F2937]'}`}
                style={{ fontSize: '20px', lineHeight: '28px' }}
              >
                Namaste, AnantRaj 🙏
              </h1>
              <p
                className={`transition-colors duration-300 ${isDarkMode ? 'text-[#CBD5E1]' : 'text-[#6B7280]'}`}
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Planning your Wedding in Kolkata
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-[#334155] hover:bg-[#475569] shadow-lg shadow-black/20'
                    : 'bg-[#F3F4F6] hover:bg-[#E5E7EB]'
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-[#FBBF24] animate-[spin_20s_linear_infinite]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#6B7280]" />
                )}
              </button>

              {/* Chatbot Button */}
              <button
                onClick={onOpenChatbot}
                className={`w-10 h-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] flex items-center justify-center hover:scale-105 transition-all duration-300 relative ${
                  isDarkMode ? 'shadow-lg shadow-orange-500/30' : ''
                }`}
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <div className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#22A55A] flex items-center justify-center ${
                  isDarkMode ? 'border-2 border-[#1E293B]' : 'border-2 border-white'
                }`}>
                  <Sparkles className="w-1.5 h-1.5 text-white" />
                </div>
              </button>

              {/* Notification Button */}
              <button
                onClick={onOpenNotifications}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                  isDarkMode
                    ? 'bg-[#334155] hover:bg-[#475569] shadow-lg shadow-black/20'
                    : 'bg-[#FFF7ED] hover:bg-[#FFEDD5]'
                }`}
              >
                <Bell className="w-5 h-5 text-[#F97316]" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#F87171] animate-pulse" />
              </button>
            </div>
          </div>

          {/* Location Chip */}
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#22A55A]">
              <MapPin className="w-3.5 h-3.5 text-[#22A55A]" />
              <span
                className="text-[#22A55A] font-medium"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Kolkata
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#9CA3AF]'
            }`} />
            <input
              type="text"
              placeholder="Search priests, decorators, caterers…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full h-12 pl-12 pr-4 rounded-[16px] border-[1.5px] focus:outline-none transition-all duration-300 ${
                isDarkMode
                  ? 'bg-[#334155] border-[#475569] text-[#F1F5F9] placeholder:text-[#94A3B8] focus:border-[#F97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.2)] focus:bg-[#1E293B]'
                  : 'bg-[#FFFDF8] border-[#E5E7EB] text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED]'
              }`}
              style={{ fontSize: '16px', lineHeight: '24px' }}
            />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Quick Service Categories */}
        <div className={`px-4 py-5 border-b transition-all duration-300 ${
          isDarkMode
            ? 'bg-[#1E293B]/50 border-[#334155]'
            : 'bg-white border-[#F3F4F6]'
        }`}>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <CategoryIcon
                key={category.id}
                icon={category.icon}
                label={category.label}
                onClick={() => onCategoryClick?.(category.id, category.label)}
              />
            ))}
          </div>
        </div>

        {/* Filter Chips */}
        <div className={`px-4 py-4 border-b transition-all duration-300 ${
          isDarkMode
            ? 'bg-[#1E293B]/30 border-[#334155]'
            : 'bg-white border-[#F3F4F6]'
        }`}>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <FilterChipButton
              label="Budget"
              icon={<DollarSign className="w-4 h-4" />}
              active={activeFilters.includes('budget')}
              onClick={() => toggleFilter('budget')}
            />
            <FilterChipButton
              label="Nearby"
              icon={<MapPin className="w-4 h-4" />}
              active={activeFilters.includes('nearby')}
              onClick={() => toggleFilter('nearby')}
            />
            <FilterChipButton
              label="Rating 4+"
              icon={<Star className="w-4 h-4" />}
              active={activeFilters.includes('rating')}
              onClick={() => toggleFilter('rating')}
            />
            <FilterChipButton
              label="Verified"
              icon={<CheckCircle className="w-4 h-4" />}
              active={activeFilters.includes('verified')}
              onClick={() => toggleFilter('verified')}
            />
            <FilterChipButton
              label="Available Today"
              icon={<Clock className="w-4 h-4" />}
              active={activeFilters.includes('available')}
              onClick={() => toggleFilter('available')}
            />
            <FilterChipButton
              label="Packages"
              active={activeFilters.includes('packages')}
              onClick={() => toggleFilter('packages')}
            />
          </div>
        </div>

        {/* Recommended Vendors */}
        <div className="px-4 py-5">
          <div className="flex items-center justify-between mb-4">
            <h2
              className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-[#F1F5F9]' : 'text-[#1F2937]'}`}
              style={{ fontSize: '20px', lineHeight: '28px' }}
            >
              Recommended Vendors
            </h2>
            <button
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'text-[#FB923C] hover:text-[#FDBA74]'
                  : 'text-[#F97316] hover:text-[#EA580C]'
              }`}
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              See All
            </button>
          </div>

          <div className="space-y-3">
            {featuredVendors.map((vendor) => (
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
                onViewDetails={() => onVendorClick?.(vendor)}
              />
            ))}
          </div>

          {/* Load More */}
          <button
            className={`w-full mt-4 h-12 rounded-[10px] border-2 font-semibold transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode
                ? 'border-[#475569] bg-[#334155] text-[#F1F5F9] hover:border-[#F97316] hover:bg-[#1E293B] hover:shadow-lg hover:shadow-orange-500/20'
                : 'border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#F97316] hover:text-[#F97316]'
            }`}
            style={{ fontSize: '16px', lineHeight: '20px' }}
          >
            Load More Vendors
          </button>
        </div>

        {/* Spacing for bottom navigation */}
        <div className="h-4" />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto">
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
