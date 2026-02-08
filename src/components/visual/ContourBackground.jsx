import React from 'react';

export default function ContourBackground({ className = "", isMobile = false }) {
  // Desktop version - single flowing pattern
  if (!isMobile) {
    return (
      <svg 
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
            <stop offset="40%" stopColor="rgba(219, 254, 1, 1)" />
            <stop offset="60%" stopColor="rgba(219, 254, 1, 1)" />
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
              strokeWidth={i % 4 === 0 ? 0.3 : 0.1}
              fill="none"
              opacity={0.2 + Math.random() * 0.3}
            />
          );
        })}
      </svg>
    );
  }

  // Mobile version - 3 stacked patterns with same curve shape as desktop
  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="40%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="60%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
      </defs>
      
      {/* Pattern 1: Top right section (y offset: -25 to 25) */}
      {[...Array(7)].map((_, i) => {
        const ox = i * 2 - 5;
        const oy = i * 1.2 - 3;
        return (
          <path
            key={`p1-${i}`}
            d={`M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${10 + oy}, ${60 + ox} ${-5 + oy}, ${120 + ox} ${25 + oy}`}
            stroke="url(#lineGradient)"
            strokeWidth={i % 4 === 0 ? 0.3 : 0.1}
            fill="none"
            opacity={0.2 + Math.random() * 0.3}
          />
        );
      })}
      
      {/* Pattern 2: Mid section (y offset: 25 to 50) */}
      {[...Array(7)].map((_, i) => {
        const ox = i * 2 - 5;
        const oy = i * 1.2 - 3;
        return (
          <path
            key={`p2-${i}`}
            d={`M ${110 + ox} ${5 + oy} C ${-30 + ox} ${35 + oy}, ${60 + ox} ${20 + oy}, ${120 + ox} ${50 + oy}`}
            stroke="url(#lineGradient)"
            strokeWidth={i % 4 === 0 ? 0.3 : 0.1}
            fill="none"
            opacity={0.2 + Math.random() * 0.3}
          />
        );
      })}
      
      {/* Pattern 3: Lower section (y offset: 50 to 75) */}
      {[...Array(7)].map((_, i) => {
        const ox = i * 2 - 5;
        const oy = i * 1.2 - 3;
        return (
          <path
            key={`p3-${i}`}
            d={`M ${110 + ox} ${30 + oy} C ${-30 + ox} ${60 + oy}, ${60 + ox} ${45 + oy}, ${120 + ox} ${75 + oy}`}
            stroke="url(#lineGradient)"
            strokeWidth={i % 4 === 0 ? 0.3 : 0.1}
            fill="none"
            opacity={0.2 + Math.random() * 0.3}
          />
        );
      })}
    </svg>
  );
}