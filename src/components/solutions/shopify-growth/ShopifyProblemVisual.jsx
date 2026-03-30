import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShoppingCart, Mail, Megaphone, BarChart2, AlertTriangle } from 'lucide-react';

const PROBLEMS = [
  { icon: ShoppingCart, label: "Store leaks conversions", detail: "Visitors leave without buying", color: "text-red-300", bg: "bg-red-500/20", border: "border-red-400/40", glow: "rgba(239,68,68,0.3)" },
  { icon: Megaphone, label: "Creative goes stale", detail: "New ads are slow to ship", color: "text-orange-300", bg: "bg-orange-500/20", border: "border-orange-400/40", glow: "rgba(249,115,22,0.3)" },
  { icon: Mail, label: "Email drives no repeats", detail: "Retention flows aren't working", color: "text-yellow-300", bg: "bg-yellow-500/20", border: "border-yellow-400/40", glow: "rgba(234,179,8,0.3)" },
  { icon: BarChart2, label: "SEO is underused", detail: "Paid has to do all the work", color: "text-violet-300", bg: "bg-violet-500/20", border: "border-violet-400/40", glow: "rgba(139,92,246,0.3)" },
  { icon: TrendingDown, label: "CAC keeps rising", detail: "Profit doesn't follow spend", color: "text-rose-300", bg: "bg-rose-500/20", border: "border-rose-400/40", glow: "rgba(244,63,94,0.3)" },
];

export default function ShopifyProblemVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0B1020] rounded-2xl border border-white/10 p-5 shadow-2xl relative overflow-hidden select-none"
    >
      <div className="absolute top-0 right-0 w-56 h-56 bg-red-500/10 rounded-full blur-[70px]" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-500/10 rounded-full blur-[60px]" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-5 relative z-10">
        <div className="w-7 h-7 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
        </div>
        <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Growth Blockers Detected</span>
      </div>

      {/* Problem cards */}
      <div className="space-y-2.5 relative z-10">
        {PROBLEMS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`flex items-center gap-3 p-3 rounded-xl border ${p.border} ${p.bg} cursor-default`}
              style={{ boxShadow: `0 0 12px ${p.glow}` }}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-black/30 border ${p.border}`}>
                <Icon className={`w-4.5 h-4.5 ${p.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white leading-tight">{p.label}</div>
                <div className="text-[10px] text-white/40 mt-0.5">{p.detail}</div>
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.4, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
                className={`w-2 h-2 rounded-full flex-shrink-0 ${p.color.replace('text-', 'bg-')}`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="mt-4 flex items-center gap-2 bg-red-500/15 border border-red-400/30 rounded-xl p-3 relative z-10"
        style={{ boxShadow: '0 0 20px rgba(244,63,94,0.15)' }}
      >
        <TrendingDown className="w-4 h-4 text-red-300 flex-shrink-0" />
        <span className="text-xs text-red-200 font-semibold">Profit not scaling despite increased spend</span>
      </motion.div>
    </motion.div>
  );
}