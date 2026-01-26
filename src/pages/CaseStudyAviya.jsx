import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink, Target, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
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

export default function CaseStudyAviya() {
  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
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
            alt="Telemedicine platform"
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

          <div className="space-y-16">
            {/* Situation */}
            <Section delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                      The Situation
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-sky-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
                      After 2 years and multiple vendor engagements, Aviya Telemed still couldn't ship their telemedicine MVP. The codebase was unstable, scope kept expanding, timelines slipped repeatedly, and technical debt was mounting. Frustration was high, and the window to enter the market was closing.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      They needed a partner who could take over the stalled effort, stabilize what existed, ruthlessly prioritize what mattered, and deliver a production-ready MVP that could actually launch—not in another year, but in months.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Action */}
            <Section delay={0.2}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Our Approach
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-blue-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      We reset the project with extreme focus: stabilize, scope, ship. Here's how we broke the 2-year cycle:
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Took Over Codebase & Delivery',
                          desc: 'Audited existing code, identified critical paths, fixed blocking issues, and removed technical debt that was slowing progress. Established ownership and accountability.'
                        },
                        {
                          title: 'Stabilized Scope',
                          desc: 'Ruthlessly prioritized MVP features, cutting non-essential scope that was expanding the timeline. Defined a clear "done" state and held the line on feature creep.'
                        },
                        {
                          title: 'Accelerated Execution',
                          desc: 'Implemented agile sprint cycles with weekly demos, focusing on shipping functional increments rather than perfect features. Velocity increased immediately.'
                        },
                        {
                          title: 'Production-Grade QA',
                          desc: 'Instituted comprehensive testing protocols—functional, integration, and user acceptance testing—to ensure the MVP was truly launch-ready, not just "done."'
                        },
                        {
                          title: 'Release Readiness',
                          desc: 'Prepared deployment infrastructure, release documentation, and support runbooks so the team could launch confidently without post-launch surprises.'
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
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
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DBFE01] to-sky-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DBFE01] to-sky-500 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DBFE01] to-sky-600 bg-clip-text text-transparent">
                      The Results
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-sky-500/10 border-l-4 border-[#DBFE01]">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      In just 3 months, we delivered what multiple vendors couldn't in 2 years—a production-ready telemedicine MVP:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        { label: '3 Months', desc: 'MVP to production after 2-year stall', color: 'from-sky-500 to-blue-600' },
                        { label: '~87.5% Faster', desc: '24 months reduced to 3', color: 'from-indigo-500 to-violet-600' },
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
                        <Rocket className="w-5 h-5 text-sky-600" />
                        Vendor Reset Success
                      </h4>
                      <p className="text-[#1a1a1a]/70 leading-relaxed">
                        This wasn't just about coding faster—it was about accountability, scope discipline, and shipping mindset. By taking ownership, cutting bloat, and focusing ruthlessly on launch-readiness, we proved that stalled projects can be rescued when execution is prioritized over perfection.
                      </p>
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6">
                      <p className="text-[#1a1a1a]/70 leading-relaxed italic">
                        "Two years of vendor churn taught us this: execution stalls when there's no ownership, no scope control, and no bias for shipping. We brought all three—and delivered a launch-ready MVP in 90 days. That's an 87.5% reduction in time-to-market."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* CTA */}
          <Section delay={0.4}>
            <div className="mt-16 text-center glass-card rounded-3xl p-12 bg-gradient-to-br from-sky-500/5 to-indigo-500/5">
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