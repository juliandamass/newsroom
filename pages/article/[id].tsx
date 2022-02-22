import Footer from '../../components/footer';
import Header from '../../components/header';

import { Blog } from '../../interfaces/blog';
import { ResBlogs } from '../../interfaces/res-blogs';

import IconMascot from '../../public/images/icon-mascot.png';
import IconCalendar from '../../public/images/icon-calendar.png';
import IconClock from '../../public/images/icon-clock.png';

type Props = {
  blog: Blog;
};

const Article = ({ blog }: Props) => {
  return (
    <div>
      <Header></Header>
      <div className="py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-4 ">
          <div className="pb-4 mb-11 border-b border-gray-300">
            <p className="text-xl font-light">Resources &#62; Article</p>
          </div>
          <div className="max-w-lg mb-9">
            <h2 className="text-3xl font-semibold leading-normal">
              {blog.title}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mb-14">
            <div className="flex items-center">
              <img
                src={IconMascot.src}
                className="article-icon mr-4 object-contain"
              />
              <p className="text-lg">Park N Parcel Marketing Team</p>
            </div>
            <div className="flex items-center">
              <img
                src={IconCalendar.src}
                className="article-icon mr-4 object-contain"
              />
              <p className="text-lg">27 September 2021</p>
            </div>
            <div className="flex items-center">
              <img
                src={IconClock.src}
                className="article-icon mr-4 object-contain"
              />
              <p className="text-lg">{blog.reading_time} min read</p>
            </div>
          </div>

          <img
            src={blog.multi_res_images.thumbnail}
            className="w-full h-auto max-w-xl mb-8"
          />
          <div className="text-lg font-light space-y-4 mb-6">
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </div>
          <p className="text-lg">
            Click{' '}
            <a
              href={blog.sources.link}
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              here
            </a>{' '}
            for the full article, featured on {blog.sources.name}.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Article;

type Params = {
  params: {
    id: string;
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const res: Response = await fetch(
    `${process.env.HOST}/api/v1/blog/${params.id}`
  );
  const data: any = await res.json();

  return {
    props: {
      blog: data.data,
    },
  };
}

export const getStaticPaths = async () => {
  const res: Response = await fetch(
    `${process.env.HOST}/api/v1/blog?page=1&size=3`
  );
  const data: ResBlogs = await res.json();

  return {
    paths: data.data.map((blog) => {
      return {
        params: {
          id: blog.id.toString(),
          slug: blog.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};
