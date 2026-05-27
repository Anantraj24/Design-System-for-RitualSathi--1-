import { useState } from 'react';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { PrimaryButton } from '../components/PrimaryButton';
import { ChevronLeft, MapPin, Search, Navigation } from 'lucide-react';

interface ChooseCityScreenProps {
  onBack: () => void;
  onDone: (city: string) => void;
}

const popularCities = [
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal' },
  { id: 'howrah', name: 'Howrah', state: 'West Bengal' },
  { id: 'siliguri', name: 'Siliguri', state: 'West Bengal' },
  { id: 'delhi', name: 'Delhi', state: 'Delhi' },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra' },
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana' },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan' },
];

export function ChooseCityScreen({ onBack, onDone }: ChooseCityScreenProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = popularCities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDone = () => {
    if (selectedCity) {
      const city = popularCities.find((c) => c.id === selectedCity);
      onDone(city?.name || '');
    }
  };

  const handleUseCurrentLocation = () => {
    // Simulate getting current location
    setSelectedCity('kolkata');
  };

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6]">
        <div className="h-14 flex items-center px-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center -ml-2"
          >
            <ChevronLeft className="w-6 h-6 text-[#1F2937]" />
          </button>
        </div>
        <ProgressIndicator currentStep={3} totalSteps={3} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-6">
        <div className="max-w-md mx-auto">
          {/* Question */}
          <h2
            className="font-semibold text-[#1F2937] mb-2"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            Where is your ceremony planned?
          </h2>
          <p
            className="text-[#6B7280] mb-6"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            We'll show you verified vendors in your area.
          </p>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search city or area"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-[16px] bg-white border-[1.5px] border-[#E5E7EB] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED] transition-all duration-200"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            />
          </div>

          {/* Use Current Location Button */}
          <button
            onClick={handleUseCurrentLocation}
            className="w-full h-12 mb-6 rounded-[10px] bg-[#F0FDF4] border-[1.5px] border-[#22A55A] text-[#22A55A] font-semibold hover:bg-[#22A55A] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            style={{ fontSize: '16px', lineHeight: '20px' }}
          >
            <Navigation className="w-5 h-5" />
            Use Current Location
          </button>

          {/* Popular Cities */}
          <div>
            <p
              className="text-[#6B7280] mb-4"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              {searchQuery ? 'Search Results' : 'Popular Cities'}
            </p>
            <div className="space-y-2">
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city.id)}
                  className={`
                    w-full p-4 rounded-[12px] border-2 transition-all duration-200 flex items-center gap-3
                    ${
                      selectedCity === city.id
                        ? 'border-[#F97316] bg-[#FFF7ED]'
                        : 'border-[#E5E7EB] bg-white hover:border-[#F97316]/30'
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      selectedCity === city.id
                        ? 'bg-[#F97316]'
                        : 'bg-[#F3F4F6]'
                    }
                  `}>
                    <MapPin className={`w-5 h-5 ${
                      selectedCity === city.id
                        ? 'text-white'
                        : 'text-[#6B7280]'
                    }`} />
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`font-semibold ${
                        selectedCity === city.id
                          ? 'text-[#F97316]'
                          : 'text-[#1F2937]'
                      }`}
                      style={{ fontSize: '16px', lineHeight: '24px' }}
                    >
                      {city.name}
                    </p>
                    <p
                      className="text-[#6B7280]"
                      style={{ fontSize: '13px', lineHeight: '18px' }}
                    >
                      {city.state}
                    </p>
                  </div>
                  {selectedCity === city.id && (
                    <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {filteredCities.length === 0 && (
              <div className="text-center py-8">
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  No cities found. Try a different search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-6 bg-white border-t border-[#F3F4F6] pt-4">
        <PrimaryButton onClick={handleDone} disabled={!selectedCity}>
          Done
        </PrimaryButton>
      </div>
    </div>
  );
}
