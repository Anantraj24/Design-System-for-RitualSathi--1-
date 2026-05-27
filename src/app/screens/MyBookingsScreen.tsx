import { useState } from 'react';
import { ChevronRight, Calendar, CheckCircle, Clock } from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';

interface MyBookingsScreenProps {
  onViewStatus: (bookingId: string) => void;
  onNavigate?: (tab: string) => void;
}

export function MyBookingsScreen({ onViewStatus, onNavigate }: MyBookingsScreenProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');
  const [activeNavTab, setActiveNavTab] = useState('bookings');

  const handleNavTabChange = (tab: string) => {
    setActiveNavTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
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

  const upcomingBookings = [
    {
      id: 'RS-2026-04872',
      ceremony: 'Wedding',
      ceremonyIcon: '💍',
      vendor: 'Shri Santosh Catering Service',
      date: '25 May 2026',
      status: 'Confirmed',
      statusColor: 'green',
      amountPaid: 5000,
      balance: 40000,
    },
    {
      id: 'RS-2026-04901',
      ceremony: 'Puja',
      ceremonyIcon: '🪔',
      vendor: 'Pandit Ramesh Sharma',
      date: '30 May 2026',
      status: 'Pending',
      statusColor: 'yellow',
      amountPaid: 1000,
      balance: 2000,
    },
  ];

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6]">
        <div className="px-4 pt-3 pb-4">
          <h1
            className="font-bold text-[#1F2937]"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            My Bookings
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`
              flex-1 pb-3 border-b-2 transition-all duration-200
              ${activeTab === 'upcoming'
                ? 'border-[#F97316] text-[#F97316]'
                : 'border-transparent text-[#6B7280]'
              }
            `}
          >
            <span
              className="font-semibold"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              Upcoming
            </span>
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`
              flex-1 pb-3 border-b-2 transition-all duration-200
              ${activeTab === 'completed'
                ? 'border-[#F97316] text-[#F97316]'
                : 'border-transparent text-[#6B7280]'
              }
            `}
          >
            <span
              className="font-semibold"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              Completed
            </span>
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`
              flex-1 pb-3 border-b-2 transition-all duration-200
              ${activeTab === 'cancelled'
                ? 'border-[#F97316] text-[#F97316]'
                : 'border-transparent text-[#6B7280]'
              }
            `}
          >
            <span
              className="font-semibold"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              Cancelled
            </span>
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-24">
        {activeTab === 'upcoming' && (
          <div className="space-y-4 max-w-md mx-auto">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-[16px] p-5 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200"
              >
                {/* Ceremony & Status Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{booking.ceremonyIcon}</span>
                    <div>
                      <p
                        className="font-bold text-[#1F2937]"
                        style={{ fontSize: '18px', lineHeight: '26px' }}
                      >
                        {booking.ceremony}
                      </p>
                    </div>
                  </div>
                  <div className={`
                    px-3 py-1 rounded-full flex items-center gap-1.5
                    ${booking.statusColor === 'green'
                      ? 'bg-[#F0FDF4] border border-[#22A55A]'
                      : 'bg-[#FFFBEB] border border-[#FBBF24]'
                    }
                  `}>
                    {booking.statusColor === 'green' ? (
                      <CheckCircle className="w-3.5 h-3.5 text-[#22A55A]" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />
                    )}
                    <span
                      className={`font-semibold ${
                        booking.statusColor === 'green'
                          ? 'text-[#22A55A]'
                          : 'text-[#FBBF24]'
                      }`}
                      style={{ fontSize: '12px', lineHeight: '16px' }}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>

                {/* Vendor & Date */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                      Vendor:
                    </span>
                    <span className="text-[#1F2937] font-medium flex-1" style={{ fontSize: '14px' }}>
                      {booking.vendor}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-[#1F2937] font-medium" style={{ fontSize: '14px' }}>
                      {booking.date}
                    </span>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-[#FFFDF8] rounded-[12px] p-3 border border-[#E5E7EB] mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#6B7280]" style={{ fontSize: '13px' }}>
                      Amount Paid
                    </span>
                    <span className="text-[#22A55A] font-bold" style={{ fontSize: '16px' }}>
                      ₹{formatIndianNumber(booking.amountPaid)}
                    </span>
                  </div>
                  {booking.balance && booking.balance > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B7280]" style={{ fontSize: '13px' }}>
                        Balance Due
                      </span>
                      <span className="text-[#F97316] font-bold" style={{ fontSize: '16px' }}>
                        ₹{formatIndianNumber(booking.balance)}
                      </span>
                    </div>
                  )}
                </div>

                {/* View Status Button */}
                <button
                  onClick={() => onViewStatus(booking.id)}
                  className="w-full h-11 rounded-[10px] bg-[#F97316] text-white font-semibold hover:bg-[#FB923C] transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ fontSize: '16px', lineHeight: '20px' }}
                >
                  View Status
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-[#9CA3AF]" />
            </div>
            <p
              className="text-[#6B7280] mb-2"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              No completed bookings yet
            </p>
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Your completed bookings will appear here
            </p>
          </div>
        )}

        {activeTab === 'cancelled' && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">✕</span>
            </div>
            <p
              className="text-[#6B7280] mb-2"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              No cancelled bookings
            </p>
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              Your cancelled bookings will appear here
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto">
        <BottomNavigation activeTab={activeNavTab} onTabChange={handleNavTabChange} />
      </div>
    </div>
  );
}
