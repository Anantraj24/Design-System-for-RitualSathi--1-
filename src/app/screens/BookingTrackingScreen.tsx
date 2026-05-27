import { ChevronLeft, CheckCircle, Circle, Calendar, MessageCircle, AlertCircle } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

interface BookingTrackingScreenProps {
  onBack: () => void;
  bookingId?: string;
}

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  date?: string;
}

export function BookingTrackingScreen({ onBack, bookingId = 'RS-2026-04872' }: BookingTrackingScreenProps) {
  const timelineSteps: TimelineStep[] = [
    {
      id: 1,
      title: 'Request Submitted',
      description: 'Booking request created successfully',
      completed: true,
      date: '18 May 2026, 2:30 PM',
    },
    {
      id: 2,
      title: 'Payment Recorded',
      description: 'Advance payment of ₹5,000 received',
      completed: true,
      date: '18 May 2026, 2:35 PM',
    },
    {
      id: 3,
      title: 'Vendor Notified',
      description: 'Vendor has been informed about your request',
      completed: true,
      date: '18 May 2026, 2:36 PM',
    },
    {
      id: 4,
      title: 'Vendor Confirmed',
      description: 'Vendor accepted your booking',
      completed: true,
      date: '18 May 2026, 4:15 PM',
    },
    {
      id: 5,
      title: 'Ceremony Scheduled',
      description: 'All arrangements confirmed for the date',
      completed: false,
    },
    {
      id: 6,
      title: 'Ceremony Completed',
      description: 'Service delivered successfully',
      completed: false,
    },
  ];

  const completedSteps = timelineSteps.filter(step => step.completed).length;
  const totalSteps = timelineSteps.length;
  const progressPercentage = (completedSteps / totalSteps) * 100;

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
          Booking Status
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-6">
        <div className="max-w-md mx-auto">
          {/* Booking Summary Card */}
          <div className="bg-white rounded-[20px] p-5 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)] mb-6">
            {/* Progress Bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Booking Progress
                </span>
                <span
                  className="text-[#F97316] font-bold"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  {completedSteps}/{totalSteps} Steps
                </span>
              </div>
              <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-3 pt-3 border-t border-[#F3F4F6]">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                  Booking ID
                </span>
                <span className="text-[#1F2937] font-semibold font-mono" style={{ fontSize: '14px' }}>
                  {bookingId}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                  Vendor
                </span>
                <span className="text-[#1F2937] font-semibold text-right" style={{ fontSize: '14px' }}>
                  Shri Santosh Catering
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                  Ceremony
                </span>
                <span className="text-[#1F2937] font-semibold" style={{ fontSize: '14px' }}>
                  Wedding
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                  Date
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F97316]" />
                  <span className="text-[#1F2937] font-semibold" style={{ fontSize: '14px' }}>
                    25 May 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-[20px] p-5 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-6">
            <h2
              className="font-semibold text-[#1F2937] mb-5"
              style={{ fontSize: '18px', lineHeight: '26px' }}
            >
              Booking Timeline
            </h2>

            <div className="relative">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
                  {/* Timeline Line */}
                  {index < timelineSteps.length - 1 && (
                    <div className={`
                      absolute left-[15px] top-[32px] bottom-0 w-0.5
                      ${step.completed ? 'bg-[#22A55A]' : 'bg-[#E5E7EB]'}
                    `} />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    {step.completed ? (
                      <div className="w-8 h-8 rounded-full bg-[#22A55A] flex items-center justify-center shadow-[0_2px_8px_rgba(34,197,94,0.3)]">
                        <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-[#E5E7EB] flex items-center justify-center">
                        <Circle className="w-4 h-4 text-[#9CA3AF]" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <h3
                      className={`font-semibold mb-1 ${
                        step.completed ? 'text-[#1F2937]' : 'text-[#9CA3AF]'
                      }`}
                      style={{ fontSize: '16px', lineHeight: '24px' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={step.completed ? 'text-[#6B7280]' : 'text-[#D1D5DB]'}
                      style={{ fontSize: '14px', lineHeight: '20px' }}
                    >
                      {step.description}
                    </p>
                    {step.date && (
                      <p
                        className="text-[#9CA3AF] mt-1"
                        style={{ fontSize: '12px', lineHeight: '16px' }}
                      >
                        {step.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-[16px] p-5 border border-[#60A5FA]/20 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#60A5FA] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="font-semibold text-[#1F2937] mb-1"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Need help with this booking?
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Our support team is here to assist you
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 h-11 rounded-[10px] bg-white border border-[#E5E7EB] text-[#1F2937] font-semibold hover:bg-[#F3F4F6] transition-all duration-200 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span style={{ fontSize: '14px', lineHeight: '20px' }}>
                  Contact Support
                </span>
              </button>
              <button className="flex-1 h-11 rounded-[10px] bg-white border border-[#E5E7EB] text-[#1F2937] font-semibold hover:bg-[#F3F4F6] transition-all duration-200 flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span style={{ fontSize: '14px', lineHeight: '20px' }}>
                  Raise Issue
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
