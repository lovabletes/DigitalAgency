import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceSchema } from "@/components/ui/ServiceSchema";

export const metadata: Metadata = {
    title: "Elite .NET & Node.js Development | SiteCreation.in",
    description: "Architecting high-performance, scalable, and visually stunning web experiences. Specializing in Node.js, .NET Core, and luxury digital craftsmanship.",
};

export default function WebDevelopmentPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Website Development"
                description="Bespoke digital platforms architected with Node.js, .NET Core, and Next.js for enterprise-scale performance."
                url="/web-development"
            />

            <main className="flex-1 relative">
                <div className="pt-24 pb-8 container-custom">
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
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
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

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
