import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact SiteCreation.in | Start Your Project in Chandigarh",
    description: "Get in touch with SiteCreation.in, elite digital agency in Chandigarh. Start your journey with high-performance web development and cloud engineering today.",
    keywords: ["Contact SiteCreation", "Hire Web Developers Chandigarh", "Digital Agency Inquiry", "Software Consulting India"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
