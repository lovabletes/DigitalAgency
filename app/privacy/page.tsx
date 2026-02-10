"use client";

import React from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";

export default function PrivacyPolicy() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <ScrollProgressBar />
            <Header navLinks={navLinks} />

            <main className="flex-1 pt-32 pb-20">
                <div className="container-custom px-6">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Legal Documentation</span>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-12">
                            Privacy <span className="text-accent italic">Policy</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">1. Introduction</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    At SiteCreation.in, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">2. The Data We Collect</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                    {[
                                        "Identity Data (name, username)",
                                        "Contact Data (email, telephone)",
                                        "Technical Data (IP address, browser type)",
                                        "Usage Data (how you use our website)",
                                        "Marketing Data (preferences in receiving marketing)"
                                    ].map((item) => (
                                        <li key={item} className="bg-accent/5 border border-accent/10 p-4 rounded-xl flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                                            <span className="font-semibold text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">3. How We Use Your Data</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <div className="space-y-4">
                                    <div className="p-6 bg-secondary/30 rounded-2xl border border-border/50">
                                        <h3 className="font-bold text-foreground mb-2">Service Delivery</h3>
                                        <p className="text-sm text-muted-foreground">To provide the architectural digital services you have requested from us.</p>
                                    </div>
                                    <div className="p-6 bg-secondary/30 rounded-2xl border border-border/50">
                                        <h3 className="font-bold text-foreground mb-2">Communication</h3>
                                        <p className="text-sm text-muted-foreground">To manage our relationship with you, including notification of changes to our terms.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">4. Data Security</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                </p>
                            </section>

                            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] border border-accent/30">
                                <p className="text-white font-bold mb-2">Questions regarding our Privacy Policy?</p>
                                <p className="text-[#f7e7ce]/60 text-sm">Contact our data protection team at <a href="mailto:support@sitecreation.in" className="text-accent underline">support@sitecreation.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
