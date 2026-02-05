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
        canonical="https://conefia.com/case-studies/aviya-digital-health-app"
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
                      After two years of development with multiple vendors, Aviya Telemed's telemedicine platform was still incomplete. The codebase was unstable, features were half-implemented, and launch kept getting pushed back. The team was frustrated, their budget was stretched, and they needed a partner who could finally deliver.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      They needed more than just technical expertise—they needed someone to take ownership, cut through the confusion, and ship a production-ready MVP that could actually serve patients. The stakes were high: without a functioning platform, they couldn't enter the market.
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
                      We reset the project with a clear focus: deliver a working MVP in 3 months. No scope creep, no excuses.
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Ruthless Prioritization',
                          desc: 'Audited the existing codebase, identified what was salvageable, and built a focused MVP roadmap. We cut features that weren't critical to launch and focused only on core telemedicine functionality: patient registration, doctor consultations, and secure video calls.'
                        },
                        {
                          title: 'Technical Reset',
                          desc: 'Stabilized the unstable codebase, fixed critical bugs, and implemented proper architecture patterns. We ensured the platform could handle real patient load and scale post-launch.'
                        },
                        {
                          title: 'Rapid Iteration',
                          desc: 'Weekly demos with the client to ensure alignment and fast feedback loops. Every sprint delivered visible progress, rebuilding confidence that the project was actually moving forward.'
                        },
                        {
                          title: 'Launch Readiness',
                          desc: 'Comprehensive testing, performance optimization, and documentation. We didn't just build features—we delivered a production-ready platform ready to serve real patients from day one.'
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
                      We delivered what two years of development couldn't—a production-ready telemedicine MVP in just 3 months:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        { label: '3 Months', desc: 'From reset to launch', color: 'from-sky-500 to-blue-600' },
                        { label: '~87.5% Faster', desc: 'vs. 2-year timeline', color: 'from-indigo-500 to-cyan-600' },
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
                        Launch-Ready Platform
                      </h4>
                      <p className="text-[#1a1a1a]/70 leading-relaxed">
                        The platform wasn't just "done"—it was production-ready from day one. Stable, secure, performant, and fully documented. Aviya Telemed could start serving patients immediately, with confidence that the platform would hold up under real-world usage.
                      </p>
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6">
                      <p className="text-[#1a1a1a]/70 leading-relaxed italic">
                        "Two years of frustration, resolved in 90 days. When you need to actually ship—not just talk about shipping—this is how it's done. Clear priorities, stable execution, and a partner who takes ownership until it's live."
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