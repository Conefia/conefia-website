import React, { useEffect } from 'react';

export default function Seo({ title, description }) {
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
  }, [title, description]);

  return null;
}