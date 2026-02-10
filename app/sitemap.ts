import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sitecreation.in';

    // Main pages
    const mainRoutes = [
        { url: '', priority: 1, changeFrequency: 'weekly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
        { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    ];

    // Service pages
    const serviceRoutes = [
        '/web-development',
        '/mobile-apps',
        '/ui-ux-design',
        '/cloud-solutions',
        '/seo-marketing',
    ].map(route => ({
        url: route,
        priority: 0.9,
        changeFrequency: 'monthly' as const
    }));

    // Expertise pages (high priority for SEO)
    const expertiseRoutes = [
        'nodejs', 'dotnet-9', 'nextjs-15', 'react-19',
        'azure-cloud', 'microservices', 'docker', 'kubernetes',
        'react-native', 'apple-tv', 'android-tv', 'smart-tv',
        'geo', 'semantic-design', 'llm-optimization', 'search-mastery',
        'vercel', 'azure-devops', 'gitlab-ci', 'headless-cms',
        'event-driven', 'serverless', 'monolith-split', 'zero-trust'
    ].map(slug => ({
        url: `/expertise/${slug}`,
        priority: 0.85,
        changeFrequency: 'monthly' as const
    }));

    // Legal pages
    const legalRoutes = [
        '/privacy',
        '/terms',
        '/cookies'
    ].map(route => ({
        url: route,
        priority: 0.5,
        changeFrequency: 'yearly' as const
    }));

    // Combine all routes
    const allRoutes = [
        ...mainRoutes,
        ...serviceRoutes,
        ...expertiseRoutes,
        ...legalRoutes
    ];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
