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
          title="Why brands trust us"
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
            { name: "Yotpo", url: "https://cdn.brandfetch.io/idywQ6OCNo/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1684253482903", wide: true },
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
              question: "What do you mean by 'Shopify Growth System'?",
              answer: "It means your storefront, conversion journey, retention, creative, content, and reporting are working together — not as separate tactics."
            },
            {
              question: "Can you help if we are still early and do not have the store live yet?",
              answer: "Yes. If you are ready to launch properly, we can build the Shopify foundation as part of the package — including store structure, content, tracking, and growth setup — so you do not scale on top of weak foundations."
            },
            {
              question: "Do you only help with CRO?",
              answer: "No. CRO is one part of the system. We also work on store build, retention flows, ad creative, video editing, SEO content, landing pages, and campaign optimization."
            },
            {
              question: "Do you create ad creatives too?",
              answer: "Yes. We support post designs, static ad assets, campaign visuals, and short-form video edits so your channels have stronger creative to test."
            },
            {
              question: "Do you help with SEO and blogs?",
              answer: "Yes. We plan and create SEO-focused content and blog content to support organic growth and reduce overdependence on paid."
            },
            {
              question: "Do you manage multiple channels or just one?",
              answer: "We support coordinated execution across search, social, email, landing pages, and reporting."
            },
            {
              question: "What if we already have an agency or freelancers?",
              answer: "That is common. We can plug into the setup and bring more structure, accountability, and clarity to the backlog."
            },
            {
              question: "How do you prevent random scope drift?",
              answer: "We lock the highest-priority work by Week 2 and use weekly demos plus stage gates to keep execution clear."
            },
            {
              question: "What happens after the sprint?",
              answer: "We can continue with monthly optimization across conversion, creative refreshes, retention, SEO content, and campaign efficiency."
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