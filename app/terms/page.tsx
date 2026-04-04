"use client";

import React from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WebPageSchema } from "@/components/ui/WebPageSchema";

export default function TermsOfService() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <ScrollProgressBar />
            <Header navLinks={navLinks} />

            <WebPageSchema
                title="Terms of Service | SiteCreation"
                description="SiteCreation's terms of service. Our commitment to excellence, architectural digital craftsmanship, and professional engagement standards."
                url="/terms"
                breadcrumbs={[{ name: "Terms of Service" }]}
            />

            <main className="flex-1 pt-8 pb-20">
                <div className="container-custom px-6 pb-4">
                    <Breadcrumbs items={[{ label: "Terms of Service" }]} />
                </div>
                <div className="container-custom px-6">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Professional Standards</span>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-12">
                            Terms of <span className="text-accent italic">Service</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">1. Engagement Standards</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    SiteCreation operates as a global engineering collective. By engaging our services, you agree to a partnership built on transparency, technical excellence, and architectural integrity. We commit to delivering high-performance digital ecosystems that align with international enterprise standards.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">2. Intellectual Property</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Upon full payment of all fees due, SiteCreation transfers all intellectual property rights for the specific digital assets created under the scope of work to the client, unless otherwise specified in the service agreement for proprietary frameworks or licensed components.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">3. Professional Liability</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    We architect systems for maximum uptime and performance. While we leverage industry-leading security practices and cloud infrastructure (including Azure and AWS), SiteCreation&apos;s liability is limited to the fees paid for the specific engineering phase in which any discrepancy may arise.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-6">4. Global Jurisdiction</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    These terms are governed by the laws of the jurisdiction in which our strategic hubs are located, primarily Dubai, UAE, and are interpreted in alignment with international commercial standards for digital services.
                                </p>
                            </section>

                            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] border border-accent/30">
                                <p className="text-white font-bold mb-2">Request a Formal Agreement?</p>
                                <p className="text-[#f7e7ce]/60 text-sm">For enterprise contracts and detailed SLAs, please contact our legal team at <a href="mailto:legal@sitecreation.in" className="text-accent underline">legal@sitecreation.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
