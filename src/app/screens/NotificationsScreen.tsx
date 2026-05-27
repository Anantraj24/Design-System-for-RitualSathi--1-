import { ChevronLeft, Bell, Calendar, CheckCircle, MessageCircle, Star, Gift } from 'lucide-react';

interface NotificationsScreenProps {
  onBack: () => void;
}

interface Notification {
  id: string;
  type: 'booking' | 'message' | 'review' | 'offer' | 'reminder';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'booking',
      title: 'Booking Confirmed',
      message: 'Your booking with Shri Santosh Catering Service has been confirmed for May 28, 2026',
      time: '2 hours ago',
      isRead: false,
    },
    {
      id: '2',
      type: 'offer',
      title: 'Special Offer',
      message: 'Get 15% off on wedding decorators this weekend! Limited time offer.',
      time: '5 hours ago',
      isRead: false,
    },
    {
      id: '3',
      type: 'reminder',
      title: 'Upcoming Event',
      message: 'Your ceremony is in 3 days. Don\'t forget to confirm final details with vendors.',
      time: '1 day ago',
      isRead: true,
    },
    {
      id: '4',
      type: 'review',
      title: 'Review Your Recent Booking',
      message: 'How was your experience with Maa Durga Decorators? Share your feedback.',
      time: '2 days ago',
      isRead: true,
    },
    {
      id: '5',
      type: 'message',
      title: 'New Message from Vendor',
      message: 'Pandit Ramesh Sharma sent you a message regarding ceremony timings.',
      time: '3 days ago',
      isRead: true,
    },
  ];

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'booking':
        return <CheckCircle className="w-5 h-5 text-[#22A55A]" />;
      case 'message':
        return <MessageCircle className="w-5 h-5 text-[#60A5FA]" />;
      case 'review':
        return <Star className="w-5 h-5 text-[#FBBF24]" />;
      case 'offer':
        return <Gift className="w-5 h-5 text-[#F97316]" />;
      case 'reminder':
        return <Calendar className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Bell className="w-5 h-5 text-[#6B7280]" />;
    }
  };

  const getIconBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'booking':
        return '#F0FDF4';
      case 'message':
        return '#EFF6FF';
      case 'review':
        return '#FFFBEB';
      case 'offer':
        return '#FFF7ED';
      case 'reminder':
        return '#F5F3FF';
      default:
        return '#F3F4F6';
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-[#F3F4F6] bg-white">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2"
        >
          <ChevronLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h1
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: '18px', lineHeight: '26px' }}
        >
          Notifications
        </h1>
        <div className="w-10" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Unread count banner */}
        {unreadCount > 0 && (
          <div className="bg-[#FFF7ED] px-4 py-3 border-b border-[#FFEDD5]">
            <p
              className="text-[#F97316] font-medium text-center"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              You have {unreadCount} unread notification{unreadCount > 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Notifications List */}
        <div className="divide-y divide-[#F3F4F6]">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`px-4 py-4 hover:bg-[#FFFDF8] transition-colors ${
                !notification.isRead ? 'bg-[#FFFBF0]' : 'bg-white'
              }`}
            >
              <div className="flex gap-3">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: getIconBgColor(notification.type) }}
                >
                  {getIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className="font-semibold text-[#1F2937]"
                      style={{ fontSize: '15px', lineHeight: '22px' }}
                    >
                      {notification.title}
                    </h3>
                    {!notification.isRead && (
                      <div className="w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0 mt-1.5" />
                    )}
                  </div>
                  <p
                    className="text-[#6B7280] mb-2"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    {notification.message}
                  </p>
                  <p
                    className="text-[#9CA3AF]"
                    style={{ fontSize: '12px', lineHeight: '16px' }}
                  >
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no notifications */}
        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-4">
              <Bell className="w-10 h-10 text-[#9CA3AF]" />
            </div>
            <h3
              className="font-semibold text-[#1F2937] mb-2"
              style={{ fontSize: '18px', lineHeight: '26px' }}
            >
              No Notifications
            </h3>
            <p
              className="text-[#6B7280] text-center"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              You're all caught up! We'll notify you when something new happens.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
