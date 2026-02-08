import React from 'react';

export default function ContourBackground({ className = "", isMobile = false }) {
  // Infinity pattern: figure-8 curve
  const infinityPath = (cx, cy, scale = 1, rotation = 0) => {
    const points = [];
    for (let t = 0; t <= Math.PI * 2; t += 0.1) {
      const x = cx + (Math.sin(t) * scale) / (1 + Math.cos(t) * Math.cos(t));
      const y = cy + (Math.sin(t) * Math.cos(t) * scale) / (1 + Math.cos(t) * Math.cos(t));
      points.push([x, y]);
    }
    return points.map(p => `${p[0]},${p[1]}`).join(' L ');
  };

  if (isMobile) {
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
        {/* Three infinity patterns */}
        <path
          d={`M 80 10 Q 100 20, 90 35 Q 70 50, 80 65`}
          stroke="url(#lineGradient)"
          strokeWidth="0.4"
          fill="none"
          opacity="0.4"
        />
        <path
          d={`M 75 25 Q 95 35, 85 50 Q 65 65, 75 80`}
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          fill="none"
          opacity="0.3"
        />
        <path
          d={`M 85 40 Q 105 50, 95 65 Q 75 80, 85 95`}
          stroke="url(#lineGradient)"
          strokeWidth="0.25"
          fill="none"
          opacity="0.25"
        />
      </svg>
    );
  }

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