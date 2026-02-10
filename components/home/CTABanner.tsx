"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, ShieldCheck, Sparkles } from "lucide-react";

export function CTABanner() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="container-custom perspective-2000">
                <div className="relative group transition-all duration-700 hover:scale-[1.02]">
                    {/* Animated Outer Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                    {/* Main Immersive Card */}
                    <div className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a1a3e] via-[#0f1429] to-[#1a1a3e] border border-white/10 dark:border-accent/20">
                        {/* 3D Grid Overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                        {/* Dynamic Light Beam */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

                        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                            {/* Floating Icons Duo */}
                            <div className="flex gap-4 mb-10 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="h-16 w-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-lg shadow-accent/20 rotate-12">
                                    <Sparkles size={32} />
                                </div>
                                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-white shadow-lg -rotate-12 mt-4">
                                    <ShieldCheck size={32} />
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-10 leading-[1.1] drop-shadow-2xl">
                                Elevate Your Brand To <br />
                                <span className="text-shimmer italic">The Elite Level</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-white/70 font-medium mb-14 leading-relaxed max-w-3xl">
                                Join the vanguard of digital innovation. Partner with SiteCreation.in to architect
                                <span className="text-white border-b-2 border-accent/40 pb-1 ml-2">uncompromising digital legacies</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <Button className="btn-lux-primary px-12 py-8 text-lg rounded-full shadow-lux group/btn" asChild>
                                    <Link href="/contact" className="flex items-center gap-3">
                                        <span>Consult Elite Team</span>
                                        <Zap size={20} className="group-hover/btn:animate-pulse" />
                                    </Link>
                                </Button>

                                <div className="flex items-center gap-6">
                                    <div className="h-px w-12 bg-white/20" />
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Limited Availability</span>
                                    <div className="h-px w-12 bg-white/20" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-accent animate-ping" />
                        <div className="absolute bottom-1/4 left-10 w-1.5 h-1.5 rounded-full bg-accent animate-ping delay-500" />
                    </div>
                </div>
            </div>
        </section>
    );
}
