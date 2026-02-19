import React, { useEffect } from 'react';
import { CheckCircle2, Calendar, Clock, Video } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Book() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Seo 
        title="Book a Roadmap Call | Conefia"
        description="Schedule a free 30-minute roadmap call to discuss your digital venture. No commitment, just a conversation about what's possible."
        canonical="/book"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/book/#service",
          "name": "Free Roadmap Call",
          "serviceType": "Product roadmap call",
          "provider": { "@id": "https://conefia.com/#organization" },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Roadmap Call",
            "itemListElement": [{
              "@type": "Offer",
              "name": "Free Roadmap Call",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://conefia.com/book"
            }]
          }
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What happens on the roadmap call?",
              "acceptedAnswer": { "@type": "Answer", "text": "We discuss your goals, current state, constraints, and the fastest path to a shippable MVP or growth milestone. You leave with clear next steps and scope options." }
            },
            {
              "@type": "Question",
              "name": "Is the call really free?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. The roadmap call is free. If you decide to engage CONEFIA afterward, we'll propose a scope, timeline, and team." }
            },
            {
              "@type": "Question",
              "name": "Who is this call for?",
              "acceptedAnswer": { "@type": "Answer", "text": "Founders, clinic teams, and Shopify brands who want to build, relaunch, or grow a digital product with clear execution." }
            },
            {
              "@type": "Question",
              "name": "How should I prepare?",
              "acceptedAnswer": { "@type": "Answer", "text": "Bring your product link (or concept), key metrics (if any), and the outcomes you want in the next 30–90 days." }
            }
          ]
        })}}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-8">
        <Breadcrumbs items={[{ label: 'Book a Roadmap Call' }]} theme="light" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight drop-shadow-sm">
            Book a <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Roadmap Call</span>
          </h1>
          <p className="text-lg text-[#1a1a1a]/85 mb-8 max-w-2xl mx-auto font-medium">
            Let's discuss your idea and explore how we can help you build, launch, and scale your digital venture.
          </p>

          {/* What to expect */}
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-[#1a1a1a]/20 shadow-md hover:shadow-lg transition-shadow">
              <Clock className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
              <span className="text-[#1a1a1a] text-sm font-semibold">30 Minutes</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-[#1a1a1a]/20 shadow-md hover:shadow-lg transition-shadow">
              <Video className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
              <span className="text-[#1a1a1a] text-sm font-semibold">Video Call</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-[#1a1a1a]/20 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
              <span className="text-[#1a1a1a] text-sm font-semibold">No Commitment</span>
            </div>
          </div>
        </div>

        {/* Calendly embed */}
        <div className="bg-black rounded-3xl shadow-[0_20px_60px_rgba(26,26,26,0.15)] overflow-hidden border border-[#1a1a1a]/10">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yassen-eltayeb-conefia?background_color=000000&text_color=ffffff&primary_color=dbfe01"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Additional info */}
        <p className="text-center text-[#1a1a1a]/60 text-sm mt-8">
          Can't find a suitable time? <a href="mailto:info@conefia.com" className="text-[#1a1a1a] font-bold hover:underline">Email us</a> directly.
        </p>
      </div>
    </div>
  );
}