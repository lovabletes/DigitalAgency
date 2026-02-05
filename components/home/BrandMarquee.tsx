"use client";

import React from "react";

interface BrandMarqueeProps {
    brands: string[];
}

export function BrandMarquee({ brands }: Readonly<BrandMarqueeProps>) {
    return (
        <div className="mt-20 -mb-10 overflow-hidden relative w-screen -ml-[calc(50vw-50%)]">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f1429] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f1429] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap py-10">
                {["marquee-1", "marquee-2", "marquee-3", "marquee-4"].map((key) => (
                    <div key={key} className="flex gap-24 mx-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                        {brands.map((brand) => (
                            <span key={`brand-${brand}`} className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase font-serif cursor-default hover:text-accent transition-colors">{brand}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
