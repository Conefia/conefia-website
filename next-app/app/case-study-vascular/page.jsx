import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, ExternalLink, Target, Lightbulb, Zap } from 'lucide-react';
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

export default function CaseStudyVascular() {
  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Vascular Institute Case Study - Healthcare Growth" 
        description="Conefia helped Vascular Institute of Michigan acquire 200+ patients at $20 CAC in 6 months using a multi-channel growth strategy."
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

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
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
                <span className="font-bold text-[#1a1a1a]">{stat.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://vascularim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            vascularim.com
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="relative h-[400px] -mt-8 mb-16 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80"
            alt="Healthcare facility for vascular care"
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
                <p className="text-lg font-semibold text-[#1a1a1a]">Vascular Institute of Michigan</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Healthcare (vascular care)</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Timeline</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">6 months</p>
              </div>
            </div>
          </Section>

          <div className="space-y-16">
            {/* Situation */}
            <Section delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      The Situation
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-blue-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
                      Vascular Institute of Michigan needed to scale patient awareness for their advanced GAE (Genicular Artery Embolization) procedure—a minimally invasive treatment that dramatically improves quality of life for patients with chronic knee pain.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      The challenge was to reach and convert the right audience across multiple digital channels while maintaining healthcare industry cost-efficiency standards—particularly difficult in a specialized medical field with strict compliance requirements and a need for educational content.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Action */}
            <Section delay={0.2}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                      Our Approach
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-emerald-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      We deployed a comprehensive multi-channel growth strategy, treating each platform as part of an integrated acquisition ecosystem:
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Audience Intelligence',
                          desc: 'Segmented audiences by pain points, demographics, and healthcare journey stage to ensure messaging resonated with patients actively seeking solutions.'
                        },
                        {
                          title: 'Creative Testing Framework',
                          desc: 'Developed and tested educational vs. testimonial-driven content across Meta, TikTok, and Google to identify what drove engagement and conversions.'
                        },
                        {
                          title: 'Conversion Tracking & Attribution',
                          desc: 'Implemented robust tracking infrastructure to monitor patient inquiries, appointment bookings, and full-funnel performance across channels.'
                        },
                        {
                          title: 'Continuous Optimization',
                          desc: 'Weekly optimization cycles analyzing creative performance, audience response, and cost-per-acquisition to maximize efficiency and scale winning campaigns.'
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
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
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DBFE01] to-amber-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DBFE01] to-amber-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DBFE01] to-amber-600 bg-clip-text text-transparent">
                      The Results
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-amber-500/10 border-l-4 border-[#DBFE01]">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      Within 6 months, we delivered measurable growth across all key metrics—proving that strategic, data-driven acquisition works even in specialized healthcare verticals:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {[
                        { label: '200+ Patients', desc: 'Confirmed patient acquisitions', color: 'from-blue-500 to-blue-600' },
                        { label: '$20 CAC', desc: 'Industry-leading cost efficiency', color: 'from-emerald-500 to-emerald-600' },
                        { label: '+100% Followers', desc: 'Social media growth', color: 'from-purple-500 to-purple-600' },
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
                        "This wasn't just lead generation—it was sustainable growth. The $20 CAC in healthcare proves that with the right strategy, precision targeting, and continuous optimization, you can scale patient acquisition profitably while building long-term brand equity."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* CTA */}
          <Section delay={0.4}>
            <div className="mt-16 text-center glass-card rounded-3xl p-12 bg-gradient-to-br from-blue-500/5 to-teal-500/5">
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