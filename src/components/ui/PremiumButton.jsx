import React from 'react';
import { cn } from '@/lib/utils';

export default function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  ...props
}) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group';

  const variants = {
    primary: `
      px-8 py-4 text-base font-bold
      bg-[#DBFE01] text-[#1a1a1a]
      shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.15)]
      hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_0_20px_rgba(219,254,1,0.4),0_4px_16px_rgba(219,254,1,0.25)]
      hover:scale-105
      active:scale-95
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#DBFE01] before:to-[#c5e000]
      before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none
      group-hover:before:opacity-100
      before:z-0
      relative z-10
    `,
    secondary: `
      px-8 py-4 text-base font-bold
      bg-transparent border-2 border-white/30 text-white
      hover:bg-white hover:text-[#0B1020]
      hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
      hover:scale-105
      active:scale-95
      transition-all duration-300
    `,
    ghost: `
      px-6 py-2 text-sm font-semibold
      text-white/70 hover:text-white
      hover:bg-white/10
      hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]
      hover:scale-102
      active:scale-95
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant] || variants.primary,
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
        className
      )}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-20 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}