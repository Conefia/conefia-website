import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, Check, ArrowRight, Users, Target, Layers, BarChart3, Sparkles } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';

const PERSONAS = [
  {
    id: 'clinic-growth',
    label: 'Clinic Growth',
    problemTitle: 'Patient growth is blocked by a fragmented digital journey',
    problems: [
      'Portal, intake, website, and reviews don’t work together',
      'Changes take weeks across multiple vendors',
      'No clear owner for bookings, inquiries, and retention',
      'You can’t see what’s driving calls, forms, and appointments'
    ],
    solutionTitle: 'One team. One backlog. More appointments.',
    solutions: [
      {
        title: 'Patient journey upgrades',
        desc: 'Portal + intake + website improvements that reduce friction and increase conversions.'
      },
      {
        title: 'Visibility + trust system',
        desc: 'Local SEO basics, Google Business Profile, and reviews workflow to drive qualified demand.'
      },
      {
        title: 'Tracking that matters',
        desc: 'Clear reporting for calls, forms, bookings, and channel performance.'
      },
      {
        title: 'Weekly delivery cadence',
        desc: 'Demos every week with a single backlog and clear priorities.'
      }
    ],
    primaryCta: 'Get my Clinic Growth Roadmap',
    secondaryCta: 'See Clinic Package',
    destination: '/solutions/clinic-growth',
    formPrompt: 'Tell us about your clinic (specialty + location) and your #1 growth bottleneck.'
  },
  {
    id: 'ai-saas-mvp',
    label: 'AI SaaS MVP Sprint',
    problemTitle: 'You’re building — but traction is still unclear',
    problems: [
      'MVP scope keeps changing and shipping slips',
      'Risky technical choices (LLMs, architecture, data) slow decisions',
      'Contractors are disconnected (dev, AI, design, marketing)',
      'You need paying pilots — not more demos'
    ],
    solutionTitle: 'Ship the MVP and launch for pilots — fast.',
    solutions: [
      {
        title: 'MVP scope you can defend',
        desc: 'Crisp definition of “must-have” + success criteria tied to real user value.'
      },
      {
        title: 'AI architecture done right',
        desc: 'Practical LLM/agent decisions that won’t create rework later.'
      },
      {
        title: 'Launch system included',
        desc: 'Positioning, landing page, onboarding, and analytics to start getting pilots.'
      },
      {
        title: 'Weekly demos + stage gates',
        desc: 'Clear milestones and sign-offs so you keep momentum.'
      }
    ],
    primaryCta: 'Get my MVP + Pilot Roadmap',
    secondaryCta: 'See MVP Sprint',
    destination: '/solutions/ai-saas-mvp-sprint',
    formPrompt: 'What are you building, who is the buyer, and what’s your target timeline?'
  },
  {
    id: 'app-relaunch',
    label: 'App Relaunch',
    problemTitle: 'Your app is live — but users aren’t sticking',
    problems: [
      'Retention is weak (users churn after install)',
      'UX/performance issues hurt reviews and referrals',
      'ASO is not driving consistent organic downloads',
      'You don’t have clean analytics to guide decisions'
    ],
    solutionTitle: 'Fix retention, relaunch, then grow with data.',
    solutions: [
      {
        title: 'Retention-led product fixes',
        desc: 'Prioritize changes that improve activation and repeat usage.'
      },
      {
        title: 'UX refresh + performance',
        desc: 'Clean up friction, speed, and quality to lift ratings.'
      },
      {
        title: 'ASO + store assets',
        desc: 'Keywords, screenshots, and review strategy for organic growth.'
      },
      {
        title: 'Analytics you can act on',
        desc: 'Funnels + cohorts (D1/D7/D30) so you know what’s working.'
      }
    ],
    primaryCta: 'Get my Relaunch Plan',
    secondaryCta: 'See Relaunch Sprint',
    destination: '/solutions/app-relaunch-growth',
    formPrompt: 'Share your app link (store/website) and where users drop off today.'
  },
  {
    id: 'dtc-growth',
    label: 'DTC Growth',
    problemTitle: 'You’re spending — but profit isn’t scaling',
    problems: [
      'CAC is rising and ROAS is unstable',
      'Shopify conversion leaks reduce revenue per visit',
      'Email/SMS isn’t driving repeat purchases',
      'No single owner for the full funnel (ads → site → retention)'
    ],
    solutionTitle: 'Increase conversion and LTV — without guesswork.',
    solutions: [
      {
        title: 'CRO roadmap + weekly tests',
        desc: 'Fix friction, improve PDP/checkout, and lift conversion rate.'
      },
      {
        title: 'Paid testing system',
        desc: 'Creative + audience experiments tied to clear hypotheses.'
      },
      {
        title: 'Retention flows that sell',
        desc: 'Email/SMS lifecycle (welcome, abandon, post-purchase, winback).'
      },
      {
        title: 'Profit-first reporting',
        desc: 'CAC, contribution margin, LTV, repeat rate — tracked consistently.'
      }
    ],
    primaryCta: 'Get my DTC Growth Audit',
    secondaryCta: 'See DTC Package',
    destination: '/solutions/dtc-growth',
    formPrompt: 'What do you sell, and what’s the biggest issue: traffic, conversion, or repeat purchases?'
  },
  {
    id: 'enterprise-innovation',
    label: 'Enterprise Innovation',
    problemTitle: 'Innovation is stuck between stakeholders and compliance',
    problems: [
      'Alignment takes too long across teams',
      'POCs don’t become pilot-ready MVPs',
      'Vendor sprawl and unclear ownership slows execution',
      'Governance/security requirements create delivery friction'
    ],
    solutionTitle: 'Pilot-ready MVPs with governance built in.',
    solutions: [
      {
        title: 'Compliance-aware delivery',
        desc: 'Security/privacy considerations addressed early — no last-minute rewrites.'
      },
      {
        title: 'Stage gates + audit trail',
        desc: 'Clear checkpoints, documentation, and sign-offs.'
      },
      {
        title: 'End-to-end ownership',
        desc: 'Product + engineering + launch enablement in one partner.'
      },
      {
        title: 'Measurement and adoption',
        desc: 'Analytics + rollout support to prove value quickly.'
      },
    ],
    primaryCta: 'Discuss My Innovation Roadmap',
    secondaryCta: 'See Corporate Program',
    destination: '/solutions/corporate-innovation',
    formPrompt: 'What initiative are you leading, and what constraints (security/timeline/stakeholders) matter most?'
  },
  {
    id: 'accelerator-support',
    label: 'Accelerator Support',
    problemTitle: 'Founders get advice — but execution doesn’t scale',
    problems: [
      'Too many teams stall without technical leadership',
      'Demo Day deadlines create last-minute chaos',
      'Quality varies across cohort MVPs',
      'Sponsor/funder reporting is manual and time-consuming'
    ],
    solutionTitle: 'Cohorts that ship before Demo Day.',
    solutions: [
      {
        title: 'Cohort execution system',
        desc: 'Templates + cadence so every team knows what “good” looks like.'
      },
      {
        title: 'MVP build squads',
        desc: 'Product + engineering support for founders who need delivery help.'
      },
      {
        title: 'Demo Day readiness',
        desc: 'Product polish, onboarding, landing page, and metrics story.'
      },
      {
        title: 'Sponsor-friendly reporting',
        desc: 'Dashboards that make outcomes easy to communicate and renew funding.'
      }
    ],
    primaryCta: 'Get my Cohort Support Plan',
    secondaryCta: 'See Accelerator Program',
    destination: '/solutions/accelerator-support',
    formPrompt: 'How many startups per cohort, and what outcomes do you track (MVP shipped, pilots, funding, revenue)?'
  }
];

