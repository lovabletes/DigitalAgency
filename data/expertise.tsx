import React from "react";
import {
    Zap,
    Cpu,
    Cloud,
    Layers,
    Bot,
    Monitor,
    GitBranch,
    Box,
    Terminal,
    Search,
    Globe,
    Smartphone,
    Shield
} from "lucide-react";

export interface ExpertiseTopic {
    slug: string;
    title: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    icon: React.ReactNode;
    techDetails: {
        label: string;
        value: string;
    }[];
    highlights: string[];
    relatedService: {
        name: string;
        link: string;
    };
}

const Code = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const Database = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

export const expertiseTopics: Record<string, ExpertiseTopic> = {
    // --- Core Tech ---
    "nodejs": {
        slug: "nodejs",
        title: "Node.js Engineering",
        category: "Core Tech",
        shortDesc: "Scalable, event-driven backend systems built for high-concurrency environments.",
        fullDesc: "We engineer robust, non-blocking I/O systems using Node.js. Our architectures are designed to handle thousands of concurrent connections with minimal overhead, making them ideal for real-time applications and microservices.",
        icon: <Terminal className="text-accent" size={32} />,
        techDetails: [
            { label: "Runtime", value: "Node.js (LTS/Latest)" },
            { label: "Frameworks", value: "Express / NestJS / Fastify" },
            { label: "Real-time", value: "Socket.io / WebSockets" },
            { label: "Process", value: "PM2 / Clustering" }
        ],
        highlights: [
            "High-performance API Gateways",
            "Real-time data streaming",
            "Serverless function orchestration",
            "Optimized heavy-load processing"
        ],
        relatedService: { name: "Web Development", link: "/web-development" }
    },
    "dotnet-9": {
        slug: "dotnet-9",
        title: ".NET 9 Backend Excellence",
        category: "Core Tech",
        shortDesc: "High-concurrency backend systems built with the power of C# and .NET 9.",
        fullDesc: "We build mission-critical APIs and services using .NET 9, focusing on high-performance microservices and cloud-native applications. Our architecture handles millions of requests with minimal latency using ASP.NET Core and Entity Framework.",
        icon: <Cpu className="text-accent" size={32} />,
        techDetails: [
            { label: "Runtime", value: ".NET 9 CLS" },
            { label: "Web", value: "ASP.NET Core Web API" },
            { label: "DB", value: "EF Core / Dapper" },
            { label: "Pattern", value: "Domain-Driven Design (DDD)" }
        ],
        highlights: [
            "High-throughput microservices",
            "Complex business logic orchestration",
            "Legacy Monolith to .NET migration",
            "Native AOT deployment for speed"
        ],
        relatedService: { name: "Web Development", link: "/web-development" }
    },
    "nextjs-15": {
        slug: "nextjs-15",
        title: "Next.js 15 Mastery",
        category: "Core Tech",
        shortDesc: "Architecting the fastest web experiences using React Server Components and Turbopack.",
        fullDesc: "We leverage Next.js 15 to build sub-second, enterprise-grade web platforms. By utilizing Server Actions, progressive rendering, and the App Router, we ensure your brand delivers an uncompromising user experience that excels in both performance and SEO.",
        icon: <Zap className="text-accent" size={32} />,
        techDetails: [
            { label: "Rendering", value: "Partial Prerendering (PPR)" },
            { label: "Data", value: "React Server Components" },
            { label: "Bundling", value: "Turbopack Optimization" },
            { label: "Deployment", value: "Edge Runtime / Vercel" }
        ],
        highlights: [
            "Implementation of React 19 features",
            "Advanced caching strategies",
            "Perfect Core Web Vitals (LCP, FID, CLS)",
            "Scalable Serverless architecture"
        ],
        relatedService: { name: "Web Development", link: "/web-development" }
    },
    "react-19": {
        slug: "react-19",
        title: "React 19 Innovations",
        category: "Core Tech",
        shortDesc: "Building fluid, interactive UIs with the latest React concurrent features.",
        fullDesc: "Stay ahead of the curve with React 19. We implement the latest hooks, compiler optimizations, and concurrent rendering features to create user interfaces that are not just reactive, but proactive and seamlessly smooth.",
        icon: <Zap className="text-accent" size={32} />,
        techDetails: [
            { label: "Compiler", value: "React Compiler" },
            { label: "State", value: "Actions & new Hooks" },
            { label: "DOM", value: "Concurrent Mode" },
            { label: "Assets", value: "Automatic Resource Loading" }
        ],
        highlights: [
            "Automatic memoization",
            "Form Actions integration",
            "Seamless asset preloading",
            "Enhanced SEO/Hydration"
        ],
        relatedService: { name: "UI/UX Design", link: "/ui-ux-design" }
    },

    // --- Cloud Ecosystem ---
    "azure-cloud": {
        slug: "azure-cloud",
        title: "Azure Cloud Engineering",
        category: "Cloud Ecosystem",
        shortDesc: "Enterprise-grade cloud orchestration and sub-second scalability on Microsoft Azure.",
        fullDesc: "Our Microsoft-certified approach to Azure ensures your infrastructure is secure, compliant, and infinitely scalable. We specialize in Azure Kubernetes Service (AKS), Azure Functions, and Cosmos DB to build resilient global digital foundations.",
        icon: <Cloud className="text-accent" size={32} />,
        techDetails: [
            { label: "Compute", value: "AKS / Azure Functions" },
            { label: "Network", value: "Azure Front Door / VPN" },
            { label: "Security", value: "Entra ID / Key Vault" },
            { label: "State", value: "Azure SQL / Cosmos DB" }
        ],
        highlights: [
            "Infrastructure as Code (Terraform/Bicep)",
            "Automated Blue-Green deployments",
            "Enterprise-grade Security hardening",
            "Cost-optimization strategies"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "microservices": {
        slug: "microservices",
        title: "Microservices Architecture",
        category: "Cloud Ecosystem",
        shortDesc: "Splitting monoliths and building independent, resilient software ecosystems.",
        fullDesc: "We transition complex enterprise systems into modular microservices. This enables independent scaling, faster deployment cycles, and total fault tolerance for large-scale digital operations.",
        icon: <Layers className="text-accent" size={32} />,
        techDetails: [
            { label: "Pattern", value: "Event-Driven / CQRS" },
            { label: "Orchestration", value: "Kubernetes / Istio" },
            { label: "Messaging", value: "Azure Service Bus / Kafka" },
            { label: "Observability", value: "OpenTelemetry / Dynatrace" }
        ],
        highlights: [
            "Zero-downtime migrations",
            "Strategic Domain splitting",
            "API Gateway orchestration",
            "Distributed tracing & debugging"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "docker": {
        slug: "docker",
        title: "Docker Containerization",
        category: "Cloud Ecosystem",
        shortDesc: "Portable, efficient, and consistent application deployment anywhere.",
        fullDesc: "We containerize your applications to ensure they run consistently across any environment, from development to production. Our Docker workflows optimize build times, security scanning, and image sizes.",
        icon: <Box className="text-accent" size={32} />,
        techDetails: [
            { label: "Builds", value: "Multi-stage Builds" },
            { label: "Orchestration", value: "Docker Compose / Swarm" },
            { label: "Registry", value: "Azure CR / Docker Hub" },
            { label: "Security", value: "Image Scanning" }
        ],
        highlights: [
            "Consistent Dev/Prod parity",
            "Microservices isolation",
            "Rapid deployment cycles",
            "Simplified dependency management"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "kubernetes": {
        slug: "kubernetes",
        title: "Kubernetes Orchestration",
        category: "Cloud Ecosystem",
        shortDesc: "Automating deployment, scaling, and management of containerized applications.",
        fullDesc: "We harness the power of Kubernetes (K8s) to manage complex container workloads. From self-healing clusters to automated rollouts, we ensure your infrastructure is resilient and self-managing.",
        icon: <Globe className="text-accent" size={32} />,
        techDetails: [
            { label: "Control", value: "Helm Charts / Kustomize" },
            { label: "Networking", value: "Ingress Controllers / Service Mesh" },
            { label: "Scaling", value: "HPA / VPA / Cluster Autoscaler" },
            { label: "Storage", value: "CSI / Persistent Volumes" }
        ],
        highlights: [
            "High-availability clusters",
            "Zero-downtime updates",
            "Advanced traffic routing",
            "Multi-cloud support"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },

    // --- Mobile / TV ---
    "react-native": {
        slug: "react-native",
        title: "React Native Development",
        category: "Mobile / TV",
        shortDesc: "Native-grade mobile experiences for iOS and Android from a single codebase.",
        fullDesc: "We build high-performance mobile apps using React Native. Our approach delivers the smooth look and feel of native apps while offering the speed and consistent logic of a unified JavaScript architecture.",
        icon: <Smartphone className="text-accent" size={32} />,
        techDetails: [
            { label: "Architecture", value: "New Architecture (Fabric)" },
            { label: "Native Modules", value: "TurboModules / JSI" },
            { label: "Navigation", value: "React Navigation / Expo Router" },
            { label: "State", value: "Zustand / TanStack Query" }
        ],
        highlights: [
            "60fps Animations",
            "Code push updates",
            "Shared business logic with Web",
            "Access to native device APIs"
        ],
        relatedService: { name: "Mobile Apps", link: "/mobile-apps" }
    },
    "apple-tv": {
        slug: "apple-tv",
        title: "Apple TV (tvOS) Apps",
        category: "Mobile / TV",
        shortDesc: "Immersive living room experiences tailored for the Apple ecosystem.",
        fullDesc: "We design and develop premium apps for Apple TV. Leveraging tvOS frameworks, we create remote-friendly, cinematic interfaces that bring your content to the biggest screen in the house.",
        icon: <Monitor className="text-accent" size={32} />,
        techDetails: [
            { label: "Framework", value: "tvOS / SwiftUI / UIKit" },
            { label: "Input", value: "Siri Remote Focus Engine" },
            { label: "Media", value: "AVKit / HLS Streaming" },
            { label: "Integration", value: "iCloud / Top Shelf" }
        ],
        highlights: [
            "Focus-based navigation design",
            "4K HDR content playback",
            "Smooth parallax effects",
            "Apple ecosystem integration"
        ],
        relatedService: { name: "Mobile Apps", link: "/mobile-apps" }
    },
    "android-tv": {
        slug: "android-tv",
        title: "Android TV Engineering",
        category: "Mobile / TV",
        shortDesc: "Bringing your brand to millions of smart screens globally on Android TV.",
        fullDesc: "We build robust Android TV applications compliant with Google's Leanback library. Our apps are optimized for D-pad navigation and varied screen densities, ensuring accessibility and engagement.",
        icon: <Monitor className="text-accent" size={32} />,
        techDetails: [
            { label: "UI Library", value: "Leanback / Compose for TV" },
            { label: "Player", value: "ExoPlayer" },
            { label: "Search", value: "Global Search Integration" },
            { label: "Input", value: "D-Pad / Voice Control" }
        ],
        highlights: [
            "D-Pad optimized UX",
            "Picture-in-Picture support",
            "Recommendation channels",
            "Voice search integration"
        ],
        relatedService: { name: "Mobile Apps", link: "/mobile-apps" }
    },
    "smart-tv": {
        slug: "smart-tv",
        title: "Smart TV Ecosystems",
        category: "Mobile / TV",
        shortDesc: "Cross-platform TV apps for Tizen (Samsung) and WebOS (LG).",
        fullDesc: "Reach every living room. We develop cross-platform Smart TV applications that perform flawlessly on Samsung Tizen and LG WebOS, ensuring your content is accessible regardless of the device brand.",
        icon: <Monitor className="text-accent" size={32} />,
        techDetails: [
            { label: "Platform", value: "Tizen .NET / WebOS JS" },
            { label: "Framework", value: "React TV / Renative" },
            { label: "Video", value: "MSE / EME DRM" },
            { label: "Testing", value: "Real Device Lab" }
        ],
        highlights: [
            "Unified TV codebase",
            "Spatial Navigation logic",
            "DRM Content Protection",
            "Legacy device support"
        ],
        relatedService: { name: "Mobile Apps", link: "/mobile-apps" }
    },

    // --- AI Mastery ---
    "geo": {
        slug: "geo",
        title: "Generative Engine Optimization",
        category: "AI Mastery",
        shortDesc: "Rewriting the rules of discovery for the age of ChatGPT, Claude, and Perplexity.",
        fullDesc: "GEO is the new frontier of SEO. We architect your site's data structure and semantic layer so that Generative AI models can easily parse, understand, and cite your brand as a primary authority in your industry.",
        icon: <Bot className="text-accent" size={32} />,
        techDetails: [
            { label: "Strategy", value: "Semantic Data Injection" },
            { label: "Markup", value: "Advanced JSON-LD Graphs" },
            { label: "Focus", value: "LLM Citation Authority" },
            { label: "Metrics", value: "AI Discovery Index" }
        ],
        highlights: [
            "Ranking in Search Generative Experiences (SGE)",
            "Authority Graph building",
            "Semantic HTML5 restructuring",
            "Knowledge Base optimization"
        ],
        relatedService: { name: "SEO & Digital Ranking", link: "/seo-marketing" }
    },
    "semantic-design": {
        slug: "semantic-design",
        title: "Semantic Design Architecture",
        category: "AI Mastery",
        shortDesc: "Structuring content for machine understanding and human readability.",
        fullDesc: "We go beyond visual design. Our semantic design philosophy ensures that the underlying structure of your digital presence is perfectly intelligible to AI agents, enhancing your visibility in the semantic web.",
        icon: <Code className="text-accent" size={32} />,
        techDetails: [
            { label: "HTML", value: "Semantic HTML5" },
            { label: "Data", value: "Schema.org / JSON-LD" },
            { label: "Ontology", value: "Knowledge Graphs" },
            { label: "Access", value: "WCAG 2.2 AA Compliance" }
        ],
        highlights: [
            "Enhanced Machine Readability",
            "Rich Snippet Eligibility",
            "Future-proof SEO foundation",
            "Accessibility-first approach"
        ],
        relatedService: { name: "SEO & Digital Ranking", link: "/seo-marketing" }
    },
    "llm-optimization": {
        slug: "llm-optimization",
        title: "LLM Optimization",
        category: "AI Mastery",
        shortDesc: "Preparing your digital assets for the Large Language Model era.",
        fullDesc: "Ensure your brand's data is training-ready. We optimize your public-facing content and documentation to be effectively ingested and accurately represented by the world's leading Large Language Models.",
        icon: <Bot className="text-accent" size={32} />,
        techDetails: [
            { label: "Format", value: "Markdown / Structured Text" },
            { label: "Context", value: "Vector Embedding Ready" },
            { label: "Quality", value: "E-E-A-T Principles" },
            { label: "Indexing", value: "Robots & Sitemap Ops" }
        ],
        highlights: [
            "Training Data Optimization",
            "Fact-checking / Hallucination reduction",
            "Brand Voice consistency in AI",
            "Entity-Relationship Mapping"
        ],
        relatedService: { name: "SEO & Digital Ranking", link: "/seo-marketing" }
    },
    "search-mastery": {
        slug: "search-mastery",
        title: "Search Mastery & Authority",
        category: "AI Mastery",
        shortDesc: "Dominating SERPs with technical precision and content depth.",
        fullDesc: "We combine technical SEO mastery with authoritative content strategies. By focusing on site speed, mobile-first indexing, and topical authority, we secure your dominance in traditional search results.",
        icon: <Search className="text-accent" size={32} />,
        techDetails: [
            { label: "Core", value: "Core Web Vitals" },
            { label: "Crawl", value: "Log Analysis / Budget" },
            { label: "Render", value: "Server-Side Rendering (SSR)" },
            { label: "Link", value: "Internal Linking Logic" }
        ],
        highlights: [
            "Technical SEO Audits",
            "JavaScript SEO expertise",
            "Migration Traffic Protection",
            "International SEO (Hreflang)"
        ],
        relatedService: { name: "SEO & Digital Ranking", link: "/seo-marketing" }
    },

    // --- Platforms ---
    "vercel": {
        slug: "vercel",
        title: "Vercel Ecosystem",
        category: "Platforms",
        shortDesc: "Deploying at the edge with the creators of Next.js.",
        fullDesc: "As Vercel experts, we maximize the platform's potential for your business. From Edge Middleware to Preview Deployments, we configure your CI/CD pipeline for unmatched speed and collaboration.",
        icon: <Cloud className="text-accent" size={32} />,
        techDetails: [
            { label: "Edge", value: "Middleware / Edge Functions" },
            { label: "Data", value: "Vercel KV / Postgres" },
            { label: "Analytics", value: "Web Analytics / Speed Insights" },
            { label: "Security", value: "DDoS Protection / Firewall" }
        ],
        highlights: [
            "Instant global deployment",
            "Serverless function scaling",
            "Preview environment workflows",
            "Image optimization at the edge"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "azure-devops": {
        slug: "azure-devops",
        title: "Azure DevOps CI/CD",
        category: "Platforms",
        shortDesc: "Enterprise lifecycle management for sophisticated software projects.",
        fullDesc: "We implement comprehensive Azure DevOps pipelines to automate your software delivery. From board management to artifact delivery, we ensure a seamless, audible, and secure path to production.",
        icon: <GitBranch className="text-accent" size={32} />,
        techDetails: [
            { label: "Pipelines", value: "YAML Multi-stage" },
            { label: "Repos", value: "Git / Branch Policies" },
            { label: "Boards", value: "Agile / Scrum / CMMI" },
            { label: "Test", value: "Automated Test Plans" }
        ],
        highlights: [
            "End-to-End Automation",
            "Compliance & Governance",
            "Release Management Gates",
            "Integration with Azure Cloud"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "gitlab-ci": {
        slug: "gitlab-ci",
        title: "GitLab CI/CD Automation",
        category: "Platforms",
        shortDesc: "Integrated DevSecOps for modern software factories.",
        fullDesc: "We leverage GitLab CI's powerful runners and integrated security scanning to build secure software factories. Our pipelines automatically test, secure, and deploy your code with every commit.",
        icon: <GitBranch className="text-accent" size={32} />,
        techDetails: [
            { label: "Runner", value: "Auto-scaling Runners" },
            { label: "Security", value: "SAST / DAST / Dependency" },
            { label: "Registry", value: "Container Registry" },
            { label: "Pages", value: "Static Site Hosting" }
        ],
        highlights: [
            "DevSecOps integration",
            "Review Apps for every MR",
            "Infrastructure as Code pipelines",
            "Container-native workflows"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "headless-cms": {
        slug: "headless-cms",
        title: "Headless CMS Architecture",
        category: "Platforms",
        shortDesc: "Decoupled content management for omnichannel delivery.",
        fullDesc: "Freedom from the monolith. We implement headless CMS solutions (Sanity, Strapi, Contentful) that deliver content via API to websites, apps, watches, and smart displays simultaneously.",
        icon: <Database className="text-accent" size={32} />,
        techDetails: [
            { label: "CMS", value: "Sanity / Strapi / Contentful" },
            { label: "API", value: "GraphQL / REST" },
            { label: "Media", value: "CDN Asset Delivery" },
            { label: "Editor", value: "Real-time Collaboration" }
        ],
        highlights: [
            "Omnichannel content distribution",
            "Developer-Marketer workflow separation",
            "Frontend-agnostic data",
            "Structured content modeling"
        ],
        relatedService: { name: "Web Development", link: "/web-development" }
    },

    // --- Architecture ---
    "event-driven": {
        slug: "event-driven",
        title: "Event-Driven Architecture",
        category: "Architecture",
        shortDesc: "Building reactive systems that respond to business events in real-time.",
        fullDesc: "Decouple your services for maximum agility. Our event-driven architectures use message brokers to allow services to react to changes state asynchronously, ensuring high throughput and system resilience.",
        icon: <Zap className="text-accent" size={32} />,
        techDetails: [
            { label: "Broker", value: "Kafka / RabbitMQ / Azure SB" },
            { label: "Pattern", value: "Pub-Sub / Event Sourcing" },
            { label: "Schema", value: "CloudEvents Standard" },
            { label: "State", value: "Event Store" }
        ],
        highlights: [
            "Loose coupling of components",
            "Real-time responsiveness",
            "Scalable event processing",
            "Audit trail via Event Sourcing"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "serverless": {
        slug: "serverless",
        title: "Serverless Computing",
        category: "Architecture",
        shortDesc: "Focus on code, not infrastructure. Infinite scaling with zero management.",
        fullDesc: "We build applications that scale to zero and up to infinity. Using Lambda, Azure Functions, or Cloudflare Workers, we ensure you only pay for compute when your code is actually running.",
        icon: <Cloud className="text-accent" size={32} />,
        techDetails: [
            { label: "Provider", value: "AWS Lambda / Azure Func" },
            { label: "Edge", value: "Edge Computing" },
            { label: "DB", value: "Serverless SQL / NoSQL" },
            { label: "Triggers", value: "HTTP / Cron / Event" }
        ],
        highlights: [
            "Cost-efficient (Pay-per-use)",
            "No server management",
            "Automatic scaling",
            "Reduced operational complexity"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "monolith-split": {
        slug: "monolith-split",
        title: "Monolith Migration (Strangler Fig)",
        category: "Architecture",
        shortDesc: "Safely modernizing legacy systems piece by piece without downtime.",
        fullDesc: "We specialize in the 'Strangler Fig' pattern, incrementally replacing legacy monolithic functionality with new microservices. This risk-averse strategy allows continuous modernization while keeping the business running.",
        icon: <Layers className="text-accent" size={32} />,
        techDetails: [
            { label: "Pattern", value: "Strangler Fig" },
            { label: "Routing", value: "API Gateway Switching" },
            { label: "Data", value: "Database Slicing" },
            { label: "Auth", value: "Unified Identity SSO" }
        ],
        highlights: [
            "Risk-minimized modernization",
            "Continuous value delivery",
            "Incremental technology shift",
            "Zero big-bang rewrites"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    },
    "zero-trust": {
        slug: "zero-trust",
        title: "Zero Trust Security",
        category: "Architecture",
        shortDesc: "Never trust, always verify. Security baked into every layer of the architecture.",
        fullDesc: "In a world of perimeter-less computing, we implement Zero Trust principles. Every request is authenticated, authorized, and encrypted, regardless of where it originates, ensuring ironclad security for your digital assets.",
        icon: <Shield className="text-accent" size={32} />,
        techDetails: [
            { label: "Identity", value: "MFA / SSO / IAM" },
            { label: "Network", value: "Micro-segmentation" },
            { label: "Data", value: "Encryption at Rest/Transit" },
            { label: "Policy", value: "Least Privilege Access" }
        ],
        highlights: [
            "Identity-centric security",
            "Lateral movement prevention",
            "Continuous validation",
            "Secure remote access"
        ],
        relatedService: { name: "Cloud Solutions", link: "/cloud-solutions" }
    }
};
