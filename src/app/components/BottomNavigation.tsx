import { Home, Wallet, Calendar, Users, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'budget', label: 'Budget', icon: Wallet },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="h-16 bg-white border-t border-[#F3F4F6] shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center h-full px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex-1 flex flex-col items-center justify-center gap-1 relative"
            >
              {isActive && (
                <div className="absolute top-0 w-6 h-0.5 bg-[#F97316] rounded-full" />
              )}
              <Icon
                className={`w-6 h-6 ${
                  isActive ? 'text-[#F97316]' : 'text-[#9CA3AF]'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`${
                  isActive ? 'text-[#F97316] font-semibold' : 'text-[#9CA3AF]'
                }`}
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
