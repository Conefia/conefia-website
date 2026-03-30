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
      <AppRelaunchFitCheck />
      <SolutionMetrics 
        title="Outcomes product teams actually care about"
        visual={<MetricsVisual />}
        items={[]}
      />
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
        badge="RETENTION-FIRST RELAUNCH"
        statTitle="8–12 weeks to relaunch"
        statDesc="Scope locked. Weekly demos. No guesswork."
        imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80"
        imageAlt="Mobile app retention metrics and analytics dashboard"
        techStackTitle="Tech stack we relaunch with"
        techStackLogos={[
          { name: "Flutter", url: "https://flutter.dev/assets/icon_flutter.817b4a56b047d0d36b338dd9ffd44dbd.svg" },
          { name: "React Native", url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/React.svg" },
          { name: "Figma", url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figma-logo.svg" },
          { name: "Firebase", url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Firebase_icon.svg" },
          { name: "UXcam", url: "https://cdn.brandfetch.io/id3HhK-6Wr/idspkLJs23.svg?c=1bxid64Mup7aczewSAYMX&t=1662630648941", wide: true },
          { name: "AppTweak", url: "https://cdn.brandfetch.io/idMJBTnE3x/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1767648114271", wide: true },
          { name: "Mixpanel", url: "https://cdn.brandfetch.io/idr_rhI2FS/theme/dark/idMJ8uODLv.svg?c=1bxid64Mup7aczewSAYMX&t=1717143401811", wide: true },
          { name: "RevenueCat", url: "https://revenuecat.wpenginepowered.com/wp-content/uploads/2025/10/app_icon.svg" },
          { name: "Amplitude", url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Amplitude_logo_2020.svg", wide: true },
          { name: "App Store", url: "https://cdn.brandfetch.io/idj34mSa0R/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1763653537279", wide: true },
          { name: "Swift", url: "https://cdn.brandfetch.io/id43MWupxN/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1769252279088", wide: true },
          { name: "Kotlin", url: "https://cdn.brandfetch.io/id8oU9wOdk/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772514620898", wide: true },
          { name: "Maze", url: "https://cdn.brandfetch.io/iddFGFHNcm/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1773377594137", wide: true },
          { name: "AppsFlyer", url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo_of_AppsFlyer.svg", wide: true },

        ]}
        useCases={["iOS (App Store)", "Android (Google Play)", "React Native", "Flutter"]}
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
      <SolutionFinalCta 
        title="Want users to stick after install?"
        primaryCta="Get My Relaunch Plan"
        secondaryCta="See the Sprint"
        visual={<RelaunchPlanVisual />}
      />
    </SeoLandingPage>
  );
}