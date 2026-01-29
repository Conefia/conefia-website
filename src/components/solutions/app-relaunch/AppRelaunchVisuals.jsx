import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Smartphone, Download, Star, Users, 
  BarChart, RefreshCw, Search, Activity, CheckCircle2, 
  XCircle, ArrowRight, Layout, Zap, Filter, MousePointerClick,
  SmartphoneNfc, LineChart, Trophy, AlertTriangle, Layers
} from 'lucide-react';

// Hero Visual: Retention Curve + App Store Mock
export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl" />
      
      {/* Retention Graph Card - Background Layer */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 bottom-8 w-80 bg-[#0B1020] border border-white/10 rounded-xl p-4 shadow-2xl z-10"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Retention Curves</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500/50" /><span className="text-[10px] text-gray-500">Before</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#DBFE01]" /><span className="text-[10px] text-gray-500">After</span></div>
          </div>
        </div>
        
        {/* Graph Area */}
        <div className="relative h-32 w-full border-l border-b border-white/10">
           {/* Grid lines */}
           <div className="absolute inset-0 flex flex-col justify-between opacity-10">
              <div className="w-full h-px bg-white" />
              <div className="w-full h-px bg-white" />
              <div className="w-full h-px bg-white" />
           </div>
           
           {/* "Before" Curve (Leaky) */}
           <svg className="absolute inset-0 overflow-visible" preserveAspectRatio="none">
             <motion.path 
               d="M0,0 C20,80 50,110 100,120 L280,125" 
               fill="none" 
               stroke="#EF4444" 
               strokeWidth="2" 
               strokeDasharray="4 4"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1.5 }}
             />
           </svg>

           {/* "After" Curve (Sticky) */}
           <svg className="absolute inset-0 overflow-visible" preserveAspectRatio="none">
             <motion.path 
               d="M0,0 C40,20 100,30 280,40" 
               fill="none" 
               stroke="#DBFE01" 
               strokeWidth="3"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1.5, delay: 0.5 }}
             />
             {/* Highlight Point */}
             <motion.circle cx="280" cy="40" r="4" fill="#DBFE01" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} />
           </svg>
           
           {/* Label D30 */}
           <div className="absolute -bottom-5 right-0 text-[10px] text-gray-500">Day 30</div>
           <div className="absolute -bottom-5 left-0 text-[10px] text-gray-500">Day 1</div>
        </div>
      </motion.div>

      {/* App Store Mock - Foreground Layer */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-4 top-4 w-60 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-20"
      >
        <div className="flex items-center gap-3 mb-4">
           <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg" />
           <div>
              <div className="h-3 w-24 bg-gray-800 rounded mb-1" />
              <div className="h-2 w-16 bg-gray-300 rounded" />
           </div>
           <div className="ml-auto bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full">OPEN</div>
        </div>
        
        <div className="flex justify-between items-center mb-4 px-1">
           <div className="text-center">
              <div className="text-xs font-bold text-gray-400">4.9 ★</div>
              <div className="text-[8px] text-gray-300">Ratings</div>
           </div>
           <div className="w-px h-6 bg-gray-100" />
           <div className="text-center">
              <div className="text-xs font-bold text-gray-400 text-[#DBFE01]! text-blue-500">#1</div>
              <div className="text-[8px] text-gray-300">Chart</div>
           </div>
           <div className="w-px h-6 bg-gray-100" />
           <div className="text-center">
              <div className="text-xs font-bold text-gray-400">4+</div>
              <div className="text-[8px] text-gray-300">Age</div>
           </div>
        </div>

        {/* Screenshots */}
        <div className="flex gap-2 overflow-hidden">
           {[1,2,3].map(i => (
             <div key={i} className="w-20 h-32 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gray-200 opacity-50" />
                {/* Mock UI elements */}
                <div className="absolute top-2 left-2 right-2 h-2 bg-white/50 rounded-full" />
                <div className="absolute top-6 left-2 h-8 w-8 bg-white/50 rounded-full" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-300 to-transparent" />
                {i === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-[#DBFE01] text-[8px] font-bold px-1 rounded text-[#1a1a1a]"
                        >
                            NEW
                        </motion.div>
                    </div>
                )}
             </div>
           ))}
        </div>
      </motion.div>
    </div>
  );
};

