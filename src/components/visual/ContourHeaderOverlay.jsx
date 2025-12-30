import React from 'react';
import { motion } from 'framer-motion';

export default function ContourHeaderOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base dark navy + subtle lime vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 300px at 80% 50%, rgba(219,254,1,0.16), rgba(219,254,1,0.06) 35%, transparent 70%), linear-gradient(180deg, rgba(11,16,32,0.85), rgba(11,16,32,0.85))',
          mixBlendMode: 'screen',
        }}
      />

      {/* Contour lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hdrLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(219,254,1,0)" />
            <stop offset="50%" stopColor="rgba(219,254,1,0.3)" />
            <stop offset="100%" stopColor="rgba(219,254,1,0)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => {
          const ox = i * 0.8;
          const oy = i * 0.5;
          return (
            <path
              key={i}
              d={`M ${100 + ox} ${-10 + oy} C ${-20 + ox} ${80 + oy}, ${50 + ox} ${10 + oy}, ${110 + ox} ${110 + oy}`}
              stroke="url(#hdrLineGradient)"
              strokeWidth={i % 3 === 0 ? 0.4 : 0.2}
              fill="none"
              opacity={0.3 + (i % 3 === 0 ? 0.3 : 0)}
            />
          );
        })}
      </svg>

      {/* Star dust band */}
      <div className="absolute inset-0" style={{ transform: 'rotate(-25deg)' }}>
        {Array.from({ length: 300 }).map((_, i) => {
          const x = Math.random() * 100;
          const y = 60 + (Math.sin((x / 100) * Math.PI * 2) * 10) + (Math.random() - 0.5) * 10;
          const size = Math.random() * 1.3 + 0.2;
          const isBright = Math.random() > 0.86;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: isBright ? '#DBFE01' : 'rgba(219,254,1,0.9)',
                boxShadow: isBright ? '0 0 6px rgba(219,254,1,0.8)' : 'none',
                opacity: isBright ? 0.9 : 0.5,
              }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
            />
          );
        })}
      </div>
    </div>
  );
}