"use client";

import React from "react";

export function ScrollProgressBar() {
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        let ticking = false;

        const updateProgress = () => {
            const totalHeight = document.documentElement.scrollHeight - globalThis.innerHeight;
            if (totalHeight > 0) {
                const progress = (globalThis.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            }
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100]">
            <div
                className="h-full bg-gradient-to-r from-accent via-[#f7ef8a] to-accent shadow-lg shadow-accent/50 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}
