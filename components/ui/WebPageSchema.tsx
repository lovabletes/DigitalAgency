interface WebPageSchemaProps {
    title: string;
    description: string;
    url: string;
    /** ISO 8601 date string e.g. "2026-02-18" */
    dateModified?: string;
    /** ISO 8601 date string e.g. "2026-01-01" */
    datePublished?: string;
    breadcrumbs?: Array<{ name: string; url?: string }>;
    faqs?: Array<{ question: string; answer: string }>;
}

/**
 * Outputs WebPage + optional FAQPage JSON-LD schema for rich results.
 * Place this in any page that needs structured data beyond ServiceSchema.
 */
export function WebPageSchema({
    title,
    description,
    url,
    dateModified = "2026-02-18",
    datePublished = "2026-01-01",
    breadcrumbs,
    faqs,
}: Readonly<WebPageSchemaProps>) {
    const graph: object[] = [
        {
            "@type": "WebPage",
            "@id": `https://sitecreation.in${url}`,
            "url": `https://sitecreation.in${url}`,
            "name": title,
            "description": description,
            "inLanguage": "en-IN",
            "datePublished": datePublished,
            "dateModified": dateModified,
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://sitecreation.in/#website",
                "url": "https://sitecreation.in",
                "name": "SiteCreation.in",
                "description": "Elite digital agency in Chandigarh specializing in web development, mobile apps, and cloud solutions.",
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://sitecreation.in/#organization",
                    "name": "SiteCreation.in"
                }
            },
            "breadcrumb": breadcrumbs ? {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sitecreation.in" },
                    ...breadcrumbs.map((crumb, i) => ({
                        "@type": "ListItem",
                        "position": i + 2,
                        "name": crumb.name,
                        ...(crumb.url ? { "item": `https://sitecreation.in${crumb.url}` } : {})
                    }))
                ]
            } : undefined,
        }
    ];

    if (faqs && faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        });
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": graph
                })
            }}
        />
    );
}
