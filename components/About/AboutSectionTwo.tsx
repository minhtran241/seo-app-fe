import { getStrapiMedia } from '@/app/api/urlBuilder';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { UniqueTypeNamesRule } from 'graphql';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionTwo = ({ data }) => {
  const { title, description, media, properties, roundedImage = true } = data;
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-xl font-medium text-primary">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {title && (
          <SectionTitle title={title} paragraph={description} left={true} />
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
                    <div className="sm:text-md text-body-color sm:text-sm">
                      {property?.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {roundedImage ? (
                <Image
                  className="rounded-full border border-primary bg-primary"
                  src={getStrapiMedia(media)}
                  alt="about image"
                  fill
                />
              ) : (
                <Image
                  className="rounded-md border border-primary bg-primary"
                  src={getStrapiMedia(media)}
                  alt="about image"
                  fill
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
