import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}

export function SecondaryButton({
  children,
  onClick,
  fullWidth = true,
  type = 'button'
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        h-12 px-6 rounded-[10px] font-semibold
        bg-transparent text-[#1F2937]
        border-2 border-[#D1D5DB]
        hover:bg-[#F3F4F6] active:bg-[#E5E7EB]
        transition-all duration-200
        ${fullWidth ? 'w-full' : 'min-w-[120px]'}
      `}
      style={{ fontSize: '16px', lineHeight: '20px' }}
    >
      {children}
    </button>
  );
}
