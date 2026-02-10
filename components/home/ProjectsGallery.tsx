"use client";

import React from "react";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";

interface Project {
    id: string;
    title: string;
    cat: string;
    color: string;
    image: string;
    description?: string;
    techStack?: string[];
    features?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectsGalleryProps {
    projects: Project[];
}

export function ProjectsGallery({ projects }: Readonly<ProjectsGalleryProps>) {
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

    return (
        <>
            <section id="work" className="section-padding relative bg-gradient-to-b from-white via-[#f7e7ce]/20 to-white dark:from-[#0f1429] dark:via-[#1a1a3e]/30 dark:to-[#0f1429]">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4 block">Portfolio Showcase</span>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                            Featured <span className="text-accent italic">Masterpieces</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                            A curated selection of our most impactful digital creations. Click any project to explore in detail.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <button
                                key={project.id}
                                onClick={() => {
                                    if (project.liveUrl) {
                                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                                    } else {
                                        setSelectedProject(project);
                                    }
                                }}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-slide-up transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-accent/20 outline-none focus-visible:ring-2 focus-visible:ring-accent text-left"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Project Image */}
                                <div className="aspect-video overflow-hidden bg-neutral-100 relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={85}
                                        className="object-contain object-center transition-transform duration-700 filter brightness-95 group-hover:brightness-105 saturate-90 group-hover:saturate-100"
                                        loading="lazy"
                                    />
                                    {/* Glass sheen effect on hover */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                </div>

                                {/* Refined gradient overlay - Better visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Category Badge - Top Right - Consistent Luxury Style */}
                                <div className="absolute top-4 right-4 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/90 to-accent/70 backdrop-blur-md text-[#1a1a3e] font-bold text-xs uppercase tracking-wider shadow-lg border border-accent/30">
                                        {project.cat}
                                    </span>
                                </div>

                                {/* Content - Always Visible - Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-black text-white mb-1 tracking-tight leading-tight drop-shadow-lg">
                                        {project.title}
                                    </h3>

                                    {/* Hover CTA */}
                                    <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100">
                                        <div className="h-0.5 w-12 bg-accent mb-3 mt-2" />
                                        <p className="text-sm text-white/90 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {project.liveUrl ? 'Visit Website →' : 'View Details →'}
                                        </p>
                                    </div>
                                </div>

                                {/* Border Animation */}
                                <div className="absolute inset-0 border border-white/10 group-hover:border-accent/50 rounded-2xl transition-all duration-500 pointer-events-none" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
