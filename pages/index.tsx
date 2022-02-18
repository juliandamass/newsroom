import Header from '../components/header';
import ArticleCard from '../components/article-card';
import Footer from '../components/footer';

import { ResBlogs } from '../interfaces/res-blogs';
import { Blog } from '../interfaces/blog';

type Props = {
  blogs: Blog[];
};

export const getServerSideProps = async () => {
  try {
    const res: Response = await fetch(
      `${process.env.HOST}/api/v1/blog?page=1&size=9`
    );
    const data: ResBlogs = await res.json();

    return {
      props: { blogs: data.data },
    };
  } catch (error) {
    console.error('Error fetching homepage data', error);
    // return { notFound: true };
  }
};

const Home = ({ blogs }: Props) => {
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
        <div className="lg:px-28 py-8">
          <div className="featured relative w-full">
            <img
              src="images/img-featured.jpg"
              className="absolute w-full h-full object-cover z-10"
            />
            <div className="relative w-full h-full flex z-20">
              <div className="w-full max-w-lg mt-auto px-6 lg:px-12 py-6 lg:py-14">
                <h3 className="text-sm text-white mb-2">
                  Sep 27, 2021 <span className="italic">by Meet Insights</span>
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
            {blogs.map((blog: any, i: number) => (
              <ArticleCard key={i} index={i} blog={blog} />
            ))}
          </div>
        </div>
        <div className="flex items-center py-6 lg:py-20">
          <ul className="inline-flex mx-auto">
            <li>
              <a href="#" className="p-3 mx-1 border-b-4 border-transparent">
                &#60;
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-3 mx-1 border-b-4 border-transparent border-primary"
              >
                1
              </a>
            </li>
            {/* <li>
              <a href="#" className="p-3 mx-1 border-b-4 border-transparent">
                2
              </a>
            </li>
            <li>
              <a href="#" className="p-3 mx-1 border-b-4 border-transparent">
                3
              </a>
            </li>
            <li>
              <a href="#" className="p-3 mx-1 border-b-4 border-transparent">
                4
              </a>
            </li>
            <li>
              <a href="#" className="p-3 mx-1 border-b-4 border-transparent">
                5
              </a>
            </li> */}
            <li>
              <a href="#" className="p-3 mx-1 border-b-4 border-transparent">
                &#62;
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />

      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
