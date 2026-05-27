interface QuickSuggestionChipsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export function QuickSuggestionChips({
  suggestions,
  onSuggestionClick,
}: QuickSuggestionChipsProps) {
  return (
    <div className="px-4 py-3 bg-white border-t border-[#F3F4F6]">
      <p
        className="text-[#6B7280] mb-2"
        style={{ fontSize: '12px', lineHeight: '16px' }}
      >
        Quick suggestions:
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-3 py-1.5 rounded-full bg-[#FFF7ED] border border-[#F97316]/30 text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all duration-200"
            style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 500 }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
