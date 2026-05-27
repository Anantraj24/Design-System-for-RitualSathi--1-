import { CheckCircle, Calendar, Clock, MapPin, MessageCircle } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

interface BookingConfirmedScreenProps {
  onViewStatus: () => void;
  onGoHome: () => void;
}

export function BookingConfirmedScreen({ onViewStatus, onGoHome }: BookingConfirmedScreenProps) {
  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Success Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 overflow-y-auto">
        {/* Success Icon with Celebration */}
        <div className="relative mb-8">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] flex items-center justify-center animate-bounce-in shadow-[0_12px_32px_rgba(34,197,94,0.25)]">
            <CheckCircle className="w-20 h-20 text-[#22A55A]" strokeWidth={2.5} />
          </div>
          {/* Confetti circles */}
          <div className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-[#FDE68A] animate-float-1" />
          <div className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-[#60A5FA] animate-float-2" />
          <div className="absolute top-0 -left-6 w-3 h-3 rounded-full bg-[#F97316] animate-float-3" />
          <div className="absolute -top-2 right-2 w-3 h-3 rounded-full bg-[#FB923C] animate-float-4" />
          <div className="absolute bottom-2 -right-6 w-3 h-3 rounded-full bg-[#22C55E] animate-float-5" />
        </div>

        {/* Success Header */}
        <h1
          className="font-bold text-[#1F2937] mb-3 text-center"
          style={{ fontSize: '32px', lineHeight: '40px' }}
        >
          Booking Confirmed!
        </h1>
        <p
          className="text-[#6B7280] text-center mb-10 max-w-sm"
          style={{ fontSize: '16px', lineHeight: '24px' }}
        >
          Your vendor has been notified.
        </p>

        {/* Booking Details Card */}
        <div className="w-full max-w-sm bg-white rounded-[24px] p-6 border-2 border-[#22A55A] shadow-[0_12px_32px_rgba(34,197,94,0.15)] mb-6">
          {/* Vendor Header */}
          <div className="flex items-center gap-3 pb-5 mb-5 border-b border-[#F3F4F6]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] flex items-center justify-center shadow-md">
              <span className="text-3xl">🍽️</span>
            </div>
            <div className="flex-1">
              <p
                className="text-[#6B7280] mb-1"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Vendor
              </p>
              <h3
                className="font-bold text-[#1F2937]"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                Shri Santosh Catering Service
              </h3>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-4 mb-5">
            {/* Ceremony */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💍</span>
              </div>
              <div className="flex-1">
                <p
                  className="text-[#6B7280] mb-0.5"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Ceremony
                </p>
                <p
                  className="text-[#1F2937] font-semibold"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Wedding
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-[#60A5FA]" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[#6B7280] mb-0.5"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Date
                </p>
                <p
                  className="text-[#1F2937] font-semibold"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  25 May 2026
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFBEB] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#FBBF24]" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[#6B7280] mb-0.5"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Time
                </p>
                <p
                  className="text-[#1F2937] font-semibold"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  11:00 AM
                </p>
              </div>
            </div>

            {/* Booking ID */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-[#22A55A]" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[#6B7280] mb-0.5"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Booking ID
                </p>
                <p
                  className="text-[#1F2937] font-semibold font-mono"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  RS-2026-04872
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Notification Highlight */}
          <div className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-[16px] p-4 border border-[#22A55A]/30">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#22A55A] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[#1F2937] font-semibold mb-1"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  WhatsApp Confirmation
                </p>
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Confirmation details will be shared on WhatsApp within 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="w-full max-w-sm bg-[#EFF6FF] rounded-[12px] p-4 border border-[#60A5FA]/20 mb-8">
          <div className="flex items-start gap-2">
            <span className="text-xl flex-shrink-0">✨</span>
            <p
              className="text-[#1F2937]"
              style={{ fontSize: '13px', lineHeight: '18px' }}
            >
              You'll receive booking updates via SMS, email, and WhatsApp. The vendor will contact you directly within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-6 pb-6 space-y-3">
        <PrimaryButton onClick={onViewStatus}>
          View Booking Status
        </PrimaryButton>
        <SecondaryButton onClick={onGoHome}>
          Back to Home
        </SecondaryButton>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-float-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0s;
        }

        .animate-float-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .animate-float-3 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .animate-float-4 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.9s;
        }

        .animate-float-5 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
}
