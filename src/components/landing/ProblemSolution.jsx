import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight, Users, Target, Layers, BarChart3 } from 'lucide-react';

export default function ProblemSolution({ reduceMotion }) {
  const problems = [
    'Juggling 5+ vendors (dev, design, marketing, analytics...)',
    'Misaligned priorities and conflicting roadmaps',
    'Slow iterations, weeks waiting for handoffs',
    'No single owner of your success metrics',
  ];

  const solutions = [
    { icon: Users, text: 'One accountable team' },
    { icon: Target, text: 'Single unified backlog' },
    { icon: Layers, text: 'Strategy to execution' },
    { icon: BarChart3, text: 'Outcome-driven growth' },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#2F2F2F]/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2F2F2F]/5 text-[#2F2F2F]/60 text-sm font-medium mb-4">
            Why Conefia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-4">
            Stop managing vendors.<br />
            <span className="gradient-text">Start shipping product.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-red-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-6">
                <X className="w-4 h-4" />
                The Problem
              </div>
              <h3 className="text-2xl font-bold text-[#2F2F2F] mb-6">
                Fragmented vendors = fragmented outcomes
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: reduceMotion ? 0 : 0.4, 
                      delay: reduceMotion ? 0 : 0.2 + index * 0.1 
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <span className="text-[#2F2F2F]/70">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-[#DBFE01]/30 bg-gradient-to-br from-[#DBFE01]/5 to-transparent">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DBFE01]/20 text-[#2F2F2F] text-sm font-medium mb-6">
                <Check className="w-4 h-4" />
                The Solution
              </div>
              <h3 className="text-2xl font-bold text-[#2F2F2F] mb-6">
                One team. One backlog. Real outcomes.
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: reduceMotion ? 0 : 0.4, 
                      delay: reduceMotion ? 0 : 0.3 + index * 0.1 
                    }}
                    className="p-4 rounded-2xl bg-white/50 border border-[#DBFE01]/20 hover:border-[#DBFE01]/40 transition-colors"
                  >
                    <solution.icon className="w-8 h-8 text-[#2F2F2F] mb-3" />
                    <p className="font-medium text-[#2F2F2F]">{solution.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow connecting sections */}
        <div className="hidden lg:flex justify-center my-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-[#DBFE01] flex items-center justify-center shadow-lg shadow-[#DBFE01]/30"
          >
            <ArrowRight className="w-6 h-6 text-[#2F2F2F]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}