import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageHeroProps {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
}

export function PageHero({ title, subtitle, description, image = "/Banner.avif" }: Readonly<PageHeroProps>) {
    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pb-10 pt-32">
            {/* Immersive Background Banner */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt="Luxury Abstract Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Luxury Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f1429]/90 via-[#1a1a3e]/80 to-[#faf8f3] dark:to-[#0f1429] mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />

                {/* Animated Ambient Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            </div>

            <div className="container-custom relative z-10 pt-8 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Decorative Top Ornament */}
                    <div className="flex items-center justify-center gap-3 mb-4 animate-slide-up [animation-delay:100ms]">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
                        <span className="text-accent text-xl">◆</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
                    </div>

                    <h1 className="relative text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl animate-slide-up [animation-delay:150ms]">
                        <span className="text-white">
                            {title} <span className="text-accent italic">{subtitle}</span>
                        </span>
                    </h1>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-3 mb-10 animate-slide-up [animation-delay:200ms]">
                        <div className="flex items-center gap-1">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
                            <div className="h-1 w-1 rounded-full bg-accent/60" />
                        </div>
                        <div className="h-2 w-2 rotate-45 border border-accent bg-accent/20 shadow-lg shadow-accent/50" />
                        <div className="flex items-center gap-1">
                            <div className="h-1 w-1 rounded-full bg-accent/60" />
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
                        </div>
                    </div>

                    {/* Enhanced Description */}
                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90 mb-12 font-medium leading-relaxed drop-shadow-lg animate-slide-up [animation-delay:250ms]">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-slide-up [animation-delay:300ms]">
                        <Button className="btn-lux-primary shadow-lux scale-110 border-none text-white hover-3d-tilt group" asChild>
                            <Link href="/contact">
                                <span>Get Started →</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
