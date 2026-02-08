import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, User, FileCheck, Clock, Shield, CheckCircle } from 'lucide-react';

export default function HowWeWork({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const workflowSteps = [
  {
    icon: Calendar,
    title: 'Weekly Demos Guaranteed',
    description: 'See tangible progress every week. No waiting, no wondering.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30'
  },
  {
    icon: FileCheck,
    title: 'Clear Scope & Deliverables',
    description: 'Fixed milestones, transparent roadmap. You know exactly what you\'re getting.',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/30'
  },
  {
    icon: User,
    title: 'Single Point of Contact',
    description: 'One dedicated owner managing your entire project. No vendor juggling.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/30'
  },
  {
    icon: Clock,
    title: 'Predictable Timelines',
    description: 'MVP in 8–12 weeks. Launch in 2–4. Clear deadlines you can plan around.',
    gradient: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/30'
  },
  {
    icon: Shield,
    title: 'HIPAA-Aware for Healthcare',
    description: 'Privacy-first development. PHI handling, BAAs, and compliance baked in.',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-500/30'
  }];




  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white/50 to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 mb-4 px-4 py-1.5 text-sm font-semibold rounded-full inline-block uppercase tracking-wider">Risk-Free Development

          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Will This Be Painful? <span className="gradient-text">Not With Us.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Weekly demos, clear scope, single owner, predictable timelines, and HIPAA-aware development. We remove the chaos so you can focus on building your business.
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -5 }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg ${step.glow} group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={reduceMotion ? {} : { rotate: 5, scale: 1.1 }}>
                  <Icon className="w-8 h-8 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-white/20"
                    animate={reduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }} />
                </motion.div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 group-hover:scale-105 transition-transform">{step.title}</h3>
                <p className="text-[#1a1a1a]/70 text-sm font-medium leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>);

}