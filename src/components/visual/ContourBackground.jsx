import React from 'react';

export default function ContourBackground({ className = "" }) {
  // Generate stars along contour paths
  const generateStarsAlongPath = (pathIndex) => {
    const ox = pathIndex * 2 - 10;
    const oy = pathIndex * 1.2 - 5;
    const stars = [];
    const starCount = 8 + Math.floor(Math.random() * 5);
    
    for (let j = 0; j < starCount; j++) {
      const t = j / starCount;
      // Cubic Bezier calculation for position
      const p0x = 110 + ox, p0y = -20 + oy;
      const p1x = -30 + ox, p1y = 90 + oy;
      const p2x = 60 + ox, p2y = 0 + oy;
      const p3x = 120 + ox, p3y = 120 + oy;
      
      const x = Math.pow(1-t, 3) * p0x + 
                3 * Math.pow(1-t, 2) * t * p1x + 
                3 * (1-t) * Math.pow(t, 2) * p2x + 
                Math.pow(t, 3) * p3x;
      const y = Math.pow(1-t, 3) * p0y + 
                3 * Math.pow(1-t, 2) * t * p1y + 
                3 * (1-t) * Math.pow(t, 2) * p2y + 
                Math.pow(t, 3) * p3y;
      
      const size = 0.15 + Math.random() * 0.15;
      const opacity = 0.3 + Math.random() * 0.4;
      
      stars.push({ x, y, size, opacity, key: `${pathIndex}-${j}` });
    }
    return stars;
  };

  const allStars = [...Array(20)].flatMap((_, i) => generateStarsAlongPath(i));

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="40%" stopColor="rgba(219, 254, 1, 0.3)" />
          <stop offset="60%" stopColor="rgba(219, 254, 1, 0.3)" />
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
      {allStars.map(star => (
        <circle
          key={star.key}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="#DBFE01"
          opacity={star.opacity}
        />
      ))}
    </svg>
  );
}