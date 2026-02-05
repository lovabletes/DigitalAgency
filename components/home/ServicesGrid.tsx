"use client";

import React from "react";
import { ChevronRightIcon } from "@/components/icons/icons";
import { classNames } from "@/utils/class-names";

interface Service {
    id: string;
    title: string;
    desc: string;
    tags: string[];
    accent: string;
    icon: React.ReactNode;
}

interface ServicesGridProps {
    services: Service[];
}

export function ServicesGrid({ services }: Readonly<ServicesGridProps>) {
    return (
        <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-[#faf8f3] to-white dark:from-[#0f1429] dark:via-[#1a1a3e]/30 dark:to-[#0f1429]">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

            <div className="container-custom relative z-10">
                {/* Section Header - Centered & Enhanced */}
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up is-visible">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Our Craft</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6 leading-tight">
                        Bespoke Digital <span className="text-accent italic">Solutions</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                        Every project is a unique collaboration. We deliver uncompromising quality across every digital frontier.
                    </p>
                </div>

                {/* Services Grid - Enhanced Cards with 3D Effects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1500">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className="group relative animate-slide-up"
                            style={{
                                animationDelay: `${idx * 150}ms`,
                            }}
                        >
                            {/* Card with gradient border effect */}
                            <div className="relative h-full">
                                {/* Gradient Border Container */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                                {/* Main Card with 3D Effect */}
                                <div
                                    className={classNames(
                                        "relative h-full bg-white dark:bg-[#1a1a3e]/60 backdrop-blur-xl rounded-[2rem] p-10 border-2 border-border/50 dark:border-white/10 group-hover:border-accent/30 shadow-xl card-3d-deep depth-layer-2 flex flex-col",
                                    )}
                                >
                                    {/* Animated Background Gradient */}
                                    <div className={classNames("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700", service.accent)} />

                                    {/* Number Watermark with 3D float */}
                                    <div className="absolute top-4 right-6 text-[8rem] font-black text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-accent/[0.12] transition-all duration-700 font-serif leading-none pointer-events-none select-none group-hover:scale-110 layer-3d-back">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>

                                    <div className="relative z-10 layer-3d-front flex flex-col h-full">
                                        {/* Icon with 3D tilt */}
                                        <div
                                            className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent border border-accent/30 shadow-lg shadow-accent/10 tilt-hover"
                                        >
                                            {service.icon}
                                        </div>

                                        {/* Title */}
                                        <div className="min-h-[80px] flex flex-col justify-center">
                                            <h3 className="text-2xl md:text-3xl font-black text-foreground dark:text-white mb-0 tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Decorative underline */}
                                        <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/30 mb-6 group-hover:w-24 transition-all duration-500" />

                                        {/* Description */}
                                        <div className="min-h-[100px] mb-8">
                                            <p className="text-base text-muted-foreground dark:text-[#f7e7ce]/70 leading-relaxed font-medium">
                                                {service.desc}
                                            </p>
                                        </div>

                                        {/* Feature Tags */}
                                        <div className="flex flex-wrap gap-2.5 mb-10 flex-grow">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-lg bg-accent/5 dark:bg-accent/10 border border-accent/20 text-xs font-bold text-accent/80 tracking-wide uppercase group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:text-accent dark:group-hover:text-accent transition-all duration-300 depth-layer-1"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA - Text Link with Arrow */}
                                        <a
                                            href="/"
                                            className="inline-flex items-center gap-2 text-accent font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300"
                                        >
                                            <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent group-hover:after:w-full after:transition-all after:duration-300">Explore Service</span>
                                            <ChevronRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
