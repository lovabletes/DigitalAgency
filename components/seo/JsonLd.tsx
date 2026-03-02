import React from 'react';
import { siteConfig } from '@/data/site';

interface JsonLdProps {
    readonly data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function WebSiteJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        url: siteConfig.url,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
    return <JsonLd data={data} />;
}

export function ArticleJsonLd({
    headline,
    description,
    image,
    datePublished,
    authorName,
}: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    authorName: string;
}) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        image,
        datePublished,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: siteConfig.logo,
            },
        },
    };
    return <JsonLd data={data} />;
}
