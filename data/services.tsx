import React from "react";
import {
    ColumnsIcon,
    EyeIcon,
    CloudIcon,
    MegaphoneIcon,
    StarIcon
} from "@/components/icons/icons";
import { Smartphone, Monitor } from "lucide-react";


export const services = [
    {
        id: "ser-1",
        title: "Enterprise Web Systems",
        desc: "Bespoke architectures in Next.js 15, Node.js & .NET 9. We build sub-second, globally scalable web platforms for high-value brands.",
        tags: ["Next.js 15", "Node.js", ".NET 9"],
        accent: "from-primary/20",
        icon: <ColumnsIcon size={40} />,
        link: "/web-development"
    },
    {
        id: "ser-mobile",
        title: "iOS & Android Apps",
        desc: "Premium native-grade mobile experiences using React Native Fabric Architecture. Shared business logic with 60FPS fluid animations.",
        tags: ["iOS", "Android", "React Native"],
        accent: "from-blue-500/20",
        icon: <Smartphone size={40} />,
        link: "/mobile-apps"
    },
    {
        id: "ser-tv",
        title: "Smart TV Engineering",
        desc: "Cinematic living room experiences for Apple TV (tvOS), Android TV, and Samsung Tizen. Specialized Focus Engine & AVKit integration.",
        tags: ["Apple TV", "Android TV", "Tizen"],
        accent: "from-orange-500/20",
        icon: <Monitor size={40} />,
        link: "/tv-apps"
    },
    {
        id: "ser-2",
        title: "Cloud & .NET Foundations",
        desc: "Mastering Azure ecosystems and building robust microservices. We orchestrate the transition from Monolith to Cloud-Native for limitless scale.",
        tags: ["Azure", "Microservices", "Kubernetes"],
        accent: "from-indigo-500/20",
        icon: <CloudIcon size={40} />,
        link: "/cloud-solutions"
    },
    {
        id: "ser-3",
        title: "SEO & GEO Discovery",
        desc: "Strategic SEO and Generative Engine Optimization (GEO) to ensure your brand dominates discovery in ChatGPT, Claude, and Perplexity.",
        tags: ["GEO", "Authority Graph", "SEO"],
        accent: "from-emerald-500/20",
        icon: <MegaphoneIcon size={40} />,
        link: "/seo-marketing"
    },
    {
        id: "ser-4",
        title: "Support & Excellence",
        desc: "Proactive white-glove maintenance and 24/7 continuous optimization. We ensure your digital legacy remains at peak performance.",
        tags: ["24/7 Support", "Optimization", "Security"],
        accent: "from-purple-500/20",
        icon: <EyeIcon size={40} />,
        link: "/contact"
    }

];
