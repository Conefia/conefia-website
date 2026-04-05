// Mobile Optimization Best Practices for Solution Pages
// This guide ensures fast UX on mobile devices

export const mobileOptimizations = {
  // Image responsive sizes - mobile-first approach
  imageResponsiveSizes: {
    hero: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw",
    section: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw",
    small: "(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
  },

  // Responsive image widths for srcset generation
  // Covers mobile (320-640px) and desktop (960-1280px)
  responsiveWidths: [320, 640, 960, 1280],

  // Lazy loading strategy
  lazyLoadingStrategy: {
    // Load above-the-fold images eagerly
    aboveTheFold: "eager",
    // Load below-the-fold images lazily
    belowTheFold: "lazy"
  },

  // Container padding for mobile
  mobilePadding: {
    small: "px-3 sm:px-4 md:px-6",
    medium: "px-4 sm:px-6 md:px-8",
    large: "px-4 sm:px-6 lg:px-8"
  },

  // Font sizes mobile optimized
  mobileFontSizes: {
    heading: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    subheading: "text-base sm:text-lg md:text-xl",
    body: "text-sm sm:text-base md:text-lg"
  },

  // Spacing mobile optimized
  mobileSpacing: {
    compact: "gap-2 sm:gap-3 md:gap-4",
    normal: "gap-3 sm:gap-4 md:gap-6",
    loose: "gap-4 sm:gap-6 md:gap-8"
  }
};

export default function MobileOptimizationGuide() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
      <h3 className="font-bold text-blue-900 mb-2">Mobile Optimization Tips</h3>
      <ul className="text-blue-700 space-y-1">
        <li>✓ srcset + sizes for responsive image delivery (320-1280px)</li>
        <li>✓ Mobile devices receive 320-640px images (not full desktop)</li>
        <li>✓ Lazy loading enabled for below-the-fold content</li>
        <li>✓ WebP/AVIF formats for 25-50% smaller files</li>
        <li>✓ Responsive typography and touch-friendly spacing (44x44px)</li>
      </ul>
    </div>
  );
}