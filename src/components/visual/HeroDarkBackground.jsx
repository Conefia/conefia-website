import React from 'react';
import ContourBackground from './ContourBackground';

// Shared dark hero background: gradient base + accent blobs + contour lines + star dust + vignette
// Matches the home page hero design exactly.
export default function HeroDarkBackground({ isMobile = false, className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#1a1f2e]" />

      {/* Accent gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#DBFE01]/10 via-[#c5e000]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />

      {/* Contour lines */}
      <ContourBackground className="opacity-60" isMobile={isMobile} />

      {/* Star Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(300)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 2 + 0.3;
          const opacity = Math.random() * 0.6 + 0.2;
          const isTwinkle = Math.random() > 0.92;

          if (isTwinkle) {
            const twinkleSize = Math.random() * 3 + 2;
            return (
              <div
                key={`star-${i}`}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, width: `${twinkleSize}px`, height: `${twinkleSize}px` }}>
                <div
                  className="absolute bg-white rounded-full"
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: opacity * 1.2,
                    boxShadow: `
                      0 0 ${twinkleSize * 2}px ${twinkleSize}px rgba(219, 254, 1, ${opacity * 0.6}),
                      0 ${-twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                      0 ${twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                      ${-twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                      ${twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4})
                    `
                  }} />
              </div>
            );
          }

          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity * 0.8,
                boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
              }} />
          );
        })}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)' }} />
    </div>
  );
}