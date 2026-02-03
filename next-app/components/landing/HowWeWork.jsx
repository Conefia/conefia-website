import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, GitBranch, BarChart3, MessageSquare, CheckCircle } from 'lucide-react';

export default function HowWeWork({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const workflowSteps = [
  {
    icon: Calendar,
    title: 'Weekly Demos',
    description: 'See progress every week. No black boxes, no surprises.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30'
  },
  {
    icon: GitBranch,
    title: 'Single Backlog',
    description: 'All priorities in one place. You always know what\'s next.',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/30'
  },
  {
    icon: MessageSquare,
    title: 'Async Updates',
    description: 'Daily Loom/Slack updates. Stay informed without meetings.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/30'
  },
  {
    icon: BarChart3,
    title: 'Stage Gates',
    description: 'Clear milestones and sign-offs before moving forward.',
    gradient: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/30'
  }];




  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white/50 to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 mb-4 px-4 py-1.5 text-lg font-semibold rounded-full inline-block">How We Work

          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
            Transparent. <span className="gradient-text">Predictable.</span> Fast.
          </h2>
          <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto font-medium">
            No black boxes. Weekly demos, clear governance, and a single team accountable for your success.
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workflowSteps.map((step, index) =>
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
              className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg ${step.glow} group-hover:shadow-2xl transition-all duration-300`}
              whileHover={reduceMotion ? {} : { rotate: 5, scale: 1.1 }}>

                <step.icon className="w-8 h-8 text-white relative z-10" />
                <motion.div
                className="absolute inset-0 rounded-2xl bg-white/20"
                animate={reduceMotion ? {} : {
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }} />

              </motion.div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:scale-105 transition-transform">{step.title}</h3>
              <p className="text-[#1a1a1a]/80 text-sm font-medium">{step.description}</p>
            </motion.div>
          )}
        </div>


      </div>
    </section>);

}