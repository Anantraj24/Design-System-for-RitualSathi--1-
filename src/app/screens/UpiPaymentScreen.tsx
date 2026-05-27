import { useState } from 'react';
import { ChevronLeft, Shield, CheckCircle } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import qrCodeImage from '../../imports/image.png';

interface UpiPaymentScreenProps {
  onBack: () => void;
  onPaymentVerified: () => void;
}

export function UpiPaymentScreen({ onBack, onPaymentVerified }: UpiPaymentScreenProps) {
  const [isVerifying, setIsVerifying] = useState(false);

  const handlePaymentDone = () => {
    setIsVerifying(true);
    // Simulate payment verification
    setTimeout(() => {
      setIsVerifying(false);
      onPaymentVerified();
    }, 3000);
  };

  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  if (isVerifying) {
    return (
      <div className="h-screen bg-[#FFFDF8] flex flex-col items-center justify-center px-6">
        {/* Verification Spinner */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full border-4 border-[#F3F4F6] border-t-[#F97316] animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#F97316]" />
          </div>
        </div>

        {/* Verification Text */}
        <h2
          className="font-semibold text-[#1F2937] mb-2 text-center"
          style={{ fontSize: '24px', lineHeight: '32px' }}
        >
          Verifying payment…
        </h2>
        <p
          className="text-[#6B7280] text-center max-w-xs"
          style={{ fontSize: '16px', lineHeight: '24px' }}
        >
          Please wait for a moment.
        </p>

        <style>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="h-14 bg-white border-b border-[#F3F4F6] flex items-center px-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2"
        >
          <ChevronLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h1
          className="flex-1 text-center font-semibold text-[#1F2937] pr-10"
          style={{ fontSize: '18px', lineHeight: '26px' }}
        >
          Scan & Pay
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-6">
        <div className="max-w-md mx-auto">
          {/* Booking Details Card */}
          <div className="bg-white rounded-[16px] p-5 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#22A55A]" />
              <span
                className="text-[#22A55A] font-semibold"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Secure Payment
              </span>
            </div>

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

              <div className="h-px bg-[#F3F4F6]" />

              <div className="flex items-start justify-between gap-2">
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
                  Shri Santosh Catering Service
                </span>
              </div>

              <div className="h-px bg-[#F3F4F6]" />

              <div className="flex items-center justify-between">
                <span
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Payment Type
                </span>
                <span
                  className="text-[#1F2937] font-medium"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Advance Booking Amount
                </span>
              </div>

              <div className="h-px bg-[#F3F4F6]" />

              <div className="flex items-center justify-between pt-2">
                <span
                  className="text-[#1F2937] font-semibold"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Amount to Pay
                </span>
                <span
                  className="text-[#F97316] font-bold"
                  style={{ fontSize: '24px', lineHeight: '32px' }}
                >
                  ₹{formatIndianNumber(5000)}
                </span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white rounded-[20px] p-6 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)] mb-6">
            {/* Instruction Text */}
            <p
              className="text-center text-[#1F2937] font-medium mb-5"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              Scan this QR using any UPI app
            </p>

            {/* QR Code */}
            <div className="bg-white rounded-[16px] p-6 border-2 border-[#E5E7EB] mx-auto w-fit mb-5">
              <img
                src={qrCodeImage}
                alt="UPI QR Code"
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* UPI ID */}
            <div className="bg-[#FFFDF8] rounded-[12px] p-4 border border-[#E5E7EB] mb-5">
              <p
                className="text-center text-[#6B7280] mb-1"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                UPI ID
              </p>
              <p
                className="text-center text-[#1F2937] font-semibold"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                ritualsathi@upi
              </p>
            </div>

            {/* UPI Apps */}
            <div>
              <p
                className="text-center text-[#6B7280] mb-3"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Supported UPI Apps
              </p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E676] flex items-center justify-center mb-1">
                    <span className="text-white font-bold text-xs">GPay</span>
                  </div>
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '11px', lineHeight: '14px' }}
                  >
                    Google Pay
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5F259F] to-[#7F3AB8] flex items-center justify-center mb-1">
                    <span className="text-white font-bold text-xs">PP</span>
                  </div>
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '11px', lineHeight: '14px' }}
                  >
                    PhonePe
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B9F5] to-[#0AC5F5] flex items-center justify-center mb-1">
                    <span className="text-white font-bold text-xs">Paytm</span>
                  </div>
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '11px', lineHeight: '14px' }}
                  >
                    Paytm
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8533] flex items-center justify-center mb-1">
                    <span className="text-white font-bold text-xs">BHIM</span>
                  </div>
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '11px', lineHeight: '14px' }}
                  >
                    BHIM UPI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Card */}
          <div className="bg-[#EFF6FF] rounded-[16px] p-5 border border-[#60A5FA]/20 mb-6">
            <h3
              className="font-semibold text-[#1F2937] mb-4"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              How to Pay
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#60A5FA] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '13px', lineHeight: '16px' }}
                  >
                    1
                  </span>
                </div>
                <p
                  className="text-[#1F2937] flex-1"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Open any UPI app
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#60A5FA] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '13px', lineHeight: '16px' }}
                  >
                    2
                  </span>
                </div>
                <p
                  className="text-[#1F2937] flex-1"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Scan the QR code
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#60A5FA] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '13px', lineHeight: '16px' }}
                  >
                    3
                  </span>
                </div>
                <p
                  className="text-[#1F2937] flex-1"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Pay the exact amount (₹5,000)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#60A5FA] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '13px', lineHeight: '16px' }}
                  >
                    4
                  </span>
                </div>
                <p
                  className="text-[#1F2937] flex-1"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Tap "I Have Paid" after payment
                </p>
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="bg-[#FFFBEB] rounded-[12px] p-4 border border-[#FBBF24]/30 mb-6">
            <div className="flex gap-2">
              <span className="text-xl flex-shrink-0">ℹ️</span>
              <p
                className="text-[#1F2937]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                <span className="font-semibold">Demo Payment:</span> This is a demo payment screen for prototype purposes. No real transaction will occur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-4 pb-6 bg-white border-t border-[#F3F4F6] pt-4 space-y-3">
        <PrimaryButton onClick={handlePaymentDone}>
          I Have Paid
        </PrimaryButton>
        <SecondaryButton onClick={onBack}>
          Cancel Payment
        </SecondaryButton>
      </div>
    </div>
  );
}
