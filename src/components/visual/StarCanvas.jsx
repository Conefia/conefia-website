import React, { useEffect, useRef } from 'react';

// Seeded pseudo-random number generator for stable star positions across renders
function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function StarCanvas({ count = 200 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rand = seededRandom(42);

    // Pre-compute star data once
    const stars = Array.from({ length: count }, () => ({
      x: rand(),
      y: rand(),
      size: rand() * 1.8 + 0.3,
      opacity: rand() * 0.55 + 0.2,
      twinkle: rand() > 0.92,
    }));

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const star of stars) {
        const px = star.x * w;
        const py = star.y * h;

        ctx.globalAlpha = star.opacity * 0.8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, star.size / 2, 0, Math.PI * 2);
        ctx.fill();

        if (star.twinkle) {
          // Draw 4-point cross glow for twinkle stars
          const glow = star.size * 1.5;
          ctx.globalAlpha = star.opacity * 0.35;
          ctx.strokeStyle = 'rgba(219,254,1,0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px, py - glow * 3);
          ctx.lineTo(px, py + glow * 3);
          ctx.moveTo(px - glow * 3, py);
          ctx.lineTo(px + glow * 3, py);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || window.innerHeight;
      draw();
    }

    resize();

    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(resize)
      : null;
    if (ro && canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      if (ro) ro.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: 'block' }}
    />
  );
}