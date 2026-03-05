import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { expertiseTopics } from '@/data/expertise';

import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const staticRoutes = [
        { path: '', date: '2025-01-01' },
        { path: '/portfolio', date: '2025-01-01' },
        { path: '/expertise', date: '2025-01-01' },
        { path: '/about', date: '2025-01-01' },
        { path: '/contact', date: '2025-01-01' },
        { path: '/careers', date: '2025-03-01' },
        { path: '/blog', date: '2025-03-01' },
        { path: '/ui-ux-design', date: '2025-01-01' },
        { path: '/web-development', date: '2025-01-01' },
        { path: '/mobile-apps', date: '2025-01-01' },
        { path: '/seo-marketing', date: '2025-01-01' },
        { path: '/cloud-solutions', date: '2025-01-01' },
    ].map(({ path: route, date }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(date),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.id}`,
        lastModified: new Date('2025-01-01'),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const expertiseRoutes = Object.keys(expertiseTopics).map((slug) => ({
        url: `${baseUrl}/expertise/${slug}`,
        lastModified: new Date('2025-01-01'),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes, ...expertiseRoutes, ...blogRoutes];
}
