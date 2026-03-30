import React, { Suspense } from 'react';
import SeoLandingPage, { SolutionHero } from '@/components/solutions/SeoLandingPage';
import { HeroVisual } from '@/components/solutions/dtc-growth/DtcGrowthVisuals';
import ShopifyMetricsVisual from '@/components/solutions/shopify-growth/ShopifyMetricsVisual';
import Seo from '@/components/Seo';
import { SectionSkeleton, DarkSectionSkeleton } from '@/components/loading/SkeletonLoader';

// Lazy load below-the-fold components
const SolutionMetrics = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionMetrics })));
const SolutionProblem = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionProblem })));
const SolutionDetails = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionDetails })));
const SolutionProcess = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionProcess })));
const SolutionOutcomes = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionOutcomes })));
const SolutionProof = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionProof })));
const SolutionFAQ = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionFAQ })));
const SolutionFinalCta = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionFinalCta })));

import ShopifyFitCheck from '@/components/solutions/shopify-growth/ShopifyFitCheck';
import ShopifySolutionVisual from '@/components/solutions/shopify-growth/ShopifySolutionVisual';

// Lazy load visuals
const OutcomesVisual = React.lazy(() => import('@/components/solutions/dtc-growth/DtcGrowthVisuals').then(m => ({ default: m.OutcomesVisual })));
const ProblemVisual = React.lazy(() => import('@/components/solutions/dtc-growth/DtcGrowthVisuals').then(m => ({ default: m.ProblemVisual })));
const SolutionVisual = React.lazy(() => import('@/components/solutions/dtc-growth/DtcGrowthVisuals').then(m => ({ default: m.SolutionVisual })));

