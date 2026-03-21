import React from "react";
import { expertiseTopics } from "@/data/expertise";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ChevronRight, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

/**
 * Pre-render all expertise slugs at build time (SSG).
 * This is critical for Google indexing — static pages are instantly crawlable
 * without server-side rendering delays that cause "Pending" status in GSC.
 */
export function generateStaticParams() {
    return Object.keys(expertiseTopics).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const topic = expertiseTopics[slug];

    if (!topic) {
        return {
            title: "Expertise Not Found",
        };
    }

    return {
        title: `${topic.title} Services in ${siteConfig.address.city} | SiteCreation.in`,
        description: `${topic.shortDesc} SiteCreation.in offers ${topic.title} services for businesses in ${siteConfig.address.city}, ${siteConfig.address.state}, and across India.`,
        keywords: [topic.title, `${topic.title} ${siteConfig.address.city}`, `${topic.title} Chandigarh`, `${topic.title} India`, topic.category, ...topic.highlights, "SiteCreation", `web agency ${siteConfig.address.city}`, "web agency Chandigarh", "software development India"],
        alternates: {
            canonical: `/expertise/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
            },
        },
        openGraph: {
            title: `${topic.title} | Elite Engineering by SiteCreation.in`,
            description: topic.shortDesc,
            type: "article",
            url: `https://sitecreation.in/expertise/${slug}`,
            images: [
                {
                    url: "/Banner.avif",
                    width: 1200,
                    height: 630,
                    alt: topic.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${topic.title} | Technical Mastery`,
            description: topic.shortDesc,
            images: ["/Banner.avif"],
        },
    };
}


export default async function ExpertisePage({ params }: Readonly<PageProps>) {
    const { slug } = await params;
    const topic = expertiseTopics[slug];

    if (!topic) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            {/* Structured Data for SEO */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    "headline": topic.title,
                    "description": topic.fullDesc,
                    "author": {
                        "@type": "Organization",
                        "name": "SiteCreation.in"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "SiteCreation.in",
                        "alternateName": ["Site Creation", "sitescreation", "makemysite"],
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://sitecreation.in/images/Logo.png"
                        }
                    },
                    "keywords": [topic.title, topic.category, ...topic.highlights].join(", "),
                    "articleSection": topic.category,
                    "inLanguage": "en-IN",
                    "datePublished": "2026-02-09",
                    "dateModified": "2026-02-18",
                }}
            />

            <ScrollProgressBar />
            <Header navLinks={navLinks} />

            <main className="flex-1">
                {/* Breadcrumb Navigation */}
                <div className="bg-secondary/20 border-b border-border/50">
                    <div className="container-custom px-6 py-4">
                        <Breadcrumbs items={[{ label: "Expertise", href: "/#expertise" }, { label: topic.title }]} />
                    </div>
                </div>

                {/* Immersive Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-24 -mb-24" />

                    <div className="container-custom px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-white dark:bg-[#1a1a3e] border border-accent/20 shadow-lux shadow-accent/5">
                                    {topic.icon}
                                </div>
                                <div>
                                    <span className="text-xs font-black uppercase tracking-[0.4em] text-accent block mb-1">{topic.category}</span>
                                    <h1 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.9]">
                                        {topic.title}
                                    </h1>
                                </div>
                            </div>

                            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-12 max-w-3xl">
                                {topic.shortDesc}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="btn-lux-primary px-10 py-5 rounded-full text-base flex items-center gap-3 shadow-lux group"
                                >
                                    <span>Initiate Partnership</span>
                                    <Zap size={18} className="group-hover:animate-pulse" />
                                </Link>
                                <Link
                                    href={topic.relatedService.link}
                                    className="px-10 py-5 rounded-full border border-border bg-white dark:bg-white/5 hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 font-bold text-foreground flex items-center gap-3"
                                >
                                    View Related Service
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dive */}
                <section className="py-24 bg-secondary/20 border-y border-border/50">
                    <div className="container-custom px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                            {/* Content Side */}
                            <div className="lg:col-span-7 space-y-12">
                                <div>
                                    <h2 className="text-3xl font-black text-foreground mb-8">Engineering Philosophy</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                        {topic.fullDesc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {topic.highlights.map((highlight, index) => (
                                        <div key={highlight} className="flex gap-4 p-6 rounded-3xl bg-white dark:bg-[#1a1a3e]/40 border border-border group hover:border-accent/30 transition-all duration-500">
                                            <div className="shrink-0 h-6 w-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <span className="text-foreground font-black tracking-tight text-sm uppercase">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack Side */}
                            <div className="lg:col-span-5">
                                <div className="relative p-6 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#1a1a3e] via-[#0f1429] to-[#1a1a3e] border border-white/10 shadow-2xl overflow-hidden group">
                                    {/* Grid Overlay */}
                                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] mb-10 text-center">Technical Specifications</h3>
                                        <div className="space-y-6">
                                            {topic.techDetails.map((detail) => (
                                                <div key={detail.label} className="flex items-center justify-between py-4 border-b border-white/10 group/item hover:bg-white/5 transition-colors px-4 rounded-xl">
                                                    <span className="text-white/40 text-xs font-black uppercase tracking-wider">{detail.label}</span>
                                                    <span className="text-accent font-black text-sm group-hover/item:scale-105 transition-transform">{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                            <p className="text-white/60 text-xs font-medium italic mb-2">Architected for</p>
                                            <p className="text-white font-black uppercase tracking-[0.2em]">Absolute Performance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Related Expertise Section */}
                            <div className="mt-32 pt-16 border-t border-border/50 lg:col-span-12">
                                <h3 className="text-2xl font-black text-foreground mb-10 uppercase tracking-widest text-center">Master Other <span className="text-accent italic">Technologies</span></h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {Object.values(expertiseTopics)
                                        .filter(t => t.slug !== slug)
                                        .slice(0, 3)
                                        .map(relatedTopic => (
                                            <Link
                                                key={relatedTopic.slug}
                                                href={`/expertise/${relatedTopic.slug}`}
                                                className="group block p-8 rounded-[2.5rem] bg-secondary/30 border border-border/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-500"
                                            >
                                                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    {relatedTopic.icon}
                                                </div>
                                                <h4 className="text-xl font-black text-foreground group-hover:text-accent transition-colors leading-tight mb-4">
                                                    {relatedTopic.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                                    {relatedTopic.shortDesc}
                                                </p>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container-custom px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8">
                                Ready to Architect Your <br />
                                <span className="text-accent italic">Digital Legacy?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-12 font-medium">
                                Leverage our specialized expertise in {topic.title} to build a platform that outlasts the competition.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 btn-lux-primary px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lux"
                            >
                                Get Started →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
