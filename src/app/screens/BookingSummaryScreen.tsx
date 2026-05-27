import { ChevronLeft, Calendar, Clock, MapPin, Users, Package, DollarSign, Info } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import type { BookingData } from './BookingFormScreen';

interface BookingSummaryScreenProps {
  onBack: () => void;
  onEdit: () => void;
  onProceedToPayment: () => void;
  bookingData: BookingData;
}

export function BookingSummaryScreen({
  onBack,
  onEdit,
  onProceedToPayment,
  bookingData
}: BookingSummaryScreenProps) {
  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCeremonyName = (type: string): string => {
    const names: { [key: string]: string } = {
      wedding: 'Wedding',
      engagement: 'Engagement',
      annaprashan: 'Annaprashan',
      puja: 'Puja',
      shraddh: 'Shraddh',
    };
    return names[type] || type;
  };

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
          Booking Summary
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-6">
        <div className="max-w-md mx-auto">
          {/* Summary Card */}
          <div className="bg-white rounded-[20px] p-6 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)] mb-5">
            {/* Vendor Header */}
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-[#F3F4F6]">
              <div className="w-14 h-14 rounded-full bg-[#FFF7ED] flex items-center justify-center">
                <span className="text-3xl">🍽️</span>
              </div>
              <div className="flex-1">
                <h2
                  className="font-bold text-[#1F2937] mb-1"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  {bookingData.vendorName}
                </h2>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0FDF4] border border-[#22A55A] w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22A55A]" />
                  <span
                    className="text-[#22A55A] font-medium"
                    style={{ fontSize: '12px', lineHeight: '16px' }}
                  >
                    Verified Vendor
                  </span>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-4">
              {/* Ceremony */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#6B7280] mb-1"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Ceremony
                  </p>
                  <p
                    className="font-semibold text-[#1F2937]"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {getCeremonyName(bookingData.ceremonyType)}
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#6B7280] mb-1"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Date & Time
                  </p>
                  <p
                    className="font-semibold text-[#1F2937]"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {formatDate(bookingData.date)}
                  </p>
                  <p
                    className="text-[#6B7280]"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    {bookingData.timeSlot}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#22A55A]" />
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#6B7280] mb-1"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Location
                  </p>
                  <p
                    className="font-semibold text-[#1F2937]"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {bookingData.address || 'Kolkata'}
                  </p>
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFFBEB] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#FBBF24]" />
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#6B7280] mb-1"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Number of Guests
                  </p>
                  <p
                    className="font-semibold text-[#1F2937]"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {bookingData.guests} guests
                  </p>
                </div>
              </div>

              {/* Package */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#6B7280] mb-1"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Package
                  </p>
                  <p
                    className="font-semibold text-[#1F2937]"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {bookingData.selectedPackage}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="mt-5 pt-5 border-t border-[#F3F4F6]">
              <div className="bg-[#FFFDF8] rounded-[12px] p-4 border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    Total Amount
                  </span>
                  <span
                    className="font-bold text-[#1F2937]"
                    style={{ fontSize: '20px', lineHeight: '28px' }}
                  >
                    ₹{formatIndianNumber(bookingData.packagePrice)}
                  </span>
                </div>

                <div className="h-px bg-[#E5E7EB] my-3" />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#6B7280]"
                      style={{ fontSize: '14px', lineHeight: '20px' }}
                    >
                      Advance Payable Now
                    </span>
                    <span
                      className="font-bold text-[#F97316]"
                      style={{ fontSize: '18px', lineHeight: '26px' }}
                    >
                      ₹{formatIndianNumber(bookingData.advancePayment)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#9CA3AF]"
                      style={{ fontSize: '13px', lineHeight: '18px' }}
                    >
                      Balance Payment
                    </span>
                    <span
                      className="text-[#6B7280]"
                      style={{ fontSize: '14px', lineHeight: '20px' }}
                    >
                      ₹{formatIndianNumber(bookingData.packagePrice - bookingData.advancePayment)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-[#EFF6FF] rounded-[12px] p-4 flex gap-3 border border-[#60A5FA]/20 mb-5">
            <Info className="w-5 h-5 text-[#60A5FA] flex-shrink-0 mt-0.5" />
            <p
              className="text-[#1F2937]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Vendor will confirm availability after your booking request. You'll receive a confirmation within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-4 pb-6 bg-white border-t border-[#F3F4F6] pt-4 space-y-3">
        <PrimaryButton onClick={onProceedToPayment}>
          Proceed to Payment
        </PrimaryButton>
        <SecondaryButton onClick={onEdit}>
          Edit Booking
        </SecondaryButton>
      </div>
    </div>
  );
}
