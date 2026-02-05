import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, ExternalLink, Target, Lightbulb, Zap, ShoppingBag } from 'lucide-react';
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

export default function Larovie() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Larovie Beauty Case Study - E-commerce Growth" 
        description="Conefia helped Larovie Beauty acquire 1,500+ customers in 3 months with AED 32 CAC. End-to-end Shopify build and growth marketing."
        canonical="https://conefia.com/case-studies/larovie-beauty-ecommerce"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-red-500/10" />
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: 'Case Studies', path: null }, { label: 'Larovie Beauty' }]} />

          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white text-sm font-bold mb-6">
            Idea → Growth
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            1,500+ customers in 3 months with AED 32 CAC
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Users, label: '+1,500 customers', color: 'text-amber-600' },
              { icon: TrendingUp, label: '50% MoM growth', color: 'text-orange-600' },
              { icon: DollarSign, label: 'AED 32 CAC', color: 'text-red-600' },
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
            href="https://larovie.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            larovie.ae
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="relative h-[400px] -mt-8 mb-16 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop&q=80"
            alt="Beauty products and e-commerce"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>
      </Section>

      {/* Content - keeping rest of existing code */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... existing content ... */}
        </div>
      </section>
    </div>
  );
}