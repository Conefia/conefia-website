import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, TrendingUp, Zap } from 'lucide-react';

// Minimal animation approach: opacity fades only (GPU-friendly)

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
    <div className="relative w-full max-w-md ml-auto p-4 lg:mr-0 lg:pr-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 lg:left-auto lg:-right-8 bg-gradient-to-br from-[#DBFE01]/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-2xl" />
      
      {/* Connecting Line - Static, no animation */}
      <div className="absolute left-[2.25rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#DBFE01] to-blue-500" />

      <div className="space-y-8 relative">
        {steps.map((step, index) =>
        <motion.div
          key={step.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          onClick={() => scrollToSection(step.title.toLowerCase())}
          className="flex gap-6 relative cursor-pointer group">

            {/* Icon Node - Static with hover effect */}
            <div className="relative z-10 flex-shrink-0">
              <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105 ${
              step.highlight ?
              'bg-[#DBFE01] border-[#DBFE01] text-black shadow-[0_0_20px_rgba(219,254,1,0.4)]' :
              'bg-[#0B1020] border-white/20 text-white shadow-lg'}`
              }>
                <step.icon className="w-6 h-6" />
              </div>
              {/* Pulse animation - GPU-friendly with opacity only */}
              {step.highlight &&
            <motion.div
              className="absolute inset-0 bg-[#DBFE01] rounded-xl -z-10"
              animate={{ opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }} />
            }
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold" style={{ color: 'white', WebkitTextFillColor: 'white', backgroundImage: 'none' }}>
                  {step.title}
                </h3>
                <span className="bg-white/5 text-[#DBFE01] px-2 py-0.5 text-xs font-semibold rounded border border-white/10 ml-3 shrink-0">
                  {step.duration}
                </span>
              </div>
              <p className="text-white/80 mb-1 text-base font-medium">{step.subtitle}</p>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Subtle floating accent - static with CSS only */}
      <div className="absolute top-4 right-4 text-[#DBFE01]/10 opacity-60">
        <Zap className="w-24 h-24" />
      </div>
    </div>);

}