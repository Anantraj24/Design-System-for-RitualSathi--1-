import { PrimaryButton } from '../components/PrimaryButton';
import { CheckCircle, Sparkles } from 'lucide-react';

interface OnboardingCompleteScreenProps {
  ceremony: string;
  budget: number;
  city: string;
  onGetStarted: () => void;
}

export function OnboardingCompleteScreen({
  ceremony,
  budget,
  city,
  onGetStarted
}: OnboardingCompleteScreenProps) {
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
    <div className="h-screen bg-[#FFFDF8] flex flex-col items-center justify-center px-6">
      {/* Success Animation */}
      <div className="mb-6 relative">
        <div className="w-20 h-20 rounded-full bg-[#F0FDF4] flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-[#22A55A]" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-8 h-8 text-[#FBBF24]" />
        </div>
      </div>

      {/* Title */}
      <h2
        className="font-semibold text-[#1F2937] mb-3 text-center"
        style={{ fontSize: '28px', lineHeight: '36px' }}
      >
        All Set!
      </h2>
      <p
        className="text-[#6B7280] mb-8 text-center max-w-sm"
        style={{ fontSize: '16px', lineHeight: '24px' }}
      >
        We've personalized RitualSathi just for you. Let's find the perfect vendors!
      </p>

      {/* Summary Card */}
      <div className="w-full max-w-sm bg-white rounded-[20px] p-6 mb-8 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <p
          className="text-[#6B7280] mb-4"
          style={{ fontSize: '14px', lineHeight: '20px' }}
        >
          Your Preferences
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💍</span>
            </div>
            <div className="flex-1">
              <p
                className="text-[#6B7280]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Ceremony
              </p>
              <p
                className="text-[#1F2937] font-semibold capitalize"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                {ceremony.replace('-', ' ')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💰</span>
            </div>
            <div className="flex-1">
              <p
                className="text-[#6B7280]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Budget
              </p>
              <p
                className="text-[#1F2937] font-semibold"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                ₹{formatIndianNumber(budget)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📍</span>
            </div>
            <div className="flex-1">
              <p
                className="text-[#6B7280]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Location
              </p>
              <p
                className="text-[#1F2937] font-semibold"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                {city}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-sm">
        <PrimaryButton onClick={onGetStarted}>
          Start Exploring Vendors
        </PrimaryButton>
      </div>
    </div>
  );
}
