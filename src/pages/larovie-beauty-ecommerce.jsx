import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, ExternalLink, Calendar, Building2, Target } from 'lucide-react';
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

export default function LarovieBeautyEcommerce() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Seo 
        title="Larovie Beauty Case Study | Conefia"
        description="How we scaled Larovie's Shopify store with strategic CRO and paid ads management."
        canonical="/case-studies/larovie-beauty-ecommerce"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Case Studies', path: createPageUrl('Home') + '#case-studies' },
              { label: 'Larovie Beauty' }
            ]}
            theme="dark"
          />
          
          <Section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-[#DBFE01]/10 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-[#DBFE01]" />
              </div>
              <span className="text-[#DBFE01] font-bold text-sm uppercase tracking-wider">Case Study</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Larovie Beauty:<br/>E-Commerce Growth System
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl leading-relaxed">
              Shopify optimization and paid ads management for a fast-growing beauty brand.
            </p>
          </Section>

          {/* Metrics Hero Cards */}
          <Section className="mt-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#DBFE01]/20 to-[#DBFE01]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#DBFE01]/30">
                <div className="text-5xl font-extrabold text-[#DBFE01] mb-2">2,847</div>
                <div className="text-lg font-semibold text-white/90">New Customers</div>
                <div className="text-sm text-white/60 mt-1">In 6 Months</div>
              </div>
              
              <div className="bg-gradient-to-br from-[#DBFE01]/20 to-[#DBFE01]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#DBFE01]/30">
                <div className="text-5xl font-extrabold text-[#DBFE01] mb-2">$18</div>
                <div className="text-lg font-semibold text-white/90">Customer Acquisition Cost</div>
                <div className="text-sm text-white/60 mt-1">Profitable from Day 1</div>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}