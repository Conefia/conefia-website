import { useState, useEffect } from 'react';

/**
 * Shared mobile breakpoint hook.
 * Replaces the 7+ inline useState/useEffect isMobile pairs scattered across components.
 * Uses a single resize listener, SSR-safe (defaults to false on server).
 */
export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    // Use passive listener — no need to call preventDefault, saves work on mobile
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}