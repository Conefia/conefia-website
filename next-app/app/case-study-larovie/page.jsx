import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, ExternalLink, Target, Lightbulb, Zap, ShoppingBag } from 'lucide-react';
// TODO: REPLACE REACT-ROUTER HOOKS
import { usePathname } from 'next/navigation'; // Auto-inserted suggestion
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

export default function CaseStudyLarovie() {
  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Larovie Beauty Case Study - E-commerce Growth" 
        description="Conefia helped Larovie Beauty acquire 1,500+ customers in 3 months with AED 32 CAC. End-to-end Shopify build and growth marketing."
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

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Client</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Larovie Beauty</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">E-commerce (Shopify)</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Timeline</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">3 months</p>
              </div>
            </div>
          </Section>

          <div className="space-y-16">
            {/* Situation */}
            <Section delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-red-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                      The Situation
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-amber-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
                      Larovie Beauty had a vision: launch a premium beauty brand in the competitive UAE market and achieve rapid, profitable growth. But they started from zero—no store, no brand identity, no customer base, and no proven acquisition channels.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      The challenge was to compress what typically takes 12-18 months into a few months: build a conversion-optimized Shopify store, establish a memorable brand, and scale customer acquisition profitably across Meta, TikTok, and Google—all while maintaining unit economics that support sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Action */}
            <Section delay={0.2}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-rose-500 to-pink-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                      Our Approach
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-rose-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      We executed an end-to-end launch across all four phases of our playbook—from idea validation to scaled growth:
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          phase: 'Validate',
                          title: 'Market Research & Brand Foundation',
                          desc: 'Analyzed target market, identified positioning gaps, and crafted a brand identity that resonates with UAE beauty consumers—from visual language to messaging strategy.'
                        },
                        {
                          phase: 'Build',
                          title: 'Shopify Store & CRO Optimization',
                          desc: 'Built a high-converting Shopify store with optimized product pages, streamlined checkout, mobile-first design, and integrated analytics for data-driven decision making.'
                        },
                        {
                          phase: 'Launch',
                          title: 'Digital Presence & Launch Readiness',
                          desc: 'Established social profiles, created launch content, set up tracking infrastructure, and prepared acquisition campaigns for immediate post-launch activation.'
                        },
                        {
                          phase: 'Grow',
                          title: 'Multi-Channel Acquisition Engine',
                          desc: 'Deployed full-funnel campaigns across Meta, TikTok, and Google with continuous testing, optimization, and scaling of winning creative and audiences to drive profitable growth.'
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                              {i + 1}
                            </div>
                            {i < 3 && <div className="w-0.5 h-8 bg-gradient-to-b from-rose-500 to-pink-500 mt-2" />}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">{item.phase}</div>
                            <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Results */}
            <Section delay={0.3}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DBFE01] to-orange-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DBFE01] to-orange-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DBFE01] to-orange-600 bg-clip-text text-transparent">
                      The Results
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-orange-500/10 border-l-4 border-[#DBFE01]">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      Within 3 months, Larovie Beauty went from zero to a thriving e-commerce brand with proven traction and sustainable unit economics:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {[
                        { label: '1,500+ Customers', desc: 'Paying customers acquired', color: 'from-amber-500 to-orange-600' },
                        { label: '50% MoM', desc: 'Revenue growth rate', color: 'from-rose-500 to-pink-600' },
                        { label: 'AED 32 CAC', desc: 'Profitable acquisition cost', color: 'from-emerald-500 to-teal-600' },
                      ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-2xl p-6 text-center border border-[#1a1a1a]/10">
                          <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                            {stat.label}
                          </div>
                          <p className="text-[#1a1a1a]/60 text-sm font-medium">{stat.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6">
                      <p className="text-[#1a1a1a]/70 leading-relaxed italic">
                        "This is the power of end-to-end execution: from brand conception to profitable customer acquisition in 90 days. By building the store, brand, and growth engine together—not sequentially—we created a launch-ready business that could scale from day one. The 50% month-over-month revenue growth proves the model works."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* CTA */}
          <Section delay={0.4}>
            <div className="mt-16 text-center glass-card rounded-3xl p-12 bg-gradient-to-br from-amber-500/5 to-red-500/5">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Want similar results?</h3>
            <button 
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
            >
              Book roadmap call
              <TrendingUp className="w-5 h-5" />
            </button>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}