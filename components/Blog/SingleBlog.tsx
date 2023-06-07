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
        <div className="overflow-hidden">
          <Link href={`/blog/${slug}`}>
            <div className="relative h-[218px] w-full">
              <Image
                className=""
                src={getStrapiMedia(thumbnail)}
                alt={
                  thumbnail?.data?.attributes?.alternativeText ||
                  'Blog Thumbnail'
                }
                fill
              />
              {/* <div className="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent"></div> */}
              <div className="absolute bottom-0 left-0 bg-blue-600 px-4 py-2 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-blue-600">
                {authorName}
              </div>
              <div className="absolute top-0 right-0 mt-3 mr-3 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-blue-600 px-4 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-blue-600">
                <span className="font-bold">
                  {new Date(publishedAt).getDate()}
                </span>
                <small>
                  {new Date(publishedAt).toLocaleString('default', {
                    month: 'long',
                  })}
                </small>
              </div>
            </div>
          </Link>
          <div className="py-4">
            <Link
              href={`/blog/${slug}`}
              className="inline-block text-xl font-semibold transition duration-100 ease-in-out hover:text-blue-600"
            >
              {title}
            </Link>
            <p className="text-md text-gray-600">
              {description?.length > 150
                ? `${description?.substring(0, 150)}...`
                : description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
