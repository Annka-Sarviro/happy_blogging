// 'use client';
import { BlogList } from '@/component/Blogs/BlogsList';

export const Blogs = ({ blogs, roles, id }: any) => {
  // const [isAllBlogs, setIsAllBlogs] = useState(true);

  // const handleClick = () => {
  //   setIsAllBlogs(!isAllBlogs);
  // };
  return (
    <section className="py-4">
      <div className="container text-center">
        {/* <ButtonGroup variant="text" aria-label="Button group for choose all or author blogs">
          <Button
            className={` hover:bg-white font-montserrat hover:text-main_dark ${
              isAllBlogs ? 'text-green_back' : ''
            }`}
            onClick={handleClick}
          >
            AllPosts
          </Button>

          <Button
            className={` hover:bg-white font-montserrat hover:text-main_dark ${
              !isAllBlogs ? 'text-green_back' : ''
            }`}
            onClick={handleClick}
          >
            MyPost
          </Button>
        </ButtonGroup> */}
        <BlogList blogs={blogs ?? []} roles={roles} id={id} />
      </div>
    </section>
  );
};
