import React, { Suspense } from 'react';
import SeoLandingPage, { SolutionHero, RoadmapCallSection } from '@/components/solutions/SeoLandingPage';
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
import ShopifyUseCases from '@/components/solutions/shopify-growth/ShopifyUseCases';
const SolutionFinalCta = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionFinalCta })));

import ShopifyFitCheck from '@/components/solutions/shopify-growth/ShopifyFitCheck';
import ShopifyGrowthPlanVisual from '@/components/solutions/shopify-growth/ShopifyGrowthPlanVisual';
import ShopifySolutionVisual from '@/components/solutions/shopify-growth/ShopifySolutionVisual';

// Lazy load visuals
const OutcomesVisual = React.lazy(() => import('@/components/solutions/dtc-growth/DtcGrowthVisuals').then(m => ({ default: m.OutcomesVisual })));
const ProblemVisual = React.lazy(() => import('@/components/solutions/dtc-growth/DtcGrowthVisuals').then(m => ({ default: m.ProblemVisual })));
const SolutionVisual = React.lazy(() => import('@/components/solutions/dtc-growth/DtcGrowthVisuals').then(m => ({ default: m.SolutionVisual })));

export default function ShopifyGrowthSystem() {
  return (
    <SeoLandingPage>
      <Seo 
        title="Shopify Growth System | CRO, Retention & Ads | Conefia"
        description="Build or grow your Shopify store with stronger conversion, retention, creative, SEO, and ad performance. Get your growth plan."
        canonical="/solutions/shopify-growth-system"
        keywords="grow Shopify store, profitable Shopify growth, Shopify CRO agency, Shopify retention flows, Shopify ad creative, Shopify blog SEO, Shopify campaign optimization, ecommerce retention marketing, Shopify performance growth, Shopify growth roadmap"
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
      
      <ShopifyFitCheck />

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <SolutionMetrics 
          title={<>Outcomes that <span className="gradient-text">actually matter</span></>}
          visual={<ShopifyMetricsVisual />}
          items={[]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProblem 
          title="You are spending, but profit growth is NOT scaling."
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

      <RoadmapCallSection
        title="What you'll get in the 30-minute growth roadmap call"
        description="This is not a generic sales chat. We'll look at your Shopify growth engine like a team preparing to build or improve it."
        items={[
          "Identify the biggest gaps in conversion, retention, creative, and tracking",
          "Confirm whether you need a store build, a growth sprint, or both",
          "Prioritize what needs fixing now versus later",
          "Recommend the right mix across CRO, retention, SEO, creative, and campaign optimization",
          "Map your 8-12 week sprint",
          "Flag risks early in offer clarity, landing pages, campaign efficiency, and reporting"
        ]}
        primaryCta="Get Your Growth Plan"
      />

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProcess
          title="Build → Launch → Scale"
          note="Every phase has a stage gate, so you always know what is happening."
          imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
          imageAlt="Shopify e-commerce store on laptop screen"
          imageOverlayTitle="From store launch to profitable scale"
          imageOverlayDesc="A structured sprint so every phase moves your Shopify revenue forward."
          steps={[
            {
              title: "Validate (Weeks 1–2)",
              description: "Audit the store or define the right launch foundation. Lock priorities and success metrics."
            },
            {
              title: "Build (Weeks 3–8)",
              description: "Ship store improvements, creative assets, lifecycle flows, content, and tracking fixes."
            },
            {
              title: "Launch (Weeks 9–10)",
              description: "Roll out the new store or updated growth system. Align campaigns and reporting."
            },
            {
              title: "Scale (Monthly)",
              description: "Keep improving offers, creative, retention, SEO, and paid performance."
            }
          ]}
        />
      </Suspense>

      <ShopifyUseCases />

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProof 
          badge="PROFIT-FIRST GROWTH"
          title="Why brands trust us"
          statTitle="8–12 weeks to stronger growth"
          statDesc="Better conversion. Stronger retention. Clearer reporting."
          techStackTitle="Tools we grow Shopify brands with"
          techStackDesc="Proven stack for CRO, retention, creative, analytics, and paid performance."
          techStackLogos={[
            { name: "Shopify", url: "https://logo.svgcdn.com/logos/shopify.svg", wide: true },
            { name: "Google Merchant Center", url: "https://static.cdnlogo.com/logos/g/38/google-merchant-center.svg", wide: 'xl' },
            { name: "Klaviyo", url: "https://companieslogo.com/img/orig/KVYO_BIG-7b916c87.svg?download=true&t=1720244492", wide: true },
            { name: "Google Analytics", url: "https://logo.svgcdn.com/logos/google-analytics.svg", wide: true },
            { name: "Google Tag Manager", url: "https://logo.svgcdn.com/logos/google-tag-manager.svg", wide: true },
            { name: "Google Ads", url: "https://logo.svgcdn.com/logos/google-ads.svg", wide: true },
            { name: "Meta", url: "https://logo.svgcdn.com/logos/meta.svg", wide: true },
            { name: "TikTok", url: "https://logo.svgcdn.com/logos/tiktok.svg", wide: true },
            { name: "YouTube", url: "https://logo.svgcdn.com/logos/youtube.svg", wide: true },
            { name: "Hotjar", url: "https://logo.svgcdn.com/logos/hotjar.svg", wide: true },
            { name: "Canva", url: "https://cdn.brandfetch.io/id9mVQlyB1/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1725863496299", wide: true },
            { name: "CapCut", url: "https://cdn.brandfetch.io/idUmqKFgE3/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772513764446", wide: true },
            { name: "Yotpo", url: "https://cdn.brandfetch.io/ideFeeg1AP/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667644024134", wide: true },
            { name: "Gorgias", url: "https://cdn.brandfetch.io/idtDRkJ5U2/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1690782642250", wide: true },
            { name: "Attentive", url: "https://logotyp.us/file/attentive.svg", wide: true },
            { name: "Triple Whale", url: "https://cdn.brandfetch.io/id4RWiZqcZ/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1702661442704", wide: true }
          ]}
          useCasesTitle="Industries We Scale"
          imageUrl="https://media.base44.com/images/public/695311d1426e4dadf87a8d53/a87877946_generated_image.png"
          imageAlt="Shopify growth dashboard with ROAS, CVR, and revenue metrics"
          whyBuildItems={[
            { num: "01", title: "Ship weekly, not someday", desc: "Store updates, creatives, flows, and landing pages shipped in a steady weekly rhythm.", color: "from-[#DBFE01]/20 to-[#DBFE01]/5", border: "border-[#DBFE01]/30" },
            { num: "02", title: "Creatives built for performance", desc: "Fresh ads posts, static designs, and video edits that keep testing moving and fatigue down.", color: "from-blue-50 to-indigo-50/30", border: "border-blue-200/50" },
            { num: "03", title: "One system, not siloed tactics", desc: "CRO, retention, SEO, and campaigns work together — so growth compounds instead of leaking.", color: "from-emerald-50 to-teal-50/30", border: "border-emerald-200/50" },
            { num: "04", title: "Know what is driving profit", desc: "Clear tracking and profit-first reporting so you can see what to scale and what to fix.", color: "from-purple-50 to-violet-50/30", border: "border-purple-200/50" }
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionFAQ 
          items={[
            {
              question: "Who is this for?",
              answer: "For brands that already have a Shopify store and want more profitable growth \u2014 or early-stage brands that want to build the right foundation before scaling."
            },
            {
              question: "What do you mean by \"Shopify Growth System\"?",
              answer: "It means your storefront, conversion journey, retention, creative, SEO, ads, and reporting all work together as one system."
            },
            {
              question: "What happens in the roadmap call?",
              answer: "We review your current setup, identify the biggest growth leaks, and map the highest-priority fixes for the next 8\u201312 weeks."
            },
            {
              question: "What makes this different from a typical marketing agency?",
              answer: "Most agencies focus on traffic or channels. We focus on the full path to growth \u2014 and help fix the system behind conversion, retention, and scale."
            },
            {
              question: "Can you help if we are still early and do not have the store live yet?",
              answer: "Yes. We can help build the Shopify foundation properly from the start \u2014 including store setup, content, tracking, and launch readiness."
            },
            {
              question: "Do you only help with CRO?",
              answer: "No. We improve the full growth system \u2014 from storefront and retention to creative, SEO, landing pages, and campaign performance."
            },
            {
              question: "Can you improve our store without a full rebuild?",
              answer: "Yes. Often the fastest gains come from improving the current journey before rebuilding anything."
            },
            {
              question: "How fast can we expect results?",
              answer: "That depends on your starting point, but many brands see early wins from fixing conversion leaks, improving retention, and sharpening campaign performance."
            },
            {
              question: "Can you work with our current store, apps, or team?",
              answer: "Usually, yes. We start by improving what is already in place and focus on the highest-impact fixes first."
            },
            {
              question: "Do you create content too?",
              answer: "Yes. We support blog content, landing page copy, SEO content, product messaging, and campaign content."
            },
            {
              question: "Do you also help with ad creative?",
              answer: "Yes. We create ad concepts, post designs, static assets, and short-form video edits for paid and organic channels."
            },
            {
              question: "Do you manage ads as well?",
              answer: "We support multi-channel campaign optimization across platforms like Google, Meta, and TikTok, with a focus on profitable growth."
            },
            {
              question: "What do you need from us to get started?",
              answer: "Usually access to your Shopify store, analytics, ad accounts, current tools, and one decision-maker who can keep the sprint moving."
            },
            {
              question: "Can you work alongside our internal team or current agency?",
              answer: "Yes. We can plug into your setup, sharpen priorities, and help move the growth backlog forward."
            },
            {
              question: "What happens after the sprint?",
              answer: "We can continue supporting growth through ongoing optimization across conversion, retention, creative, SEO, and campaign performance."
            }
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionFinalCta 
          title="Ready to build or grow your Shopify store with more control?"
          description="Whether you need a stronger store foundation or a smarter growth system, we can map the priorities behind profitable Shopify growth."
          primaryCta="Get My Growth Audit"
          secondaryCta="See the Package"
          visual={<ShopifyGrowthPlanVisual />}
        />
      </Suspense>
    </SeoLandingPage>
  );
}