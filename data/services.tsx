import React from "react";
import {
    ColumnsIcon,
    PhoneIcon,
    EyeIcon,
    CloudIcon,
    MegaphoneIcon
} from "@/components/icons/icons";

export const services = [
    {
        id: "ser-1",
        title: "Website Development",
        desc: "Bespoke digital platforms architected with Node.js, .NET Core, and Next.js for enterprise-scale performance and reliability.",
        tags: ["Node.js", ".NET Core", "Next.js 15"],
        accent: "from-primary/20",
        icon: <ColumnsIcon size={40} />,
        link: "/web-development"
    },
    {
        id: "ser-2",
        title: "Mobile & TV Apps",
        desc: "Fluid experiences for iOS, Android, and Smart TV platforms (Apple TV, Android TV), bridging the gap between devices with elegance.",
        tags: ["React Native", "Apple TV", "Android TV"],
        accent: "from-gold/20",
        icon: <PhoneIcon size={40} />,
        link: "/mobile-apps"
    },
    {
        id: "ser-3",
        title: "Cloud & Infrastructure",
        desc: "Mastering Azure ecosystems and orchestrating the transition from Monolith to Microservices for limitless scalability.",
        tags: ["Azure", "Microservices", "Kubernetes"],
        accent: "from-indigo-500/20",
        icon: <CloudIcon size={40} />,
        link: "/cloud-solutions"
    },
    {
        id: "ser-4",
        title: "SEO & Digital Ranking",
        desc: "Strategic SEO ranking and Generative Engine Optimization (GEO) to ensure your brand dominates search and AI discovery.",
        tags: ["SEO Ranking", "GEO", "Analytics"],
        accent: "from-emerald-500/20",
        icon: <MegaphoneIcon size={40} />,
        link: "/seo-marketing"
    },
    {
        id: "ser-5",
        title: "Support & Maintenance",
        desc: "Proactive elite maintenance and continuous optimization to ensure your digital legacy remains at peak performance 24/7.",
        tags: ["24/7 Support", "Optimization", "Security"],
        accent: "from-purple-500/20",
        icon: <EyeIcon size={40} />, // Changed from UI/UX to focus on Maintenance/Support
        link: "/contact"
    }
];
