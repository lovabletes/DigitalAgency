import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { expertiseTopics } from '@/data/expertise';

import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const staticRoutes = [
        '',
        '/portfolio',
        '/expertise',
        '/about',
        '/contact',
        '/careers',
        '/blog',
        '/ui-ux-design',
        '/web-development',
        '/mobile-apps',
        '/seo-marketing',
        '/cloud-solutions'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const expertiseRoutes = Object.keys(expertiseTopics).map((slug) => ({
        url: `${baseUrl}/expertise/${slug}`,
        lastModified: new Date(),
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
