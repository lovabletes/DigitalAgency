import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceSchema } from "@/components/ui/ServiceSchema";
import { WebPageSchema } from "@/components/ui/WebPageSchema";

export const metadata: Metadata = {
    title: "Premium Mobile App Engineering | iOS & Android masters",
    description: "Elite mobile app development for iOS and Android. Delivering high-performance native and cross-platform solutions for enterprise clients worldwide.",
    keywords: ["mobile app development agency USA", "enterprise React Native firm", "luxury iOS app developers", "Android app engineering UK"],
    alternates: {
        canonical: "/mobile-apps",
    },
    openGraph: {
        title: "Premium Mobile App Engineering | iOS & Android",
        description: "Explore elite iOS & Android app development architectures designed for global startups & enterprises.",
        url: "https://sitecreation.in/mobile-apps",
        siteName: "SiteCreation",
        images: [{ url: "/images/mobile-aps.avif", width: 1200, height: 630, alt: "Mobile App Development" }],
        locale: "en_US",
        type: "website",
    },
};

export default function MobileAppsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Mobile App Development"
                description="Fluid experiences for iOS and Android platforms."
                url="/mobile-apps"
                reviews={[
                    {
                        author: "Sarah Johnson",
                        datePublished: "2026-02-18",
                        reviewBody: "SiteCreation transformed our idea into a stunning mobile app. Their attention to detail and commitment to quality exceeded our expectations.",
                        reviewRating: 5
                    }
                ]}
            />

            <WebPageSchema
                title="Mobile App Engineering | Site Creation"
                description="Architecting native mobile masterpieces. We deliver iOS and Android solutions that blend intuitive UX with elite performance."
                url="/mobile-apps"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "Mobile Apps" }]}
                faqs={[
                    { question: "What sizes of companies do you work with?", answer: "We partner with global startups, scale-ups, and established enterprises primarily in the USA, UK, and EU looking for high-performance mobile applications." },
                    { question: "Do you handle App Store and Google Play submission?", answer: "Yes. We handle the complete submission process including app store optimization (ASO), screenshots, descriptions, and compliance review for both Apple App Store and Google Play Store globally." },
                    { question: "What makes your mobile app development services unique?", answer: "We are recognized for luxury mobile engineering. We focus on high-frame-rate animations, secure offline data, deep integrations, and robust architectures built to scale securely." },
                    { question: "Do you offer post-launch support and SLAs?", answer: "Absolutely. We offer strict Service Level Agreements (SLAs) for enterprise clients, including 24/7 critical monitoring, security patching, and core OS compliance updates." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Mobile Apps" }]} />
                </div>
                <PageHero
                    title="Mobile"
                    subtitle="Applications"
                    description="Elite cross-platform and native mobile ecosystems for iOS and Android."
                    image="/images/mobile-aps.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                            <div className="relative h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                                <img
                                    src="/images/mobile-aps.avif"
                                    alt="Luxury Mobile Design"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-6 right-6 px-4 py-2 backdrop-blur-md bg-accent/20 border border-accent/30 rounded-full">
                                    <span className="text-white text-xs font-black uppercase tracking-widest">Mobile First</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Mobile Innovation</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                    Strategic <span className="text-accent italic">Engineering</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                In a mobile-first world, your application is your most powerful asset. We design and develop mobile solutions that are not just tools, but extensions of your brand's excellence. From native Swift/Kotlin to powerful cross-platform architectures, we ensure your presence is felt on every device.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "Native iOS & Android", desc: "Uncompromising performance and OS-level integration." },
                                    { title: "React Native Mastery", desc: "Elite cross-platform solutions for quick time-to-market." },
                                    { title: "Secure Data Architecture", desc: "Enterprise-grade security for global synchronization." },
                                    { title: "Smart TV Extensions", desc: "Extend your mobile presence to the living room with our specialized TV engineering." }
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
                            <div className="pt-4">
                                <Link href="/tv-apps" className="text-accent font-bold hover:underline flex items-center gap-2">
                                    Looking for Smart TV Engineering? Explore our OTT solutions →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                {/* SECTIONS: Android TV & Cost Structure Upgrade (Bucket A) */}
                <section className="py-24 bg-muted/10 border-t border-border/40 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-16 items-center border-b border-border/30 pb-20 mb-20 border-border/20">
                            <div className="space-y-6">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block">VOD Platforms</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                                    Android TV App <span className="text-accent italic">Engineering</span>
                                </h2>
                                <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                                    Our dedicated layout engineering builds high-performance OTT frameworks and smart TV shells scaling live-screen frames smoothly across Apple TV, Android TV, and WebOS nodes.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-5 bg-background rounded-2xl border border-border/40">
                                        <h3 className="text-lg font-bold text-foreground mb-1">What is Android TV Engineering?</h3>
                                        <p className="text-sm text-muted-foreground">Specialized architecture for 10-foot interfaces requiring d-pad navigation, Leanback frameworks, and high-fidelity rendering shells for dynamic live VOD feeds.</p>
                                    </div>
                                    <div className="p-5 bg-background rounded-2xl border border-border/40">
                                        <h3 className="text-lg font-bold text-foreground mb-1">Tech Stack Support</h3>
                                        <p className="text-sm text-muted-foreground">We use Kotlin Leanback, Jetpack Media3, Exoplayer bridging flawlessly across MiBox, FireTV, and Android TV OS endpoints.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-2xl group-hover:bg-purple-500/20 transition-all" />
                                <div className="p-8 bg-background border border-border/50 rounded-3xl relative">
                                    <h4 className="text-xl font-black text-foreground mb-4">TV Engineering Breakdown</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-accent">✓</span> Sub-second live VOD loading cache</li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-accent">✓</span> D-pad remote-ready interface support</li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-accent">✓</span> In-app payment processing overlays</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="text-center max-w-2xl mx-auto space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block">Standard Transparency</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
                                    Enterprise App <span className="text-accent italic">Investment Scale</span>
                                </h2>
                                <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                                    An indicative overview of engagement tiers for building scalable architectures and elite cross-platform ecosystems.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6 bg-background border border-border/40 rounded-2xl flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Basic Setup MVP</h3>
                                        <p className="text-sm text-muted-foreground mb-4">Starting Tier models setup utilizing dynamic layouts and offline frames sync properly.</p>
                                        <span className="text-2xl font-black text-accent">$4,500 - $7,499</span>
                                    </div>
                                </div>
                                <div className="p-6 bg-background border border-accent/20 rounded-2xl flex flex-col justify-between relative">
                                    <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-black">Popular</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Standard Commercial</h3>
                                        <p className="text-sm text-muted-foreground mb-4">Mid-Tier scaling layouts utilizing secure database endpoints syncing multi-tenant frameworks.</p>
                                        <span className="text-2xl font-black text-accent">$7,500 - $12,499</span>
                                    </div>
                                </div>
                                <div className="p-6 bg-background border border-border/40 rounded-2xl flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Enterprise Plus</h3>
                                        <p className="text-sm text-muted-foreground mb-4">Full multi-tenant endpoints maintaining high frame elite pipelines buffering overlays smoothly.</p>
                                        <span className="text-2xl font-black text-accent">$12,500+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rebuilt Solution Matrix: Sticky Split View */}
                <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                            {/* Sticky Left heading */}
                            <div className="md:sticky md:top-32 space-y-6">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block">Applications Architecture</span>
                                <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[0.95]">
                                    Purpose-Built <br />
                                    For Your <span className="text-accent italic">Vertical</span>
                                </h3>
                                <p className="text-lg text-muted-foreground font-medium max-w-md leading-relaxed">
                                    We do not assemble generic apps. We architect scalable mobile business pillars tailored for elite conversion and market dominance.
                                </p>
                                {/* Subtle decorative elements */}
                                <div className="h-px w-24 bg-gradient-to-r from-accent to-transparent mt-8" />
                            </div>

                            {/* Scrolling Right items */}
                            <div className="space-y-16">
                                {[
                                    {
                                        title: "Luxury Commerce",
                                        desc: "Build highly fluid iOS and Android shopping interfaces fully synced with Shopify Storefronts. We eliminate checkout friction with Apple Pay and instant background caching.",
                                        number: "01"
                                    },
                                    {
                                        title: "TeleHealth Systems",
                                        desc: "HIPAA-compliant architectures engineered for doctors and patients. Secure end-to-end encrypted video diagnostics that maintain user trust.",
                                        number: "02"
                                    },
                                    {
                                        title: "FinTech Pipelines",
                                        desc: "Secure banking endpoints utilizing biometric routing and high-performance ledger syncing, ensuring absolute balance precision.",
                                        number: "03"
                                    },
                                    {
                                        title: "Smart TV Streaming",
                                        desc: "Scale VOD playback frameworks seamlessly across Apple TV, Android TV, and WebOS with live-screen management controls.",
                                        number: "04"
                                    },
                                    {
                                        title: "B2B SaaS Mobile Ports",
                                        desc: "Multi-tenant dashboards retaining heavy offline support and workforce managers that sync to database cores securely.",
                                        number: "05"
                                    }
                                ].map((item, idx) => (
                                    <div key={item.title} className="group flex gap-8 items-start border-b border-border/40 pb-12 last:border-none last:pb-0">
                                        <div className="text-3xl font-black text-accent/20 group-hover:text-accent group-hover:scale-110 transition-all duration-500 font-serif leading-none mt-1">
                                            {item.number}
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-2xl font-black text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Ecosystem Range: Not sticking to one framework */}
                <section className="py-24 bg-muted/20 dark:bg-white/[0.01] border-t border-border/40 relative">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block mb-4">Engineering Frameworks</span>
                            <h3 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight">
                                Full-Spectrum <span className="text-accent italic">Tech Stack</span>
                            </h3>
                            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                                We leverage the most optimal architectures for your specific scaling targets — breaking past single-stack limitations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    category: "Native Core SDKs",
                                    items: ["Swift (iOS)", "SwiftUI", "Kotlin (Android)", "Jetpack Compose", "tvOS (Apple TV)", "WebOS / Tizen"],
                                    accent: "border-blue-500/20"
                                },
                                {
                                    category: "Cross-Platform Engines",
                                    items: ["React Native", "Flutter", "Unity 3D", "Kotlin Multiplatform", "Web Sockets Sync", "Offline-First Caching"],
                                    accent: "border-green-500/20"
                                },
                                {
                                    category: "Analytics & Distribution",
                                    items: ["TestFlight", "App Store Connect", "Google Play Portal", "Firebase Tools", "Fastlane Pipelines", "In-App Purchases"],
                                    accent: "border-purple-500/20"
                                }
                            ].map((item) => (
                                <div key={item.category} className={`p-8 bg-background rounded-3xl border ${item.accent} shadow-sm space-y-4 hover:shadow-lg transition-shadow duration-300`}>
                                    <h4 className="text-lg font-black text-foreground tracking-tight">{item.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.items.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-muted/50 dark:bg-white/[0.05] rounded-full text-xs font-bold text-foreground/80 hover:bg-accent/10 hover:text-accent cursor-default transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual FAQ: Enhances Human Dwell Time & SEO indexing */}
                <section className="py-24 bg-background border-t border-border/50">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Customer Queries</span>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
                                Mobile App <span className="text-accent italic">FAQ</span>
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                { question: "What platforms do you support besides iOS/Android?", answer: "We fully support Apple TV (tvOS), Android TV, that means complete cross-platform coverage using React Native, Flutter, Swift, or Angular shells relying on highly versatile pipelines." },
                                { question: "How do you optimize mobile apps for rapid speed?", answer: "We deploy sub-second loading setups relying on native background caching caches and multi-tenant database separation preventing layout thrashing setups framing." },
                                { question: "What backend databases do you integrate with?", answer: "We bridge flawlessly with MongoDB, Redis, PostgreSQL, Azure Cloud Tables and AWS S3 synced over dynamic WebSocket pipelines framing securely." }
                            ].map((faq) => (
                                <div key={faq.question} className="p-6 bg-muted/20 dark:bg-white/[0.01] rounded-2xl border border-border/30 hover:border-accent/30 transition-all duration-300">
                                    <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                        <span className="text-accent text-xl">◆</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-sm text-muted-foreground ml-6 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTABanner />
                
                {/* SEO Cluster Internal Linking */}
                <div className="bg-background py-12 border-t border-border/40 text-center">
                    <p className="text-xs text-muted-foreground tracking-wider uppercase font-semibold">
                        Global Solutions Hub: 
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm">
                        <Link href="/expertise/apple-tv" className="text-accent hover:underline font-bold">Apple TV Engineering</Link>
                        <span className="text-foreground/20">|</span>
                        <Link href="/expertise/tvos-development" className="text-accent hover:underline font-bold">tvOS Application Architecting</Link>
                        <span className="text-foreground/20">|</span>
                        <Link href="/about" className="text-accent hover:underline font-bold">Our Global Mission</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
