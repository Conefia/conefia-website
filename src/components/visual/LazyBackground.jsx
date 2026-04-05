import { useEffect, useRef, useState } from 'react';

export default function LazyBackground({ 
  children, 
  backgroundImage, 
  backgroundColor = 'bg-stone-950',
  className = '',
  threshold = 0.1
}) {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);

  const style = isLoaded && backgroundImage ? { backgroundImage } : {};

  return (
    <div
      ref={containerRef}
      className={`${backgroundColor} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}