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
      <span className="mr-4 flex h-[25px] w-[25px] items-center justify-center bg-primary bg-opacity-10 text-primary">
        <FaCheck className="h-[18px] w-[18px]" />
      </span>
      {text}
    </p>
  );
  return (
    <section className="lg:py-15 bg-white py-5 dark:bg-gray-800">
      <div className="container">
        {title && (
          <SectionTitle title={title} paragraph={description} center={false} />
        )}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp mx-auto max-w-[500px]"
              data-wow-delay=".2s"
            >
              {properties?.map((property, i) => {
                return (
                  <div className="mb-9" key={i}>
                    <List text={property?.name} />
                    <div className="text-base font-medium leading-relaxed text-body-color">
                      {property?.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {media?.data?.attributes && (
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mb-12 aspect-[45/44] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                {roundedImage ? (
                  <Image
                    className="rounded-full"
                    src={getStrapiMedia(media)}
                    alt="About Image"
                    fill
                  />
                ) : (
                  <Image
                    className="rounded-md"
                    src={getStrapiMedia(media)}
                    alt="About Image"
                    fill
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
