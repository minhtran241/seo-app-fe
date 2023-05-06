import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '@/app/api/urlBuilder';

const Hero = ({ data }) => {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container mx-auto flex flex-col justify-center p-14 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
          <div className="flex flex-col justify-center p-6 text-center lg:max-w-lg lg:text-left xl:max-w-lg">
            <h1 className="text-5xl font-bold leading-none text-white dark:text-black sm:text-6xl">
              {data?.title}
            </h1>
            <p className="mt-6 mb-8 text-lg text-white dark:text-black sm:mb-12">
              {data?.description}
            </p>
            {/* <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="bg-violet-400 text-gray-900 rounded px-8 py-3 text-lg font-semibold"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="border-gray-100 rounded border px-8 py-3 text-lg font-semibold"
              >
                Malesuada
              </a>
            </div> */}
          </div>
          {data?.media?.data?.attributes && (
            <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
              <Image
                src={getStrapiMedia(data?.media)}
                alt=""
                className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
                height={320}
                width={640}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
