import React, { useEffect } from 'react';

export default function Seo({ title, description }) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | Conefia` : 'One Team for Your Growth | Clinic, Founder, DTC, Accelerator | Conefia';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Conefia is one team that owns product, design, and growth. For clinic owners, founders, DTC brands, and accelerators. 8–16 weeks to launch and traction.';
  }, [title, description]);

  return null;
}