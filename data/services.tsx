import React from "react";
import {
    HomeIcon,
    AnalyticsIcon,
    LockIcon,
    PlusIcon
} from "@/components/icons/icons";

export const services = [
    {
        id: "ser-1",
        title: "Elite Web Architectures",
        desc: "Precision-engineered websites utilizing Next.js 15 and sophisticated React paradigms for unrivaled speed and SEO dominance.",
        tags: ["Atomic Design", "Edge Runtime", "Global CDN"],
        accent: "from-primary/20",
        icon: <HomeIcon size={40} />
    },
    {
        id: "ser-2",
        title: "Prestige Mobile Apps",
        desc: "Fluid, high-performance mobile experiences for iOS and Android that bridge the gap between native and web with elegance.",
        tags: ["Biometric Auth", "Offline First", "60 FPS Animation"],
        accent: "from-gold/20",
        icon: <PlusIcon size={40} className="rotate-45" />
    },
    {
        id: "ser-3",
        title: "Strategic Software",
        desc: "Tailored enterprise solutions designed to orchestrate complex business logic into seamless, scalable cloud operations.",
        tags: ["Microservices", "Event-Driven", "AI Integration"],
        accent: "from-indigo-500/20",
        icon: <LockIcon size={40} />
    },
    {
        id: "ser-4",
        title: "Rapid MVP Forge",
        desc: "Conceptualize, validate, and launch your vision in record time without sacrificing the premium quality your users demand.",
        tags: ["Market Fit", "Rapid Prototyping", "User Analytics"],
        accent: "from-emerald-500/20",
        icon: <AnalyticsIcon size={40} />
    }
];
