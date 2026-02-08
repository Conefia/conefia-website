import React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { PERSONAS } from '@/components/data/personas';
import { usePersona } from '@/components/context/PersonaContext';

const SOLUTION_STYLES = [
  { gradient: 'from-violet-500 via-purple-500 to-fuchsia-500', iconBg: 'from-violet-400 to-purple-500', glow: 'shadow-violet-500/50' },
  { gradient: 'from-blue-500 via-cyan-500 to-teal-500', iconBg: 'from-blue-400 to-cyan-500', glow: 'shadow-cyan-500/50' },
  { gradient: 'from-emerald-500 via-green-500 to-lime-500', iconBg: 'from-emerald-400 to-green-500', glow: 'shadow-emerald-500/50' },
  { gradient: 'from-orange-500 via-amber-500 to-yellow-400', iconBg: 'from-orange-400 to-yellow-500', glow: 'shadow-amber-500/50' }
];

export default function ProblemSolution({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { selectedPersona, selectedPersonaId, setSelectedPersonaId } = usePersona();

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#track=')) {
      const trackId = hash.replace('#track=', '');
      const personaExists = PERSONAS.find(p => p.id === trackId);
      if (personaExists) {
        setSelectedPersonaId(trackId);
      }
    }
  }, [setSelectedPersonaId]);

  const handlePersonaClick = (e, id) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    
    e.preventDefault();
    setSelectedPersonaId(id);
    window.history.replaceState(null, null, `#track=${id}`);
    
    base44.analytics.track({
      eventName: "persona_select",
      properties: { persona: id }
    });
  };

  const handleCtaClick = (ctaType) => {
     base44.analytics.track({
      eventName: "cta_click",
      properties: { 
        persona: selectedPersona.id,
        cta_type: ctaType,
        destination: selectedPersona.destination
      }
    });
  };

  return (
    <section id="track-selector" ref={ref} className="py-16 md:py-24 relative overflow-hidden bg-[#F4F4F5]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-12">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
            Choose your track
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 leading-tight">
            What are you building right now?
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 font-medium max-w-3xl mx-auto">
            Pick your track and we’ll show the biggest bottleneck we typically see — plus the plan to fix it.
          </p>
        </motion.div>

        {/* Persona Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {PERSONAS.map((persona) => (
            <a
              key={persona.id}
              href={createPageUrl(persona.destination)}
              onClick={(e) => handlePersonaClick(e, persona.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border inline-block cursor-pointer no-underline ${
                selectedPersonaId === persona.id 
                  ? 'bg-[#DBFE01] text-[#1a1a1a] border-[#DBFE01] shadow-lg scale-105' 
                  : 'bg-white text-[#1a1a1a]/70 border-gray-200 hover:border-[#1a1a1a]/30 hover:bg-gray-50'
              }`}
            >
              {persona.label}
            </a>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPersona.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16"
          >
            {/* Problem */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-10 h-full border border-red-100 shadow-xl shadow-red-900/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-30" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 border border-red-100 shadow-sm">
                    <X className="w-4 h-4" />
                    The Problem
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                    {selectedPersona.problemTitle}
                  </h3>
                  <ul className="space-y-5">
                    {selectedPersona.problems.map((problem, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="text-[#1a1a1a] font-semibold leading-relaxed">{problem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="relative">
               {/* Animated gradient glow background */}
               <div className="absolute inset-0 opacity-15 blur-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#DBFE01] via-emerald-400 to-cyan-400" />

              <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full border border-[#DBFE01] shadow-2xl shadow-[#DBFE01]/10 overflow-hidden ring-1 ring-[#DBFE01]/20">
                
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-[#DBFE01]" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 text-[#1a1a1a] text-sm font-bold mb-6 border border-[#DBFE01]/30 shadow-sm">
                  <Check className="w-4 h-4" />
                  The Solution
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                   {selectedPersona.solutionTitle}
                </h3>

                {selectedPersona.solutionSubtitle && (
                   <p className="text-[#1a1a1a]/80 font-medium mb-8 -mt-4 text-lg border-l-4 border-[#DBFE01] pl-4 italic">
                       "{selectedPersona.solutionSubtitle}"
                   </p>
                )}

                <div className="grid grid-cols-2 gap-4">
                  {selectedPersona.solutions.map((solution, index) => {
                    const styleData = SOLUTION_STYLES[index % SOLUTION_STYLES.length];
                    const Icon = solution.icon || HelpCircle;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="group relative"
                      >
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
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Link 
                        to={createPageUrl(selectedPersona.destination)}
                        onClick={() => handleCtaClick('primary')}
                        className="btn-primary px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 text-center shadow-lg shadow-[#DBFE01]/20"
                    >
                        {selectedPersona.primaryCta}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    {selectedPersona.secondaryCta && (
                        <Link 
                            to={createPageUrl(selectedPersona.destination)}
                            onClick={() => handleCtaClick('secondary')}
                            className="px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 text-center border border-gray-200 bg-white text-[#1a1a1a] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            {selectedPersona.secondaryCta}
                        </Link>
                    )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}