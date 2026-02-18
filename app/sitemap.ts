import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sitecreation.in';

    // Static dates per route group — update these when content changes
    const homepageLastMod = new Date('2026-02-18');
    const serviceLastMod = new Date('2026-02-18');
    const expertiseLastMod = new Date('2026-02-10');
    const legalLastMod = new Date('2026-01-01');

    // Main pages
    const mainRoutes = [
        { url: '', priority: 1, changeFrequency: 'weekly' as const, lastModified: homepageLastMod },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: serviceLastMod },
        { url: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: serviceLastMod },
        { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: serviceLastMod },
        { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const, lastModified: homepageLastMod },
        { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: serviceLastMod },
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
        changeFrequency: 'monthly' as const,
        lastModified: serviceLastMod,
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
        changeFrequency: 'monthly' as const,
        lastModified: expertiseLastMod,
    }));

    // Legal pages
    const legalRoutes = [
        '/privacy',
        '/terms',
        '/cookies'
    ].map(route => ({
        url: route,
        priority: 0.5,
        changeFrequency: 'yearly' as const,
        lastModified: legalLastMod,
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
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
