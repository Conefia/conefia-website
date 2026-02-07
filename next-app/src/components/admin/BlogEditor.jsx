"use client";
import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useMutation } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import RichTextEditor from './RichTextEditor';

export default function BlogEditor({ post, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    slug: post?.slug || '',
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    category: post?.category || 'Build',
    tags: post?.tags?.join(', ') || '',
    persona: post?.persona || 'founder',
    author: post?.author || 'Conefia Team',
    readTime: post?.readTime || '8 min',
    featuredImage: post?.featuredImage || '',
    featured: post?.featured || false,
    published: post?.published || false,
    publishDate: post?.publishDate || new Date().toISOString().split('T')[0]
  });

  const saveMutation = useMutation({
    mutationFn: async (data) => {
      const payload = {
        ...data,
        tags: data.tags.split(',').map(t => t.trim()).filter(Boolean)
      };

      if (post?.id) {
        return base44.entities.BlogPost.update(post.id, payload);
      } else {
        return base44.entities.BlogPost.create(payload);
      }
    },
    onSuccess: () => {
      toast.success(post ? 'Post updated' : 'Post created');
      onSave();
    },
    onError: (error) => {
      toast.error('Failed to save post: ' + error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.slug || !formData.title || !formData.excerpt) {
      toast.error('Please fill in all required fields');
      return;
    }

    saveMutation.mutate(formData);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Your Post Title"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug *</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="your-post-slug"
            className="mt-2"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt *</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          placeholder="Short description of your post..."
          className="mt-2 h-20"
          required
        />
      </div>

      <div>
        <Label>Content</Label>
        <div className="mt-2">
          <RichTextEditor
            value={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
            placeholder="Write your blog post content here..."
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Build">Build (MVP)</SelectItem>
              <SelectItem value="Launch">Launch (Go-to-market)</SelectItem>
              <SelectItem value="Scale">Scale (Growth)</SelectItem>
              <SelectItem value="AI">AI (Agents/LLMs)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="persona">Persona</Label>
          <Select value={formData.persona} onValueChange={(value) => setFormData({ ...formData, persona: value })}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="founder">AI SaaS Founder</SelectItem>
              <SelectItem value="clinic">Clinic</SelectItem>
              <SelectItem value="dtc">DTC / Shopify</SelectItem>
              <SelectItem value="accelerator">Accelerator</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="readTime">Read Time</Label>
          <Input
            id="readTime"
            value={formData.readTime}
            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
            placeholder="8 min"
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="MVP, Validation, Launch"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="publishDate">Publish Date</Label>
          <Input
            id="publishDate"
            type="date"
            value={formData.publishDate}
            onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="featuredImage">Featured Image URL</Label>
        <Input
          id="featuredImage"
          value={formData.featuredImage}
          onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
          placeholder="https://images.unsplash.com/..."
          className="mt-2"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <Switch
            checked={formData.featured}
            onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
          />
          <Label>Featured Post</Label>
        </div>

        <div className="flex items-center space-x-3">
          <Switch
            checked={formData.published}
            onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
          />
          <Label>Published</Label>
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t">
        <Button
          type="submit"
          disabled={saveMutation.isPending}
          className="bg-[#DBFE01] text-[#1a1a1a] font-bold rounded-full hover:bg-[#c5e000]">
          {saveMutation.isPending ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="rounded-full">
          Cancel
        </Button>
      </div>
    </form>
  );
}