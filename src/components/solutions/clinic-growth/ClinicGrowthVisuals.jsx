import React from 'react';
import { motion } from 'framer-motion';
import {
  Search, Globe, FileText, CalendarCheck, Phone,
  MapPin, Star, TrendingUp, Users, Activity,
  CheckCircle2, XCircle, ArrowRight, BarChart3,
  LayoutDashboard, MessageSquare, MousePointerClick,
  ChevronRight, ArrowUpRight, Clock, Check, Lightbulb,
  Wrench, Map, Zap, CheckCircle } from
'lucide-react';

// Hero Visual: Vertical Connected Patient Journey
export const HeroVisual = () => {
  const steps = [
  {
    icon: Search,
    label: "Discovery",
    desc: "Patient finds you on Google Maps or Search.",
    color: "from-blue-500/30 to-blue-600/20",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20"
  },
  {
    icon: Globe,
    label: "Decision",
    desc: "Patient visits website to check credibility.",
    color: "from-purple-500/30 to-purple-600/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20"
  },
  {
    icon: FileText,
    label: "Intake",
    desc: "Patient fills forms before or during booking.",
    color: "from-amber-500/30 to-amber-600/20",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/20"
  },
  {
    icon: CalendarCheck,
    label: "Booking",
    desc: "Patient schedules appointment directly.",
    color: "from-[#DBFE01]/30 to-[#DBFE01]/10",
    border: "border-[#DBFE01]/30",
    glow: "shadow-[#DBFE01]/20"
  }];


  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 w-full relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/5 via-transparent to-blue-500/5 pointer-events-none" />
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-[#DBFE01]/10 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="text-sm text-white font-bold uppercase tracking-wide flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#DBFE01]" />
          Connected Patient Journey
        </div>
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-[#DBFE01] bg-[#DBFE01]/10 px-3 py-1 rounded-full font-mono border border-[#DBFE01]/20 flex items-center gap-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] animate-pulse" />
          LIVE
        </motion.div>
      </div>

      {/* Journey Steps */}
      <div className="relative z-10">
        {/* Horizontal layout on desktop, vertical on mobile */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-white/10 z-0" />
          <motion.div
            className="absolute top-[27px] left-[10%] h-0.5 bg-gradient-to-r from-[#DBFE01] to-[#DBFE01]/30 z-[1]"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
          {/* Animated pulse traveling along line */}
          <motion.div
            className="absolute top-[24px] w-2 h-2 rounded-full bg-[#DBFE01] z-[2] shadow-[0_0_12px_rgba(219,254,1,0.8)]"
            animate={{ left: ["10%", "90%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center w-1/4 relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} border ${step.border} flex items-center justify-center mb-3 shadow-lg ${step.glow} backdrop-blur-sm transition-all`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h4 className="text-white text-sm font-bold mb-1">{step.label}</h4>
              <p className="text-white/50 text-xs leading-snug">{step.desc}</p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.4, type: "spring" }}
                className="mt-2 w-5 h-5 rounded-full bg-[#DBFE01] text-[#0B1020] text-[10px] font-extrabold flex items-center justify-center"
              >
                {i + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical layout */}
        <div className="md:hidden relative space-y-6">
          <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-white/10" />
          <motion.div
            className="absolute left-7 top-4 w-0.5 bg-gradient-to-b from-[#DBFE01] to-[#DBFE01]/20"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 2rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} border ${step.border} flex items-center justify-center shadow-lg ${step.glow} flex-shrink-0`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </motion.div>
              <div className="flex-1 pt-1">
                <h4 className="text-white text-base font-bold mb-0.5">{step.label}</h4>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#DBFE01] text-[#0B1020] text-[10px] font-extrabold flex items-center justify-center flex-shrink-0 mt-2">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="mt-8 pt-6 border-t border-white/10 relative z-10"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[Search, Globe, FileText, CalendarCheck].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                  className="w-7 h-7 rounded-full bg-[#DBFE01] border-2 border-[#0B1020] flex items-center justify-center"
                >
                  <Icon className="w-3 h-3 text-[#0B1020]" />
                </motion.div>
              ))}
            </div>
            <span className="text-white/70 text-sm font-medium">4 touchpoints connected</span>
          </div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-[#DBFE01] font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Zero drop-off
          </motion.div>
        </div>
      </motion.div>
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
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md shadow-gray-200 border border-gray-100">
          <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
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
export const RoadmapPreviewVisual = () => {
  const phases = [
    { label: 'Audit', num: '1' },
    { label: 'Plan', num: '2' },
    { label: 'Build', num: '3' },
    { label: 'Scale', num: '4' }
  ];

  return (
    <div className="space-y-12 max-w-xl mx-auto">
      {/* Simple Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ boxShadow: '0 20px 50px rgba(26, 26, 26, 0.1)' }}
        className="bg-white rounded-2xl border-2 border-[#1a1a1a] p-8 shadow-lg relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#DBFE01]/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-10 left-0 w-32 h-32 bg-[#1a1a1a]/5 rounded-full blur-2xl -z-0" />
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-[#1a1a1a] relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex-shrink-0">
            <Map className="w-7 h-7 text-[#DBFE01]" />
          </motion.div>
          <h3 className="text-xl font-bold text-[#1a1a1a]">Your Growth Roadmap</h3>
        </div>
        
        {/* Content Items with Icons */}
        <div className="space-y-3 relative z-10">
          {[
            { title: 'Patient Journey Audit', Icon: Search },
            { title: 'Local SEO & Visibility Plan', Icon: Zap },
            { title: 'Booking System Improvements', Icon: CheckCircle },
            { title: '8-12 Week Campaign Roadmap', Icon: BarChart3 }
          ].map((item, i) => {
            const IconComp = item.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ x: 4, backgroundColor: 'rgba(219, 254, 1, 0.08)' }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 transition-all group">
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                  className="w-10 h-10 rounded-lg bg-[#DBFE01] text-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow">
                  <IconComp className="w-5 h-5" />
                </motion.div>
                <p className="text-sm font-semibold text-[#1a1a1a] flex-1">{item.title}</p>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#DBFE01] text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t-2 border-[#1a1a1a] flex items-center justify-between relative z-10 bg-gradient-to-r from-transparent via-[#DBFE01]/5 to-transparent rounded-lg px-4 py-3 -mx-4 -mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <Clock className="w-5 h-5 text-[#1a1a1a]" />
            </motion.div>
            <span className="text-sm font-bold text-[#1a1a1a]">Delivered in 24 hours</span>
          </div>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#DBFE01] text-2xl font-bold">
            ✓
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}