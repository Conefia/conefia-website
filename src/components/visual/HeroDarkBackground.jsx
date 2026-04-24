import React, { useMemo } from 'react';
import ContourBackground from './ContourBackground';

// Pre-generate star data once per mount — avoids re-generating Math.random() on every render
function generateStars(count) {
  return Array.from({ length: count }, (_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const isTwinkle = Math.random() > 0.92;
    if (isTwinkle) {
      const size = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.6 + 0.2;
      return { id: i, type: 'twinkle', x, y, size, opacity };
    }
    return {
      id: i, type: 'dot',
      x, y,
      size: Math.random() * 2 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
    };
  });
}

export default function HeroDarkBackground({ isMobile = false, className = '' }) {
  // Memoize stars so they're generated once and stable across renders
  const stars = useMemo(() => generateStars(isMobile ? 80 : 300), [isMobile]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#1a1f2e]" />

      {/* Accent gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#DBFE01]/10 via-[#c5e000]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />

      {/* Contour lines */}
      <ContourBackground className="opacity-60" isMobile={isMobile} />

      {/* Star Dust - memoized, reduced count on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => {
          if (star.type === 'twinkle') {
            return (
              <div
                key={`star-${star.id}`}
                className="absolute"
                style={{ left: `${star.x}%`, top: `${star.y}%`, width: `${star.size}px`, height: `${star.size}px` }}>
                <div
                  className="absolute bg-white rounded-full"
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: star.opacity * 1.2,
                    boxShadow: `
                      0 0 ${star.size * 2}px ${star.size}px rgba(219, 254, 1, ${star.opacity * 0.6}),
                      0 ${-star.size * 4}px ${star.size * 2}px 0px rgba(219, 254, 1, ${star.opacity * 0.4}),
                      0 ${star.size * 4}px ${star.size * 2}px 0px rgba(219, 254, 1, ${star.opacity * 0.4}),
                      ${-star.size * 4}px 0 ${star.size * 2}px 0px rgba(219, 254, 1, ${star.opacity * 0.4}),
                      ${star.size * 4}px 0 ${star.size * 2}px 0px rgba(219, 254, 1, ${star.opacity * 0.4})
                    `
                  }} />
              </div>
            );
          }
          return (
            <div
              key={`star-${star.id}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity * 0.8,
                boxShadow: `0 0 ${star.size}px rgba(255, 255, 255, ${star.opacity * 0.3})`
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