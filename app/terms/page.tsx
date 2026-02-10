"use client";

import React from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";

export default function TermsOfService() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <ScrollProgressBar />
            <Header navLinks={navLinks} />

            <main className="flex-1 pt-32 pb-20">
                <div className="container-custom px-6">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Legal Documentation</span>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-12">
                            Terms of <span className="text-accent italic">Service</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">1. Agreement to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    By accessing or using SiteCreation.in, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our elite digital services.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">2. Intellectual Property</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    The service and its original content, features, and functionality are and will remain the exclusive property of SiteCreation.in and its licensors. Our branding, code architectures, and design patterns are protected by international copyright and trademark laws.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">3. Professional Services</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Our engagement for web development, mobile applications, and cloud orchestration is governed by specific Project Agreements. These terms serve as a foundational framework for those elite partnerships.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                    {[
                                        { title: "Precision", icon: "✨" },
                                        { title: "Scalability", icon: "🚀" },
                                        { title: "Security", icon: "🛡️" }
                                    ].map((item) => (
                                        <div key={item.title} className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                                            <div className="text-3xl mb-3">{item.icon}</div>
                                            <div className="font-bold text-foreground uppercase tracking-widest text-xs">{item.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">4. Limitation of Liability</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    In no event shall SiteCreation.in, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">5. Governing Law</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                                </p>
                            </section>

                            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] border border-accent/30">
                                <p className="text-white font-bold mb-2">Need a detailed service agreement?</p>
                                <p className="text-[#f7e7ce]/60 text-sm">Consult our elite legal team at <a href="mailto:support@sitecreation.in" className="text-accent underline">support@sitecreation.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
