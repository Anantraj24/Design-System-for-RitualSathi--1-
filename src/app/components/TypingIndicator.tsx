import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex gap-2 mb-4">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#22A55A] text-white">
        <Bot className="w-4 h-4" />
      </div>

      {/* Typing Animation */}
      <div className="bg-white border border-[#E5E7EB] rounded-[16px] rounded-tl-sm px-5 py-3 flex items-center gap-1">
        <div className="flex gap-1">
          <div
            className="w-2 h-2 rounded-full bg-[#9CA3AF] animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '1s' }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#9CA3AF] animate-bounce"
            style={{ animationDelay: '150ms', animationDuration: '1s' }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#9CA3AF] animate-bounce"
            style={{ animationDelay: '300ms', animationDuration: '1s' }}
          />
        </div>
      </div>
    </div>
  );
}
