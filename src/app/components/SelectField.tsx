import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function SelectField({ label, value, onChange, options, placeholder }: SelectFieldProps) {
  return (
    <div className="w-full">
      <label
        className="block mb-1.5 text-[#6B7280]"
        style={{ fontSize: '13px', lineHeight: '18px' }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-12 px-4 pr-10 rounded-[10px] bg-white border-[1.5px] border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_#FFF7ED] transition-all duration-200 appearance-none cursor-pointer"
          style={{ fontSize: '16px', lineHeight: '24px' }}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" />
      </div>
    </div>
  );
}
