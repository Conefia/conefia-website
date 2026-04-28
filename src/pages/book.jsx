import React, { useEffect, useState, useCallback, useRef } from 'react';
import { CheckCircle2, Clock, Video, Shield, Users, Check, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import BrandCarousel from '@/components/landing/BrandCarousel';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

const WHAT_YOU_GET = [
  "A clear MVP scope — what to build first and what to skip",
  "Recommended AI or tech approach for your specific use case",
  "An 8–12 week delivery roadmap with milestones",
  "Early risk flags — data, compliance, cost, reliability",
];

const TRUST_CHIPS = [
  { icon: Clock, label: "30 Minutes" },
  { icon: Video, label: "Video Call" },
  { icon: Shield, label: "No Sales Pitch" },
  { icon: CheckCircle2, label: "No Commitment" },
];

const BOOK_REVIEWS = [
  { id: 1, client_name: "Alex R.", client_role: "Founder", client_company: "", content: "I booked the call as a skeptic, but Yassen's strategic insights blew me away. His four‑phase framework helped us identify a clear path forward. We decided to move ahead with Conefia, and I'm glad we did—the execution matched the clarity of the roadmap.", rating: 5 },
  { id: 2, client_name: "Mohammed A.", client_role: "Co-Founder", client_company: "", content: "The roadmap session was eye-opening. Yassen took a complex set of ideas and turned them into a clear 4‑phase plan. We ultimately signed with Conefia and are already seeing results. It feels good to have a partner who actually 'gets' AI, mobile, and growth.", rating: 5 },
  { id: 3, client_name: "Sarah K.", client_role: "Startup Founder", client_company: "", content: "After just 30 minutes, I had clarity I'd been struggling to find for months. The roadmap touched on everything—from validating our idea to scaling. Even though I chose to pause the project for now, I still refer back to that roadmap regularly.", rating: 5 },
  { id: 4, client_name: "David L.", client_role: "CEO", client_company: "", content: "I genuinely felt heard. Yassen listened to our challenges and walked us through the Validate → Build → Launch → Scale framework. We hired Conefia for our MVP build, and we're already ahead of schedule. The roadmap made it an easy decision.", rating: 5 },
  { id: 5, client_name: "Priya N.", client_role: "Product Lead", client_company: "", content: "The call wasn't a sales pitch—it was a strategy session. The roadmap showed me how to structure my project and highlighted potential pitfalls. Although I didn't hire Conefia right away, I later came back because the roadmap proved how much value they bring.", rating: 5 },
  { id: 6, client_name: "Dr. Layla M.", client_role: "Clinic Owner", client_company: "", content: "Yassen's advice was practical and personal. He showed me how the 4‑phase framework would help our clinic go from concept to scalable platform. We committed to working with Conefia, and the results have exceeded my expectations.", rating: 5 },
  { id: 7, client_name: "James T.", client_role: "E-commerce Founder", client_company: "", content: "I was impressed by how quickly Yassen understood my Shopify brand's struggles. The roadmap gave me actionable steps, and I decided to partner with Conefia to implement them. Looking back, that decision has been one of the best for our business.", rating: 5 },
];

function ReviewsCarousel({ reviews, animate }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section ref={ref} className="bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F2] to-[#F0F0ED] py-20 md:py-28 overflow-hidden relative">
      {/* Subtle accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBFE01]/4 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DBFE01]/3 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: animate ? 0.5 : 0 }}
          className="mb-12 text-center"
        >
          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#DBFE01] text-[#1a1a1a] stroke-[#1a1a1a]" />)}
            </div>
            Roadmap Call Reviews
          </span>
          <h2 className="text-2xl font-bold mb-3 gradient-heading gradient-heading--premium">What clients say after the roadmap call</h2>
          <p className="text-[#1a1a1a]/60 max-w-xl mx-auto">See how founders, clinic teams, and growth-focused brands used their Conefia roadmap call to clarify scope, reduce risk, and move forward with confidence.</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden px-1 py-2 -mx-1" ref={emblaRef}>
            <div className="flex gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
                  <div className="bg-[#0F1420] border border-white/10 rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.25)] h-full flex flex-col hover:shadow-[0_4px_24px_rgba(0,0,0,0.40)] hover:border-white/20 transition-all duration-300">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#DBFE01] text-[#DBFE01]" />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5 font-medium">"{r.content}"</p>
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-9 h-9 rounded-full bg-[#DBFE01] flex items-center justify-center text-[#1a1a1a] font-extrabold text-sm flex-shrink-0 shadow-[0_0_12px_rgba(219,254,1,0.35)]">
                        {r.client_name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm leading-tight">{r.client_name}</p>
                        <p className="text-white/40 text-xs mt-0.5">{r.client_role}{r.client_company ? ` · ${r.client_company}` : ''}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={scrollPrev} aria-label="Previous" className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#DBFE01] hover:border-[#DBFE01] group flex items-center justify-center transition-all duration-200 shadow-sm">
              <ChevronLeft className="w-4 h-4 text-gray-500 group-hover:text-[#1a1a1a] transition-colors" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === selected ? 'w-6 bg-[#1a1a1a]' : 'w-1.5 bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={scrollNext} aria-label="Next" className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#DBFE01] hover:border-[#DBFE01] group flex items-center justify-center transition-all duration-200 shadow-sm">
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#1a1a1a] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Book() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const animate = !reduceMotion;
  const calendlyRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="Book a Free Roadmap Call | Conefia"
        description="Book a free 30-minute roadmap call with Conefia. Get a clear MVP scope, AI approach, and delivery plan — no commitment required."
        canonical="/book"
      />

      {/* ══════════════════════════════════════════
          HERO — reuses the global dark hero design
      ══════════════════════════════════════════ */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        <HeroDarkBackground isMobile={isMobile} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-36 pb-16 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumbs items={[{ label: 'Book a Roadmap Call' }]} theme="dark" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Left: Copy */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* H1 — global gradient style */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.08 : 0 }}
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 will-change-transform"
              >
                Book Your Free<br />Roadmap Call
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.16 : 0 }}
                className="text-base md:text-lg text-white/85 leading-relaxed mb-7 font-medium max-w-lg"
              >
                In 30 minutes you'll leave with a clear MVP scope, the right AI approach, and a realistic 8–12 week delivery plan — whether you hire us or not.
              </motion.p>

              {/* Trust chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.22 : 0 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              >
                {TRUST_CHIPS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/15 transition-colors">
                    <Icon className="w-4 h-4 text-[#DBFE01] flex-shrink-0" />
                    <span className="text-white/90 text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* What you get */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.28 : 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm mb-6 w-full text-left"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#DBFE01]/80 mb-4">What you'll walk away with</p>
                <ul className="space-y-3">
                  {WHAT_YOU_GET.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(219,254,1,0.4)]">
                        <Check className="w-3 h-3 text-[#1a1a1a]" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pick a Time CTA Button */}
              <motion.button
               initial={{ opacity: 0, y: 12 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.34 : 0 }}
               onClick={() => calendlyRef.current?.scrollIntoView({ behavior: 'smooth' })}
               className="btn-primary px-7 py-3 rounded-lg text-base font-semibold flex items-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_0_15px_rgba(219,254,1,0.35),0_4px_12px_rgba(219,254,1,0.25)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
               Pick a Time
               <ArrowRight className="w-4 h-4" />
              </motion.button>

              </div>

            {/* Right: Stock image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: animate ? 0.55 : 0, delay: animate ? 0.15 : 0 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] h-[560px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Strategy roadmap call with client"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1020]/70 via-[#0B1020]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent" />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: animate ? 0.6 : 0 }}
                  className="absolute top-6 right-6 bg-[#DBFE01] text-[#1a1a1a] text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg"
                >
                  Free · 30 min
                </motion.div>

                {/* Bottom card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: animate ? 0.7 : 0, duration: animate ? 0.5 : 0 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(219,254,1,0.5)]">
                      <Users className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">No-pressure, all signal</p>
                      <p className="text-white/75 text-xs mt-0.5">Leave with a clear plan — whether you hire us or not.</p>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
              </div>
              <div className="absolute -inset-4 bg-[#DBFE01]/6 rounded-3xl blur-[50px] -z-10" />
            </motion.div>
          </div>
        </div>
      </header>

      <BrandCarousel />

      {/* ══════════════════════════════════════════
          BODY — light section, Calendly embed
      ══════════════════════════════════════════ */}
      <main className="bg-gradient-to-b from-[#FAFAFA] to-white relative" ref={calendlyRef}>
        {/* Subtle top glow transition */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DBFE01]/80 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#DBFE01]/8 blur-[60px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Pick a time that works for you</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Calendly embed */}
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)]" style={{ boxShadow: '0 0 0 1px rgba(219,254,1,0.15), 0 8px 40px rgba(0,0,0,0.08)' }}>
            <div className="calendly-inline-widget" data-url="https://calendly.com/yassen-eltayeb-conefia?background_color=1a1a1a&text_color=ffffff&primary_color=dbfe01" style={{ minWidth: '320px', height: isMobile ? '600px' : '700px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Can't find a suitable time?{' '}
            <a href="mailto:info@conefia.com" className="text-gray-700 font-bold hover:text-[#1a1a1a] transition-colors underline decoration-gray-300 hover:decoration-[#DBFE01]">
              Email us
            </a>{' '}
            directly.
          </p>
        </div>
      </main>

      {/* ══════════════════════════════════════════
          CLIENT REVIEWS — light section
      ══════════════════════════════════════════ */}
      <ReviewsCarousel reviews={BOOK_REVIEWS} animate={animate} />
    </div>
  );
}