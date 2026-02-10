import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceSchema } from "@/components/ui/ServiceSchema";

export const metadata: Metadata = {
    title: "Mobile & TV App Engineering | SiteCreation.in",
    description: "Architecting native mobile and smart TV masterpieces. iOS, Android, and TV solutions that blend intuitive UX with elite performance.",
};

export default function MobileAppsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Mobile & TV Apps"
                description="Fluid experiences for iOS, Android, and Smart TV platforms (Apple TV, Android TV)."
                url="/mobile-apps"
            />

            <main className="flex-1 relative">
                <div className="pt-24 pb-8 container-custom">
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
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
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

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
