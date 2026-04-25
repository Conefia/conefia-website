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

// Responsive breakpoints — covers mobile (400), tablet (640), desktop (900/1200/1600)
const UNSPLASH_WIDTHS = [400, 640, 900, 1200, 1600];

function buildUnsplashSrcSet(src) {
  try {
    const url = new URL(src);
    url.searchParams.delete('w');
    // q=75 is visually lossless at display sizes with smaller payload than q=80
    if (!url.searchParams.has('q')) {
      url.searchParams.set('q', '75');
    }
    // auto=format,compress → Unsplash/Fastly CDN delivers WebP/AVIF based on
    // the browser's Accept header — no extra work needed on our side.
    // Fastly also applies Brotli compression at the CDN edge for text assets.
    url.searchParams.set('auto', 'format,compress');
    url.searchParams.set('fit', 'crop');
    return UNSPLASH_WIDTHS
      .map(w => {
        url.searchParams.set('w', String(w));
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  } catch {
    return undefined;
  }
}

function buildSupabaseSrcSet(src) {
  // Supabase Storage CDN (via supabase.co) supports Imgix-compatible params.
  // We append width descriptors so the browser selects the best variant.
  try {
    const url = new URL(src);
    // Only apply to public storage URLs
    if (!src.includes('/storage/v1/object/public/')) return undefined;
    return UNSPLASH_WIDTHS
      .map(w => {
        const u = new URL(url.toString());
        u.searchParams.set('width', String(w));
        return `${u.toString()} ${w}w`;
      })
      .join(', ');
  } catch {
    return undefined;
  }
}

function isUnsplash(src) {
  return typeof src === 'string' && src.includes('images.unsplash.com');
}

function isSupabase(src) {
  return typeof src === 'string' && src.includes('supabase.co');
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

  let srcset;
  if (isUnsplash(src)) {
    srcset = buildUnsplashSrcSet(src) || undefined;
  } else if (isSupabase(src)) {
    srcset = buildSupabaseSrcSet(src) || undefined;
  }

  // crossOrigin needed for CDN assets to benefit from CORS caching
  const crossOrigin = (isUnsplash(src) || isSupabase(src)) ? 'anonymous' : undefined;

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
      crossOrigin={crossOrigin}
      {...rest}
    />
  );
}