export default function ShopifyGrowthSystem() {
  return (
    <SeoLandingPage>
      <Seo 
        title="DTC Growth: Shopify CRO + Paid Ads | Conefia"
        description="DTC brand growth marketing services: Shopify CRO, paid ads management, retention flows, and profit-first tracking to cut CAC."
        canonical="/solutions/shopify-growth-system"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/shopify-growth-system/#service",
          "name": "Shopify Growth System",
          "serviceType": "Shopify growth and conversion optimization",
          "provider": { "@id": "https://conefia.com/#organization" },
          "url": "https://conefia.com/shopify-growth-system",
          "areaServed": "Worldwide",
          "offers": { "@type": "Offer", "url": "https://conefia.com/book", "price": "0", "priceCurrency": "USD" }
        })}}
      />
      <SolutionHero 
        breadcrumbLabel="Shopify Growth System"
        title="Build and Grow Your Shopify Store Profitably"
        subtitle="We help Shopify brands build the right foundation or fix what is holding growth back — from conversion and retention to creative, SEO, and paid performance."
        primaryCta="Get Your Growth Plan"
        secondaryCta="See the Sprint"
        microCopy="Free 30-min roadmap call. Leave with clear priorities, timeline, and next steps."
        trustChips={["Scope locked by Week 2", "Weekly demos", "Creative + CRO", "Retention + reporting"]}
        layout="split"
        visual={<HeroVisual />}
      />
      
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <SolutionMetrics 
          title={<>Outcomes that <span className="gradient-text">actually matter</span></>}
          visual={<ShopifyMetricsVisual />}
          items={[]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProblem 
          title="The Problem: You're spending — but profit isn't scaling."
          quote="Most Shopify brands do not struggle because they lack traffic. They struggle because the system behind growth is weak."
          items={[
            "Traffic gets expensive when the store leaks conversion",
            "Creative gets stale, and new ads are slow to ship",
            "Email/SMS isn't driving repeat purchases",
            "SEO is underused, so paid has to do too much work",
            "Search, social, landing pages, and reporting are disconnected",
            "If you are early, the risk is building the wrong setup and paying for it later"
          ]}
          visual={<ProblemVisual />}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionDetails 
          title="Build the system behind profitable growth."
          description="We do not just 'do marketing.' We connect the pieces that actually drive ecommerce growth - storefront, CRO, retention, creative, SEO, and campaign execution."
          primaryCta="Get Your Growth Plan"
          riskReducer="Scope locks by Week 2. If it is not clear, we fix clarity first."
          features={[
            "A Shopify growth roadmap you can trust",
            "Store build or improvement plan based on your stage",
            "CRO fixes across PDPs, collections, cart, checkout, and mobile",
            "Ad creative support: post designs, statics, and short-form video edits",
            "Email + SMS lifecycle flows",
            "SEO and blog content planning",
            "Multi-channel campaign optimization",
            "Weekly demos and stage gates"
          ]}
          visual={<ShopifySolutionVisual />}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProcess 
          steps={[
            {
              title: "Audit (Week 1–2)",
              description: "Deep dive into your funnel, offer structure, tracking setup, and creative performance."
            },
            {
              title: "Build (Weeks 3–6)",
              description: "Implementing CRO fixes, site speed improvements, high-converting landing pages, and essential email flows."
            },
            {
              title: "Launch (Weeks 7–8)",
              description: "Rolling out the new testing system and establishing a consistent reporting cadence."
            },
            {
              title: "Scale (Monthly)",
              description: "Ongoing experiments, rapid creative iteration, and strategies to lift LTV."
            }
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionOutcomes 
          title={<>Expected <span className="text-[#DBFE01] font-bold" style={{WebkitTextFillColor: '#DBFE01'}}>Results</span></>}
          items={[
            "Predictable, scalable customer acquisition",
            "Higher average order value",
            "Increased repeat purchase rate",
            "Clear attribution and profitability visibility"
          ]}
          visual={null}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProof 
          title="Why brands trust us"
          items={[
            "No long-term lock-in contracts",
            "Weekly strategy syncs",
            "Direct access to your growth team"
          ]}
          testimonials={[
            { quote: "They fixed our conversion rate in month one. The ad spend finally makes sense.", author: "Sarah J.", role: "Founder, Skincare Brand" },
            { quote: "Finally a team that looks at the whole picture, not just ROAS.", author: "Mike T.", role: "CMO, Apparel Co" },
            { quote: "Our CAC dropped by 20% in the first 6 weeks.", author: "Jessica L.", role: "Founder, Home Goods" },
            { quote: "The email flows they built are generating 30% of our revenue now.", author: "David R.", role: "Marketing Director, Supplement Brand" },
            { quote: "Profit-first tracking changed how we spend. We're finally scaling profitably.", author: "Tom B.", role: "CEO, Footwear Brand" },
            { quote: "No more vanity metrics. Just real revenue growth.", author: "Amanda K.", role: "Founder, Jewelry Line" },
            { quote: "The landing pages convert like crazy. Best investment we made.", author: "Chris P.", role: "Growth Lead, Tech Accessories" },
            { quote: "They act like owners. The strategy syncs are the highlight of my week.", author: "Rachel M.", role: "Founder, Pet Brand" },
            { quote: "We scaled from $50k to $200k/mo with their help.", author: "James H.", role: "Founder, Coffee Brand" },
            { quote: "Detailed, data-driven, and creative. The perfect mix.", author: "Emma S.", role: "CMO, Luxury Brand" }
          ]}
          useCases={["Fashion & Apparel", "Health & Wellness", "Beauty & Cosmetics"]}
          useCasesTitle="Industries We Scale"
        />
      </Suspense>

      <ShopifyFitCheck />

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionFAQ 
          items={[
            {
              question: "Do you handle ad creative?",
              answer: "Yes, we provide creative strategy, briefs, and can handle production depending on the package."
            },
            {
              question: "What platforms do you manage?",
              answer: "Primarily Meta (Facebook/Instagram), Google (Search/Shopping), and TikTok. We focus on where your customers are."
            },
            {
              question: "How does the audit work?",
              answer: "It's a comprehensive review of your ad account, store performance, and email setup to identify low-hanging fruit and long-term opportunities."
            },
            {
              question: "What is your pricing model?",
              answer: "We work on a flat monthly retainer based on the scope of services. No % of ad spend incentives that encourage waste."
            }
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionFinalCta 
          title="Want predictable growth — not random spikes?"
          primaryCta="Get My Growth Audit"
          secondaryCta="See the Package"
        />
      </Suspense>
    </SeoLandingPage>
  );
}