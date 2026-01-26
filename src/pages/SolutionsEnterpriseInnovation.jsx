import React from 'react';
import SeoLandingPage from '@/components/solutions/SeoLandingPage';

const CONTENT = {
  meta: {
    title: "Regulated Software Dev Partner | Conefia",
    description: "HIPAA-compliant app development agency for regulated industries: digital health venture development, governance, and compliance.",
    url: "/solutions/corporate-innovation"
  },
  hero: {
    title: "Regulated Industry Software Development Partner",
    subtitle: "Go from POC to pilot-ready MVP—with governance built in. Conefia is a regulated industry software development partner for teams that need speed and controls—especially in healthcare and AI-enabled products.",
    primaryCta: "Discuss My Innovation Roadmap",
    secondaryCta: "See Program",
    trustChips: [
      "Stage gates",
      "Audit trail",
      "Compliance-aware delivery",
      "Measured adoption"
    ]
  },
  problem: {
    title: "Innovation gets stuck between stakeholders and compliance",
    quote: "Governance/security show up late → rewrites",
    items: [
      "Alignment takes too long across teams",
      "POCs don’t become pilot-ready MVPs",
      "Vendor sprawl slows execution",
      "Adoption and value aren’t measured clearly"
    ]
  },
  solution: {
    title: "Pilot-ready MVPs with governance, compliance, and measurement",
    description: "We support digital health venture development services and enterprise innovation with real delivery rigor.",
    primaryCta: "Discuss My Innovation Roadmap",
    features: [
      "HIPAA-compliant app development agency capabilities (privacy-aware workflows)",
      "Digital transformation healthcare organization support (systems, measurement, rollout)",
      "AI governance compliance enterprise technology planning (controls, evaluation approach)",
      "Stage gates + audit trail (checkpoints, documentation, sign-offs)",
      "Analytics + rollout enablement to prove value quickly",
      "Path to SOC 2 compliant app development readiness where applicable"
    ],
    items: [
      "HIPAA Compliant",
      "Governance & Controls",
      "Measured Adoption"
    ]
  },
  howItWorks: {
    steps: [
      {
        title: "Validate (Weeks 1–4)",
        description: "Stakeholder alignment + success criteria + risk/compliance plan + MVP scope"
      },
      {
        title: "Build (Weeks 5–12)",
        description: "MVP implementation + integrations + governance checkpoints + documentation"
      },
      {
        title: "Launch (Weeks 13–15)",
        description: "Pilot rollout + enablement + measurement framework live"
      },
      {
        title: "Scale (Ongoing)",
        description: "Iterate from pilot data + expand adoption + roadmap governance"
      }
    ]
  },
  proof: {
    title: "What teams gain",
    items: [
      "Faster time-to-pilot with fewer handoffs",
      "Less rework because compliance is designed in",
      "Clear accountability and reporting",
      "Measured adoption and impact narrative"
    ],
    testimonials: [
      {
        quote: "We shipped without compromising governance.",
        author: "Innovation Lead"
      }
    ],
    useCases: [
      "POC → pilot-ready MVP in regulated environment",
      "Healthcare workflow product with privacy requirements",
      "AI-enabled product with governance controls"
    ]
  },
  faq: {
    items: [
      {
        question: "Do you work with security/compliance teams?",
        answer: "Yes—early alignment is part of delivery."
      },
      {
        question: "Can you support healthcare?",
        answer: "Yes—HIPAA-aware delivery, measurement, and rollout support."
      },
      {
        question: "Do you build AI solutions?",
        answer: "Yes—aligned with evaluation and governance requirements."
      }
    ]
  },
  finalCta: {
    title: "Want speed with compliance built in?",
    primaryCta: "Discuss My Innovation Roadmap",
    secondaryCta: "See Program"
  }
};

export default function SolutionsEnterpriseInnovation() {
  return <SeoLandingPage content={CONTENT} />;
}