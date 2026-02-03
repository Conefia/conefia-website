import React from 'react';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, SolutionTrustedBy, 
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta 
} from '@/components/solutions/SeoLandingPage';
import { HeroVisual, MetricsVisual, ProblemVisual, SolutionVisual, RelaunchPlanVisual } from '@/components/solutions/app-relaunch/AppRelaunchVisuals';
import BrandCarousel from '@/components/landing/BrandCarousel';
import { Users, TrendingUp, Smartphone, Layers, Search, BarChart3, Star, Zap, Code2, Database, CreditCard } from 'lucide-react';
import Seo from '@/components/Seo';

export default function SolutionsAppRelaunch() {
  return (
    <SeoLandingPage>
      <Seo 
        title="App Relaunch: Retention + ASO Sprint | Conefia"
        description="App redesign and growth agency for retention: relaunch plan, performance + UX refresh, and ASO services to grow organic installs."
        canonical="/solutions/app-relaunch"
      />
      <SolutionHero 
        title="App Relaunch & Growth"
        subtitle="Fix retention first. Relaunch with confidence. Grow organically. If your app is live but users aren’t sticking, growth is leaking. We’re an app redesign and growth agency built for mobile app retention and engagement + ASO services."
        primaryCta="Get My Relaunch Plan"
        secondaryCta="See the Sprint"
        trustChips={[
          { name: "Swift / SwiftUI", icon: Smartphone },
          { name: "Kotlin / Jetpack", icon: Smartphone },
          { name: "React Native", icon: Code2 },
          { name: "Flutter", icon: Layers },
          { name: "RevenueCat", icon: CreditCard },
          { name: "Amplitude", icon: BarChart3 },
          { name: "Firebase", icon: Database },
          { name: "Mixpanel", icon: TrendingUp }
        ]}
        layout="split"
        visual={<HeroVisual />}
      />
      <SolutionMetrics 
        title="Outcomes that matter"
        visual={<MetricsVisual />}
        items={[]}
      />
      <SolutionTrustedBy 
        title="Trusted by top mobile apps."
        visual={<BrandCarousel />}
      />
      <SolutionProblem 
        title="Your app is live — but users aren’t staying."
        quote="Acquisition without retention is just a very expensive way to burn your runway."
        items={[
          "Retention is weak (users churn after install)",
          "UX/performance issues hurt reviews and referrals",
          "ASO isn’t driving consistent organic downloads",
          "Analytics isn’t clean enough to make decisions"
        ]}
        visual={<ProblemVisual />}
      />
      <SolutionDetails 
        title="A relaunch sprint that’s investor-ready."
        description="We stop the leak. We fix the product experience to build habits, then we layer on organic growth engines to scale without relying solely on paid ads."
        primaryCta="Get My Relaunch Plan"
        features={[
          "Retention-led product fixes (activation + habit loops)",
          "App redesign services (UX refresh + performance cleanup)",
          "App store optimization (ASO) services (keywords, assets, testing plan)",
          "Analytics you can act on (funnels + cohorts + events)"
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
            title: "Build (Weeks 2–4)",
            description: "Execution sprint: UX friction removal, performance tuning, and implementation of core activation loops."
          },
          {
            title: "Relaunch (Weeks 5–6)",
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
        title="Common use cases"
        items={[
          "“We need a relaunch strategy that’s investor ready”",
          "“We need organic growth from ASO, not only ads”",
          "“We need an app user retention strategy that actually works”"
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