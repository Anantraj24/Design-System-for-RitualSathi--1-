import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
}

export function InputField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  disabled = false
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label
        className="block mb-1.5 text-[#6B7280]"
        style={{ fontSize: '13px', lineHeight: '18px' }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full h-12 px-4 rounded-[10px]
          bg-white
          border-[1.5px] ${error ? 'border-[#F87171]' : 'border-[#E5E7EB]'}
          text-[#1F2937] placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#F97316]
          ${error ? 'focus:shadow-[0_0_0_3px_#FEF2F2]' : 'focus:shadow-[0_0_0_3px_#FFF7ED]'}
          disabled:bg-[#F3F4F6] disabled:text-[#D1D5DB]
          transition-all duration-200
        `}
        style={{ fontSize: '16px', lineHeight: '24px' }}
      />
      {error && (
        <p
          className="mt-1 text-[#F87171]"
          style={{ fontSize: '12px', lineHeight: '16px' }}
        >
          {error}
        </p>
      )}
      {helperText && !error && (
        <p
          className="mt-1 text-[#9CA3AF]"
          style={{ fontSize: '12px', lineHeight: '16px' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
