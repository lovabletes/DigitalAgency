"use client";

import React from "react";
import { Globe, Clock, MapPin } from "lucide-react";

export function GlobalPresence() {
    return (
        <section className="py-24 bg-[#0a0f1d] relative overflow-hidden">
            <div className="bg-noise" />
            
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Global Partner</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 leading-[1.1]">
                                Local Strategy.<br />
                                <span className="text-accent italic brightness-125 drop-shadow-sm">Global Execution.</span>
                            </h2>
                        </div>
                        
                        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                            We operate as a high-fidelity digital engineering collective. While our primary Engineering Center is based in <span className="text-white font-bold underline decoration-accent/50 underline-offset-4 decoration-2">Mohali, India</span>, we provide specialized coverage for Western markets.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                                    <Globe className="text-accent h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">North America / EU</h4>
                                    <p className="text-white/40 text-sm">Dedicated overlap with EST, PST, and CET timezones.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                                    <Clock className="text-accent h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">24/7 Availability</h4>
                                    <p className="text-white/40 text-sm">Round-the-clock engineering and support cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative p-8 md:p-10 rounded-[3rem] border border-white/20 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Active Project Nodes</span>
                                    </div>
                                    <span className="text-accent font-bold text-xs tracking-wider">GLOBAL-ACTIVE-v2.0</span>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { city: "San Francisco", state: "Live Support", meta: "PST" },
                                        { city: "New York", state: "Strategy Hub", meta: "EST" },
                                        { city: "London", state: "Design Liaison", meta: "GMT" },
                                        { city: "Berlin", state: "Cloud Architect", meta: "CET" },
                                        { city: "Mohali", state: "Engineering HQ", meta: "IST", active: true }
                                    ].map((node) => (
                                        <div key={node.city} className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${node.active ? 'bg-accent/20 border-accent/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                                            <div className="flex items-center gap-3">
                                                <MapPin size={16} className={node.active ? 'text-accent' : 'text-white/40'} />
                                                <div>
                                                    <h5 className="text-white text-sm font-bold">{node.city}</h5>
                                                    <p className={`text-[10px] uppercase font-black tracking-tighter ${node.active ? 'text-accent/90' : 'text-white/60'}`}>{node.state}</p>
                                                </div>
                                            </div>
                                            <span className={`text-[10px] font-mono font-bold ${node.active ? 'text-accent' : 'text-white/40'}`}>{node.meta}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
