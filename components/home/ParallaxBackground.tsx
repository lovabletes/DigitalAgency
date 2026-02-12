"use client";

import React from "react";

interface ParallaxBackgroundProps {
    imageUrl: string;
    speed?: number; // 0.1 to 1, lower = slower movement
    className?: string;
    overlay?: boolean;
    overlayColor?: string;
}

export function ParallaxBackground({
    imageUrl,
    speed = 0.5,
    className = "",
    overlay = true,
    overlayColor = "from-[#0f1429]/90 via-[#1a1a3e]/80 to-[#0f1429]"
}: Readonly<ParallaxBackgroundProps>) {
    const [offsetY, setOffsetY] = React.useState(0);
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            const elementTop = rect.top + scrolled;
            const viewportHeight = window.innerHeight;

            // Calculate parallax offset only when element is in view
            if (rect.top < viewportHeight && rect.bottom > 0) {
                const relativeScroll = scrolled - elementTop + viewportHeight;
                setOffsetY(relativeScroll * speed);
            }
        };

        handleScroll(); // Initial calculation
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div ref={elementRef} className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Parallax Image */}
            <div
                className="absolute inset-0 w-full h-[120%]"
                style={{
                    transform: `translateY(${-offsetY}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Optional Overlay */}
            {overlay && (
                <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
            )}
        </div>
    );
}
