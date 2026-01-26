import React from 'react';
import SeoLandingPage from '@/components/solutions/SeoLandingPage';

const CONTENT = {
  meta: {
    title: "Clinic Growth | Digital Patient Engagement | Conefia",
    description: "HIPAA-aware digital patient engagement platform + clinic patient portal software to drive patient acquisition.",
    url: "/solutions/clinic-growth"
  },
  hero: {
    title: "Clinic Growth Package: Digital Patient Engagement Platform That Books Patients",
    subtitle: "Stop losing patients in a fragmented digital journey. If your clinic patient portal software, intake, website, and reviews don’t work together, you’ll keep leaking bookings. Conefia fixes the full journey—HIPAA-compliant growth marketing for clinics, clean tracking, and weekly shipping.",
    primaryCta: "Get My Clinic Growth Roadmap",
    secondaryCta: "See Clinic Package",
    trustChips: [
      "HIPAA-aware flows",
      "Weekly demos",
      "One backlog",
      "Measurable outcomes"
    ]
  },
  problem: {
    title: "Patient acquisition gets blocked when the journey is broken",
    quote: "“Marketing” happens without real clinic digital transformation",
    items: [
      "Portal, intake, website, and reviews don’t connect",
      "Updates take weeks across multiple vendors",
      "No single owner for bookings, inquiries, and retention",
      "You can’t see what’s driving calls, forms, and appointments"
    ]
  },
  solution: {
    title: "One team. One backlog. More appointments.",
    description: "We act as your integrated partner for patient acquisition clinic growth—product + UX + dev + marketing + analytics under one plan.",
    primaryCta: "Get My Clinic Growth Roadmap",
    features: [
      "Patient journey upgrades (portal + intake + booking flow)",
      "Local visibility + trust system (GBP, reviews, service pages)",
      "HIPAA-aware growth workflows and reporting",
      "Tracking that ties traffic → calls/forms → appointments",
      "Weekly delivery cadence (demos, priorities, stage gates)"
    ],
    items: [
        "Integrated Product & Marketing",
        "HIPAA-Aware Execution",
        "Transparent Reporting"
    ]
  },
  howItWorks: {
    steps: [
      {
        title: "Validate (Weeks 1–2)",
        description: "Journey audit + local SEO audit + tracking plan + prioritized roadmap"
      },
      {
        title: "Build (Weeks 3–8)",
        description: "Portal/intake improvements + website CRO + service pages + measurement setup"
      },
      {
        title: "Launch (Weeks 9–10)",
        description: "QA + go-live + dashboards + team handover"
      },
      {
        title: "Scale (Monthly)",
        description: "CRO experiments + SEO iteration + retention flows + continuous improvements"
      }
    ]
  },
  proof: {
    title: "What clinics typically improve in 8–12 weeks",
    items: [
      "More bookings from the same traffic",
      "Better local visibility and reviews performance",
      "Faster iteration (no vendor ping-pong)",
      "Clear attribution: what’s driving appointments"
    ],
    testimonials: [
      {
        quote: "We stopped coordinating vendors. Now improvements ship weekly.",
        author: "Dr. Sarah M."
      },
      {
        quote: "Tracking finally showed what was driving appointments.",
        author: "Mark T."
      }
    ],
    useCases: [
      "Portal + intake conversion cleanup",
      "Local SEO + GBP + review workflow system",
      "Measurement + reporting for calls/forms/bookings"
    ]
  },
  faq: {
    items: [
      {
        question: "Do you support HIPAA requirements?",
        answer: "Yes—HIPAA-aware delivery and workflows aligned to your environment."
      },
      {
        question: "Do you replace our portal/EHR?",
        answer: "Not necessarily—we optimize the journey around what you use and integrate when needed."
      },
      {
        question: "Do you run ads?",
        answer: "Yes, but we start by fixing conversion + tracking first—then scale spend confidently."
      }
    ]
  },
  finalCta: {
    title: "Want more appointments without the chaos?",
    primaryCta: "Get My Clinic Growth Roadmap",
    secondaryCta: "See Clinic Package"
  }
};

export default function SolutionsClinicGrowth() {
  return <SeoLandingPage content={CONTENT} />;
}