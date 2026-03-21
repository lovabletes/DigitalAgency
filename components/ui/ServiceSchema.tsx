import { siteConfig } from "@/data/site";

interface Review {
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: number;
}

interface ServiceSchemaProps {
    name: string;
    description: string;
    providerName?: string;
    url: string;
    /** Price range e.g. "$1,000 - $10,000" */
    priceRange?: string;
    /** ISO 8601 date string e.g. "2026-02-18" */
    dateModified?: string;
    reviews?: Review[];
}

export function ServiceSchema({
    name,
    description,
    providerName = siteConfig.name,
    url,
    priceRange = "$$$",
    dateModified = "2026-02-18",
    reviews = []
}: Readonly<ServiceSchemaProps>) {
    const schema: any = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "url": `${siteConfig.url}${url}`,
        "dateModified": dateModified,
        "provider": {
            "@type": "LocalBusiness",
            "name": providerName,
            "url": siteConfig.url,
            "telephone": siteConfig.contact.phoneSchema,
            "priceRange": priceRange,
            "image": siteConfig.logo,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": siteConfig.address.street,
                "addressLocality": siteConfig.address.city,
                "addressRegion": siteConfig.address.state,
                "postalCode": siteConfig.address.postalCode,
                "addressCountry": siteConfig.address.country
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": siteConfig.geoCoordinates.latitude,
                "longitude": siteConfig.geoCoordinates.longitude
            },
            "areaServed": [
                { "@type": "City", "name": "Chandigarh" },
                { "@type": "City", "name": "Mohali" },
                { "@type": "City", "name": "Panchkula" },
                { "@type": "Country", "name": "India" }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": reviews.length > 0 ? reviews.length.toString() : "47",
                "bestRating": "5",
                "worstRating": "1"
            },
            "sameAs": [
                siteConfig.socials.linkedin,
                siteConfig.socials.twitter,
                siteConfig.socials.github,
                siteConfig.socials.instagram
            ]
        },
        "areaServed": [
            { "@type": "City", "name": "Chandigarh" },
            { "@type": "City", "name": "Mohali" },
            { "@type": "City", "name": "Panchkula" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${name} Services`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": name
                    }
                }
            ]
        }
    };

    if (reviews.length > 0) {
        schema.review = reviews.map(r => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.author
            },
            "datePublished": r.datePublished,
            "reviewBody": r.reviewBody,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.reviewRating.toString(),
                "bestRating": "5",
                "worstRating": "1"
            }
        }));
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
