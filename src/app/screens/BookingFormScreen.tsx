import { useState } from 'react';
import { ChevronLeft, Calendar, Clock, Users, MapPin, DollarSign, FileText } from 'lucide-react';
import { InputField } from '../components/InputField';
import { SelectField } from '../components/SelectField';
import { TextArea } from '../components/TextArea';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

interface BookingFormScreenProps {
  onBack: () => void;
  onContinue: (bookingData: BookingData) => void;
}

export interface BookingData {
  ceremonyType: string;
  vendorName: string;
  date: string;
  timeSlot: string;
  guests: string;
  address: string;
  budget: number;
  specialRequirements: string;
  selectedPackage: string;
  packagePrice: number;
  advancePayment: number;
}

export function BookingFormScreen({ onBack, onContinue }: BookingFormScreenProps) {
  const [ceremonyType, setCeremonyType] = useState('wedding');
  const [vendorName] = useState('Shri Santosh Catering Service');
  const [date, setDate] = useState('2026-05-25');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [guests, setGuests] = useState('150');
  const [address, setAddress] = useState('');
  const [budget, setBudget] = useState(45000);
  const [specialRequirements, setSpecialRequirements] = useState('');

  const ceremonyOptions = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'annaprashan', label: 'Annaprashan' },
    { value: 'puja', label: 'Puja' },
    { value: 'shraddh', label: 'Shraddh' },
  ];

  const timeSlotOptions = [
    { value: '09:00 AM', label: '09:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '01:00 PM', label: '01:00 PM' },
    { value: '05:00 PM', label: '05:00 PM' },
    { value: '06:00 PM', label: '06:00 PM' },
  ];

  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  const packagePrice = 45000;
  const advancePayment = 5000;
  const balancePayment = packagePrice - advancePayment;

  const handleContinue = () => {
    const bookingData: BookingData = {
      ceremonyType,
      vendorName,
      date,
      timeSlot,
      guests,
      address,
      budget,
      specialRequirements,
      selectedPackage: 'Standard Package',
      packagePrice,
      advancePayment,
    };
    onContinue(bookingData);
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
          Complete Your Booking
        </h1>
      </div>

      {/* Scrollable Form */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-6">
        <div className="max-w-md mx-auto space-y-5">
          {/* Ceremony Type */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0 mt-6">
              <Calendar className="w-5 h-5 text-[#F97316]" />
            </div>
            <div className="flex-1">
              <SelectField
                label="Ceremony Type"
                value={ceremonyType}
                onChange={setCeremonyType}
                options={ceremonyOptions}
              />
            </div>
          </div>

          {/* Vendor Name - Prefilled */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 mt-6">
              <span className="text-lg">🍽️</span>
            </div>
            <div className="flex-1">
              <InputField
                label="Vendor"
                type="text"
                value={vendorName}
                onChange={() => {}}
                disabled
              />
            </div>
          </div>

          {/* Date Picker */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-6">
              <Calendar className="w-5 h-5 text-[#60A5FA]" />
            </div>
            <div className="flex-1">
              <InputField
                label="Ceremony Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {/* Time Slot */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFFBEB] flex items-center justify-center flex-shrink-0 mt-6">
              <Clock className="w-5 h-5 text-[#FBBF24]" />
            </div>
            <div className="flex-1">
              <SelectField
                label="Time Slot"
                value={timeSlot}
                onChange={setTimeSlot}
                options={timeSlotOptions}
              />
            </div>
          </div>

          {/* Number of Guests */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center flex-shrink-0 mt-6">
              <Users className="w-5 h-5 text-[#F97316]" />
            </div>
            <div className="flex-1">
              <InputField
                label="Number of Guests"
                type="number"
                placeholder="e.g., 150"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>

          {/* Venue Address */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 mt-6">
              <MapPin className="w-5 h-5 text-[#22A55A]" />
            </div>
            <div className="flex-1">
              <InputField
                label="Venue / Address"
                type="text"
                placeholder="Enter venue address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Budget Slider */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-6">
              <DollarSign className="w-5 h-5 text-[#60A5FA]" />
            </div>
            <div className="flex-1">
              <label
                className="block mb-1.5 text-[#6B7280]"
                style={{ fontSize: '13px', lineHeight: '18px' }}
              >
                Budget Range
              </label>
              <div className="bg-white rounded-[10px] p-4 border-[1.5px] border-[#E5E7EB]">
                <p
                  className="font-bold text-[#F97316] mb-3"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  ₹{formatIndianNumber(budget)}
                </p>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #F97316 0%, #F97316 ${((budget - 10000) / (100000 - 10000)) * 100}%, #E5E7EB ${((budget - 10000) / (100000 - 10000)) * 100}%, #E5E7EB 100%)`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFFBEB] flex items-center justify-center flex-shrink-0 mt-6">
              <FileText className="w-5 h-5 text-[#FBBF24]" />
            </div>
            <div className="flex-1">
              <TextArea
                label="Special Requirements (Optional)"
                value={specialRequirements}
                onChange={setSpecialRequirements}
                placeholder="Any specific requirements or dietary preferences..."
                rows={3}
              />
            </div>
          </div>

          {/* Price Estimate Card */}
          <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-[16px] p-5 shadow-[0_4px_16px_rgba(249,115,22,0.2)] mt-6">
            <h3
              className="text-white font-semibold mb-4"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              Price Estimate
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-white/90"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Selected Package
                </span>
                <span
                  className="text-white font-semibold"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Standard Package
                </span>
              </div>

              <div className="h-px bg-white/20" />

              <div className="flex items-center justify-between">
                <span
                  className="text-white/90"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Estimated Total
                </span>
                <span
                  className="text-white font-bold"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  ₹{formatIndianNumber(packagePrice)}
                </span>
              </div>

              <div className="bg-white/10 rounded-[10px] p-3 mt-3">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-white/90"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Advance to Pay
                  </span>
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    ₹{formatIndianNumber(advancePayment)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-white/90"
                    style={{ fontSize: '13px', lineHeight: '18px' }}
                  >
                    Balance Later
                  </span>
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    ₹{formatIndianNumber(balancePayment)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-6 bg-white border-t border-[#F3F4F6] pt-4">
        <PrimaryButton onClick={handleContinue}>
          Continue to Summary
        </PrimaryButton>
      </div>

      <style>{`
        input[type="range"].slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 3px solid #F97316;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        input[type="range"].slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 3px solid #F97316;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
