import { Router, useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import Header from '../components/header';
import ArticleCard from '../components/article-card';
import Footer from '../components/footer';

import { ResBlogs } from '../interfaces/res-blogs';
import { Blog } from '../interfaces/blog';

type Props = {
  blogs: Blog[];
  pageCount: number;
};

const Home = ({ blogs, pageCount }: any) => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const router = useRouter();
  const paginationHandler = (page: any) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push(
      {
        pathname: currentPath,
        query: currentQuery,
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <div>
      <Header />
      <div className="hero relative w-full">
        <img
          src="images/img-hero.jpg"
          className="absolute w-full h-full object-cover z-10"
        />
        <div className="relative flex max-w-6xl mx-auto h-full px-6 lg:px-4 z-20">
          <div className="max-w-lg mt-auto mb-16">
            <h2 className="text-6xl text-white mb-4">News & Media</h2>
            <p className="font-light text-2xl text-white mb-6 lg:mb-10">
              Follow us on our journey towards optimizing last-mile efficiencies
              across Southeast-asia
            </p>
            <button className="btn btn--white btn--lg uppercase font-semibold text-primary">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-4 py-8">
        <div className="py-8">
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-primary text-center tracking-tight mb-2 lg:mb-4">
            As Featured on
          </h2>
          <div className="py-6">
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="flex w-full h-20 lg:h-24 items-center justify-center">
                <img
                  src="images/img-logo-the-straits-times.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex w-full h-20 lg:h-24 items-center justify-center">
                <img
                  src="images/img-logo-the-business-times.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex w-full h-20 lg:h-24 items-center justify-center">
                <img
                  src="images/imb-logo-alizila.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex w-full h-20 lg:h-24 items-center justify-center">
                <img
                  src="images/img-logo-vulcan.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex w-full h-20 lg:h-24 items-center justify-center">
                <img
                  src="images/img-logo-international-finance.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : blogs != null ? (
          <div>
            <div className="lg:px-28 py-8">
              <div className="featured relative w-full">
                <img
                  src="images/img-featured.jpg"
                  className="absolute w-full h-full object-cover z-10"
                />
                <div className="relative w-full h-full flex z-20">
                  <div className="w-full max-w-lg mt-auto px-6 lg:px-12 py-6 lg:py-14">
                    <h3 className="text-sm text-white mb-2">
                      Sep 27, 2021{' '}
                      <span className="italic">by Meet Insights</span>
                    </h3>
                    <p className="text-2xl text-white">
                      Bryan See Toh on Revolutionising the Logistics Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogs.map((blog: Blog, i: number) => (
                  <ArticleCard key={i} index={i} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="col-span-2 text-center py-6 lg:py-20">
            <h2 className="text-2xl">No Article</h2>
          </div>
        )}
        <div className="flex items-center py-6 lg:py-20">
          <ReactPaginate
            previousLabel={'<'}
            previousClassName={
              'px-3 mx-1 border-b-4 border-transparent cursor-pointer'
            }
            nextLabel={'>'}
            nextClassName={
              'px-3 mx-1 border-b-4 border-transparent cursor-pointer'
            }
            containerClassName={'inline-flex mx-auto'}
            pageLinkClassName={
              'p-3 mx-1 border-b-4 border-transparent cursor-pointer'
            }
            activeLinkClassName={'border-primary'}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            onPageChange={paginationHandler}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Home.getInitialProps = async ({ query }: any) => {
  const page = query.page || 1;
  const size = 3;
  const res: Response = await fetch(
    `https://pnp-go-staging.parknparcel.com/api/v1/blog?page=${page}&size=${size}`
  );
  const data: ResBlogs = await res.json();
  let pageCount = Math.round(data.total / size);

  console.log(data);

  return {
    blogs: data.data,
    pageCount,
  };
};

export default withRouter(Home);
