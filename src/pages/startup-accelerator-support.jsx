import React from 'react';
import { SectionSkeleton, DarkSectionSkeleton } from '@/components/loading/SkeletonLoader';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, 
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta 
} from '@/components/solutions/SeoLandingPage';
import { HeroVisual, OutcomesVisual, ProblemVisual, SolutionVisual } from '@/components/solutions/accelerator/AcceleratorVisuals';
import Seo from '@/components/Seo';

export default function StartupAcceleratorSupport() {
  return (
    <SeoLandingPage>
      <Seo 
        title="Accelerator Support: Cohorts That Ship | Conefia"
        description="Startup accelerator MVP development services: cohort execution system, build squads, Demo Day prep, and sponsor-ready reporting."
        canonical="/solutions/startup-accelerator-support"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/startup-accelerator-support/#service",
          "name": "Startup Accelerator Support",
          "serviceType": "Accelerator cohort execution and MVP delivery",
          "provider": { "@id": "https://conefia.com/#organization" },
          "url": "https://conefia.com/startup-accelerator-support",
          "areaServed": "Worldwide",
          "offers": { "@type": "Offer", "url": "https://conefia.com/book", "price": "0", "priceCurrency": "USD" }
        })}}
      />
      <SolutionHero 
        title="Startup Accelerator Support"
        subtitle="Cohorts that ship before Demo Day. Founders get advice — but execution doesn't scale. We provide the cohort execution system: templates, build squads, and sponsor-ready reporting."
        primaryCta="Get Cohort Plan"
        secondaryCta="See Program"
        trustChips={["Execution Partners", "Technical Due Diligence", "Sponsor Reporting"]}
        layout="split"
        visual={<HeroVisual />}
      />
      <SolutionMetrics 
        title="Outcomes"
        visual={<OutcomesVisual />}
        items={[
          "2× — More teams shipping MVPs",
          "4–8 weeks — Demo Day-ready outcomes",
          "↓50–80% — Less ops time spent on founder follow-ups",
          "Sponsor-ready — Cohort reporting that renews funding"
        ]}
      />
      <SolutionProblem 
        title="The Problem: Advice scales. Execution doesn't."
        quote="We have great mentors, but teams still struggle to build a shippable product by Demo Day."
        items={[
          "Teams stall without technical leadership",
          "Demo Day creates last-minute chaos",
          "Quality varies across cohort MVPs",
          "Sponsor/founder reporting is manual"
        ]}
        visual={<ProblemVisual />}
      />
      <SolutionDetails 
        title="The Solution: The delivery layer your accelerator is missing."
        description="We act as the technical backbone for your cohort, ensuring every team has the resources to build, launch, and measure progress."
        primaryCta="Get Cohort Plan"
        features={[
          "Technical co-founder for accelerator cohorts (playbook + delivery leadership)",
          "MVP build squads for founders who need help",
          "Accelerator demo day preparation services (product polish + story + metrics)",
          "Sponsor-friendly reporting dashboards"
        ]}
        visual={<SolutionVisual />}
      />
      <SolutionProcess 
        steps={[
          {
            title: "Onboarding (Week 1)",
            description: "We audit the cohort's technical needs and assign resources where gaps exist."
          },
          {
            title: "Build Sprint (Weeks 2-6)",
            description: "Intensive development phase with weekly check-ins, code reviews, and unblocking sessions."
          },
          {
            title: "Demo Prep (Weeks 7-8)",
            description: "Focus shifts to polish, load testing, and finalizing the product narrative for investors."
          },
          {
            title: "Demo Day & Beyond",
            description: "Live launch support and transition planning for post-program growth."
          }
        ]}
      />
      <SolutionOutcomes 
        title="Program Benefits"
        items={[
          "Higher quality MVPs on stage",
          "Data-driven investor reporting",
          "Reduced program manager workload",
          "Increased follow-on funding rates"
        ]}
        visual={null}
      />
      <SolutionProof 
        title="Trusted by top programs"
        items={[
          "Standardized Tech Stack",
          "White-labeled Support",
          "Global Talent Pool"
        ]}
        testimonials={[
          { quote: "Our best cohort ever. Every single team had a working product on Demo Day.", author: "Program Director", role: "Tier 1 Accelerator" },
          { quote: "The reporting dashboard alone saved me 10 hours a week.", author: "Operations Lead", role: "Corporate Innovation Lab" },
          { quote: "Founders loved the technical support. It filled a huge gap in our program.", author: "Managing Director", role: "University Accelerator" },
          { quote: "We saw a 2x increase in follow-on funding for this cohort.", author: "Partner", role: "Venture Studio" },
          { quote: "The build squads were a lifesaver for our non-technical founders.", author: "Program Manager", role: "GovTech Accelerator" },
          { quote: "Standardized tech stacks made due diligence so much easier for investors.", author: "Investment Committee Member", role: "Seed Fund" },
          { quote: "They delivered 15 MVPs in 6 weeks. Incredible execution.", author: "Director", role: "FinTech Lab" },
          { quote: "The best partner we've brought in. They actually ship.", author: "Head of Platform", role: "VC Firm" },
          { quote: "Demo Day was flawless. No broken demos on stage.", author: "Events Lead", role: "Global Accelerator" },
          { quote: "Sponsors were impressed by the data visibility. We renewed our grant easily.", author: "Executive Director", role: "Non-Profit Incubator" }
        ]}
        useCases={["Pre-Seed Accelerators", "Corporate Innovation", "Venture Studios"]}
        useCasesTitle="Who We Help"
      />
      <SolutionFAQ 
        items={[
          {
            question: "Do you take equity?",
            answer: "We typically work on a service fee basis paid by the program, but are open to discussion for select high-potential cohorts."
          },
          {
            question: "Can founders bring their own devs?",
            answer: "Absolutely. We provide the structure and leadership. Our build squads are optional for teams that lack technical talent."
          },
          {
            question: "How do you handle IP?",
            answer: "All IP belongs 100% to the founders. We are a service provider/partner, not an owner."
          },
          {
            question: "What does the 'Technical Co-founder' role entail?",
            answer: "Think of it as a fractional CTO for the cohort. We guide architecture, stack choices, and roadmap prioritization."
          }
        ]}
      />
      <SolutionFinalCta 
        title="Want a cohort that ships — consistently?"
        primaryCta="Get Cohort Plan"
        secondaryCta="See Program"
      />
    </SeoLandingPage>
  );
}