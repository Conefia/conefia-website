import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, GitBranch, BarChart3, MessageSquare, CheckCircle } from 'lucide-react';

export default function HowWeWork({ reduceMotion }) {
  const workflowSteps = [
    {
      icon: Calendar,
      title: 'Weekly Demos',
      description: 'See progress every week. No black boxes, no surprises.',
    },
    {
      icon: GitBranch,
      title: 'Single Backlog',
      description: 'All priorities in one place. You always know what\'s next.',
    },
    {
      icon: MessageSquare,
      title: 'Async Updates',
      description: 'Daily Loom/Slack updates. Stay informed without meetings.',
    },
    {
      icon: BarChart3,
      title: 'Stage Gates',
      description: 'Clear milestones and sign-offs before moving forward.',
    },
  ];

  const timeline = [
    { week: 'Week 1-2', phase: 'Discovery', tasks: 'Align on goals, research, prototype' },
    { week: 'Week 3-8', phase: 'Build', tasks: 'Design, develop, iterate, QA' },
    { week: 'Week 9-10', phase: 'Launch', tasks: 'Deploy, brand, go live' },
    { week: 'Ongoing', phase: 'Grow', tasks: 'Experiment, optimize, scale' },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white/50 to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2F2F2F]/5 text-[#2F2F2F]/60 text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-4">
            Transparent. <span className="gradient-text">Predictable.</span> Fast.
          </h2>
          <p className="text-lg text-[#2F2F2F]/60 max-w-2xl mx-auto">
            No black boxes. Weekly demos, clear governance, and a single team accountable for your success.
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.5, 
                delay: reduceMotion ? 0 : index * 0.1 
              }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#DBFE01]/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-[#2F2F2F]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2F2F2F] mb-2">{step.title}</h3>
              <p className="text-[#2F2F2F]/50 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl font-bold text-[#2F2F2F] mb-8 text-center">
            Typical Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DBFE01] via-[#2F2F2F]/20 to-transparent hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: reduceMotion ? 0 : 0.5, 
                    delay: reduceMotion ? 0 : index * 0.15 
                  }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                >
                  {/* Dot */}
                  <div className={`absolute hidden md:flex ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-0 w-4 h-4 rounded-full bg-[#DBFE01] border-4 border-white shadow-lg`} />
                  
                  <div className="bg-white/50 rounded-2xl p-6 border border-[#2F2F2F]/5 hover:border-[#DBFE01]/30 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#DBFE01]/10 text-[#2F2F2F] text-xs font-semibold mb-3">
                      {item.week}
                    </span>
                    <h4 className="text-lg font-bold text-[#2F2F2F] mb-1">{item.phase}</h4>
                    <p className="text-[#2F2F2F]/50 text-sm">{item.tasks}</p>
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