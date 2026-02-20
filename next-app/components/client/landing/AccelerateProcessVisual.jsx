'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, TrendingUp, Zap } from 'lucide-react';

export default function AccelerateProcessVisual({ reduceMotion }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
  {
    id: 1,
    title: "Validate",
    subtitle: "De-risk before you build",
    duration: "2–4 weeks",
    icon: Lightbulb,
    description: "Research, prototype, and scope a roadmap you can ship."
  },
  {
    id: 2,
    title: "Build",
    subtitle: "Ship the MVP fast",
    duration: "6–12 weeks",
    icon: Code2,
    description: "Production-ready MVP with clean architecture and analytics."
  },
  {
    id: 3,
    title: "Launch",
    subtitle: "Start acquiring users",
    duration: "Market Ready",
    icon: Rocket,
    description: "Landing page, onboarding, tracking, and channel setup."
  },
  {
    id: 4,
    title: "Scale",
    subtitle: "Make growth predictable",
    duration: "Ongoing",
    icon: TrendingUp,
    description: "CRO, SEO, paid ads, and retention improvements.",
    highlight: true
  }];


  return (
    <div className="relative w-full max-w-md ml-auto p-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-2xl" />
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden">
        {/* Connecting Line Container */}
        <div className="absolute left-[2.25rem] top-12 bottom-12 w-0.5 bg-white/10">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#DBFE01] to-blue-500"
            initial={{ height: reduceMotion ? "100%" : "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 2, ease: "easeInOut", delay: reduceMotion ? 0 : 0.5 }} />

        </div>

        <div className="space-y-8 relative">
          {steps.map((step, index) =>
          <motion.div
            key={step.id}
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduceMotion ? 0 : index * 0.2 }}
            onClick={() => scrollToSection(step.title.toLowerCase())}
            className="flex gap-6 relative cursor-pointer hover:scale-[1.02] transition-transform">

              {/* Icon Node */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                initial={{ scale: reduceMotion ? 1 : 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: reduceMotion ? 0 : index * 0.2 + 0.1 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                step.highlight ?
                'bg-[#DBFE01] border-[#DBFE01] text-black shadow-[0_0_20px_rgba(219,254,1,0.4)]' :
                'bg-[#0B1020] border-white/20 text-white shadow-lg'}`
                }>

                  <step.icon className="w-6 h-6" />
                </motion.div>
                {/* Active Pulse for Highlight */}
                {step.highlight &&
              <motion.div
                className="absolute inset-0 bg-[#DBFE01] rounded-xl -z-10"
                animate={reduceMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }} />

              }
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-lg font-bold ${step.highlight ? 'text-[#DBFE01]' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <span className="bg-white/5 text-[#DBFE01] px-2 py-1 text-sm font-semibold rounded border border-white/10">
                    {step.duration}
                  </span>
                </div>
                <p className="text-white/80 mb-1 text-base font-medium">{step.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-4 right-4 text-[#DBFE01]/20"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>

          <Zap className="w-24 h-24" />
        </motion.div>
      </div>
    </div>);

}