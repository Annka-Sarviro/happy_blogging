'use client';
import { BlogCard } from '@/component/Blogs/BlogCard';

const d = [
  { title: 'blog1', text: 'hsjhfjks', id: 1 },
  { title: 'blog2', text: 'hsjhfjks', id: 2 },
];

export const BlogList = () => {
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {d.map(item => (
          <BlogCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
