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

  // Mobile version - 3 stacked patterns from top right to mid screen
  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient1" x1="100%" y1="0%" x2="50%" y2="50%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="50%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="100%" y1="30%" x2="50%" y2="70%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="50%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
        <linearGradient id="lineGradient3" x1="100%" y1="60%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="50%" stopColor="rgba(219, 254, 1, 1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
      </defs>
      
      {/* Pattern 1: Top right to upper mid */}
      {[...Array(8)].map((_, i) => (
        <path
          key={`p1-${i}`}
          d={`M ${120 + i * 1} ${-10 + i * 0.8} C ${80 + i * 0.5} ${15 + i * 1.2}, ${60 + i * 0.3} ${5 + i * 0.6}, ${50} ${30}`}
          stroke="url(#lineGradient1)"
          strokeWidth={i % 3 === 0 ? 0.25 : 0.08}
          fill="none"
          opacity={0.25 + Math.random() * 0.25}
        />
      ))}
      
      {/* Pattern 2: Mid right to center */}
      {[...Array(8)].map((_, i) => (
        <path
          key={`p2-${i}`}
          d={`M ${120 + i * 1} ${30 + i * 0.8} C ${80 + i * 0.5} ${45 + i * 1.2}, ${60 + i * 0.3} ${35 + i * 0.6}, ${50} ${60}`}
          stroke="url(#lineGradient2)"
          strokeWidth={i % 3 === 0 ? 0.25 : 0.08}
          fill="none"
          opacity={0.25 + Math.random() * 0.25}
        />
      ))}
      
      {/* Pattern 3: Lower right to lower mid */}
      {[...Array(8)].map((_, i) => (
        <path
          key={`p3-${i}`}
          d={`M ${120 + i * 1} ${60 + i * 0.8} C ${80 + i * 0.5} ${75 + i * 1.2}, ${60 + i * 0.3} ${65 + i * 0.6}, ${50} ${90}`}
          stroke="url(#lineGradient3)"
          strokeWidth={i % 3 === 0 ? 0.25 : 0.08}
          fill="none"
          opacity={0.25 + Math.random() * 0.25}
        />
      ))}
    </svg>
  );
}