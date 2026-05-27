import { useTheme } from '../context/ThemeContext';

interface CategoryIconProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export function CategoryIcon({ icon, label, onClick }: CategoryIconProps) {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 min-w-[72px] group"
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
        isDarkMode
          ? 'bg-[#334155] group-hover:bg-[#F97316] group-hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)]'
          : 'bg-[#FFF7ED] group-hover:bg-[#F97316] group-hover:shadow-[0_4px_12px_rgba(249,115,22,0.2)]'
      }`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <span
        className={`text-center font-medium transition-colors duration-300 ${
          isDarkMode
            ? 'text-[#CBD5E1] group-hover:text-[#FB923C]'
            : 'text-[#1F2937] group-hover:text-[#F97316]'
        }`}
        style={{ fontSize: '12px', lineHeight: '16px' }}
      >
        {label}
      </span>
    </button>
  );
}
