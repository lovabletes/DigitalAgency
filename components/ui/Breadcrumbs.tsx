import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons/icons";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Readonly<BreadcrumbsProps>) {
    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-xs font-black uppercase tracking-[0.2em]">
                <li>
                    <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.label} className="flex items-center space-x-2">
                        <ChevronRightIcon size={12} className="text-muted-foreground/40" />
                        {item.href ? (
                            <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-accent italic">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://sitecreation.in"
                            },
                            ...items.map((item, index) => ({
                                "@type": "ListItem",
                                "position": index + 2,
                                "name": item.label,
                                "item": item.href ? `https://sitecreation.in${item.href}` : undefined
                            }))
                        ]
                    })
                }}
            />
        </nav>
    );
}
