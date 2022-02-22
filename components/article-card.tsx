import Link from 'next/link';

import { Blog } from '../interfaces/blog';

type Props = {
  index: number;
  blog: Blog;
};

const ArticleCard = ({ index, blog }: Props) => {
  const i: number = index + 1;

  return (
    <Link href="/article/[id]" as={`/article/${blog.id}`}>
      <div
        className={`grid grid-cols-12 gap-x-7 border border-gray-100 rounded-xl shadow-lg p-6 cursor-pointer ${
          i &&
          i % 3 === 0 &&
          'lg:col-span-2 border-none shadow-none lg:px-20 gap-x-12'
        }`}
      >
        <div className="col-span-12 lg:col-span-5">
          <div className="h-full">
            <img
              src={blog.multi_res_images.thumbnail}
              className="w-full h-full object-cover rounded-lg mb-4 lg:mb-0"
            />
          </div>
        </div>
        <div
          className={`col-span-12 lg:col-span-7 ${
            i && i % 3 === 0 && i % 2 === 0 && 'lg:row-start-1'
          }`}
        >
          <div className="inline-block px-5 py-1 mb-2 bg-primary rounded-full text-xs text-white uppercase">
            {blog.types.name}
          </div>
          <h4 className="text-lg font-semibold mb-1 line-clamp-2">
            {blog.title}
          </h4>
          <p className="text-sm font-light mb-4">
            Nov 19, 2021 <span className="italic">by {blog.sources.name}</span>
          </p>
          <div className="line-clamp-3">{blog.highlight}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
