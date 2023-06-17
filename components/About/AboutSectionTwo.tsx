import Image from 'next/image';
import { FaCheck, FaRocket } from 'react-icons/fa';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const AboutSectionTwo = ({ data }: { data: any }) => {
  const {
    title,
    description,
    media,
    properties,
    roundedImage = false,
  } = data || {};
  return (
    <div className="lg:mt-18 container mx-auto mt-8 mb-8 md:mt-8">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
          <Image
            alt={media?.data?.attributes?.alternativeText || 'Image'}
            className="max-w-full rounded"
            src={getStrapiMedia(media)}
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:mt-18 ml-auto mr-auto mt-8 w-full px-4 md:mt-8 md:w-5/12">
          <div className="title md:pr-12">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-300 p-3 text-center text-blue-600 shadow-lg">
              <FaRocket />
            </div>
            <h3 className="text-2xl leading-snug text-primary dark:text-primary-title  sm:text-xl md:text-[30px] lg:!leading-relaxed">
              {title}
            </h3>
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {description}
              </p>
            )}
            <ul className="mt-4 list-none">
              {properties?.map((property, i) => (
                <li className="py-2" key={i}>
                  <div className="flex items-center">
                    <div>
                      <span className="mr-3 inline-block rounded-full bg-blue-200 py-2 px-2 text-xs font-semibold uppercase text-blue-600">
                        <FaCheck />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-700">
                        {property?.name}
                      </h4>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
