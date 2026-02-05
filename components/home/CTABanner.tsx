"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
    return (
        <section className="section-padding relative">
            <div className="container-custom">
                {/* Light Mode: Royal Gold Gradient with Dark Text */}
                <div className="relative rounded-3xl p-10 md:p-16 overflow-hidden shadow-lux bg-gradient-to-br from-[#d4af37] via-[#e9c46a] to-[#cd7f32] dark:from-[#1a1a3e] dark:via-[#7f1d1d] dark:to-[#1a1a3e]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3)_0%,transparent_50%)]" />

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1a1a3e] dark:text-white tracking-tight mb-8 leading-[1.15]">
                            Elevate Your Brand To The <span className="italic">Elite Level</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[#1a1a3e]/90 dark:text-white/90 font-semibold mb-10 leading-relaxed">
                            Partner with SiteCreation.in and redefine what's possible for your digital presence.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="btn-lux-primary px-10 py-7 text-sm">
                                Consult Elite Team
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
