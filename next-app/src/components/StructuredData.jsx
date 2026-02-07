import React from 'react';

export default function StructuredData({ type = 'WebSite', data }) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
    />
  );
}

export function OrganizationStructuredData() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: "Conefia",
        url: "https://conefia.com",
        logo: "https://conefia.com/logo.png",
        description: "Founder Ops for Digital Businesses - Build, Launch, and Scale your digital business",
        sameAs: [
          "https://www.linkedin.com/company/conefia"
        ]
      }}
    />
  );
}

export function BreadcrumbStructuredData({ items }) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.path?.startsWith('http') ? item.path : `https://conefia.com${item.path || ''}`
  }));

  return (
    <StructuredData
      type="BreadcrumbList"
      data={{ itemListElement }}
    />
  );
}

export function ServiceStructuredData({ name, description, url }) {
  return (
    <StructuredData
      type="Service"
      data={{
        name,
        description,
        url: url?.startsWith('http') ? url : `https://conefia.com${url}`,
        provider: {
          "@type": "Organization",
          name: "Conefia",
          url: "https://conefia.com"
        },
        serviceType: "Founder Operations",
        areaServed: "Worldwide"
      }}
    />
  );
}