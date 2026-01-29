import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Database, Code2, BrainCircuit, 
  Terminal, ShieldCheck, Zap, LineChart, 
  CheckCircle2, XCircle, ArrowRight, Layers,
  GitBranch, Lock, Rocket, MessageSquare
} from 'lucide-react';

// Hero Visual: AI Architecture Diagram
export const HeroVisual = () => {
  return (
    <div className="bg-[#0B1020] border border-white/10 rounded-2xl p-6 w-full relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
      
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-white/40 ml-2">mvp_architecture.v1</span>
        </div>
        <div className="text-[10px] text-[#DBFE01] bg-[#DBFE01]/10 px-2 py-1 rounded border border-[#DBFE01]/20">
          STATUS: PILOT_READY
        </div>
      </div>

      <div className="relative z-10 space-y-4">
        {/* Layer 1: Data Source */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 group"
        >
          <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
            <Database className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-blue-400 font-bold mb-0.5">01. CONTEXT</div>
            <div className="h-2 bg-white/10 rounded-full w-24 overflow-hidden">
               <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-blue-500/50" />
            </div>
          </div>
        </motion.div>

        {/* Connector */}
        <div className="h-6 ml-6 border-l border-white/10 border-dashed" />

        {/* Layer 2: LLM + Agent */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 group"
        >
          <div className="w-12 h-12 bg-[#DBFE01]/10 border border-[#DBFE01]/30 rounded-lg flex items-center justify-center text-[#DBFE01] group-hover:bg-[#DBFE01]/20 transition-colors shadow-[0_0_15px_rgba(219,254,1,0.1)]">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div className="flex-1 border border-[#DBFE01]/20 bg-[#DBFE01]/5 rounded p-2 relative">
             <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B1020] border-t border-r border-[#DBFE01]/30 rotate-45" />
             <div className="flex gap-2 mb-1">
                <span className="text-[10px] text-[#DBFE01] bg-[#DBFE01]/10 px-1 rounded">RAG</span>
                <span className="text-[10px] text-[#DBFE01] bg-[#DBFE01]/10 px-1 rounded">Functions</span>
             </div>
             <div className="h-1.5 bg-white/10 rounded-full w-full" />
          </div>
        </motion.div>

        {/* Connector */}
        <div className="h-6 ml-6 border-l border-white/10 border-dashed" />

        {/* Layer 3: Output */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 group"
        >
          <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="flex-1 flex items-center gap-3">
             <div className="text-xs text-white/60 font-mono">
                {">"} generating_response...
             </div>
             <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-[#DBFE01]" 
             />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Metrics Visual: 4 Tiles
export const MetricsVisual = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { val: "8–12", label: "Weeks to Ship", icon: Rocket, color: "text-blue-500", bg: "bg-blue-50" },
      { val: "Active", label: "First Pilots", icon: Users, color: "text-[#DBFE01]", bg: "bg-[#DBFE01]/10" },
      { val: "Locked", label: "Scope (Wk 3)", icon: Lock, color: "text-purple-500", bg: "bg-purple-50" },
      { val: "+40%", label: "Activation", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" }
    ].map((m, i) => (
      <motion.div 
        key={i}
        whileHover={{ y: -4 }}
        className={`p-4 rounded-xl border border-gray-100 shadow-sm ${m.bg === 'bg-[#DBFE01]/10' ? 'bg-[#0B1020] border-[#DBFE01]/20' : 'bg-white'}`}
      >
        <div className={`mb-2 ${m.color}`}>
          <m.icon className="w-5 h-5" />
        </div>
        <div className={`text-2xl font-bold mb-1 ${m.bg === 'bg-[#DBFE01]/10' ? 'text-white' : 'text-gray-900'}`}>
            {m.val}
        </div>
        <div className={`text-xs font-medium ${m.bg === 'bg-[#DBFE01]/10' ? 'text-white/60' : 'text-gray-500'}`}>
            {m.label}
        </div>
      </motion.div>
    ))}
  </div>
);

// Problem Visual: Scope Creep vs Scope Lock
export const ProblemVisual = () => (
  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm relative overflow-hidden">
    <div className="space-y-8 relative z-10">
        
      {/* Bad Timeline */}
      <div>
        <div className="flex justify-between text-xs font-bold text-red-500 mb-2 uppercase tracking-wide">
           <span>The "Creep" Timeline</span>
           <span>Week 12 (No Ship)</span>
        </div>
        <div className="h-12 bg-red-50 rounded-lg border border-red-100 relative overflow-hidden flex items-center">
            {/* Drifting scope blocks */}
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="h-8 w-16 bg-red-200/50 rounded ml-2 border border-red-200" 
            />
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="h-8 w-24 bg-red-300/50 rounded ml-2 border border-red-300 flex items-center justify-center text-[9px] text-red-800 font-bold"
            >
                New Feature?
            </motion.div>
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-8 w-32 bg-red-400/50 rounded ml-2 border border-red-400 flex items-center justify-center text-[9px] text-red-900 font-bold"
            >
                Rework LLM
            </motion.div>
        </div>
      </div>

      {/* Good Timeline */}
      <div>
        <div className="flex justify-between text-xs font-bold text-emerald-600 mb-2 uppercase tracking-wide">
           <span>The "Locked" Sprint</span>
           <span>Week 10 (Launch)</span>
        </div>
        <div className="h-12 bg-emerald-50 rounded-lg border border-emerald-100 relative overflow-hidden flex items-center px-2 gap-2">
            <div className="flex-1 h-2 bg-emerald-200 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-emerald-500" 
                />
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Rocket className="w-4 h-4" />
            </div>
        </div>
      </div>

    </div>
    
    <div className="mt-6 text-center text-sm text-gray-500 italic">
        "We lock scope in Week 2. No drift. Just shipping."
    </div>
  </div>
);

// Solution Visual: MVP Checklist & Funnel
export const SolutionVisual = () => (
  <div className="grid gap-4">
    {/* Checklist Card */}
    <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-5"
    >
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <CheckCircle2 className="w-5 h-5 text-[#DBFE01] fill-[#1a1a1a]" />
            <span className="font-bold text-[#1a1a1a]">MVP Scope Lock</span>
        </div>
        <div className="space-y-2">
            {[
                { label: "Core AI Functionality", status: "Must-Have" },
                { label: "User Onboarding", status: "Must-Have" },
                { label: "Fancy Animations", status: "Cut (Later)" },
                { label: "Social Login", status: "Must-Have" }
            ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        item.status === 'Must-Have' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-400 line-through'
                    }`}>
                        {item.status}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>

    {/* Pilot Funnel */}
    <div className="bg-[#1a1a1a] rounded-xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-20">
            <LineChart className="w-16 h-16" />
        </div>
        <div className="relative z-10">
            <div className="text-xs font-bold text-[#DBFE01] mb-4 uppercase">Pilot Funnel</div>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-16 text-right text-xs text-gray-400">Demo</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                        <div className="w-full h-full bg-white/40 rounded-full" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 text-right text-xs text-gray-400">Trial</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                        <div className="w-2/3 h-full bg-[#DBFE01]/60 rounded-full" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 text-right text-xs font-bold text-white">Paid</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                        <div className="w-1/3 h-full bg-[#DBFE01] rounded-full shadow-[0_0_10px_#DBFE01]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

// Final CTA Visual: One Pager
export const OnePagerVisual = () => (
  <motion.div 
    whileHover={{ rotate: -2, scale: 1.05 }}
    className="bg-white max-w-xs mx-auto rounded-xl shadow-2xl p-6 relative border border-gray-100"
  >
    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-[#DBFE01]" />
        </div>
        <div>
            <div className="text-sm font-bold text-gray-900">AI MVP Roadmap</div>
            <div className="text-xs text-gray-400">Generated for you</div>
        </div>
    </div>
    <div className="space-y-3 opacity-50 blur-[0.5px]">
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-5/6" />
        <div className="h-2 bg-gray-200 rounded w-4/6" />
    </div>
    <div className="mt-6 space-y-3 opacity-50 blur-[0.5px]">
        <div className="flex gap-2">
            <div className="w-1/2 h-16 bg-gray-100 rounded-lg" />
            <div className="w-1/2 h-16 bg-gray-100 rounded-lg" />
        </div>
    </div>
    
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#DBFE01] text-[#1a1a1a] font-bold px-4 py-2 rounded-full shadow-lg text-sm border-2 border-white">
            Ready in 24h
        </div>
    </div>
  </motion.div>
);