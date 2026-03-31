import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, Rocket, TrendingUp, Trophy } from 'lucide-react';

const phases = [
  { icon: Search, label: "Audit", desc: "Week 1–2", color: "blue", bg: "bg-blue-50", text: "text-blue-600", grad: "linear-gradient(90deg, #3b82f6, #60a5fa)" },
  { icon: Wrench, label: "Build", desc: "Weeks 3–6", color: "purple", bg: "bg-purple-50", text: "text-purple-600", grad: "linear-gradient(90deg, #a855f7, #c084fc)" },
  { icon: Rocket, label: "Launch", desc: "Weeks 7–8", color: "emerald", bg: "bg-emerald-50", text: "text-emerald-600", grad: "linear-gradient(90deg, #10b981, #34d399)" },
  { icon: TrendingUp, label: "Scale", desc: "Monthly", color: "amber", bg: "bg-amber-50", text: "text-amber-600", grad: "linear-gradient(90deg, #f59e0b, #fbbf24)" },
];

export default function ShopifyGrowthPlanVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: '0 40px 80px -20px rgba(0,0,0,0.2)' }}
      className="bg-gradient-to-br from-white to-gray-50 max-w-md mx-auto rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-8 relative border border-gray-100 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,254,1,0.08),transparent_70%)]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-gray-800 rounded-xl flex items-center justify-center shadow-xl"
          >
            <Trophy className="w-6 h-6 text-[#DBFE01]" />
          </motion.div>
          <div>
            <div className="text-sm font-bold text-gray-900">8–12 Week Growth Sprint</div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Shopify Growth Roadmap</div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 relative">
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 via-emerald-300 to-amber-300"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.15, duration: 0.4 }}
              className="flex gap-4 relative"
            >
              <div className="flex flex-col items-center pt-1">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.15, type: 'spring', stiffness: 300 }}
                  className={`w-12 h-12 ${phase.bg} rounded-full flex items-center justify-center relative z-20 shadow-lg border-2 border-${phase.color}-200`}
                >
                  <phase.icon className={`w-6 h-6 ${phase.text}`} />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.15 }}
                className="pb-2 pt-1.5 flex-1"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold text-gray-900 text-sm">{phase.label}</span>
                  <span className={`text-[10px] font-bold ${phase.text} uppercase tracking-wider`}>{phase.desc}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${55 + idx * 12}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: phase.grad }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 pt-6 border-t border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Ready to Grow?</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#1a1a1a] text-sm font-bold">→</motion.span>
          </div>
          <div className="text-[11px] text-gray-600 leading-relaxed">Book a 30-minute roadmap call to get your personalized Shopify growth plan.</div>
        </motion.div>
      </div>

      {/* Stamp */}
      <motion.div
        initial={{ scale: 1.5, opacity: 0, rotate: -25 }}
        whileInView={{ scale: 1, opacity: 1, rotate: -15 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        className="absolute top-6 right-6 border-2 border-[#DBFE01] text-[#1a1a1a] text-[9px] font-black px-3 py-1.5 rounded uppercase tracking-widest bg-[#DBFE01]/25 backdrop-blur-sm shadow-lg"
      >
        Profitable
      </motion.div>
    </motion.div>
  );
}