import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export default function PlaybookSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { selectedPersona } = usePersona();

  const playbookConfigs = {
    'clinic-growth': {
      sectionLabel: 'The Playbook',
      headline: 'From clicks to booked appointments.',
      subhead: 'We improve local visibility, patient conversion, and engagement—HIPAA-aware, measurable, and shipped weekly.',
      phases: [
        {
          number: '01',
          icon: Search,
          title: 'Diagnose',
          duration: '1–2 weeks',
          description: 'Find what is blocking calls, forms, and bookings.',
          tasks: [
            'Google Business Profile + local SEO audit',
            'Booking journey + intake friction review',
            'Tracking plan: traffic → calls/forms → appointments'
          ],
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          bgGradient: 'from-blue-500/20 to-indigo-500/20',
          iconBg: 'from-blue-500 to-indigo-600',
          borderColor: 'border-blue-200/50',
          glowColor: 'shadow-blue-500/20',
          accentColor: 'text-blue-600'
        },
        {
          number: '02',
          icon: Code2,
          title: 'Build',
          duration: '3–6 weeks',
          description: 'Fix the patient journey where revenue leaks.',
          tasks: [
            'Landing/service pages + CRO upgrades',
            'Booking + forms + patient portal improvements',
            'Call/form tracking + attribution setup'
          ],
          gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
          bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
          iconBg: 'from-[#DBFE01] to-[#a8c600]',
          borderColor: 'border-[#DBFE01]/50',
          glowColor: 'shadow-[#DBFE01]/30',
          accentColor: 'text-[#a8c600]'
        },
        {
          number: '03',
          icon: Rocket,
          title: 'Launch',
          duration: '1–2 weeks',
          description: 'Turn visibility into consistent appointment demand.',
          tasks: [
            'Local SEO rollout + review system',
            'Conversion-ready pages + messaging',
            'Reporting dashboard (simple + actionable)'
          ],
          gradient: 'from-purple-600 via-pink-600 to-rose-600',
          bgGradient: 'from-purple-500/20 to-pink-500/20',
          iconBg: 'from-purple-500 to-pink-600',
          borderColor: 'border-purple-200/50',
          glowColor: 'shadow-purple-500/20',
          accentColor: 'text-purple-600'
        },
        {
          number: '04',
          icon: TrendingUp,
          title: 'Scale',
          duration: 'Monthly',
          description: 'Grow bookings with content + digital marketing, measured weekly.',
          tasks: [
            'Content creation (service pages, blogs, FAQs)',
            'Digital marketing (paid ads + social content)',
            'CRO experiments + appointment attribution reporting'
          ],
          gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          bgGradient: 'from-emerald-500/20 to-teal-500/20',
          iconBg: 'from-emerald-500 to-teal-600',
          borderColor: 'border-emerald-200/50',
          glowColor: 'shadow-emerald-500/20',
          accentColor: 'text-emerald-600'
        }
      ]
    },
    'ai-saas-mvp': {
      sectionLabel: 'The Playbook',
      headline: 'Pilot-ready AI MVP — without rework.',
      subhead: 'We align scope, AI architecture, and launch essentials so you ship fast, win pilots, and measure real usage.',
      phases: [
        {
          number: '01',
          icon: Search,
          title: 'Validate',
          duration: '1–2 weeks',
          description: 'Lock the MVP that wins pilots.',
          tasks: [
            'ICP + use-case + pilot success metrics',
            'Scope lock: must-haves + stage gates',
            'Risk map (data, eval, cost, security)'
          ],
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          bgGradient: 'from-blue-500/20 to-indigo-500/20',
          iconBg: 'from-blue-500 to-indigo-600',
          borderColor: 'border-blue-200/50',
          glowColor: 'shadow-blue-500/20',
          accentColor: 'text-blue-600'
        },
        {
          number: '02',
          icon: Code2,
          title: 'Build',
          duration: '6–12 weeks',
          description: 'Build a production-grade AI MVP, not a demo.',
          tasks: [
            'Core product flows + scalable backend',
            'AI architecture (RAG/agents/evals)',
            'Analytics instrumentation + event taxonomy'
          ],
          gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
          bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
          iconBg: 'from-[#DBFE01] to-[#a8c600]',
          borderColor: 'border-[#DBFE01]/50',
          glowColor: 'shadow-[#DBFE01]/30',
          accentColor: 'text-[#a8c600]'
        },
        {
          number: '03',
          icon: Rocket,
          title: 'Launch',
          duration: '1–2 weeks',
          description: 'Launch a pilot funnel that converts.',
          tasks: [
            'Landing page + positioning + CRO',
            'Onboarding + activation flows',
            'Feedback loop + iteration plan'
          ],
          gradient: 'from-purple-600 via-pink-600 to-rose-600',
          bgGradient: 'from-purple-500/20 to-pink-500/20',
          iconBg: 'from-purple-500 to-pink-600',
          borderColor: 'border-purple-200/50',
          glowColor: 'shadow-purple-500/20',
          accentColor: 'text-purple-600'
        },
        {
          number: '04',
          icon: TrendingUp,
          title: 'Scale',
          duration: 'Monthly',
          description: 'Add content + demand gen to turn pilots into growth.',
          tasks: [
            'Content creation (SEO pages, blogs, case studies)',
            'Digital marketing (paid, social, email) + funnel tests',
            'Activation/retention experiments + weekly reporting'
          ],
          gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          bgGradient: 'from-emerald-500/20 to-teal-500/20',
          iconBg: 'from-emerald-500 to-teal-600',
          borderColor: 'border-emerald-200/50',
          glowColor: 'shadow-emerald-500/20',
          accentColor: 'text-emerald-600'
        }
      ]
    },
    'app-relaunch': {
      sectionLabel: 'The Playbook',
      headline: 'Fix retention. Relaunch strong. Grow with data.',
      subhead: 'We diagnose churn, ship high-impact fixes, and relaunch with measurement you can trust.',
      phases: [
        {
          number: '01',
          icon: Search,
          title: 'Diagnose',
          duration: '1–2 weeks',
          description: 'Identify why users drop — and what to fix first.',
          tasks: [
            'Funnel + cohort analysis (D1/D7/D30)',
            'UX/performance audit (ratings killers)',
            'Measurement cleanup (events you can trust)'
          ],
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          bgGradient: 'from-blue-500/20 to-indigo-500/20',
          iconBg: 'from-blue-500 to-indigo-600',
          borderColor: 'border-blue-200/50',
          glowColor: 'shadow-blue-500/20',
          accentColor: 'text-blue-600'
        },
        {
          number: '02',
          icon: Code2,
          title: 'Build',
          duration: '3–6 weeks',
          description: 'Ship retention-led improvements in reliable cycles.',
          tasks: [
            'Activation + onboarding improvements',
            'UX + speed + stability fixes',
            'Tracking + dashboards for key flows'
          ],
          gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
          bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
          iconBg: 'from-[#DBFE01] to-[#a8c600]',
          borderColor: 'border-[#DBFE01]/50',
          glowColor: 'shadow-[#DBFE01]/30',
          accentColor: 'text-[#a8c600]'
        },
        {
          number: '03',
          icon: Rocket,
          title: 'Relaunch',
          duration: '1–2 weeks',
          description: 'Relaunch with store assets and a clear story.',
          tasks: [
            'ASO keyword map + store copy',
            'Screenshots/creative + release plan',
            'Ratings strategy + monitoring'
          ],
          gradient: 'from-purple-600 via-pink-600 to-rose-600',
          bgGradient: 'from-purple-500/20 to-pink-500/20',
          iconBg: 'from-purple-500 to-pink-600',
          borderColor: 'border-purple-200/50',
          glowColor: 'shadow-purple-500/20',
          accentColor: 'text-purple-600'
        },
        {
          number: '04',
          icon: TrendingUp,
          title: 'Scale',
          duration: 'Monthly',
          description: 'Grow installs with content and digital marketing and keep users.',
          tasks: [
            'Content + creatives (store, ads, social clips)',
            'Digital marketing (paid + social + lifecycle messaging)',
            'Retention experiments + weekly analytics reporting'
          ],
          gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          bgGradient: 'from-emerald-500/20 to-teal-500/20',
          iconBg: 'from-emerald-500 to-teal-600',
          borderColor: 'border-emerald-200/50',
          glowColor: 'shadow-emerald-500/20',
          accentColor: 'text-emerald-600'
        }
      ]
    },
    'dtc-growth': {
      sectionLabel: 'The Playbook',
      headline: 'Lower CAC. Stabilize ROAS. Grow profit.',
      subhead: 'We run disciplined experiments across Shopify CRO, paid growth, and lifecycle — so results become predictable.',
      phases: [
        {
          number: '01',
          icon: Search,
          title: 'Diagnose',
          duration: '1–2 weeks',
          description: 'Find the biggest profit leaks across your funnel.',
          tasks: [
            'CAC/ROAS/MER audit (creative + audiences)',
            'Shopify conversion audit (PDP/cart/checkout)',
            'Offer + messaging clarity review'
          ],
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          bgGradient: 'from-blue-500/20 to-indigo-500/20',
          iconBg: 'from-blue-500 to-indigo-600',
          borderColor: 'border-blue-200/50',
          glowColor: 'shadow-blue-500/20',
          accentColor: 'text-blue-600'
        },
        {
          number: '02',
          icon: Code2,
          title: 'Build',
          duration: '3–6 weeks',
          description: 'Fix conversion before scaling spend.',
          tasks: [
            'CRO backlog shipped weekly',
            'Offer architecture (bundles, upsells)',
            'Tracking + attribution sanity check'
          ],
          gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
          bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
          iconBg: 'from-[#DBFE01] to-[#a8c600]',
          borderColor: 'border-[#DBFE01]/50',
          glowColor: 'shadow-[#DBFE01]/30',
          accentColor: 'text-[#a8c600]'
        },
        {
          number: '03',
          icon: Rocket,
          title: 'Launch',
          duration: '1–2 weeks',
          description: 'Launch a repeatable testing system.',
          tasks: [
            'Creative pipeline + testing framework',
            'Landing/PDP variants for top products',
            'Lifecycle baseline (welcome, abandon, post-purchase)'
          ],
          gradient: 'from-purple-600 via-pink-600 to-rose-600',
          bgGradient: 'from-purple-500/20 to-pink-500/20',
          iconBg: 'from-purple-500 to-pink-600',
          borderColor: 'border-purple-200/50',
          glowColor: 'shadow-purple-500/20',
          accentColor: 'text-purple-600'
        },
        {
          number: '04',
          icon: TrendingUp,
          title: 'Scale',
          duration: 'Monthly',
          description: 'Predictable growth with creative, content, and weekly experiments.',
          tasks: [
            'Content + creatives (ads, UGC briefs, email/SMS copy)',
            'Digital marketing (paid growth + CRO tests)',
            'Profit reporting (CAC, MER, LTV, margin)'
          ],
          gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          bgGradient: 'from-emerald-500/20 to-teal-500/20',
          iconBg: 'from-emerald-500 to-teal-600',
          borderColor: 'border-emerald-200/50',
          glowColor: 'shadow-emerald-500/20',
          accentColor: 'text-emerald-600'
        }
      ]
    },
    'enterprise-innovation': {
      sectionLabel: 'The Playbook',
      headline: 'Governance built in — so pilots ship.',
      subhead: 'We reduce approval drag with stage gates, documentation, and secure-by-design delivery.',
      phases: [
        {
          number: '01',
          icon: Search,
          title: 'Align',
          duration: '1–2 weeks',
          description: 'Get stakeholders aligned on done.',
          tasks: [
            'Use case + scope boundaries',
            'Security/privacy requirements captured early',
            'Success metrics + stage gates agreed'
          ],
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          bgGradient: 'from-blue-500/20 to-indigo-500/20',
          iconBg: 'from-blue-500 to-indigo-600',
          borderColor: 'border-blue-200/50',
          glowColor: 'shadow-blue-500/20',
          accentColor: 'text-blue-600'
        },
        {
          number: '02',
          icon: Code2,
          title: 'Build',
          duration: '6–12 weeks',
          description: 'Build pilot-ready MVPs with traceability.',
          tasks: [
            'Secure architecture + privacy-by-design',
            'Documentation baked in (audit-friendly)',
            'Weekly demos + decision log'
          ],
          gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
          bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
          iconBg: 'from-[#DBFE01] to-[#a8c600]',
          borderColor: 'border-[#DBFE01]/50',
          glowColor: 'shadow-[#DBFE01]/30',
          accentColor: 'text-[#a8c600]'
        },
        {
          number: '03',
          icon: Rocket,
          title: 'Launch',
          duration: '2–4 weeks',
          description: 'Roll out with enablement, not just code.',
          tasks: [
            'Rollout plan + training assets',
            'Adoption measurement setup',
            'Support + iteration cadence'
          ],
          gradient: 'from-purple-600 via-pink-600 to-rose-600',
          bgGradient: 'from-purple-500/20 to-pink-500/20',
          iconBg: 'from-purple-500 to-pink-600',
          borderColor: 'border-purple-200/50',
          glowColor: 'shadow-purple-500/20',
          accentColor: 'text-purple-600'
        },
        {
          number: '04',
          icon: TrendingUp,
          title: 'Scale',
          duration: 'Quarterly / Monthly',
          description: 'Drive adoption with content and internal marketing.',
          tasks: [
            'Enablement content (guides, playbooks, training)',
            'Internal campaigns + stakeholder comms',
            'Adoption metrics + value reporting + roadmap'
          ],
          gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          bgGradient: 'from-emerald-500/20 to-teal-500/20',
          iconBg: 'from-emerald-500 to-teal-600',
          borderColor: 'border-emerald-200/50',
          glowColor: 'shadow-emerald-500/20',
          accentColor: 'text-emerald-600'
        }
      ]
    },
    'accelerator-support': {
      sectionLabel: 'The Playbook',
      headline: 'Cohorts that ship before Demo Day.',
      subhead: 'We standardize delivery and quality across founders with templates, squads, and sponsor-ready reporting.',
      phases: [
        {
          number: '01',
          icon: Search,
          title: 'Standardize',
          duration: '1–2 weeks',
          description: 'Give founders a delivery system that scales.',
          tasks: [
            'MVP templates + scope guardrails',
            'Milestones + demo cadence',
            'Sponsor reporting structure'
          ],
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          bgGradient: 'from-blue-500/20 to-indigo-500/20',
          iconBg: 'from-blue-500 to-indigo-600',
          borderColor: 'border-blue-200/50',
          glowColor: 'shadow-blue-500/20',
          accentColor: 'text-blue-600'
        },
        {
          number: '02',
          icon: Code2,
          title: 'Build',
          duration: '4–8 weeks',
          description: 'Deliver MVPs with consistent quality.',
          tasks: [
            'Build squads on demand (product + engineering)',
            'Weekly founder demos + unblockers',
            'Quality checkpoints + QA'
          ],
          gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
          bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
          iconBg: 'from-[#DBFE01] to-[#a8c600]',
          borderColor: 'border-[#DBFE01]/50',
          glowColor: 'shadow-[#DBFE01]/30',
          accentColor: 'text-[#a8c600]'
        },
        {
          number: '03',
          icon: Rocket,
          title: 'Launch',
          duration: '1–2 weeks',
          description: 'Demo Day ready - polished and measurable.',
          tasks: [
            'Landing page + onboarding basics',
            'Analytics setup + metrics story',
            'Pitch support + release readiness'
          ],
          gradient: 'from-purple-600 via-pink-600 to-rose-600',
          bgGradient: 'from-purple-500/20 to-pink-500/20',
          iconBg: 'from-purple-500 to-pink-600',
          borderColor: 'border-purple-200/50',
          glowColor: 'shadow-purple-500/20',
          accentColor: 'text-purple-600'
        },
        {
          number: '04',
          icon: TrendingUp,
          title: 'Scale',
          duration: 'Monthly',
          description: 'Support GTM with content + digital marketing kits.',
          tasks: [
            'Content creation (launch pages, decks, founder narratives)',
            'Digital marketing kits (social, email, paid starter campaigns)',
            'Sponsor dashboards + outcomes reporting cadence'
          ],
          gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          bgGradient: 'from-emerald-500/20 to-teal-500/20',
          iconBg: 'from-emerald-500 to-teal-600',
          borderColor: 'border-emerald-200/50',
          glowColor: 'shadow-emerald-500/20',
          accentColor: 'text-emerald-600'
        }
      ]
    }
  };

  // Default to generic config if persona not found
  const defaultConfig = {
    sectionLabel: 'The 4-Phase Playbook',
    headline: 'From idea to market leader',
    subhead: 'Clear sequencing, reusable components, and strict stage gates — so you ship faster without cutting corners or compromising quality.',
    phases: [
  {
    number: '01',
    icon: Search,
    title: 'Validate',
    duration: '2–4 weeks',
    description: 'De-risk your idea with research and validation before building anything.',
    tasks: [
    'Discovery workshops & stakeholder alignment',
    'Competitor & market positioning scan',
    'Interactive prototype for early user feedback'],

    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    iconBg: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-200/50',
    glowColor: 'shadow-blue-500/20',
    accentColor: 'text-blue-600'
  },
  {
    number: '02',
    icon: Code2,
    title: 'Build',
    duration: '6–12 weeks',
    description: 'Ship a production-ready MVP with all the essentials baked in.',
    tasks: [
    'Complete UX/UI design system and brand',
    'Full-stack development: AI / app / web / store',
    'Critical integrations, APIs & third-party services'],

    gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
    bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
    iconBg: 'from-[#DBFE01] to-[#a8c600]',
    borderColor: 'border-[#DBFE01]/50',
    glowColor: 'shadow-[#DBFE01]/30',
    accentColor: 'text-[#a8c600]'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch',
    duration: '2–4 weeks',
    description: 'Go live with professional presence across all channels.',
    tasks: [
    'Complete brand kit, identity & style guide',
    'Marketing website & landing pages',
    'App Store / Google Play / Shopify listing & launch'],

    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-200/50',
    glowColor: 'shadow-purple-500/20',
    accentColor: 'text-purple-600'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale',
    duration: 'Ongoing',
    description: 'Scale smart with data-driven experiments and continuous optimization.',
    tasks: [
    'Paid advertising (Google, Meta), SEO & content',
    'CRM automation, email & retention flows',
    'Analytics instrumentation & experimentation'],

    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    iconBg: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-200/50',
    glowColor: 'shadow-emerald-500/20',
    accentColor: 'text-emerald-600'
  }]};

  const config = playbookConfigs[selectedPersona?.id] || defaultConfig;
  const phases = config.phases;

  return (
    <section ref={ref} id="playbook" className="py-16 md:py-24 bg-gradient-to-b from-white/70 via-[#FAFAFA] to-white/70 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }} />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-20">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
            {config.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {selectedPersona?.id === 'clinic-growth' ? (
              <>
                <span className="text-[#1a1a1a]">From clicks to </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">booked appointments.</span>
              </>
            ) : selectedPersona?.id === 'ai-saas-mvp' ? (
              <>
                <span className="text-[#1a1a1a]">Pilot-ready AI MVP </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">— without rework.</span>
              </>
            ) : selectedPersona?.id === 'app-relaunch' ? (
              <>
                <span className="text-[#1a1a1a]">Fix retention. Relaunch strong. </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">Grow with data.</span>
              </>
            ) : selectedPersona?.id === 'dtc-growth' ? (
              <>
                <span className="text-[#1a1a1a]">Lower CAC. Stabilize ROAS. </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">Grow profit.</span>
              </>
            ) : selectedPersona?.id === 'enterprise-innovation' ? (
              <>
                <span className="text-[#1a1a1a]">Governance built in </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">— so pilots ship.</span>
              </>
            ) : selectedPersona?.id === 'accelerator-support' ? (
              <>
                <span className="text-[#1a1a1a]">Cohorts that ship </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">before Demo Day.</span>
              </>
            ) : (
              <>
                <span className="text-[#1a1a1a]">From idea to </span>
                <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">market leader</span>
              </>
            )}
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-3xl mx-auto font-medium leading-relaxed">
            {config.subhead}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) =>
          <motion.div
            key={index}
            id={phase.title.toLowerCase()}
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.2 + index * 0.15,
              type: "spring",
              stiffness: 80
            }}
            whileHover={reduceMotion ? {} : {
              y: -8,
              rotateY: 3,
              transition: { duration: 0.3 }
            }}
            className="group relative perspective-1000">

              {/* Animated glow effect */}
              <motion.div
              className={`absolute -inset-1 bg-gradient-to-r ${phase.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
              animate={reduceMotion ? {} : {
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }} />


              <div className={`relative glass-card rounded-3xl p-7 h-full hover:shadow-2xl transition-all duration-500 border-2 ${phase.borderColor} group-hover:border-opacity-80 bg-gradient-to-br ${phase.bgGradient} backdrop-blur-xl overflow-hidden`}>
                {/* Animated gradient overlay */}
                <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
                }}
                animate={reduceMotion ? {} : {
                  x: ['-200%', '200%']
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }} />


                {/* Phase number & icon */}
                <div className="relative flex items-center justify-between mb-6">
                  <motion.span
                  className="text-7xl font-black text-[#1a1a1a]/5 group-hover:text-[#1a1a1a]/10 transition-all duration-500"
                  animate={reduceMotion ? {} : {
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}>

                    {phase.number}
                  </motion.span>
                  
                  <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.iconBg} flex items-center justify-center border-2 border-white/50 shadow-lg ${phase.glowColor} group-hover:shadow-2xl transition-all duration-500`}
                  animate={reduceMotion ? {} : {
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  whileHover={reduceMotion ? {} : { scale: 1.1, rotate: 10 }}>

                    <phase.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                </div>

                {/* Title & duration */}
                <div className="relative mb-4">
                  <h3 className="text-2xl font-extrabold text-[#1a1a1a] mb-2 group-hover:scale-105 transition-transform duration-300">
                    {phase.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${phase.accentColor} bg-white/80 border border-current/20`}>
                    {phase.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#1a1a1a]/80 mb-6 text-sm leading-relaxed font-semibold">
                  {phase.description}
                </p>

                {/* Tasks */}
                <ul className="space-y-3 mb-6">
                  {phase.tasks.map((task, taskIndex) =>
                <motion.li
                  key={taskIndex}
                  className="flex items-start gap-2.5 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.15 + taskIndex * 0.05
                  }}>

                      <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}>

                        <CheckCircle2 className={`w-4 h-4 ${phase.accentColor} flex-shrink-0 mt-0.5`} />
                      </motion.div>
                      <span className="text-[#1a1a1a]/80 font-medium leading-snug">{task}</span>
                    </motion.li>
                )}
                </ul>

                {/* Animated progress bar */}
                <div className="relative mt-auto pt-6 border-t-2 border-[#1a1a1a]/5">
                  <div className="h-2.5 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
                    <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.5,
                      delay: reduceMotion ? 0 : 0.6 + index * 0.2,
                      ease: "easeOut"
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${phase.gradient} shadow-lg relative overflow-hidden`}>

                      {/* Shimmer effect */}
                      <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={reduceMotion ? {} : {
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }} />

                    </motion.div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) =>
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${phase.gradient} opacity-0 group-hover:opacity-60`}
                style={{
                  left: `${20 + i * 30}%`,
                  bottom: `${20 + i * 10}%`
                }}
                animate={reduceMotion ? {} : {
                  y: [-20, -40, -20],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }} />

              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}