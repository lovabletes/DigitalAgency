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
    title: "Elite Smart TV App Engineering | Apple TV, Android TV, Tizen",
    description: "Premium Smart TV application development for Apple TV (tvOS), Android TV, and Samsung Tizen. We build cinematic VOD and OTT experiences for global brands.",
    keywords: ["Smart TV app development", "tvOS engineering", "Android TV developers USA", "Tizen app agency", "OTT platform development"],
    alternates: {
        canonical: "/tv-apps",
    },
    openGraph: {
        title: "Elite Smart TV App Engineering | Global Digital Agency",
        description: "Transforming living rooms with cinematic Smart TV applications. Expert engineering for Apple TV, Android TV, and Tizen.",
        url: "https://sitecreation.in/tv-apps",
        siteName: "SiteCreation",
        images: [{ url: "/images/tv-apps-hero.avif", width: 1200, height: 630, alt: "Smart TV Engineering" }],
        locale: "en_US",
        type: "website",
    },
};

export default function TVAppsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Smart TV Engineering"
                description="Cinematic living room experiences for Apple TV, Android TV, and Samsung Tizen."
                url="/tv-apps"
            />

            <WebPageSchema
                title="Elite Smart TV App Engineering | Global Digital Agency"
                description="Architecting the future of television. We deliver high-performance, remote-optimized applications for the world's leading OTT platforms."
                url="/tv-apps"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "Smart TV Apps" }]}
            />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Smart TV Apps" }]} />
                </div>
                
                <PageHero
                    title="Smart TV"
                    subtitle="Engineering"
                    description="Cinematic living room experiences meticulously crafted for Apple TV, Android TV, and Samsung Tizen platforms."
                    image="/images/mobile-aps.avif" // Using existing for now, user can replace
                />

                <section className="py-24 container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">The 10-Foot Experience</span>
                                <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                    Cinematic <span className="text-accent italic">Interfaces</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Designing for TV is fundamentally different from mobile. We specialize in the "10-foot experience," focusing on remote-optimized navigation, focus-engine management, and high-fidelity video playback that captures the viewer's attention.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-accent">tvOS (Apple TV)</h4>
                                    <p className="text-sm text-muted-foreground">Premium Swift-based apps with deep Siri and Focus Engine integration.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-accent">Android TV / FireTV</h4>
                                    <p className="text-sm text-muted-foreground">High-performance Leanback frameworks for the global Android ecosystem.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-accent">Samsung Tizen</h4>
                                    <p className="text-sm text-muted-foreground">Specialized Web-based engineering for the world's most popular TV OS.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-accent">LG WebOS</h4>
                                    <p className="text-sm text-muted-foreground">Elegant and fast-loading applications for LG's proprietary ecosystem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] blur-3xl group-hover:bg-accent/30 transition-all duration-700" />
                            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                                <img src="/images/mobile-aps.avif" alt="Smart TV UI Design" className="w-full aspect-video object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Live OTT Stream</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/30 border-y border-border/50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">OTT & VOD <span className="text-accent">Specialization</span></h2>
                            <p className="text-muted-foreground text-lg">We build the infrastructure that powers billions of minutes of watch time.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Focus Engine Mastery", desc: "Pixel-perfect remote navigation that feels intuitive and fluid." },
                                { title: "AVKit & ExoPlayer", desc: "Deeply optimized video players with sub-second buffering and HLS support." },
                                { title: "DRM & Protection", desc: "Implementation of Widevine, FairPlay, and PlayReady for content security." }
                            ].map((item) => (
                                <div key={item.title} className="p-8 bg-background border border-border/50 rounded-2xl hover:border-accent/40 transition-colors">
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
