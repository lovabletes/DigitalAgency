"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { classNames } from "@/utils/class-names";

interface Package {
    id: string;
    name: string;
    tagline: string;
    price: string;
    duration: string;
    featured: boolean;
    features: string[];
    cta: string;
}

interface PricingProps {
    packages: Package[];
}

export function Pricing({ packages }: Readonly<PricingProps>) {
    return (
        <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-[#faf8f3] to-white dark:from-[#0f1429] dark:via-[#1a1a3e] dark:to-[#0f1429]">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Investment Plans</span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6">
                        Packages Designed For <span className="text-accent italic">Excellence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                        Transparent pricing for world-class digital solutions. No hidden fees, just premium quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-2000">
                    {packages.map((pkg, idx) => (
                        <div
                            key={pkg.id}
                            className={classNames(
                                "relative glass-card p-10 rounded-[2rem] animate-slide-up group transform-style-3d flex flex-col h-full transition-all duration-500",
                                pkg.featured
                                    ? "bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent shadow-2xl shadow-accent/20 card-3d-deep z-20 ring-4 ring-accent/20"
                                    : "border border-border/30 card-3d z-10"
                            )}
                            style={{
                                animationDelay: `${idx * 150}ms`,
                            }}
                        >
                            {/* Featured Badge with 3D float */}
                            {pkg.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground rounded-full text-xs font-black uppercase tracking-wider shadow-lg float-3d">
                                    Most Popular
                                </div>
                            )}

                            {/* Package Header */}
                            <div className="flex flex-col min-h-[180px] mb-8 pb-8 border-b border-border dark:border-white/10 layer-3d-front">
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-black text-foreground mb-2 tracking-tight">{pkg.name}</h3>
                                    <p className="text-sm text-muted-foreground font-medium mb-6">{pkg.tagline}</p>
                                </div>
                                <div className="flex items-baseline gap-2 mt-auto">
                                    <span className="text-5xl font-black bg-gradient-to-br from-accent via-accent to-accent/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                        {pkg.price}
                                    </span>
                                    <span className="text-sm text-muted-foreground font-bold">/ {pkg.duration}</span>
                                </div>
                            </div>

                            {/* Features List with depth */}
                            <ul className="space-y-4 mb-10 layer-3d-mid flex-grow">
                                {pkg.features.map((feature) => (
                                    <li key={`${pkg.id}-${feature}`} className="flex items-start gap-3 group/item">
                                        <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent transition-all duration-300 tilt-hover depth-layer-1">
                                            <CheckCircle size={12} className="text-accent group-hover/item:text-accent-foreground" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button with 3D press effect */}
                            <Button
                                className={classNames(
                                    "w-full py-6 text-base font-black uppercase tracking-wider transition-all duration-300 transform-style-3d",
                                    pkg.featured
                                        ? "btn-lux-primary shadow-xl hover:shadow-2xl hover:translate-y-[-4px]"
                                        : "btn-lux-outline hover:translate-y-[-2px]"
                                )}
                            >
                                {pkg.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground font-medium mb-6">
                        Need a custom solution? <span className="text-accent font-black">Let's discuss your vision.</span>
                    </p>
                    <Button variant="outline" className="btn-lux-outline px-10 py-6">
                        Schedule Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
}
