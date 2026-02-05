"use client";

import React from "react";

interface Stat {
    id: string;
    val: string;
    label: string;
}

interface StatsCounterProps {
    stats: Stat[];
}

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2500) => {
    const [count, setCount] = React.useState(0);
    const [hasStarted, setHasStarted] = React.useState(false);
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        setCount(Math.floor(progress * end));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [end, duration, hasStarted]);

    return { count, elementRef };
};

export function StatsCounter({ stats }: Readonly<StatsCounterProps>) {
    // Create count-up hooks for each stat
    const stat1Count = useCountUp(Number.parseInt(stats[0]?.val.replaceAll(/\D/g, '') || '0'), 2500);
    const stat2Count = useCountUp(Number.parseInt(stats[1]?.val.replaceAll(/\D/g, '') || '0'), 2500);
    const stat3Count = useCountUp(Number.parseInt(stats[2]?.val.replaceAll(/\D/g, '') || '0'), 2500);
    const stat4Count = useCountUp(Number.parseInt(stats[3]?.val.replaceAll(/\D/g, '') || '0'), 2500);
    const statCounts = [stat1Count, stat2Count, stat3Count, stat4Count];

    return (
        <div className="relative z-20 mt-28 w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 relative">
                {stats.map((stat, idx) => (
                    <div
                        key={stat.id}
                        ref={statCounts[idx].elementRef}
                        className="relative flex flex-col items-center justify-center py-6 group"
                    >
                        {/* Vertical Gold Divider (Not on first item) */}
                        {idx !== 0 && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden md:block" />
                        )}
                        {/* Horizontal Divider for Mobile (Not on first two items) */}
                        {idx > 1 && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent md:hidden" />
                        )}

                        <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-white via-[#f7e7ce] to-[#d4af37] bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-2xl scale-100 group-hover:scale-110 transition-transform duration-500">
                            {stat.val.includes('/') ? stat.val : `${statCounts[idx].count}${stat.val.replaceAll(/\d/g, '')}`}
                        </span>
                        <span className="text-xs font-bold text-accent/80 uppercase tracking-[0.25em] group-hover:text-accent transition-colors shadow-black drop-shadow-md">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
