import React, { useEffect } from 'react';

export default function Seo({ title, description, canonical }) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | Conefia` : 'Conefia - Founder Ops for Digital Businesses';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Validate, build, launch, and grow your digital business with Conefia. Your all-in-one partner for Founder Ops.';

    // Update canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonical.startsWith('http') 
        ? canonical 
        : window.location.origin + canonical;
    }
  }, [title, description, canonical]);

  return null;
}