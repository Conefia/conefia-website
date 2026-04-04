import React, { useEffect } from 'react';
import { OrganizationStructuredData, WebPageStructuredData } from './StructuredData';

export default function Seo({ title, description, canonical, keywords }) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title}` : 'Conefia | AI & Mobile App Development + Growth Partner';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Build and scale your digital venture faster. AI MVP & mobile app development plus growth marketing for founders, clinics, and Shopify brands. Free roadmap call.';

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

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
  }, [title, description, canonical, keywords]);

  return (
    <>
      <OrganizationStructuredData />
      {canonical && <WebPageStructuredData url={canonical} name={title || 'Conefia | AI & Mobile App Development + Growth Partner'} />}
    </>
  );
}