const SOLUTION_ICONS = [
  { icon: Users, gradient: 'from-violet-500 via-purple-500 to-fuchsia-500', iconBg: 'from-violet-400 to-purple-500', glow: 'shadow-violet-500/50' },
  { icon: Target, gradient: 'from-blue-500 via-cyan-500 to-teal-500', iconBg: 'from-blue-400 to-cyan-500', glow: 'shadow-cyan-500/50' },
  { icon: Layers, gradient: 'from-emerald-500 via-green-500 to-lime-500', iconBg: 'from-emerald-400 to-green-500', glow: 'shadow-emerald-500/50' },
  { icon: BarChart3, gradient: 'from-orange-500 via-amber-500 to-yellow-400', iconBg: 'from-orange-400 to-yellow-500', glow: 'shadow-amber-500/50' }
];

export default function ProblemSolution({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedPersonaId, setSelectedPersonaId] = useState(PERSONAS[0].id);

  const selectedPersona = PERSONAS.find(p => p.id === selectedPersonaId) || PERSONAS[0];

  const handlePersonaSelect = (id) => {
    setSelectedPersonaId(id);
    base44.analytics.track({
      eventName: "persona_select",
      properties: { persona: id }
    });
  };

  const handleCtaClick = (ctaType) => {
     base44.analytics.track({
      eventName: "cta_click",
      properties: { 
        persona: selectedPersona.id,
        cta_type: ctaType,
        destination: selectedPersona.destination
      }
    });
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden bg-gray-50/50">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#1a1a1a]/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-12">

          <span className="bg-[#1a1a1a]/8 text-[#1a1a1a]/70 mb-6 px-4 py-2 text-sm font-semibold rounded-full inline-block uppercase tracking-wider">
            Choose your track
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            What are you building?
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 font-medium max-w-3xl mx-auto">
            Pick the closest match — we’ll show your biggest bottleneck and the plan we recommend.
          </p>
        </motion.div>

        {/* Persona Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {PERSONAS.map((persona) => (
            <button
              key={persona.id}
              onClick={() => handlePersonaSelect(persona.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedPersonaId === persona.id 
                  ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-lg scale-105' 
                  : 'bg-white text-[#1a1a1a]/70 border-gray-200 hover:border-[#1a1a1a]/30 hover:bg-gray-50'
              }`}
            >
              {persona.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPersona.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16"
          >
            {/* Problem */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-red-200/50 bg-red-50/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-50" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6 border border-red-200">
                    <X className="w-4 h-4" />
                    The Problem
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                    {selectedPersona.problemTitle}
                  </h3>
                  <ul className="space-y-5">
                    {selectedPersona.problems.map((problem, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="text-[#1a1a1a] font-semibold leading-relaxed">{problem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="relative">
               {/* Animated gradient glow background */}
               <div className="absolute inset-0 opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600" />

              <div className="relative glass-card rounded-3xl p-8 md:p-10 h-full border-2 border-transparent bg-gradient-to-br from-white via-white to-[#DBFE01]/5 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 opacity-20" />
                
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-[#DBFE01]" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#DBFE01]/30 to-[#DBFE01]/10 text-[#1a1a1a] text-sm font-semibold mb-6 border-2 border-[#DBFE01]/40">
                  <Check className="w-4 h-4" />
                  The Solution
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                   {selectedPersona.solutionTitle}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {selectedPersona.solutions.map((solution, index) => {
                    const iconData = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
                    const Icon = iconData.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${iconData.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                        
                        <div className="relative p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 group-hover:border-gray-200 group-hover:shadow-lg transition-all duration-300 h-full">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconData.iconBg} flex items-center justify-center mb-3 shadow-md ${iconData.glow}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          
                          <p className="font-bold text-[#1a1a1a] text-sm mb-1 leading-tight">
                            {solution.title}
                          </p>
                          <p className="text-xs text-[#1a1a1a]/70 font-medium leading-snug">{solution.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link 
                        to={selectedPersona.destination}
                        onClick={() => handleCtaClick('primary')}
                        className="btn-primary px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 text-center"
                    >
                        {selectedPersona.primaryCta}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    {selectedPersona.secondaryCta && (
                        <Link 
                            to={selectedPersona.destination}
                            onClick={() => handleCtaClick('secondary')}
                            className="btn-secondary px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 text-center"
                        >
                            {selectedPersona.secondaryCta}
                        </Link>
                    )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}