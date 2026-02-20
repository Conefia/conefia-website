'use client';

import React, { useState } from 'react';
import { base44 } from '@/components/server/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Edit, Trash2, Eye, EyeOff, Search } from 'lucide-react';
import { Button } from '@/components/server/ui/button';
import { Input } from '@/components/server/ui/input';
import { Badge } from '@/components/server/ui/badge';
import { toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/server/ui/dialog";
import BlogEditor from '@/components/client/admin/BlogEditor';

export default function AdminBlogList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const queryClient = useQueryClient();

    // Data fetching - relies on parent dehydrate state for initial data
    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['blogPosts'],
        queryFn: () => base44.entities.BlogPost.list('-created_date'),
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => base44.entities.BlogPost.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
            toast.success('Post deleted');
        },
        onError: () => toast.error('Failed to delete post'),
    });

    const togglePublishMutation = useMutation({
        mutationFn: ({ id, published }) => base44.entities.BlogPost.update(id, { published }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
            toast.success('Post updated');
        },
        onError: () => toast.error('Failed to update post'),
    });

    const handleCreate = () => {
        setEditingPost(null);
        setIsEditorOpen(true);
    };

    const handleEdit = (post) => {
        setEditingPost(post);
        setIsEditorOpen(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this post?')) {
            deleteMutation.mutate(id);
        }
    };

    const handleTogglePublish = (post) => {
        togglePublishMutation.mutate({ id: post.id, published: !post.published });
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[#1a1a1a]">Blog Management</h1>
                    <p className="text-gray-600 mt-1">Create and manage blog posts</p>
                </div>
                <Button
                    onClick={handleCreate}
                    className="bg-[#DBFE01] text-[#1a1a1a] font-bold rounded-full hover:bg-[#c5e000]">
                    <Plus className="w-5 h-5 mr-2" />
                    New Post
                </Button>
            </div>

            {/* Search */}
            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 py-6 text-base border-2 border-gray-200 rounded-2xl"
                    />
                </div>
            </div>

            {/* Posts List */}
            {isLoading ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">Loading posts...</p>
                </div>
            ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border-2 border-gray-200">
                    <p className="text-gray-500 mb-4">No posts yet</p>
                    <Button
                        onClick={handleCreate}
                        variant="outline"
                        className="rounded-full">
                        Create your first post
                    </Button>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#DBFE01] transition-all">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge className={post.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                                            {post.published ? 'Published' : 'Draft'}
                                        </Badge>
                                        <Badge className="bg-[#DBFE01] text-[#1a1a1a]">
                                            {post.category}
                                        </Badge>
                                        {post.featured && (
                                            <Badge className="bg-amber-100 text-amber-800">
                                                Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>/{post.slug}</span>
                                        {post.readTime && <span>{post.readTime}</span>}
                                        {post.publishDate && <span>{post.publishDate}</span>}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <Button
                                        onClick={() => handleTogglePublish(post)}
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full">
                                        {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </Button>
                                    <Button
                                        onClick={() => handleEdit(post)}
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full">
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(post.id)}
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full text-red-600 hover:text-red-700 hover:border-red-300">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Editor Dialog */}
            <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {editingPost ? 'Edit Post' : 'Create New Post'}
                        </DialogTitle>
                    </DialogHeader>
                    <BlogEditor
                        post={editingPost}
                        onSave={() => {
                            setIsEditorOpen(false);
                            queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
                        }}
                        onCancel={() => setIsEditorOpen(false)}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
