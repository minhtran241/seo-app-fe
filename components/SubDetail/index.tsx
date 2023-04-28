import Image from 'next/image';
import parse from 'html-react-parser';
import { getStrapiMedia } from '@/app/api/urlBuilder';

const SubDetail = ({ data }) => {
  const { name, description, media, roundedImage, reversed } = data;
  return (
    <>
      {reversed ? (
        <section className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mb-12 max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  {roundedImage ? (
                    <Image
                      className="rounded-full border border-primary"
                      src={getStrapiMedia(media)}
                      alt="about image"
                      width={545}
                      height={400}
                    />
                  ) : (
                    <Image
                      className="rounded-md border border-primary"
                      src={getStrapiMedia(media)}
                      alt="about image"
                      width={545}
                      height={400}
                    />
                  )}
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-8">
                  <h1 className="text-3xl font-semibold text-primary lg:text-4xl">
                    {name}
                  </h1>
                </div>

                <div className="mb-4 md:-mx-4 md:flex md:items-start">
                  <div className="md:mx-4 md:mt-0">
                    <div className="mt-3 text-black dark:text-body-color">
                      {parse(description)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 md:py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-8">
                  <h1 className="text-3xl font-semibold text-primary lg:text-4xl">
                    {name}
                  </h1>
                </div>

                <div className="mb-4 md:-mx-4 md:flex md:items-start">
                  <div className="md:mx-4 md:mt-0">
                    <div className="mt-3 text-black dark:text-body-color">
                      {parse(description)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mb-12 max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  {roundedImage ? (
                    <Image
                      className="rounded-full border border-primary"
                      src={getStrapiMedia(media)}
                      alt="about image"
                      width={545}
                      height={400}
                    />
                  ) : (
                    <Image
                      className="rounded-md border border-primary"
                      src={getStrapiMedia(media)}
                      alt="about image"
                      width={545}
                      height={400}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SubDetail;
