import React from 'react';
import SeoLandingPage from '@/components/solutions/SeoLandingPage';

const CONTENT = {
  meta: {
    title: "App Redesign & Growth Agency | Conefia",
    description: "App relaunch strategy with mobile app retention and engagement, ASO services, analytics, and investor-ready launch.",
    url: "/solutions/app-relaunch-growth"
  },
  hero: {
    title: "App Redesign and Growth Agency for Relaunches",
    subtitle: "Your app is live—but users aren’t sticking. Let’s fix that. Conefia runs a retention-first relaunch: product fixes, UX refresh, and app store optimization (ASO) services—so growth is earned, not forced.",
    primaryCta: "Get My Relaunch Plan",
    secondaryCta: "See Sprint",
    trustChips: [
      "Retention-first",
      "UX + performance",
      "ASO included",
      "Funnel + cohorts"
    ]
  },
  problem: {
    title: "Why apps plateau after launch",
    quote: "Teams ship features without a clear retention plan",
    items: [
      "Retention is weak (users churn after install)",
      "UX/performance issues hurt reviews and referrals",
      "ASO isn’t driving consistent organic downloads",
      "Analytics can’t answer “what’s working?”"
    ]
  },
  solution: {
    title: "Mobile app retention and engagement—then relaunch with confidence",
    description: "Our app redesign services focus on activation, value moments, and measurable engagement.",
    primaryCta: "Get My Relaunch Plan",
    features: [
      "Retention-led product fixes (activation + repeat behaviors)",
      "UX refresh + performance improvements",
      "App user retention strategy backed by funnels + cohorts (D1/D7/D30)",
      "App relaunch strategy investor ready: narrative, metrics story, rollout plan",
      "ASO services: keywords, store copy, screenshots, reviews strategy"
    ],
    items: [
      "Retention Focus",
      "UX & Performance",
      "ASO & Growth"
    ]
  },
  howItWorks: {
    steps: [
      {
        title: "Validate (Weeks 1–2)",
        description: "Retention + funnel audit + ASO audit + prioritized relaunch backlog"
      },
      {
        title: "Build (Weeks 3–6)",
        description: "UX/performance fixes + onboarding + analytics instrumentation + store assets"
      },
      {
        title: "Launch (Weeks 7–8)",
        description: "Release + QA + tracking verification + post-launch experiment plan"
      },
      {
        title: "Scale (Monthly)",
        description: "Retention optimization + ASO iteration + growth tests driven by cohort data"
      }
    ]
  },
  proof: {
    title: "What improves after a proper relaunch",
    items: [
      "Higher activation and early retention",
      "Better ratings and store conversion",
      "Stronger organic installs via ASO",
      "Clear measurement for roadmap decisions"
    ],
    testimonials: [
      {
        quote: "We finally understood why users churned—and fixed it.",
        author: "Mobile Founder"
      }
    ],
    useCases: [
      "Onboarding redesign → retention lift",
      "Performance + UX polish → better reviews",
      "ASO refresh → organic downloads consistency"
    ]
  },
  faq: {
    items: [
      {
        question: "Do you cover iOS and Android?",
        answer: "Yes—native or cross-platform."
      },
      {
        question: "Do you handle store assets?",
        answer: "Yes—ASO services include copy + screenshots + keyword strategy."
      },
      {
        question: "How do you measure success?",
        answer: "Activation, retention cohorts, conversion rates, and review/store performance."
      }
    ]
  },
  finalCta: {
    title: "Ready for a relaunch that actually changes retention?",
    primaryCta: "Get My Relaunch Plan",
    secondaryCta: "See Sprint"
  }
};

export default function SolutionsAppRelaunch() {
  return <SeoLandingPage content={CONTENT} />;
}