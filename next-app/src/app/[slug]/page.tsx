
import { PAGES } from '@/pages.config';
import { notFound } from 'next/navigation';

export default async function DynamicLandingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const PageComponent = (PAGES as any)[slug];

    if (!PageComponent) {
        notFound();
    }

    return <PageComponent />;
}

export function generateStaticParams() {
    // Optional: Pre-render known pages
    return Object.keys(PAGES)
        .filter(key => key !== 'Home' && key !== 'Blog' && key !== 'AdminBlog' && key !== 'BlogPost')
        .map(slug => ({ slug }));
}
