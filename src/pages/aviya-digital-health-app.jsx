import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink, Target, Lightbulb, Rocket } from 'lucide-react';
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

export default function Aviya() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Aviya Telemed Case Study - Telemedicine MVP" 
        description="Conefia delivered a production-ready telemedicine MVP in 3 months after the project was stalled for 2 years. 87.5% faster time-to-market."
        canonical="https://conefia.com/aviya-digital-health-app"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10" />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: 'Case Studies', path: null }, { label: 'Aviya Telemed' }]} />

          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6">
            Build
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            MVP delivered in 3 months after 2 years stalled
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Clock, label: 'MVP in 3 months', color: 'text-sky-600' },
              { icon: Zap, label: '~87.5% faster', color: 'text-blue-600' },
              { icon: CheckCircle, label: 'Launch-ready', color: 'text-indigo-600' },
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
            href="https://www.aviyatelemed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            aviyatelemed.com
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="relative h-[400px] -mt-8 mb-16 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80"
            alt="Telemedicine platform MVP development"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>
      </Section>

      {/* Rest of content - keeping existing structure */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Client</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Aviya Telemed</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Telemedicine (mobile MVP)</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Timeline</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">3 months</p>
              </div>
            </div>
          </Section>

          {/* ... rest of existing content ... */}
        </div>
      </section>
    </div>
  );
}