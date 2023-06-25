import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import { Blog } from '@/types/blog';
import { getReadingTime } from '@/utils/blog/readingTime';
import { dateFormatCode } from '@/utils/header';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';

const SingleBlog = ({ blog, lng = 'en' }: { blog: Blog; lng: string }) => {
  const { title, slug, description, content, thumbnail, publishedAt } = blog;
  // const authorName: string = author?.data?.attributes?.fullname;
  const readingTime = getReadingTime(content);

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
              <div className="absolute bottom-0 left-0 flex items-center bg-blue-600 px-4 py-2 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-blue-600">
                <span className="mr-2">
                  <FaClock />
                </span>
                {/* <p>{authorName}</p> */}
                <p>
                  {lng === 'en' && `${readingTime} min read`}
                  {lng === 'vi' && `${readingTime} phút đọc`}
                </p>
              </div>
              <div className="absolute right-0 top-0 mr-3 mt-3 flex h-[75px] w-[75px] flex-col items-center justify-center rounded-full bg-blue-600 px-4 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-blue-600">
                <span className="font-bold">
                  {new Date(publishedAt).getDate()}
                </span>
                <small>
                  {new Date(publishedAt).toLocaleString(dateFormatCode[lng], {
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
            <p className="text-md text-justify font-light italic text-gray-600">
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
