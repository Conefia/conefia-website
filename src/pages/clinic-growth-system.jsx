import React, { Suspense } from 'react';
import SeoLandingPage, { SolutionHero, RoadmapCallSection } from '@/components/solutions/SeoLandingPage';
import { HeroVisual } from '@/components/solutions/clinic-growth/ClinicGrowthVisuals';
import Seo from '@/components/Seo';
import { SectionSkeleton, DarkSectionSkeleton } from '@/components/loading/SkeletonLoader';
import ClinicFitCheck from '@/components/solutions/clinic-growth/ClinicFitCheck';
import ClinicOutcomesSection from '@/components/solutions/clinic-growth/ClinicOutcomesSection';
import ClinicContentCreativeSection from '@/components/solutions/clinic-growth/ClinicContentCreativeSection';
import ClinicUseCases from '@/components/solutions/clinic-growth/ClinicUseCases';

// Lazy load below-the-fold components
const SolutionMetrics = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionMetrics })));
const SolutionProblem = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionProblem })));
const SolutionDetails = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionDetails })));
const SolutionProcess = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionProcess })));
const SolutionOutcomes = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionOutcomes })));
const SolutionProof = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionProof })));
const SolutionFAQ = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionFAQ })));
const SolutionFinalCta = React.lazy(() => import('@/components/solutions/SeoLandingPage').then(m => ({ default: m.SolutionFinalCta })));

// Lazy load visuals and other components
const AttributionVisual = React.lazy(() => import('@/components/solutions/clinic-growth/ClinicGrowthVisuals').then(m => ({ default: m.AttributionVisual })));
const BrokenJourneyVisual = React.lazy(() => import('@/components/solutions/clinic-growth/ClinicGrowthVisuals').then(m => ({ default: m.BrokenJourneyVisual })));
const SolutionDashboardVisual = React.lazy(() => import('@/components/solutions/clinic-growth/ClinicGrowthVisuals').then(m => ({ default: m.SolutionDashboardVisual })));
const ProcessVisual = React.lazy(() => import('@/components/solutions/clinic-growth/ClinicGrowthVisuals').then(m => ({ default: m.ProcessVisual })));
const OutcomesVisual = React.lazy(() => import('@/components/solutions/clinic-growth/ClinicGrowthVisuals').then(m => ({ default: m.OutcomesVisual })));
const RoadmapPreviewVisual = React.lazy(() => import('@/components/solutions/clinic-growth/ClinicGrowthVisuals').then(m => ({ default: m.RoadmapPreviewVisual })));

