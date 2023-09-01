import { BlogList } from '@/component/Blogs/BlogsList';
import { Button, ButtonGroup } from '@mui/material';

import d from '@/data/blogs.json';

export const Blogs = ({ blogs, roles, id, userPage }: any) => {
  return (
    <section className="py-4">
      <div className="container text-center">
        <ButtonGroup variant="text" aria-label="Button group for choose all or author blogs">
          <Button
            href="/"
            className={`${
              userPage ? '' : 'underline underline-offset-1'
            } hover:bg-white font-montserrat hover:text-main_dark active:text-green_back
            }`}
          >
            {d.button.allPosts}
          </Button>

          <Button
            href="/myblogs"
            className={`${
              userPage ? 'underline underline-offset-1' : ''
            } hover:bg-white font-montserrat hover:text-main_dark active:text-green_back
            }`}
          >
            {d.button.myPosts}
          </Button>
        </ButtonGroup>
        <BlogList blogs={blogs ?? []} roles={roles} id={id} />
      </div>
    </section>
  );
};
