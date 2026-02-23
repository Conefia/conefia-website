import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Smartphone, Download, Star, Users, 
  BarChart, RefreshCw, Search, Activity, CheckCircle2, 
  XCircle, ArrowRight, Layout, Zap, Filter, MousePointerClick,
  SmartphoneNfc, LineChart, Trophy, AlertTriangle, Layers, Rocket
} from 'lucide-react';

// Enhanced Hero: 3D App Store + Glowing Retention
export const HeroVisual = () => {
  return (
    <div className="relative w-full min-h-[450px] md:h-[500px] flex items-center justify-center select-none perspective-[1200px] overflow-visible py-10 md:py-0">
      {/* Background Ambience - Glassmorphism like Home Page */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 mx-4 md:mx-0 shadow-2xl">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
      </div>
      
      {/* Container for cards to manage spacing */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-4xl px-4">
      
          {/* Retention Graph Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 5 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[340px] md:w-96 bg-[#0B1020]/80 border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative group md:rotate-y-6 transform-gpu"
          >
            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#DBFE01]/10 rounded-md">
                    <Activity className="w-4 h-4 text-[#DBFE01]" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Retention</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /><span className="text-[10px] text-gray-400 font-medium">Before</span></div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] shadow-[0_0_8px_#DBFE01]" /><span className="text-[10px] text-[#DBFE01] font-medium">After</span></div>
              </div>
            </div>
            
            {/* Graph Area */}
            <div className="relative h-44 w-full">
               <svg className="absolute inset-0 overflow-visible" preserveAspectRatio="none">
                 <defs>
                    <linearGradient id="stickyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(219, 254, 1, 0.15)" />
                        <stop offset="100%" stopColor="rgba(219, 254, 1, 0)" />
                    </linearGradient>
                 </defs>
                 {/* Grid */}
                 <path d="M0,0 H300 M0,44 H300 M0,88 H300 M0,132 H300 M0,176 H300" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                 
                 {/* Before Curve */}
                 <motion.path 
                   d="M0,40 C40,140 100,160 350,170" 
                   fill="none" 
                   stroke="#EF4444" 
                   strokeWidth="2" 
                   strokeDasharray="4 4"
                   strokeOpacity="0.6"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1.5 }}
                   vectorEffect="non-scaling-stroke"
                 />
    
                 {/* After Curve */}
                 <path d="M0,40 C60,60 150,70 350,80 V180 H0 Z" fill="url(#stickyGradient)" />
                 <motion.path 
                   d="M0,40 C60,60 150,70 350,80" 
                   fill="none" 
                   stroke="#DBFE01" 
                   strokeWidth="3"
                   filter="drop-shadow(0 0 4px rgba(219,254,1,0.5))"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   vectorEffect="non-scaling-stroke"
                 />
                 
                 {/* Interactive Point - Adjusted for responsiveness, simplified */}
                 <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                    <circle cx="80%" cy="40%" r="4" fill="#DBFE01" stroke="#0B1020" strokeWidth="2" />
                    <foreignObject x="65%" y="10%" width="100" height="50">
                        <div className="bg-[#DBFE01] text-[#1a1a1a] text-[10px] font-bold px-2 py-1 rounded shadow-lg text-center transform translate-y-2">
                           D30: 42%
                           <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#DBFE01] rotate-45" />
                        </div>
                    </foreignObject>
                 </motion.g>
               </svg>
            </div>
          </motion.div>
    
          {/* App Store Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: -5 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[280px] md:w-72 bg-white rounded-[2.5rem] p-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] border-[6px] border-gray-50/50 z-20 relative overflow-hidden ring-1 ring-black/5 transform-gpu"
          >
             {/* Screen Reflection */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50 pointer-events-none z-30" />
            
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                   <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg flex items-center justify-center text-white ring-4 ring-blue-50">
                      <Zap className="w-7 h-7" />
                   </div>
                   <div className="flex-1">
                      <div className="h-3 w-full bg-gray-900 rounded-lg mb-2" />
                      <div className="h-2 w-2/3 bg-gray-300 rounded-lg" />
                   </div>
                </div>
                
                {/* Stats */}
                <div className="flex justify-between items-center mb-5 px-1">
                   <div className="text-center">
                      <div className="flex items-center justify-center gap-0.5 text-gray-900 font-black text-xs">
                        5.0 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      </div>
                      <div className="text-[9px] text-gray-400 font-bold uppercase">Rate</div>
                   </div>
                   <div className="w-px h-6 bg-gray-100" />
                   <div className="text-center">
                      <div className="text-xs font-black text-blue-600">#1</div>
                      <div className="text-[9px] text-gray-400 font-bold uppercase">Top</div>
                   </div>
                   <div className="w-px h-6 bg-gray-100" />
                   <div className="text-center">
                      <div className="text-xs font-black text-gray-900">4+</div>
                      <div className="text-[9px] text-gray-400 font-bold uppercase">Age</div>
                   </div>
                </div>
    
                {/* CTA */}
                <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-blue-200 hover:scale-[1.02] transition-transform mb-5 text-xs tracking-wide">
                    UPDATE
                </button>
    
                {/* Screenshots Carousel */}
                <div className="flex gap-2 overflow-hidden mask-linear-fade pb-1">
                   {[1,2].map(i => (
                     <div key={i} className="w-24 h-32 bg-gray-50 rounded-xl flex-shrink-0 relative overflow-hidden border border-gray-100 shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
                        <div className="absolute top-3 left-2 right-2 h-1.5 bg-gray-200 rounded-full" />
                        <div className="absolute top-6 left-2 w-6 h-6 bg-blue-100 rounded-full" />
                        <div className="absolute top-6 right-2 bottom-8 left-10 space-y-1.5">
                            <div className="h-1.5 bg-gray-100 rounded w-full" />
                            <div className="h-1.5 bg-gray-100 rounded w-2/3" />
                        </div>
                        {i === 1 && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="bg-[#DBFE01] text-[#1a1a1a] text-[8px] font-extrabold px-1.5 py-0.5 rounded rotate-[-10deg] shadow-lg">
                                    WINNER
                                </div>
                            </div>
                        )}
                     </div>
                   ))}
                </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

// Enhanced Metrics: Glassmorphism + Gradients
export const MetricsVisual = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { val: "+40%", label: "Retention Lift", sub: "Day 30", icon: Users, color: "text-blue-600", bg: "bg-gradient-to-b from-blue-50/80 to-white", border: "border-blue-100" },
      { val: "+30%", label: "ASO Conversion", sub: "Install Rate", icon: Download, color: "text-[#1a1a1a]", bg: "bg-[#DBFE01] shadow-[0_0_20px_rgba(219,254,1,0.3)]", border: "border-[#DBFE01]" },
      { val: "6 Wks", label: "Sprint Speed", sub: "Relaunch Ready", icon: Zap, color: "text-purple-600", bg: "bg-gradient-to-b from-purple-50/80 to-white", border: "border-purple-100" },
      { val: "4.8★", label: "Avg Rating", sub: "Was 3.2★", icon: Star, color: "text-amber-500", bg: "bg-gradient-to-b from-amber-50/80 to-white", border: "border-amber-100" }
    ].map((m, i) => (
      <motion.div 
        key={i}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`p-5 rounded-2xl border ${m.border} shadow-sm ${m.bg} relative overflow-hidden group backdrop-blur-sm`}
      >
        <div className={`mb-3 ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]' : m.color}`}>
          <m.icon className="w-6 h-6" />
        </div>
        <div className={`text-3xl font-extrabold mb-1 tracking-tight ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]' : 'text-gray-900'}`}>
            {m.val}
        </div>
        <div className={`text-sm font-bold ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]/80' : 'text-gray-900'}`}>
            {m.label}
        </div>
        <div className={`text-xs mt-1 font-medium ${m.bg.includes('bg-[#DBFE01]') ? 'text-[#1a1a1a]/60' : 'text-gray-400'}`}>
            {m.sub}
        </div>
      </motion.div>
    ))}
  </div>
);

