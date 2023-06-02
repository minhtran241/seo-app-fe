import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import Image from 'next/image';
import Link from 'next/link';

type Content = {
  name: string;
  slug: string;
  description: string;
  thumbnail: any;
};

const SingleContent = ({
  type,
  content,
}: {
  type: string;
  content: Content;
}) => {
  const { name, slug, description, thumbnail } = content;

  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden"
        data-wow-delay=".1s"
      >
        {thumbnail?.data?.attributes && (
          <Link
            href={`/${type}/${slug}`}
            className="w-ful relative block h-[218px]"
          >
            <Image
              src={getStrapiMedia(thumbnail)}
              alt={thumbnail?.data?.attributes?.alternativeText || 'Thumbnail'}
              fill
              className=""
            />
          </Link>
        )}
        <div className="py-3 sm:py-8 md:py-8 xl:py-8">
          <p>
            <Link
              href={`/${type}/${slug}`}
              className="mb-2 block text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {name}
            </Link>
          </p>
          <p className="mb-6 pb-6 text-base text-gray-600 dark:text-gray-400">
            {description?.length > 150
              ? `${description.substring(0, 150)}...`
              : description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleContent;
