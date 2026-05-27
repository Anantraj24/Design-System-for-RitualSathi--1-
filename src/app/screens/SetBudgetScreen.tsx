import { useState } from 'react';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { PrimaryButton } from '../components/PrimaryButton';
import { ChevronLeft, Info } from 'lucide-react';

interface SetBudgetScreenProps {
  onBack: () => void;
  onContinue: (budget: number) => void;
}

const budgetRanges = [
  { id: 'below-50k', label: 'Below ₹50,000', min: 0, max: 50000 },
  { id: '50k-1l', label: '₹50,000 – ₹1 Lakh', min: 50000, max: 100000 },
  { id: '1l-5l', label: '₹1 Lakh – ₹5 Lakh', min: 100000, max: 500000 },
  { id: '5l-plus', label: '₹5 Lakh+', min: 500000, max: 10000000 },
];

export function SetBudgetScreen({ onBack, onContinue }: SetBudgetScreenProps) {
  const [budgetValue, setBudgetValue] = useState(100000);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  const [manualInput, setManualInput] = useState('1,00,000');

  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setBudgetValue(value);
    setManualInput(formatIndianNumber(value));
    setSelectedRange(null);
  };

  const handleRangeClick = (range: typeof budgetRanges[0]) => {
    setSelectedRange(range.id);
    const midValue = Math.floor((range.min + range.max) / 2);
    setBudgetValue(midValue);
    setManualInput(formatIndianNumber(midValue));
  };

  const handleManualInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    if (/^\d*$/.test(value)) {
      const numValue = parseInt(value) || 0;
      if (numValue <= 10000000) {
        setBudgetValue(numValue);
        setManualInput(formatIndianNumber(numValue));
        setSelectedRange(null);
      }
    }
  };

  const handleContinue = () => {
    onContinue(budgetValue);
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
        <ProgressIndicator currentStep={2} totalSteps={3} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-6">
        <div className="max-w-md mx-auto">
          {/* Question */}
          <h2
            className="font-semibold text-[#1F2937] mb-2"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            What is your budget?
          </h2>
          <p
            className="text-[#6B7280] mb-8"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            We will show vendors that match your spending range.
          </p>

          {/* Budget Display */}
          <div className="bg-white rounded-[16px] p-6 mb-6 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <p
              className="text-[#6B7280] mb-2"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Your Budget
            </p>
            <div className="flex items-center gap-2">
              <span
                className="text-[#F97316] font-bold"
                style={{ fontSize: '32px', lineHeight: '40px' }}
              >
                ₹
              </span>
              <input
                type="text"
                value={manualInput}
                onChange={handleManualInputChange}
                className="flex-1 font-bold text-[#1F2937] bg-transparent border-none outline-none"
                style={{ fontSize: '32px', lineHeight: '40px' }}
              />
            </div>
          </div>

          {/* Budget Slider */}
          <div className="mb-6">
            <input
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={budgetValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, #F97316 0%, #F97316 ${((budgetValue - 10000) / (10000000 - 10000)) * 100}%, #E5E7EB ${((budgetValue - 10000) / (10000000 - 10000)) * 100}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between mt-2">
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                ₹10,000
              </span>
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                ₹1 Crore
              </span>
            </div>
          </div>

          {/* Budget Range Chips */}
          <div className="mb-6">
            <p
              className="text-[#6B7280] mb-3"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Quick Select
            </p>
            <div className="flex flex-wrap gap-3">
              {budgetRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleRangeClick(range)}
                  className={`
                    px-4 py-2.5 rounded-full border-2 transition-all duration-200
                    ${
                      selectedRange === range.id
                        ? 'border-[#F97316] bg-[#FFF7ED] text-[#F97316]'
                        : 'border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#F97316]/30'
                    }
                  `}
                  style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 600 }}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-[#EFF6FF] rounded-[12px] p-4 flex gap-3 border border-[#60A5FA]/20">
            <Info className="w-5 h-5 text-[#60A5FA] flex-shrink-0 mt-0.5" />
            <p
              className="text-[#1F2937]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              You can change your budget later.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-6 bg-white border-t border-[#F3F4F6] pt-4">
        <PrimaryButton onClick={handleContinue}>
          Continue
        </PrimaryButton>
      </div>

      <style>{`
        input[type="range"].slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #F97316;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        input[type="range"].slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #F97316;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
