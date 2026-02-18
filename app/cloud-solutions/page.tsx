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
    title: "Azure Cloud & Microservices Mastery | SiteCreation.in",
    description: "Architecting high-availability, secure cloud infrastructures on Microsoft Azure. Specialists in monolith to microservices migration.",
    keywords: ["Azure Cloud Solutions Chandigarh", "Microservices Architecture India", "Cloud Infrastructure Agency", "DevOps Chandigarh", "Serverless Architecture", "Monolith to Microservices Migration"],
    alternates: {
        canonical: "/cloud-solutions",
    },
    openGraph: {
        title: "Azure Cloud & Microservices Mastery | SiteCreation.in",
        description: "High-availability, secure cloud infrastructures on Microsoft Azure. Specialists in monolith to microservices migration.",
        url: "https://sitecreation.in/cloud-solutions",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/cloud_solutions.avif", width: 1200, height: 630, alt: "Cloud Solutions by SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Azure Cloud & Microservices Mastery | SiteCreation.in",
        description: "Enterprise-grade Azure cloud infrastructure and microservices architecture from Chandigarh's elite digital agency.",
        images: ["/images/cloud_solutions.avif"],
    },
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

            <WebPageSchema
                title="Azure Cloud & Microservices Mastery | SiteCreation.in"
                description="Architecting high-availability, secure cloud infrastructures on Microsoft Azure. Specialists in monolith to microservices migration."
                url="/cloud-solutions"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "Cloud Solutions" }]}
                faqs={[
                    { question: "Does SiteCreation.in provide Azure cloud services in India?", answer: "Yes. We are Azure specialists offering cloud architecture, migration, DevOps pipelines, and managed infrastructure services. We serve clients across India and internationally from our Chandigarh base." },
                    { question: "What is microservices architecture and do you offer it?", answer: "Microservices is an approach where an application is built as a collection of small, independent services. SiteCreation.in specializes in migrating monolithic applications to microservices on Azure, improving scalability and deployment speed." },
                    { question: "How long does cloud migration take?", answer: "A typical monolith-to-microservices migration takes 3–6 months depending on application complexity. We provide a detailed migration roadmap and execute in phases to minimize downtime." },
                    { question: "Do you offer ongoing cloud infrastructure management?", answer: "Yes. We offer managed cloud services including 24/7 monitoring, auto-scaling configuration, cost optimization, security patching, and incident response for Azure environments." }
                ]}
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
