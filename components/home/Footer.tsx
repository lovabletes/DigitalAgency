"use client";

import React from "react";
import { GithubIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";

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

                        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="your.elite@email.com"
                                className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-accent/30 text-white placeholder:text-[#f7e7ce]/40 focus:border-accent focus:outline-none transition-all duration-300 font-medium backdrop-blur-sm"
                            />
                            <Button className="btn-lux-primary px-10 py-4 rounded-full text-base font-black uppercase tracking-wider shadow-xl hover:shadow-2xl">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-8 group cursor-pointer">
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-gold shadow-lux group-hover:scale-105 transition-transform duration-300">
                                <span className="text-xl font-black text-[#1a1a3e] tracking-tighter">S</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">
                                SiteCreation<span className="text-accent italic">.in</span>
                            </span>
                        </div>
                        <p className="text-[#f7e7ce]/70 text-base leading-relaxed font-medium mb-8 max-w-sm">
                            Architecting premium digital experiences for the world's most ambitious brands. Uncompromising quality, elegant execution.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: GithubIcon, label: 'GitHub', href: '#' },
                                { icon: GithubIcon, label: 'Twitter', href: '#' },
                                { icon: GithubIcon, label: 'LinkedIn', href: '#' },
                                { icon: GithubIcon, label: 'Dribbble', href: '#' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="h-11 w-11 rounded-xl border-2 border-accent/20 bg-accent/5 flex items-center justify-center hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <social.icon size={18} className="text-accent group-hover:text-[#1a1a3e] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'SEO & Marketing'].map((item) => (
                                <li key={item}>
                                    <a href="/" className="text-[#f7e7ce]/60 hover:text-white hover:translate-x-1 inline-block font-semibold transition-all duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="/" className="text-[#f7e7ce]/60 hover:text-white hover:translate-x-1 inline-block font-semibold transition-all duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">Reach Us</h4>
                        <ul className="space-y-4 text-[#f7e7ce]/70 font-medium">
                            <li className="flex items-start gap-2">
                                <span className="text-accent">📍</span>
                                <span>Chandigarh, India</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">📧</span>
                                <a href="mailto:hello@sitecreation.in" className="hover:text-white transition-colors">
                                    hello@sitecreation.in
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">📞</span>
                                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                                    +91 123 456 7890
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">🕐</span>
                                <span>Mon-Fri / 9AM-6PM IST</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t-2 border-accent/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-bold text-[#f7e7ce]/40 uppercase tracking-widest">
                        © 2026 SiteCreation.in — Crafted with Excellence
                    </p>
                    <div className="flex gap-8">
                        <a href="/" className="text-xs font-black text-[#f7e7ce]/40 hover:text-accent uppercase tracking-[0.2em] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/" className="text-xs font-black text-[#f7e7ce]/40 hover:text-accent uppercase tracking-[0.2em] transition-colors">
                            Terms of Service
                        </a>
                        <a href="/" className="text-xs font-black text-[#f7e7ce]/40 hover:text-accent uppercase tracking-[0.2em] transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
