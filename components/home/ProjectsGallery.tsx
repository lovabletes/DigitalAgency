"use client";

import React from "react";
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
                                onClick={() => setSelectedProject(project)}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-slide-up transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-accent/20 outline-none focus-visible:ring-2 focus-visible:ring-accent text-left"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Project Image */}
                                <div className="aspect-[4/3] overflow-hidden bg-accent/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Always visible gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                                {/* Category Badge - Top Right - Consistent Luxury Style */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/90 to-accent/70 backdrop-blur-md text-[#1a1a3e] font-bold text-xs uppercase tracking-wider shadow-lg border border-accent/30">
                                        {project.cat}
                                    </span>
                                </div>

                                {/* Content - Always Visible - Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                                        {project.title}
                                    </h3>

                                    {/* Hover CTA */}
                                    <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100">
                                        <p className="text-sm text-white/80 font-medium mb-3 mt-2">
                                            Click to view full details →
                                        </p>
                                    </div>
                                </div>

                                {/* Border Animation */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-500" />
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
