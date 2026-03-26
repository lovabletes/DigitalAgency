"use client";

import React from "react";
import { navLinks, siteConfig } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { ServiceSchema } from "@/components/ui/ServiceSchema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WebPageSchema } from "@/components/ui/WebPageSchema";



export default function ContactPage() {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = React.useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        // Replace this with your Web3Forms Access Key
        formData.append("access_key", "e6f7e010-a29f-4c45-be4d-46055149dfc4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (err: unknown) {
            console.error("Contact form error:", err);
            setStatus("error");
            setErrorMessage("Failed to send message. Please check your connection.");
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Inquiry & Partnership"
                description="Secure your digital legacy with a strategic partnership with SiteCreation."
                url="/contact"
            />

            <WebPageSchema
                title="Contact SiteCreation | Global Strategy & Engineering"
                description="Secure your digital legacy. Partner with SiteCreation, a premium digital engineering hub serving global enterprises in the USA, EU, and Middle East."
                url="/contact"
                breadcrumbs={[{ name: "Contact" }]}
                faqs={[
                    { question: "How quickly do you respond to inquiries?", answer: "Our team typically responds to all inquiries within 24 hours. For urgent project discussions, booking a strategy call via our calendar is the fastest way to connect." },
                    { question: "Do you offer free consultations?", answer: "Yes, we provide initial 15-minute consultations to understand your vision and determine how our elite engineering collective can best assist your brand." },
                    { question: "Where is SiteCreation headquartered?", answer: "SiteCreation is headquartered in Mohali, India, operating as a global engineering hub serving high-value brands across North America, the European Union, and the Middle East." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Contact" }]} />
                </div>
                <PageHero
                    title="Let's Start Your"
                    subtitle="Journey"
                    description="Ready to elevate your digital presence? We're here to turn your vision into a reality. Reach out to our team of experts today."
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Contact Us</span>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                                    Collaborate with <span className="text-accent italic">Excellence</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                                    Whether you have a specific project in mind or just want to explore the possibilities, we're ready to engage. Our team responds to all inquiries within 24 hours.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-wider text-accent">Global Support Center</h4>
                                    <p className="text-foreground font-semibold leading-relaxed">
                                        US: {siteConfig.contact.phone}<br />
                                        UK: {siteConfig.contact.phoneUK}<br />
                                        IN: {siteConfig.contact.phoneIndia}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-wider text-accent">Partnerships & Inquiries</h4>
                                    <p className="text-foreground font-semibold">
                                        {siteConfig.contact.email}<br />
                                        {siteConfig.globalTargeting?.timezoneOverlap}
                                    </p>
                                </div>
                            </div>

                            <div className="p-10 rounded-[2rem] bg-accent/5 border border-accent/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <h4 className="text-xl font-black text-foreground mb-4">Book a Strategy Call</h4>
                                <p className="text-muted-foreground font-medium mb-8">
                                    Prefer a direct conversation? Schedule a 15-minute consultation with our lead strategist.
                                </p>
                                <Button className="btn-lux-primary w-full sm:w-auto" asChild>
                                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                                        View Calendar →
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card p-6 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl relative">
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="h-20 w-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 border border-accent/30">
                                        <CheckCircle2 size={40} className="text-accent" />
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground mb-4">Message Sent!</h3>
                                    <p className="text-muted-foreground font-medium max-w-sm">
                                        Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                                    </p>
                                    <Button
                                        onClick={() => setStatus("idle")}
                                        className="mt-10 btn-lux-primary px-8"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <input type="hidden" name="subject" value="New Contact Inquiry from SiteCreation.in" />
                                    <input type="hidden" name="from_name" value="SiteCreation.in Portfolio" />

                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                suppressHydrationWarning
                                                className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="company" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Company</label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                required
                                                suppressHydrationWarning
                                                className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                suppressHydrationWarning
                                                className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium"
                                                placeholder="work@yourcompany.com"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="budget" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Est. Budget</label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                required
                                                defaultValue=""
                                                suppressHydrationWarning
                                                className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium appearance-none"
                                            >
                                                <option value="" disabled>Select Budget Range</option>
                                                <option value="5k-10k">$5k - $10k</option>
                                                <option value="10k-25k">$10k - $25k</option>
                                                <option value="25k-50k">$25k - $50k</option>
                                                <option value="50k+">$50k+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="interest" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Interested In</label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                required
                                                defaultValue=""
                                                suppressHydrationWarning
                                                className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium appearance-none"
                                            >
                                                <option value="" disabled>Select Primary Interest</option>
                                                <option value="enterprise-mobile">Enterprise Mobile Apps</option>
                                                <option value="smart-tv">Smart TV (Apple TV, Android TV)</option>
                                                <option value="luxury-web">Luxury Web Architecture</option>
                                                <option value="cloud-migration">Cloud & Backend Infrastructure</option>
                                            </select>
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="timezone" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Timezone</label>
                                            <select
                                                id="timezone"
                                                name="timezone"
                                                required
                                                defaultValue=""
                                                suppressHydrationWarning
                                                className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium appearance-none"
                                            >
                                                <option value="" disabled>Select Timezone</option>
                                                <option value="EST">EST (Eastern Time)</option>
                                                <option value="PST">PST (Pacific Time)</option>
                                                <option value="CST">CST (Central Time)</option>
                                                <option value="GMT">GMT / BST (UK)</option>
                                                <option value="CET">CET (Central Europe)</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className="w-full bg-background border-2 border-border/50 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all font-medium resize-none"
                                            placeholder="Tell us about your project requirements..."
                                        />
                                    </div>

                                    <div className="flex items-start gap-4 p-4 border border-border/30 rounded-2xl bg-muted/10">
                                        <input
                                            type="checkbox"
                                            id="gdpr"
                                            name="gdpr"
                                            required
                                            className="mt-1 w-5 h-5 accent-accent"
                                        />
                                        <label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed cursor-pointer select-none">
                                            I consent to the collection and processing of my data in accordance with the Privacy Policy (GDPR). I understand my information will be used solely to process this inquiry.
                                        </label>
                                    </div>

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm font-bold">
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-8 text-lg font-black uppercase tracking-widest shadow-lux disabled:opacity-50"
                                    >
                                        {status === "loading" ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
