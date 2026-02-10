import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'SiteCreation.in | Luxury Digital Agency',
        short_name: 'SiteCreation',
        description: 'Elite .NET, Node.js, and Azure Cloud engineering collective.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f1429',
        theme_color: '#f7e7ce',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
