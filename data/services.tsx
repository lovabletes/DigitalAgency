import React from "react";
import {
    ColumnsIcon,
    EyeIcon,
    CloudIcon,
    MegaphoneIcon,
    StarIcon
} from "@/components/icons/icons";

export const services = [
    {
        id: "ser-1",
        title: "Web, Mobile & TV Solutions",
        desc: "Create bespoke websites in Node.js & .NET, and premium mobile applications for iOS/Android. We also engineer for Smart TV platforms.",
        tags: ["Web & Mobile", "Node.js", "React Native"],
        accent: "from-primary/20",
        icon: <ColumnsIcon size={40} />,
        link: "/web-development"
    },
    {
        id: "ser-2",
        title: "Cloud & .NET Solutions",
        desc: "Mastering Azure ecosystems and building robust .NET solutions. We orchestrate the transition from Monolith to Microservices for limitless scalability.",
        tags: ["Azure", "Microservices", "Kubernetes"],
        accent: "from-indigo-500/20",
        icon: <CloudIcon size={40} />,
        link: "/cloud-solutions"
    },
    {
        id: "ser-3",
        title: "SEO & Digital Ranking",
        desc: "Strategic SEO ranking and Generative Engine Optimization (GEO) to ensure your brand dominates search and AI discovery.",
        tags: ["SEO Ranking", "GEO", "Analytics"],
        accent: "from-emerald-500/20",
        icon: <MegaphoneIcon size={40} />,
        link: "/seo-marketing"
    },
    {
        id: "ser-4",
        title: "Support & Maintenance",
        desc: "Proactive elite maintenance and continuous optimization to ensure your digital legacy remains at peak performance 24/7.",
        tags: ["24/7 Support", "Optimization", "Security"],
        accent: "from-purple-500/20",
        icon: <EyeIcon size={40} />, // Changed from UI/UX to focus on Maintenance/Support
        link: "/contact"
    },
    {
        id: "ser-5",
        title: "Creative & Graphic Design",
        desc: "From logo design to poster making and complete brand identity. We craft visual narratives that captivate and convert.",
        tags: ["Graphic Design", "Poster Making", "Branding"],
        accent: "from-pink-500/20",
        icon: <StarIcon size={40} />,
        link: "/ui-ux-design"
    }
];
