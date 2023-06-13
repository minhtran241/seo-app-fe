import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import Link from 'next/link';

const Hero = ({ data }) => {
  const { media, title, tag, description, buttons } = data || {};
  const bgImage = media ? getStrapiMedia(media) : null;
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pt-16 pb-32"
        style={{ minHeight: '75vh' }}
      >
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <span
            id="blackOverlay"
            className="absolute h-full w-full bg-black opacity-75"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
              <div className="">
                <h1 className="text-[30px] font-semibold text-white sm:text-xl md:text-5xl lg:!leading-snug">
                  {title}
                </h1>
                <p className="mt-4 text-base text-gray-300 md:text-lg">
                  {description}
                </p>
              </div>
              <div className="mt-6">
                {buttons?.map((button, i) => (
                  <button
                    type="button"
                    className="mr-4 mb-4 border border-white bg-white px-8 py-3 text-base font-bold uppercase text-gray-900 shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200"
                    key={i}
                  >
                    <Link href={button?.link} target="_blank">
                      {button?.label}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
