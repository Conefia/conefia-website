import React from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, ArrowRight, Users, Target, Layers, BarChart3, Sparkles } from 'lucide-react';

export default function ProblemSolution({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const problems = [
  'Juggling 5+ vendors — dev, design, marketing, analytics all disconnected',
  'Misaligned priorities and conflicting roadmaps slowing you down',
  'Slow handoffs with weeks of waiting between development phases',
  'No single owner accountable for your success metrics and ROI'];


  const solutions = [
  {
    icon: Users,
    text: 'One accountable team',
    desc: 'End-to-end ownership',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    iconBg: 'from-violet-400 to-purple-500',
    glow: 'shadow-violet-500/50'
  },
  {
    icon: Target,
    text: 'Single unified backlog',
    desc: 'Clear priorities always',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    iconBg: 'from-blue-400 to-cyan-500',
    glow: 'shadow-cyan-500/50'
  },
  {
    icon: Layers,
    text: 'Strategy to execution',
    desc: 'Seamless delivery',
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    iconBg: 'from-emerald-400 to-green-500',
    glow: 'shadow-emerald-500/50'
  },
  {
    icon: BarChart3,
    text: 'Outcome-driven growth',
    desc: 'Data-backed decisions',
    gradient: 'from-orange-500 via-amber-500 to-yellow-400',
    iconBg: 'from-orange-400 to-yellow-500',
    glow: 'shadow-amber-500/50'
  }];


  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#1a1a1a]/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-20">

          <span className="bg-[#1a1a1a]/8 text-[#1a1a1a]/70 mb-6 px-4 py-2 text-lg font-semibold rounded-full inline-block">Why Conefia

          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Stop managing vendors.<br />
            <span className="gradient-text">Start shipping product.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 font-medium max-w-3xl mx-auto">
            Fragmented teams create fragmented outcomes. Get one integrated team 
            that owns your entire journey from idea to scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.2 }}
            className="relative">

            <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-red-200/50 bg-red-50/30 relative overflow-hidden">
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-50" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6 border border-red-200">
                  <X className="w-4 h-4" />
                  The Problem
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                  Fragmented vendors = fragmented outcomes
                </h3>
                <ul className="space-y-5">
                  {problems.map((problem, index) =>
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : 0.4 + index * 0.12
                    }}
                    className="flex items-start gap-3">

                      <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-[#1a1a1a] font-semibold leading-relaxed">{problem}</span>
                    </motion.li>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.3 }}
            className="relative">

            {/* Animated gradient glow background */}
            <motion.div
              className="absolute inset-0 opacity-20 blur-3xl"
              animate={reduceMotion ? {} : {
                background: [
                'radial-gradient(circle at 0% 0%, #8b5cf6 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, #06b6d4 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, #10b981 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, #f59e0b 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, #8b5cf6 0%, transparent 50%)']

              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />


            <div className="relative glass-card rounded-3xl p-8 md:p-10 h-full border-2 border-transparent bg-gradient-to-br from-white via-white to-[#DBFE01]/5 overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              
              {/* Sparkle effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-4 right-4">

                <Sparkles className="w-6 h-6 text-[#DBFE01]" />
              </motion.div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#DBFE01]/30 to-[#DBFE01]/10 text-[#1a1a1a] text-sm font-semibold mb-6 border-2 border-[#DBFE01]/40">
                <Check className="w-4 h-4" />
                The Solution
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                One team. One backlog.<br />
                <span className="bg-gradient-to-r from-violet-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Real outcomes.
                </span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {solutions.map((solution, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : 0.5 + index * 0.12,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={reduceMotion ? {} : {
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative">

                    {/* Gradient background with glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
                    
                    <div className="relative p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-transparent group-hover:border-white group-hover:shadow-xl transition-all duration-300">
                      {/* Animated icon container */}
                      <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.iconBg} flex items-center justify-center mb-3 shadow-lg ${solution.glow} group-hover:shadow-2xl transition-shadow duration-300`}
                      animate={reduceMotion ? {} : {
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}>

                        <solution.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <p className="font-bold text-[#1a1a1a] mb-1 group-hover:bg-gradient-to-r group-hover:from-[#1a1a1a] group-hover:to-[#1a1a1a]/70 group-hover:bg-clip-text transition-all">
                        {solution.text}
                      </p>
                      <p className="text-xs text-[#1a1a1a]/80 font-semibold">{solution.desc}</p>
                      
                      {/* Hover shine effect */}
                      <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
                      }}
                      animate={reduceMotion ? {} : {
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }} />

                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated arrow */}
        <div className="hidden lg:flex justify-center my-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 rounded-full blur-xl opacity-50" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 flex items-center justify-center shadow-xl cursor-pointer">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}