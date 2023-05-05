import { getStrapiMedia } from '@/app/api/urlBuilder';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { FaCheck } from 'react-icons/fa';

const AboutSectionTwo = ({ data }) => {
  const { title, description, media, properties, roundedImage = true } = data;
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-xl font-medium text-primary">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center bg-primary bg-opacity-10 text-primary">
        <FaCheck />
      </span>
      {text}
    </p>
  );
  return (
    <section className="lg:py-15 bg-white py-5 dark:bg-primary/5">
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
                    <div className="sm:text-md text-body-color">
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
                  alt="About Image"
                  fill
                />
              ) : (
                <Image
                  className="rounded-md border border-primary bg-primary"
                  src={getStrapiMedia(media)}
                  alt="About Image"
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
