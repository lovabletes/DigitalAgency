import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Enterprise Architecture & CQRS Scaling | SiteCreation.in",
    description: "Architecting high-performance backends for global clients. We specialize in CQRS patterns, Modular Monoliths, and Microservices designed for Next.js endpoints.",
    keywords: ["Enterprise Architecture", "CQRS Pattern Node.js", "Modular Monolith .NET", "Microservices design agency", "SaaS scaling expert", "Event-driven architecture client"],
    alternates: {
        canonical: "/enterprise-architecture",
    },
    openGraph: {
        title: "Enterprise Architecture & CQRS Scaling | SiteCreation.in",
        description: "Scale comfortably with CQRS, Modular Monoliths, and Event-Driven Microservices engineered for extreme client load guarantees.",
        url: "https://sitecreation.in/enterprise-architecture",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/cloud_solutions.avif", width: 1200, height: 630, alt: "Enterprise Architecture by SiteCreation.in" }],
        type: "website",
    },
};

export default function EnterpriseArchitecturePage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Enterprise Architecture" }]} />
                </div>
                <PageHero
                    title="Enterprise"
                    subtitle="Architecture"
                    description="Architecting high-performance, fault-tolerant backends utilizing CQRS and Modular Monoliths for absolute sub-second scale guarantees."
                    image="/images/web_development.avif"
                />

                <section className="py-12 border-b border-border/40 bg-muted/10">
                    <div className="container-custom flex flex-col items-center text-center space-y-6">
                        <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Architectural Tech Stack</span>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                            {[
                                { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/cccccc" },
                                { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/cccccc" },
                                { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/cccccc" },
                                { name: "Redis", url: "https://cdn.simpleicons.org/redis/cccccc" },
                                { name: "AWS", url: "https://cdn.simpleicons.org/aws/cccccc" },
                                { name: "Kafka", url: "https://cdn.simpleicons.org/apachekafka/cccccc" },
                                { name: "Docker", url: "https://cdn.simpleicons.org/docker/cccccc" },
                            ].map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                                    <div className="h-14 w-14 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center p-3 shadow-sm group-hover:border-accent/40 transition-all duration-300">
                                        <img src={tech.url} alt={tech.name} className="h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <span className="text-xs font-semibold text-muted-foreground/80 group-hover:text-foreground transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Advanced Design Patterns</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                                    Next-Gen <span className="text-accent italic font-medium">Infrastructure</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Scaling to global traffic clusters requires separating command logic from query mesh setups. We design elite Modular structures using top event-bus pipelines (Kafka/RabbitMQ) ensuring zero-lock payloads for Next.js endpoints synchronously.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "CQRS Pattern Integration", desc: "Separating reads/writes for non-blocking Next.js visual streams and elite edge caching." },
                                    { title: "Modular Monolith Stability", desc: "Maintainable modules that scale comfortably before tearing into heavy microservices overheads." },
                                    { title: "Event-Driven Messaging", desc: "Utilizing fault-toerant message brokers securing asynchronous data mesh layouts safely." },
                                    { title: "Containerized Cloud Grids", desc: "Kubernetes and Docker syncs balancing memory throughputs across monolithic layers efficiently." }
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
                                    src="/images/luxury-visual.webp"
                                    alt="Elite Enterprise Architecture"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                                    <p className="text-white font-bold italic">"We engineer for absolute reliability under peak limit pressures."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/30 border-t border-border/50">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Our Framework</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                                The <span className="text-accent italic font-medium">Scaling</span> Lifecycle
                            </h2>
                            <p className="text-muted-foreground">
                                Migrating to advanced modules requires a rigid, transparent design pipeline. Here is how we scale platforms for absolute elite loads.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Audit", desc: "Investigating bottleneck constraints on current relational/document schemas using trace logs." },
                                { step: "02", title: "Decomposition", desc: "Breaking monolithic paths into independent domain modules using CQRS command segregation." },
                                { step: "03", title: "Bus Ingestion", desc: "Streaming domain events into fault-tolerant distributed brokers to decouple load mesh bounds." },
                                { step: "04", title: "Vitals Test", desc: "Hyper-rigorous throughput benchmarking under concurrency limit scenarios prior triggers." }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                                CQRS vs <span className="text-accent italic">Traditional</span> CRUD
                            </h2>
                            <p className="text-muted-foreground">
                                Why elite platforms decouple Reads from Writes for extreme load syncing.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-muted/20 rounded-2xl border border-border/50 space-y-6">
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                                    <div className="h-2 w-2 bg-red-500 rounded-full" />
                                    Traditional CRUD Model
                                </h3>
                                <p className="text-muted-foreground text-sm">Best for standard applications, but suffers under high-concurrency.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Database locks during heavy read/write overlaps",
                                        "Complexity grows linearly with query dimensions",
                                        "Hard to optimize caching for dynamic loads",
                                        "Single point of failure for backend data pipelines"
                                    ].map((point) => (
                                        <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <svg className="h-2 w-2 text-foreground/60 mt-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-background rounded-2xl border border-accent/20 space-y-6 shadow-lg shadow-accent/5">
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                                    <div className="h-2 w-2 bg-accent rounded-full animate-pulse" />
                                    CQRS Architecture
                                </h3>
                                <p className="text-accent text-sm font-medium">Engineered for absolute server reliability and non-blocking interfaces.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Zero-lock on Dashboard loads during background writes",
                                        "Read-Database optimized purely for speed (Elastic/Redis)",
                                        "Strict audit logging natively via Command triggers",
                                        "Asynchronous scaling: Add processors safely without stopping traffic"
                                    ].map((point) => (
                                        <li key={point} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                                            <svg className="h-2 w-2 text-accent mt-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/30 border-t border-border/50">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Dive Deeper</span>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground">
                                Enterprise <span className="text-accent italic">FAQ</span>
                            </h2>
                        </div>
                        <div className="max-w-3xl mx-auto divide-y divide-border/50">
                            {[
                                { q: "When should we NOT use CQRS?", a: "If your application has low write volume and standard dashboard read speeds are satisfied on a single database pool. CQRS adds overhead which isn't justified for simple information sites." },
                                { q: "Is a Modular Monolith better than Microservices for startups?", a: "Yes. Speed is life for startups. A Modular Monolith gives you microservice clean boundaries inside a single deployment stack, keeping maintenance low while guaranteeing easy separation later." },
                                { q: "How do you handle 'Eventual Consistency' delay issues?", a: "We utilize optimistic UI updates in Next.js. While the Write node streams into the Read node, the dashboard updates immediately for that user securely, guaranteeing zero visual lag." }
                            ].map((faq, index) => (
                                <div key={index} className="py-6 space-y-3">
                                    <h3 className="text-sm font-black text-foreground tracking-widest uppercase">{faq.q}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background border-t border-border/50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">When To Implement</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                        The <span className="text-accent italic">Use-Case</span> Matrix
                                    </h2>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    CQRS and Modular Monoliths aren&apos;t ideal for every application. They are strategic weapons intended for businesses solving high-efficiency, concurrent data bottlenecks at scale.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                {[
                                    { title: "Streaming Analytics Dashboards", desc: "For platforms running live metrics where read performance cannot lock under continuous background telemetry writes." },
                                    { title: "E-Commerce Order Pipelines", desc: "Avoiding order inventory lockouts during flash sales while guaranteeing sub-second cart read caches load instantly." },
                                    { title: "Multi-Tenant SaaS Scaling", desc: "Handling heavy tenant queries independently routing throughputs securely without affecting neighbor nodes." }
                                ].map((useCase) => (
                                    <div key={useCase.title} className="p-6 bg-muted/20 rounded-2xl border border-border/50 space-y-2">
                                        <h3 className="text-base font-black text-foreground uppercase tracking-wide flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                                            {useCase.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{useCase.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background border-t border-border/50">
                    <div className="container-custom">
                        <div className="relative group p-8 md:p-12 overflow-hidden rounded-3xl bg-muted/10 border border-border/50 space-y-8">
                            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                            
                            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
                                            Live Case Study
                                        </span>
                                        <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                                            Architecting <span className="text-accent italic font-medium">B2B Dashboards</span> For Scale
                                        </h2>
                                    </div>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                        We designed a high-throughput microservices mesh that processes over **10,000 requests/sec** to Elastic indices safely without locking relational node read pipelines.
                                    </p>
                                    <div className="flex">
                                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent transition-colors group/link">
                                            <span>View Architecture Breakdown</span>
                                            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { metric: "10K/s", label: "Request Limits" },
                                        { metric: "15ms", label: "Elastic Fetch" },
                                        { metric: "99.99%", label: "System Uptime" },
                                        { metric: "0", label: "Lock Faults" }
                                    ].map((stat) => (
                                        <div key={stat.label} className="p-6 bg-background rounded-2xl border border-border/50 flex flex-col justify-center text-center">
                                            <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.metric}</span>
                                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTABanner />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "When should we NOT use CQRS?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "If your application has low write volume and standard dashboard read speeds are satisfied on a single database pool. CQRS adds overhead which isn't justified for simple information sites."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is a Modular Monolith better than Microservices for startups?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. Speed is life for startups. A Modular Monolith gives you microservice clean boundaries inside a single deployment stack, keeping maintenance low while guaranteeing easy separation later."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How do you handle 'Eventual Consistency' delay issues?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We utilize optimistic UI updates in Next.js. While the Write node streams into the Read node, the dashboard updates immediately for that user securely, guaranteeing zero visual lag."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </main>

            <Footer />
        </div>
    );
}
