import React from "react";
import { Button } from "@/components/ui/button";
import { StatsCounter } from "./StatsCounter";
import { BrandMarquee } from "./BrandMarquee";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    stats: any[];
    brands: string[];
}

export function Hero({ stats, brands }: Readonly<HeroProps>) {
    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pb-10">
            {/* Visual Context for LLMs & Search Engines (Visually Hidden) */}
            <div className="sr-only">
                <h2>Expert Software Development in .NET, Node.js, and Azure Cloud</h2>
                <p>SiteCreation.in specializes in enterprise-scale digital transformation, monolith to microservices migration, TV application development for Apple TV and Android TV, and advanced SEO ranking strategies including GEO (Generative Engine Optimization).</p>
                <ul>
                    <li>Backend Engineering: C#, ASP.NET Core, Node.js, Express, Python</li>
                    <li>Frontend Excellence: Next.js 15, React 19, TypeScript, Tailwind CSS</li>
                    <li>Mobile & TV: React Native, iOS, Android, Smart TV Apps</li>
                    <li>Cloud Infrastructure: Microsoft Azure, AWS, Microservices Architecture</li>
                </ul>
            </div>

            {/* Immersive Background Banner */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Banner.avif"
                    alt="Strategic Digital Excellence Background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Dark Luxury Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f1429]/90 via-[#1a1a3e]/80 to-[#faf8f3] dark:to-[#0f1429] mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />

                {/* Animated Ambient Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            </div>

            <div className="container-custom relative z-10 pt-8 pb-20">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Decorative Top Ornament */}
                    <div className="flex items-center justify-center gap-3 mb-4 animate-slide-up [animation-delay:100ms]">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
                        <span className="text-accent text-xl">◆</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
                    </div>

                    <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl animate-slide-up [animation-delay:150ms]">
                        <span className="text-white">
                            Crafting <span className="text-accent italic">Luxury</span>
                        </span>
                        {" "}
                        <br className="md:hidden" />
                        <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                            Legacies
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
                    <p className="mx-auto max-w-3xl text-lg md:text-2xl text-white/90 mb-12 font-medium leading-relaxed drop-shadow-lg animate-slide-up [animation-delay:250ms]">
                        We transform <span className="font-bold text-white border-b-2 border-accent/30 pb-1">ambitious visions</span> into <span className="font-bold text-accent">high-performance realities</span>.{" "}
                        <span className="block mt-4 text-base md:text-xl text-white/60 font-normal">Expertise in Web, Mobile, & TV platforms with Azure-scale engineering.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-slide-up [animation-delay:300ms]">
                        <Button className="btn-lux-primary shadow-lux scale-110 border-none text-white hover-3d-tilt group" asChild>
                            <Link href="/contact">
                                <span>Secure Your Project →</span>
                            </Link>
                        </Button>
                        <Button variant="outline" className="h-14 px-10 rounded-full border-2 border-white/30 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-[#1a1a3e] font-bold text-sm uppercase tracking-wider transition-all duration-300 hover-3d-tilt group" asChild>
                            <Link href="/portfolio">
                                <span>View Masterpieces ◆</span>
                            </Link>
                        </Button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Scroll</span>
                            <div className="h-8 w-[2px] bg-gradient-to-b from-accent/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Injected Stats and Marquee at the bottom of dark background */}
            <div className="w-full relative z-20">
                <StatsCounter stats={stats} />
                <div className="mt-10">
                    <BrandMarquee brands={brands} />
                </div>
            </div>
        </section>
    );
}
