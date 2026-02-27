import { MetadataRoute } from 'next';
import { expertiseTopics } from '@/data/expertise';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sitecreation.in';

    // Static dates per route group — update these when content changes
    const homepageLastMod = new Date('2026-02-18');
    const serviceLastMod = new Date('2026-02-18');
    const expertiseLastMod = new Date('2026-02-18');
    const legalLastMod = new Date('2026-01-01');

    // Main pages
    const mainRoutes = [
        { url: '/', priority: 1, changeFrequency: 'weekly' as const, lastModified: homepageLastMod },
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

    // Expertise pages — dynamically generated from the actual data source.
    const expertiseRoutes = Object.keys(expertiseTopics).map(slug => ({
        url: `/expertise/${slug}`,
        priority: 0.85,
        changeFrequency: 'monthly' as const,
        lastModified: expertiseLastMod,
    }));

    // Blog pages — ensures new articles are indexed immediately.
    const blogRoutes = blogPosts.map(post => ({
        url: `/blog/${post.slug}`,
        priority: 0.8,
        changeFrequency: 'monthly' as const,
        lastModified: new Date(post.date),
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
        ...blogRoutes,
        ...legalRoutes
    ];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
