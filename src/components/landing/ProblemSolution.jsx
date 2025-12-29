import React from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, ArrowRight, Users, Target, Layers, BarChart3 } from 'lucide-react';

export default function ProblemSolution({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    'Juggling 5+ vendors — dev, design, marketing, analytics all disconnected',
    'Misaligned priorities and conflicting roadmaps slowing you down',
    'Slow handoffs with weeks of waiting between development phases',
    'No single owner accountable for your success metrics and ROI',
  ];

  const solutions = [
    { icon: Users, text: 'One accountable team', desc: 'End-to-end ownership' },
    { icon: Target, text: 'Single unified backlog', desc: 'Clear priorities always' },
    { icon: Layers, text: 'Strategy to execution', desc: 'Seamless delivery' },
    { icon: BarChart3, text: 'Outcome-driven growth', desc: 'Data-backed decisions' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#1a1a1a]/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1a1a1a]/8 text-[#1a1a1a]/70 text-sm font-semibold mb-6">
            Why Conefia
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Stop managing vendors.<br />
            <span className="gradient-text">Start shipping product.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 font-medium max-w-3xl mx-auto">
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
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-red-200/50 bg-red-50/30">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6 border border-red-200">
                <X className="w-4 h-4" />
                The Problem
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Fragmented vendors = fragmented outcomes
              </h3>
              <ul className="space-y-5">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: reduceMotion ? 0 : 0.5, 
                      delay: reduceMotion ? 0 : 0.4 + index * 0.12 
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-[#DBFE01]/40 bg-gradient-to-br from-[#DBFE01]/10 to-transparent">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/30 text-[#1a1a1a] text-sm font-semibold mb-6 border border-[#DBFE01]/40">
                <Check className="w-4 h-4" />
                The Solution
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                One team. One backlog.<br />Real outcomes.
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: reduceMotion ? 0 : 0.5, 
                      delay: reduceMotion ? 0 : 0.5 + index * 0.12 
                    }}
                    className="p-5 rounded-2xl bg-white/60 border-2 border-[#DBFE01]/30 hover:border-[#DBFE01]/50 hover:shadow-lg transition-all"
                  >
                    <solution.icon className="w-9 h-9 text-[#1a1a1a] mb-3" />
                    <p className="font-bold text-[#1a1a1a] mb-1">{solution.text}</p>
                    <p className="text-xs text-[#1a1a1a]/60 font-medium">{solution.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow connecting sections */}
        <div className="hidden lg:flex justify-center my-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-16 h-16 rounded-full bg-[#DBFE01] flex items-center justify-center shadow-xl shadow-[#DBFE01]/30"
          >
            <ArrowRight className="w-7 h-7 text-[#1a1a1a]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}