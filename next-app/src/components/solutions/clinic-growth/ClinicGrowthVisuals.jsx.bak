import React from 'react';
import { motion } from 'framer-motion';
import {
  Search, Globe, FileText, CalendarCheck, Phone,
  MapPin, Star, TrendingUp, Users, Activity,
  CheckCircle2, XCircle, ArrowRight, BarChart3,
  LayoutDashboard, MessageSquare, MousePointerClick,
  ChevronRight, ArrowUpRight, Clock, Check } from
'lucide-react';

// Hero Visual: Vertical Connected Patient Journey
export const HeroVisual = () => {
  const steps = [
  {
    icon: Search,
    label: "Discovery",
    desc: "Patient finds you on Google Maps or Search.",
    fix: "Top 3 Ranking + Review Mgmt"
  },
  {
    icon: Globe,
    label: "Decision",
    desc: "Patient visits website to check credibility.",
    fix: "High-Converting Service Pages"
  },
  {
    icon: FileText,
    label: "Intake",
    desc: "Patient fills forms before or during booking.",
    fix: "Mobile-First Digital Forms"
  },
  {
    icon: CalendarCheck,
    label: "Booking",
    desc: "Patient schedules appointment directly.",
    fix: "Integrated Self-Scheduling"
  }];


  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#DBFE01]/5 to-transparent pointer-events-none" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="text-sm text-white font-bold uppercase tracking-wide flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#DBFE01]" />
          Connected Journey
        </div>
        <div className="text-xs text-[#DBFE01] bg-[#DBFE01]/10 px-2 py-1 rounded-full font-mono border border-[#DBFE01]/20">
          100% VISIBILITY
        </div>
      </div>

      <div className="relative space-y-8">
        {/* Vertical connecting line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#DBFE01] to-white/10" />

        {steps.map((step, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="relative flex items-start gap-4">

            <div className="relative z-10 w-10 h-10 rounded-full bg-[#0B1020] border border-[#DBFE01]/30 flex items-center justify-center shadow-[0_0_15px_rgba(219,254,1,0.15)] group hover:border-[#DBFE01] transition-colors">
              <step.icon className="w-5 h-5 text-[#DBFE01]" />
            </div>
            
            <div className="flex-1 pt-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-white text-base font-bold">{step.label}</h4>
                <span className="text-[10px] font-bold text-[#DBFE01] uppercase tracking-wider bg-[#DBFE01]/5 px-2 py-0.5 rounded border border-[#DBFE01]/10">
                  {step.fix}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs font-medium text-white/80">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) =>
            <div key={i} className="w-6 h-6 rounded-full bg-[#DBFE01] border-2 border-[#0B1020] flex items-center justify-center text-[8px] font-bold text-black">
                <Check className="w-3 h-3" />
              </div>
            )}
          </div>
          <span className="text-base">Seamless data flow end-to-end</span>
        </div>
      </div>
    </div>);

};

// Metrics Attribution Visual (Light Mode)
export const AttributionVisual = () =>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="flex items-center justify-center gap-2 md:gap-4 mt-8 opacity-90">

    <div className="flex flex-col items-center group">
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
        <MousePointerClick className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>
      <span className="text-[10px] text-gray-500 font-medium">Traffic</span>
    </div>
    
    <div className="h-[2px] w-8 md:w-16 bg-gray-100 relative overflow-hidden rounded-full">
      <motion.div
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-blue-400 w-1/2 opacity-30" />

    </div>

    <div className="flex flex-col items-center group">
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 border border-gray-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
        <Phone className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
      </div>
      <span className="text-[10px] text-gray-500 font-medium">Qualified Leads</span>
    </div>

    <div className="h-[2px] w-8 md:w-16 bg-gray-100 relative overflow-hidden rounded-full">
      <motion.div
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-[#DBFE01] w-1/2 opacity-60" />

    </div>

    <div className="flex flex-col items-center">
      <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="w-12 h-12 rounded-full bg-[#DBFE01] text-[#1a1a1a] flex items-center justify-center mb-2 shadow-lg shadow-[#DBFE01]/20 border-2 border-white z-10">

        <CalendarCheck className="w-6 h-6" />
      </motion.div>
      <span className="text-xs text-[#1a1a1a] font-bold bg-[#DBFE01]/20 px-2 py-0.5 rounded-full">Booked Patient</span>
    </div>
  </motion.div>;


// Problem Visual: Broken Journey
export const BrokenJourneyVisual = () =>
<div className="relative p-6 bg-gradient-to-br from-red-50 to-white rounded-3xl border border-red-100 shadow-sm overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(#fee2e2_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
    
    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100 shadow-sm">
      Current State
    </div>
    <div className="space-y-6 mt-6 relative z-10">
      {[
    { from: "Website Traffic", to: "Intake Form", loss: "-60% drop-off", icon: Globe, delay: 0 },
    { from: "Intake Form", to: "Booking", loss: "-40% drop-off", icon: FileText, delay: 0.2 },
    { from: "Phone Calls", to: "Appointments", loss: "Untracked", icon: Phone, delay: 0.4 }].
    map((path, i) =>
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: path.delay }}
      viewport={{ once: true }}
      className="flex items-center gap-4">

          <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
            <path.icon className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1 h-3 bg-gray-100 rounded-full relative overflow-hidden">
            <motion.div
          initial={{ width: "100%" }}
          whileInView={{ width: "40%" }}
          transition={{ delay: path.delay + 0.3, duration: 1, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 bg-red-400 rounded-full" />

            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-red-600 bg-white px-2 py-0.5 shadow-sm border border-red-100 rounded-md whitespace-nowrap z-10">
              {path.loss}
            </div>
          </div>
          <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm opacity-50 grayscale">
            <XCircle className="w-6 h-6 text-red-300" />
          </div>
        </motion.div>
    )}
    </div>
    <div className="mt-8 text-center">
        <div className="inline-block px-4 py-2 bg-red-100/50 rounded-lg text-red-900 text-sm font-medium italic border border-red-100">
            "We don't know where patients are dropping off."
        </div>
    </div>
  </div>;


// Solution Visual: Dashboard Mock + GBP
export const SolutionDashboardVisual = () =>
<div className="relative group">
    {/* Main Dashboard Card */}
    <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative z-10">

      <div className="bg-gray-50/80 backdrop-blur px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Growth Dashboard</span>
        </div>
      </div>
      
      <div className="p-8 grid grid-cols-2 gap-6">
        <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors">
          <div className="flex items-center gap-2 mb-2">
             <CalendarCheck className="w-4 h-4 text-blue-500" />
             <div className="text-xs text-blue-600 font-bold uppercase">Booked Appts</div>
          </div>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl font-extrabold text-blue-900">

            +42%
          </motion.div>
          <div className="text-[10px] text-blue-400 mt-1">vs last month</div>
        </div>
        <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 hover:border-emerald-200 transition-colors">
          <div className="flex items-center gap-2 mb-2">
             <Users className="w-4 h-4 text-emerald-500" />
             <div className="text-xs text-emerald-600 font-bold uppercase">Qualified Leads</div>
          </div>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-extrabold text-emerald-900">

            +128
          </motion.div>
          <div className="text-[10px] text-emerald-400 mt-1">vs last month</div>
        </div>
        
        <div className="col-span-2 p-5 bg-gray-50/50 rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Source Attribution</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden flex shadow-inner">
            <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#DBFE01]" />

            <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-blue-400" />

            <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-emerald-400" />

          </div>
          <div className="flex justify-between mt-3 text-[10px] font-medium text-gray-500">
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#DBFE01]" /> Organic Search</span>
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-400" /> Paid Ads</span>
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Direct</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* GBP Floating Card */}
    <motion.div
    initial={{ opacity: 0, y: 20, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate: 6 }}
    whileHover={{ rotate: 0, scale: 1.05 }}
    transition={{ delay: 0.5, type: "spring" }}
    className="absolute -right-6 -bottom-8 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-20">

      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-200">G</div>
        <div>
          <div className="text-xs font-bold text-gray-900">Google Maps</div>
          <div className="flex items-center gap-1 mt-0.5">
             <div className="flex text-yellow-400 text-[10px] gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
             </div>
             <span className="text-[10px] text-gray-400">(84)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs bg-green-50 rounded-lg p-2 border border-green-100">
        <span className="text-green-700 font-bold flex items-center gap-1">
             <ArrowUpRight className="w-3 h-3" />
             Top 3 Ranking
        </span>
        <span className="text-green-600 font-semibold">+4 spots</span>
      </div>
    </motion.div>
  </div>;


