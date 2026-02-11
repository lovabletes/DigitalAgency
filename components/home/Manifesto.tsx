"use client";

import React from "react";

export function Manifesto() {
    return (
        <section className="py-32 bg-[#0f1429] relative overflow-hidden border-y border-accent/20">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="space-y-4">
                            <span className="text-accent font-black uppercase tracking-[0.4em] text-xs">Strategic Vision</span>
                            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                                The Future of <span className="text-accent italic">Digital</span> Mastery
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed max-w-2xl">
                            <p>
                                At SiteCreation.in, we don't just build websites; we architect high-performance digital ecosystems. In an era where <span className="text-white font-bold">Generative AI</span> and <span className="text-white font-bold">LLMs</span> define how brands are discovered, our engineering philosophy prioritizes <span className="text-accent italic">Semantic Clarity</span> and <span className="text-accent italic">Technical Authority</span>.
                            </p>
                            <p>
                                Our approach blends <span className="text-white font-bold">Headsless Architecture</span> with <span className="text-white font-bold">Composable Commerce</span> principles, ensuring your brand is not only visible to human users but also authoritative for AI agents and search crawlers.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 w-full max-w-md">
                            <div>
                                <h4 className="text-accent font-black text-2xl mb-2">99.9%</h4>
                                <p className="text-white/50 text-xs uppercase tracking-widest font-black">Uptime Infrastructure</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-black text-2xl mb-2">&lt;1s</h4>
                                <p className="text-white/50 text-xs uppercase tracking-widest font-black">Average Latency</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[4rem] shadow-2xl">
                            <h3 className="text-2xl font-black text-white mb-8">Our Engineering Principles</h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Azure Mastery", desc: "Enterprise-grade cloud setups optimized for security and cost on Microsoft Azure." },
                                    { title: "Microservices Evolution", desc: "Expert assessment and execution of monolith-to-microservices legacy transformations." },
                                    { title: "Multi-Platform Scope", desc: "Architecting seamless experiences across Web, Mobile, and Smart TV ecosystems." },
                                    { title: "GEO & AI Authority", desc: "Optimizing content structure for Generative Engine discovery and LLM citation." }
                                ].map((principle) => (
                                    <li key={principle.title} className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                                            <span className="text-white font-black uppercase tracking-widest text-xs">{principle.title}</span>
                                        </div>
                                        <p className="text-white/60 text-sm font-medium leading-relaxed pl-4">
                                            {principle.desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
