"use client";

import React from "react";
import { ParallaxBackground } from "./ParallaxBackground";

interface ParallaxSectionProps {
    children: React.ReactNode;
    backgroundUrl: string;
    speed?: number;
    minHeight?: string;
    className?: string;
}

export function ParallaxSection({
    children,
    backgroundUrl,
    speed = 0.3,
    minHeight = "min-h-screen",
    className = ""
}: Readonly<ParallaxSectionProps>) {
    return (
        <section className={`relative ${minHeight} flex items-center justify-center overflow-hidden ${className}`}>
            {/* Parallax Background */}
            <ParallaxBackground
                imageUrl={backgroundUrl}
                speed={speed}
            />

            {/* Content (on top) */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    );
}
