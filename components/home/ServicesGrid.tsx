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
    link?: string;
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

                {/* Services Bento Grid - Premium Visual Hierarchy */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 perspective-1500">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className={classNames(
                                "group relative animate-slide-up flex flex-col",
                                idx === 0 ? "md:col-span-3 lg:col-span-7 h-[360px]" : "",
                                idx === 1 ? "md:col-span-3 lg:col-span-5 h-[360px]" : "",
                                idx === 2 ? "md:col-span-2 lg:col-span-4 h-[320px]" : "",
                                idx === 3 ? "md:col-span-2 lg:col-span-4 h-[320px]" : "",
                                idx === 4 ? "md:col-span-2 lg:col-span-4 h-[320px]" : ""
                            )}
                            style={{
                                animationDelay: `${idx * 150}ms`,
                            }}
                        >
                            {/* Card with gradient border effect */}
                            <div className="relative h-full flex flex-col">
                                {/* Ambient Hover Glow behind card */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/0 to-purple-500/0 group-hover:from-accent/30 group-hover:via-accent/20 group-hover:to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                                {/* Main Card with 3D Effect */}
                                <div
                                    className={classNames(
                                        "relative flex-1 bg-white dark:bg-[#1a1a3e]/40 backdrop-blur-xl rounded-2xl p-8 border border-border/50 dark:border-white/[0.06] group-hover:border-accent/40 shadow-[0_5px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] card-3d-deep depth-layer-2 flex flex-col transition-all duration-500 hover:-translate-y-1",
                                    )}
                                >
                                    {/* Animated Background Gradient */}
                                    <div className={classNames("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-2xl", service.accent)} />

                                    {/* Number Watermark with 3D float */}
                                    <div className="absolute top-4 right-6 text-7xl font-black text-foreground/[0.04] dark:text-white/[0.03] group-hover:text-accent/[0.1] transition-all duration-700 font-serif leading-none pointer-events-none select-none layer-3d-back">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>

                                    <div className="relative z-10 layer-3d-front flex flex-col h-full">
                                        {/* Icon - Smaller with fixed type casting */}
                                        <div
                                            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent border border-accent/30 shadow-lg shadow-accent/10 tilt-hover"
                                        >
                                            {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                                        </div>

                                        {/* Title - Compact */}
                                        <h3 className="text-base font-black text-foreground dark:text-white mb-2 tracking-tight leading-tight group-hover:text-accent transition-colors duration-300 min-h-[40px] flex items-center">
                                            {service.title}
                                        </h3>

                                        {/* Decorative underline */}
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent/30 mb-4 group-hover:w-12 transition-all duration-500" />

                                        {/* Description - Resizable based on Bento placement */}
                                        <div className="mb-5 flex-grow">
                                            <p className={classNames(
                                                "text-muted-foreground dark:text-[#f7e7ce]/70 leading-relaxed font-medium transition-all duration-300",
                                                idx <= 1 ? "text-xs md:text-sm" : "text-[11px]"
                                            )}>
                                                {service.desc}
                                            </p>
                                        </div>

                                        {/* Feature Tags - Minimalist */}
                                        <div className="flex flex-wrap gap-1 mb-5">
                                            {service.tags.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded bg-accent/5 dark:bg-accent/10 border border-accent/10 text-[9px] font-bold text-accent/80 tracking-wide uppercase"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA - Compact */}
                                        <a
                                            href={service.link ?? "/"}
                                            aria-label={`Explore ${service.title} service`}
                                            className="inline-flex items-center gap-1.5 text-accent font-black text-[9px] uppercase tracking-[0.15em] group-hover:gap-3 transition-all duration-300 mt-auto"
                                        >
                                            <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-accent group-hover:after:w-full after:transition-all after:duration-300">Explore</span>
                                            <ChevronRightIcon size={10} className="group-hover:translate-x-1 transition-transform" />
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
