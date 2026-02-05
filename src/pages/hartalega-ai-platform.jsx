import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ExternalLink, Calendar, Building2, Target } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageUrl } from '@/utils';

const Section = ({ children, className = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HartalegaAiPlatform() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Seo 
        title="Hartalega AI Platform Case Study | Conefia"
        description="How we validated AI PoCs for Hartalega, a global manufacturing leader."
        canonical="/case-studies/hartalega-ai-platform"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Case Studies', path: createPageUrl('Home') + '#case-studies' },
              { label: 'Hartalega AI' }
            ]}
            theme="dark"
          />
          
          <Section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-[#DBFE01]/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#DBFE01]" />
              </div>
              <span className="text-[#DBFE01] font-bold text-sm uppercase tracking-wider">Case Study</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hartalega:<br/>Validating AI PoCs at Scale
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl leading-relaxed">
              Corporate innovation support for a global manufacturer exploring AI applications.
            </p>
            
            <a 
              href="https://hartalega.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DBFE01] text-stone-950 px-6 py-3 rounded-full font-bold hover:bg-[#c5e000] transition-colors"
            >
              Visit Hartalega
              <ExternalLink className="w-4 h-4" />
            </a>
          </Section>

          {/* Project Details Grid */}
          <Section className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Building2 className="w-8 h-8 text-[#DBFE01] mb-3" />
                <div className="text-sm text-white/60 mb-1">Client</div>
                <div className="text-lg font-bold">Hartalega</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Target className="w-8 h-8 text-[#DBFE01] mb-3" />
                <div className="text-sm text-white/60 mb-1">Industry</div>
                <div className="text-lg font-bold">Manufacturing / AI</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Calendar className="w-8 h-8 text-[#DBFE01] mb-3" />
                <div className="text-sm text-white/60 mb-1">Timeline</div>
                <div className="text-lg font-bold">10 Weeks</div>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}