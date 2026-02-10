import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceSchema } from "@/components/ui/ServiceSchema";

export const metadata: Metadata = {
    title: "Azure Cloud & Microservices Mastery | SiteCreation.in",
    description: "Architecting high-availability, secure cloud infrastructures on Microsoft Azure. Specialists in monolith to microservices migration.",
};

export default function CloudSolutionsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Cloud & Infrastructure"
                description="Mastering Azure ecosystems and orchestrating the transition from Monolith to Microservices."
                url="/cloud-solutions"
            />

            <main className="flex-1 relative">
                <div className="pt-24 pb-8 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Cloud Solutions" }]} />
                </div>
                <PageHero
                    title="Cloud"
                    subtitle="Solutions"
                    description="Enterprise-scale serverless architectures and microservices engineered for global reliability."
                    image="/images/cloud_solutions.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                                <img
                                    src="/images/cloud_solutions.avif"
                                    alt="Elite Cloud Solutions Architecture"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="h-2 w-12 bg-accent rounded-full" />
                                    <span className="text-white text-xs font-black uppercase tracking-widest italic leading-none">Security First</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Infrastructure Excellence</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                    Powering the <span className="text-accent italic">Future</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Modern excellence requires an unshakeable foundation. We help your brand migrate, architect, and orchestrate cloud environments that prioritize zero-downtime performance and enterprise-grade security. Our collective specializes in cloud-native masterpieces that scale as fast as your ambitions.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "Azure Infrastructure Mastery", desc: "Enterprise-grade cloud setups optimized for security and cost." },
                                    { title: "Monolith to Microservices", desc: "Expert assessment and execution of legacy transformations." },
                                    { title: "Serverless & Edge Architectures", desc: "Maximizing efficiency with futuristic, event-driven designs." },
                                    { title: "DevOps & CI/CD Pipelines", desc: "Automated delivery for non-stop digital innovation." }
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
