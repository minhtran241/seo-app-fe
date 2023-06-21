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
import Seo from '@/components/Seo';
import { FaClock } from 'react-icons/fa';
import { dateFormatCode } from '@/utils/header';
import { getReadingTime } from '@/utils/blog/readingTime';

const Blog = async ({ params: { lng } }: Props) => {
  preload(lng);
  const { seo, title } = (await blogPageDataCache(lng)) || {};
  const blogData = await blogsDataCache(lng);
  const latestBlog = blogData[0]?.attributes;
  const otherBlogs = blogData.slice(1);
  return (
    <>
      <Seo data={seo || {}} />
      <section className="bg-white pt-[60px] pb-[60px] dark:bg-gray-800">
        <div className="container">
          <div className="title text-center">
            <h1 className="title-primary mb-2 text-2xl !leading-6 text-primary dark:text-primary-title sm:text-xl md:text-[30px]">
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
                {new Date(latestBlog?.publishedAt).toLocaleDateString(
                  dateFormatCode[lng],
                  {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </p>
              <Link
                href={`/blog/${latestBlog?.slug}`}
                className="mt-4 block text-2xl font-semibold transition duration-300 ease-in-out hover:text-blue-600 md:text-3xl"
              >
                {latestBlog?.title}
              </Link>
              <p className="text-md md:text-md mt-3 text-justify text-gray-600 dark:text-gray-300">
                {latestBlog?.description}
              </p>
              {lng === 'en' && (
                <Link
                  href={`/blog/${latestBlog?.slug}`}
                  className="mt-2 inline-block font-bold text-blue-500 underline hover:text-blue-400"
                >
                  Read more &rarr;
                </Link>
              )}
              {lng === 'vi' && (
                <Link
                  href={`/blog/${latestBlog?.slug}`}
                  className="mt-2 inline-block font-bold text-blue-500 underline hover:text-blue-400"
                >
                  Đọc thêm &rarr;
                </Link>
              )}
              <div className="mt-6 flex items-center">
                <span className="mr-2 text-sm !text-blue-500 dark:text-gray-200">
                  <FaClock />
                </span>
                <h1 className="text-sm text-gray-600 dark:text-gray-200">
                  {lng === 'en' &&
                    `${getReadingTime(latestBlog?.content)} min read`}
                  {lng === 'vi' &&
                    `${getReadingTime(latestBlog?.content)} phút đọc`}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-6 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {otherBlogs?.map(({ attributes }, i) => (
              <div key={i} className="w-full">
                <SingleBlog blog={attributes} lng={lng} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
