import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, DollarSign, Target, ExternalLink, Lightbulb, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

function Section({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Hartalega() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Hartalega Case Study - AI Transformation & PoCs" 
        description="Conefia delivered validated AI PoCs for Hartalega in 3 months with 5× ROI. Multi-use-case program across predictive maintenance and quality."
        canonical="https://conefia.com/case-studies/hartalega-ai-platform"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: 'Case Studies', path: null }, { label: 'Hartalega' }]} />

          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
            Build
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Validated AI PoCs in 3 months with 5× ROI
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Target, label: 'Validated in 3 months', color: 'text-indigo-600' },
              { icon: DollarSign, label: '5× ROI', color: 'text-violet-600' },
              { icon: CheckCircle, label: 'Multi-PoC program', color: 'text-purple-600' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="font-bold text-[#1a1a1a]">{stat.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://hartalega.com.my"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            hartalega.com.my
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Content - keeping rest of existing code */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... existing content ... */}
        </div>
      </section>
    </div>
  );
}