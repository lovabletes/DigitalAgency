"use client";

import React from "react";
import { CloseIcon } from "@/components/icons/icons";

interface Project {
    id: string;
    title: string;
    cat: string;
    color: string;
    images: string[];
    description?: string;
    techStack?: string[];
    features?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: Readonly<ProjectModalProps>) {
    const dialogRef = React.useRef<HTMLDialogElement>(null);

    // Sync dialog state with project prop
    React.useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (project) {
            dialog.showModal();
            document.body.style.overflow = 'hidden';
        } else {
            dialog.close();
            document.body.style.overflow = 'unset';
        }
    }, [project]);

    // Close on ESC key (native behavior but just in case)
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        globalThis.addEventListener('keydown', handleEsc);
        return () => globalThis.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    const coverImage = project.images?.[0]?.trim();

    return (
        <dialog
            ref={dialogRef}
            className="fixed inset-0 z-[200] flex items-center justify-center p-0 bg-transparent backdrop:bg-black/90 backdrop:backdrop-blur-md animate-in fade-in duration-300 w-full h-full border-none max-w-none max-h-none overflow-hidden"
            onClose={onClose}
            aria-labelledby="modal-title"
        >
            {/* Backdrop Click Area (Native dialog handles backdrop clicks differently, but for consistency) */}
            <button
                className="absolute inset-0 w-full h-full bg-transparent cursor-default outline-none"
                onClick={onClose}
                aria-label="Close modal background"
                type="button"
            />

            {/* Modal Content */}
            <article
                className="relative w-full max-w-6xl bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 animate-in zoom-in-95 duration-500 max-h-[90vh] overflow-y-auto m-4"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 h-12 w-12 rounded-full bg-accent/10 hover:bg-accent border-2 border-accent/30 hover:border-accent flex items-center justify-center transition-all duration-300 group"
                    aria-label="Close modal"
                    type="button"
                >
                    <CloseIcon size={20} className="text-accent group-hover:text-[#1a1a3e] transition-colors" />
                </button>

                <div className="relative h-[400px] overflow-hidden bg-neutral-900">
                    {coverImage ? (
                        <img
                            src={coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-accent/5">
                            <span className="text-accent/20 font-black text-4xl uppercase tracking-tighter">SiteCreation</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e] via-[#1a1a3e]/50 to-transparent" />

                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6">
                        <span className={`px-6 py-2 rounded-full text-white font-black text-sm uppercase tracking-wider ${project.color} shadow-lg`}>
                            {project.cat}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {/* Title */}
                    <h2 id="modal-title" className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-[#f7e7ce]/70 mb-8 leading-relaxed font-medium max-w-3xl">
                        {project.description || "A premium digital experience crafted with cutting-edge technologies and uncompromising attention to detail. This project showcases our commitment to excellence in design, development, and user experience."}
                    </p>

                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-sm font-black uppercase tracking-wider text-accent mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-bold text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-sm font-black uppercase tracking-wider text-accent mb-4">Key Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-[#f7e7ce]/80">
                                        <span className="text-accent text-xl">✓</span>
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-accent/20">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-lux-primary px-8 py-4 rounded-full text-center font-black uppercase tracking-wider shadow-xl hover:shadow-2xl"
                            >
                                View Live Site
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full border-2 border-accent/30 bg-accent/5 text-accent hover:bg-accent hover:text-[#1a1a3e] hover:border-accent font-black uppercase tracking-wider transition-all duration-300 text-center"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </dialog>
    );
}
