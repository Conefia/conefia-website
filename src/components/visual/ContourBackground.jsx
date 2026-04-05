import React from 'react';

export default function ContourBackground({ className = "", isMobile = false }) {
  const gradientId = isMobile ? "lineGradientM" : "lineGradient";

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="40%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="60%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
      </defs>
      {[...Array(20)].map((_, i) => {
        const ox = isMobile ? i * 1.5 - 8 : i * 2 - 10;
        const oy = isMobile ? i * 0.8 - 4 : i * 1.2 - 5;
        return (
          <path
            key={i}
            d={`M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${90 + oy}, ${60 + ox} ${0 + oy}, ${120 + ox} ${120 + oy}`}
            stroke={`url(#${gradientId})`}
            strokeWidth={i % 4 === 0 ? 0.3 : 0.1}
            fill="none"
            opacity={isMobile ? 0.2 + (i % 5) * 0.06 : 0.2 + (i % 5) * 0.06}
          />
        );
      })}
    </svg>
  );
}