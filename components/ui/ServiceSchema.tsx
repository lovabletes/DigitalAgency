interface ServiceSchemaProps {
    name: string;
    description: string;
    providerName?: string;
    url: string;
    /** Price range e.g. "₹50,000 - ₹5,00,000" */
    priceRange?: string;
    /** ISO 8601 date string e.g. "2026-02-18" */
    dateModified?: string;
}

export function ServiceSchema({
    name,
    description,
    providerName = "SiteCreation.in",
    url,
    priceRange = "₹₹₹",
    dateModified = "2026-02-18",
}: Readonly<ServiceSchemaProps>) {
    const schema = {
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
                "reviewCount": "47",
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

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
