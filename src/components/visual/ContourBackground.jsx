import React from 'react';

export default function ContourBackground({ className = "", isMobile = false }) {
  // Desktop version - single flowing pattern with multi-color gradients
  if (!isMobile) {
    return (
      <svg 
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lgDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="rgba(219,254,1,0)" />
            <stop offset="30%" stopColor="rgba(219,254,1,0.9)" />
            <stop offset="55%" stopColor="rgba(102,240,255,0.7)" />
            <stop offset="80%" stopColor="rgba(219,254,1,0.8)" />
            <stop offset="100%" stopColor="rgba(219,254,1,0)" />
          </linearGradient>
          <linearGradient id="lgDesktop2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="rgba(126,143,255,0)" />
            <stop offset="40%" stopColor="rgba(126,143,255,0.6)" />
            <stop offset="70%" stopColor="rgba(219,254,1,0.5)" />
            <stop offset="100%" stopColor="rgba(219,254,1,0)" />
          </linearGradient>
        </defs>
        {[...Array(20)].map((_, i) => {
          const spread = 16;
          const ox = (i / 19) * spread - spread / 2;
          const oy = (i / 19) * 2 - 1;
          const isThick = i % 4 === 0;
          const isMid = i % 4 === 2;
          const grad = i % 2 === 0 ? 'url(#lgDesktop)' : 'url(#lgDesktop2)';
          return (
            <path
              key={i}
              d={`M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${90 + oy}, ${60 + ox} ${0 + oy}, ${120 + ox} ${120 + oy}`}
              stroke={grad}
              strokeWidth={isThick ? 0.35 : isMid ? 0.18 : 0.09}
              fill="none"
              opacity={isThick ? 0.55 : isMid ? 0.35 : 0.2}
            />
          );
        })}
      </svg>
    );
  }

  // Mobile version - single continuous flowing SVG with 3 wave groups
  const groups = [
    { startY: -8,  cp1Y: 20,  cp2Y: 5,   endY: 36  },
    { startY: 30,  cp1Y: 58,  cp2Y: 40,  endY: 70  },
    { startY: 64,  cp1Y: 90,  cp2Y: 74,  endY: 105 },
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lgMobile" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(219,254,1,0)" />
          <stop offset="30%" stopColor="rgba(219,254,1,0.9)" />
          <stop offset="55%" stopColor="rgba(102,240,255,0.7)" />
          <stop offset="80%" stopColor="rgba(219,254,1,0.8)" />
          <stop offset="100%" stopColor="rgba(219,254,1,0)" />
        </linearGradient>
        <linearGradient id="lgMobile2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(126,143,255,0)" />
          <stop offset="40%" stopColor="rgba(126,143,255,0.6)" />
          <stop offset="70%" stopColor="rgba(219,254,1,0.5)" />
          <stop offset="100%" stopColor="rgba(219,254,1,0)" />
        </linearGradient>
      </defs>

      {groups.map((g, gi) =>
        [...Array(12)].map((_, i) => {
          const spread = 16;
          const ox = (i / 11) * spread - spread / 2;
          const oy = (i / 11) * 2 - 1;
          const isThick = i % 4 === 0;
          const isMid = i % 4 === 2;
          const grad = gi % 2 === 0 ? 'url(#lgMobile)' : 'url(#lgMobile2)';
          return (
            <path
              key={`g${gi}-${i}`}
              d={`M ${112 + ox} ${g.startY + oy} C ${-28 + ox} ${g.cp1Y + oy}, ${58 + ox} ${g.cp2Y + oy}, ${118 + ox} ${g.endY + oy}`}
              stroke={grad}
              strokeWidth={isThick ? 0.35 : isMid ? 0.18 : 0.09}
              fill="none"
              opacity={isThick ? 0.55 : isMid ? 0.35 : 0.2}
            />
          );
        })
      )}
    </svg>
  );
}