import { CheckCircle, Download, Share2, Home } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

interface PaymentSuccessScreenProps {
  onViewBooking?: () => void;
  onGoHome?: () => void;
}

export function PaymentSuccessScreen({ onViewBooking, onGoHome }: PaymentSuccessScreenProps) {
  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    return { date, time };
  };

  const { date, time } = getCurrentDateTime();

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Success Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Success Icon with Animation */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-[#F0FDF4] flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-16 h-16 text-[#22A55A]" strokeWidth={2.5} />
          </div>
          {/* Confetti effect circles */}
          <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#FDE68A] animate-bounce-delay-1" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#60A5FA] animate-bounce-delay-2" />
          <div className="absolute top-0 -left-4 w-2 h-2 rounded-full bg-[#F97316] animate-bounce-delay-3" />
        </div>

        {/* Success Title */}
        <h1
          className="font-bold text-[#1F2937] mb-2 text-center"
          style={{ fontSize: '28px', lineHeight: '36px' }}
        >
          Payment Successful!
        </h1>
        <p
          className="text-[#6B7280] text-center mb-8 max-w-sm"
          style={{ fontSize: '16px', lineHeight: '24px' }}
        >
          Your advance payment has been received. Booking confirmation sent to your email.
        </p>

        {/* Payment Details Card */}
        <div className="w-full max-w-sm bg-white rounded-[20px] p-6 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)] mb-6">
          {/* Transaction ID */}
          <div className="text-center mb-5 pb-5 border-b border-[#F3F4F6]">
            <p
              className="text-[#6B7280] mb-2"
              style={{ fontSize: '13px', lineHeight: '18px' }}
            >
              Transaction ID
            </p>
            <p
              className="text-[#1F2937] font-semibold"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              TXN2026048720512
            </p>
          </div>

          {/* Payment Amount */}
          <div className="text-center mb-5 pb-5 border-b border-[#F3F4F6]">
            <p
              className="text-[#6B7280] mb-2"
              style={{ fontSize: '13px', lineHeight: '18px' }}
            >
              Amount Paid
            </p>
            <p
              className="text-[#22A55A] font-bold"
              style={{ fontSize: '32px', lineHeight: '40px' }}
            >
              ₹{formatIndianNumber(5000)}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Booking ID
              </span>
              <span
                className="text-[#1F2937] font-semibold"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                RS-2026-04872
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Vendor
              </span>
              <span
                className="text-[#1F2937] font-semibold text-right"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Shri Santosh Catering
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Payment Method
              </span>
              <span
                className="text-[#1F2937] font-semibold"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                UPI
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className="text-[#6B7280]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Date & Time
              </span>
              <span
                className="text-[#1F2937] font-semibold text-right"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {date}, {time}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6 pt-5 border-t border-[#F3F4F6]">
            <button className="flex-1 h-11 rounded-[10px] bg-[#FFFDF8] border border-[#E5E7EB] text-[#1F2937] font-medium hover:bg-[#F3F4F6] transition-all duration-200 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              <span style={{ fontSize: '14px', lineHeight: '20px' }}>
                Receipt
              </span>
            </button>
            <button className="flex-1 h-11 rounded-[10px] bg-[#FFFDF8] border border-[#E5E7EB] text-[#1F2937] font-medium hover:bg-[#F3F4F6] transition-all duration-200 flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              <span style={{ fontSize: '14px', lineHeight: '20px' }}>
                Share
              </span>
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="w-full max-w-sm bg-[#F0FDF4] rounded-[12px] p-4 border border-[#22A55A]/20">
          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-[#22A55A] flex-shrink-0 mt-0.5" />
            <div>
              <p
                className="text-[#1F2937] font-semibold mb-1"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                What's Next?
              </p>
              <p
                className="text-[#6B7280]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Vendor will confirm your booking within 24 hours. You'll receive updates via SMS and email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-6 pb-6 space-y-3">
        <PrimaryButton onClick={onViewBooking}>
          View My Bookings
        </PrimaryButton>
        <button
          onClick={onGoHome}
          className="w-full h-12 rounded-[10px] bg-transparent text-[#F97316] font-semibold hover:bg-[#FFF7ED] transition-all duration-200 flex items-center justify-center gap-2"
          style={{ fontSize: '16px', lineHeight: '20px' }}
        >
          <Home className="w-5 h-5" />
          Go to Home
        </button>
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

        @keyframes bounce-delay {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-bounce-delay-1 {
          animation: bounce-delay 2s infinite;
          animation-delay: 0.1s;
        }

        .animate-bounce-delay-2 {
          animation: bounce-delay 2s infinite;
          animation-delay: 0.3s;
        }

        .animate-bounce-delay-3 {
          animation: bounce-delay 2s infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
