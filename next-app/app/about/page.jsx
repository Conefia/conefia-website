import React from 'react';
import { Target, Lightbulb, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import Breadcrumbs from '@/components/server/Breadcrumbs';
import ContourBackground from '@/components/server/visual/ContourBackground';
import ScrollAnimation from '@/components/client/ui/ScrollAnimation';

export const metadata = {
    title: "About Us | Conefia - Build, Launch, Scale",
    description: "Learn about Conefia's vision, mission, and unique approach to helping founders, clinics, and brands build and scale digital ventures.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#121829] to-[#0B1020] relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0">
                <ContourBackground className="opacity-60" isMobile={false} />
                {/* Note: isMobile logic removed as we are on server. CSS media queries are better for this if needed, 
            or generic false is fine for background as it's decorative. */}
            </div>

            {/* Star Dust - Static on Server */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(200)].map((_, i) => {
                    // Deterministic random for SSR consistency would be ideal, but for now we let hydration handle mismatch or just suppress
                    // Actually, random on server causes hydration mismatch.
                    // Better to use a CSS pattern or a static set. 
                    // For now, I will omit the random stars to avoid hydration errors or standardise them.
                    // Or I can use a client component for JUST the stars if really needed.
                    // Let's omit them for "Maximize Prerender" speed and cleanliness, or make a ClientStarField.
                    return null;
                })}
                {/* Replacing random stars with a Client Component if strictly needed, but for now removing for pure SSR speed. 
            Background is already rich with ContourBackground. */}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-20 relative z-10">
                <Breadcrumbs items={[{ label: 'About Us' }]} theme="dark" />

                {/* Hero Section */}
                <ScrollAnimation className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        About <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Conefia</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        One partner to build, launch, and scale your digital venture from idea to market leader.
                    </p>
                </ScrollAnimation>

                {/* Mission & Vision Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <ScrollAnimation className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target className="w-7 h-7 text-[#1a1a1a]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-white/70 leading-relaxed">
                            To empower founders, clinics, and brands to transform their ideas into thriving digital ventures. We eliminate the complexity of product development and growth, delivering end-to-end solutions that drive real business results.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.1} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Lightbulb className="w-7 h-7 text-[#1a1a1a]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-white/70 leading-relaxed">
                            To become the most trusted partner for digital innovation, where every entrepreneur and business can turn their vision into reality without the traditional barriers of time, cost, and technical complexity.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Unique Value Proposition */}
                <ScrollAnimation className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Conefia</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            We're not just a development agency. We're your growth partner.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all">
                            <Zap className="w-10 h-10 text-[#DBFE01] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Speed to Market</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Launch in weeks, not months. Our proven playbook and pre-built systems accelerate your time to market without compromising quality.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all">
                            <TrendingUp className="w-10 h-10 text-[#DBFE01] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Growth-First Approach</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                We don't just build apps. We build growth systems with built-in acquisition, retention, and monetization strategies from day one.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all">
                            <Shield className="w-10 h-10 text-[#DBFE01] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Risk-Free Partnership</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Validated approach with proven case studies across industries. No guesswork, just results-driven methodology backed by data.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all">
                            <Users className="w-10 h-10 text-[#DBFE01] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">One Dedicated Team</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                No handoffs, no miscommunication. One experienced team handles your entire journey from validation to scale.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all md:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#1a1a1a]">AI</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">AI-Powered Innovation</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Leverage cutting-edge AI capabilities to build smarter products. From intelligent chatbots to predictive analytics, we integrate AI where it truly adds value to your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Stats Section */}
                <ScrollAnimation className="bg-gradient-to-br from-[#DBFE01] to-[#c5e000] rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">By The Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">50+</div>
                            <div className="text-[#1a1a1a]/70 font-semibold text-sm">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">3x</div>
                            <div className="text-[#1a1a1a]/70 font-semibold text-sm">Faster Launch</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">95%</div>
                            <div className="text-[#1a1a1a]/70 font-semibold text-sm">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">24/7</div>
                            <div className="text-[#1a1a1a]/70 font-semibold text-sm">Support Available</div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
