import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export default function PremiumInput({
  label,
  placeholder,
  type = 'text',
  className,
  error,
  success,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-white/80 mb-2">
          {label}
        </label>
      )}
      <div
        className={cn(
          'relative overflow-hidden rounded-xl transition-all duration-300',
          focused && 'ring-2 ring-[#DBFE01]/50'
        )}
      >
        {/* Animated glow background */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-[#DBFE01]/0 via-[#DBFE01]/10 to-[#DBFE01]/0 opacity-0 transition-opacity duration-300 pointer-events-none',
            focused && 'opacity-100'
          )}
        />

        {/* Input field */}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            'w-full px-4 py-3 text-base',
            'bg-white/5 border border-white/10',
            'text-white placeholder:text-white/40',
            'transition-all duration-300',
            'focus:outline-none focus:border-[#DBFE01]/50 focus:bg-white/8',
            'hover:border-white/20 hover:bg-white/7',
            error && 'border-red-500/50 focus:border-red-500',
            success && 'border-emerald-500/50 focus:border-emerald-500',
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />

        {/* Right-side glow indicator */}
        {focused && (
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#DBFE01] rounded-full blur-sm opacity-60 mr-2 animate-pulse"
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        )}
      </div>

      {/* Error/Success messages */}
      {error && (
        <p className="text-xs text-red-400 mt-1.5 font-medium">{error}</p>
      )}
      {success && !error && (
        <p className="text-xs text-emerald-400 mt-1.5 font-medium">{success}</p>
      )}
    </div>
  );
}