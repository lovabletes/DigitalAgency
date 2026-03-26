"use client";

import React from "react";
import { accreditations } from "@/data/accreditations";

export function TrustSection() {
    return (
        <section className="py-12 bg-background border-y border-border overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Strategic Accreditations</span>
                    <div className="flex flex-wrap justify-center md:justify-end gap-12 md:gap-20">
                        {accreditations.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col items-center md:items-start"
                            >
                                <span className="text-foreground text-lg font-black tracking-tighter leading-none mb-1">
                                    {item.name}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-accent text-[8px] font-bold uppercase tracking-widest">{item.badge}</span>
                                    <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                                    <span className="text-muted-foreground text-[8px] font-medium">{item.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
