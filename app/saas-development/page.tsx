import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
    title: "SaaS Development Agency & Startup MVP Builders | SiteCreation.in",
    description: "Launch your SaaS in record time with fast React Server Components, secure Stripe integrations, and multi-tenant scaling systems engineered for local & global startups.",
    keywords: ["SaaS Development Agency", "Startup MVP Development", "Hire SaaS developers", "React SaaS template builds", "Multi-tenant architecture Next.js", "B2B SaaS software company"],
    alternates: {
        canonical: "/saas-development",
    },
    openGraph: {
        title: "SaaS Development Agency & Startup MVP Builders | SiteCreation.in",
        description: "From wireframe to functional product in weeks. We build fast, secure, and scalable SaaS platforms using Next.js 15 and Node.js.",
        url: "https://sitecreation.in/saas-development",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/web_development.avif", width: 1200, height: 630, alt: "SaaS Development by SiteCreation.in" }],
        type: "website",
    },
};

export default function SaaSDevelopmentPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "SaaS Development" }]} />
                </div>
                <PageHero
                    title="SaaS"
                    subtitle="Development"
                    description="Launch your digital product with ultra-fast MVPs built using modern Node.js backends and Next.js 15 dashboard meshes."
                    image="/images/web_development.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Accelerated Product Launch</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                    Agile <span className="text-accent italic">Velocity</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We help founders transform ideas into revenue-generating platforms using modular pipelines. From advanced user access control to seamless subscription tierings, every line is written with absolute performance thresholds for maximum retention.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "Rapid Prototyping", desc: "Interactive wireframes and functional React shells delivered in weeks, securing initial pitch validation." },
                                    { title: "Headless Payments Mesh", desc: "Configurable Stripe, PayPal, or custom wallet pipelines executing secure transaction limits natively." },
                                    { title: "Multi-Tenant Architectures", desc: "Secure database mapping separating client loads safely across static/dynamic memory boundaries." },
                                    { title: "Sub-Second Dashboards", desc: "Leveraging Server Actions ensuring analytical widgets load before client paint triggers execute." }
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
                                    src="/images/web_develop.avif"
                                    alt="Expert SaaS Development"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                                    <p className="text-white font-bold italic">"We build systems that scale with your user base without breaking."</p>
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
                                The <span className="text-accent italic">SaaS</span> Lifecycle
                            </h2>
                            <p className="text-muted-foreground">
                                Shipping code fast without sacrificing technical purity starts with an agile pipeline triggers layout safely.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Discovery & Scope", desc: "Formulating user workflow maps, database schemas, and critical feature lists for MVP." },
                                { step: "02", title: "Visual Engineering", desc: "Luxury UX/UI drafting addressing conversion-funnel optimization metrics correctly." },
                                { step: "03", title: "Modular Build", desc: "Constructing scalable database pools supporting subscription tierings synchronized concurrently." },
                                { step: "04", title: "Launch Audit", desc: "Benchmarking paint scores, security certificates, and cloud scaling alerts prior deployment." }
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
                        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Architectural Breakdown</span>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground">
                                Multi-Tenant <span className="text-accent italic">Isolation</span> Models
                            </h2>
                            <p className="text-muted-foreground">
                                How elite SaaS platforms separate user database workloads securely.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    type: "Shared Pool",
                                    title: "Logical Isolation",
                                    desc: "Shared database cluster utilizing scoped Row-Level Security (RLS). Maximum cost-efficiency for early-stage startups with strict user container access thresholds.",
                                    features: ["Row-Level Data Scoping", "Shared Core Infrastructure", "Sub-Second Scaling Sync"]
                                },
                                {
                                    type: "Sharded Instance",
                                    title: "Database Partitioning",
                                    desc: "Each client maps into a dedicated database or shard cluster. Removes 'noisy neighbor' bottlenecks for high-throughput enterprise load leveling.",
                                    features: ["Physical workload isolation", "Regional compliance hosting", "Custom backup schedules"]
                                },
                                {
                                    type: "Dedicated Stack",
                                    title: "Absolute Containment",
                                    desc: "Spinning up completely isolated app containers and namespaces per tenant account. Zero-trust boundaries required for deep FinTech or GovTech audits.",
                                    features: ["Encrypted network boundaries", "Single-tenant RAM buffers", "Regulatory Vault Auditing"]
                                }
                            ].map((item) => (
                                <div key={item.title} className="p-8 bg-muted/20 dark:bg-white/[0.02] rounded-3xl border border-border/50 space-y-6 hover:border-accent/40 transition-all duration-500 group">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-black uppercase tracking-widest text-accent/80 bg-accent/10 px-3 py-1 rounded-full">{item.type}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                    <ul className="space-y-2 pt-4 border-t border-border/50">
                                        {item.features.map((feat) => (
                                            <li key={feat} className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                                                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
