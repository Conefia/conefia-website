import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function PlaybookSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      number: '01',
      icon: Search,
      title: 'Validate',
      duration: '2–4 weeks',
      description: 'De-risk your idea with research and validation before building anything.',
      tasks: [
        'Discovery workshops & stakeholder alignment',
        'Competitor analysis & market positioning scan',
        'Interactive prototype for early user feedback',
        'Clear MVP scope with success criteria defined',
      ],
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      number: '02',
      icon: Code2,
      title: 'Build',
      duration: '6–12 weeks',
      description: 'Ship a production-ready MVP with all the essentials baked in.',
      tasks: [
        'Complete UX/UI design system and brand',
        'Full-stack development: AI agent / app / web / store',
        'Critical integrations, APIs & third-party services',
        'Security, compliance (HIPAA), and analytics setup',
      ],
      color: 'from-[#DBFE01] to-[#B8D600]',
      bgColor: 'bg-[#DBFE01]/20',
      borderColor: 'border-[#DBFE01]/30',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch',
      duration: '2–4 weeks',
      description: 'Go live with professional presence across all channels.',
      tasks: [
        'Complete brand kit, identity & style guide',
        'Marketing website and conversion-optimized landing pages',
        'App Store / Google Play / Shopify listing & launch',
        'Google Business Profile and social media setup',
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Grow',
      duration: 'Ongoing',
      description: 'Scale smart with data-driven experiments and continuous optimization.',
      tasks: [
        'Paid advertising (Google, Meta), SEO & content marketing',
        'CRM automation, email sequences & retention flows',
        'Analytics instrumentation, dashboards & experimentation',
        'Continuous iteration roadmap based on user data',
      ],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-100',
      borderColor: 'border-emerald-200',
    },
  ];

  return (
    <section ref={ref} id="playbook" className="py-24 md:py-32 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#DBFE01]/25 text-[#1a1a1a] text-sm font-semibold mb-6 border border-[#DBFE01]/30">
            The 4-Phase Playbook
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            From idea to <span className="gradient-text">market leader</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-3xl mx-auto font-medium leading-relaxed">
            Clear sequencing, reusable components, and strict stage gates — 
            so you ship faster without cutting corners or compromising quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.6, 
                delay: reduceMotion ? 0 : 0.2 + index * 0.15 
              }}
              className="group"
            >
              <div className={`glass-card rounded-3xl p-7 h-full hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-2 border-2 ${phase.borderColor} hover:border-[#DBFE01]/50`}>
                {/* Phase number & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-black text-[#1a1a1a]/8 group-hover:text-[#DBFE01]/30 transition-colors">
                    {phase.number}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${phase.bgColor} flex items-center justify-center border-2 ${phase.borderColor}`}>
                    <phase.icon className="w-7 h-7 text-[#1a1a1a]" />
                  </div>
                </div>

                {/* Title & duration */}
                <div className="mb-4">
                  <h3 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">{phase.title}</h3>
                  <span className="text-xs font-bold text-[#1a1a1a]/50 uppercase tracking-wider">{phase.duration}</span>
                </div>

                {/* Description */}
                <p className="text-[#1a1a1a]/70 mb-6 text-sm leading-relaxed font-medium">
                  {phase.description}
                </p>

                {/* Tasks */}
                <ul className="space-y-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#DBFE01] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1a1a1a]/80 font-medium leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress bar */}
                <div className="mt-7 pt-6 border-t-2 border-[#1a1a1a]/5">
                  <div className="h-2 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : { width: 0 }}
                      transition={{ 
                        duration: reduceMotion ? 0 : 1.2, 
                        delay: reduceMotion ? 0 : 0.6 + index * 0.2,
                        ease: "easeOut"
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${phase.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}