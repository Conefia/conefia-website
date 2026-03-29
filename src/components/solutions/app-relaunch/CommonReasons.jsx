import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, BarChart3, Activity, Users, Zap, GitBranch, LineChart, Heart, Store } from 'lucide-react';
import { cn } from '@/lib/utils';

const reasonItems = [
  "We have installs, but retention is too weak",
  "Growth has stalled because users are not sticking",
  "We want better ratings without jumping straight to a rebuild",
  "We need stronger onboarding and activation",
  "We want better store conversion and more value from acquisition",
  "We need reliable analytics before making bigger product bets"
];

const useCases = [
  {
    title: "Retention Recovery",
    description: "Improve onboarding, activation, repeat usage, and user confidence",
    icon: Heart,
    color: "from-emerald-50 to-teal-50/30",
    border: "border-emerald-200/50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    metrics: ["Onboarding", "Activation", "Repeat Use"],
    metric: "Day-30 Retention"
  },
  {
    title: "Store Conversion Lift",
    description: "Upgrade ASO, screenshots, messaging, and review strategy",
    icon: Store,
    color: "from-blue-50 to-indigo-50/30",
    border: "border-blue-200/50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    metrics: ["ASO", "Messaging", "Reviews"],
    metric: "Install Rate"
  },
  {
    title: "Growth Clarity",
    description: "Build reliable tracking, funnels, cohorts, and decision-ready dashboards",
    icon: BarChart3,
    color: "from-amber-50 to-orange-50/30",
    border: "border-amber-200/50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    metrics: ["Tracking", "Funnels", "Cohorts"],
    metric: "Data Confidence"
  }
];

export default function CommonReasons() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated AI sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => {
          const x = (i * 5.8 + 3) % 100;
          const y = (i * 7.3 + 8) % 100;
          const delay = i * 0.4 % 3;
          const size = i % 3 === 0 ? 'w-5 h-5' : i % 3 === 1 ? 'w-4 h-4' : 'w-3 h-3';
          return (
            <motion.div
              key={i}
              className={`absolute ${size} text-[#DBFE01]`}
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ opacity: [0.08, 0.35, 0.08], scale: [0.8, 1.2, 0.8], rotate: [0, 20, 0] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay, ease: "easeInOut" }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm0 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" /></svg>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
            Common Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold"><span className="text-[#1a1a1a]">Common reasons teams come to us</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Bullets */}
          <div className="space-y-4">
            {reasonItems.map((item, i) => (
              <motion.div
                key={i}
                onHoverStart={() => setActiveIndex(i)}
                onHoverEnd={() => setActiveIndex(null)}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "flex items-center gap-5 p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative group overflow-hidden",
                  activeIndex === i
                    ? "bg-[#DBFE01] border-[#b8d400] shadow-[0_8px_32px_rgba(219,254,1,0.4)]"
                    : "bg-[#f2ffc0] border-[#d4f500]/50 hover:bg-[#e8ff80]"
                )}>
                
                {/* Animated background pulse */}
                <motion.div
                  className="absolute inset-0 bg-[#1a1a1a]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={activeIndex === i ? { opacity: 0.1 } : { opacity: 0 }}
                />

                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md relative z-10",
                    activeIndex === i ? "bg-[#1a1a1a]" : "bg-[#DBFE01]"
                  )}
                  animate={activeIndex === i ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={cn(
                    "text-lg font-bold transition-colors duration-300",
                    activeIndex === i ? "text-[#DBFE01]" : "text-[#1a1a1a]"
                  )}>
                    {i + 1}
                  </span>
                </motion.div>

                {/* Checkmark indicator */}
                <motion.div
                  className="absolute right-4 top-4 w-6 h-6 rounded-full bg-[#1a1a1a]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={activeIndex === i ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                >
                  <svg className="w-4 h-4 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <span className={cn(
                  "text-base leading-snug font-semibold transition-colors duration-300 relative z-10",
                  activeIndex === i ? "text-[#1a1a1a]" : "text-[#1a1a1a]"
                )}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  animate={activeIndex === i ? { scale: 1.03, x: -4 } : { scale: 1, x: 0 }}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-5 relative overflow-hidden",
                    activeIndex === i
                      ? `bg-gradient-to-br ${useCase.color} ${useCase.border} shadow-[0_8px_32px_rgba(26,26,26,0.08)]`
                      : `bg-white ${useCase.border} hover:shadow-md`
                  )}>
                  
                  {/* Animated background accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none"
                    animate={activeIndex === i ? { scale: 1.2, rotate: 180 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>

                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md",
                        activeIndex === i ? useCase.iconBg : useCase.iconBg
                      )}
                      animate={activeIndex === i ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {Icon && <Icon className={cn("w-6 h-6 transition-all duration-300", useCase.iconColor)} />}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className={cn(
                        "font-bold text-base transition-colors duration-300 mb-1",
                        activeIndex === i ? "text-[#1a1a1a]" : "text-[#1a1a1a]"
                      )}>
                        {useCase.title}
                      </h4>
                      <p className={cn(
                        "text-sm leading-snug transition-colors duration-300",
                        activeIndex === i ? "text-[#1a1a1a]/80" : "text-[#1a1a1a]/70"
                      )}>
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 relative z-10"
                    animate={activeIndex === i ? { opacity: 1 } : { opacity: 0.6 }}
                  >
                    {useCase.metrics.map((metric, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + idx * 0.05 + 0.2 }}
                        className={cn(
                          "text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300",
                          activeIndex === i
                            ? "bg-[#1a1a1a]/10 text-[#1a1a1a]"
                            : "bg-[#1a1a1a]/5 text-[#1a1a1a]/70"
                        )}
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Animated metric indicator */}
                  <motion.div
                    className="relative z-10 flex items-center gap-2"
                    animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex-1 h-1 bg-[#1a1a1a]/10 rounded-full overflow-hidden">
                      <motion.div
                        className={cn(
                          "h-full rounded-full",
                          i === 0 ? "bg-emerald-500" : i === 1 ? "bg-blue-500" : "bg-amber-500"
                        )}
                        initial={{ width: 0 }}
                        animate={activeIndex === i ? { width: "85%" } : { width: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-xs font-bold text-[#1a1a1a]/70">{useCase.metric}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}