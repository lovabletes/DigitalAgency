"use client";

import React, { useEffect, useState } from "react";
import {
    ClockIcon,
    AnalyticsIcon,
    UsersIcon,
    ChevronRightIcon,
    SettingsIcon,
    CheckCircleIcon,
    ConversionsIcon,
    SearchIcon,
    StarIcon,
    InfoIcon
} from "@/components/icons/icons";

const aiFeatures = [
    {
        title: "Lightning Development",
        desc: "AI-driven workflows compress months into weeks, delivering enterprise-grade solutions at unprecedented velocity.",
        icon: <ClockIcon size={24} />,
        metric: "40% faster",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Smart Economics",
        desc: "Intelligent automation slashes overhead costs while maintaining premium quality standards.",
        icon: <AnalyticsIcon size={24} />,
        metric: "60% savings",
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "Human + AI Synergy",
        desc: "Elite developers amplified by AI, focusing on innovation while machines handle the mundane.",
        icon: <UsersIcon size={24} />,
        metric: "3x productivity",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Predictive Intelligence",
        desc: "Advanced ML models analyze patterns, forecast trends, and optimize every pixel for peak performance.",
        icon: <SearchIcon size={24} />,
        metric: "99% accuracy",
        color: "from-orange-500 to-red-500"
    },
];

export function AIShowcase() {
    // Hydration guard to prevent server/client mismatch
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section id="ai-innovation" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
            {/* Animated Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                     linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }} />
            </div>

            {/* Ambient Radial Gradients */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none" />

            {!mounted ? (
                /* Static shell to prevent hydration flicker */
                <div className="container-custom relative z-10 min-h-[800px]" />
            ) : (
                <div className="container-custom relative z-10">
                    {/* Hero Header - Centered Style Optimized */}
                    <div className="text-center max-w-5xl mx-auto mb-20 md:mb-28">
                        {/* Elite AI Badge */}
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 shadow-lg backdrop-blur-sm">
                            <div className="relative">
                                <SettingsIcon size={16} className="text-accent" />
                                <div className="absolute inset-0 animate-ping opacity-75">
                                    <SettingsIcon size={16} className="text-accent" />
                                </div>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                                AI-Augmented Development
                            </span>
                        </div>

                        {/* High-Impact Headline */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
                            <span className="text-foreground">Build Smarter,</span>
                            <br />
                            <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                                Ship Faster
                            </span>
                        </h2>

                        <p className="text-lg md:text-2xl leading-relaxed font-medium text-foreground/70 max-w-3xl mx-auto">
                            Where human creativity meets artificial intelligence. We architect tomorrow&apos;s digital experiences with today&apos;s most advanced AI tools.
                        </p>

                        {/* Action Suite */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <button className="group px-8 py-4 bg-gradient-to-r from-accent to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                See AI in Action
                                <ChevronRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border-2 border-foreground/10 hover:border-accent/50 text-foreground rounded-full font-bold text-lg transition-all duration-300 hover:bg-accent/5">
                                Read Case Studies
                            </button>
                        </div>
                    </div>

                    {/* Feature Cards - Bento Grid Redux */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {aiFeatures.map((feature, idx) => (
                            <div
                                key={feature.title}
                                className="group relative rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                                style={{
                                    animationDelay: `${idx * 100}ms`
                                }}
                            >
                                {/* Immersive Glow Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

                                <div className="relative h-full bg-secondary/50 dark:bg-secondary/30 backdrop-blur-xl border border-foreground/10 group-hover:border-foreground/20 rounded-3xl p-8 transition-all duration-500">
                                    {/* Icon Geometry with Glossy Background */}
                                    <div className="relative mb-6">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                        <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Performance Tag */}
                                    <div className={`inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold mb-4 shadow-md`}>
                                        {feature.metric}
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-foreground/70 mb-6">
                                        {feature.desc}
                                    </p>

                                    {/* Reveal Link Component */}
                                    <div className="flex items-center gap-2 text-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <span>Explore Capabilities</span>
                                        <ChevronRightIcon size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Precision Impact Metrics */}
                    <div className="relative">
                        {/* Underlay shadow for depth */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-purple-500/5 to-pink-500/5 rounded-[3rem] blur-3xl opacity-60" />

                        <div className="relative border border-foreground/10 rounded-[3rem] overflow-hidden bg-secondary/40 dark:bg-secondary/20 backdrop-blur-2xl shadow-2xl">
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
                                {/* Deliverable Velocity */}
                                <div className="p-10 md:p-14 text-center group hover:bg-accent/5 transition-colors duration-500">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        <ConversionsIcon size={32} className="text-white" />
                                    </div>
                                    <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                                        60%
                                    </div>
                                    <div className="text-lg font-bold text-foreground mb-2">Faster Delivery</div>
                                    <p className="text-sm text-foreground/60 max-w-xs mx-auto">
                                        Accelerated production pipelines through AI-integrated rapid development.
                                    </p>
                                </div>

                                {/* Cognitive Scaling */}
                                <div className="p-10 md:p-14 text-center group hover:bg-accent/5 transition-colors duration-500">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        <SearchIcon size={32} className="text-white" />
                                    </div>
                                    <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                                        3.5x
                                    </div>
                                    <div className="text-lg font-bold text-foreground mb-2">Intelligence Depth</div>
                                    <p className="text-sm text-foreground/60 max-w-xs mx-auto">
                                        Advanced analytics extracting transformative business insights from raw data.
                                    </p>
                                </div>

                                {/* Execution Precision */}
                                <div className="p-10 md:p-14 text-center group hover:bg-accent/5 transition-colors duration-500">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        <StarIcon size={32} className="text-white" />
                                    </div>
                                    <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                                        99%
                                    </div>
                                    <div className="text-lg font-bold text-foreground mb-2">Optimization Rate</div>
                                    <p className="text-sm text-foreground/60 max-w-xs mx-auto">
                                        Machine-learned precision ensuring peak performance and accessibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Engagement Layer */}
                    <div className="text-center mt-16">
                        <p className="text-foreground/60 text-lg mb-6">
                            Ready to embrace the intelligence revolution?
                        </p>
                        <button className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            Start AI Consultation
                            <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                                <ChevronRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}