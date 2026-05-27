import { useState } from 'react';
import {
  ChevronRight,
  Calendar,
  CheckCircle,
  Wallet,
  List,
  CreditCard,
  Globe,
  Bell,
  HelpCircle,
  Store,
  Settings,
  LogOut,
  MapPin,
  Phone,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  action: () => void;
}

interface ProfileScreenProps {
  onNavigate?: (tab: string) => void;
  onOpenChatbot?: () => void;
}

export function ProfileScreen({ onNavigate, onOpenChatbot }: ProfileScreenProps) {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
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

  const stats = [
    {
      id: 'upcoming',
      value: '2',
      label: 'Upcoming Bookings',
      icon: Calendar,
      color: '#F97316',
      bgColor: '#FFF7ED',
    },
    {
      id: 'completed',
      value: '1',
      label: 'Completed Booking',
      icon: CheckCircle,
      color: '#22A55A',
      bgColor: '#F0FDF4',
    },
    {
      id: 'spent',
      value: `₹${formatIndianNumber(85000)}`,
      label: 'Spent',
      icon: Wallet,
      color: '#60A5FA',
      bgColor: '#EFF6FF',
    },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 'ceremonies',
      label: 'My Ceremonies',
      icon: <List className="w-5 h-5" />,
      color: '#F97316',
      action: () => console.log('My Ceremonies'),
    },
    {
      id: 'bookings',
      label: 'My Bookings',
      icon: <Calendar className="w-5 h-5" />,
      color: '#22A55A',
      action: () => console.log('My Bookings'),
    },
    {
      id: 'payment',
      label: 'Payment History',
      icon: <CreditCard className="w-5 h-5" />,
      color: '#60A5FA',
      action: () => console.log('Payment History'),
    },
    {
      id: 'language',
      label: 'Language',
      icon: <Globe className="w-5 h-5" />,
      color: '#8B5CF6',
      action: () => console.log('Language'),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell className="w-5 h-5" />,
      color: '#FBBF24',
      action: () => console.log('Notifications'),
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle className="w-5 h-5" />,
      color: '#EC4899',
      action: () => console.log('Help & Support'),
    },
    {
      id: 'vendor',
      label: 'Register as Vendor',
      icon: <Store className="w-5 h-5" />,
      color: '#10B981',
      action: () => console.log('Register as Vendor'),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      color: '#6B7280',
      action: () => console.log('Settings'),
    },
  ];

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] pt-12 pb-24 px-4">
        {/* User Avatar & Info */}
        <div className="text-center">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center border-4 border-white/30">
            <span
              className="text-[#F97316] font-bold"
              style={{ fontSize: '36px', lineHeight: '44px' }}
            >
              AR
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-white font-bold mb-2"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            AnantRaj
          </h1>

          {/* Mobile & City */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-center gap-1.5">
              <Phone className="w-4 h-4 text-white/90" />
              <span
                className="text-white/90"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                +91 8591812027
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-white/90" />
              <span
                className="text-white/90"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Kolkata
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 -mt-16 pb-24">
        <div className="max-w-md mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="bg-white rounded-[16px] p-4 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)] text-center"
                >
                  <div
                    className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: '18px', lineHeight: '26px', color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[#6B7280]"
                    style={{ fontSize: '11px', lineHeight: '14px' }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Ask Sathi Assistant Card */}
          <button
            onClick={onOpenChatbot}
            className="w-full bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-[20px] p-5 mb-6 shadow-[0_8px_24px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_32px_rgba(249,115,22,0.35)] transition-all duration-200 relative overflow-hidden group"
          >
            {/* Decorative sparkles */}
            <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-50 transition-opacity">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="text-white font-bold"
                    style={{ fontSize: '18px', lineHeight: '26px' }}
                  >
                    Ask Sathi Assistant
                  </h3>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <p
                  className="text-white/90"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Get AI-powered help with ceremony planning
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Menu List */}
          <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden mb-6">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={item.action}
                className={`
                  w-full flex items-center gap-4 px-5 py-4
                  hover:bg-[#FFFDF8] transition-all duration-200
                  ${index !== menuItems.length - 1 ? 'border-b border-[#F3F4F6]' : ''}
                `}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <span
                  className="flex-1 text-left text-[#1F2937] font-medium"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-[#9CA3AF]" />
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <button className="w-full h-14 rounded-[16px] bg-white border-2 border-[#F87171] text-[#F87171] font-semibold hover:bg-[#FEF2F2] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(248,113,113,0.1)] mb-6">
            <LogOut className="w-5 h-5" />
            <span style={{ fontSize: '16px', lineHeight: '20px' }}>
              Logout
            </span>
          </button>

          {/* App Version */}
          <div className="text-center pb-4">
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: '13px', lineHeight: '18px' }}
            >
              RitualSathi v1.0.0
            </p>
            <p
              className="text-[#D1D5DB] mt-1"
              style={{ fontSize: '12px', lineHeight: '16px' }}
            >
              Made with ❤️ for Indian Ceremonies
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto">
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}
