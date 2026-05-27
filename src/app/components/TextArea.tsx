interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export function TextArea({ label, value, onChange, placeholder, rows = 4 }: TextAreaProps) {
  return (
    <div className="w-full">
      <label
        className="block mb-1.5 text-[#6B7280]"
        style={{ fontSize: '13px', lineHeight: '18px' }}
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 rounded-[10px] bg-white border-[1.5px] border-[#E5E7EB] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED] transition-all duration-200 resize-none"
        style={{ fontSize: '16px', lineHeight: '24px' }}
      />
    </div>
  );
}
