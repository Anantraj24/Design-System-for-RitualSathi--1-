import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Send, AlertCircle, Sparkles } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
import { TypingIndicator } from '../components/TypingIndicator';
import { QuickSuggestionChips } from '../components/QuickSuggestionChips';
import { sendMessage, type ChatMessage, type UserContext } from '../../services/chatService';

interface ChatbotScreenProps {
  onBack: () => void;
  userContext?: UserContext;
}

export function ChatbotScreen({ onBack, userContext = {} }: ChatbotScreenProps) {
  // Helper to format time safely across environments
  const formatTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Namaste! 🙏 I\'m Sathi Assistant, your AI ceremony planning helper.\n\nI can help you with:\n• Vendor recommendations\n• Budget planning\n• Booking guidance\n• Ceremony checklists\n\nWhat would you like help with today?',
      timestamp: formatTime(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Quick suggestions
  const suggestions = [
    'Plan my wedding',
    'Find pandit',
    'Suggest budget',
    'Find decorator',
    'Find caterer',
    'UPI payment help',
    'Track booking',
    'Create checklist',
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle sending a message
  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();

    if (!textToSend) return;

    // Clear input and hide suggestions
    setInputMessage('');
    setShowSuggestions(false);
    setError(null);

    // Add user message
    const userMessage: ChatMessage = {
      role: 'user',
      content: textToSend,
      timestamp: formatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Show loading state
    setIsLoading(true);

    try {
      // Get conversation history (last 10 messages for API)
      const history = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      // Send to backend
      const reply = await sendMessage(textToSend, history, userContext);

      // Add assistant response
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: reply,
        timestamp: formatTime(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      // Only log non-network errors
      if (err.message && !err.message.includes('fetch') && !err.message.includes('network')) {
        console.error('Chat error:', err);
      }

      setError(null); // Don't show error UI for network issues since we have fallbacks

      // Add generic error message only for non-network errors
      if (err.message && !err.message.includes('fetch') && !err.message.includes('network')) {
        const errorMessage: ChatMessage = {
          role: 'assistant',
          content: 'Sorry, I encountered an issue. Please try asking your question again.',
          timestamp: formatTime(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F97316] to-[#FB923C] px-4 pt-3 pb-4 border-b border-[#F97316]/20">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1
                className="font-bold text-white"
                style={{ fontSize: '20px', lineHeight: '28px' }}
              >
                Sathi Assistant
              </h1>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <p
              className="text-white/90"
              style={{ fontSize: '13px', lineHeight: '18px' }}
            >
              Your ceremony planning helper
            </p>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#22A55A]" />
            <span
              className="text-white"
              style={{ fontSize: '11px', lineHeight: '14px' }}
            >
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-4">
        <div className="max-w-md mx-auto">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.content}
              isUser={msg.role === 'user'}
              timestamp={msg.timestamp}
            />
          ))}

          {/* Typing indicator */}
          {isLoading && <TypingIndicator />}

          {/* Error state */}
          {error && (
            <div className="flex items-start gap-2 p-3 bg-[#FEF2F2] border border-[#F87171] rounded-[12px] mb-4">
              <AlertCircle className="w-5 h-5 text-[#F87171] flex-shrink-0 mt-0.5" />
              <div>
                <p
                  className="text-[#991B1B] font-medium"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Connection Error
                </p>
                <p
                  className="text-[#DC2626]"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  {error}
                </p>
              </div>
            </div>
          )}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      {showSuggestions && messages.length <= 1 && (
        <QuickSuggestionChips
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-[#E5E7EB] px-4 py-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 h-12 px-4 rounded-[16px] bg-[#F3F4F6] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:bg-white transition-all duration-200 disabled:opacity-50"
            style={{ fontSize: '15px', lineHeight: '22px' }}
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="w-12 h-12 rounded-full bg-[#F97316] text-white flex items-center justify-center hover:bg-[#FB923C] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#F97316]"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>

        {/* Powered by notice */}
        <p
          className="text-[#9CA3AF] text-center mt-2"
          style={{ fontSize: '11px', lineHeight: '14px' }}
        >
          Powered by OpenAI • Demo chatbot for RitualSathi
        </p>
      </div>
    </div>
  );
}
