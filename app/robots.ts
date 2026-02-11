import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/static/',
                    '/admin/',
                    '/*.json$',
                ],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'ClaudeBot', 'PerplexityBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://sitecreation.in/sitemap.xml',
    };
}

