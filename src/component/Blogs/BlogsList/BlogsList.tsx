import { Typography } from '@mui/material';

import { BlogCard } from '@/component/Blogs/BlogCard';
import { BlogsCardProps } from '@/component/Blogs/BlogCard/BlogsCard.props';
import { NewBlogs } from '@/component/Blogs/NewBlogs';

import d from '@/data/blogs.json';

export const BlogList = (props: any) => {
  const { blogs, roles, id } = props;

  console.log();

  return (
    <div className="py-4 ">
      <Typography variant="h4" component="h1" className="text-center mb-4">
        {d.title}
      </Typography>

      {blogs.length === 0 ? (
        <Typography variant="subtitle2" component="p">
          {d.messages.notHave}
        </Typography>
      ) : (
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-4">
          {blogs.map((item: BlogsCardProps) => (
            <BlogCard key={item.id} item={item} user_id={id} roles={roles} />
          ))}
        </ul>
      )}

      {roles === 'author' && <NewBlogs id={id} />}
    </div>
  );
};
