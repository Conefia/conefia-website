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
      <svg className="absolute inset-0 w-full h-full opacity-70" style={{ transform: 'rotate(-25deg) scale(1.5)', transformOrigin: 'center' }}>
        <defs>
          <linearGradient id="hdrLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(219,254,1,0)" />
            <stop offset="45%" stopColor="rgba(219,254,1,0.35)" />
            <stop offset="100%" stopColor="rgba(219,254,1,0)" />
          </linearGradient>
          <filter id="hdrGlow">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 60 }).map((_, i) => {
          const yOffset = i * 22 - 120;
          const amp = 36 + Math.sin(i * 0.25) * 18;
          const freq = 0.01 + (i % 4) * 0.001;
          const phase = i * 0.2;
          return (
            <path
              key={i}
              d={`M -200,${yOffset} ${Array.from({ length: 45 }, (_, x) => {
                const xPos = x * 40 - 100;
                const t = (xPos + 800) / 1600;
                const stream = Math.sin(t * Math.PI * 1.2 - Math.PI/2) * (amp * 0.55);
                const meander = Math.sin(t * Math.PI * 2) * (amp * 0.22);
                const yPos = yOffset + stream + meander + Math.sin(xPos * freq + phase) * amp + Math.cos(xPos * freq * 0.6) * (amp * 0.26);
                return `L ${xPos},${yPos}`;
              }).join(' ')}`}
              stroke="url(#hdrLineGradient)"
              strokeWidth={i % 6 === 0 ? 1 : 0.5}
              fill="none"
              opacity={0.25 + (i % 6 === 0 ? 0.25 : 0)}
              filter={i % 6 === 0 ? 'url(#hdrGlow)' : 'none'}
            />
          );
        })}
      </svg>

      {/* Star dust band */}
      <div className="absolute inset-0" style={{ transform: 'rotate(-25deg)' }}>
        {Array.from({ length: 170 }).map((_, i) => {
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