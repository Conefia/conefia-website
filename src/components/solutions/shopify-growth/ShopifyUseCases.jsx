import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Store, TrendingUp, Mail, Palette, Search, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const leftItems = [
  "We need to build the store properly before scaling",
  "We need better conversion without starting over",
  "We need stronger retention and repeat purchase",
  "We need better ad creatives and video edits",
  "We need SEO so paid is not carrying everything",
  "We need clearer reporting across channels"
];

const useCases = [
  {
    title: "Store Foundation Build",
    description: "Setup, structure, merchandising, tracking, launch readiness",
    icon: Store,
    color: "from-violet-50 to-purple-50/30",
    border: "border-violet-200/50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    glowColor: "rgba(139, 92, 246, 0.5)",
    glowColorLight: "rgba(139, 92, 246, 0.2)",
    barColor: "bg-violet-500",
    barGlow: "rgba(139, 92, 246, 0.6)",
    metrics: ["Structure", "Tracking", "Launch"],
    metric: "Foundation Score"
  },
  {
    title: "Conversion Recovery",
    description: "PDPs, collections, cart, checkout, mobile UX",
    icon: TrendingUp,
    color: "from-emerald-50 to-teal-50/30",
    border: "border-emerald-200/50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    glowColor: "rgba(16, 185, 129, 0.5)",
    glowColorLight: "rgba(16, 185, 129, 0.2)",
    barColor: "bg-emerald-500",
    barGlow: "rgba(16, 185, 129, 0.6)",
    metrics: ["PDPs", "Checkout", "Mobile UX"],
    metric: "CVR Lift"
  },
  {
    title: "Retention Lift",
    description: "Email, SMS, post-purchase, win-back",
    icon: Mail,
    color: "from-blue-50 to-indigo-50/30",
    border: "border-blue-200/50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    glowColor: "rgba(59, 130, 246, 0.5)",
    glowColorLight: "rgba(59, 130, 246, 0.2)",
    barColor: "bg-blue-500",
    barGlow: "rgba(59, 130, 246, 0.6)",
    metrics: ["Email", "SMS", "Win-Back"],
    metric: "Repeat Rate"
  },
  {
    title: "Creative Performance Engine",
    description: "Post designs, paid creative refresh, video edits",
    icon: Palette,
    color: "from-pink-50 to-rose-50/30",
    border: "border-pink-200/50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    glowColor: "rgba(236, 72, 153, 0.5)",
    glowColorLight: "rgba(236, 72, 153, 0.2)",
    barColor: "bg-pink-500",
    barGlow: "rgba(236, 72, 153, 0.6)",
    metrics: ["Statics", "Video", "Paid Creative"],
    metric: "Ad Performance"
  },
  {
    title: "Organic Growth Layer",
    description: "SEO content, blogs, search-intent pages",
    icon: Search,
    color: "from-amber-50 to-orange-50/30",
    border: "border-amber-200/50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    glowColor: "rgba(217, 119, 6, 0.5)",
    glowColorLight: "rgba(217, 119, 6, 0.2)",
    barColor: "bg-amber-500",
    barGlow: "rgba(217, 119, 6, 0.6)",
    metrics: ["SEO", "Blogs", "Search Intent"],
    metric: "Organic Traffic"
  },
  {
    title: "Growth Clarity",
    description: "Tracking, attribution, funnel visibility, profit-first reporting",
    icon: BarChart3,
    color: "from-cyan-50 to-sky-50/30",
    border: "border-cyan-200/50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    glowColor: "rgba(6, 182, 212, 0.5)",
    glowColorLight: "rgba(6, 182, 212, 0.2)",
    barColor: "bg-cyan-500",
    barGlow: "rgba(6, 182, 212, 0.6)",
    metrics: ["Attribution", "Funnels", "Profit"],
    metric: "Reporting Clarity"
  }
];

