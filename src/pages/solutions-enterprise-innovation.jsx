import React, { Suspense } from 'react';
import SeoLandingPage, { SolutionHero } from '@/components/solutions/SeoLandingPage';
import { HeroVisual } from '@/components/solutions/enterprise/EnterpriseVisuals';
import Seo from '@/components/Seo';

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
const OutcomesVisual = React.lazy(() => import('@/components/solutions/enterprise/EnterpriseVisuals').then(m => ({ default: m.OutcomesVisual })));
const ProblemVisual = React.lazy(() => import('@/components/solutions/enterprise/EnterpriseVisuals').then(m => ({ default: m.ProblemVisual })));
const SolutionVisual = React.lazy(() => import('@/components/solutions/enterprise/EnterpriseVisuals').then(m => ({ default: m.SolutionVisual })));

export default function EnterpriseInnovationPage() {
  return (
    <SeoLandingPage>
      <Seo 
        title="Corporate Innovation: Regulated MVPs | Conefia"
        description="Regulated software development partner for healthcare and enterprise: HIPAA-aware delivery, governance, and pilot-ready MVPs."
        canonical="https://conefia.com/solutions/enterprise-innovation"
      />
      <SolutionHero 
        title="Corporate Innovation"
        subtitle="Pilot-ready MVPs with governance built in. Innovation dies in handoffs, stakeholders, and late compliance surprises. We’re a regulated industry software development partner that ships pilot-ready MVPs with AI governance and compliance in mind."
        primaryCta="Discuss Roadmap"
        secondaryCta="See the Program"
        trustChips={["HIPAA-Aware", "SOC 2 Ready", "Enterprise Grade"]}
        layout="split"
        visual={<HeroVisual />}
      />
      
      <Suspense fallback={<div className="h-64" />}>
        <SolutionMetrics 
          title="Outcomes"
          visual={<OutcomesVisual />}
          items={[
            "6–10 weeks — POC to pilot-ready MVP",
            "↓30–50% — Less time lost to stakeholder alignment",
            "Fewer rewrites — Compliance handled early",
            "Measured adoption — Value proven with data"
          ]}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionProblem 
          title="The Problem: Innovation gets stuck between stakeholders and compliance."
          quote="We have the budget and the idea, but it's been 6 months and we're still in security review."
          items={[
            "Alignment takes too long across teams",
            "POCs don’t become pilot-ready MVPs",
            "Vendor sprawl slows execution",
            "Governance/security creates delivery friction"
          ]}
          visual={<ProblemVisual />}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionDetails 
          title="The Solution: End-to-end delivery for regulated environments."
          description="We bridge the gap between agility and compliance, delivering software that pleases both innovation leaders and the CISO."
          primaryCta="Discuss Roadmap"
          features={[
            "HIPAA-compliant app development agency approach (privacy-aware design)",
            "Stage gates + audit trail (decisions, documentation, sign-offs)",
            "Digital health venture development services (product + eng + launch enablement)",
            "Optional: SOC 2 compliant app development readiness patterns"
          ]}
          visual={<SolutionVisual />}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionProcess 
          steps={[
            {
              title: "Alignment (Week 1-2)",
              description: "Mapping stakeholders, defining success metrics, and pre-clearing architectural choices with IT/Security."
            },
            {
              title: "Build & Document (Weeks 3-8)",
              description: "Rapid development with parallel documentation. Every commit is traceable, every decision logged."
            },
            {
              title: "Security Gate (Week 9)",
              description: "Pre-emptive penetration testing and code scanning to ensure a smooth InfoSec review."
            },
            {
              title: "Pilot Launch (Week 10+)",
              description: "Controlled rollout to pilot users with integrated feedback loops and usage telemetry."
            }
          ]}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionOutcomes 
          title="Enterprise Value"
          items={[
            "Risk-managed innovation",
            "Faster time-to-pilot",
            "Audit-ready documentation",
            "Scalable architecture patterns"
          ]}
          visual={null}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionProof 
          title="Enterprise Trust"
          items={[
            "ISO 27001 Aligned",
            "GDPR & HIPAA Experience",
            "Zero Data Leakage"
          ]}
          testimonials={[
            { quote: "They speak the language of our security team. That made all the difference.", author: "VP of Innovation", role: "Healthcare Provider" },
            { quote: "Finally, an agency that understands 'move fast and break things' doesn't work in fintech.", author: "Director of Product", role: "Fintech Enterprise" },
            { quote: "The pilot launch was flawless. Compliance was happy, users were happy.", author: "Sarah M.", role: "Head of Digital, Insurance Co" },
            { quote: "We cut our stakeholder alignment time in half.", author: "David K.", role: "Innovation Lead, Pharma" },
            { quote: "Audit-ready documentation saved us weeks during the security review.", author: "James L.", role: "CISO, Regional Bank" },
            { quote: "A true partner for regulated innovation. They get the constraints.", author: "Elena R.", role: "VP Product, MedTech" },
            { quote: "From POC to pilot in 8 weeks. Unheard of in our org.", author: "Tom B.", role: "Director, Supply Chain Corp" },
            { quote: "The stage-gate process gave our board the confidence to approve the budget.", author: "Rachel G.", role: "CIO, Logistics Enterprise" },
            { quote: "Top-tier engineering talent with enterprise discipline.", author: "Mark S.", role: "VP Engineering, Energy Corp" },
            { quote: "They navigated our procurement process with patience and professionalism.", author: "Lisa D.", role: "Procurement Lead, Global Retailer" }
          ]}
          useCasesTitle="Regulated Industries"
          useCases={["Digital Health", "Fintech", "Insurtech", "Supply Chain"]}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionFAQ 
          items={[
            {
              question: "How do you handle HIPAA compliance?",
              answer: "We follow privacy-by-design principles, ensuring encryption at rest/transit, audit logging, and proper BAA structures from day one."
            },
            {
              question: "Can you integrate with our legacy systems?",
              answer: "Yes, we specialize in building modern layers on top of legacy EHRs, ERPs, and mainframes using secure API gateways."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "We offer SLA-backed support and maintenance packages, or we can facilitate a smooth handover to your internal IT team."
            },
            {
              question: "What is your security posture?",
              answer: "We adhere to OWASP Top 10 guidelines, perform regular code scans, and strictly control access to development environments."
            }
          ]}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <SolutionFinalCta 
          title="Want pilots that survive real governance?"
          primaryCta="Discuss Roadmap"
          secondaryCta="See the Program"
        />
      </Suspense>
    </SeoLandingPage>
  );
}