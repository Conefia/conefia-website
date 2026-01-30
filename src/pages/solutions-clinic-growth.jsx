import React from 'react';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, SolutionTrustedBy, 
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta 
} from '@/components/solutions/SeoLandingPage';
import { HeroVisual, AttributionVisual, BrokenJourneyVisual, SolutionDashboardVisual, ProcessVisual, OutcomesVisual, RoadmapPreviewVisual } from '@/components/solutions/clinic-growth/ClinicGrowthVisuals';
import BrandCarousel from '@/components/landing/BrandCarousel';
import Seo from '@/components/Seo';

export default function SolutionsClinicGrowth() {
  return (
    <SeoLandingPage>
      <Seo 
        title="Clinic Growth: Digital Patient Engagement | Conefia"
        description="Digital patient engagement platform + clinic patient portal software + HIPAA growth marketing to book more patients. Get a roadmap."
        canonical="/solutions/clinic-growth"
      />
      <SolutionHero 
        title="Clinic Growth Package"
        subtitle="A digital patient engagement platform that books more patients. One partner to fix your patient journey, improve local visibility, and turn traffic into booked appointments. Website + portal + intake + tracking + local SEO — aligned under one plan."
        primaryCta="Get My Clinic Growth Roadmap"
        secondaryCta="See the Package"
        trustChips={[
          "HIPAA-aware workflows",
          "Local SEO + GBP",
          "Conversion tracking",
          "Weekly delivery"
        ]}
        layout="split"
        visual={<HeroVisual />}
      />
      <SolutionMetrics 
        title="Clinic growth, measured — not guessed."
        visual={<AttributionVisual />}
        items={[
          "+20–50% — More booked appointments",
          "Top 3–10 — Higher local rankings (Google Maps)",
          "+30–60% — More qualified calls & form leads",
          "+10–25% — Better lead-to-appointment conversion"
        ]}
      />
      <SolutionTrustedBy 
        title="Trusted by clinics and digital health teams."
        visual={<div><BrandCarousel /><p className="text-center text-sm text-gray-500 mt-4 font-medium">Clinic growth + digital transformation + patient engagement.</p></div>}
      />
      <SolutionProblem 
        title="Patient acquisition breaks when the journey is broken."
        quote="Most clinics don’t have a marketing problem. They have a journey + measurement problem."
        items={[
          "Patients drop when intake is slow or confusing",
          "Calls get wasted when tracking is missing or messy",
          "Local visibility slips when GBP + reviews aren’t managed",
          "Vendors don’t align — and nothing improves end-to-end"
        ]}
        visual={<BrokenJourneyVisual />}
      />
      <SolutionDetails 
        title="One team. One backlog. More appointments."
        description="We run clinic digital transformation as one system: digital patient engagement platform + clinic patient portal software improvements + local SEO + conversion tracking."
        primaryCta="Get My Clinic Growth Roadmap"
        features={[
          "Patient journey upgrades (portal + intake + booking flow)",
          "Local visibility system (Google Business Profile, reviews, service pages)",
          "HIPAA-aware execution (privacy-first workflows and reporting)",
          "Conversion tracking (traffic → calls/forms → booked appointments)",
          "Weekly delivery cadence (demos, priorities, stage gates)"
        ]}
        visual={<SolutionDashboardVisual />}
      />
      <SolutionProcess 
        steps={[
          {
            title: "Validate (Weeks 1–2)",
            description: "Audit the patient journey + local SEO + tracking. Deliver a prioritized growth roadmap."
          },
          {
            title: "Build (Weeks 3–8)",
            description: "Fix portal/intake friction + CRO improvements + service pages + tracking setup."
          },
          {
            title: "Launch (Weeks 9–10)",
            description: "QA + go-live + dashboards + handover (or keep us on to run growth)."
          },
          {
            title: "Scale (Monthly)",
            description: "CRO experiments + local SEO iteration + review workflows + continuous improvements."
          }
        ]}
      />
      <SolutionOutcomes 
        title="What clinics improve in 8–12 weeks"
        items={[
          "More bookings from the same traffic",
          "Better local visibility and review performance",
          "Clear attribution: what’s driving appointments",
          "Faster iteration (no vendor ping-pong)"
        ]}
        visual={<OutcomesVisual />}
      />
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
      <SolutionFAQ 
        items={[
          {
            question: "Do you support HIPAA requirements?",
            answer: "We design HIPAA-aware workflows and privacy-first tracking. If you have specific compliance requirements, we align delivery and documentation accordingly."
          },
          {
            question: "Do you replace our portal/EHR?",
            answer: "Usually no. We improve the patient journey around it: intake, scheduling, website conversion, and tracking."
          },
          {
            question: "Do you run ads?",
            answer: "Yes — but we start by fixing the journey and measurement first, so ad spend turns into booked patients (not wasted clicks)."
          }
        ]}
      />
      <SolutionFinalCta 
        title="Want more bookings without adding more vendors?"
        primaryCta="Get My Clinic Growth Roadmap"
        secondaryCta="See the Package"
        visual={<RoadmapPreviewVisual />}
      />
    </SeoLandingPage>
  );
}