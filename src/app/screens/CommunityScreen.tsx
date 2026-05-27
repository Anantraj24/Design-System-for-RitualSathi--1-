import { useState } from 'react';
import { Search, MessageCircle, ThumbsUp, Plus } from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';

interface Post {
  id: string;
  question: string;
  comments: number;
  likes: number;
  author: string;
  timeAgo: string;
}

interface CommunityScreenProps {
  onNavigate?: (tab: string) => void;
}

export function CommunityScreen({ onNavigate }: CommunityScreenProps) {
  const [activeTab, setActiveTab] = useState('community');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const topics = [
    { id: 'wedding', label: 'Wedding Tips', color: '#F97316' },
    { id: 'puja', label: 'Puja Rituals', color: '#22A55A' },
    { id: 'budget', label: 'Budget Planning', color: '#60A5FA' },
    { id: 'vendor', label: 'Vendor Suggestions', color: '#FBBF24' },
    { id: 'food', label: 'Food & Catering', color: '#EC4899' },
  ];

  const posts: Post[] = [
    {
      id: '1',
      question: 'How much budget is enough for a small annaprashan?',
      comments: 12,
      likes: 24,
      author: 'Priya Sharma',
      timeAgo: '2 hours ago',
    },
    {
      id: '2',
      question: 'Best decorator suggestions near Kolkata?',
      comments: 8,
      likes: 17,
      author: 'Rajesh Kumar',
      timeAgo: '5 hours ago',
    },
    {
      id: '3',
      question: 'What items are needed for griha pravesh puja?',
      comments: 21,
      likes: 35,
      author: 'Anita Desai',
      timeAgo: '1 day ago',
    },
  ];

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6]">
        <div className="px-4 pt-3 pb-4">
          <h1
            className="font-bold text-[#1F2937] mb-1"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            Community
          </h1>
          <p
            className="text-[#6B7280]"
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            Ask questions and get ceremony planning tips from other families.
          </p>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search discussions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-[16px] bg-[#FFFDF8] border-[1.5px] border-[#E5E7EB] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED] transition-all duration-200"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            />
          </div>
        </div>

        {/* Topic Chips */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id === selectedTopic ? null : topic.id)}
                className={`
                  px-4 py-2 rounded-full border-[1.5px] transition-all duration-200 whitespace-nowrap
                  ${selectedTopic === topic.id
                    ? 'border-transparent text-white'
                    : 'border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#F97316]/30'
                  }
                `}
                style={{
                  backgroundColor: selectedTopic === topic.id ? topic.color : undefined,
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                }}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-24">
        <div className="max-w-md mx-auto space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[16px] p-5 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer"
            >
              {/* Author & Time */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center">
                  <span
                    className="text-[#F97316] font-bold"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#1F2937] font-medium"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    {post.author}
                  </p>
                  <p
                    className="text-[#9CA3AF]"
                    style={{ fontSize: '12px', lineHeight: '16px' }}
                  >
                    {post.timeAgo}
                  </p>
                </div>
              </div>

              {/* Question */}
              <h3
                className="text-[#1F2937] font-semibold mb-4"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                {post.question}
              </h3>

              {/* Engagement Stats */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#6B7280]" />
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    {post.comments}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-[#6B7280]" />
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  >
                    {post.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State (if no posts) */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-[#9CA3AF]" />
              </div>
              <p
                className="text-[#6B7280] mb-2"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                No discussions yet
              </p>
              <p
                className="text-[#9CA3AF]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Be the first to ask a question
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Ask Question Button */}
      <div className="fixed bottom-24 right-4 max-w-[428px] mx-auto">
        <button className="h-14 px-6 rounded-full bg-[#F97316] text-white font-semibold hover:bg-[#FB923C] transition-all duration-200 flex items-center gap-2 shadow-[0_8px_24px_rgba(249,115,22,0.3)]">
          <Plus className="w-5 h-5" strokeWidth={2.5} />
          <span style={{ fontSize: '16px', lineHeight: '20px' }}>
            Ask a Question
          </span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto">
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
