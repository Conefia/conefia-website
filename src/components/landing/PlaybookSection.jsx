import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

export default function PlaybookSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    'Clear MVP scope with success criteria defined'],

    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    iconBg: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-200/50',
    glowColor: 'shadow-blue-500/20',
    accentColor: 'text-blue-600'
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
    'Security, compliance (HIPAA), and analytics setup'],

    gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
    bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
    iconBg: 'from-[#DBFE01] to-[#a8c600]',
    borderColor: 'border-[#DBFE01]/50',
    glowColor: 'shadow-[#DBFE01]/30',
    accentColor: 'text-[#a8c600]'
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
    'Google Business Profile and social media setup'],

    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-200/50',
    glowColor: 'shadow-purple-500/20',
    accentColor: 'text-purple-600'
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
    'Continuous iteration roadmap based on user data'],

    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    iconBg: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-200/50',
    glowColor: 'shadow-emerald-500/20',
    accentColor: 'text-emerald-600'
  }];


  return (
    <section ref={ref} id="playbook" className="py-16 md:py-24 bg-gradient-to-b from-white/70 via-[#FAFAFA] to-white/70 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }} />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-20">

          <motion.span className="bg-gradient-to-r text-[#1a1a1a] mb-6 px-4 py-2 text-lg font-semibold rounded-full inline-flex items-center gap-2 from-[#DBFE01]/30 via-purple-500/20 to-cyan-500/20 border-2 border-[#DBFE01]/30"

          animate={reduceMotion ? {} : {
            boxShadow: [
            '0 0 20px rgba(219, 254, 1, 0.3)',
            '0 0 40px rgba(139, 92, 246, 0.3)',
            '0 0 20px rgba(6, 182, 212, 0.3)',
            '0 0 20px rgba(219, 254, 1, 0.3)']

          }}
          transition={{ duration: 4, repeat: Infinity }}>The 4-Phase Playbook



          </motion.span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            From idea to <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">market leader</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Clear sequencing, reusable components, and strict stage gates — 
            so you ship faster without cutting corners or compromising quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.2 + index * 0.15,
              type: "spring",
              stiffness: 80
            }}
            whileHover={reduceMotion ? {} : {
              y: -8,
              rotateY: 3,
              transition: { duration: 0.3 }
            }}
            className="group relative perspective-1000">

              {/* Animated glow effect */}
              <motion.div
              className={`absolute -inset-1 bg-gradient-to-r ${phase.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
              animate={reduceMotion ? {} : {
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }} />


              <div className={`relative glass-card rounded-3xl p-7 h-full hover:shadow-2xl transition-all duration-500 border-2 ${phase.borderColor} group-hover:border-opacity-80 bg-gradient-to-br ${phase.bgGradient} backdrop-blur-xl overflow-hidden`}>
                {/* Animated gradient overlay */}
                <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
                }}
                animate={reduceMotion ? {} : {
                  x: ['-200%', '200%']
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }} />


                {/* Phase number & icon */}
                <div className="relative flex items-center justify-between mb-6">
                  <motion.span
                  className="text-7xl font-black text-[#1a1a1a]/5 group-hover:text-[#1a1a1a]/10 transition-all duration-500"
                  animate={reduceMotion ? {} : {
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}>

                    {phase.number}
                  </motion.span>
                  
                  <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.iconBg} flex items-center justify-center border-2 border-white/50 shadow-lg ${phase.glowColor} group-hover:shadow-2xl transition-all duration-500`}
                  animate={reduceMotion ? {} : {
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  whileHover={reduceMotion ? {} : { scale: 1.1, rotate: 10 }}>

                    <phase.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                </div>

                {/* Title & duration */}
                <div className="relative mb-4">
                  <h3 className="text-2xl font-extrabold text-[#1a1a1a] mb-2 group-hover:scale-105 transition-transform duration-300">
                    {phase.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${phase.accentColor} bg-white/80 border border-current/20`}>
                    {phase.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#1a1a1a]/80 mb-6 text-sm leading-relaxed font-semibold">
                  {phase.description}
                </p>

                {/* Tasks */}
                <ul className="space-y-3 mb-6">
                  {phase.tasks.map((task, taskIndex) =>
                <motion.li
                  key={taskIndex}
                  className="flex items-start gap-2.5 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.15 + taskIndex * 0.05
                  }}>

                      <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}>

                        <CheckCircle2 className={`w-4 h-4 ${phase.accentColor} flex-shrink-0 mt-0.5`} />
                      </motion.div>
                      <span className="text-[#1a1a1a]/80 font-medium leading-snug">{task}</span>
                    </motion.li>
                )}
                </ul>

                {/* Animated progress bar */}
                <div className="relative mt-auto pt-6 border-t-2 border-[#1a1a1a]/5">
                  <div className="h-2.5 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
                    <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.5,
                      delay: reduceMotion ? 0 : 0.6 + index * 0.2,
                      ease: "easeOut"
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${phase.gradient} shadow-lg relative overflow-hidden`}>

                      {/* Shimmer effect */}
                      <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={reduceMotion ? {} : {
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }} />

                    </motion.div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) =>
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${phase.gradient} opacity-0 group-hover:opacity-60`}
                style={{
                  left: `${20 + i * 30}%`,
                  bottom: `${20 + i * 10}%`
                }}
                animate={reduceMotion ? {} : {
                  y: [-20, -40, -20],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }} />

              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}