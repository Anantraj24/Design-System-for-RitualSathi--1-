import { Star } from 'lucide-react';

interface ReviewCardProps {
  userName: string;
  rating: number;
  comment: string;
  date?: string;
}

export function ReviewCard({ userName, rating, comment, date }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-[12px] p-4 border border-[#E5E7EB]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center">
            <span className="text-[#F97316] font-bold" style={{ fontSize: '16px' }}>
              {userName.charAt(0)}
            </span>
          </div>
          <div>
            <p
              className="font-semibold text-[#1F2937]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              {userName}
            </p>
            {date && (
              <p
                className="text-[#9CA3AF]"
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                {date}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
          <span
            className="font-semibold text-[#1F2937]"
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            {rating}
          </span>
        </div>
      </div>
      <p
        className="text-[#6B7280]"
        style={{ fontSize: '14px', lineHeight: '20px' }}
      >
        {comment}
      </p>
    </div>
  );
}
