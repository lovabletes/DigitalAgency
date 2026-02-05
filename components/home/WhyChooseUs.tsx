"use client";

import React from "react";

interface Feature {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

interface WhyChooseUsProps {
    features: Feature[];
}

export function WhyChooseUs({ features }: Readonly<WhyChooseUsProps>) {
    return (
        <div className="bg-[#1a1a3e] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-lux group mt-32">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] z-0" />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />

            <div className="relative z-10 transition-transform duration-700 hover:scale-[1.01]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">The Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">We Turn Ideas Into <span className="text-shimmer italic">Digital Reality</span></h2>
                    <p className="text-lg text-[#f7e7ce]/80 leading-relaxed font-medium">
                        With years of experience building web and mobile applications, we've perfected a process that ensures success for every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm card-3d">
                            <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                            <p className="text-sm text-[#f7e7ce]/70 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
