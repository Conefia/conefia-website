import React from 'react';
import SeoLandingPage from '@/components/solutions/SeoLandingPage';

const CONTENT = {
  meta: {
    title: "Shopify CRO & DTC Growth Services | Conefia",
    description: "DTC brand growth marketing services: Shopify conversion rate optimization, paid ads management, and retention strategy.",
    url: "/solutions/dtc-brand-growth"
  },
  hero: {
    title: "DTC Brand Growth Marketing Services (Shopify)",
    subtitle: "Scale profitably—without guessing. If CAC is rising and ROAS is unstable, you need a system: Shopify conversion rate optimization agency + testing + retention—owned by one team.",
    primaryCta: "Get My DTC Growth Audit",
    secondaryCta: "See Package",
    trustChips: [
      "Shopify CRO",
      "Paid testing",
      "Email/SMS retention",
      "Profit-first reporting"
    ]
  },
  problem: {
    title: "You’re spending—but profit isn’t scaling",
    quote: "No testing discipline (creative and offers change without learning)",
    items: [
      "CAC rising and ROAS unstable",
      "Shopify conversion leaks (PDP, checkout, speed, trust)",
      "Email/SMS isn’t driving repeat purchases",
      "No single owner across ads → site → retention"
    ]
  },
  solution: {
    title: "Increase conversion and LTV with a real system",
    description: "We combine e-commerce CRO services with acquisition and retention so gains compound.",
    primaryCta: "Get My DTC Growth Audit",
    features: [
      "Shopify CRO roadmap + weekly tests",
      "Shopify paid ads and marketing management (Meta/Google where relevant)",
      "DTC retention strategy (welcome, abandon, post-purchase, winback)",
      "E-commerce store redesign agency support when the site needs structural fixes",
      "Profit-first reporting: CAC, contribution margin, repeat rate, LTV"
    ],
    items: [
      "Shopify CRO",
      "Paid Ads Management",
      "Retention Strategy"
    ]
  },
  howItWorks: {
    steps: [
      {
        title: "Validate (Weeks 1–2)",
        description: "Tracking cleanup + funnel audit + test plan"
      },
      {
        title: "Build (Weeks 3–8)",
        description: "Ship CRO improvements weekly + launch testing system + deploy retention flows"
      },
      {
        title: "Launch (Weeks 9–10)",
        description: "Scale winners + reporting cadence + decision rules"
      },
      {
        title: "Scale (Monthly)",
        description: "Continuous CRO + creative iteration + retention expansion"
      }
    ]
  },
  proof: {
    title: "What brands typically see in 10–12 weeks",
    items: [
      "Higher conversion rate and revenue per visit",
      "More stable CAC/ROAS due to disciplined testing",
      "Higher repeat rate with lifecycle flows",
      "Clear reporting that drives decisions"
    ],
    testimonials: [
      {
        quote: "We stopped guessing and started compounding wins.",
        author: "DTC Founder"
      }
    ],
    useCases: [
      "Shopify PDP + checkout lift",
      "Paid testing framework",
      "Email/SMS lifecycle setup for repeat purchase"
    ]
  },
  faq: {
    items: [
      {
        question: "Do you run Meta and Google?",
        answer: "Yes—aligned to the CRO and testing roadmap."
      },
      {
        question: "Do you redesign Shopify stores?",
        answer: "Yes—when needed. We prioritize conversion impact, not aesthetics."
      },
      {
        question: "Do you do email/SMS?",
        answer: "Yes—flows, segmentation, and lifecycle campaigns."
      }
    ]
  },
  finalCta: {
    title: "Want a profit-first growth plan for Shopify?",
    primaryCta: "Get My DTC Growth Audit",
    secondaryCta: "See Package"
  }
};

export default function SolutionsDtcGrowth() {
  return <SeoLandingPage content={CONTENT} />;
}