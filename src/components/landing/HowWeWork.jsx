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
    { 
      week: 'Week 1-2', 
      phase: 'Discovery', 
      tasks: 'Align on goals, research, prototype',
      icon: Users,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-500/10 to-purple-500/10',
      iconColor: 'text-blue-600',
      glowColor: 'shadow-blue-500/50',
    },
    { 
      week: 'Week 3-8', 
      phase: 'Build', 
      tasks: 'Design, develop, iterate, QA',
      icon: GitBranch,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-500/10 to-cyan-500/10',
      iconColor: 'text-emerald-600',
      glowColor: 'shadow-emerald-500/50',
    },
    { 
      week: 'Week 9-10', 
      phase: 'Launch', 
      tasks: 'Deploy, brand, go live',
      icon: CheckCircle,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-500/10 to-yellow-500/10',
      iconColor: 'text-orange-600',
      glowColor: 'shadow-orange-500/50',
    },
    { 
      week: 'Ongoing', 
      phase: 'Grow', 
      tasks: 'Experiment, optimize, scale',
      icon: BarChart3,
      gradient: 'from-pink-500 via-rose-500 to-red-600',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      iconColor: 'text-pink-600',
      glowColor: 'shadow-pink-500/50',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white/50 to-[#FAFAFA]">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
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
          className="relative"
        >
          <h3 className="text-2xl font-extrabold text-[#1a1a1a] mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-pink-600 bg-clip-text text-transparent">
              Your Journey to Success
            </span>
          </h3>
          
          <div className="relative">
            {/* Animated gradient line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full overflow-hidden hidden md:block">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-500 via-emerald-500 via-orange-500 to-pink-500"
                initial={{ y: '-100%' }}
                animate={isInView ? { y: '0%' } : { y: '-100%' }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              />
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ 
                    duration: reduceMotion ? 0 : 0.7, 
                    delay: reduceMotion ? 0 : 0.9 + index * 0.2,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={reduceMotion ? {} : { scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                  className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
                >
                  {/* Animated dot with pulse */}
                  <motion.div 
                    className={`relative hidden md:flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl ${item.glowColor} flex-shrink-0`}
                    animate={reduceMotion ? {} : {
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon className="w-10 h-10 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-white/30"
                      animate={reduceMotion ? {} : {
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    {/* Progress ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="240"
                        initial={{ strokeDashoffset: 240 }}
                        animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 240 }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                        opacity="0.3"
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Content card */}
                  <div className={`flex-1 relative overflow-hidden rounded-3xl p-6 md:p-8 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    {/* Animated gradient background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}`}
                      animate={reduceMotion ? {} : {
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                    
                    {/* Border glow */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity`} 
                         style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Mobile icon */}
                        <motion.div 
                          className={`md:hidden w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg ${item.glowColor}`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-bold shadow-lg`}>
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75`}></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          {item.week}
                        </span>
                      </div>
                      
                      <h4 className={`text-2xl font-extrabold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.phase}
                      </h4>
                      <p className="text-[#1a1a1a]/70 font-medium">{item.tasks}</p>
                      
                      {/* Progress bar */}
                      <div className="mt-4 h-2 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${item.gradient} relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '100%' } : { width: 0 }}
                          transition={{ duration: 1, delay: 1.2 + index * 0.2, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            animate={reduceMotion ? {} : {
                              x: ['-100%', '200%'],
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                        </motion.div>
                      </div>
                    </div>
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