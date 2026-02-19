import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  ArrowRight, Check, X, Clock, Layers, Bot, Code2,
  Rocket, ShieldCheck, Zap, GitBranch, BarChart2, Users, ChevronDown
} from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContourBackground from '@/components/visual/ContourBackground';
import { BreadcrumbStructuredData } from '@/components/StructuredData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Reveal = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-5 h-5 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-[#1a1a1a]" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>
);

const DarkCheckItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-5 h-5 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-[#DBFE01]" />
    </div>
    <span className="text-white/80 font-medium leading-relaxed">{children}</span>
  </li>
);

const XItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <X className="w-3 h-3 text-red-500" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>
);

export default function AiSaasMvpLaunch() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-['Poppins',sans-serif]">
      <Seo
        title="AI SaaS MVP Development — Ship in 8–12 Weeks | Conefia"
        description="Ship a pilot-ready AI product in 8–12 weeks. From idea to scoped MVP to live pilots — without rework. LLM, RAG, agents, full-stack. Book your AI MVP roadmap call."
        canonical="/ai-saas-mvp-launch"
      />
      <BreadcrumbStructuredData items={[{ label: 'Home', path: '/' }, { label: 'Solutions', path: '/#playbook' }, { label: 'AI SaaS MVP Launch' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://conefia.com/ai-saas-mvp-launch/#service",
          "name": "AI SaaS MVP Development",
          "serviceType": "AI MVP development",
          "provider": { "@id": "https://conefia.com/#organization" },
          "url": "https://conefia.com/ai-saas-mvp-launch",
          "areaServed": "Worldwide",
          "offers": { "@type": "Offer", "url": "https://conefia.com/book", "price": "0", "priceCurrency": "USD", "description": "Start with a free AI MVP roadmap call" }
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Do you work with non-technical founders?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We translate AI complexity into product decisions and execution." } },
            { "@type": "Question", "name": "Can you work with our internal team?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We can lead delivery, augment your team, or act as architecture advisors." } },
            { "@type": "Question", "name": "What if we already built something?", "acceptedAnswer": { "@type": "Answer", "text": "We audit your current stack and either refactor strategically or scope a clean MVP around what works." } },
            { "@type": "Question", "name": "What AI technologies do you use?", "acceptedAnswer": { "@type": "Answer", "text": "We're stack-agnostic and outcome-driven. We choose based on your use case, data needs, performance requirements, and budget." } }
          ]
        })}}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 bg-stone-950" />
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(219,254,1,0.14), transparent 60%), radial-gradient(circle at 20% 80%, rgba(219,254,1,0.08), transparent 50%)' }} />
        <ContourBackground className="opacity-80" />
        <div className="absolute top-[20%] right-[25%] w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(219,254,1,0.15) 0%, transparent 60%)', filter: 'blur(80px)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11,16,32,0.4) 100%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 w-full">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Solutions', path: createPageUrl('Home') + '#playbook' }, { label: 'AI SaaS MVP Launch' }]} theme="dark" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-6 backdrop-blur-sm">
                <Bot className="w-4 h-4 text-[#DBFE01]" />
                <span className="text-sm font-semibold text-[#DBFE01]">AI SaaS MVP Development</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Ship a Pilot-Ready<br />
                <span className="text-[#DBFE01]">AI Product</span><br />
                In 8–12 Weeks
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/70 leading-relaxed mb-6 max-w-xl">
                From idea → scoped MVP → live pilots. Without rework.
              </motion.p>

              <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="space-y-2 mb-8">
                {['Lock MVP scope fast', 'Design production-ready AI architecture', 'Ship a pilot-ready product in 8–12 weeks', 'Launch with early users and measurable traction'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <Check className="w-4 h-4 text-[#DBFE01] flex-shrink-0" /> {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:scale-105 transition-all">
                  Book Your AI MVP Roadmap Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3 mt-8">
                {['LLM + RAG + Agents', 'Scope lock', 'Weekly demos', 'Pilot-ready launch'].map((chip, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Check className="w-3 h-3 text-[#DBFE01]" /> {chip}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Hero Image */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
                  alt="AI SaaS MVP development"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                {/* Floating stat cards */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                  <div className="text-[#DBFE01] font-extrabold text-2xl">8–12 wks</div>
                  <div className="text-white/70 text-xs font-medium">From idea to pilot</div>
                </div>
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                  <div className="text-[#DBFE01] font-extrabold text-2xl">2–4 wks</div>
                  <div className="text-white/70 text-xs font-medium">First pilots live</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#DBFE01] px-3 py-1 rounded-full mb-4">Who This Is For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">You're likely...</h2>
            <p className="text-lg text-[#1a1a1a]/60 max-w-2xl mx-auto font-medium">You don't need another prototype. You need a pilot-ready product that generates real validation and revenue.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Bot, label: 'A founder building an AI SaaS and stuck between idea and shipping' },
              { icon: Code2, label: 'A technical team experimenting with LLMs but lacking product clarity' },
              { icon: Rocket, label: 'A startup with a prototype but no paying pilots' },
              { icon: Layers, label: 'A company adding AI to an existing SaaS but unsure how to scope it' },
              { icon: GitBranch, label: 'An AI team overwhelmed by architecture choices (RAG? fine-tuning? agents?)' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.07} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <p className="font-medium text-[#1a1a1a]/80 leading-relaxed">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-red-100 text-red-600 px-3 py-1 rounded-full mb-4">The Real Problem With AI MVPs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Most AI SaaS projects stall because...</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                {
                  num: '1', title: 'Scope Keeps Expanding',
                  quote: '"Let\'s just add one more AI feature…"',
                  desc: 'Scope creep kills velocity and clarity.'
                },
                {
                  num: '2', title: 'Architecture Is Chosen Before Outcomes',
                  desc: 'Teams pick tools before defining what success looks like, what users actually need, and what must be production-safe.'
                },
                {
                  num: '3', title: 'AI Experiments ≠ Product',
                  desc: 'A working prompt or agent isn\'t a product. You still need UX, guardrails, data pipelines, monitoring, billing & onboarding.'
                },
                {
                  num: '4', title: 'No Clear Pilot Path',
                  desc: 'You\'re building — but not landing customers. That\'s where most AI SaaS teams lose months.'
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 font-bold text-red-500 text-sm">{item.num}</div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                      {item.quote && <p className="text-red-500 italic text-sm mb-1">{item.quote}</p>}
                      <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="relative hidden md:block">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80"
                  alt="AI development challenges"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-50 border border-red-100 rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-red-600 font-bold text-sm italic max-w-[220px]">"Scope creep is the #1 reason AI startups run out of runway before they reach PMF."</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section id="solution" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
                  alt="Ship AI MVP you can defend"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#DBFE01] rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-[#1a1a1a] font-extrabold text-lg">Not a hackathon demo.</p>
                <p className="text-[#1a1a1a]/70 text-sm font-medium">A defensible MVP that wins pilots.</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 text-[#1a1a1a] text-sm font-bold mb-6 border border-[#DBFE01]/30">
                <ShieldCheck className="w-4 h-4" /> What You Get Instead
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Ship an AI MVP You Can Defend</h2>
              <p className="text-gray-600 leading-relaxed mb-8">A clear, outcome-driven MVP that can support paying pilots — with proper AI architecture, guardrails, and a real launch system.</p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                <ul className="space-y-3">
                  {[
                    'A locked "must-have" scope tied to user value',
                    'Practical AI architecture (LLMs, RAG, evals, monitoring)',
                    'Secure and scalable foundations',
                    'Clean onboarding + positioning for pilots',
                    'Weekly demos and stage gates',
                    'Launch support with real users',
                  ].map((f, i) => <CheckItem key={i}>{f}</CheckItem>)}
                </ul>
              </div>

              <Link to={createPageUrl('book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:scale-105 transition-all">
                Book Your AI MVP Roadmap Call <ArrowRight className="w-5 h-5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4-PHASE FRAMEWORK ── */}
      <section className="py-24 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#DBFE01] px-3 py-1 rounded-full mb-4">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Our 4-Phase AI MVP Framework</h2>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                phase: 'Phase 1', weeks: 'Week 1–2', title: 'Scope Lock',
                items: ['Ideal pilot customer', 'Core workflow', '1–2 high-impact AI use cases', 'Clear success metrics', 'What NOT to build'],
                deliverable: 'AI MVP Blueprint · Prioritized feature map · Success metrics tied to revenue or usage',
                color: 'bg-blue-50 border-blue-100',
                badge: 'bg-blue-100 text-blue-700'
              },
              {
                phase: 'Phase 2', weeks: 'Week 2–3', title: 'AI Architecture Design',
                items: ['LLM selection strategy', 'RAG / agent design (if needed)', 'Prompt architecture', 'Evaluation framework', 'Logging & monitoring plan', 'Cost model'],
                deliverable: 'This prevents re-architecture later.',
                color: 'bg-purple-50 border-purple-100',
                badge: 'bg-purple-100 text-purple-700'
              },
              {
                phase: 'Phase 3', weeks: 'Week 3–10', title: 'Build Sprint',
                items: ['Core product workflow', 'AI logic & guardrails', 'Backend + API', 'Frontend experience', 'Admin controls', 'Telemetry & evaluation tracking'],
                deliverable: 'Weekly demos · Clear stage gates · Transparent progress · No drift',
                color: 'bg-amber-50 border-amber-100',
                badge: 'bg-amber-100 text-amber-700'
              },
              {
                phase: 'Phase 4', weeks: 'Week 10–12', title: 'Pilot Launch',
                items: ['Landing page + positioning', 'Onboarding flow', 'Analytics dashboards', 'Early pilot tracking', 'Feedback loops'],
                deliverable: "You don't just ship. You launch.",
                color: 'bg-emerald-50 border-emerald-100',
                badge: 'bg-emerald-100 text-emerald-700'
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`rounded-2xl border p-6 md:p-8 ${p.color}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${p.badge}`}>{p.phase} · {p.weeks}</span>
                      <h3 className="text-xl font-bold text-[#1a1a1a]">{p.title}</h3>
                    </div>
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        {p.items.map((it, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-[#1a1a1a]/75 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#DBFE01]/30 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#1a1a1a]" />
                            </div>
                            {it}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/40 mb-1">Deliverable</p>
                        <p className="text-sm font-medium text-[#1a1a1a]/80 leading-relaxed">{p.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        <ContourBackground className="opacity-60" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11,16,32,0.5) 100%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#DBFE01]/10 text-[#DBFE01] px-3 py-1 rounded-full border border-[#DBFE01]/30 mb-6">Outcomes You Can Expect</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Typical results:</h2>
              <ul className="space-y-4">
                {[
                  'MVP shipped in 8–12 weeks',
                  'First pilots live within 2–4 weeks post-build',
                  'Clear product metrics (activation, usage, retention)',
                  'Reduced AI rework due to proper architecture',
                  'Investor-ready demo + roadmap',
                ].map((item, i) => <DarkCheckItem key={i}>{item}</DarkCheckItem>)}
              </ul>
              <Link to={createPageUrl('book')} className="mt-10 btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:scale-105 transition-all">
                Book Your AI MVP Roadmap Call <ArrowRight className="w-5 h-5" />
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: BarChart2, title: 'Investor-Ready Traction', desc: 'Pilot metrics, activation data, and roadmap — all defensible.' },
                  { icon: ShieldCheck, title: 'Production-Grade Architecture', desc: 'Not a hackathon demo. Built with observability, guardrails, and cost awareness.' },
                  { icon: Users, title: 'Real Paying Pilots', desc: 'Launch system included: onboarding, positioning, and analytics from day one.' },
                ].map((card, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#DBFE01]/10 flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-5 h-5 text-[#DBFE01]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{card.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#DBFE01] px-3 py-1 rounded-full mb-4">What Makes Our AI Approach Different</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">We design for production, not demos.</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'We Design for Production, Not Demos',
                desc: 'Many AI builds break under real usage. We build with observability, guardrails, evaluation loops, and cost awareness.',
                img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
              },
              {
                title: 'We Tie AI to Real Value',
                desc: 'Every AI feature must map to revenue, retention, efficiency, or a clear user outcome. No novelty features.',
                img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80'
              },
              {
                title: 'One Team, One Owner',
                desc: 'Product + AI + engineering + launch under one backlog. No vendor sprawl. No finger-pointing.',
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <img src={card.img} alt={card.title} className="w-full h-44 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-[#1a1a1a] mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-24 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#DBFE01] px-3 py-1 rounded-full mb-4">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Everything to build, ship, and win pilots.</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1a1a1a] mb-4 text-lg">Core Sprint</h3>
              <ul className="space-y-3">
                {[
                  'AI product discovery workshop',
                  'Technical architecture design',
                  'LLM integration (OpenAI, Anthropic, open-source)',
                  'RAG pipelines',
                  'Agent orchestration (if needed)',
                  'Backend & frontend development',
                  'Evaluation system (RAG evals, prompt testing)',
                  'Monitoring & logging',
                  'Launch positioning support',
                  'Pilot onboarding system',
                ].map((f, i) => <CheckItem key={i}>{f}</CheckItem>)}
              </ul>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1a1a1a] mb-4 text-lg">Optional Add-Ons</h3>
                <ul className="space-y-3">
                  {['Fundraising support materials', 'Technical due diligence prep', 'Security documentation'].map((f, i) => <CheckItem key={i}>{f}</CheckItem>)}
                </ul>
              </Reveal>

              {/* Case study */}
              <Reveal delay={0.15} className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
                <div className="text-[#DBFE01] font-bold text-xs uppercase tracking-wider mb-3">Example Engagement</div>
                <h3 className="font-bold text-white text-lg mb-4">AI Compliance SaaS</h3>
                <p className="text-white/60 text-sm mb-4">Founder had a working AI document analyzer but no product workflow.</p>
                <ul className="space-y-2 mb-4">
                  {['Reduced 11 features to 3 must-haves', 'Built RAG-based architecture', 'Added evaluation layer + monitoring', 'Designed onboarding for legal teams', 'Launched 3 pilot customers in 90 days'].map((it, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-3 h-3 text-[#DBFE01]" /> {it}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-[#DBFE01] font-bold text-sm">Result: 2 paying pilots · Clear activation metric · Investor-ready traction story</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#DBFE01] px-3 py-1 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Frequently Asked Questions</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: 'Do you work with non-technical founders?',
                  a: 'Yes. We translate AI complexity into product decisions and execution. You bring the vision — we bring the architecture and build.'
                },
                {
                  q: 'Can you work with our internal team?',
                  a: 'Absolutely. We can lead delivery, augment your team, or act as architecture advisors — whatever fits your situation.'
                },
                {
                  q: 'What if we already built something?',
                  a: 'We audit your current stack and either refactor strategically or scope a clean MVP around what works. No wasted effort.'
                },
                {
                  q: 'What AI technologies do you use?',
                  a: "We're stack-agnostic and outcome-driven. We choose based on your use case, data needs, performance requirements, and budget. OpenAI, Anthropic, Llama, LangChain, LlamaIndex — we've built with all of them."
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="hover:no-underline py-5 text-base font-semibold text-[#1a1a1a]">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-5 leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#DBFE01] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
              Ready to Ship Your AI SaaS?
            </h2>
            <p className="text-lg text-[#1a1a1a]/70 mb-4 font-medium max-w-2xl mx-auto">
              If you're serious about launching an AI MVP that can win pilots — not just another experiment —
            </p>
            <p className="text-[#1a1a1a] font-bold mb-10">We'll assess your idea · Clarify scope · Outline your architecture · Map your 8–12 week path to pilot launch</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('book')} className="px-10 py-5 bg-[#1a1a1a] text-white rounded-xl text-base font-bold flex items-center justify-center gap-2 hover:bg-black transition-all hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                Book Your AI MVP Roadmap Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-[#1a1a1a]/50 text-xs font-semibold mt-10 uppercase tracking-wider">No spam. Clear next steps within 24 hours.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}