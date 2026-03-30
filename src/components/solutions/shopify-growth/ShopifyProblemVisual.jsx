import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShoppingCart, Mail, Megaphone, BarChart2, AlertTriangle } from 'lucide-react';

const PROBLEMS = [
  { icon: ShoppingCart, label: "Store leaks conversions", detail: "Visitors leave without buying", color: "text-red-400", bg: "bg-red-500/15", border: "border-red-500/25" },
  { icon: Megaphone, label: "Creative goes stale", detail: "New ads are slow to ship", color: "text-orange-400", bg: "bg-orange-500/15", border: "border-orange-500/25" },
  { icon: Mail, label: "Email drives no repeats", detail: "Retention flows aren't working", color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/25" },
  { icon: BarChart2, label: "SEO is underused", detail: "Paid has to do all the work", color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/25" },
  { icon: TrendingDown, label: "CAC keeps rising", detail: "Profit doesn't follow spend", color: "text-rose-400", bg: "bg-rose-500/15", border: "border-rose-500/25" },
];

export default function ShopifyProblemVisual() {
  return (
    <div className="bg-[#0B1020] rounded-2xl border border-white/10 p-5 shadow-2xl relative overflow-hidden select-none">
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-[60px]" />

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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className={`flex items-center gap-3 p-3 rounded-xl border ${p.border} ${p.bg}`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-black/20`}>
                <Icon className={`w-4.5 h-4.5 ${p.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white leading-tight">{p.label}</div>
                <div className="text-[10px] text-white/40 mt-0.5">{p.detail}</div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3 relative z-10"
      >
        <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0" />
        <span className="text-xs text-red-300 font-semibold">Profit not scaling despite increased spend</span>
      </motion.div>
    </div>
  );
}