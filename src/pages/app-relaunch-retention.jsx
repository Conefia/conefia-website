import React from 'react';
import SeoLandingPage, { 
  SolutionHero, SolutionMetrics, 
  SolutionProblem, SolutionDetails, SolutionProcess, 
  SolutionOutcomes, SolutionProof, SolutionFAQ, SolutionFinalCta, RoadmapCallSection 
} from '@/components/solutions/SeoLandingPage';
import { HeroVisual, MetricsVisual, ProblemVisual, SolutionVisual, RelaunchPlanVisual } from '@/components/solutions/app-relaunch/AppRelaunchVisuals';
import { Users, TrendingUp, Smartphone, Layers, Search, BarChart3, Star, Zap, Code2, Database, CreditCard } from 'lucide-react';
import AppRelaunchFitCheck from '@/components/solutions/app-relaunch/AppRelaunchFitCheck';
import CommonReasons from '@/components/solutions/app-relaunch/CommonReasons';
import ProcessStepVisual from '@/components/solutions/app-relaunch/ProcessStepVisual';
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
        title="Fix retention first, then grow from a stronger product"
        description="This is not just a visual refresh. We find the drop-offs, fix the friction, improve performance, strengthen store conversion, and set up analytics you can trust."
        primaryCta="Get My Relaunch Plan"
        riskReducer="Scope locks by Week 2. If priorities are still unclear, we reset before build."
        features={[
          "Retention diagnosis across onboarding, activation, and repeat usage",
          "UX updates focused on clarity, speed, and confidence",
          "Performance fixes that improve ratings and usability",
          "ASO, screenshots, messaging, and review strategy",
          "Funnel and cohort analytics to measure impact",
          "Weekly demos and stage gates to keep everything on track"
        ]}
        visual={<SolutionVisual />}
      />
      <SolutionProcess 
        steps={[
          {
            title: "Validate (Weeks 1–2)",
            description: "Retention audit + relaunch plan. We review the product, data, ratings, and store performance, then lock what matters most."
          },
          {
            title: "Build (Weeks 3–10)",
            description: "Product fixes + UX + performance + analytics. We ship the highest-impact improvements first, with weekly demos and clear progress."
          },
          {
            title: "Launch (Weeks 11–12)",
            description: "Release support + store lift + measurement. We refresh store assets, support the release, and make sure tracking is live."
          },
          {
            title: "Scale (Monthly)",
            description: "Retention improvement + growth tuning. After launch, we keep improving repeat usage, store performance, and growth efficiency."
          }
        ]}
        visual={<ProcessStepVisual />}
      />
      <CommonReasons />
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
        // Dynamic App Relaunch content
        imageBadge="RETENTION-FIRST RELAUNCH"
        imageOverlay={{ title: "8–12 weeks to relaunch", subtitle: "Scope locked. Weekly demos. No guesswork." }}
        sectionBadge="Why retention matters"
        sectionTitle={<><span className="text-[#1a1a1a]">Fix retention</span> <span className="gradient-text">first</span></>}
        // Removed hardcoded sectionBadge and sectionTitle to use component defaults
        featureCards={[
          { num: "01", title: "Ship fixes weekly, not someday", desc: "Product, UX, and performance improvements shipped every week.", color: "from-[#DBFE01]/20 to-[#DBFE01]/5", border: "border-[#DBFE01]/30" },
          { num: "02", title: "Fix retention before scaling spend", desc: "Improve onboarding, repeat usage, and store conversion first.", color: "from-emerald-50 to-teal-50/30", border: "border-emerald-200/50" },
          { num: "03", title: "Built for live apps", desc: "Improve what is working. Rebuild only when it is truly needed.", color: "from-blue-50 to-indigo-50/30", border: "border-blue-200/50" },
          { num: "04", title: "Know what's moving growth", desc: "Clear funnels, cohorts, and store metrics you can act on.", color: "from-purple-50 to-violet-50/30", border: "border-purple-200/50" }
        ]}
      />
      <SolutionFAQ 
        items={[
          {
            question: "What do you mean by \"app relaunch?\"",
            answer: "A relaunch means improving the product in a way users can actually feel — not just updating the visuals. It usually includes product fixes, UX improvements, performance cleanup, store optimization, and analytics so the next version performs better after release."
          },
          {
            question: "Do we need to rebuild the whole app?",
            answer: "Usually, no. We start by finding the highest-impact fixes first. If your current product can be improved without a rebuild, that is usually the fastest and most cost-effective path."
          },
          {
            question: "Why do you focus so much on retention?",
            answer: "Because retention is what turns installs into actual product growth. If users leave too early, acquisition gets less efficient and growth becomes harder to sustain."
          },
          {
            question: "Can you help with growth, or only product fixes?",
            answer: "Yes. Our relaunch work is designed to improve the product side of growth: activation, repeat usage, store conversion, ratings, and the clarity needed to make smarter growth decisions afterward."
          },
          {
            question: "Do you handle App Store and Google Play optimization too?",
            answer: "Yes. We can support ASO, screenshots, messaging, store conversion improvement, and review strategy as part of the relaunch."
          },
          {
            question: "How do you decide what to fix first?",
            answer: "We prioritize based on retention impact, user friction, ratings, store performance, and what is blocking growth most. The goal is not to fix everything. The goal is to fix what matters most first."
          },
          {
            question: "Can you help if we already have an internal team?",
            answer: "Yes. We can work as an extension of your team, bring the product and growth structure, and help move the relaunch forward faster without creating more coordination overhead."
          },
          {
            question: "What analytics do you set up?",
            answer: "We usually focus on the metrics that matter most for relaunch decisions: onboarding drop-off, activation, retention, repeat usage, feature engagement, and store-to-install conversion where relevant."
          },
          {
            question: "What happens after the relaunch ships?",
            answer: "We can continue into a monthly scale phase focused on retention experiments, lifecycle messaging, analytics refinement, store optimization, and product iteration."
          },
          {
            question: "Is this a fit if we are still spending on acquisition?",
            answer: "Yes — but the strongest results usually come when retention and conversion improve alongside acquisition, not when acquisition is scaled on top of a leaky product experience. Re-engaged users often perform better than net-new users on early engagement and retention, which is why fixing the product first usually improves growth efficiency."
          }
        ]}
      />
      <RoadmapCallSection 
        title="What you'll get in the 30-minute relaunch roadmap call"
        description="This is not a generic intro call. We will look at your app like a team preparing to relaunch it."
        items={[
          "Clarify the biggest drop-off points in your user journey",
          "Identify what is hurting retention, ratings, or growth most",
          "Define what needs fixing now versus what can wait",
          "Map your 8–12 week relaunch plan",
          "Flag risks early, including analytics gaps, technical debt, store conversion issues, and release complexity"
        ]}
        primaryCta="Get Relaunch Plan"
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