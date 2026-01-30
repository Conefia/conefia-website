import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ContourBackground({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="40%" stopColor="rgba(219, 254, 1, 0.4)" />
          <stop offset="60%" stopColor="rgba(219, 254, 1, 0.4)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {[...Array(45)].map((_, i) => {
        // Parallel stream offset - wider spread to cover all
        const ox = i * 0.9 - 10; 
        const oy = i * 0.6 - 5;
        
        return (
          <motion.path
            key={i}
            d={isMobile 
              ? `M ${110 + ox} ${-10 + oy} 
                 C ${40 + ox} ${15 + oy}, ${40 + ox} ${35 + oy}, ${110 + ox} ${50 + oy}
                 M ${110 + ox} ${50 + oy}
                 C ${40 + ox} ${75 + oy}, ${40 + ox} ${95 + oy}, ${110 + ox} ${110 + oy}`
              : `M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${90 + oy}, ${60 + ox} ${0 + oy}, ${120 + ox} ${120 + oy}`
            }
            stroke="url(#lineGradient)"
            strokeWidth={i % 4 === 0 ? 0.4 : 0.15}
            fill="none"
            opacity={0.3 + Math.random() * 0.5}
            filter={i % 6 === 0 ? "url(#glow)" : "none"}
            animate={(shouldReduceMotion || isMobile) ? {} : {
              d: [
                // Desktop Animation (Original)
                 `M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${90 + oy}, ${60 + ox} ${0 + oy}, ${120 + ox} ${120 + oy}`,
                 `M ${110 + ox} ${-20 + oy} C ${-20 + ox} ${95 + oy}, ${65 + ox} ${5 + oy}, ${120 + ox} ${120 + oy}`,
                 `M ${110 + ox} ${-20 + oy} C ${-30 + ox} ${90 + oy}, ${60 + ox} ${0 + oy}, ${120 + ox} ${120 + oy}`
              ]
            }}
            transition={{
              duration: 12 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </svg>
  );
}