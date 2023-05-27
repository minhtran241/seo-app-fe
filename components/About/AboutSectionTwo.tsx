import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { FaCheck } from 'react-icons/fa';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const AboutSectionTwo = ({ data }: { data: any }) => {
  const {
    title,
    description,
    media,
    properties,
    roundedImage = false,
  } = data || {};
  const List = ({ text }) => (
    <p className="mb-4 flex items-center text-xl font-bold text-primary-title-dark dark:text-primary-title sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="mr-4 flex h-[25px] w-[25px] items-center justify-center bg-primary bg-opacity-10 text-primary dark:bg-blue-900 dark:text-blue-300">
        <FaCheck className="h-[18px] w-[18px]" />
      </span>
      {text}
    </p>
  );
  return (
    <section className="lg:py-15 bg-white py-5 dark:bg-gray-900">
      <div className="container">
        {title && (
          <SectionTitle title={title} paragraph={description} center={false} />
        )}
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 pb-4 lg:grid lg:grid-cols-2 lg:px-6">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[500px]"
              data-wow-delay=".2s"
            >
              {properties?.map((property, i) => {
                return (
                  <div className="mb-9" key={i}>
                    <List text={property?.name} />
                    <div className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                      {property?.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {media?.data?.attributes && (
            <div className="w-full px-4">
              {roundedImage ? (
                <Image
                  className="rounded-full"
                  src={getStrapiMedia(media)}
                  alt={
                    media?.data?.attributes?.alternativeText || 'About Image'
                  }
                  width={500}
                  height={1000}
                />
              ) : (
                <Image
                  className="rounded-md"
                  src={getStrapiMedia(media)}
                  alt={
                    media?.data?.attributes?.alternativeText || 'About Image'
                  }
                  width={500}
                  height={1000}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
