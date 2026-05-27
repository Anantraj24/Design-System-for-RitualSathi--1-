import { CheckCircle, Sparkles } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';

interface PaymentSuccessSimpleScreenProps {
  onContinue: () => void;
}

export function PaymentSuccessSimpleScreen({ onContinue }: PaymentSuccessSimpleScreenProps) {
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
      {/* Success Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-[#F0FDF4] flex items-center justify-center animate-scale-in shadow-[0_8px_24px_rgba(34,197,94,0.2)]">
          <CheckCircle className="w-16 h-16 text-[#22A55A]" strokeWidth={2.5} />
        </div>
        {/* Sparkles */}
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-8 h-8 text-[#FDE68A] animate-pulse" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Sparkles className="w-6 h-6 text-[#60A5FA] animate-pulse delay-150" />
        </div>
      </div>

      {/* Success Header */}
      <h1
        className="font-bold text-[#1F2937] mb-3 text-center"
        style={{ fontSize: '28px', lineHeight: '36px' }}
      >
        Payment Successful
      </h1>
      <p
        className="text-[#6B7280] text-center mb-10 max-w-sm"
        style={{ fontSize: '16px', lineHeight: '24px' }}
      >
        Your advance payment has been recorded.
      </p>

      {/* Payment Details Card */}
      <div className="w-full max-w-sm bg-white rounded-[20px] p-6 border-2 border-[#22A55A] shadow-[0_8px_24px_rgba(34,197,94,0.12)] mb-8">
        <div className="space-y-4">
          {/* Booking ID */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F3F4F6]">
            <span
              className="text-[#6B7280]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Booking ID
            </span>
            <span
              className="text-[#1F2937] font-bold"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              RS-2026-04872
            </span>
          </div>

          {/* Amount Paid */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F3F4F6]">
            <span
              className="text-[#6B7280]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Amount Paid
            </span>
            <span
              className="text-[#22A55A] font-bold"
              style={{ fontSize: '24px', lineHeight: '32px' }}
            >
              ₹{formatIndianNumber(5000)}
            </span>
          </div>

          {/* Payment Mode */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F3F4F6]">
            <span
              className="text-[#6B7280]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Payment Mode
            </span>
            <span
              className="text-[#1F2937] font-semibold"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              UPI
            </span>
          </div>

          {/* Transaction ID */}
          <div className="flex items-start justify-between">
            <span
              className="text-[#6B7280]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Transaction ID
            </span>
            <span
              className="text-[#1F2937] font-semibold text-right"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              DEMO-UPI-90872
            </span>
          </div>
        </div>

        {/* Success Badge */}
        <div className="mt-5 pt-5 border-t border-[#F3F4F6] flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22A55A] animate-pulse" />
          <span
            className="text-[#22A55A] font-semibold"
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            Payment Verified
          </span>
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full max-w-sm">
        <PrimaryButton onClick={onContinue}>
          Continue
        </PrimaryButton>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
}
