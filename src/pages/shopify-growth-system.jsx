import React, { Suspense } from 'react';
import SeoLandingPage, { SolutionHero } from '@/components/solutions/SeoLandingPage';
import { HeroVisual } from '@/components/solutions/dtc-growth/DtcGrowthVisuals';
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
      <SolutionHero 
        title="Shopify Growth System"
        subtitle="Cut CAC. Stabilize ROAS. Lift conversion — profitably. If you're spending but margins aren't improving, you don't need 'more ads.' You need Shopify CRO + offer clarity + measurement that makes growth predictable."
        primaryCta="Get My Growth Audit"
        secondaryCta="See the Package"
        trustChips={["Shopify Experts", "Profit-First", "Data-Driven"]}
        layout="split"
        visual={<HeroVisual />}
      />
      
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <SolutionMetrics 
          title="Outcomes"
          visual={<OutcomesVisual />}
          items={[
            "↓10–25% — Lower CAC",
            "↑15–40% — More stable ROAS",
            "+10–25% — Higher conversion rate",
            "+10–30% — Higher AOV / revenue per visit"
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProblem 
          title="The Problem: You're spending — but profit isn't scaling."
          quote="We have great months and terrible months, and we don't know why."
          items={[
            "CAC rises and ROAS swings week to week",
            "Shopify conversion leaks (PDP/cart/checkout)",
            "Email/SMS isn't driving repeat purchases",
            "No single owner across ads → site → retention"
          ]}
          visual={<ProblemVisual />}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionDetails 
          title="The Solution: A growth system you can scale without guesswork."
          description="We align your acquisition, conversion, and retention into a single profit engine."
          primaryCta="Get My Growth Audit"
          features={[
            "Shopify conversion rate optimization agency execution (PDP → checkout)",
            "Shopify paid ads and marketing management (testing cadence + discipline)",
            "DTC retention strategy (email/SMS flows that actually sell)",
            "Profit-first tracking (CAC, MER, LTV, contribution margin)"
          ]}
          visual={<SolutionVisual />}
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
          title="Expected Results"
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