import { Check } from 'lucide-react';

interface PackageCardProps {
  title: string;
  price: number;
  inclusions: string[];
  popular?: boolean;
  onSelect?: () => void;
}

export function PackageCard({ title, price, inclusions, popular = false, onSelect }: PackageCardProps) {
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
    <div className={`
      relative bg-white rounded-[16px] p-5 border-[1.5px] transition-all duration-200
      ${popular
        ? 'border-[#F97316] shadow-[0_4px_16px_rgba(249,115,22,0.15)]'
        : 'border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
      }
    `}>
      {popular && (
        <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-[#FDE68A] border-2 border-[#FCD34D]">
          <span
            className="text-[#1F2937] font-bold"
            style={{ fontSize: '12px', lineHeight: '16px' }}
          >
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3
          className="font-semibold text-[#1F2937] mb-2"
          style={{ fontSize: '18px', lineHeight: '26px' }}
        >
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span
            className="font-bold text-[#F97316]"
            style={{ fontSize: '28px', lineHeight: '36px' }}
          >
            ₹{formatIndianNumber(price)}
          </span>
          <span
            className="text-[#6B7280]"
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            /event
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-5">
        {inclusions.map((inclusion, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-[#22A55A]" strokeWidth={3} />
            </div>
            <span
              className="text-[#1F2937]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              {inclusion}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`
          w-full h-11 rounded-[10px] font-semibold transition-all duration-200
          ${popular
            ? 'bg-[#F97316] text-white hover:bg-[#FB923C]'
            : 'bg-transparent border-2 border-[#F97316] text-[#F97316] hover:bg-[#FFF7ED]'
          }
        `}
        style={{ fontSize: '16px', lineHeight: '20px' }}
      >
        Select Package
      </button>
    </div>
  );
}