// Process Visual: Deliverables
export const ProcessVisual = () =>
<div className="flex flex-wrap justify-center gap-4 mt-8">
    {["Roadmap", "Service Pages", "Tracking Setup", "CRO Experiments"].map((item, i) =>
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    whileHover={{ y: -2, borderColor: "#DBFE01" }}
    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center shadow-sm hover:shadow-md transition-all cursor-default">

        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Deliverable</div>
        <div className="font-bold text-[#1a1a1a] text-sm flex items-center gap-2 justify-center">
            {item}
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
      </motion.div>
  )}
  </div>;


// Outcomes Visual: Before/After (Dark Mode)
export const OutcomesVisual = () =>
<div className="grid grid-cols-2 gap-6 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] p-2 rounded-full border border-white/10">
        <ArrowRight className="w-5 h-5 text-white/40" />
    </div>

    <motion.div
    whileHover={{ scale: 0.98 }}
    className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-60 hover:opacity-100 transition-opacity">

      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Before</div>
        <XCircle className="w-4 h-4 text-red-400/50" />
      </div>
      <div className="space-y-3">
        <div className="h-2 bg-white/10 rounded-full w-3/4" />
        <div className="h-2 bg-white/10 rounded-full w-1/2" />
        <div className="h-2 bg-white/10 rounded-full w-2/3" />
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-red-300/80">
          <span>Vendor Chaos</span>
        </div>
      </div>
    </motion.div>

    <motion.div
    initial={{ scale: 0.95 }}
    whileInView={{ scale: 1 }}
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-br from-[#DBFE01] to-[#c8e600] rounded-2xl p-6 text-[#1a1a1a] shadow-[0_20px_50px_-12px_rgba(219,254,1,0.3)] relative overflow-hidden">

      <div className="absolute inset-0 bg-white/20" style={{ clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 100%)" }} />
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="text-xs text-[#1a1a1a]/60 uppercase font-bold tracking-wider">After</div>
        <CheckCircle2 className="w-5 h-5 text-[#1a1a1a]" />
      </div>
      <div className="space-y-3 relative z-10">
        <div className="h-2.5 bg-[#1a1a1a]/20 rounded-full w-full" />
        <div className="h-2.5 bg-[#1a1a1a]/20 rounded-full w-3/4" />
        <div className="h-2.5 bg-[#1a1a1a]/20 rounded-full w-5/6" />
        <div className="mt-8 pt-4 border-t border-[#1a1a1a]/10 flex items-center gap-2 text-sm font-bold">
          <span>Systemized Growth</span>
        </div>
      </div>
    </motion.div>
  </div>;


// Final CTA Visual: Roadmap
export const RoadmapPreviewVisual = () =>
<motion.div
  whileHover={{ rotate: 0, scale: 1.02 }}
  initial={{ rotate: 2 }}
  whileInView={{ rotate: 2 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-auto border border-gray-100 relative">

    <div className="absolute -top-2 -left-2 w-full h-full bg-black rounded-xl -z-10" />
    
    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
      <div className="text-sm font-bold text-gray-800 flex items-center gap-2">
         <FileText className="w-4 h-4 text-[#DBFE01] fill-current" />
         Your Growth Roadmap
      </div>
      <div className="text-[10px] font-bold text-white bg-black px-2 py-1 rounded-full">PREVIEW</div>
    </div>
    <div className="space-y-3">
      {[
    "Audit Patient Journey Gaps",
    "Local SEO & GBP Opportunity",
    "Conversion Tracking Setup",
    "Prioritized Fix List"].
    map((item, i) =>
    <div key={i} className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border border-[#DBFE01] flex items-center justify-center flex-shrink-0">
            <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="w-2 h-2 rounded-full bg-[#DBFE01]" />

          </div>
          <div className="flex-1 bg-gray-50 rounded p-2 text-xs font-medium text-gray-600">
             {item}
          </div>
        </div>
    )}
    </div>
    <div className="mt-5 pt-3 border-t border-gray-100 text-center flex items-center justify-center gap-2 text-xs text-gray-400">
      <Clock className="w-3 h-3" />
      <span>Delivered in 24 hours</span>
    </div>
  </motion.div>;