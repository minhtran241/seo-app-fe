import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const Hero = ({ data }) => {
  const { tag, title, description, media, source } = data || {};
  return (
    // <>
    <section className=" bg-primary ">
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${getStrapiMedia(media)})`,
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-60">
          <div className="text-center">
            <div className="container mx-auto px-4 py-10">
              <div className="mx-auto max-w-4xl text-center">
                {tag && (
                  <span className="font-semibold uppercase tracking-widest text-gray-200">
                    {tag}
                  </span>
                )}
                <h2 className="mt-8 mb-6 text-4xl font-bold text-gray-100 lg:text-5xl">
                  {title}
                </h2>
                <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
                  {description}
                </p>
                {source && (
                  <Link
                    className="mb-4 inline-block w-full rounded border-2 border-transparent bg-gray-200 py-5 px-8 text-sm font-bold uppercase text-gray-800 transition duration-200 hover:bg-gray-100 md:mr-6 md:w-auto"
                    href={source}
                  >
                    Explore more
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </>
  );
};

export default Hero;
