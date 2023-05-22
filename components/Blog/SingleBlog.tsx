import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, slug, description, thumbnail, publishedAt, author } = blog;
  const authorName: string = author?.data?.attributes?.fullname;

  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden"
        data-wow-delay=".1s"
      >
        {thumbnail?.data?.attributes && (
          <Link
            href={`/blog/${slug}`}
            className="relative block h-[220px] w-full  border border-secondary"
          >
            <Image
              src={getStrapiMedia(thumbnail)}
              alt="image"
              fill
              className=""
            />
          </Link>
        )}
        <div className="py-3 sm:py-8 md:py-8 xl:py-8">
          <p>
            <Link
              href={`/blog/${slug}`}
              className="mb-2 block text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {title}
            </Link>
          </p>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-gray-500 dark:border-white dark:border-opacity-10 dark:text-gray-400">
            {description.slice(0, 150) + '...'}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-primary-title-dark dark:text-primary-title">
                  {authorName}
                </h4>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-primary-title-dark dark:text-primary-title">
                Published
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
