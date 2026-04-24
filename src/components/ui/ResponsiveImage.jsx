/**
 * ResponsiveImage — drop-in replacement for <img> that adds srcset + sizes
 * for Unsplash images (which support ?w= and &q= params) and falls back
 * gracefully for other image hosts.
 *
 * Usage:
 *   <ResponsiveImage
 *     src="https://images.unsplash.com/photo-xxx?w=900&q=80"
 *     alt="description"
 *     sizes="(max-width: 768px) 100vw, 50vw"   ← tell browser how wide the image renders
 *     className="w-full h-full object-cover"
 *     loading="lazy"      // or "eager" for LCP images
 *     fetchpriority="high" // for above-the-fold images
 *   />
 */

import React from 'react';

const UNSPLASH_WIDTHS = [400, 640, 900, 1200, 1600];

function buildUnsplashSrcSet(src) {
  // Parse the URL properly to avoid mangling query strings
  try {
    const url = new URL(src);
    // Remove any existing width param we'll override
    url.searchParams.delete('w');
    // Quality: 75 is visually lossless at display sizes, smaller file than 80
    if (!url.searchParams.has('q')) {
      url.searchParams.set('q', '75');
    }
    // auto=format → Unsplash/Fastly serves WebP/AVIF based on Accept header
    // compress → applies Fastly's additional compression pass
    // fit=crop → keeps aspect ratio without letterboxing
    url.searchParams.set('auto', 'format,compress');
    url.searchParams.set('fit', 'crop');
    return UNSPLASH_WIDTHS
      .map(w => {
        url.searchParams.set('w', String(w));
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  } catch {
    // Fallback: return src as-is if URL parsing fails
    return undefined;
  }
}

function isUnsplash(src) {
  return typeof src === 'string' && src.includes('images.unsplash.com');
}

export default function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  className = '',
  loading = 'lazy',
  fetchpriority,
  width,
  height,
  style,
  decoding = 'async',
  ...rest
}) {
  if (!src) return null;

  const srcset = isUnsplash(src) ? (buildUnsplashSrcSet(src) || undefined) : undefined;

  return (
    <img
      src={src}
      srcSet={srcset}
      sizes={srcset ? sizes : undefined}
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchpriority}
      width={width}
      height={height}
      style={style}
      decoding={decoding}
      {...rest}
    />
  );
}