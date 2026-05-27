import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  onClick,
  fullWidth = true,
  type = 'button',
  disabled = false
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        h-12 px-6 rounded-[10px] font-semibold
        bg-[#F97316] text-white
        hover:bg-[#FB923C] active:bg-[#EA580C]
        disabled:opacity-40 disabled:cursor-not-allowed
        transition-all duration-200
        shadow-[0_1px_2px_rgba(0,0,0,0.04)]
        ${fullWidth ? 'w-full' : 'min-w-[120px]'}
      `}
      style={{ fontSize: '16px', lineHeight: '20px' }}
    >
      {children}
    </button>
  );
}
