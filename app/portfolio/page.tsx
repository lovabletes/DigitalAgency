import { Metadata } from "next";
import { navLinks, projects } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { ServiceSchema } from "@/components/ui/ServiceSchema";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "Portfolio | Elite Digital Masterpieces by SiteCreation.in",
    description: "Explore our curated showcase of high-performance web and mobile projects. SiteCreation.in delivers bespoke digital experiences for global and local Chandigarh brands.",
    keywords: ["SiteCreation Portfolio", "Web Development Projects", "Luxury Digital Design Case Studies", "Chandigarh App Development"],
};

function PortfolioCard({ project }: Readonly<{ project: any }>) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        if (!project.images || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 3000 + Math.random() * 1000); // Randomized stagger

        return () => clearInterval(interval);
    }, [project.images]);

    return (
        <div key={project.title} className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5">
            <div className="aspect-[16/10] overflow-hidden relative">
                {project.images?.map((img: string, i: number) => (
                    <Image
                        key={img}
                        src={img}
                        alt={project.title}
                        fill
                        className={`object-cover w-full h-full transition-all duration-1000 group-hover:scale-105 ${i === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-accent font-black uppercase tracking-widest text-xs mb-2">{project.cat}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{project.title}</h3>
                <p className="text-white/70 font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                    {project.description}
                </p>
                <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-black uppercase tracking-wider text-sm group/link"
                >
                    Explore Project{" "}
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="Digital Portfolio"
                description="Curated showcase of elite web and mobile engineering projects by SiteCreation.in."
                url="/portfolio"
            />

            <main className="flex-1 relative">
                <PageHero
                    title="Featured"
                    subtitle="Masterpieces"
                    description="A curated showcase of our most ambitious projects. Each piece represents a fusion of innovation, design, and technical excellence."
                    image="/images/Hero-banner.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-10">
                        {projects.map((project) => (
                            <PortfolioCard key={project.title} project={project} />
                        ))}
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
