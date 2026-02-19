import React from 'react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png";

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
  const graphData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://conefia.com/#organization",
        "name": "CONEFIA",
        "url": "https://conefia.com/",
        "logo": {
          "@type": "ImageObject",
          "url": LOGO_URL
        },
        "sameAs": [
          "https://www.linkedin.com/company/conefia",
          "https://www.facebook.com/conefia.tech",
          "https://www.instagram.com/conefia.tech"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "info@conefia.com",
            "availableLanguage": ["en"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://conefia.com/#website",
        "url": "https://conefia.com/",
        "name": "CONEFIA",
        "publisher": { "@id": "https://conefia.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://conefia.com/blog/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
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

export function WebPageStructuredData({ url, name }) {
  const fullUrl = url?.startsWith('http') ? url : `https://conefia.com${url}`;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        "url": fullUrl,
        "name": name,
        "isPartOf": { "@id": "https://conefia.com/#website" },
        "about": { "@id": "https://conefia.com/#organization" }
      })}}
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