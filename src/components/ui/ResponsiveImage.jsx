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
  // Strip existing ?w= and &w= so we can inject our own
  const base = src.replace(/[?&]w=\d+/, '').replace(/\?&/, '?');
  const separator = base.includes('?') ? '&' : '?';
  // Preserve quality param if present
  const hasQ = /[?&]q=/.test(base);
  return UNSPLASH_WIDTHS
    .map(w => `${base}${separator}w=${w}${hasQ ? '' : '&q=75'} ${w}w`)
    .join(', ');
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

  const srcset = isUnsplash(src) ? buildUnsplashSrcSet(src) : undefined;

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