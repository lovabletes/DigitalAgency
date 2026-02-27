"use client";
// Force re-compilation to resolve stale HMR issues with lucide-react icons


import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Inline icons to fix persistent lucide-react build error
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

const GithubIcon = ({ size, width, height, ...props }: IconProps) => (
    <svg width={size ?? width ?? 24} height={size ?? height ?? 24} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.79 1.05a9.3 9.3 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
);
const XIcon = ({ size, width, height, ...props }: IconProps) => (
    <svg width={size ?? width ?? 24} height={size ?? height ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);
const LinkedinIcon = ({ size, width, height, ...props }: IconProps) => (
    <svg width={size ?? width ?? 24} height={size ?? height ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);
const InstagramIcon = ({ size, width, height, ...props }: IconProps) => (
    <svg width={size ?? width ?? 24} height={size ?? height ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

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
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <input
                id="newsletter-email"
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
                                    alt="SiteCreation.in Logo"
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
                            Architecting premium digital experiences for the world&apos;s most ambitious brands. Uncompromising quality, elegant execution.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/sitecreation' },
                                { icon: XIcon, label: 'Twitter', href: 'https://twitter.com/sitecreation' },
                                { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/sitecreation' },
                                { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/sitecreation' },
                            ].map((social) => (
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
                            <h3 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Services</h3>
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
                            <h3 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Company</h3>
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

                        {/* Reach Us Column */}
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Reach Us</h3>
                            <ul className="space-y-6">
                                <li>
                                    <p className="text-[11px] font-bold text-[#f7e7ce]/40 uppercase tracking-widest mb-2">Location</p>
                                    <p className="text-white/80 font-medium text-sm leading-relaxed">
                                        Phase 8B, Industrial Area,<br />
                                        Sector 74, Mohali, PB
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[11px] font-bold text-[#f7e7ce]/40 uppercase tracking-widest mb-2">Contact</p>
                                    <a href="mailto:hello@sitecreation.in" className="text-white/80 hover:text-accent font-medium text-sm block">hello@sitecreation.in</a>
                                    <a href="tel:+919876543210" className="text-white/80 hover:text-accent font-medium text-sm block mt-1">+91 98765 43210</a>
                                </li>
                                <li className="flex items-center gap-2 text-[#f7e7ce]/60">
                                    <span className="text-accent">🕐</span>
                                    <span className="text-sm font-medium">Mon-Fri / 9AM-6PM IST</span>
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
                                                    <a
                                                        href={`/expertise/${slug}`}
                                                        className="text-[11px] font-bold text-[#f7e7ce]/40 transition-all hover:text-accent hover:translate-x-1 inline-block"
                                                    >
                                                        {item}
                                                    </a>
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
                        © {new Date().getFullYear()} SiteCreation.in — Crafted with Excellence
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
            {/* SiteNavigationElement Schema for Services and Company */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@context": "https://schema.org",
                                "@type": "ItemList",
                                "name": "Our Services",
                                "itemListElement": [
                                    { name: 'Web Development', href: '/web-development' },
                                    { name: 'Mobile Apps', href: '/mobile-apps' },
                                    { name: 'UI/UX Design', href: '/ui-ux-design' },
                                    { name: 'Cloud Solutions', href: '/cloud-solutions' },
                                    { name: 'SEO & Marketing', href: '/seo-marketing' }
                                ].map((item, index) => ({
                                    "@type": "SiteNavigationElement",
                                    "position": index + 1,
                                    "name": item.name,
                                    "url": `https://sitecreation.in${item.href}`
                                }))
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "ItemList",
                                "name": "Company Links",
                                "itemListElement": [
                                    { name: 'About Us', href: '/about' },
                                    { name: 'Portfolio', href: '/portfolio' },
                                    { name: 'Careers', href: '/careers' },
                                    { name: 'Blog', href: '/blog' },
                                    { name: 'Privacy Policy', href: '/privacy' }
                                ].map((item, index) => ({
                                    "@type": "SiteNavigationElement",
                                    "position": index + 1,
                                    "name": item.name,
                                    "url": `https://sitecreation.in${item.href}`
                                }))
                            }
                        ]
                    })
                }}
            />
        </footer>
    );
}
