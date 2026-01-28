import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Globe, FileText, CalendarCheck, Phone, 
  MapPin, Star, TrendingUp, Users, Activity,
  CheckCircle2, XCircle, ArrowRight, BarChart3,
  LayoutDashboard, MessageSquare, MousePointerClick
} from 'lucide-react';

// Hero Visual: Before -> After patient journey
export const HeroVisual = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full max-w-lg mx-auto mt-12">
    <div className="text-xs text-white/60 font-semibold uppercase tracking-wider mb-4 text-center">
      The Connected Patient Journey
    </div>
    <div className="flex items-center justify-between relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
      
      {[
        { icon: Search, label: "Search" },
        { icon: Globe, label: "Website" },
        { icon: FileText, label: "Intake" },
        { icon: CalendarCheck, label: "Booking" }
      ].map((step, i) => (
        <div key={i} className="flex flex-col items-center gap-2 bg-[#0B1020] p-2 rounded-xl border border-white/10">
          <div className="w-8 h-8 rounded-full bg-[#DBFE01]/20 flex items-center justify-center">
            <step.icon className="w-4 h-4 text-[#DBFE01]" />
          </div>
          <span className="text-[10px] text-white/80 font-medium">{step.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#DBFE01] bg-[#DBFE01]/10 py-1.5 rounded-lg">
      <CheckCircle2 className="w-3 h-3" />
      <span>Zero leakage from search to schedule</span>
    </div>
  </div>
);

// Metrics Attribution Visual (Light Mode)
export const AttributionVisual = () => (
  <div className="flex items-center justify-center gap-2 md:gap-4 mt-8 opacity-80">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
        <MousePointerClick className="w-4 h-4 text-gray-600" />
      </div>
      <span className="text-[10px] text-gray-500">Traffic</span>
    </div>
    <div className="h-[1px] w-8 md:w-16 bg-gray-200" />
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
        <Phone className="w-4 h-4 text-gray-600" />
      </div>
      <span className="text-[10px] text-gray-500">Qualified Leads</span>
    </div>
    <div className="h-[1px] w-8 md:w-16 bg-gray-200" />
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-[#DBFE01] text-[#1a1a1a] flex items-center justify-center mb-2 shadow-sm border border-[#DBFE01]">
        <CalendarCheck className="w-4 h-4" />
      </div>
      <span className="text-[10px] text-gray-900 font-bold">Booked Patient</span>
    </div>
  </div>
);

// Problem Visual: Broken Journey
export const BrokenJourneyVisual = () => (
  <div className="relative p-6 bg-red-50/50 rounded-3xl border border-red-100">
    <div className="absolute top-4 right-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
      Current State
    </div>
    <div className="space-y-6 mt-4">
      {[
        { from: "Website Traffic", to: "Intake Form", loss: "-60% drop-off", icon: Globe },
        { from: "Intake Form", to: "Booking", loss: "-40% drop-off", icon: FileText },
        { from: "Phone Calls", to: "Appointments", loss: "Untracked", icon: Phone },
      ].map((path, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
            <path.icon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex-1 h-2 bg-gray-100 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-red-200" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-red-600 bg-white px-1 shadow-sm border border-red-100 rounded">
              {path.loss}
            </div>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm opacity-50">
            <XCircle className="w-5 h-5 text-red-400" />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 text-center text-sm text-red-800 font-medium bg-red-100/50 p-3 rounded-xl">
      "We don't know where patients are dropping off."
    </div>
  </div>
);

// Solution Visual: Dashboard Mock + GBP
export const SolutionDashboardVisual = () => (
  <div className="relative">
    {/* Main Dashboard Card */}
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative z-10">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <LayoutDashboard className="w-4 h-4 text-gray-400" />
        <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Growth Dashboard</span>
      </div>
      <div className="p-6 grid grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
          <div className="text-xs text-blue-600 font-medium mb-1">Booked Appts</div>
          <div className="text-2xl font-bold text-blue-900">+42%</div>
        </div>
        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
          <div className="text-xs text-emerald-600 font-medium mb-1">Qualified Leads</div>
          <div className="text-2xl font-bold text-emerald-900">+128</div>
        </div>
        <div className="col-span-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">Source Attribution</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
            <div className="w-[40%] bg-[#DBFE01]" />
            <div className="w-[30%] bg-blue-400" />
            <div className="w-[30%] bg-emerald-400" />
          </div>
          <div className="flex gap-3 mt-2 text-[10px] text-gray-500">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#DBFE01]" /> Organic</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400" /> Ads</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Direct</span>
          </div>
        </div>
      </div>
    </div>

    {/* GBP Floating Card */}
    <div className="absolute -right-4 -bottom-6 w-48 bg-white rounded-xl shadow-lg border border-gray-100 p-4 rotate-3 z-20">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">G</div>
        <div>
          <div className="text-xs font-bold">Google Maps</div>
          <div className="flex text-yellow-400 text-[10px]">★★★★★ (84)</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs mt-2">
        <span className="text-green-600 font-bold">Top 3 Ranking</span>
        <TrendingUp className="w-3 h-3 text-green-600" />
      </div>
    </div>
  </div>
);

// Process Visual: Deliverables
export const ProcessVisual = () => (
  <div className="flex flex-wrap justify-center gap-4 mt-8">
    {["Roadmap", "Service Pages", "Tracking Setup", "CRO Experiments"].map((item, i) => (
      <div key={i} className="bg-white/80 border border-gray-200 rounded-lg px-4 py-2 text-center shadow-sm">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Deliverable</div>
        <div className="font-bold text-[#1a1a1a] text-sm">{item}</div>
      </div>
    ))}
  </div>
);

// Outcomes Visual: Before/After (Dark Mode)
export const OutcomesVisual = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 opacity-60">
      <div className="text-xs text-white/40 uppercase mb-2 font-bold">Before</div>
      <div className="space-y-2">
        <div className="h-2 bg-white/10 rounded-full w-3/4" />
        <div className="h-2 bg-white/10 rounded-full w-1/2" />
        <div className="flex items-center gap-2 mt-4 text-xs text-white/40">
          <XCircle className="w-3 h-3" />
          <span>Vendor Chaos</span>
        </div>
      </div>
    </div>
    <div className="bg-[#DBFE01] rounded-2xl p-4 text-[#1a1a1a] shadow-lg transform scale-105">
      <div className="text-xs opacity-60 uppercase mb-2 font-bold">After</div>
      <div className="space-y-2">
        <div className="h-2 bg-black/10 rounded-full w-full" />
        <div className="h-2 bg-black/10 rounded-full w-3/4" />
        <div className="flex items-center gap-2 mt-4 text-xs font-bold">
          <CheckCircle2 className="w-3 h-3" />
          <span>Systemized Growth</span>
        </div>
      </div>
    </div>
  </div>
);

// Final CTA Visual: Roadmap
export const RoadmapPreviewVisual = () => (
  <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-auto transform rotate-2 border border-gray-100">
    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
      <div className="text-sm font-bold text-gray-800">Your Growth Roadmap</div>
      <div className="text-xs text-gray-400">Preview</div>
    </div>
    <div className="space-y-3">
      {[
        "Audit Patient Journey Gaps",
        "Local SEO & GBP Opportunity",
        "Conversion Tracking Setup",
        "Prioritized Fix List"
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border border-[#DBFE01] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#DBFE01]" />
          </div>
          <div className="h-2 bg-gray-100 rounded-full flex-1" />
        </div>
      ))}
    </div>
    <div className="mt-4 pt-3 border-t border-gray-100 text-center">
      <span className="text-xs text-gray-400">Delivered in 24 hours</span>
    </div>
  </div>
);