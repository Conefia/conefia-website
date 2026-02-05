import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink, Target, Lightbulb, Shield } from 'lucide-react';
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

export default function AlMahfza() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Al-Mahfza Case Study - Fintech App Development" 
        description="How Conefia helped Al-Mahfza ship a mobile money transfer app in 60 days after being stuck for a year. 83% faster delivery with compliance guidance."
        canonical="https://conefia.com/case-studies/al-mahfza-fintech-app"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-lime-500/10" />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: 'Case Studies', path: null }, { label: 'Al-Mahfza' }]} />

          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
            Build
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Mobile app shipped in 60 days after 1 year stuck
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Clock, label: 'Shipped in 60 days', color: 'text-emerald-600' },
              { icon: Zap, label: '~83% faster', color: 'text-green-600' },
              { icon: CheckCircle, label: 'Compliance guidance', color: 'text-lime-600' },
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
            href="https://al-mahfza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            al-mahfza.com
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