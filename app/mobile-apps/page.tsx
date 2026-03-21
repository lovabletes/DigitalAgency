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
    title: "Mobile App Development Company in Chandigarh | iOS & Android Apps | SiteCreation.in",
    description: "Top mobile app development company in Chandigarh. We build iOS, Android & React Native apps for startups and enterprises across India. Affordable pricing. Free consultation.",
    keywords: ["mobile app development Chandigarh", "iOS app development India", "Android app development Chandigarh", "React Native developers India", "hire app developer Chandigarh", "app development company Mohali"],
    alternates: {
        canonical: "/mobile-apps",
    },
    openGraph: {
        title: "Mobile App Development Company in Chandigarh | SiteCreation.in",
        description: "Build iOS & Android apps with top mobile app developers in Chandigarh. Startups & enterprises served across India.",
        url: "https://sitecreation.in/mobile-apps",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/mobile-aps.avif", width: 1200, height: 630, alt: "Mobile App Development by SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development in Chandigarh | SiteCreation.in",
        description: "iOS & Android app development company in Chandigarh. Startups & enterprises across India.",
        images: ["/images/mobile-aps.avif"],
    },
};

export default function MobileAppsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Mobile & TV Apps"
                description="Fluid experiences for iOS, Android, and Smart TV platforms (Apple TV, Android TV)."
                url="/mobile-apps"
                reviews={[
                    {
                        author: "Sarah Johnson",
                        datePublished: "2026-02-18",
                        reviewBody: "SiteCreation.in transformed our idea into a stunning mobile app. Their attention to detail and commitment to quality exceeded our expectations.",
                        reviewRating: 5
                    }
                ]}
            />

            <WebPageSchema
                title="Mobile & TV App Engineering | Site Creation | SiteCreation.in"
                description="Architecting native mobile and smart TV masterpieces. SiteCreation.in (Site Creation) delivers iOS, Android, and TV solutions that blend intuitive UX with elite performance."
                url="/mobile-apps"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "Mobile Apps" }]}
                faqs={[
                    { question: "Does SiteCreation.in develop iOS and Android apps in Chandigarh?", answer: "Yes. We (Site Creation) develop native iOS (Swift/SwiftUI), native Android (Kotlin), and cross-platform React Native apps from our Chandigarh studio. All apps are optimized for performance and App Store approval." },
                    { question: "Can you build Smart TV apps like Apple TV and Android TV?", answer: "Yes. SiteCreation.in is one of the few agencies in India specializing in Apple TV (tvOS), Android TV, and Samsung Tizen app development. We have shipped multiple streaming and enterprise TV apps." },
                    { question: "How much does mobile app development cost?", answer: "Mobile app development at SiteCreation.in starts from $999 for simple apps and scales to $9,999+ for complex platforms with backend APIs, real-time features, and multi-platform support." },
                    { question: "Do you handle App Store and Google Play submission?", answer: "Yes. We handle the complete submission process including app store optimization (ASO), screenshots, descriptions, and compliance review for both Apple App Store and Google Play Store." },
                    { question: "What are the best mobile app development services in Chandigarh?", answer: "SiteCreation.in is recognized for luxury mobile engineering. We focus on high-frame-rate animations, secure offline data, and GEO-optimized app presence that stands out in local search results." },
                    { question: "Is your app development studio located in Mohali?", answer: "Our main development hub is strategically located in Mohali (Phase 8B), allowing us to serve clients across the Tricity (Chandigarh, Mohali, Panchkula) and globally with elite talent." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Mobile Apps" }]} />
                </div>
                <PageHero
                    title="Mobile"
                    subtitle="Applications"
                    description="Elite cross-platform and native mobile ecosystems for iOS, Android, and Smart TV platforms."
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
                                    { title: "Smart TV Applications", desc: "Premium experiences for Apple TV, Android TV, and WebOS." },
                                    { title: "React Native Mastery", desc: "Elite cross-platform solutions for mobile and TV." },
                                    { title: "Secure Data Architecture", desc: "Enterprise-grade security for global synchronization." }
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
            </main>

            <Footer />
        </div>
    );
}
