import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, GitBranch, BarChart3, MessageSquare, CheckCircle } from 'lucide-react';

export default function HowWeWork({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const workflowSteps = [
    {
      icon: Calendar,
      title: 'Weekly Demos',
      description: 'See progress every week. No black boxes, no surprises.',
      gradient: 'from-violet-500 to-purple-600',
      glow: 'shadow-violet-500/30',
    },
    {
      icon: GitBranch,
      title: 'Single Backlog',
      description: 'All priorities in one place. You always know what\'s next.',
      gradient: 'from-cyan-500 to-blue-600',
      glow: 'shadow-cyan-500/30',
    },
    {
      icon: MessageSquare,
      title: 'Async Updates',
      description: 'Daily Loom/Slack updates. Stay informed without meetings.',
      gradient: 'from-emerald-500 to-teal-600',
      glow: 'shadow-emerald-500/30',
    },
    {
      icon: BarChart3,
      title: 'Stage Gates',
      description: 'Clear milestones and sign-offs before moving forward.',
      gradient: 'from-orange-500 to-amber-600',
      glow: 'shadow-orange-500/30',
    },
  ];

  const timeline = [
    { week: 'Week 1-2', phase: 'Discovery', tasks: 'Align on goals, research, prototype' },
    { week: 'Week 3-8', phase: 'Build', tasks: 'Design, develop, iterate, QA' },
    { week: 'Week 9-10', phase: 'Launch', tasks: 'Deploy, brand, go live' },
    { week: 'Ongoing', phase: 'Grow', tasks: 'Experiment, optimize, scale' },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white/50 to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/60 text-sm font-semibold mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">
            Transparent. <span className="gradient-text">Predictable.</span> Fast.
          </h2>
          <p className="text-lg text-[#1a1a1a]/60 max-w-2xl mx-auto font-medium">
            No black boxes. Weekly demos, clear governance, and a single team accountable for your success.
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workflowSteps.map((step, index) => (
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
              className="text-center p-6 group"
            >
              <motion.div 
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg ${step.glow} group-hover:shadow-2xl transition-all duration-300`}
                whileHover={reduceMotion ? {} : { rotate: 5, scale: 1.1 }}
              >
                <step.icon className="w-8 h-8 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/20"
                  animate={reduceMotion ? {} : {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:scale-105 transition-transform">{step.title}</h3>
              <p className="text-[#1a1a1a]/60 text-sm font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-8 text-center">
            Typical Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DBFE01] via-[#1a1a1a]/20 to-transparent hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ 
                    duration: reduceMotion ? 0 : 0.6, 
                    delay: reduceMotion ? 0 : 0.8 + index * 0.15 
                  }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                >
                  {/* Dot */}
                  <div className={`absolute hidden md:flex ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-0 w-4 h-4 rounded-full bg-[#DBFE01] border-4 border-white shadow-lg`} />
                  
                  <div className="bg-white/50 rounded-2xl p-6 border border-[#1a1a1a]/5 hover:border-[#DBFE01]/30 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#DBFE01]/10 text-[#1a1a1a] text-xs font-semibold mb-3">
                      {item.week}
                    </span>
                    <h4 className="text-lg font-bold text-[#1a1a1a] mb-1">{item.phase}</h4>
                    <p className="text-[#1a1a1a]/50 text-sm font-medium">{item.tasks}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}