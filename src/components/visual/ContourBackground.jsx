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
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(219, 254, 1, 0)" />
          <stop offset="20%" stopColor="rgba(219, 254, 1, 0.1)" />
          <stop offset="50%" stopColor="rgba(219, 254, 1, 0.4)" />
          <stop offset="80%" stopColor="rgba(219, 254, 1, 0.1)" />
          <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Primary flow lines */}
      {[...Array(25)].map((_, i) => {
        // Create a flowing river/topographic effect
        const yBase = i * 4; // Spread vertically
        const width = 0.1 + (i % 3 === 0 ? 0.2 : 0); // Varying thickness
        
        return (
          <motion.path
            key={`primary-${i}`}
            // Initial path definition
            d={`M -20,${yBase + 10} C 20,${yBase - 10} 50,${yBase + 20} 120,${yBase}`}
            stroke="url(#lineGradient)"
            strokeWidth={width}
            fill="none"
            opacity={0.4 + (i % 5 === 0 ? 0.3 : 0)}
            filter={i % 5 === 0 ? "url(#glow)" : "none"}
            animate={shouldReduceMotion ? {} : {
              d: [
                `M -20,${yBase + 10} C 20,${yBase - 10} 50,${yBase + 20} 120,${yBase}`,
                `M -20,${yBase + 15} C 30,${yBase} 60,${yBase + 25} 120,${yBase + 5}`,
                `M -20,${yBase + 10} C 20,${yBase - 10} 50,${yBase + 20} 120,${yBase}`,
              ]
            }}
            transition={{
              duration: 15 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        );
      })}

      {/* Cross-current lines for complexity */}
      {[...Array(15)].map((_, i) => {
        const xBase = i * 7;
        return (
          <motion.path
            key={`secondary-${i}`}
            d={`M ${xBase},120 C ${xBase + 20},80 ${xBase - 20},40 ${xBase + 10},-20`}
            stroke="url(#lineGradient)"
            strokeWidth="0.05"
            fill="none"
            opacity={0.2}
            animate={shouldReduceMotion ? {} : {
              d: [
                `M ${xBase},120 C ${xBase + 20},80 ${xBase - 20},40 ${xBase + 10},-20`,
                `M ${xBase + 5},120 C ${xBase + 15},85 ${xBase - 15},35 ${xBase + 15},-20`,
                `M ${xBase},120 C ${xBase + 20},80 ${xBase - 20},40 ${xBase + 10},-20`,
              ]
            }}
            transition={{
              duration: 20 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
          />
        );
      })}
    </svg>
  );
}