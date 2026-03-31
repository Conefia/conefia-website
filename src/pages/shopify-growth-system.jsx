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

      <ShopifyFitCheck />

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