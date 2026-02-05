"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    image: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: Readonly<TestimonialsProps>) {
    return (
        <section className="section-padding relative">
            <div className="container-custom">
                <div className="max-w-2xl mb-12 mx-auto text-center">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">What Our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                    {testimonials.map((t) => (
                        <div key={t.name} className="glass-card p-10 rounded-3xl relative card-3d group hover:bg-[#faf8f3] dark:hover:bg-[#1f1f3a] transition-colors">
                            <div className="absolute -top-6 -left-2 text-accent/20 rotate-12">
                                <Quote size={80} />
                            </div>
                            <div className="relative z-10 card-inner-3d">
                                <div className="flex items-center gap-1 mb-6 text-accent">
                                    {["star-1", "star-2", "star-3", "star-4", "star-5"].map((key) => <Star key={key} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-lg text-foreground/80 italic font-medium mb-8 leading-relaxed">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover border-2 border-accent" />
                                    <div>
                                        <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{t.name}</h4>
                                        <p className="text-xs font-bold text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
