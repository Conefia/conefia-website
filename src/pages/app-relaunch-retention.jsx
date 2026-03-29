import React from 'react';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, 
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta 
} from '@/components/solutions/SeoLandingPage';
import { HeroVisual, MetricsVisual, ProblemVisual, SolutionVisual, RelaunchPlanVisual } from '@/components/solutions/app-relaunch/AppRelaunchVisuals';
import { Users, TrendingUp, Smartphone, Layers, Search, BarChart3, Star, Zap, Code2, Database, CreditCard } from 'lucide-react';
import AppRelaunchFitCheck from '@/components/solutions/app-relaunch/AppRelaunchFitCheck';
import Seo from '@/components/Seo';

export default function AppRelaunchRetention() {
  return (
    <SeoLandingPage>
      <Seo 
        title="App Relaunch: Retention + ASO Sprint | Conefia"
        description="App redesign and growth agency for retention: relaunch plan, performance + UX refresh, and ASO services to grow organic installs."
        canonical="/solutions/app-relaunch-retention"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/app-relaunch-retention/#service",
          "name": "App Relaunch & Retention",
          "serviceType": "Mobile app relaunch and retention optimization",
          "provider": { "@id": "https://conefia.com/#organization" },
          "url": "https://conefia.com/app-relaunch-retention",
          "areaServed": "Worldwide",
          "offers": { "@type": "Offer", "url": "https://conefia.com/book", "price": "0", "priceCurrency": "USD" }
        })}}
      />
      <SolutionHero 
        breadcrumbLabel="App Relaunch & Retention"
        title="Relaunch Your App and Improve Retention in 8-12 Weeks"
        subtitle="Fix retention first. Relaunch with confidence. Grow organically. If your app is live but users aren't sticking, growth is leaking. We're an app redesign and growth agency built for mobile app retention and engagement + ASO services."
        primaryCta="Get My Relaunch Plan"
        secondaryCta="See the Sprint"
        microCopy="Free 30-minute roadmap call. Leave with clear priorities, timeline, and a relaunch plan built around retention and sustainable growth."
        trustChips={[
          "Scope locked (Week 2)",
          "Weekly demos",
          "UX + performance fixes",
          "Store conversion + analytics"
        ]}
        layout="split"
        visual={<HeroVisual />}
      />
      <SolutionMetrics 
        title={<>Outcomes that <span className="gradient-text">matter</span></>}
        visual={<MetricsVisual />}
        items={[]}
      />
      <AppRelaunchFitCheck />
      <SolutionProblem 
        title="Your app is live, but users are NOT staying"
        quote="Most apps do not stall because of one missing feature. They stall because retention leaks, product friction, and unclear data compound over time."
        items={[
          "Users install the app, but too few come back",
          "Onboarding or UX friction is hurting activation",
          "Performance issues are dragging down ratings and referrals",
          "Your store listing is not converting as well as it should",
          "Acquisition spend is not compounding because retention is weak",
          "Analytics exist, but they do not create enough clarity to guide growth"
        ]}
        visual={<ProblemVisual />}
      />
      <SolutionDetails 
        title="Fix retention first. Relaunch with confidence. Then grow from a stronger product"
        description="We do not treat relaunch as a visual refresh. We treat it as a product and growth reset. That means identifying where users drop off, fixing the experience that causes friction, improving performance, strengthening store conversion, and putting reliable analytics in place so growth decisions stop feeling like guesswork."
        primaryCta="Get My Relaunch Plan"
        features={[
          "Retention diagnosis across onboarding, activation, and repeat usage",
          "UX refresh focused on clarity, speed, and user confidence",
          "Performance improvements that support better ratings and smoother usage",
          "Store conversion support, including ASO, screenshots, messaging, and review strategy",
          "Funnel and cohort analytics to measure what changes after relaunch",
          "Weekly demos and stage gates so progress stays visible and controlled"
        ]}
        visual={<SolutionVisual />}
      />
      <SolutionProcess 
        steps={[
          {
            title: "Diagnose (Week 1)",
            description: "Deep dive audit: Retention metrics + App Store performance + Event tracking health check."
          },
          {
            title: "Build (Weeks 2-4)",
            description: "Execution sprint: UX friction removal, performance tuning, and implementation of core activation loops."
          },
          {
            title: "Relaunch (Weeks 5-6)",
            description: "Growth layer: New ASO visual assets, keyword optimization, and review management strategy."
          },
          {
            title: "Scale (Monthly)",
            description: "Continuous improvement: Retention experiments, A/B testing store assets, and optimizing growth loops."
          }
        ]}
        visual={<div className="mt-8 flex justify-center"><div className="inline-flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"><div className="flex items-center gap-2"><Search className="w-4 h-4 text-blue-500"/><span className="text-sm font-medium">Audit</span></div><div className="w-px h-6 bg-gray-300"/> <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-[#DBFE01]"/><span className="text-sm font-medium">Redesign</span></div><div className="w-px h-6 bg-gray-300"/><div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-500" /><span className="text-sm font-medium">Grow</span></div></div></div>}
      />
      <SolutionOutcomes 
        title={<>Common <span className="text-[#DBFE01] font-bold" style={{WebkitTextFillColor: '#DBFE01'}}>use cases</span></>}
        items={[
          "We need a relaunch strategy that's investor ready",
          "We need organic growth from ASO, not only ads",
          "We need an app user retention strategy that actually works"
        ]}
        visual={<div className="grid gap-4">{["Consumer Social Apps", "Subscription Utilities", "Fintech & Health"].map((u,i) => <div key={i} className="bg-white/10 p-4 rounded-lg border border-white/5 flex items-center gap-3"><Smartphone className="w-5 h-5 text-[#DBFE01]"/><span className="text-white font-medium">{u}</span></div>)}</div>}
      />
      <SolutionProof 
        title="Turn installs into active users."
        items={["Crash-free > 99.9%", "Native (Swift/Kotlin)", "React Native / Flutter"]}
        testimonials={[
          { quote: "Our retention Day-30 doubled after the redesign. The ASO work also lowered our CPA by 40%.", author: "Michael T.", role: "Head of Product, FinApp" },
          { quote: "Finally, a team that understands that pretty screens don't matter if users don't stick.", author: "Elena R.", role: "Founder, HealthTrack" },
          { quote: "The audit was brutal but necessary. We fixed the leaks and growth followed.", author: "Jason K.", role: "CEO, Social App" },
          { quote: "ASO results were instant. We're ranking #1 for our main keyword.", author: "Lisa M.", role: "Marketing Lead, Utility App" },
          { quote: "They turned our churn problem into a retention engine.", author: "David B.", role: "Founder, EdTech App" },
          { quote: "Best design sprint we've ever done. The new onboarding is converting 2x better.", author: "Sarah L.", role: "Product Owner, Fitness App" },
          { quote: "Performance matters. The speed improvements alone lifted our ratings.", author: "Tom H.", role: "CTO, Dating App" },
          { quote: "We stopped burning cash on ads and started growing organically.", author: "Rachel G.", role: "Founder, Meditation App" },
          { quote: "Data-driven design. Every pixel has a purpose.", author: "Mark S.", role: "VP Product, Gaming Startup" },
          { quote: "The relaunch plan was executed perfectly. On time and on budget.", author: "Chris D.", role: "CEO, Travel App" }
        ]}
        useCasesTitle="Platforms We Master"
        useCases={["iOS (App Store)", "Android (Google Play)", "React Native", "Flutter"]}
      />
      <SolutionFAQ 
        items={[
          {
            question: "Do you do the design and the code?",
            answer: "Yes. We handle the UX/UI redesign and the implementation (Native or Cross-platform) to ensure performance improvements are realized."
          },
          {
            question: "How long does a relaunch take?",
            answer: "Typically 4-6 weeks for the core sprint. We focus on high-impact changes that move the needle on retention first."
          },
          {
            question: "Can you guarantee ASO results?",
            answer: "We guarantee a data-driven process and implementation of best practices. While store algorithms change, our clients typically see 15-30% lift in conversion."
          }
        ]}
      />
      <SolutionFinalCta 
        title="Want users to stick after install?"
        primaryCta="Get My Relaunch Plan"
        secondaryCta="See the Sprint"
        visual={<RelaunchPlanVisual />}
      />
    </SeoLandingPage>
  );
}