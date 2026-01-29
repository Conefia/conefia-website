import React from 'react';
import SeoLandingPage from '@/components/solutions/SeoLandingPage';
import { HeroVisual, OutcomesVisual, ProblemVisual, SolutionVisual } from '@/components/solutions/enterprise/EnterpriseVisuals';

const CONTENT = {
  meta: {
    title: "Corporate Innovation: Regulated MVPs | Conefia",
    description: "Regulated software development partner for healthcare and enterprise: HIPAA-aware delivery, governance, and pilot-ready MVPs.",
    url: "https://conefia.com/solutions/enterprise-innovation"
  },
  hero: {
    title: "Corporate Innovation",
    subtitle: "Pilot-ready MVPs with governance built in. Innovation dies in handoffs, stakeholders, and late compliance surprises. We’re a regulated industry software development partner that ships pilot-ready MVPs with AI governance and compliance in mind.",
    primaryCta: "Discuss Roadmap",
    secondaryCta: "See the Program",
    trustChips: ["HIPAA-Aware", "SOC 2 Ready", "Enterprise Grade"],
    layout: "split",
    visual: <HeroVisual />
  },
  metrics: {
    title: "Outcomes",
    visual: <OutcomesVisual />,
    items: [
      "6–10 weeks — POC to pilot-ready MVP",
      "↓30–50% — Less time lost to stakeholder alignment",
      "Fewer rewrites — Compliance handled early",
      "Measured adoption — Value proven with data"
    ]
  },
  problem: {
    title: "The Problem: Innovation gets stuck between stakeholders and compliance.",
    quote: "We have the budget and the idea, but it's been 6 months and we're still in security review.",
    items: [
      "Alignment takes too long across teams",
      "POCs don’t become pilot-ready MVPs",
      "Vendor sprawl slows execution",
      "Governance/security creates delivery friction"
    ],
    visual: <ProblemVisual />
  },
  solution: {
    title: "The Solution: End-to-end delivery for regulated environments.",
    description: "We bridge the gap between agility and compliance, delivering software that pleases both innovation leaders and the CISO.",
    primaryCta: "Discuss Roadmap",
    features: [
      "HIPAA-compliant app development agency approach (privacy-aware design)",
      "Stage gates + audit trail (decisions, documentation, sign-offs)",
      "Digital health venture development services (product + eng + launch enablement)",
      "Optional: SOC 2 compliant app development readiness patterns"
    ],
    visual: <SolutionVisual />
  },
  howItWorks: {
    steps: [
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
    ]
  },
  outcomes: {
    title: "Enterprise Value",
    items: [
      "Risk-managed innovation",
      "Faster time-to-pilot",
      "Audit-ready documentation",
      "Scalable architecture patterns"
    ],
    visual: null
  },
  proof: {
    title: "Enterprise Trust",
    items: [
      "ISO 27001 Aligned",
      "GDPR & HIPAA Experience",
      "Zero Data Leakage"
    ],
    testimonials: [
      {
        quote: "They speak the language of our security team. That made all the difference.",
        author: "VP of Innovation",
        role: "Healthcare Provider"
      },
      {
        quote: "Finally, an agency that understands 'move fast and break things' doesn't work in fintech.",
        author: "Director of Product",
        role: "Fintech Enterprise"
      }
    ],
    useCases: ["Digital Health", "Fintech", "Insurtech", "Supply Chain"],
    useCasesTitle: "Regulated Industries"
  },
  faq: {
    items: [
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
    ]
  },
  finalCta: {
    title: "Want pilots that survive real governance?",
    primaryCta: "Discuss Roadmap",
    secondaryCta: "See the Program"
  }
};

export default function EnterpriseInnovationPage() {
  return <SeoLandingPage content={CONTENT} />;
}