import { 
  Workflow, MapPin, Phone, Calendar, 
  ShieldCheck, Brain, Rocket, Flag,
  RefreshCw, Smartphone, Download, LineChart,
  ShoppingBag, FlaskConical, Mail, BadgeDollarSign,
  Lock, FileCheck, Users, Gauge,
  Layout, Code2, Presentation, PieChart
} from 'lucide-react';

export const PERSONAS = [
  {
    id: 'clinic-growth',
    label: 'Clinic Growth',
    problemTitle: 'Patient growth is leaking across your digital patient journey.',
    problems: [
      'Portal + intake + website feel disconnected — patients drop before booking',
      'Updates take weeks because every vendor owns a small piece',
      'No single owner for bookings, inquiries, and patient retention',
      'You can’t clearly see what drives calls, forms, and appointments'
    ],
    solutionTitle: 'One team. One backlog. More booked appointments.',
    solutionSubtitle: 'HIPAA-aware workflows. Weekly demos. One accountable team.',
    solutions: [
      {
        title: 'Patient journey upgrades',
        desc: 'Portal + intake + website improvements that reduce friction and improve conversion.',
        icon: Workflow
      },
      {
        title: 'Local visibility + trust',
        desc: 'Google Business Profile, local SEO, and reviews workflow to drive qualified demand.',
        icon: MapPin
      },
      {
        title: 'Tracking that matters',
        desc: 'Call/form/booking tracking with a simple dashboard your team actually uses.',
        icon: Phone
      },
      {
        title: 'Weekly delivery cadence',
        desc: 'Weekly demos, clear priorities, and one accountable team end-to-end.',
        icon: Calendar
      }
    ],
    topNavCta: 'Book Clinic Call',
    heroPrimaryCta: 'Get my Clinic Growth Roadmap',
    heroSecondaryCta: 'See the 12-week plan',
    packagesCta: 'Explore Clinic Package',
    footerFormButton: 'Book Clinic Call',
    footerFormPrompt: 'Tell us your clinic specialty + location and your #1 growth bottleneck.',
    destination: '/solutions/clinic-growth',
    primaryCta: 'Get my Clinic Growth Roadmap',
    secondaryCta: 'See Clinic Package',
  },
  {
    id: 'ai-saas-mvp',
    label: 'AI SaaS MVP Sprint',
    problemTitle: 'You’re building — but you’re not getting pilots yet.',
    problems: [
      'MVP scope keeps changing and shipping keeps slipping',
      'LLM/agent choices feel high-risk (architecture, data, evaluation)',
      'Dev, AI, design, and marketing aren’t moving in one direction',
      'You need paying pilots — not another prototype'
    ],
    solutionTitle: 'Ship an AI SaaS MVP and launch for pilots — fast.',
    solutionSubtitle: 'From scope → MVP → pilot launch in one sprint.',
    solutions: [
      {
        title: 'MVP scope you can defend',
        desc: 'Clear “must-have” scope + success metrics tied to real user value.',
        icon: ShieldCheck
      },
      {
        title: 'AI architecture done right',
        desc: 'Practical LLM/agent design (RAG, evals, monitoring) that won’t create rework later.',
        icon: Brain
      },
      {
        title: 'Launch system included',
        desc: 'Positioning + landing page + onboarding + analytics so pilots have somewhere to land.',
        icon: Rocket
      },
      {
        title: 'Weekly demos + stage gates',
        desc: 'Visible progress, clean milestones, and sign-offs that keep momentum.',
        icon: Flag
      }
    ],
    topNavCta: 'Book MVP Call',
    heroPrimaryCta: 'Get my MVP + Pilot Roadmap',
    heroSecondaryCta: 'See the 12-week sprint',
    packagesCta: 'Explore Sprint',
    footerFormButton: 'Book MVP Call',
    footerFormPrompt: 'What are you building, who is the buyer, and what’s your target launch date?',
    destination: '/solutions/ai-saas-mvp-sprint',
    primaryCta: 'Get my MVP + Pilot Roadmap',
    secondaryCta: 'See MVP Sprint',
  },
  {
    id: 'app-relaunch',
    label: 'App Relaunch',
    problemTitle: 'Your app is live — but users aren’t sticking around.',
    problems: [
      'Retention is weak (users churn after install)',
      'UX/performance issues drag ratings and referrals down',
      'ASO isn’t bringing consistent organic downloads',
      'You don’t trust your analytics enough to decide what to fix'
    ],
    solutionTitle: 'Fix retention, relaunch the app, then grow with data.',
    solutionSubtitle: 'Retention first. ASO + analytics included.',
    solutions: [
      {
        title: 'Retention-led product fixes',
        desc: 'Prioritize changes that improve activation and repeat usage.',
        icon: RefreshCw
      },
      {
        title: 'UX refresh + performance',
        desc: 'Clean up friction, speed, and quality to lift ratings.',
        icon: Smartphone
      },
      {
        title: 'ASO + store assets',
        desc: 'Keywords, screenshots, and review strategy to grow organic installs.',
        icon: Download
      },
      {
        title: 'Analytics you can act on',
        desc: 'Funnels + cohorts (D1/D7/D30) so you know what’s working.',
        icon: LineChart
      }
    ],
    topNavCta: 'Book Relaunch Call',
    heroPrimaryCta: 'Get my Relaunch Plan',
    heroSecondaryCta: 'See the 8-week sprint',
    packagesCta: 'Explore Sprint',
    footerFormButton: 'Book Relaunch Call',
    footerFormPrompt: 'Share your app link (store/website) and where users drop off today.',
    destination: '/solutions/app-relaunch-growth',
    primaryCta: 'Get my Relaunch Plan',
    secondaryCta: 'See Relaunch Sprint',
  },
  {
    id: 'dtc-growth',
    label: 'DTC Growth',
    problemTitle: 'You’re spending — but profit isn’t scaling.',
    problems: [
      'CAC is rising and ROAS is unstable',
      'Shopify conversion leaks reduce revenue per visit',
      'Email/SMS isn’t driving repeat purchases',
      'No single owner for the full funnel (ads → site → retention)'
    ],
    solutionTitle: 'Increase conversion and LTV — without guesswork.',
    solutionSubtitle: 'CRO + paid + lifecycle in one owner.',
    solutions: [
      {
        title: 'Shopify CRO roadmap + weekly tests',
        desc: 'Fix friction, improve PDP/checkout, and lift conversion rate.',
        icon: ShoppingBag
      },
      {
        title: 'Paid testing system',
        desc: 'Creative + audience experiments tied to clear hypotheses (not random tweaks).',
        icon: FlaskConical
      },
      {
        title: 'Retention flows that sell',
        desc: 'Email/SMS lifecycle: welcome, abandon, post-purchase, winback.',
        icon: Mail
      },
      {
        title: 'Profit-first reporting',
        desc: 'CAC, margin, LTV, repeat rate — tracked consistently.',
        icon: BadgeDollarSign
      }
    ],
    topNavCta: 'Get Growth Audit',
    heroPrimaryCta: 'Get my DTC Growth Audit',
    heroSecondaryCta: 'See the growth system',
    packagesCta: 'Explore Package',
    footerFormButton: 'Request Audit',
    footerFormPrompt: 'What do you sell, and what’s the biggest issue: traffic, conversion, or repeat purchases?',
    destination: '/solutions/dtc-growth',
    primaryCta: 'Get my DTC Growth Audit',
    secondaryCta: 'See DTC Package',
  },
  {
    id: 'enterprise-innovation',
    label: 'Enterprise Innovation',
    problemTitle: 'Your MVP is stuck in alignment and approvals.',
    problems: [
      'Alignment takes too long across teams and stakeholders',
      'POCs don’t become pilot-ready MVPs',
      'Vendor sprawl and unclear ownership slows execution',
      'Governance/security requirements create delivery friction'
    ],
    solutionTitle: 'Pilot-ready MVPs — with governance built in.',
    solutionSubtitle: 'Stage gates + audit trail from day one.',
    solutions: [
      {
        title: 'Compliance-aware delivery',
        desc: 'Security/privacy considered early — no last-minute rewrites.',
        icon: Lock
      },
      {
        title: 'Stage gates + audit trail',
        desc: 'Clear checkpoints, documentation, and sign-offs.',
        icon: FileCheck
      },
      {
        title: 'End-to-end ownership',
        desc: 'Product + engineering + launch enablement with one partner.',
        icon: Users
      },
      {
        title: 'Measurement and adoption',
        desc: 'Analytics + rollout support to prove value quickly.',
        icon: Gauge
      },
    ],
    topNavCta: 'Discuss Roadmap',
    heroPrimaryCta: 'Discuss my Innovation Roadmap',
    heroSecondaryCta: 'See how we deliver',
    packagesCta: 'Explore Program',
    footerFormButton: 'Request Consult',
    footerFormPrompt: 'What initiative are you leading, and what constraints (security/timeline) matter most?',
    destination: '/solutions/corporate-innovation',
    primaryCta: 'Discuss my Innovation Roadmap',
    secondaryCta: 'See Corporate Program',
  },
  {
    id: 'accelerator-support',
    label: 'Accelerator Support',
    problemTitle: 'Founders get advice — but shipping doesn’t scale.',
    problems: [
      'Teams stall without technical leadership or delivery support',
      'Demo Day deadlines create last-minute chaos',
      'Quality varies across cohort MVPs and launch readiness',
      'Sponsor/funder reporting is manual and time-consuming'
    ],
    solutionTitle: 'Cohorts that ship MVPs before Demo Day.',
    solutionSubtitle: 'Cohort templates + delivery squads + reporting.',
    solutions: [
      {
        title: 'Cohort execution system',
        desc: 'Templates + cadence so every team knows what “good” looks like.',
        icon: Layout
      },
      {
        title: 'MVP build squads',
        desc: 'Product + engineering support for founders who need delivery help.',
        icon: Code2
      },
      {
        title: 'Demo Day readiness',
        desc: 'Product polish, onboarding, landing page, and metrics story.',
        icon: Presentation
      },
      {
        title: 'Sponsor-friendly reporting',
        desc: 'Dashboards that make outcomes easy to communicate and renew funding.',
        icon: PieChart
      }
    ],
    topNavCta: 'Get Cohort Plan',
    heroPrimaryCta: 'Get my Cohort Support Plan',
    heroSecondaryCta: 'See how cohorts ship',
    packagesCta: 'Explore Support',
    footerFormButton: 'Request Plan',
    footerFormPrompt: 'How many startups per cohort, and what outcomes do you track (MVPs, pilots, funding)?',
    destination: '/solutions/accelerator-support',
    primaryCta: 'Get my Cohort Support Plan',
    secondaryCta: 'See Accelerator Program',
  }
];