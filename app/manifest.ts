import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'SiteCreation.in | Luxury Digital Agency',
        short_name: 'SiteCreation',
        description: 'Elite .NET, Node.js, and Azure Cloud engineering collective. Architecting high-performance digital legacies.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f1429',
        theme_color: '#f7e7ce',
        orientation: 'portrait',
        categories: ['business', 'technology', 'design'],
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/favicon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            }
        ],
    };
}

