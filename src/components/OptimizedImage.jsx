// Helper to generate srcset from Unsplash URLs
function generateUnsplashSrcset(imageId, widths = [320, 640, 960, 1280]) {
  return widths
    .map(w => `https://images.unsplash.com/photo-${imageId}?w=${w}&q=80 ${w}w`)
    .join(", ");
}

export default function OptimizedImage({
  src,
  webp,
  avif,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw",
  loading = "lazy",
  decoding = "async",
  srcset = null,
  widths = [320, 640, 960, 1280],
  placeholderColor = "bg-gray-200",
  ...props
}) {
  // Generate srcset from Unsplash image ID if src is provided
  const finalSrcset = srcset || (src?.includes("unsplash") ? generateUnsplashSrcset(src.split("-")[src.split("-").length - 1]?.split("?")[0], widths) : null);

  // Standard img if no formats or srcset
  if (!webp && !avif && !finalSrcset) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    );
  }

  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" sizes={sizes} />}
      {webp && <source srcSet={webp} type="image/webp" sizes={sizes} />}
      <img
        src={src}
        srcSet={finalSrcset}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
}