export default function ClinicGrowthSystem() {
  return (
    <SeoLandingPage>
      <Seo 
        title="Clinic Growth: Digital Patient Engagement | Conefia"
        description="Digital patient engagement platform + clinic patient portal software + HIPAA growth marketing to book more patients. Get a roadmap."
        canonical="/solutions/clinic-growth-system"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/clinic-growth-system/#service",
          "name": "Clinic Growth System",
          "serviceType": "Digital patient engagement and clinic growth marketing",
          "provider": { "@id": "https://conefia.com/#organization" },
          "url": "https://conefia.com/clinic-growth-system",
          "areaServed": "Worldwide",
          "offers": { "@type": "Offer", "url": "https://conefia.com/book", "price": "0", "priceCurrency": "USD", "description": "Start with a free roadmap call" }
        })}}
      />
      <SolutionHero 
        breadcrumb="Clinic Growth System"
        title="Get More Patient Bookings in 8–12 Weeks"
        subtitle="We help clinics turn more searches, visits, and clicks into booked appointments. From local SEO and trust-building to landing pages, intake, booking, content, and ads — everything works together under one team."
        primaryCta="Get Clinic Growth Plan"
        secondaryCta="See Sprint"
        microCopy="Free 30-min roadmap call. Leave with clear priorities, timeline, and a practical plan."
        trustChips={[
          "HIPAA-aware workflows",
          "Weekly demos",
          "SEO + ads + creative",
          "Booking-first reporting"
        ]}
        layout="split"
        visual={<HeroVisual />}
      />
      
      <ClinicFitCheck />
      
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <ClinicOutcomesSection visual={<AttributionVisual />} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProblem 
          title="Patients are finding your clinic — but too many are not booking."
          subtitle="Patients check your Google listing, reviews, website, service pages, forms, and booking flow before they decide. If that journey feels slow, disconnected, or unclear, they drop off."
          quote="Patients do not decide from one touchpoint. They decide across search, trust, content, and booking."
          items={[
            "Your local visibility is weaker than it should be",
            "Your website gets visits, but pages are not converting",
            "Intake and booking feel clunky, especially on mobile",
            "Your ads are running, but the creative is stale or generic",
            "SEO, blogs, social, and ads are all moving separately",
            "Reporting shows clicks, not what actually turns into appointments"
          ]}
          visual={<BrokenJourneyVisual />}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionDetails 
          title="Fix the patient journey first. Then scale what works."
          description="We build the system behind better clinic growth: stronger visibility, better trust signals, higher-converting pages, smoother intake, smarter creative, and clearer reporting."
          primaryCta="Get Clinic Growth Plan →"
          riskReducer="We lock priorities by Week 2 so the sprint stays focused."
          features={[
            "A clinic growth roadmap you can act on",
            "Local SEO and Google Business Profile improvements",
            "Better landing pages and service pages",
            "Mobile-friendly form and booking fixes",
            "Ad creative, post design, and video editing",
            "SEO blogs and patient-friendly content",
            "Multi-channel campaign optimization",
            "Weekly demos and clear stage gates"
          ]}
          visual={<SolutionDashboardVisual />}
        />
      </Suspense>

      <ClinicContentCreativeSection />

      <RoadmapCallSection
        title="What you'll get in the 30-minute clinic growth roadmap call"
        description="This is not a generic sales chat. We'll look at your patient acquisition system like a team preparing to fix and grow it."
        items={[
          "Identify the biggest leaks in local visibility, trust, pages, intake, and booking",
          "Review whether your current ads and content are helping or hurting conversion",
          "Define what needs fixing now versus later",
          "Recommend priorities across SEO, Google Business Profile, creative, landing pages, ads, and reporting",
          "Map your 8–12 week clinic growth sprint"
        ]}
        primaryCta="Get Clinic Growth Plan"
      />

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProcess 
          title="Validate → Build → Launch → Scale"
          steps={[
            {
              title: "Validate (Weeks 1–2)",
              description: "We audit your patient journey, local presence, website, booking flow, content, and analytics. Then we lock priorities."
            },
            {
              title: "Build (Weeks 3–8)",
              description: "We ship page updates, booking fixes, local SEO work, creative assets, blog content, and tracking improvements."
            },
            {
              title: "Launch (Weeks 9–10)",
              description: "We push live the approved work, tighten campaign alignment, and make sure reporting is clear."
            },
            {
              title: "Scale (Monthly)",
              description: "We keep improving SEO, creative, campaign performance, and booking conversion based on real data."
            }
          ]}
          note="Each phase has a stage gate, so you always know what is happening and what is next."
        />
      </Suspense>

      <ClinicUseCases />

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionProof 
          title="Real clinic growth. Real outcomes."
          items={[]}
          badge="BOOKING-FIRST GROWTH"
          statTitle="8–12 weeks to stronger bookings"
          statDesc="Clear priorities. Weekly demos. No scattered vendors."
          imageUrl="https://images.unsplash.com/photo-1631217b5f55-eca37266e3d2?w=900&q=80"
          imageAlt="Clinic team reviewing patient growth strategy"
          whyBuildItems={[
            { num: "01", title: "Ship weekly, not someday", desc: "Pages, local SEO, forms, content, and campaigns move forward every week — so growth does not sit in a backlog.", color: "from-[#DBFE01]/20 to-[#DBFE01]/5", border: "border-[#DBFE01]/30" },
            { num: "02", title: "Turn search into scheduled visits", desc: "We improve the moments that matter most: Google visibility, trust signals, landing pages, intake, and booking flow.", color: "from-blue-50 to-indigo-50/30", border: "border-blue-200/50" },
            { num: "03", title: "Built for real clinic teams", desc: "HIPAA-aware workflows, simple approvals, and one accountable team that works with busy operators — not against them.", color: "from-emerald-50 to-teal-50/30", border: "border-emerald-200/50" },
            { num: "04", title: "Know what is driving appointments", desc: "Booking-first reporting across calls, forms, campaigns, and channels, so you can see what is working and where patients drop off.", color: "from-purple-50 to-violet-50/30", border: "border-purple-200/50" }
          ]}
          techStackTitle="Tools we work with"
          techStackDesc="Proven platforms we integrate with — so your clinic stack keeps working."
          techStackLogos={[
            { name: "Calendly", url: "https://cdn.brandfetch.io/idbJpTKFPT/idoHNAJiuQ.svg?c=1bxid64Mup7aczewSAYMX&t=1657269348716", wide: true },
            { name: "CallRail", url: "https://cdn.brandfetch.io/id2tENgwdX/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667616161752", wide: true },
            { name: "WordPress", url: "https://cdn.brandfetch.io/idbnlnCBDY/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668516065445", wide: true },
            { name: "SEMrush", url: "https://cdn.brandfetch.io/idt3n8W3ef/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667587193361", wide: true },
            { name: "Google Analytics", url: "https://logo.svgcdn.com/logos/google-analytics.svg", wide: true },
            { name: "HubSpot", url: "https://cdn.brandfetch.io/idRt0LuzRf/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761193704935", wide: true },
            { name: "Google Tag Manager", url: "https://logo.svgcdn.com/logos/google-tag-manager.svg", wide: true },
            { name: "Google Ads", url: "https://logo.svgcdn.com/logos/google-ads.svg", wide: true },
            { name: "Meta", url: "https://logo.svgcdn.com/logos/meta.svg", wide: true },
            { name: "TikTok", url: "https://logo.svgcdn.com/logos/tiktok.svg", wide: true },
            { name: "YouTube", url: "https://logo.svgcdn.com/logos/youtube.svg", wide: true },
            { name: "Hotjar", url: "https://logo.svgcdn.com/logos/hotjar.svg", wide: true },
            { name: "Canva", url: "https://cdn.brandfetch.io/id9mVQlyB1/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1725863496299", wide: true },
            { name: "CapCut", url: "https://cdn.brandfetch.io/idUmqKFgE3/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772513764446", wide: true }
          ]}
          testimonials={[
            { quote: "We stopped coordinating vendors. Now improvements ship weekly.", author: "Dr. Sarah M.", role: "Clinic Owner, Vascular Care" },
            { quote: "Tracking finally showed what was driving appointments.", author: "Mark T.", role: "Practice Manager, Multi-site Clinic" },
            { quote: "Our patient intake is now 100% digital and our front desk is so much happier.", author: "James R.", role: "Ops Director, Dental Group" },
            { quote: "Local SEO results were visible in month 2. We own the map pack now.", author: "Elena V.", role: "Marketing Lead, Physio Chain" },
            { quote: "Finally a partner that speaks HIPAA and conversion in the same sentence.", author: "Dr. Chen", role: "Founder, Dermatology Practice" },
            { quote: "The booking flow optimization increased our conversion by 35%.", author: "Lisa K.", role: "Clinic Manager, Fertility Center" },
            { quote: "No more ghosting patients. The automated follow-ups are a game changer.", author: "Robert B.", role: "Owner, MedSpa" },
            { quote: "Best investment we made for our multi-location expansion.", author: "Amanda L.", role: "Regional Director, Urgent Care" },
            { quote: "They cleaned up our messy data and gave us a dashboard we actually use.", author: "Tom H.", role: "CEO, Orthopedic Group" },
            { quote: "Professional, fast, and they actually care about patient outcomes.", author: "Dr. Patel", role: "Founder, Pediatric Clinic" }
          ]}
          useCasesTitle="Common clinic growth wins we deliver"
          useCases={[
            "Portal + intake conversion cleanup",
            "Local SEO + Google Business Profile + reviews workflow",
            "Measurement & reporting for calls/forms/bookings"
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionFAQ 
          items={[
            {
              question: "Who is this for?",
              answer: "For clinics that already have services, patient demand, or active marketing — and want more booked appointments from the traffic and attention they already have."
            },
            {
              question: "What do you mean by \"Clinic Growth System\"?",
              answer: "It means your local visibility, website, landing pages, intake, booking flow, content, ads, and reporting all work together as one system."
            },
            {
              question: "Do you only help with websites?",
              answer: "No. We improve the full patient journey — from local SEO and landing pages to forms, booking flow, content, creative, and campaign performance."
            },
            {
              question: "What makes this different from a typical marketing agency?",
              answer: "Most agencies focus on traffic or campaigns. We focus on the full path to booking — and help fix the conversion system behind it."
            },
            {
              question: "What happens in the roadmap call?",
              answer: "We review your current setup, identify the biggest growth leaks, and map the highest-priority fixes for the next 8–12 weeks."
            },
            {
              question: "How fast can we expect results?",
              answer: "That depends on your starting point, but many clinics see early wins from improving visibility, trust, landing pages, and booking friction."
            },
            {
              question: "Can you improve our booking flow without a full rebuild?",
              answer: "Yes. Often the fastest gains come from improving the current journey before rebuilding anything."
            },
            {
              question: "Can you work with our current website, CRM, or scheduling tool?",
              answer: "Usually, yes. We start by improving what is already in place and focus on the highest-impact fixes first."
            },
            {
              question: "Do you handle local SEO for clinics?",
              answer: "Yes. We improve local visibility through Google Business Profile optimization, service and location page improvements, and SEO content."
            },
            {
              question: "Do you create content too?",
              answer: "Yes. We support blogs, landing page copy, trust-building website content, and patient-focused campaign content."
            },
            {
              question: "Do you also help with ad creative?",
              answer: "Yes. We create ad concepts, post designs, and short-form video edits for paid and organic channels."
            },
            {
              question: "Do you manage ads as well?",
              answer: "We support multi-channel campaign optimization across platforms like Google and Meta, with a focus on patient acquisition and conversion."
            },
            {
              question: "Do you support HIPAA compliance?",
              answer: "We work with HIPAA-aware workflows and healthcare-sensitive journeys. Exact compliance needs depend on your tools and setup."
            },
            {
              question: "What do you need from us to get started?",
              answer: "Usually access to your website, analytics, Google Business Profile, current campaigns, booking or form tools, and one decision-maker."
            },
            {
              question: "Can you work alongside our internal team or current agency?",
              answer: "Yes. We can plug into your existing setup, sharpen priorities, and help drive the growth backlog forward."
            }
          ]}
        />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SolutionFinalCta 
          title="Ready to grow your clinic with more control?"
          description="If you want more booked appointments — not more scattered marketing activity — let's map the next 8–12 weeks together."
          secondaryCta="See the Package"
          visual={<RoadmapPreviewVisual />}
        />
      </Suspense>
    </SeoLandingPage>
  );
}