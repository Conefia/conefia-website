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
              question: "What do you mean by \"Shopify Growth System\"?",
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
          title="Ready to grow your clinic with more control?"
          description="If you want more booked appointments — not more scattered marketing activity — let's map the next 8–12 weeks together."
          secondaryCta="See the Package"
          visual={<RoadmapPreviewVisual />}
        />
      </Suspense>
    </SeoLandingPage>
  );
}