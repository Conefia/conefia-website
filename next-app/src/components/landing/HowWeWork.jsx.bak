import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, FileText, Shield, Activity, Rocket, Search, Calendar, DollarSign, Users, CheckCircle, FlaskConical, Store, Repeat, FileCheck, Layers, BarChart3, Sparkles } from 'lucide-react';
import { usePersona } from '@/components/context/PersonaContext';

export default function HowWeWork({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { selectedPersona } = usePersona();

  const personaContent = {
    'clinic-growth': {
      headline: 'Predictable clinic growth —',
      headlineAccent: 'shipped weekly.',
      subhead: 'One accountable team improving bookings, local visibility, and patient reach with HIPAA-aware delivery.',
      cards: [
        {
          icon: Play,
          title: 'Weekly Demos',
          description: 'Watch booking conversion improve every single week.',
          gradient: 'from-violet-500 to-purple-600',
          glow: 'shadow-violet-500/30'
        },
        {
          icon: FileText,
          title: 'Single Backlog',
          description: 'One priority list across site, intake, SEO, and marketing.',
          gradient: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/30'
        },
        {
          icon: Shield,
          title: 'HIPAA Delivery',
          description: 'Privacy-first workflows with clean PHI handling.',
          gradient: 'from-emerald-500 to-teal-600',
          glow: 'shadow-emerald-500/30'
        },
        {
          icon: Activity,
          title: 'Visit Attribution',
          description: 'Traffic → calls/forms → booked visits, clearly tracked.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    },
    'ai-saas-mvp': {
      headline: 'De-risk fast. Build right.',
      headlineAccent: 'Launch for pilots.',
      subhead: 'We align scope, AI architecture, and launch basics so you ship a pilot-ready MVP without rework.',
      cards: [
        {
          icon: FileText,
          title: 'Scope Lock',
          description: 'Must-haves tied to pilot outcomes and ROI.',
          gradient: 'from-violet-500 to-purple-600',
          glow: 'shadow-violet-500/30'
        },
        {
          icon: Play,
          title: 'Weekly Demos',
          description: 'Progress you can show users, pilots, and investors.',
          gradient: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/30'
        },
        {
          icon: FileCheck,
          title: 'Stage Gates',
          description: 'Crisp decisions and sign-offs that prevent drift.',
          gradient: 'from-emerald-500 to-teal-600',
          glow: 'shadow-emerald-500/30'
        },
        {
          icon: Rocket,
          title: 'Launch Kit',
          description: 'Landing page, social media presence, and analytics from day one.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    },
    'app-relaunch': {
      headline: 'Retention-first fixes —',
      headlineAccent: 'guided by data.',
      subhead: 'We diagnose churn, ship high-impact product fixes, and relaunch with analytics you can trust.',
      cards: [
        {
          icon: Search,
          title: 'Churn Diagnosis',
          description: 'Funnels + cohorts to pinpoint drop-offs fast.',
          gradient: 'from-violet-500 to-purple-600',
          glow: 'shadow-violet-500/30'
        },
        {
          icon: Calendar,
          title: 'Weekly Releases',
          description: 'Small, reliable shipping cycles that compound.',
          gradient: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/30'
        },
        {
          icon: Store,
          title: 'Store Lift',
          description: 'ASO + store assets that raise qualified installs.',
          gradient: 'from-emerald-500 to-teal-600',
          glow: 'shadow-emerald-500/30'
        },
        {
          icon: BarChart3,
          title: 'Trusted Analytics',
          description: 'Clear dashboards that drive next actions.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    },
    'dtc-growth': {
      headline: 'Make ROAS predictable —',
      headlineAccent: 'and conversion climb.',
      subhead: 'We run disciplined experiments across ads, store UX, and lifecycle to lower CAC and grow profit.',
      cards: [
        {
          icon: FlaskConical,
          title: 'Test System',
          description: 'Weekly creative + audience tests with winners/losers.',
          gradient: 'from-violet-500 to-purple-600',
          glow: 'shadow-violet-500/30'
        },
        {
          icon: CheckCircle,
          title: 'CRO Backlog',
          description: 'PDP/cart/checkout fixes ranked by impact.',
          gradient: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/30'
        },
        {
          icon: Repeat,
          title: 'Lifecycle Flows',
          description: 'Email/SMS that lifts repeat rate and LTV.',
          gradient: 'from-emerald-500 to-teal-600',
          glow: 'shadow-emerald-500/30'
        },
        {
          icon: DollarSign,
          title: 'Profit Reporting',
          description: 'CAC, MER, LTV, margin tracked consistently.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    },
    'enterprise-innovation': {
      headline: 'Governance built in —',
      headlineAccent: 'so pilots ship.',
      subhead: 'We reduce approval drag with clear checkpoints, documentation, and secure-by-design delivery.',
      cards: [
        {
          icon: FileCheck,
          title: 'Stage Gates',
          description: 'Clear approvals without endless meetings.',
          gradient: 'from-violet-500 to-purple-600',
          glow: 'shadow-violet-500/30'
        },
        {
          icon: FileCheck,
          title: 'Audit Trail',
          description: 'Documentation and traceability from day one.',
          gradient: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/30'
        },
        {
          icon: Shield,
          title: 'Secure Delivery',
          description: 'Security and privacy handled early, not late.',
          gradient: 'from-emerald-500 to-teal-600',
          glow: 'shadow-emerald-500/30'
        },
        {
          icon: Activity,
          title: 'Adoption Metrics',
          description: 'Rollout support + success measures that prove value.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    },
    'accelerator-support': {
      headline: 'Cohorts that ship —',
      headlineAccent: 'not just pitch.',
      subhead: 'We standardize delivery across founders so MVP quality is consistent and Demo Day is calm.',
      cards: [
        {
          icon: Layers,
          title: 'Cohort System',
          description: 'Templates + cadence so teams don\'t stall.',
          gradient: 'from-violet-500 to-purple-600',
          glow: 'shadow-violet-500/30'
        },
        {
          icon: Play,
          title: 'Founder Demos',
          description: 'Weekly momentum and fast unblocks.',
          gradient: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/30'
        },
        {
          icon: Users,
          title: 'Build Squads',
          description: 'Product + engineering support on demand.',
          gradient: 'from-emerald-500 to-teal-600',
          glow: 'shadow-emerald-500/30'
        },
        {
          icon: BarChart3,
          title: 'Sponsor Reporting',
          description: 'Simple dashboards showing progress and outcomes.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    }
  };

  const content = personaContent[selectedPersona.id] || personaContent['clinic-growth'];




  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white/50 to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4">
            {content.headline} <span className="gradient-text">{content.headlineAccent}</span>
          </h2>
          <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto font-medium">
            {content.subhead}
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.2 + index * 0.12,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -5 }}
                className="text-center p-6 group">
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg ${card.glow} group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={reduceMotion ? {} : { rotate: 5, scale: 1.1 }}>
                  <Icon className="w-8 h-8 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-white/20"
                    animate={reduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }} />
                </motion.div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:scale-105 transition-transform">
                  {card.title}
                </h3>
                <p className="text-[#1a1a1a]/80 text-sm font-medium">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>);

}