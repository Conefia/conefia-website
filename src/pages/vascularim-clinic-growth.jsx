import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, ExternalLink, Target, Lightbulb, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BreadcrumbStructuredData, ServiceStructuredData } from '@/components/StructuredData';

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

export default function Vascular() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Vascular Institute Case Study - Healthcare Growth" 
        description="Conefia helped Vascular Institute of Michigan acquire 200+ patients at $20 CAC in 6 months using a multi-channel growth strategy."
        canonical="https://conefia.com/case-studies/vascularim-clinic-growth"
      />
      <BreadcrumbStructuredData items={[{ label: 'Home', path: '/' }, { label: 'Case Studies', path: '/#case-studies' }, { label: 'Vascular Institute' }]} />
      <ServiceStructuredData 
        name="Healthcare Growth Strategy - Vascular Institute Case Study" 
        description="200+ patients at $20 CAC in 6 months using multi-channel growth strategy" 
        url="https://conefia.com/case-studies/vascularim-clinic-growth" 
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10" />
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: 'Case Studies', path: null }, { label: 'Vascular Institute' }]} />

          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
            Growth
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2F2F2F] mb-6 leading-tight">
            200+ patients at $20 CAC in 6 months
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Users, label: '200+ patients', color: 'text-blue-600' },
              { icon: DollarSign, label: '$20 CAC', color: 'text-emerald-600' },
              { icon: TrendingUp, label: '+100% followers', color: 'text-purple-600' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="font-bold text-[#2F2F2F]">{stat.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://vascularim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2F2F2F]/60 hover:text-[#DBFE01] transition-colors"
          >
            vascularim.com
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