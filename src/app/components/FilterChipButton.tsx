import { useTheme } from '../context/ThemeContext';

interface FilterChipButtonProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChipButton({ label, icon, active = false, onClick }: FilterChipButtonProps) {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`
        h-9 px-4 rounded-full border-[1.5px] transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap
        ${
          active
            ? isDarkMode
              ? 'border-[#F97316] bg-[#1E293B] text-[#FB923C] shadow-lg shadow-orange-500/20'
              : 'border-[#F97316] bg-[#FFF7ED] text-[#F97316]'
            : isDarkMode
              ? 'border-[#475569] bg-[#334155] text-[#CBD5E1] hover:border-[#F97316]/50 hover:shadow-md'
              : 'border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#F97316]/30'
        }
      `}
      style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 600 }}
    >
      {icon}
      {label}
    </button>
  );
}
