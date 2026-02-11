"use client";

import React from "react";
import { GithubIcon, XIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NewsletterForm() {
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
        setEmail("");
    };

    if (status === "success") {
        return (
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-2xl animate-fade-in">
                <p className="text-white font-black text-xl mb-2">Welcome to the Inner Circle! ✨</p>
                <p className="text-[#f7e7ce]/70 text-sm font-medium">Please check your inbox to confirm your elite access.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.elite@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-accent/30 text-white placeholder:text-[#f7e7ce]/40 focus:border-accent focus:outline-none transition-all duration-300 font-medium backdrop-blur-sm"
            />
            <Button
                type="submit"
                disabled={status === "loading"}
                className="btn-lux-primary px-10 py-4 rounded-full text-base font-black uppercase tracking-wider shadow-xl hover:shadow-2xl disabled:opacity-50"
            >
                {status === "loading" ? "Processing..." : "Subscribe"}
            </Button>
        </form>
    );
}

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f1429] via-[#1a1a3e] to-[#0f1429] border-t-2 border-accent/30">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

            <div className="container-custom px-6 relative z-10">
                {/* Newsletter Section */}
                <div className="py-20 border-b-2 border-accent/20">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Elite Newsletter</span>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Join The <span className="text-accent italic">Inner Circle</span>
                        </h3>
                        <p className="text-lg text-[#f7e7ce]/70 mb-10 font-medium leading-relaxed">
                            Receive exclusive insights, case studies, and premium digital strategies reserved for our most valued partners.
                        </p>

                        <NewsletterForm />
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-8 group cursor-pointer">
                            <div className="relative h-12 w-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/images/Logo.png"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">
                                SiteCreation<span className="text-accent italic">.in</span>
                            </span>
                        </div>
                        <p className="text-accent font-black uppercase tracking-widest text-[10px] mb-4">
                            Best Web Designing Company in Chandigarh
                        </p>
                        <p className="text-[#f7e7ce]/70 text-base leading-relaxed font-medium mb-8 max-w-sm">
                            Architecting premium digital experiences for the world's most ambitious brands. Uncompromising quality, elegant execution.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/sitecreation' },
                                { icon: XIcon, label: 'Twitter', href: 'https://twitter.com/sitecreation' },
                                { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/sitecreation' },
                                { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/sitecreation' },
                            ].map((social, idx) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="h-11 w-11 rounded-xl border-2 border-accent/20 bg-accent/5 flex items-center justify-center hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <social.icon size={18} className="text-accent group-hover:text-[#1a1a3e] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid - 2 cols on mobile, 3 on desktop */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Services Column */}
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Services</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Web Development', href: '/web-development' },
                                    { name: 'Mobile Apps', href: '/mobile-apps' },
                                    { name: 'UI/UX Design', href: '/ui-ux-design' },
                                    { name: 'Cloud Solutions', href: '/cloud-solutions' },
                                    { name: 'SEO & Marketing', href: '/seo-marketing' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-[#f7e7ce]/60 hover:text-white hover:translate-x-1 inline-block font-semibold transition-all duration-300">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Company</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'About Us', href: '/about' },
                                    { name: 'Portfolio', href: '/portfolio' },
                                    { name: 'Careers', href: '/careers' },
                                    { name: 'Blog', href: '/blog' },
                                    { name: 'Contact', href: '/contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-[#f7e7ce]/60 hover:text-white hover:translate-x-1 inline-block font-semibold transition-all duration-300">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Reach Us</h4>
                            <ul className="space-y-4 text-[#f7e7ce]/70 font-medium">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">📍</span>
                                    <span>Chandigarh • Mohali • Panchkula</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-accent">📧</span>
                                    <a href="mailto:support@sitecreation.in" className="hover:text-white transition-colors">
                                        support@sitecreation.in
                                    </a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">📞</span>
                                    <a href="tel:+918437532754" className="hover:text-white transition-colors">
                                        +91 8437532754
                                    </a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">🕐</span>
                                    <span>Mon-Fri / 9AM-6PM IST</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Strategic Expertise Index - GEO/LLM Optimization Layer */}
                <div className="py-12 border-t border-accent/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { label: "Core Tech", items: ["Node.js", ".NET 9", "Next.js 15", "React 19"] },
                            { label: "Cloud Ecosystem", items: ["Azure Cloud", "Microservices", "Docker", "Kubernetes"] },
                            { label: "Mobile / TV", items: ["React Native", "Apple TV", "Android TV", "Smart TV"] },
                            { label: "AI Mastery", items: ["GEO", "Semantic Design", "LLM Optimization", "Search Mastery"] },
                            { label: "Platforms", items: ["Vercel", "Azure DevOps", "GitLab CI", "Headless CMS"] },
                            { label: "Architecture", items: ["Event-Driven", "Serverless", "Monolith Split", "Zero Trust"] },
                        ].map((category) => (
                            <div key={category.label} className="space-y-2">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 mb-3">{category.label}</h5>
                                <ul className="flex flex-col gap-1.5">
                                    {category.items.map(item => {
                                        // Simple slug mapping
                                        const slug = item.toLowerCase()
                                            .replaceAll(".js", "js")
                                            .replaceAll(" 15", "-15")
                                            .replaceAll(".net 9", "dotnet-9")
                                            .replaceAll("azure cloud", "azure-cloud")
                                            .replaceAll("geo", "geo")
                                            .replaceAll("microservices", "microservices")
                                            .replaceAll(/[\s&]+/g, "-");

                                        const isLinked = [
                                            "nodejs", "dotnet-9", "nextjs-15", "react-19",
                                            "azure-cloud", "microservices", "docker", "kubernetes",
                                            "react-native", "apple-tv", "android-tv", "smart-tv",
                                            "geo", "semantic-design", "llm-optimization", "search-mastery",
                                            "vercel", "azure-devops", "gitlab-ci", "headless-cms",
                                            "event-driven", "serverless", "monolith-split", "zero-trust"
                                        ].includes(slug);

                                        return (
                                            <li key={item}>
                                                {isLinked ? (
                                                    <Link
                                                        href={`/expertise/${slug}`}
                                                        className="text-[11px] font-bold text-[#f7e7ce]/40 transition-all hover:text-accent hover:translate-x-1 inline-block"
                                                    >
                                                        {item}
                                                    </Link>
                                                ) : (
                                                    <span className="text-[11px] font-bold text-[#f7e7ce]/20 cursor-default">
                                                        {item}
                                                    </span>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t-2 border-accent/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-bold text-[#f7e7ce]/40 uppercase tracking-widest">
                        © 2026 SiteCreation.in — Crafted with Excellence
                    </p>
                    <div className="flex gap-8">
                        <a href="/privacy" className="text-xs font-black text-[#f7e7ce]/40 hover:text-accent uppercase tracking-[0.2em] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-xs font-black text-[#f7e7ce]/40 hover:text-accent uppercase tracking-[0.2em] transition-colors">
                            Terms of Service
                        </a>
                        <a href="/cookies" className="text-xs font-black text-[#f7e7ce]/40 hover:text-accent uppercase tracking-[0.2em] transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