// Enhanced Problem: Dark Mode Leaky Bucket
export const ProblemVisual = () => (
  <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl relative flex items-center justify-center min-h-[360px] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="relative w-80 z-10">
          <div className="absolute -top-12 left-0 right-0 text-center mb-8">
             <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
                <AlertTriangle className="w-3 h-3" />
                The Leaky Bucket Effect
             </div>
          </div>

          {/* Funnel Container */}
          <div className="relative">
              {/* Stage 1: Install */}
              <motion.div 
                initial={{ width: "100%" }}
                className="h-14 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg mx-0 mb-2 flex items-center justify-between px-5 text-white shadow-lg relative z-30"
              >
                  <span className="font-bold text-sm tracking-wide">1,000 Installs</span>
                  <span className="font-mono text-xs opacity-80">100%</span>
              </motion.div>
              
              {/* Leak 1 */}
              <div className="absolute -right-4 top-4 transform translate-x-full flex items-center">
                  <motion.div 
                    animate={{ x: [0, 10, 0], opacity: [1, 0.5, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center"
                  >
                     <div className="text-red-500 font-bold text-xs mb-1">-60%</div>
                     <div className="h-px w-8 bg-red-200" />
                     <div className="text-[10px] text-red-400 font-medium">Bounce</div>
                  </motion.div>
              </div>

              {/* Stage 2: Activation */}
              <motion.div 
                className="h-14 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg mx-6 mb-2 flex items-center justify-between px-5 text-white shadow-lg relative z-20"
              >
                  <span className="font-bold text-sm tracking-wide">400 Activated</span>
                  <span className="font-mono text-xs opacity-80">40%</span>
              </motion.div>

              {/* Leak 2 */}
              <div className="absolute -left-4 top-20 transform -translate-x-full flex items-center">
                   <motion.div 
                    animate={{ x: [0, -10, 0], opacity: [1, 0.5, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="flex flex-col items-center"
                  >
                     <div className="text-red-500 font-bold text-xs mb-1">-80%</div>
                     <div className="h-px w-8 bg-red-200" />
                     <div className="text-[10px] text-red-400 font-medium">Churn</div>
                  </motion.div>
              </div>

              {/* Stage 3: Retention */}
              <motion.div 
                className="h-14 bg-[#1a1a1a] rounded-lg mx-12 flex items-center justify-between px-5 text-white shadow-lg border border-gray-700 relative z-10"
              >
                  <span className="font-bold text-sm text-[#DBFE01]">80 Retained</span>
                  <span className="font-mono text-xs text-[#DBFE01]">8%</span>
              </motion.div>
          </div>

          {/* Drip Animation */}
          <div className="absolute top-14 right-10">
             <motion.div 
               className="w-1.5 h-1.5 bg-blue-500 rounded-full"
               animate={{ y: [0, 60], opacity: [1, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
             />
          </div>
          <div className="absolute top-32 left-12">
             <motion.div 
               className="w-1.5 h-1.5 bg-blue-400 rounded-full"
               animate={{ y: [0, 60], opacity: [1, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, delay: 0.7, ease: "easeIn" }}
             />
          </div>
      </div>
  </div>
);

// Enhanced Solution: Clean & Professional
export const SolutionVisual = () => (
  <div className="grid gap-6">
    {/* Checklist Card */}
    <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-6"
    >
        <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-blue-600" />
            </div>
            <div>
                <div className="font-bold text-gray-900 text-sm">Relaunch Sprint</div>
                <div className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">6-Week Plan</div>
            </div>
        </div>
        <div className="space-y-3">
            {[
                { label: "Retention Loops Fixed", icon: Layers, color: "text-blue-500", bg: "bg-blue-50" },
                { label: "Crash-Free Rate > 99%", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50" },
                { label: "Onboarding Friction Removed", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                { label: "ASO Assets Refreshed", icon: Download, color: "text-purple-500", bg: "bg-purple-50" }
            ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-default">
                    <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-md ${item.bg} flex items-center justify-center`}>
                            <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-gray-200 group-hover:text-green-500 transition-colors" />
                </div>
            ))}
        </div>
    </motion.div>

    {/* ASO Testing Board */}
    <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,254,1,0.1),transparent_50%)]" />
        
        <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <SmartphoneNfc className="w-4 h-4 text-[#DBFE01]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">ASO Experiments</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] text-green-500 font-bold uppercase">Active</span>
                </div>
            </div>
            
            <div className="flex gap-4 items-end">
                {/* Variant A */}
                <div className="flex-1 text-center opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-24 bg-white/5 border border-white/10 rounded-xl mb-3 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/10 rounded-lg" />
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1">Original</div>
                    <div className="text-xs font-bold text-white">2.1% CVR</div>
                </div>

                <div className="pb-8 text-gray-600 font-black text-sm">VS</div>

                {/* Variant B (Winner) */}
                <div className="flex-1 text-center relative">
                    <motion.div 
                        initial={{ y: 5 }} animate={{ y: 0 }} 
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#DBFE01] text-[#1a1a1a] text-[9px] font-extrabold px-2 py-0.5 rounded shadow-lg shadow-[#DBFE01]/20 z-20"
                    >
                        WINNER
                    </motion.div>
                    <div className="h-24 bg-gradient-to-b from-[#DBFE01]/20 to-[#DBFE01]/5 border border-[#DBFE01]/30 rounded-xl mb-3 flex items-center justify-center relative shadow-[0_0_20px_rgba(219,254,1,0.1)]">
                        <div className="w-10 h-10 bg-[#DBFE01] rounded-lg shadow-lg" />
                    </div>
                    <div className="text-[10px] text-[#DBFE01] mb-1 font-bold">New Variant</div>
                    <div className="text-xs font-bold text-white">+15% CVR</div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

// Enhanced One Pager
export const RelaunchPlanVisual = () => (
    <motion.div 
    whileHover={{ rotate: 1, scale: 1.02 }}
    className="bg-white max-w-xs mx-auto rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-8 relative border border-gray-100"
  >
    <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
        <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center shadow-xl">
            <Trophy className="w-6 h-6 text-[#DBFE01]" />
        </div>
        <div>
            <div className="text-sm font-bold text-gray-900">Relaunch Plan</div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Confidential Strategy</div>
        </div>
    </div>
    
    <div className="space-y-4">
        {/* Phase 1 */}
        <div className="flex gap-3">
            <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <div className="w-0.5 h-full bg-gray-100 my-1" />
            </div>
            <div className="pb-4">
                <div className="h-2 bg-gray-200 rounded w-24 mb-2" />
                <div className="h-1.5 bg-gray-100 rounded w-40" />
            </div>
        </div>
        
        {/* Phase 2 */}
        <div className="flex gap-3">
            <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <div className="w-0.5 h-full bg-gray-100 my-1" />
            </div>
            <div className="pb-4">
                <div className="h-2 bg-gray-200 rounded w-20 mb-2" />
                <div className="h-1.5 bg-gray-100 rounded w-36" />
            </div>
        </div>

        {/* Phase 3 */}
        <div className="flex gap-3">
            <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#DBFE01] shadow-[0_0_8px_#DBFE01]" />
            </div>
            <div>
                <div className="h-2 bg-gray-800 rounded w-28 mb-2" />
                <div className="h-1.5 bg-gray-100 rounded w-32" />
            </div>
        </div>
    </div>
    
    {/* Stamp */}
    <motion.div 
        initial={{ scale: 1.5, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: -15 }}
        className="absolute bottom-6 right-6 border-2 border-[#DBFE01] text-[#1a1a1a] text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest bg-[#DBFE01]/20 backdrop-blur-sm"
    >
        Approved
    </motion.div>
  </motion.div>
);