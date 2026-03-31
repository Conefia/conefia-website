import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, ShoppingCart, Mail, Search, BarChart2, CheckCircle } from 'lucide-react';

const callItems = [
  { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "Conversion gaps identified", color: "text-[#DBFE01]", bg: "bg-[#DBFE01]/10" },
  { icon: <ShoppingCart className="w-3.5 h-3.5" />, label: "Store leaks mapped", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: <Mail className="w-3.5 h-3.5" />, label: "Retention flows reviewed", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: <Search className="w-3.5 h-3.5" />, label: "SEO & paid overlap spotted", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: <BarChart2 className="w-3.5 h-3.5" />, label: "Profit tracking gaps flagged", color: "text-orange-400", bg: "bg-orange-400/10" },
];

const priorities = [
  { label: "Fix Now", items: ["CRO on PDP & cart", "Email welcome flow"], color: "bg-red-400/20 text-red-300 border-red-400/30" },
  { label: "Sprint", items: ["Ad creative refresh", "SEO content plan"], color: "bg-[#DBFE01]/20 text-[#DBFE01] border-[#DBFE01]/30" },
  { label: "Scale", items: ["Paid multi-channel", "Profit dashboard"], color: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30" },
];

export default function ShopifyGrowthPlanVisual() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIdx(p => (p + 1) % callItems.length), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-72 mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-white/10"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#DBFE01]"
          />
          <span className="text-[10px] font-bold text-[#DBFE01] uppercase tracking-widest">30-Min Roadmap Call</span>
        </div>
        <div className="text-white font-bold text-sm">What you'll leave with</div>
      </div>

      {/* Animated checklist */}
      <div className="px-5 py-4 space-y-2">
        {callItems.map((item, i) => (
          <motion.div
            key={i}
            animate={{ opacity: activeIdx === i ? 1 : 0.45, x: activeIdx === i ? 4 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5"
          >
            <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}>
              {item.icon}
            </div>
            <span className="text-xs text-white/80 font-medium">{item.label}</span>
            {activeIdx === i && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-auto"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#DBFE01]" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Priority map */}
      <div className="px-5 pb-4">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-bold">Your priority map</div>
        <div className="grid grid-cols-3 gap-1.5">
          {priorities.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`rounded-lg border p-2 ${p.color}`}
            >
              <div className="text-[9px] font-bold uppercase tracking-wide mb-1.5 opacity-80">{p.label}</div>
              {p.items.map((item, j) => (
                <div key={j} className="text-[9px] leading-tight mb-1 opacity-90">{item}</div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer badge */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="mx-5 mb-5 bg-[#DBFE01] rounded-xl px-4 py-2.5 flex items-center justify-between"
      >
        <div>
          <div className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-wide">Sprint plan ready</div>
          <div className="text-[9px] text-[#1a1a1a]/60 font-medium">8–12 week roadmap, scoped & locked</div>
        </div>
        <span className="text-lg">🛍️</span>
      </motion.div>
    </motion.div>
  );
}