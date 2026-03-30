import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag, TrendingUp, Mail, Zap, BarChart3,
  Search, Smartphone, CheckCircle2, ArrowRight, RefreshCw
} from 'lucide-react';

const LAYERS = [
  { icon: ShoppingBag, label: "Storefront & CRO", color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/30", pulse: "bg-blue-500" },
  { icon: Zap, label: "Paid Creative", color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/30", pulse: "bg-purple-500" },
  { icon: Mail, label: "Email + SMS", color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30", pulse: "bg-amber-500" },
  { icon: Search, label: "SEO & Content", color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30", pulse: "bg-emerald-500" },
  { icon: BarChart3, label: "Profit Tracking", color: "text-[#DBFE01]", bg: "bg-[#DBFE01]/15", border: "border-[#DBFE01]/30", pulse: "bg-[#DBFE01]" },
];

const METRICS = [
  { label: "CVR", val: "↑ 32%", color: "text-emerald-400" },
  { label: "CAC", val: "↓ 18%", color: "text-blue-400" },
  { label: "LTV", val: "↑ 45%", color: "text-[#DBFE01]" },
];

export default function ShopifySolutionVisual() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveLayer(p => (p + 1) % LAYERS.length);
      setTick(p => p + 1);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4 select-none">
      {/* System Layers */}
      <div className="bg-[#0B1020] rounded-2xl border border-white/10 p-5 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#DBFE01]/5 rounded-full blur-[60px]" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase ml-2">Growth System</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#DBFE01]/10 border border-[#DBFE01]/20 px-2 py-1 rounded-md">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] animate-pulse" />
            <span className="text-[9px] font-bold text-[#DBFE01] tracking-wider">All Systems Go</span>
          </div>
        </div>

        {/* Layer Stack */}
        <div className="space-y-2 relative z-10">
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            const isActive = i === activeLayer;
            return (
              <motion.div
                key={i}
                animate={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  borderColor: isActive ? layer.border.replace('border-', '') : 'rgba(255,255,255,0.06)',
                }}
                transition={{ duration: 0.4 }}
                className={`flex items-center gap-3 p-3 rounded-xl border ${isActive ? layer.border : 'border-white/5'} transition-all`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? layer.bg : 'bg-white/5'} transition-all`}>
                  <Icon className={`w-4 h-4 ${isActive ? layer.color : 'text-white/30'} transition-colors`} />
                </div>
                <span className={`text-sm font-semibold flex-1 transition-colors ${isActive ? 'text-white' : 'text-white/40'}`}>
                  {layer.label}
                </span>
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key="active-dot"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className={`w-2 h-2 rounded-full ${layer.pulse}`}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting arrow animation */}
        <div className="mt-4 flex items-center justify-center gap-1 relative z-10">
          {[0,1,2,3,4].map(i => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#DBFE01]/60"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
            />
          ))}
          <span className="text-[10px] text-white/30 ml-2 font-mono tracking-wider">connected</span>
        </div>
      </div>

      {/* Live Metrics Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Profit Dashboard</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Live</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-center"
              animate={{ y: tick % 3 === i ? [-2, 0] : 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className={`text-lg font-extrabold ${m.color}`}>{m.val}</div>
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div className="mt-4 flex items-end gap-1.5 h-10">
          {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-[#DBFE01] rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              style={{ minHeight: 4 }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {['W1','W2','W3','W4','W5','W6','W7'].map(w => (
            <span key={w} className="text-[8px] text-gray-300 font-bold">{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}