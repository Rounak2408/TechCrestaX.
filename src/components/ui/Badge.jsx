import React from 'react';

export default function Badge({
  children,
  variant = 'blush',
  size = 'md',
  dot = true,
  className = '',
}) {
  const variantStyles = {
    coral: "bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 text-[#FF6B4A] border-[#FF6B4A]/20 dark:border-[#FF6B4A]/30",
    blush: "bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 text-[#FF6B4A] border-[#FF6B4A]/20 dark:border-[#FF6B4A]/30",
    lime: "bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 text-[#FF6B4A] border-[#FF6B4A]/20 dark:border-[#FF6B4A]/30",
    neutral: "bg-[#F8F9FA] dark:bg-[#152336] text-[#0D1B2A] dark:text-slate-200 border-[#EBECEF] dark:border-white/10",
    emerald: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    cyan: "bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    amber: "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    dark: "bg-[#0D1B2A] text-white border-white/10",
  };

  const dotColors = {
    coral: "bg-[#FF6B4A]",
    blush: "bg-[#FF6B4A]",
    lime: "bg-[#FF6B4A]",
    neutral: "bg-slate-500",
    emerald: "bg-emerald-600",
    cyan: "bg-sky-600",
    amber: "bg-amber-600",
    dark: "bg-[#FF6B4A]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3 py-1 tracking-wide",
    lg: "text-sm px-3.5 py-1.5 tracking-wide",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono border font-medium ${
        variantStyles[variant] || variantStyles.blush
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            dotColors[variant] || dotColors.blush
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
