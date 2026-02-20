import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { base44 } from '@/components/server/api/base44Client';
import AdminBlogList from '@/components/client/admin/AdminBlogList';

export const metadata = {
  title: "Blog Management | Conefia Admin",
  description: "Manage your blog posts, create new content, and publish updates.",
};

export default async function AdminBlogPage() {
  const queryClient = new QueryClient();

  // Prefetch data on the server
  await queryClient.prefetchQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.list('-created_date'),
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pass the dehydrated state to the client component */}
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AdminBlogList />
        </HydrationBoundary>
      </div>
    </div>
  );
}
