import React from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ExternalLink, Calendar, Building2, Target } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageUrl } from '@/utils';
import { BreadcrumbStructuredData } from '@/components/StructuredData';

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

export default function VascularimClinicGrowth() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Seo 
        title="Vascular Institute Growth Case Study | Conefia"
        description="How we helped Vascular Institute of Michigan acquire 127 new patients in 90 days with $42 CPA."
        canonical="/case-studies/vascularim-clinic-growth"
      />
      <BreadcrumbStructuredData 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Case Studies', path: '/#case-studies' },
          { label: 'Vascular Institute Growth' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Case Studies', path: createPageUrl('Home') + '#case-studies' },
              { label: 'Vascular Institute Growth' }
            ]}
            theme="dark"
          />
          
          <Section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-[#DBFE01]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#DBFE01]" />
              </div>
              <span className="text-[#DBFE01] font-bold text-sm uppercase tracking-wider">Case Study</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Vascular Institute:<br/>127 Patients, $42 CPA
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl leading-relaxed">
              Digital patient acquisition system for a vascular clinic, driving qualified consultations at scale.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://vascularinstitute.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#DBFE01] text-stone-950 px-6 py-3 rounded-full font-bold hover:bg-[#c5e000] transition-colors"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-stone-950 transition-colors"
              >
                Get Similar Results
              </button>
            </div>
          </Section>

          {/* Metrics Hero Cards */}
          <Section className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#DBFE01]/20 to-[#DBFE01]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#DBFE01]/30">
                <div className="text-5xl font-extrabold text-[#DBFE01] mb-2">127</div>
                <div className="text-lg font-semibold text-white/90">New Patients</div>
                <div className="text-sm text-white/60 mt-1">In 90 Days</div>
              </div>
              
              <div className="bg-gradient-to-br from-[#DBFE01]/20 to-[#DBFE01]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#DBFE01]/30">
                <div className="text-5xl font-extrabold text-[#DBFE01] mb-2">$42</div>
                <div className="text-lg font-semibold text-white/90">Cost Per Acquisition</div>
                <div className="text-sm text-white/60 mt-1">Below Industry Average</div>
              </div>
              
              <div className="bg-gradient-to-br from-[#DBFE01]/20 to-[#DBFE01]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#DBFE01]/30">
                <div className="text-5xl font-extrabold text-[#DBFE01] mb-2">3.2x</div>
                <div className="text-lg font-semibold text-white/90">ROAS</div>
                <div className="text-sm text-white/60 mt-1">Return on Ad Spend</div>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}