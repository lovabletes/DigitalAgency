"use client";

import React from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";

export default function CookiePolicy() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <ScrollProgressBar />
            <Header navLinks={navLinks} />

            <main className="flex-1 pt-32 pb-20">
                <div className="container-custom px-6">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Legal Documentation</span>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-12">
                            Cookie <span className="text-accent italic">Policy</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">1. What Are Cookies</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">2. How We Use Cookies</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    When you use and access SiteCreation.in, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                                        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                                            <span className="h-2 w-2 bg-accent rounded-full" />
                                            Essential Cookies
                                        </h3>
                                        <p className="text-sm text-muted-foreground">Necessary for the operation of our premium digital platform, including authentication and security.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                                        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                                            <span className="h-2 w-2 bg-accent rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                            Performance Cookies
                                        </h3>
                                        <p className="text-sm text-muted-foreground">To analyze how users navigate our site and monitor technical performance.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">3. Third-Party Cookies</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service and provide refined analytics.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">4. Your Choices</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
                                </p>
                            </section>

                            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] border border-accent/30">
                                <p className="text-white font-bold mb-2">Want to manage your preferences?</p>
                                <p className="text-[#f7e7ce]/60 text-sm">Our support team can guide you through our data practices at <a href="mailto:support@sitecreation.in" className="text-accent underline">support@sitecreation.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
