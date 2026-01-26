import React from 'react';
import SeoLandingPage from '@/components/solutions/SeoLandingPage';

const CONTENT = {
  meta: {
    title: "AI SaaS MVP Development Agency | Conefia",
    description: "AI startup product development services: AI SaaS MVP build, AI agent development, and launch to first 100 paying customers.",
    url: "/solutions/ai-saas-founder-sprint"
  },
  hero: {
    title: "AI SaaS MVP Development Agency for Founders",
    subtitle: "Ship the MVP. Launch pilots. Get your first 100 paying customers. Conefia provides AI startup product development services that combine product strategy, engineering, design, and go-to-market—so you stop rebuilding and start selling.",
    primaryCta: "Get My MVP + Pilot Roadmap",
    secondaryCta: "See Sprint",
    trustChips: [
      "Weekly demos",
      "Stage gates",
      "Launch included",
      "Analytics built-in"
    ]
  },
  problem: {
    title: "You’re building—but traction is still unclear",
    quote: "You need paying pilots—not more demos",
    items: [
      "MVP scope keeps changing and shipping slips",
      "Risky technical choices slow decisions (LLMs, agents, data)",
      "Contractors are disconnected (dev, AI, design, marketing)",
      "Analytics is missing or unreliable"
    ]
  },
  solution: {
    title: "AI MVP development + launch system, in one sprint",
    description: "We deliver AI MVP development with practical architecture decisions and a launch path that supports revenue.",
    primaryCta: "Get My MVP + Pilot Roadmap",
    features: [
      "Defensible MVP scope + success metrics",
      "AI agent development for founders (workflows, guardrails, reliability basics)",
      "LLM integration services (RAG/agent setup where appropriate)",
      "Product-ready UX + production engineering",
      "Landing page + onboarding + analytics to support pilots"
    ],
    items: [
      "Defensible Scope",
      "Production Engineering",
      "Launch System"
    ]
  },
  howItWorks: {
    steps: [
      {
        title: "Validate (Weeks 1–2)",
        description: "ICP + scope + architecture plan + evaluation approach"
      },
      {
        title: "Build (Weeks 3–8)",
        description: "MVP build + AI workflows + instrumentation + integrations"
      },
      {
        title: "Launch (Weeks 9–10)",
        description: "Positioning + landing + onboarding + pilot readiness checklist"
      },
      {
        title: "Scale (Monthly)",
        description: "Experiment backlog + pricing iteration support + growth loops"
      }
    ]
  },
  proof: {
    title: "Outcomes founders care about",
    items: [
      "MVP shipped with a scope you can defend",
      "AI that works in production, not just demos",
      "A launch system that supports pilots and revenue",
      "Clear analytics to guide what to build next"
    ],
    testimonials: [
      {
        quote: "They didn’t just build the tech—they got us pilot-ready.",
        author: "Founder"
      }
    ],
    useCases: [
      "AI assistant / agent MVP",
      "B2B AI SaaS with onboarding + analytics",
      "Prototype → product-grade MVP conversion"
    ]
  },
  faq: {
    items: [
      {
        question: "Can you work with our prototype?",
        answer: "Yes—common path is audit → scope → ship."
      },
      {
        question: "Do you build AI agents?",
        answer: "Yes—AI agent development with the right guardrails and measurement."
      },
      {
        question: "Will this help revenue?",
        answer: "We build toward the milestone that matters: first 100 paying customers AI startup readiness."
      }
    ]
  },
  finalCta: {
    title: "Want a pilot-ready MVP roadmap?",
    primaryCta: "Get My MVP + Pilot Roadmap",
    secondaryCta: "See Sprint"
  }
};

export default function SolutionsAiSaasMvpSprint() {
  return <SeoLandingPage content={CONTENT} />;
}