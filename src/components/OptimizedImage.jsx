export default function OptimizedImage({
  src,
  webp,
  avif,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 90vw",
  loading = "lazy",
  decoding = "async",
  placeholderColor = "bg-gray-200",
  ...props
}) {
  // If no modern formats provided, fall back to standard img
  if (!webp && !avif) {
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