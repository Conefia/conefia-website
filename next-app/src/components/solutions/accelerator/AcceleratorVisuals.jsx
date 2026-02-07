import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Calendar, CheckCircle2, 
  BarChart3, AlertCircle, Layers, Kanban,
  FileCheck, Clock, Zap, Target, LayoutDashboard,
  Presentation, PieChart, ArrowRight
} from 'lucide-react';

// Hero Visual: Cohort Pipeline Board + Sponsor Dashboard
export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none perspective-[1200px] overflow-visible">
       {/* Background Ambience */}
       <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 mx-4 md:mx-0 shadow-2xl">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">
        
        {/* Cohort Pipeline Board (Kanban style) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B1020]/90 backdrop-blur border border-white/10 rounded-xl p-4 md:p-6 shadow-xl w-full"
        >
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
             <div className="flex items-center gap-2">
                <Kanban className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-bold text-white">Cohort 24 Batch Tracker</span>
             </div>
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-[#0B1020] flex items-center justify-center text-[10px] text-white">
                    <Users className="w-3 h-3" />
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
             {/* Column 1: Validation */}
             <div className="bg-white/5 rounded-lg p-3">
                <div className="text-[10px] uppercase text-white/40 font-bold mb-3 flex justify-between">
                  Validation <span className="bg-white/10 px-1.5 rounded text-white">4</span>
                </div>
                <div className="space-y-2">
                   <div className="bg-[#1a1f35] p-3 rounded border border-white/5">
                      <div className="h-2 w-16 bg-blue-500/20 rounded mb-2" />
                      <div className="h-1.5 w-full bg-white/10 rounded" />
                   </div>
                   <div className="bg-[#1a1f35] p-3 rounded border border-white/5 opacity-60">
                      <div className="h-2 w-12 bg-blue-500/20 rounded mb-2" />
                      <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                   </div>
                </div>
             </div>

             {/* Column 2: Build Sprint */}
             <div className="bg-white/5 rounded-lg p-3">
                <div className="text-[10px] uppercase text-white/40 font-bold mb-3 flex justify-between">
                  Build Sprint <span className="bg-purple-500/20 px-1.5 rounded text-purple-300">8</span>
                </div>
                <div className="space-y-2">
                   {[1, 2].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="bg-[#1a1f35] p-3 rounded border-l-2 border-purple-500 border-t border-r border-b border-white/5 relative overflow-hidden group"
                      >
                         <div className="absolute top-0 right-0 w-8 h-8 bg-purple-500/10 rounded-bl-xl flex items-center justify-center">
                            <Rocket className="w-3 h-3 text-purple-400" />
                         </div>
                         <div className="h-2 w-20 bg-purple-500/20 rounded mb-2" />
                         <div className="flex gap-1 mt-2">
                            <span className="text-[8px] bg-white/5 px-1 rounded text-white/40">MVP</span>
                            <span className="text-[8px] bg-white/5 px-1 rounded text-white/40">API</span>
                         </div>
                         {/* Progress bar */}
                         <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-purple-500" 
                                initial={{ width: "20%" }}
                                animate={{ width: i === 0 ? "85%" : "60%" }}
                                transition={{ duration: 1.5, delay: 0.8 }}
                            />
                         </div>
                      </motion.div>
                   ))}
                </div>
             </div>

             {/* Column 3: Demo Day Ready */}
             <div className="bg-white/5 rounded-lg p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
                <div className="text-[10px] uppercase text-green-400/80 font-bold mb-3 flex justify-between relative z-10">
                  Demo Ready <span className="bg-green-500/20 px-1.5 rounded text-green-300">3</span>
                </div>
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-[#1a1f35] p-3 rounded border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div className="h-2 w-16 bg-green-500/20 rounded" />
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded mb-2" />
                    <div className="flex items-center gap-1 text-[9px] text-green-400">
                        <Presentation className="w-3 h-3" />
                        <span>Pitch Deck: OK</span>
                    </div>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* Sponsor Dashboard Overlay */}
        <motion.div 
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: -20, opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-xl p-4 shadow-2xl border border-gray-100 max-w-sm ml-auto mr-8 relative z-20"
        >
            <div className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-wider">Sponsor Overview</div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <div className="text-2xl font-bold text-gray-900">85%</div>
                    <div className="text-xs text-gray-500 font-medium">Cohort Success Rate</div>
                </div>
                <div className="w-10 h-10 rounded-full border-4 border-purple-100 border-t-purple-600 animate-spin-slow" />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-xs">
                    <span className="text-gray-500">MVP Launched</span>
                    <span className="font-bold text-gray-900">12/15 Teams</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-600 w-[80%] h-full rounded-full" />
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

