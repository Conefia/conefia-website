import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, TrendingUp, Zap } from 'lucide-react';

export default function AccelerateProcessVisual() {
  const steps = [
    {
      id: 1,
      title: "Validate",
      duration: "Weeks 1–2",
      icon: Lightbulb,
      description: "Audit state. Scope opportunity. Map roadmap.",
      outcome: "Clear plan. Finite scope. Achievable timeline."
    },
    {
      id: 2,
      title: "Build",
      duration: "Weeks 3–8",
      icon: Code2,
      description: "High-velocity execution. Weekly demos. Parallel work.",
      outcome: "Live product. Digital presence. Growth strategy."
    },
    {
      id: 3,
      title: "Launch",
      duration: "Weeks 9–10",
      icon: Rocket,
      description: "Go live. Measure. Set up analytics.",
      outcome: "Live product. First customers. Real data."
    },
    {
      id: 4,
      title: "Scale",
      duration: "Weeks 11+",
      icon: TrendingUp,
      description: "Growth team embedded. Continuous optimization.",
      outcome: "Predictable growth. Trained team. Clear next steps.",
      highlight: true
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto p-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-2xl" />
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-8 text-center">The 4-Phase Playbook</h3>
        
        {/* Connecting Line Container */}
        <div className="absolute left-[2.25rem] top-24 bottom-12 w-0.5 bg-white/10">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#DBFE01] to-blue-500"
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
        </div>

        <div className="space-y-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-6 relative"
            >
              {/* Icon Node */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: index * 0.2 + 0.1 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                    step.highlight 
                      ? 'bg-[#DBFE01] border-[#DBFE01] text-black shadow-[0_0_20px_rgba(219,254,1,0.4)]' 
                      : 'bg-[#0B1020] border-white/20 text-white shadow-lg'
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </motion.div>
                {/* Active Pulse for Highlight */}
                {step.highlight && (
                  <motion.div
                    className="absolute inset-0 bg-[#DBFE01] rounded-xl -z-10"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-lg font-bold ${step.highlight ? 'text-[#DBFE01]' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-white/5 text-white/60 border border-white/10">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-white/80 mb-2 leading-relaxed">{step.description}</p>
                <div className="flex items-start gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#DBFE01] mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-white/50 leading-relaxed">
                    <span className="text-[#DBFE01]/80 font-medium">You leave with: </span>
                    {step.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-4 right-4 text-[#DBFE01]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-24 h-24" />
        </motion.div>
      </div>
    </div>
  );
}