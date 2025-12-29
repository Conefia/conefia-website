import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function PlaybookSection({ reduceMotion }) {
  const phases = [
    {
      number: '01',
      icon: Search,
      title: 'Validate',
      duration: '2–4 weeks',
      description: 'De-risk your idea before building.',
      tasks: [
        'Discovery & stakeholder alignment',
        'Competitor & market scan',
        'Interactive prototype',
        'MVP scope & success criteria',
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    {
      number: '02',
      icon: Code2,
      title: 'Build',
      duration: '6–12 weeks',
      description: 'Ship a production-ready MVP.',
      tasks: [
        'UX/UI design system',
        'AI agent / app / web / store',
        'Integrations & APIs',
        'Security, compliance, analytics',
      ],
      color: 'from-[#DBFE01] to-[#B8D600]',
      bgColor: 'bg-[#DBFE01]/10',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch',
      duration: '2–4 weeks',
      description: 'Go live with your digital presence.',
      tasks: [
        'Brand kit & identity',
        'Website / landing pages',
        'App Store / Play Store / Shopify',
        'Google Business & socials',
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Grow',
      duration: 'Ongoing',
      description: 'Scale with data-driven experiments.',
      tasks: [
        'Paid, SEO & content marketing',
        'CRM & retention flows',
        'Analytics & experimentation',
        'Iteration roadmap',
      ],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <section id="playbook" className="py-20 md:py-32 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#DBFE01]/20 text-[#2F2F2F] text-sm font-medium mb-4">
            The 4-Phase Playbook
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-4">
            From idea to <span className="gradient-text">market leader</span>
          </h2>
          <p className="text-lg text-[#2F2F2F]/60 max-w-2xl mx-auto">
            Clear sequencing, reusable components, and strict stage gates — 
            so you ship faster without cutting corners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.5, 
                delay: reduceMotion ? 0 : index * 0.1 
              }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-6 h-full hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#DBFE01]/20">
                {/* Phase number & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-[#2F2F2F]/10 group-hover:text-[#DBFE01]/30 transition-colors">
                    {phase.number}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl ${phase.bgColor} flex items-center justify-center`}>
                    <phase.icon className="w-6 h-6 text-[#2F2F2F]" />
                  </div>
                </div>

                {/* Title & duration */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#2F2F2F] mb-1">{phase.title}</h3>
                  <span className="text-sm font-medium text-[#2F2F2F]/40">{phase.duration}</span>
                </div>

                {/* Description */}
                <p className="text-[#2F2F2F]/60 mb-6 text-sm leading-relaxed">
                  {phase.description}
                </p>

                {/* Tasks */}
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#DBFE01] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2F2F2F]/70">{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress bar */}
                <div className="mt-6 pt-6 border-t border-[#2F2F2F]/5">
                  <div className="h-1.5 bg-[#2F2F2F]/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: reduceMotion ? 0 : 1, 
                        delay: reduceMotion ? 0 : 0.5 + index * 0.2 
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