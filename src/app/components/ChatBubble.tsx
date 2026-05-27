import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export function ChatBubble({ message, isUser, timestamp }: ChatBubbleProps) {
  return (
    <div className={`flex gap-2 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser
            ? 'bg-[#F97316] text-white'
            : 'bg-[#22A55A] text-white'
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4" />
        ) : (
          <Bot className="w-4 h-4" />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[75%] rounded-[16px] px-4 py-3 ${
          isUser
            ? 'bg-[#F97316] text-white rounded-tr-sm'
            : 'bg-white border border-[#E5E7EB] text-[#1F2937] rounded-tl-sm'
        }`}
      >
        <p
          className="whitespace-pre-wrap break-words"
          style={{ fontSize: '15px', lineHeight: '22px' }}
        >
          {message}
        </p>
        {timestamp && (
          <p
            className={`mt-1 ${
              isUser ? 'text-white/70' : 'text-[#9CA3AF]'
            }`}
            style={{ fontSize: '11px', lineHeight: '14px' }}
          >
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
