interface ServiceSchemaProps {
    name: string;
    description: string;
    providerName?: string;
    url: string;
}

export function ServiceSchema({ name, description, providerName = "SiteCreation.in", url }: Readonly<ServiceSchemaProps>) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": name,
                    "description": description,
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": providerName,
                        "url": "https://sitecreation.in"
                    },
                    "url": `https://sitecreation.in${url}`
                })
            }}
        />
    );
}
