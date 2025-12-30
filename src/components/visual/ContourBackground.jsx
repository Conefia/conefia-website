import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ContourBackground({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="25%" stopColor="rgba(219, 254, 1, 0.1)" />
          <stop offset="50%" stopColor="rgba(219, 254, 1, 0.3)" />
          <stop offset="75%" stopColor="rgba(219, 254, 1, 0.1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Enhanced Wavy flow lines */}
      {[...Array(20)].map((_, i) => {
        const yBase = i * 6; // Vertical spacing
        // Create offset for wave phases so they don't all move together
        const phaseOffset = i * 15; 
        
        return (
          <motion.path
            key={`wavy-${i}`}
            stroke="url(#lineGradient)"
            strokeWidth={i % 3 === 0 ? 0.3 : 0.1}
            fill="none"
            opacity={0.3 + (i % 4 === 0 ? 0.4 : 0)}
            filter={i % 4 === 0 ? "url(#glow)" : "none"}
            initial={{ d: `M -10,${yBase} C 30,${yBase - 15} 70,${yBase + 15} 110,${yBase}` }}
            animate={shouldReduceMotion ? {} : {
              d: [
                `M -10,${yBase} C 20,${yBase - 15} 50,${yBase + 15} 80,${yBase - 5} 110,${yBase}`,
                `M -10,${yBase} C 30,${yBase + 10} 60,${yBase - 20} 90,${yBase + 10} 110,${yBase}`,
                `M -10,${yBase} C 20,${yBase - 15} 50,${yBase + 15} 80,${yBase - 5} 110,${yBase}`
              ]
            }}
            transition={{
              duration: 12 + (i % 5), // Varied duration
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        );
      })}
    </svg>
  );
}