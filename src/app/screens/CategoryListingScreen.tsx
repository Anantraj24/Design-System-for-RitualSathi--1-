import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NICHES } from '../../data/vendors';

interface CategoryListingScreenProps {
  categoryId: string;
  categoryName: string;
  onBack: () => void;
  onSelectNiche: (niche: string) => void;
}

export function CategoryListingScreen({
  categoryId,
  categoryName,
  onBack,
  onSelectNiche,
}: CategoryListingScreenProps) {
  const niches = NICHES[categoryId as keyof typeof NICHES] || [];

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="px-4 pt-3 pb-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-[#1F2937]" />
          </button>
          <div className="flex-1">
            <h1
              className="font-bold text-[#1F2937]"
              style={{ fontSize: '20px', lineHeight: '28px' }}
            >
              {categoryName}
            </h1>
            <p
              className="text-[#6B7280]"
              style={{ fontSize: '13px', lineHeight: '18px' }}
            >
              Choose a specialization
            </p>
          </div>
        </div>
      </div>

      {/* Niches List */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-6">
        <div className="max-w-md mx-auto space-y-3">
          {niches.map((niche, index) => (
            <button
              key={niche}
              onClick={() => onSelectNiche(niche)}
              className="w-full bg-white rounded-[16px] p-5 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-[#F97316]/30 transition-all duration-200 flex items-center gap-4 group"
            >
              {/* Number Badge */}
              <div className="w-10 h-10 rounded-full bg-[#FFF7ED] group-hover:bg-[#F97316] flex items-center justify-center transition-all duration-200">
                <span
                  className="text-[#F97316] group-hover:text-white font-bold transition-all duration-200"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Niche Name */}
              <div className="flex-1 text-left">
                <h3
                  className="text-[#1F2937] font-semibold mb-0.5"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  {niche}
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  10 vendors available
                </p>
              </div>

              {/* Arrow Icon */}
              <ChevronRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#F97316] transition-all duration-200" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
