import Image from 'next/image';
import parse from 'html-react-parser';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const Detail = ({ data }) => {
  const { name, description, media, roundedImage, reversed } = data;
  return (
    <>
      {reversed ? (
        <section className="lg:py-15  bg-white py-5 dark:bg-gray-800 md:py-5">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
              {media && (
                <div className="w-full px-4 lg:w-1/2">
                  <div
                    className="wow fadeInUp relative mb-12 max-w-[500px] text-center lg:m-0"
                    data-wow-delay=".15s"
                  >
                    {roundedImage ? (
                      <Image
                        className="rounded"
                        src={getStrapiMedia(media)}
                        alt="Detail Image"
                        width={545}
                        height={400}
                      />
                    ) : (
                      <Image
                        className=""
                        src={getStrapiMedia(media)}
                        alt="Detail Image"
                        width={545}
                        height={400}
                      />
                    )}
                  </div>
                </div>
              )}
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-8">
                  <h1 className="mt-12 text-2xl font-bold italic text-primary-title-dark dark:text-primary-title lg:text-3xl">
                    {name}
                  </h1>
                </div>

                <div className="mb-4 md:-mx-4 md:flex md:items-start">
                  <div className="md:mx-4 md:mt-0">
                    <div className="mt-3 text-body-color">
                      {typeof description == 'string' ? parse(description) : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="lg:py-17  bg-primary/[.03] py-7 dark:bg-gray-900 md:py-7">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-8">
                  <h1 className="mt-12 text-2xl font-bold italic text-primary-title-dark dark:text-primary-title lg:text-3xl">
                    {name}
                  </h1>
                </div>

                <div className="mb-4 md:-mx-4 md:flex md:items-start">
                  <div className="md:mx-4 md:mt-0">
                    <div className="mt-3 text-base font-medium leading-relaxed text-body-color">
                      {typeof description == 'string' ? parse(description) : ''}
                    </div>
                  </div>
                </div>
              </div>
              {media && (
                <div className="w-full px-4 lg:w-1/2">
                  <div
                    className="wow fadeInUp relative mb-12  max-w-[500px] text-center lg:m-0"
                    data-wow-delay=".15s"
                  >
                    {roundedImage ? (
                      <Image
                        className="rounded"
                        src={getStrapiMedia(media)}
                        alt="Detail Image"
                        width={545}
                        height={400}
                      />
                    ) : (
                      <Image
                        className=""
                        src={getStrapiMedia(media)}
                        alt="Detail Image"
                        width={545}
                        height={400}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Detail;
