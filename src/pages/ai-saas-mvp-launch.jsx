import React from 'react';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, RoadmapCallSection,
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta 
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
        description="AI SaaS MVP development agency for founders: AI agent + LLM integration + launch system to win your first paying pilots."
        canonical="/solutions/ai-saas-mvp-launch"
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
        title="Outcomes founders care about"
        visual={<MetricsVisual />}
        items={[]}
      />
      <SolutionProblem 
        title="Your MVP keeps moving — and traction stays unclear."
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
        useCasesTitle="AI Models We Work With"
        useCases={["OpenAI (GPT-4o)", "Anthropic (Claude 3.5)", "Llama 3 / Mistral (Open Source)", "LangChain / LlamaIndex"]}
      />
      <SolutionFAQ 
        items={[
          {
            question: "Do you build the AI + the product?",
            answer: "Yes — we are a full-stack agency. One team, one backlog. We handle the frontend, backend, database, AND the AI agent logic/LLM integration."
          },
          {
            question: "Do you help with pilots?",
            answer: "Yes — we ship the product and the pilot launch system (landing pages, onboarding flows, analytics) so you can close deals."
          },
          {
            question: "Who owns the code?",
            answer: "You do. 100%. We build in your repository or transfer full ownership upon completion."
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