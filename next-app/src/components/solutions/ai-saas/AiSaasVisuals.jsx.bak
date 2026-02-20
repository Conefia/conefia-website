import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Database, Code2, BrainCircuit, 
  Terminal, ShieldCheck, Zap, LineChart, 
  CheckCircle2, XCircle, ArrowRight, Layers,
  GitBranch, Lock, Rocket, MessageSquare, Users
} from 'lucide-react';

// Enhanced Hero Visual: Cyberpunk/High-Tech Architecture
export const HeroVisual = () => {
  return (
    <div className="bg-[#0B1020] border border-white/10 rounded-2xl p-6 w-full relative overflow-hidden font-mono shadow-2xl group select-none">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DBFE01]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px]" />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-3">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
           </div>
           <div className="h-4 w-px bg-white/10 mx-1" />
           <span className="text-[10px] text-[#DBFE01] font-bold tracking-widest uppercase opacity-80">MVP_CORE_ARCH.v1</span>
        </div>
        <div className="flex items-center gap-2 bg-[#DBFE01]/5 border border-[#DBFE01]/20 px-2 py-1 rounded-md">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] animate-pulse" />
            <span className="text-[9px] font-bold text-[#DBFE01] tracking-wider uppercase">System Online</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Step 1: Ingest */}
        <div className="flex items-center gap-5 relative z-10">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Database className="w-5 h-5 text-blue-400 relative z-10" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[10px] font-bold text-blue-400 tracking-wider">01. INGEST CONTEXT</span>
                    <span className="text-[9px] text-blue-400/60 font-medium">Processing Stream...</span>
                </div>
                <div className="h-1 bg-blue-900/30 rounded-full overflow-hidden w-full">
                    <motion.div 
                        animate={{ x: ["-100%", "100%"] }} 
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
                        className="w-1/2 h-full bg-blue-500 blur-[1px]" 
                    />
                </div>
            </div>
        </div>

        {/* Connecting Line */}
        <div className="absolute left-[29px] top-16 bottom-16 w-px bg-white/5 -z-10" />

        {/* Step 2: Agent Logic (Centerpiece) */}
        <div className="flex items-center gap-5 ml-4 relative z-10">
            <div className="w-14 h-14 bg-[#DBFE01]/10 border border-[#DBFE01]/40 rounded-xl flex items-center justify-center relative shadow-[0_0_25px_rgba(219,254,1,0.15)] backdrop-blur-sm">
                <BrainCircuit className="w-7 h-7 text-[#DBFE01]" />
                <div className="absolute -inset-2 border border-[#DBFE01]/10 rounded-2xl animate-pulse" />
            </div>
            <div className="flex-1 bg-[#DBFE01]/5 border border-[#DBFE01]/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <Bot className="w-3 h-3 text-[#DBFE01]" />
                        <span className="text-[10px] font-bold text-white tracking-wide">AI AGENT LAYER</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {['RAG Retrieval', 'Function Calls', 'Guardrails'].map((tag, i) => (
                        <span key={i} className="text-[9px] font-semibold text-[#DBFE01]/90 bg-[#DBFE01]/10 px-1.5 py-0.5 rounded border border-[#DBFE01]/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Step 3: Execute */}
        <div className="flex items-center gap-5 relative z-10">
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center relative shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <Terminal className="w-5 h-5 text-purple-400 relative z-10" />
            </div>
            <div className="flex-1">
                 <div className="text-[10px] font-bold text-purple-400 mb-1.5 tracking-wider">03. EXECUTE ACTION</div>
                 <div className="text-[10px] text-white/70 font-mono bg-[#050810] px-3 py-2 rounded border border-white/5 flex items-center gap-2 shadow-inner">
                    <span className="text-[#DBFE01]">{">"}</span>
                    <span className="truncate">response_payload_delivered</span>
                    <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-3 bg-[#DBFE01]" />
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Metrics: Punchy Gradient Cards
export const MetricsVisual = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { val: "8–12", label: "Weeks to Ship", sub: "Pilot-Ready", icon: Rocket, color: "text-blue-500", bg: "bg-gradient-to-br from-blue-50 to-white", border: "border-blue-100" },
      { val: "Active", label: "First Pilots", sub: "Customers Testing", icon: Users, color: "text-[#1a1a1a]", bg: "bg-[#DBFE01] shadow-[0_0_20px_rgba(219,254,1,0.3)]", border: "border-[#DBFE01]" },
      { val: "Locked", label: "Scope", sub: "No Drift", icon: Lock, color: "text-purple-500", bg: "bg-gradient-to-br from-purple-50 to-white", border: "border-purple-100" },
      { val: "+40%", label: "Activation", sub: "User Aha!", icon: Zap, color: "text-amber-500", bg: "bg-gradient-to-br from-amber-50 to-white", border: "border-amber-100" }
    ].map((m, i) => (
      <motion.div 
        key={i}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`p-5 rounded-2xl border ${m.border} shadow-sm ${m.bg} relative overflow-hidden group`}
      >
        <div className={`mb-3 ${m.bg === 'bg-[#DBFE01] shadow-[0_0_20px_rgba(219,254,1,0.3)]' ? 'text-[#1a1a1a]' : m.color}`}>
          <m.icon className="w-6 h-6" />
        </div>
        <div className={`text-3xl font-extrabold mb-1 tracking-tight ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]' : 'text-gray-900'}`}>
            {m.val}
        </div>
        <div className={`text-sm font-bold ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]/80' : 'text-gray-900'}`}>
            {m.label}
        </div>
        <div className={`text-xs mt-1 ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]/60' : 'text-gray-500'}`}>
            {m.sub}
        </div>
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
      </motion.div>
    ))}
  </div>
);

// Enhanced Problem: Stronger Contrast
export const ProblemVisual = () => (
  <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl shadow-gray-200/50 relative overflow-hidden">
    <div className="space-y-10 relative z-10">
        
      {/* Bad Timeline */}
      <div className="opacity-90">
        <div className="flex justify-between text-xs font-bold text-red-500 mb-3 uppercase tracking-wider flex items-center">
           <div className="flex items-center gap-2"><XCircle className="w-4 h-4" /> The "Creep" Timeline</div>
           <span>No Launch</span>
        </div>
        <div className="h-14 bg-red-50 rounded-xl border border-red-100 relative overflow-hidden flex items-center shadow-inner">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.05)_10px,rgba(239,68,68,0.05)_20px)]" />
            <motion.div 
                initial={{ width: "20%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="h-1 w-full absolute bottom-0 bg-red-200" 
            />
            {/* Drifting scope blocks */}
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="px-3 py-1 bg-white border border-red-200 rounded text-[10px] font-bold text-red-700 ml-3 shadow-sm z-10">Scope Drift</motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="px-3 py-1 bg-white border border-red-200 rounded text-[10px] font-bold text-red-700 ml-3 shadow-sm z-10">Rework</motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="px-3 py-1 bg-white border border-red-200 rounded text-[10px] font-bold text-red-700 ml-3 shadow-sm z-10">Delay</motion.div>
        </div>
      </div>

      {/* Good Timeline */}
      <div>
        <div className="flex justify-between text-xs font-bold text-emerald-600 mb-3 uppercase tracking-wider flex items-center">
           <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> The Locked Sprint</div>
           <span>Launch Week 10</span>
        </div>
        <div className="h-14 bg-emerald-50 rounded-xl border border-emerald-100 relative overflow-hidden flex items-center px-2 gap-3 shadow-[0_4px_15px_rgba(16,185,129,0.1)]">
            <div className="flex-1 h-2.5 bg-emerald-200/50 rounded-full overflow-hidden relative">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                />
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200 border-2 border-white">
                <Rocket className="w-5 h-5 fill-white" />
            </div>
        </div>
      </div>

    </div>
  </div>
);

// Enhanced Solution: Clean Checklist + Dark Funnel
export const SolutionVisual = () => (
  <div className="grid gap-6">
    {/* Checklist Card */}
    <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6"
    >
        <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-[#DBFE01]/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#DBFE01] fill-[#1a1a1a]" />
            </div>
            <div>
                <div className="font-bold text-[#1a1a1a] text-sm">MVP Scope Lock</div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Features Confirmed</div>
            </div>
        </div>
        <div className="space-y-3">
            {[
                { label: "Core AI Functionality", status: "MUST-HAVE" },
                { label: "User Onboarding Flow", status: "MUST-HAVE" },
                { label: "Social Interactions", status: "CUT" },
                { label: "Complex Animations", status: "CUT" }
            ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm group">
                    <span className={`font-medium ${item.status === 'CUT' ? 'text-gray-400 line-through decoration-gray-300' : 'text-gray-700'}`}>{item.label}</span>
                    <span className={`text-[9px] font-bold px-2 py-1 rounded border ${
                        item.status === 'MUST-HAVE' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-gray-50 text-gray-400 border-gray-100'
                    }`}>
                        {item.status}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>

    {/* Pilot Funnel */}
    <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-6 opacity-5">
            <LineChart className="w-24 h-24" />
        </div>
        <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
                <div className="text-xs font-bold text-[#DBFE01] uppercase tracking-widest">Pilot Funnel</div>
                <div className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-bold border border-white/5">LIVE DATA</div>
            </div>
            <div className="space-y-4">
                <div className="group">
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>Demo Booked</span>
                        <span className="text-white font-bold">100%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-white/40 rounded-full" />
                    </div>
                </div>
                <div className="group">
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>Pilot Trial</span>
                        <span className="text-white font-bold">65%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[65%] h-full bg-[#DBFE01]/60 rounded-full group-hover:bg-[#DBFE01]/80 transition-colors" />
                    </div>
                </div>
                <div className="group">
                    <div className="flex justify-between text-xs text-[#DBFE01] font-bold mb-1.5">
                        <span>Paid Contract</span>
                        <span>24%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[24%] h-full bg-[#DBFE01] rounded-full shadow-[0_0_15px_#DBFE01]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

// Enhanced One Pager: Premium Document
export const OnePagerVisual = () => (
  <motion.div 
    whileHover={{ rotate: -1, scale: 1.02 }}
    className="bg-white w-64 mx-auto rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-6 relative border border-gray-100"
  >
    {/* Doc Header */}
    <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
        <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center shadow-lg">
            <Bot className="w-5 h-5 text-[#DBFE01]" />
        </div>
        <div className="text-left">
            <div className="text-xs font-bold text-gray-900 uppercase tracking-wide">MVP Roadmap</div>
            <div className="text-[9px] text-gray-400 font-medium">Prepared for you</div>
        </div>
    </div>
    
    {/* Doc Content (Skeleton) */}
    <div className="space-y-2.5">
        <div className="h-1.5 bg-gray-100 rounded-full w-full" />
        <div className="h-1.5 bg-gray-100 rounded-full w-5/6" />
        <div className="h-1.5 bg-gray-100 rounded-full w-4/6" />
    </div>
    
    <div className="mt-6 flex gap-2">
        <div className="h-12 flex-1 bg-gray-50 rounded-lg border border-gray-100" />
        <div className="h-12 flex-1 bg-gray-50 rounded-lg border border-gray-100" />
    </div>
    
    {/* Floating Badge */}
    <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-[#DBFE01] text-[#1a1a1a] font-bold px-5 py-2 rounded-full shadow-[0_8px_20px_rgba(219,254,1,0.4)] text-xs border-2 border-white tracking-wide"
        >
            Ready in 24h
        </motion.div>
    </div>
  </motion.div>
);