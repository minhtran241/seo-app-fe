import Image from 'next/image';
import parse from 'html-react-parser';
import { getStrapiMedia } from '@/app/api/urlBuilder';

const Detail = ({ data }) => {
  const { name, description, details, media, roundedImage } = data;
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-8">
                <h1 className="text-3xl font-semibold text-primary lg:text-4xl">
                  {name}
                </h1>
                {description && (
                  <div className="mt-2">
                    <p className="text-body-color">{description}</p>
                  </div>
                )}
              </div>

              {details.map((item, i) => {
                return (
                  <div className="mb-4 md:-mx-4 md:flex md:items-start" key={i}>
                    <div className="md:mx-4 md:mt-0">
                      <h1 className="mb-2 text-2xl font-semibold dark:text-white">
                        {item.name}
                      </h1>
                      <div className="mt-3 text-body-color">
                        {parse(item.description)}
                      </div>
                    </div>
                  </div>
                );
              })}
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
    </>
  );
};

export default Detail;
