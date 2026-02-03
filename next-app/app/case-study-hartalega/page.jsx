import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, DollarSign, Target, ExternalLink, Lightbulb, Zap, Brain } from 'lucide-react';
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

export default function CaseStudyHartalega() {
  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Hartalega Case Study - AI Transformation & PoCs" 
        description="Conefia delivered validated AI PoCs for Hartalega in 3 months with 5× ROI. Multi-use-case program across predictive maintenance and quality."
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

      {/* Hero Image */}
      <Section>
        <div className="relative h-[400px] -mt-8 mb-16 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80"
            alt="AI and manufacturing operations"
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
                <p className="text-lg font-semibold text-[#1a1a1a]">Hartalega</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Manufacturing / operations (AI & data science)</p>
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
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      The Situation
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-indigo-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
                      Hartalega, a global leader in manufacturing, knew AI could transform their operations—but they needed more than strategy slides. They needed a credible, execution-ready roadmap and rapid proof of value through real, working PoCs across predictive maintenance, quality optimization, and process automation.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      The challenge: move from ambition to action. Build a 3-year AI transformation strategy grounded in operational reality, then validate it quickly with measurable PoCs that prove ROI—not theoretical models, but deployed solutions that deliver business impact.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Action */}
            <Section delay={0.2}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      Our Approach
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-violet-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      We combined strategic planning with rapid execution—building the roadmap and proving it simultaneously:
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          title: '3-Year AI Transformation Strategy',
                          desc: 'Designed a phased roadmap aligned with operational priorities: quick wins in Year 1 (predictive maintenance), scaling in Year 2 (quality optimization), and advanced use cases in Year 3 (AI agents for autonomous optimization).'
                        },
                        {
                          title: 'Predictive Maintenance PoC',
                          desc: 'Built and deployed a predictive maintenance model analyzing sensor data to forecast equipment failures before they happen—reducing downtime and maintenance costs.'
                        },
                        {
                          title: 'Predictive Quality PoC',
                          desc: 'Developed a quality prediction system using production data to identify defects early in the manufacturing process, improving yield and reducing waste.'
                        },
                        {
                          title: 'AI Agents for Process Optimization',
                          desc: 'Created intelligent agents that monitor production workflows and recommend real-time optimizations—demonstrating how AI can drive continuous improvement autonomously.'
                        },
                        {
                          title: 'ROI Measurement Framework',
                          desc: 'Established clear evaluation criteria and ROI tracking for each PoC, ensuring business impact was quantified—not just technical feasibility.'
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 mt-1">
                            <Brain className="w-5 h-5 text-white" />
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
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DBFE01] to-indigo-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DBFE01] to-indigo-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DBFE01] to-indigo-600 bg-clip-text text-transparent">
                      The Results
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-indigo-500/10 border-l-4 border-[#DBFE01]">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      In just 3 months, we moved from strategy to validated PoCs with measurable business impact:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        { label: '3 Months', desc: 'Strategy to validated PoCs', color: 'from-indigo-500 to-violet-600' },
                        { label: '5× ROI', desc: 'Measured business impact', color: 'from-purple-500 to-fuchsia-600' },
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
                        <Brain className="w-5 h-5 text-indigo-600" />
                        Multi-Use-Case AI Program
                      </h4>
                      <p className="text-[#1a1a1a]/70 leading-relaxed">
                        Rather than a single PoC, we delivered a portfolio of validated use cases across maintenance, quality, and optimization—demonstrating AI's potential across the entire value chain and building internal capability simultaneously.
                      </p>
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6">
                      <p className="text-[#1a1a1a]/70 leading-relaxed italic">
                        "This is how AI transformation should work: strategy grounded in operations, rapid PoCs that prove value, and ROI measurement from day one. Not slideware—deployed systems that deliver 5× returns and build momentum for scale."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* CTA */}
          <Section delay={0.4}>
            <div className="mt-16 text-center glass-card rounded-3xl p-12 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
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