// Outcomes: Tiles + Cohort Cadence Strip
export const OutcomesVisual = () => (
    <div className="space-y-10">
        {/* Tiles */}
        <div className="grid md:grid-cols-4 gap-4">
            {[
                { label: "More Shipping", val: "2×", desc: "Teams launching MVPs", icon: Rocket, color: "text-blue-600", bg: "bg-blue-50" },
                { label: "Time to Market", val: "4-8w", desc: "Demo Day ready", icon: Clock, color: "text-purple-600", bg: "bg-purple-50" },
                { label: "Ops Saved", val: "↓80%", desc: "Less founder follow-up", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
                { label: "Reporting", val: "100%", desc: "Sponsor-ready data", icon: PieChart, color: "text-green-600", bg: "bg-green-50" },
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
                >
                    <div className={`w-10 h-10 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.val}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                </motion.div>
            ))}
        </div>

        {/* Cohort Cadence Strip */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
             <div className="text-sm text-white/40 uppercase font-bold mb-6 tracking-widest">Cohort Cadence System</div>
             
             <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
                {[
                    { title: "Wk 1-2: Validation", items: ["Idea Audit", "Tech Feasibility"] },
                    { title: "Wk 3-6: Build Sprint", items: ["Weekly Demos", "Code Reviews"] },
                    { title: "Wk 7-8: Polish", items: ["Load Testing", "Pitch Prep"] },
                    { title: "Demo Day", items: ["Live Launch", "Investor Data"] }
                ].map((phase, i) => (
                    <div key={i} className="flex-1 relative">
                        {/* Connector Line */}
                        {i < 3 && <div className="hidden md:block absolute top-3 left-[50%] w-full h-0.5 bg-white/10 -z-10" />}
                        
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-6 rounded-full bg-[#DBFE01] flex items-center justify-center text-[#1a1a1a] font-bold text-xs shadow-[0_0_10px_rgba(219,254,1,0.4)]">
                                {i + 1}
                            </div>
                            <div className="font-bold text-white text-sm">{phase.title}</div>
                        </div>
                        <ul className="space-y-1.5 pl-9">
                            {phase.items.map((item, j) => (
                                <li key={j} className="text-xs text-white/60 flex items-center gap-1.5">
                                    <div className="w-1 h-1 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
        </div>
    </div>
);

// Problem: Red Zone Timeline
export const ProblemVisual = () => (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg relative overflow-hidden">
        
        {/* Timeline Comparison */}
        <div className="space-y-12">
            
            {/* The Usual Chaos */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-red-100 text-red-600 p-1.5 rounded-lg"><AlertCircle className="w-4 h-4" /></div>
                    <span className="font-bold text-gray-900">Standard Accelerator Timeline</span>
                </div>
                <div className="relative h-12 bg-gray-100 rounded-lg flex items-center px-4 overflow-hidden">
                    <div className="flex-1 text-xs text-gray-400 text-center">Advice & Workshops</div>
                    <div className="flex-1 text-xs text-gray-400 text-center border-l border-gray-200">More Advice</div>
                    <div className="w-1/3 bg-red-500/10 h-full flex items-center justify-center border-l-2 border-red-500 text-red-600 text-xs font-bold relative animate-pulse">
                        <span className="relative z-10">PANIC ZONE</span>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-600" />
                    <span className="absolute -right-1 -bottom-6 text-[10px] font-bold text-red-600">Demo Day</span>
                </div>
            </div>

            {/* Our Stage-Gated Approach */}
            <div>
                 <div className="flex items-center gap-2 mb-4">
                    <div className="bg-green-100 text-green-600 p-1.5 rounded-lg"><CheckCircle2 className="w-4 h-4" /></div>
                    <span className="font-bold text-gray-900">Conefia Execution System</span>
                </div>
                <div className="relative h-12 bg-gray-50 rounded-lg flex items-center p-1 gap-1">
                    {[
                        { label: "Spec", color: "bg-blue-100 text-blue-700 border-blue-200" },
                        { label: "Build", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
                        { label: "Test", color: "bg-purple-100 text-purple-700 border-purple-200" },
                        { label: "Polish", color: "bg-green-100 text-green-700 border-green-200" }
                    ].map((stage, i) => (
                        <div key={i} className={`flex-1 h-full rounded border ${stage.color} flex items-center justify-center text-xs font-bold shadow-sm`}>
                            {stage.label}
                        </div>
                    ))}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-green-500" />
                </div>
            </div>

        </div>

        {/* Floating Problem Cards */}
        <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                <div className="text-red-800 font-bold text-sm mb-1">Teams Stall</div>
                <div className="text-red-600/70 text-xs">Lack of technical leadership leads to "slide-ware" only.</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                <div className="text-orange-800 font-bold text-sm mb-1">Manual Reporting</div>
                <div className="text-orange-600/70 text-xs">Chasing founders for updates wastes program manager time.</div>
            </div>
        </div>
    </div>
);

// Solution: The Delivery Layer
export const SolutionVisual = () => (
    <div className="relative p-6">
        {/* Central Hub Graphic */}
        <div className="relative bg-[#0B1020] rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
             
             <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#DBFE01] text-black px-4 py-1.5 rounded-full text-sm font-bold mb-2">
                    <Layers className="w-4 h-4" />
                    The Delivery Layer
                </div>
                <p className="text-white/60 text-sm">Plugs into your existing program structure</p>
             </div>

             <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {[
                    { title: "Build Squads", icon: Users, desc: "On-demand dev teams" },
                    { title: "Tech Co-Founder", icon: Zap, desc: "Fractional CTO guidance" },
                    { title: "Reporting", icon: LayoutDashboard, desc: "Automated tracking" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
                        className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-sm transition-colors"
                    >
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-white/50">{item.desc}</div>
                    </motion.div>
                ))}
             </div>
             
             {/* Bottom Connector */}
             <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                <div className="flex items-center gap-4 text-white/40 text-xs font-mono">
                    <span>COMPATIBLE WITH:</span>
                    <span className="border border-white/10 px-2 py-1 rounded">YCombinator Style</span>
                    <span className="border border-white/10 px-2 py-1 rounded">Corporate Labs</span>
                    <span className="border border-white/10 px-2 py-1 rounded">Venture Studios</span>
                </div>
             </div>
        </div>
    </div>
);