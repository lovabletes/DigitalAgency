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

export function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <section id="services" className="section-padding relative bg-gradient-to-b from-white via-[#f7e7ce]/30 to-white dark:from-[#0f1429] dark:via-[#1a1a3e]/50 dark:to-[#0f1429]">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10 fade-in-up">
                    <div className="max-w-2xl">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4 block">Our Craft</span>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-6">Bespoke Digital Solutions</h2>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                            Every project is a unique collaboration. We deliver uncompromising quality across every digital frontier.
                        </p>
                    </div>
                    <div className="h-1 shadow-lux bg-accent w-20 mb-4 hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className="group relative bg-white dark:bg-[#1a1a3e]/40 p-8 lg:p-12 rounded-3xl border-2 border-border dark:border-white/5 hover:border-accent/50 dark:hover:border-accent/50 overflow-hidden animate-slide-up hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-500 ease-out backdrop-blur-sm cursor-pointer"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Subtle Number Overlay */}
                            <div className="absolute top-6 right-6 text-[10rem] font-black text-foreground/[0.02] dark:text-white/[0.02] group-hover:text-accent/[0.08] transition-colors duration-700 font-serif leading-none pointer-events-none select-none">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            {/* Very Subtle Gradient Overlay on Hover */}
                            <div className={classNames("absolute inset-0 bg-gradient-to-br transition-opacity duration-700 opacity-0 group-hover:opacity-[0.05]", service.accent)} />

                            <div className="relative z-10">
                                {/* Icon with improved styling */}
                                <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent border-2 border-accent/20 group-hover:border-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500 shadow-sm">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description with better line height */}
                                <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
                                    {service.desc}
                                </p>

                                {/* Refined Tag Pills with better spacing */}
                                <div className="flex flex-wrap gap-2.5 mb-8">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-xs font-bold text-accent/70 tracking-wide uppercase group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Link with underline animation */}
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 text-sm font-black text-accent uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300 relative"
                                >
                                    <span className="relative">
                                        Explore Service
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                                    </span>
                                    <ChevronRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
