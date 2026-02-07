"use client";

import { useEffect, useRef } from "react";
import registry from "@/data/wake-registry.json";

export default function KeepAlive() {
    const hasPinged = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasPinged.current) {
                hasPinged.current = true;

                const urls = registry.projects.flatMap(p => p.services);

                console.log(`Scroll detected, pinging ${urls.length} services...`);

                urls.forEach(url => {
                    fetch(url, { method: "HEAD", mode: "no-cors" }).catch(err =>
                        console.warn(`Keep-alive ping failed for ${url}:`, err)
                    );
                });
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return null;
}