export default function ShopifyUseCases() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredLeftItem, setHoveredLeftItem] = useState(null);

  const handleItemHover = (i) => {
    setHoveredLeftItem(i);
    setActiveIndex(i);
  };

  const handleItemHoverEnd = () => {
    setHoveredLeftItem(null);
    setActiveIndex(null);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(219, 254, 1, 0.3), 0 0 40px rgba(219, 254, 1, 0.1); }
          50% { box-shadow: 0 0 30px rgba(219, 254, 1, 0.5), 0 0 60px rgba(219, 254, 1, 0.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Animated sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => {
          const x = (i * 5.8 + 3) % 100;
          const y = (i * 7.3 + 8) % 100;
          const delay = i * 0.4 % 3;
          const size = i % 3 === 0 ? 'w-5 h-5' : i % 3 === 1 ? 'w-4 h-4' : 'w-3 h-3';
          return (
            <motion.div
              key={i}
              className={`absolute ${size} text-[#DBFE01] drop-shadow-lg`}
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ opacity: [0.08, 0.35, 0.08], scale: [0.8, 1.2, 0.8], rotate: [0, 20, 0] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay, ease: "easeInOut" }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm0 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" /></svg>
            </motion.div>
          );
        })}
      </div>

      {/* Floating glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-40 h-40 bg-[#DBFE01]/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-[#DBFE01]/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
      />

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
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Common reasons brands come to us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Bullets */}
          <div className="space-y-4">
            {leftItems.map((item, i) => (
              <motion.div
                key={i}
                onHoverStart={() => handleItemHover(i)}
                onHoverEnd={handleItemHoverEnd}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "flex items-center gap-5 p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative group overflow-hidden",
                  hoveredLeftItem === i
                    ? "bg-[#DBFE01] border-[#b8d400] shadow-[0_8px_32px_rgba(219,254,1,0.4)]"
                    : "bg-[#f2ffc0] border-[#d4f500]/50 hover:bg-[#e8ff80]"
                )}>

                {/* Animated background pulse */}
                <motion.div
                  className="absolute inset-0 bg-[#1a1a1a]/5 opacity-0"
                  animate={hoveredLeftItem === i ? { opacity: 0.1 } : { opacity: 0 }}
                />

                <motion.div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10",
                    hoveredLeftItem === i ? "bg-[#1a1a1a]" : "bg-[#DBFE01]"
                  )}
                  animate={hoveredLeftItem === i ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    boxShadow: hoveredLeftItem === i
                      ? '0 0 20px rgba(219, 254, 1, 0.6), 0 0 40px rgba(219, 254, 1, 0.3)'
                      : '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                  <span className={cn(
                    "text-sm font-bold transition-colors duration-300",
                    hoveredLeftItem === i ? "text-[#DBFE01]" : "text-[#1a1a1a]"
                  )}>
                    {i + 1}
                  </span>
                </motion.div>

                {/* Checkmark */}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#1a1a1a]/20 flex items-center justify-center"
                  animate={hoveredLeftItem === i ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
                  <svg className="w-4 h-4 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <span className="text-base leading-snug font-semibold text-[#1a1a1a] relative z-10 pr-8">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.12 }}
                  animate={isActive ? { scale: 1.03, x: -4 } : { scale: 1, x: 0 }}
                  className={cn(
                    "p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-4 relative overflow-hidden",
                    isActive
                      ? `bg-gradient-to-br ${useCase.color} ${useCase.border} shadow-[0_8px_32px_rgba(26,26,26,0.08)]`
                      : `bg-white ${useCase.border} hover:shadow-md`
                  )}>

                  {/* Background icon accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none"
                    animate={isActive ? { scale: 1.3, rotate: 180 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}>
                    <Icon className="w-full h-full" />
                  </motion.div>

                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                      className={cn("w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0", useCase.iconBg)}
                      animate={isActive ? { scale: 1.15, rotate: 6 } : { scale: 1, rotate: 0 }}
                      style={{
                        boxShadow: isActive
                          ? `0 0 16px ${useCase.glowColor}, 0 0 32px ${useCase.glowColorLight}`
                          : '0 2px 8px rgba(0,0,0,0.1)'
                      }}>
                      <Icon className={cn("w-5 h-5", useCase.iconColor)} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base text-[#1a1a1a] mb-1">{useCase.title}</h4>
                      <p className="text-sm leading-snug text-[#1a1a1a]/70">{useCase.description}</p>
                    </div>
                  </div>

                  {/* Metric tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 relative z-10"
                    animate={isActive ? { opacity: 1 } : { opacity: 0.6 }}>
                    {useCase.metrics.map((metric, idx) => (
                      <motion.span
                        key={idx}
                        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={cn(
                          "text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300",
                          isActive ? "bg-[#1a1a1a]/10 text-[#1a1a1a]" : "bg-[#1a1a1a]/5 text-[#1a1a1a]/70"
                        )}
                        style={{ boxShadow: isActive ? '0 0 12px rgba(26,26,26,0.2)' : 'none' }}>
                        {metric}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Animated progress bar */}
                  <motion.div
                    className="relative z-10 flex items-center gap-2"
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}>
                    <div className="flex-1 h-1 bg-[#1a1a1a]/10 rounded-full overflow-hidden">
                      <motion.div
                        className={cn("h-full rounded-full", useCase.barColor)}
                        initial={{ width: 0 }}
                        animate={isActive ? { width: "85%" } : { width: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ boxShadow: isActive ? `0 0 12px ${useCase.barGlow}` : 'none' }}
                      />
                    </div>
                    <span className="text-xs font-bold text-[#1a1a1a]/70 whitespace-nowrap">{useCase.metric}</span>
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