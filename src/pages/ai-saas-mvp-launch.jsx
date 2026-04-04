import React from 'react';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, RoadmapCallSection,
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta, SolutionUseCases
} from '@/components/solutions/SeoLandingPage';
import { HeroVisual, MetricsVisual, ProblemVisual, SolutionVisual, OnePagerVisual } from '@/components/solutions/ai-saas/AiSaasVisuals';
import FitCheck from '@/components/solutions/ai-saas/FitCheck';
import { Bot } from 'lucide-react';
import Seo from '@/components/Seo';

export default function AiSaasMvpLaunch() {
  return (
    <SeoLandingPage>
      <Seo 
        title="AI SaaS MVP Sprint: AI MVP Development | Conefia"
        description="Launch a pilot-ready AI SaaS MVP in 8–12 weeks. Lock scope early, choose the right AI architecture, and start winning pilots."
        canonical="/solutions/ai-saas-mvp-launch"
        keywords="AI SaaS MVP launch, AI SaaS MVP development, AI MVP development, AI MVP launch, pilot-ready AI MVP, AI product development agency, LLM MVP development, RAG MVP development, AI agent MVP development, AI startup MVP development, build AI SaaS MVP, launch AI MVP, AI architecture for startups, AI product launch, MVP for AI startup, how to launch an AI SaaS MVP, AI SaaS MVP in 8–12 weeks, build a pilot-ready AI MVP, AI MVP development for startups, RAG vs agents for AI MVP, production-ready AI MVP development"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/ai-saas-mvp-launch/#service",
          "name": "AI SaaS MVP Launch",
          "serviceType": "AI MVP development",
          "provider": { "@id": "https://conefia.com/#organization" },
          "url": "https://conefia.com/ai-saas-mvp-launch",
          "areaServed": "Worldwide",
          "offers": { "@type": "Offer", "url": "https://conefia.com/book", "price": "0", "priceCurrency": "USD", "description": "Start with a free roadmap call" }
        })}}
      />
      <SolutionHero 
        breadcrumbLabel="AI SaaS MVP Launch"
        title="Ship a Pilot-Ready AI MVP in 8–12 Weeks"
        subtitle="Ship a pilot-ready AI MVP — and start winning paying customers. You're building fast, but scope and architecture decisions are slowing you down. We're your AI SaaS MVP development agency: product + AI + full-stack + launch system, under one plan."
        primaryCta="Get My MVP Roadmap"
        secondaryCta="See the Sprint"
        microCopy="Free 30-min roadmap call. Leave with scope, timeline, and a recommended AI approach (RAG vs agents vs fine-tuning)."
        trustChips={[
          "Scope locked (Week 2)",
          "Weekly demos",
          "Pilot launch kit",
          "LLM + Agent build"
        ]}
        trustStrip={[
          { label: "Typical MVP", value: "8–12 weeks" },
          { label: "Weekly Demos", value: "Guaranteed" },
          { label: "First Pilots", value: "In sprint 3" },
          { label: "One Backlog", value: "One owner" }
        ]}
        layout="split"
        visual={<HeroVisual />}
      />
      <FitCheck />
      <SolutionMetrics 
        title={<>Outcomes founders <span className="gradient-text">care about</span></>}
        visual={<MetricsVisual />}
        items={[]}
      />
      <SolutionProblem 
        title="Why most AI MVPs get delayed and miss pilots and revenue"
        quote="Most AI MVPs don't fail from lack of code. They fail from unclear scope, fragile architecture, and no pilot plan."
        items={[
          "MVP scope expands and shipping slips",
          "One risky LLM choice today becomes a rewrite later",
          "Split contractors don't align (AI vs product vs dev)",
          "You need paying pilots — not more demos"
        ]}
        visual={<ProblemVisual />}
      />
      <SolutionDetails 
        title="Ship the MVP and launch for pilots — fast."
        description={`We don't just "build AI features." We deliver a pilot acquisition system: defended scope, production-ready AI architecture, and the product + assets you need to close early customers.`}
        primaryCta="Get MVP Plan"
        riskReducer="Scope locks by Week 2 — if it can't, we reset before build."
        features={[
          "MVP scope you can defend (must-have workflow only)",
          "AI agent build (tooling, prompts, guardrails)",
          "LLM integration (RAG, function calling, eval plan)",
          "Launch kit (positioning, landing page, onboarding, analytics)",
          "Weekly demos + stage gates (no surprises)"
        ]}
        visual={<SolutionVisual />}
      />
      <RoadmapCallSection />
      <SolutionProcess />
      <SolutionUseCases
        useCasesTitle="Common use cases"
        useCases={[]}
      />
      <SolutionProof 
        title="Built for speed and scale."
        items={["Modern Stack (React/Node/Python)", "Scalable Vector DBs", "Enterprise-grade Auth"]}
        testimonials={[
          { quote: "We went from idea to paying pilot in 9 weeks. The architecture held up perfectly.", author: "James L.", role: "Founder, LegalTech AI" },
          { quote: "They didn't just build the bot, they built the system to sell it.", author: "Sarah K.", role: "CEO, MarketingFlow" },
          { quote: "The scope lock saved us. We would have been building features for months.", author: "David R.", role: "CTO, FinTech AI" },
          { quote: "Investors loved the pilot metrics. Closed our seed round 2 weeks later.", author: "Emily W.", role: "Founder, EdTech Startup" },
          { quote: "Real engineering, not just a wrapper around GPT-4.", author: "Michael T.", role: "VP Eng, Enterprise SaaS" },
          { quote: "The launch system got us our first 10 paying customers in week 1.", author: "Jessica M.", role: "Founder, HR Tech" },
          { quote: "Fastest team we've ever worked with. The daily updates were amazing.", author: "Chris P.", role: "Founder, Sales AI" },
          { quote: "They handled the RAG complexity so we could focus on the user experience.", author: "Alex B.", role: "Technical Founder, Research Tool" },
          { quote: "A true partner. They challenged our assumptions and made the product better.", author: "Nina S.", role: "CEO, Creative AI" },
          { quote: "Pilot-ready meant actually pilot-ready. No bugs, no downtime.", author: "Tom D.", role: "Founder, Logistics AI" }
        ]}
      />
      <SolutionFAQ 
        items={[
          {
            question: "Who is this for?",
            answer: "For founders and product teams who want to launch an AI MVP that can win pilots \u2014 not just ship a demo."
          },
          {
            question: "What happens in the 30-minute roadmap call?",
            answer: "We review your use case, identify the biggest blockers, and map the next 8\u201312 weeks across scope, architecture, and launch."
          },
          {
            question: "What makes this different from a typical AI agency or dev shop?",
            answer: "Most teams build features. We focus on pilot readiness \u2014 clear scope, solid AI architecture, and a product people can actually use."
          },
          {
            question: "What do you mean by \"pilot-ready\"?",
            answer: "It means your MVP is ready for real users in a real workflow \u2014 with enough structure to test, learn, and start closing early customers."
          },
          {
            question: "Can you help if we already have a prototype?",
            answer: "Yes. We can improve what exists, tighten scope, and turn it into something more usable, reliable, and sellable."
          },
          {
            question: "How do you decide between RAG, agents, or fine-tuning?",
            answer: "We choose based on your workflow, data, latency, cost, and risk tolerance. You'll get a clear recommendation and why."
          },
          {
            question: "How do you prevent scope creep?",
            answer: "We lock must-have scope by Week 2, tie it to success metrics, and use stage gates to keep the build focused."
          },
          {
            question: "Do you build the full product or just the AI layer?",
            answer: "The full product \u2014 workflow, UX, backend, AI layer, analytics, and launch readiness."
          },
          {
            question: "Can you work with our current team?",
            answer: "Yes. We can lead the sprint or work alongside your internal team to keep execution moving."
          },
          {
            question: "Will this work for regulated or sensitive data?",
            answer: "It can. We align on security, access control, logging, and data handling early. If stricter controls are needed, we scope for them."
          },
          {
            question: "How fast can we expect progress?",
            answer: "That depends on your starting point, but the goal is simple: less drift, faster decisions, quicker path to pilots."
          },
          {
            question: "What happens after the MVP ships?",
            answer: "We can keep supporting the product through pilot feedback, activation improvements, architecture refinement, and next-step growth work."
          }
        ]}
      />
      <SolutionFinalCta 
        title="Ready to ship a pilot-ready AI MVP?"
        primaryCta="Get My MVP Roadmap"
        secondaryCta="See the Sprint"
        visual={<OnePagerVisual />}
      />
    </SeoLandingPage>
  );
}