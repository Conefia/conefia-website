"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink, Target, Lightbulb, Shield } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
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

      {/* Hero Image */}
      <Section>
        <div className="relative h-[400px] -mt-8 mb-16 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80"
            alt="Mobile app development for fintech money transfer app"
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
                <p className="text-lg font-semibold text-[#1a1a1a]">Al-Mahfza</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Fintech / money transfer</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Timeline</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">60 days</p>
              </div>
            </div>
          </Section>

          <div className="space-y-16">
            {/* Situation */}
            <Section delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-lime-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
                      The Situation
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-emerald-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
                      After one year and multiple vendor attempts, Al-Mahfza still couldn't launch their money transfer mobile app. Technical debt was mounting, scope kept changing, and delivery timelines were consistently missed. Meanwhile, regulatory requirements for U.S. money transmission added another layer of complexity that previous vendors couldn't navigate.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      The stakes were high: without a functioning app, they couldn't enter the market. They needed a partner who could not only deliver technically but also understand the compliance landscape and guide them through the regulatory maze—fast.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Action */}
            <Section delay={0.2}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Our Approach
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-teal-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      We reset the delivery plan with three core principles: accountability, clarity, and speed. Here's how we got them unstuck:
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Took Ownership of Delivery',
                          desc: 'Assessed the existing codebase, identified blockers, and created a clear 60-day execution plan with weekly milestones and no scope creep.'
                        },
                        {
                          title: 'Stabilized Technical Foundation',
                          desc: 'Refactored critical paths, resolved performance bottlenecks, and implemented best practices to ensure a stable, scalable codebase that could support long-term growth.'
                        },
                        {
                          title: 'Guided Regulatory Compliance',
                          desc: 'Mapped U.S. money transfer requirements (state licensing, KYC/AML, reporting) and ensured implementation aligned with regulatory expectations—avoiding costly redesigns later.'
                        },
                        {
                          title: 'Shipped Production-Ready App',
                          desc: 'Delivered a fully functioning, optimized mobile app with comprehensive QA, performance testing, and release readiness documentation.'
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
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
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DBFE01] to-green-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DBFE01] to-green-500 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DBFE01] to-green-600 bg-clip-text text-transparent">
                      The Results
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-green-500/10 border-l-4 border-[#DBFE01]">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      In just 60 days, we delivered what multiple vendors couldn't in a year—a production-ready fintech app with regulatory guidance built in:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        { label: '60 Days', desc: 'From reset to production', color: 'from-emerald-500 to-teal-600' },
                        { label: '~83% Faster', desc: 'vs. 12-month vendor cycle', color: 'from-green-500 to-lime-600' },
                      ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-2xl p-6 text-center border border-[#1a1a1a]/10">
                          <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                            {stat.label}
                          </div>
                          <p className="text-[#1a1a1a]/60 text-sm font-medium">{stat.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6 mb-6">
                      <h4 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-600" />
                        Compliance Guidance Delivered
                      </h4>
                      <p className="text-[#1a1a1a]/70 leading-relaxed">
                        Beyond the app itself, we provided a clear roadmap of U.S. money transfer requirements, helping the team understand state licensing needs, KYC/AML implementation, and reporting obligations—de-risking their go-to-market strategy.
                      </p>
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6">
                      <p className="text-[#1a1a1a]/70 leading-relaxed italic">
                        "When execution stalls for a year, the problem isn't just technical—it's accountability, clarity, and speed. We reset all three. The result: a fintech app in production, regulatory confidence, and a partner who ships."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* CTA */}
          <Section delay={0.4}>
            <div className="mt-16 text-center glass-card rounded-3xl p-12 bg-gradient-to-br from-emerald-500/5 to-lime-500/5">
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