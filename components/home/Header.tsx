"use client";

import React from "react";
import { ChevronRightIcon, MenuIcon, CloseIcon } from "@/components/icons/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { classNames } from "@/utils/class-names";
import Link from "next/link";

interface NavLink {
    name: string;
    href: string;
}

interface HeaderProps {
    navLinks: NavLink[];
}

export function Header({ navLinks }: Readonly<HeaderProps>) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={classNames(
            "sticky top-0 z-50 w-full border-b border-accent/30 backdrop-blur-xl transition-all duration-500",
            isScrolled
                ? "bg-[#1a1a3e]/95 dark:bg-[#0f1429]/95 shadow-2xl shadow-accent/10"
                : "bg-gradient-to-r from-[#1a1a3e] via-[#1a1a3e] to-[#2a2a4e] dark:from-[#0f1429] dark:to-[#1a1a3e] shadow-lg"
        )}>
            <div className="container-custom flex h-16 items-center justify-between px-6">
                <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
                    <div className="relative h-10 w-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/images/Logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-black tracking-tight text-white dark:text-[#f7e7ce]">
                        SiteCreation<span className="text-accent italic">.in</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.15em] text-[#f7e7ce]/80 hover:text-accent transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button className="btn-lux-primary group" asChild>
                        <Link href="/contact">
                            Get Started
                            <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <CloseIcon size={20} className="text-accent" /> : <MenuIcon size={20} className="text-accent" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute inset-x-0 top-full z-50 animate-in fade-in slide-in-from-top-4 border-b border-accent/30 bg-[#1a1a3e]/98 dark:bg-[#0f1429]/98 p-8 backdrop-blur-3xl md:hidden">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-bold uppercase tracking-widest text-[#f7e7ce]/80 hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="btn-lux-primary w-full py-8 text-xl" asChild>
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
