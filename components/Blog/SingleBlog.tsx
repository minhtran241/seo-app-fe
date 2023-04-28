import { getStrapiMedia } from '@/app/api/urlBuilder';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

const SingleBlog = ({ blog }) => {
  const { title, slug, description, thumbnail, publishedAt, author } = blog;
  const authorName: string = author.data.attributes.fullname;

  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md border border-primary bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href="/" className="relative block h-[220px] w-full rounded-md">
          <Image src={getStrapiMedia(thumbnail)} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <p>
            <Link
              href={`/blog/${slug}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </p>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-body-color dark:border-white dark:border-opacity-10">
            {description.slice(0, 150) + '...'}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {authorName}
                </h4>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Published
              </h4>
              <p className="text-xs text-body-color">
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
