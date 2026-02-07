"use client";

import BlogPost from '@/components/pages/BlogPost';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    // In Next.js 15, params is a promise
    const { slug } = await params;
    // BlogPost component uses useParams internally since it was migrated from React Router usage?
    // Or does it expect props?
    // Looking at BlogPost.jsx: const { slug } = useParams();
    // We should pass slug as prop if we refactored it, OR ensure useParams works.
    // We replaced useParams with next/navigation useParams.
    // useParams() in Client Component *inside* this Server Component will work and pick up the params from context.
    // So simply rendering <BlogPost /> is enough.

    return <BlogPost />;
}
