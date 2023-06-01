import SingleBlog from '@/components/Blog/SingleBlog';
import { Props } from '@/types/lng';
import {
  blogPageDataCache,
  blogsDataCache,
  preload,
} from '@/utils/blog/getBlogsData';
import { getStrapiMedia } from '../api/urlBuilder';
import Image from 'next/image';
import Link from 'next/link';

const Blog = async ({ params: { lng } }: Props) => {
  preload(lng);
  const { seo, title } = (await blogPageDataCache(lng)) || {};
  const blogData = await blogsDataCache(lng);
  const latestBlog = blogData[0]?.attributes;
  const otherBlogs = blogData.slice(1);
  const {
    metaTitle,
    metaDescription,
    metaImage,
    keywords,
    metaViewport,
    metaRobots,
    canonicalURL,
    metaSocial,
  } = seo || {};
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:image"
        content={getStrapiMedia(metaImage)}
        key="og:image"
      />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta name="viewport" content={metaViewport} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="robots" content={metaRobots}></meta>
      {metaSocial?.map((soc) => (
        <>
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:title`}
            content={soc?.title}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:description`}
            content={soc?.description}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:image`}
            content={getStrapiMedia(soc?.image)}
          />
        </>
      ))}
      <section className="bg-primary/[.08] pt-[60px] pb-[60px] dark:bg-gray-800">
        <div className="container">
          <div className=" border-l-4 border-blue-500">
            <h1 className="ml-4 text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
              {title?.toUpperCase()}
            </h1>
          </div>
          <div className="mt-12 lg:-mx-6 lg:flex lg:items-center">
            <Link
              href={`/blog/${latestBlog?.slug}`}
              className="h-[218px] w-full object-cover dark:hover:shadow-black/30 lg:mx-6 lg:h-[327px] lg:w-1/2"
            >
              <Image
                className="h-[218px] w-full rounded lg:h-[327px]"
                src={getStrapiMedia(latestBlog?.thumbnail)}
                alt={
                  latestBlog?.thumbnail?.data?.attributes?.alternativeText ||
                  'Blog Thumbnail'
                }
                width={433}
                height={218}
              />
            </Link>
            <div className="mt-6 lg:mx-6 lg:mt-0 lg:w-1/2 ">
              <p className="text-sm font-semibold uppercase text-blue-500">
                {new Date(latestBlog?.publishedAt).toLocaleDateString()}
              </p>
              <Link
                href={`/blog/${latestBlog?.slug}`}
                className="mt-4 block text-2xl font-semibold transition duration-300 ease-in-out hover:text-blue-600 md:text-3xl"
              >
                {latestBlog?.title}
              </Link>
              <p className="text-md md:text-md mt-3 text-gray-500 dark:text-gray-300">
                {latestBlog?.description}
              </p>
              <Link
                href={`/blog/${latestBlog?.slug}`}
                className="mt-2 inline-block font-bold text-blue-500 underline hover:text-blue-400"
              >
                Read more &rarr;
              </Link>
              <div className="mt-6 flex items-center">
                <div className="">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {latestBlog?.author?.data?.attributes?.fullname ||
                      'Administrator'}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-6 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {otherBlogs?.map(({ attributes }, i) => (
              <div key={i} className="w-full">
                <SingleBlog blog={attributes} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