// Metrics Visual
export const MetricsVisual = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { val: "+40%", label: "Retention Lift", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
      { val: "+30%", label: "ASO Conversion", icon: Download, color: "text-[#DBFE01]", bg: "bg-[#DBFE01]/10" },
      { val: "6 Wks", label: "Relaunch Sprint", icon: Zap, color: "text-purple-500", bg: "bg-purple-50" },
      { val: "+50%", label: "5★ Reviews", icon: Star, color: "text-amber-500", bg: "bg-amber-50" }
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

// Problem Visual: Leaky Bucket Funnel
export const ProblemVisual = () => (
  <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm relative flex items-center justify-center min-h-[300px]">
      
      <div className="relative w-64">
          {/* Funnel Shape */}
          <div className="relative z-10">
              {/* Stage 1: Install */}
              <div className="h-16 bg-blue-500 rounded-t-lg mx-0 mb-1 flex items-center justify-between px-4 text-white font-bold text-sm shadow-lg">
                  <span>Installs</span>
                  <span>100%</span>
              </div>
              
              {/* Dropoff Indicator */}
              <div className="absolute -right-16 top-4 flex items-center text-red-500 text-xs font-bold animate-pulse">
                  <ArrowRight className="w-4 h-4 mr-1 rotate-45" />
                  -60% Bounce
              </div>

              {/* Stage 2: Activation */}
              <div className="h-16 bg-blue-400 mx-4 mb-1 flex items-center justify-between px-4 text-white font-bold text-sm shadow-lg">
                  <span>Activation</span>
                  <span>40%</span>
              </div>

              {/* Dropoff Indicator */}
              <div className="absolute -left-20 top-20 flex items-center text-red-500 text-xs font-bold animate-pulse">
                  -80% Churn
                  <ArrowRight className="w-4 h-4 ml-1 rotate-[135deg]" />
              </div>

              {/* Stage 3: Repeat (Retention) */}
              <div className="h-16 bg-blue-300 rounded-b-lg mx-8 flex items-center justify-between px-4 text-white/90 font-bold text-sm shadow-lg">
                  <span>Retention</span>
                  <span className="text-red-100">8%</span>
              </div>
          </div>

          {/* Leaks Visuals */}
          <motion.div 
             className="absolute top-6 -right-4 w-2 h-2 bg-blue-500 rounded-full"
             animate={{ y: [0, 50], opacity: [1, 0] }}
             transition={{ repeat: Infinity, duration: 1 }}
          />
          <motion.div 
             className="absolute top-24 -left-4 w-2 h-2 bg-blue-400 rounded-full"
             animate={{ y: [0, 50], opacity: [1, 0] }}
             transition={{ repeat: Infinity, duration: 1.2, delay: 0.5 }}
          />

          <div className="absolute -bottom-10 left-0 right-0 text-center">
              <div className="text-red-500 font-bold text-sm flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  The Leaky Bucket
              </div>
          </div>
      </div>
  </div>
);

// Solution Visual: Relaunch Checklist + ASO Board
export const SolutionVisual = () => (
  <div className="grid gap-4">
    {/* Checklist Card */}
    <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-5"
    >
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <RefreshCw className="w-5 h-5 text-[#DBFE01] fill-[#1a1a1a]" />
            <span className="font-bold text-[#1a1a1a]">Relaunch Checklist</span>
        </div>
        <div className="space-y-3">
            {[
                { label: "Retention Loops Fixed", icon: CheckCircle2, color: "text-green-500" },
                { label: "Crash-Free Rate > 99%", icon: CheckCircle2, color: "text-green-500" },
                { label: "Onboarding Friction Removed", icon: CheckCircle2, color: "text-green-500" },
                { label: "New App Store Screenshots", icon: CheckCircle2, color: "text-green-500" }
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
            ))}
        </div>
    </motion.div>

    {/* ASO Testing Board */}
    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <div className="flex justify-between items-center mb-3">
            <div className="text-xs font-bold text-gray-500 uppercase">ASO A/B Testing</div>
            <div className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">LIVE</div>
        </div>
        <div className="flex gap-4 items-end">
            <div className="flex-1 text-center group cursor-pointer">
                <div className="h-16 bg-white border border-gray-200 rounded-lg mb-2 flex items-center justify-center shadow-sm group-hover:border-blue-300 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg" />
                </div>
                <div className="text-xs text-gray-400">Var A (Current)</div>
                <div className="text-xs font-bold text-gray-600">2.1% CVR</div>
            </div>
            <div className="text-gray-300 font-bold mb-6">VS</div>
            <div className="flex-1 text-center group cursor-pointer">
                <div className="h-16 bg-white border-2 border-[#DBFE01] rounded-lg mb-2 flex items-center justify-center shadow-md relative">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg" />
                    <div className="absolute -top-2 -right-2 bg-[#DBFE01] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                        WINNER
                    </div>
                </div>
                <div className="text-xs text-gray-400">Var B (New)</div>
                <div className="text-xs font-bold text-green-600">+15% CVR</div>
            </div>
        </div>
    </div>
  </div>
);

// One Pager / Relaunch Plan
export const RelaunchPlanVisual = () => (
    <motion.div 
    whileHover={{ rotate: 2, scale: 1.05 }}
    className="bg-white max-w-xs mx-auto rounded-xl shadow-2xl p-6 relative border border-gray-100"
  >
    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 bg-[#DBFE01] rounded-lg flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-[#1a1a1a]" />
        </div>
        <div>
            <div className="text-sm font-bold text-gray-900">App Relaunch Plan</div>
            <div className="text-xs text-gray-400">Strategy Doc</div>
        </div>
    </div>
    
    <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="h-1.5 bg-gray-100 rounded w-20" />
        </div>
        <div className="pl-4 space-y-2">
             <div className="h-1 bg-gray-100 rounded w-full" />
             <div className="h-1 bg-gray-100 rounded w-full" />
             <div className="h-1 bg-gray-100 rounded w-3/4" />
        </div>

        <div className="flex items-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="h-1.5 bg-gray-100 rounded w-16" />
        </div>
        <div className="pl-4 flex gap-2">
             <div className="w-8 h-8 bg-gray-50 rounded border border-gray-100" />
             <div className="w-8 h-8 bg-gray-50 rounded border border-gray-100" />
             <div className="w-8 h-8 bg-gray-50 rounded border border-gray-100" />
        </div>
    </div>
    
    <div className="absolute -right-2 -bottom-2">
        <div className="bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#DBFE01]" />
            Investor Ready
        </div>
    </div>
  </motion.div>
);