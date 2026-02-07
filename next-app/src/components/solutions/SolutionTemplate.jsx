"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Sparkles, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { base44 } from '@/api/base44Client';
import Seo from '@/components/Seo';

const SOLUTION_STYLES = [
  { gradient: 'from-violet-500 via-purple-500 to-fuchsia-500', iconBg: 'from-violet-400 to-purple-500', glow: 'shadow-violet-500/50' },
  { gradient: 'from-blue-500 via-cyan-500 to-teal-500', iconBg: 'from-blue-400 to-cyan-500', glow: 'shadow-cyan-500/50' },
  { gradient: 'from-emerald-500 via-green-500 to-lime-500', iconBg: 'from-emerald-400 to-green-500', glow: 'shadow-emerald-500/50' },
  { gradient: 'from-orange-500 via-amber-500 to-yellow-400', iconBg: 'from-orange-400 to-yellow-500', glow: 'shadow-amber-500/50' }
];

export default function SolutionTemplate({ persona }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!persona) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Seo 
        title={`${persona.label} - Solutions`} 
        description={persona.solutionTitle}
        canonical={persona.destination}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
            <span className="bg-[#DBFE01] text-[#1a1a1a] mb-6 px-4 py-2 text-sm font-bold rounded-full inline-block uppercase tracking-wider">
                {persona.label}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight max-w-4xl mx-auto">
                {persona.solutionTitle}
            </h1>
            <p className="text-xl text-[#1a1a1a]/70 font-medium max-w-3xl mx-auto">
                {persona.solutionSubtitle}
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
            {/* Problem */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full border-red-200/50 bg-red-50/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-50" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6 border border-red-200">
                    <X className="w-4 h-4" />
                    The Bottleneck
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                    {persona.problemTitle}
                  </h3>
                  <ul className="space-y-5">
                    {persona.problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="text-[#1a1a1a] font-semibold leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="relative">
               <div className="absolute inset-0 opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600" />

              <div className="relative glass-card rounded-3xl p-8 md:p-10 h-full border-2 border-transparent bg-gradient-to-br from-white via-white to-[#DBFE01]/5 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 opacity-20" />
                
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-[#DBFE01]" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#DBFE01]/30 to-[#DBFE01]/10 text-[#1a1a1a] text-sm font-semibold mb-6 border-2 border-[#DBFE01]/40">
                  <Check className="w-4 h-4" />
                  The Fix
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {persona.solutions.map((solution, index) => {
                    const styleData = SOLUTION_STYLES[index % SOLUTION_STYLES.length];
                    const Icon = solution.icon || HelpCircle;
                    return (
                      <div key={index} className="group relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${styleData.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                        <div className="relative p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 group-hover:border-gray-200 group-hover:shadow-lg transition-all duration-300 h-full">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${styleData.iconBg} flex items-center justify-center mb-3 shadow-md ${styleData.glow}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <p className="font-bold text-[#1a1a1a] text-sm mb-1 leading-tight">
                            {solution.title}
                          </p>
                          <p className="text-xs text-[#1a1a1a]/70 font-medium leading-snug">{solution.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 text-center w-full sm:w-auto shadow-xl shadow-[#DBFE01]/20 hover:shadow-[#DBFE01]/40">
                        {persona.primaryCta}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}