import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks, siteConfig } from "@/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
);
const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
);
const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
);
const LayersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>
);

interface PageProps {
    params: Promise<{ id: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} - ${project.cat} Case Study | SiteCreation.in`,
        description: project.description,
        alternates: {
            canonical: `/portfolio/${project.id}`,
        },
        openGraph: {
            title: `${project.title} - ${project.cat} Case Study by SiteCreation.in Chandigarh`,
            description: project.description,
            url: `https://sitecreation.in/portfolio/${project.id}`,
            siteName: "SiteCreation.in",
            images: [{ url: project.images[0], width: 1200, height: 630, alt: `${project.title} - SiteCreation.in` }],
            locale: "en_IN",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} Case Study | SiteCreation.in`,
            description: project.description,
            images: [project.images[0]],
        },
    };
}

export default async function ProjectCaseStudyPage({ params }: Readonly<PageProps>) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) notFound();

    return (
        <div className="flex min-h-screen flex-col bg-background">
            {/* Structured Schema for Portfolio Item */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.title,
                    "headline": `${project.title} - ${project.cat} Case Study`,
                    "description": project.description,
                    "url": `${siteConfig.url}/portfolio/${project.id}`,
                    "datePublished": "2025-01-01", // Placeholder, ideally from project data
                    "creator": {
                        "@type": "Organization",
                        "name": siteConfig.name,
                        "url": siteConfig.url
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": siteConfig.name,
                        "logo": {
                            "@type": "ImageObject",
                            "url": siteConfig.logo
                        }
                    },
                    "keywords": project.technologies.join(", "),
                    "image": `${siteConfig.url}${project.images[0]}`,
                    "about": project.technologies.map(tech => ({
                        "@type": "Thing",
                        "name": tech
                    })),
                    "awards": "Optimized for Core Web Vitals 100/100"
                }}
            />

            <Header navLinks={navLinks} />

            <main className="flex-1 relative">
                {/* Header Context */}
                <div className="py-4 container-custom px-4 sm:px-6">
                    <Breadcrumbs items={[
                        { label: "Portfolio", href: "/portfolio" },
                        { label: project.title }
                    ]} />
                </div>

                {/* Hero section */}
                <section className="py-12 md:py-20 container-custom px-4 sm:px-6 mt-4">
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <div className="flex flex-col gap-4">
                            {/* Category badge */}
                            <span className={`inline-block w-fit px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg ${project.color || 'bg-accent'}`}>
                                {project.cat}
                            </span>

                            {/* Title + buttons always in one row on md+, stack on xs */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight shrink-0">
                                    {project.title}
                                </h1>

                                <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row gap-3 shrink-0">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-lux-primary px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 whitespace-nowrap"
                                    >
                                        View Live Web
                                        <ExternalLinkIcon />
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="px-6 py-3.5 rounded-full border-2 border-border/80 bg-secondary/10 hover:bg-secondary/30 text-foreground font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                                    >
                                        Discuss Similar Project
                                    </Link>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed mt-2">
                                {project.description}
                            </p>
                        </div>

                        {/* Image Showcase */}
                        <div className="relative group perspective w-full">
                            <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none" />
                            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-secondary/20">
                                <Image
                                    src={project.images[0]}
                                    alt={`${project.title} Overview`}
                                    width={1920}
                                    height={1080}
                                    className="w-full h-auto"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-white font-black tracking-widest uppercase text-sm md:text-base drop-shadow-md">
                                        Client: {project.client || "Confidential"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Highlights — Metrics bar */}
                {project.highlights && (
                    <section className="py-16 bg-[#0f1429] border-y border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                        <div className="container-custom px-4 sm:px-6 relative z-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-white/10">
                                {project.highlights.map((h: { metric: string; label: string }, i: number) => (
                                    <div key={h.label} className={`flex flex-col items-center justify-center text-center ${i === 0 || i === 2 ? 'border-none md:border-solid' : 'border-none'} ${i === 0 ? '!border-l-0' : ''}`}>
                                        <p className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-md">
                                            {h.metric}
                                        </p>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                            {h.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Key Features Grid */}
                {project.features && (
                    <section className="py-24 container-custom px-4 sm:px-6 relative">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4 block">Platform Infrastructure</span>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">Core Capabilities</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.features.map((f: { icon: string; title: string; desc: string }) => (
                                <div key={f.title} className="p-8 rounded-[2rem] bg-background border border-border/50 hover:border-accent/30 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-colors group-hover:bg-accent/10" />

                                    <div className="flex items-center gap-4 mb-6 relative">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-2xl border border-border/50 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                            {f.icon}
                                        </div>
                                        <h3 className="text-foreground font-black text-lg tracking-wide group-hover:text-accent transition-colors">
                                            {f.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed relative font-medium">
                                        {f.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Case Study Details */}
                <section className="py-24 bg-secondary/10 border-y border-border/50">
                    <div className="container-custom px-4 sm:px-6">
                        <div className="grid lg:grid-cols-12 gap-16">

                            {/* Narrative */}
                            <div className="lg:col-span-8 space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-black text-foreground">Project Overview</h2>
                                    <div className="p-8 pb-10 rounded-[2.5rem] bg-background border border-border/50 shadow-xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />

                                        <div className="prose prose-invert max-w-none text-muted-foreground relative z-10 
                                            prose-headings:text-foreground prose-headings:font-black prose-headings:mb-4 prose-headings:tracking-tight 
                                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:first:mt-0 
                                            prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 
                                            prose-strong:text-foreground prose-strong:font-black prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 leading-loose space-y-6">
                                            {project.fullDescription?.split('\n\n').map((paragraph: string, i: number) => {
                                                if (paragraph.startsWith('### ')) {
                                                    return (
                                                        <h3 key={paragraph} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-6 bg-accent rounded-full" />
                                                            {paragraph.replaceAll('### ', '')}
                                                        </h3>
                                                    );
                                                }
                                                return <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph.replaceAll(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                                    <div className="p-8 rounded-[2rem] bg-[#0f1429] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute -inset-10 bg-accent/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none" />
                                        <div className="flex items-center gap-4 mb-4 relative z-10">
                                            <div className="text-accent bg-accent/10 p-3 rounded-xl">
                                                <ZapIcon />
                                            </div>
                                            <h4 className="text-white font-black text-lg">Performance</h4>
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed relative z-10 font-medium">
                                            Architected specifically to achieve perfect 100/100 Core Web Vitals across all devices.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-[2rem] bg-[#0f1429] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute -inset-10 bg-accent/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none" />
                                        <div className="flex items-center gap-4 mb-4 relative z-10">
                                            <div className="text-accent bg-accent/10 p-3 rounded-xl">
                                                <ShieldCheckIcon />
                                            </div>
                                            <h4 className="text-white font-black text-lg">Security First</h4>
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed relative z-10 font-medium">
                                            Built with zero-trust architecture, ensuring all user data is encrypted and transactions verified.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Metadata */}
                            <div className="lg:col-span-4">
                                <div className="p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1a1a3e] via-[#0f1429] to-[#1a1a3e] border border-white/10 shadow-xl overflow-hidden relative">
                                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-8">
                                            <LayersIcon />
                                            <h3 className="text-xl font-black text-white">Tech Stack</h3>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            {project.technologies?.map(tech => (
                                                <div key={tech} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl group hover:bg-white/10 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                                                    <span className="text-white/80 font-bold text-sm tracking-wide">{tech}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10 pt-8 border-t border-white/10">
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-black mb-2">Client</p>
                                            <p className="text-lg text-white font-bold">{project.client}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Secondary Images if they exist */}
                {project.images.length > 1 && (
                    <section className="py-24 container-custom">
                        <div className="grid md:grid-cols-2 gap-8">
                            {project.images.slice(1).map((img, i) => (
                                <div key={img} className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/50 shadow-lg">
                                    <Image src={img} alt={`${project.title} Interface ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <CTABanner />
            </main>
            <Footer />
        </div>
    );
}
