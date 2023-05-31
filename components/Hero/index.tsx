import Link from 'next/link';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

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
              <div className="pr-12">
                <h1 className="text-5xl font-semibold text-white">{title}</h1>
                <p className="mt-4 text-lg text-gray-300">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
