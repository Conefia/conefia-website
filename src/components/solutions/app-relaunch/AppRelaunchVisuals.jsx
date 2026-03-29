import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Smartphone, Download, Star, Users, 
  BarChart, RefreshCw, Search, Activity, CheckCircle2, 
  XCircle, ArrowRight, Layout, Zap, Filter, MousePointerClick,
  SmartphoneNfc, LineChart, Trophy, AlertTriangle, Layers, Rocket, Code2
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)' }}
        className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-6"
    >
        <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
            >
                <RefreshCw className="w-5 h-5 text-blue-600" />
            </motion.div>
            <div>
                <div className="font-bold text-gray-900 text-sm">Relaunch Sprint</div>
                <div className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">8-12 Weeks Plan</div>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className="text-[10px] text-green-500 font-bold">Live</span>
            </div>
        </div>
        <div className="space-y-2.5">
            {[
                { label: "Retention Loops Fixed", icon: Layers, color: "text-blue-500", bg: "bg-blue-50", progress: 100 },
                { label: "Crash-Free Rate > 99%", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50", progress: 100 },
                { label: "Onboarding Friction Removed", icon: Zap, color: "text-amber-500", bg: "bg-amber-50", progress: 80 },
                { label: "ASO Assets Refreshed", icon: Download, color: "text-purple-500", bg: "bg-purple-50", progress: 60 }
            ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="p-2.5 hover:bg-gray-50 rounded-xl transition-colors group cursor-default"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                        <div className={`w-6 h-6 rounded-md ${item.bg} flex items-center justify-center`}>
                            <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                    </div>
                    {item.progress === 100
                      ? <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 300, delay: i * 0.1 + 0.5 }}
                        ><CheckCircle2 className="w-4 h-4 text-green-500" /></motion.div>
                      : <span className="text-[10px] font-bold text-gray-400">{item.progress}%</span>
                    }
                  </div>
                  <div className="ml-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        item.progress === 100 ? 'bg-green-400' :
                        item.progress >= 80 ? 'bg-amber-400' : 'bg-blue-400'
                      }`}
                    />
                  </div>
                </motion.div>
            ))}
        </div>
    </motion.div>

    {/* ASO A/B Test Board */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="bg-[#0B1020] rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group"
    >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,254,1,0.15),transparent_60%)]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#DBFE01]/40"
            style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          />
        ))}
        
        <div className="relative z-10">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                    <SmartphoneNfc className="w-4 h-4 text-[#DBFE01]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">ASO Experiment</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <span className="text-[9px] text-green-500 font-bold uppercase">Active</span>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Variant A - Original */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 bg-gray-600 rounded-xl flex-shrink-0" />
                    <div className="space-y-1">
                      <div className="h-1.5 bg-white/20 rounded w-16" />
                      <div className="h-1.5 bg-white/10 rounded w-12" />
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3].map(s => <Star key={s} className="w-2.5 h-2.5 fill-gray-500 text-gray-500" />)}
                    {[4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-gray-700 text-gray-700" />)}
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3].map(s => (
                      <div key={s} className="flex-1 h-10 bg-white/5 rounded-md border border-white/5" />
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 mb-0.5">Original</div>
                  <div className="text-sm font-black text-white/40">2.1% CVR</div>
                </div>
              </motion.div>

              {/* Variant B - Winner */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
                className="relative"
              >
                <motion.div
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: [0, -3, 0], opacity: 1 }}
                  transition={{ delay: 0.8, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DBFE01] text-[#1a1a1a] text-[8px] font-extrabold px-2.5 py-0.5 rounded-full shadow-lg shadow-[#DBFE01]/40 z-20 flex items-center gap-1"
                >
                  <Trophy className="w-2.5 h-2.5" /> WINNER
                </motion.div>
                <motion.div
                  animate={{ boxShadow: ['0 0 0px rgba(219,254,1,0)', '0 0 25px rgba(219,254,1,0.25)', '0 0 0px rgba(219,254,1,0)'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="bg-gradient-to-b from-[#DBFE01]/15 to-[#DBFE01]/5 border border-[#DBFE01]/40 rounded-xl p-3 mb-2"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 bg-[#DBFE01] rounded-xl flex-shrink-0 shadow-lg shadow-[#DBFE01]/30" />
                    <div className="space-y-1">
                      <div className="h-1.5 bg-white/40 rounded w-16" />
                      <div className="h-1.5 bg-white/20 rounded w-12" />
                    </div>
                  </div>
                  <motion.div
                    className="flex gap-0.5 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    {[1,2,3,4,5].map((s, idx) => (
                      <motion.div
                        key={s}
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + idx * 0.08, type: 'spring', stiffness: 400 }}
                      >
                        <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="flex gap-1">
                    {['from-blue-600 to-indigo-500','from-[#DBFE01] to-green-400','from-purple-500 to-pink-500'].map((g,s) => (
                      <motion.div
                        key={s}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + s * 0.1, duration: 0.4, origin: 'bottom' }}
                        className={`flex-1 h-10 bg-gradient-to-b ${g} rounded-md opacity-80`}
                      />
                    ))}
                  </div>
                </motion.div>
                <div className="text-center">
                  <div className="text-[10px] text-[#DBFE01] font-bold mb-0.5">New Variant</div>
                  <div className="text-sm font-black text-white flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#DBFE01]" /> +15% CVR
                  </div>
                </div>
              </motion.div>
            </div>
        </div>
    </motion.div>
  </div>
);

// Enhanced One Pager
export const RelaunchPlanVisual = () => {
  const phases = [
    { icon: Search, label: "Audit", desc: "Week 1", color: "blue", bgColor: "bg-blue-50", textColor: "text-blue-600" },
    { icon: Code2, label: "Build", desc: "Weeks 2-4", color: "purple", bgColor: "bg-purple-50", textColor: "text-purple-600" },
    { icon: TrendingUp, label: "Relaunch", desc: "Weeks 5-6", color: "emerald", bgColor: "bg-emerald-50", textColor: "text-emerald-600" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: '0 40px 80px -20px rgba(0,0,0,0.2)' }}
      className="bg-gradient-to-br from-white to-gray-50 max-w-md mx-auto rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-8 relative border border-gray-100 overflow-hidden"
    >
      {/* Background glow */}
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
            <div className="text-sm font-bold text-gray-900">8-12 Week Relaunch</div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Strategic Timeline</div>
          </div>
        </motion.div>
        
        {/* Timeline */}
        <div className="space-y-6 relative">
          {/* Animated background line */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-emerald-300"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.4 }}
              className="flex gap-4 relative"
            >
              {/* Node */}
              <div className="flex flex-col items-center pt-1">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.2, type: 'spring', stiffness: 300 }}
                  className={`w-12 h-12 ${phase.bgColor} rounded-full flex items-center justify-center border-2 border-${phase.color}-300 relative z-20 shadow-lg`}
                >
                  <phase.icon className={`w-6 h-6 ${phase.textColor}`} />
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                className="pb-2 pt-1.5 flex-1"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold text-gray-900 text-sm">{phase.label}</span>
                  <span className={`text-[10px] font-bold ${phase.textColor} uppercase tracking-wider`}>{phase.desc}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${60 + idx * 15}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r from-${phase.color}-400 to-${phase.color}-500`}
                    style={{
                      background: idx === 0 ? 'linear-gradient(90deg, #3b82f6, #60a5fa)' :
                                 idx === 1 ? 'linear-gradient(90deg, #a855f7, #c084fc)' :
                                           'linear-gradient(90deg, #10b981, #34d399)'
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 pt-6 border-t border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Ready to Launch?</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#DBFE01] text-sm font-bold">→</motion.span>
          </div>
          <div className="text-[11px] text-gray-600 leading-relaxed">Book a 30-minute roadmap call to get your personalized relaunch timeline.</div>
        </motion.div>
      </div>
      
      {/* Animated Stamp */}
      <motion.div 
        initial={{ scale: 1.5, opacity: 0, rotate: -25 }}
        whileInView={{ scale: 1, opacity: 1, rotate: -15 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        className="absolute top-6 right-6 border-2 border-[#DBFE01] text-[#1a1a1a] text-[9px] font-black px-3 py-1.5 rounded uppercase tracking-widest bg-[#DBFE01]/25 backdrop-blur-sm shadow-lg"
      >
        Ready
      </motion.div>
    </motion.div>
  );
};