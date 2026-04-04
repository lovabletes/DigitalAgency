"use client";

import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, Search, Compass } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <main className="flex-1 flex items-center justify-center relative overflow-hidden py-24">
                {/* Background Aesthetics */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" />
                </div>

                <div className="container-custom px-6 relative z-10 text-center">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <span className="text-accent font-black uppercase tracking-[0.4em] text-sm block animate-in fade-in slide-in-from-bottom-4 duration-700">Error 404</span>

                        <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
                            Digital <span className="text-accent italic">Dead End.</span>
                        </h1>

                        <p className="text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            The architectural masterpiece you&apos;re looking for was either moved, demolished, or never existed in this realm.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 mt-16 animate-in fade-in zoom-in duration-1000 delay-500">
                            {[
                                { title: "Our Services", href: "/#services", icon: Search },
                                { title: "Latest Insights", href: "/blog", icon: Compass },
                                { title: "Elite Portfolio", href: "/portfolio", icon: ChevronRight },
                            ].map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#1a1a3e] transition-colors duration-500">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-foreground">{item.title}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="pt-12">
                            <Button className="btn-lux-primary px-10 py-8 text-lg font-black uppercase tracking-widest group" asChild>
                                <Link href="/">
                                    <Home className="mr-3 h-5 w-5" />
                                    Return to Sanctuary
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
