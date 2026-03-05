import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/admin/',
                '/_next/static/media/',
                '/images/',
                '/*.avif',
                '/*.png',
                '/*.ico',
                '/manifest.webmanifest',
            ],
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
