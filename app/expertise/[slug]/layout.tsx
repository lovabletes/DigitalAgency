import { Metadata } from "next";
import { expertiseTopics } from "@/data/expertise";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const topic = expertiseTopics[slug];

    if (!topic) {
        notFound();
    }

    const title = `${topic.title} | SiteCreation.in`;
    const description = topic.fullDesc;
    const url = `https://sitecreation.in/expertise/${slug}`;

    return {
        title,
        description,
        keywords: [
            topic.title,
            topic.category,
            ...topic.highlights,
            "SiteCreation.in",
            "Digital Agency",
            "Enterprise Development"
        ],
        openGraph: {
            title,
            description,
            url,
            siteName: "SiteCreation.in",
            type: "article",
            locale: "en_IN",
            authors: ["SiteCreation.in Team"],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: url,
        },
    };
}

export default function ExpertiseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
