import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, RefreshCw, Zap, BarChart3 } from 'lucide-react';

const METRIC_CARDS = [
  {
    val: "Higher",
    label: "Conversion Rate",
    sub: "More revenue per visit",
    icon: TrendingUp,
    bg: "bg-[#0B1020]",
    border: "border-emerald-500/30",
    accent: "from-emerald-500/20 to-transparent",
    valColor: "text-emerald-400",
    color: "text-emerald-400"
  },
  {
    val: "Stronger",
    label: "Repeat Purchase",
    sub: "Better LTV",
    icon: RefreshCw,
    bg: "bg-[#DBFE01]",
    border: "border-[#DBFE01]",
    accent: "from-white/20 to-transparent",
    valColor: "text-[#1a1a1a]",
    color: "text-[#1a1a1a]"
  },
  {
    val: "Faster",
    label: "Creative Testing",
    sub: "Less fatigue, better performance",
    icon: Zap,
    bg: "bg-[#0B1020]",
    border: "border-purple-500/30",
    accent: "from-purple-500/20 to-transparent",
    valColor: "text-purple-400",
    color: "text-purple-400"
  },
  {
    val: "Clearer",
    label: "Profit Visibility",
    sub: "Smarter decisions",
    icon: BarChart3,
    bg: "bg-[#0B1020]",
    border: "border-amber-500/30",
    accent: "from-amber-500/20 to-transparent",
    valColor: "text-amber-400",
    color: "text-amber-400"
  }
];

export default function ShopifyMetricsVisual() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % METRIC_CARDS.length);
    }, 2200);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (i) => {
    setActive(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % METRIC_CARDS.length);
    }, 2200);
  };

  return (
    <div>
      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRIC_CARDS.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`p-5 rounded-2xl border ${m.border} shadow-sm ${m.bg} relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${m.accent} pointer-events-none`} />
            <div className={`mb-3 ${m.color} relative z-10`}>
              <m.icon className="w-6 h-6" />
            </div>
            <div className={`text-3xl font-extrabold mb-1 tracking-tight relative z-10 ${m.valColor}`}>
              {m.val}
            </div>
            <div className={`text-sm font-bold relative z-10 ${m.bg === 'bg-[#DBFE01]' ? 'text-[#1a1a1a]/80' : 'text-white/80'}`}>
              {m.label}
            </div>
            <div className={`text-xs mt-1 relative z-10 ${m.bg === 'bg-[#DBFE01]' ? 'text-[#1a1a1a]/60' : 'text-white/40'}`}>
              {m.sub}
            </div>
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Mobile & Tablet: carousel */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            {METRIC_CARDS.map((m, i) => i === active && (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`p-6 sm:p-8 rounded-2xl border ${m.border} ${m.bg} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${m.accent} pointer-events-none`} />
                <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 border ${m.border} ${m.bg === 'bg-[#DBFE01]' ? 'bg-black/10' : 'bg-white/5'}`}>
                    <m.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${m.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${m.valColor}`}>{m.val}</div>
                    <div className={`text-sm sm:text-base font-bold mt-1 ${m.bg === 'bg-[#DBFE01]' ? 'text-[#1a1a1a]/80' : 'text-white/80'}`}>{m.label}</div>
                    <div className={`text-xs sm:text-sm mt-0.5 ${m.bg === 'bg-[#DBFE01]' ? 'text-[#1a1a1a]/60' : 'text-white/40'}`}>{m.sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {METRIC_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 rounded-full ${i === active ? 'w-6 h-2 bg-[#DBFE01]' : 'w-2 h-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}