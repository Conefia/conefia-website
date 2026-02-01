import React from 'react';

export default function ContourBackground({ className = "" }) {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="40%" stopColor="rgba(219, 254, 1, 0.5)" />
          <stop offset="60%" stopColor="rgba(219, 254, 1, 0.5)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
      </defs>
      {[...Array(20)].map((_, i) => {
        const ox = i * 2 - 10; 
        const oy = i * 1.2 - 5;
        
        return (
          <path
            key={i}
            d={`M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${90 + oy}, ${60 + ox} ${0 + oy}, ${120 + ox} ${120 + oy}`}
            stroke="url(#lineGradient)"
            strokeWidth={i % 4 === 0 ? 0.4 : 0.15}
            fill="none"
            opacity={0.4 + Math.random() * 0.4}
          />
        );
      })}
    </svg>
  );
}