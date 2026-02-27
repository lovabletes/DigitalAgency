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
    /** Price range e.g. "₹50,000 - ₹5,00,000" */
    priceRange?: string;
    /** ISO 8601 date string e.g. "2026-02-18" */
    dateModified?: string;
    reviews?: Review[];
}

export function ServiceSchema({
    name,
    description,
    providerName = "SiteCreation.in",
    url,
    priceRange = "₹₹₹",
    dateModified = "2026-02-18",
    reviews = []
}: Readonly<ServiceSchemaProps>) {
    const schema: any = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "url": `https://sitecreation.in${url}`,
        "dateModified": dateModified,
        "provider": {
            "@type": "LocalBusiness",
            "name": providerName,
            "url": "https://sitecreation.in",
            "telephone": "+91-84375-32754",
            "priceRange": priceRange,
            "image": "https://sitecreation.in/images/Logo.png",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 17, Elite Business District",
                "addressLocality": "Chandigarh",
                "addressRegion": "Chandigarh",
                "postalCode": "160017",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.7333,
                "longitude": 76.7794
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
                "https://www.linkedin.com/company/sitecreation",
                "https://twitter.com/sitecreation",
                "https://github.com/sitecreation",
                "https://instagram.com/sitecreation"
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
