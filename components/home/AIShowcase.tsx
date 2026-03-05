"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    ClockIcon,
    ConversionsIcon,
    InfoIcon,
    AnalyticsIcon
} from "@/components/icons/icons";

const aiFeatures = [
    {
        title: "Accelerated Timelines",
        desc: "Cutting development cycles by 40% with precision-guided AI architectural workflows.",
        icon: <ClockIcon size={20} className="text-accent" />,
        stat: "-40%",
        label: "Dev Time"
    },
    {
        title: "Cost Efficiency",
        desc: "Neural task automation reducing overhead and reallocating resources to high-value engineering.",
        icon: <ConversionsIcon size={20} className="text-accent" />,
        stat: "High",
        label: "ROI"
    },
    {
        title: "Expert Reasoning",
        desc: "Freeing architects from boilerplate to focus on complex logic and creative problem-solving.",
        icon: <InfoIcon size={20} className="text-accent" />,
        stat: "100%",
        label: "Logic focus"
    },
    {
        title: "Predictive Analytics",
        desc: "Proprietary AI diagnostics monitoring performance and UX health with zero-latency.",
        icon: <AnalyticsIcon size={20} className="text-accent" />,
        stat: "Real-time",
        label: "Analysis"
    },
];

export function AIShowcase() {
    // Hydration Fix: Consistent root tag between server and client
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section id="ai-innovation" className="relative py-24 md:py-32 overflow-hidden bg-background">
            {!mounted ? (
                /* Consistent shell to prevent hydration mismatch */
                <div className="min-h-[600px] container-custom" />
            ) : (
                <>
                    {/* Ambient Shadow/Glow */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/[0.07] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                    <div className="container-custom relative z-10">
                        {/* Header with Balanced Grid to Fill Empty Space */}
                        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 lg:gap-24 mb-20 md:mb-32">
                            {/* Left: Content - Purely Left Aligned */}
                            <div className="text-left w-full">
                                <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-foreground leading-[0.95]">
                                    The New Era of <br />
                                    <span className="text-shimmer italic inline-block pr-10">Digital Brilliance</span>
                                </h2>

                                <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-2xl leading-relaxed">
                                    We fuse human architectural insight with generative intelligence to deliver
                                    unparalleled speed, precision, and business scalability.
                                </p>
                            </div>

                            {/* Right: Immersive AI Image - Vertical Height Constrained */}
                            <div className="relative group perspective-1000 w-full pt-4">
                                {/* Decorative background glow for image */}
                                <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="relative overflow-hidden rounded-[2.5rem] border border-foreground/10 group-hover:border-accent/40 transition-all duration-700 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.5)] card-3d-deep backdrop-blur-xl bg-background/5 max-h-[400px]">
                                    <Image
                                        src="/images/ai/ai_showcase_hero.png"
                                        alt="AI Intelligence Visualization"
                                        width={1200}
                                        height={600}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                        priority
                                    />
                                    {/* Inner Glass Polish */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                            {aiFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="group relative bg-secondary/[0.04] dark:bg-secondary/10 border border-foreground/[0.05] p-8 rounded-[2rem] transition-all duration-500 hover:bg-white dark:hover:bg-secondary/20 hover:border-accent/30 flex flex-col justify-between shadow-sm hover:shadow-xl"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="h-10 w-10 rounded-xl bg-background border border-foreground/[0.05] flex items-center justify-center shadow-sm">
                                                {feature.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xl font-black text-accent">{feature.stat}</div>
                                                <div className="text-[9px] font-bold uppercase tracking-tight text-foreground/40">{feature.label}</div>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-black mb-3 text-foreground transition-colors group-hover:text-accent">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm font-medium leading-relaxed text-foreground/50">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Luxury Impact Banner - Explicit Dark Background for Contrast */}
                        <div
                            className="relative rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.005]"
                            style={{ backgroundColor: '#0a0a1a' }}
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.15] blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
                                <div className="flex-1 text-center md:text-left">
                                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-6 block">Performance Metric</span>
                                    <h4 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
                                        Efficiency <br />Redefined.
                                    </h4>
                                    <p className="text-base md:text-lg font-medium text-white/50 max-w-sm mx-auto md:mx-0">
                                        AI-accelerated workflows delivering record-breaking timelines without compromising structural integrity.
                                    </p>
                                </div>

                                <div className="flex-shrink-0 flex flex-col sm:flex-row gap-12 md:gap-20 items-center">
                                    {/* Counter 1 */}
                                    <div className="text-center group">
                                        <div className="text-7xl md:text-9xl font-black text-slate-50 tracking-tighter mb-2 transition-transform group-hover:scale-105 duration-500">
                                            60<span className="text-accent">%</span>
                                        </div>
                                        <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Faster Delivery</div>
                                    </div>

                                    {/* Counter 2 */}
                                    <div className="text-center group">
                                        <div className="text-7xl md:text-9xl font-black text-slate-50 tracking-tighter mb-2 transition-transform group-hover:scale-105 duration-500">
                                            3.5<span className="text-accent">x</span>
                                        </div>
                                        <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Insight Depth</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
