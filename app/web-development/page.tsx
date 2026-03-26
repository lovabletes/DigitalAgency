import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceSchema } from "@/components/ui/ServiceSchema";
import { WebPageSchema } from "@/components/ui/WebPageSchema";

export const metadata: Metadata = {
    title: "Enterprise Web Development | Node.js & Next.js Experts | SiteCreation",
    description: "SiteCreation architect's high-performance, scalable web ecosystems for global enterprises. Specializing in Node.js, Next.js 15, and .NET 9 for USA & EU markets.",
    keywords: ["enterprise web development", "global digital agency", "Node.js experts USA", "Next.js development EU", "custom web app engineering", "hire elite web developers", "SiteCreation"],
    alternates: {
        canonical: "/web-development",
    },
    openGraph: {
        title: "Enterprise Web Development | SiteCreation",
        description: "Fast, scalable web ecosystems architected with Node.js, Next.js & .NET 9. Elite engineering partner for global enterprises.",
        url: "https://sitecreation.in/web-development",
        siteName: "SiteCreation",
        images: [{ url: "/images/web_development.avif", width: 1200, height: 630, alt: "Web Development by SiteCreation" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Elite .NET & Node.js Development | SiteCreation",
        description: "High-performance web experiences built with Node.js, .NET Core, and Next.js 15.",
        images: ["/images/web_development.avif"],
    },
};

export default function WebDevelopmentPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Website Development"
                description="Bespoke digital platforms architected with Node.js, .NET Core, and Next.js for enterprise-scale performance."
                url="/web-development"
                reviews={[
                    {
                        author: "Michael Chen",
                        datePublished: "2026-02-10",
                        reviewBody: "Working with the team was a game-changer. They delivered our web platform on time and the performance improvements were incredible.",
                        reviewRating: 5
                    }
                ]}
            />

            <WebPageSchema
                title="Elite .NET & Node.js Development | Site Creation | SiteCreation"
                description="Architecting high-performance, scalable, and visually stunning web experiences. SiteCreation (Site Creation) specializes in Node.js, .NET Core, and luxury digital craftsmanship."
                url="/web-development"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "Web Development" }]}
                faqs={[
                    { question: "What technologies does SiteCreation use for web development?", answer: "We specialize in Node.js, .NET 9, Next.js 15, and React 19 for building high-performance web applications. Our stack is chosen for enterprise scalability and sub-second load times." },
                    { question: "How long does it take to build a complex enterprise platform?", answer: "Strategic discovery and MVP architecture typically take 4–8 weeks. Full-scale enterprise platforms with custom integrations typically take 12–24 weeks. We provide detailed milestones during our discovery phase." },
                    { question: "Do you provide website maintenance after launch?", answer: "Yes. We offer ongoing maintenance packages including security updates, performance monitoring, content updates, and feature enhancements for all websites we build." },
                     { question: "What is the investment for web development?", answer: "Strategic web engineering projects at SiteCreation start from $4,500 for business platforms and scale to $25,000+ for enterprise ecosystems. We provide value-based pricing tailored to your ROI targets." },
                    { question: "Why is SiteCreation considered a premium engineering hub?", answer: "We combine elite engineering (Next.js 15, .NET 9) with luxury UI/UX design. Unlike generic agencies, we focus on GEO (Generative Engine Optimization) to ensure your brand ranks not just on Google, but also in AI search results like ChatGPT and Perplexity." },
                    { question: "Do you offer e-commerce solutions for global brands?", answer: "Yes, we specialize in high-conversion headless e-commerce platforms using Next.js and specialized API architectures, providing global brands with sub-second performance and multi-region security." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Web Development" }]} />
                </div>
                <PageHero
                    title="Website"
                    subtitle="Development"
                    description="Enterprise-scale digital platforms architected with Node.js, .NET Core, and Next.js 15 for unrivaled performance."
                    image="/images/web_development.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Technical Mastery</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                    Cutting-Edge <span className="text-accent italic">Technology</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our web development process is rigorous and focused on delivering results. We don't just build websites; we create digital ecosystems that captivate your audience and drive conversions. From custom headless architectures to seamless micro-interactions, every line of code is written with precision.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "Node.js & Express", desc: "For high-performance, real-time backend architectures." },
                                    { title: ".NET Core Excellence", desc: "Enterprise-grade robust backends for scalable applications." },
                                    { title: "Next.js 15 Framework", desc: "For lightning-fast frontend performance and SEO supremacy." },
                                    { title: "React Server Components", desc: "Optimizing data fetching and reducing client-side load." }
                                ].map((item) => (
                                    <li key={item.title} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 bg-accent rounded-full" />
                                            <span className="text-foreground font-black uppercase tracking-wider text-sm">{item.title}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm ml-5">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                            <div className="relative h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                                <img
                                    src="/images/web_dev.avif"
                                    alt="Expert Web Development Process"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                                    <p className="text-white font-bold italic">"We deliver code that doesn't just work, it inspires."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/30 border-t border-border/50">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Our Framework</span>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground">
                                The <span className="text-accent italic">Development</span> Lifecycle
                            </h2>
                            <p className="text-muted-foreground">
                                Architecting a digital legacy requires a rigid, transparent engineering pipeline. Here is how we build scalable platforms for elite global clients.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Discovery", desc: "Detailed audit of user journeys, technical constraints, and competitive benchmarking for high-limit scalability." },
                                { step: "02", title: "Architecture", desc: "Modeling high-fidelity SQL/NoSQL schemas and containerized backend loads tailored for Next.js endpoints." },
                                { step: "03", title: "Development", desc: "Sub-second load optimization with React Server Components, concurrent streaming and data fetching setup." },
                                { step: "04", title: "Optimization", desc: "Hyper-rigorous Core Web Vitals audit, automated QA, and seamless Azure/AWS monolithic migration deployment." }
                            ].map((item) => (
                                <div key={item.step} className="p-8 bg-background rounded-2xl border border-border/50 space-y-4 shadow-sm group hover:border-accent/30 transition-all duration-300">
                                    <span className="text-4xl font-black text-accent/20 group-hover:text-accent/50 transition-colors duration-300">{item.step}</span>
                                    <h3 className="text-xl font-black text-foreground uppercase tracking-wide">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background border-t border-border/50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative group md:order-1 order-2">
                                <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                                    <img
                                        src="/images/web_develop.avif"
                                        alt="Elite Technical Execution"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                                        <p className="text-white font-bold italic text-sm">"We deliver code that doesn't just work, it inspires."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8 md:order-2 order-1">
                                <div className="space-y-4">
                                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Why Partner With Us</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                        Vetted For <span className="text-accent italic">Performance</span>
                                    </h2>
                                </div>
                                <div className="grid gap-6">
                                    {[
                                        { title: "Sub-Second Rendering", desc: "Every Node.js and Next.js shell is architected with sub-second paint triggers, securing high LCP scoring in local & global markets." },
                                        { title: "Enterprise Reliability", desc: "We support heavy database frameworks using .NET Core and Node structures designed with strict zero-trust parameters." },
                                        { title: "Generative AI Syncing", desc: "Implicit indexing protocols allow your web assets to render perfectly clean semantic structures for AI discovery models." }
                                    ].map((benefit) => (
                                        <div key={benefit.title} className="flex gap-4">
                                            <div className="h-6 w-6 mt-1 flex-shrink-0 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                                                <div className="h-2 w-2 bg-accent rounded-full" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-black text-foreground tracking-widest uppercase">{benefit.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
