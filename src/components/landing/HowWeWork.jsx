import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, FileText, Shield, Activity, Rocket, Search, Calendar, DollarSign, Users, CheckCircle, FlaskConical, Store, Repeat, FileCheck, Layers, BarChart3 } from 'lucide-react';
import { usePersona } from '@/components/context/PersonaContext';
import ContourBackground from '@/components/visual/ContourBackground';

export default function HowWeWork({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { selectedPersona } = usePersona();

  const personaContent = {
    'clinic-growth': {
      headline: 'Predictable clinic growth — shipped weekly.',
      subhead: 'One accountable team improving bookings, local visibility, and patient conversion with HIPAA-aware delivery.',
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
          description: 'One priority list across site, intake, SEO, and tracking.',
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
      headline: 'De-risk fast. Build right. Launch for pilots.',
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
          description: 'Landing page, onboarding, and analytics from day one.',
          gradient: 'from-orange-500 to-amber-600',
          glow: 'shadow-orange-500/30'
        }
      ]
    },
    'app-relaunch': {
      headline: 'Retention-first fixes — guided by data.',
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
      headline: 'Make ROAS predictable — and conversion climb.',
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
      headline: 'Governance built in — so pilots ship.',
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
      headline: 'Cohorts that ship — not just pitch.',
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
    <section ref={ref} className="py-16 md:py-24 bg-[#2F2F2F] relative overflow-hidden">
      {/* Base layer */}
      <div className="bg-stone-950 absolute inset-0" />
      
      {/* Contour lines */}
      <ContourBackground className="opacity-80" />

      {/* Static Star Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(300)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 2 + 0.3;
          const opacity = Math.random() * 0.6 + 0.2;
          const isTwinkle = Math.random() > 0.92;

          if (isTwinkle) {
            const twinkleSize = Math.random() * 3 + 2;
            return (
              <div
                key={`star-${i}`}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${twinkleSize}px`,
                  height: `${twinkleSize}px`,
                }}>
                <div 
                  className="absolute bg-white rounded-full"
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: opacity * 1.2,
                    boxShadow: `
                      0 0 ${twinkleSize * 2}px ${twinkleSize}px rgba(219, 254, 1, ${opacity * 0.6}),
                      0 ${-twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                      0 ${twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                      ${-twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                      ${twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4})
                    `
                  }} />
              </div>
            );
          }

          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity * 0.8,
                boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
              }} />
          );
        })}
      </div>
      
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)'
        }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-white/10 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/20 mb-6">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {content.headline}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
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
                <h3 className="text-lg font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>);

}