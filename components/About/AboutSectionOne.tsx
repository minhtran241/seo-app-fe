'use client';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import parse from 'html-react-parser';
import Image from 'next/image';

type AboutSectionOneProps = {
  title: string;
  description: string;
  backgroundImage: any;
  media1: any;
  media2: any;
};

const AboutSectionOne = ({ data }: { data: AboutSectionOneProps }) => {
  const { title, description, backgroundImage, media1, media2 } = data;
  return (
    <section
      className="bg-white bg-cover bg-center dark:bg-gray-900"
      style={{
        backgroundImage: `url(${getStrapiMedia(backgroundImage)})`,
      }}
    >
      <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="title text-gray-700 dark:text-gray-400">
          <h2 className="mb-2 text-2xl !leading-6 text-white dark:text-primary-title sm:text-xl md:text-[30px]">
            {title}
          </h2>
          <div className="rich-content my-4 text-white">
            {parse(description || '')}
          </div>
        </div>
        {/* <div className="mt-8 grid grid-cols-2 gap-4">
          <Image
            className="w-full rounded-lg"
            src={getStrapiMedia(media1)}
            alt={media1?.data?.attributes?.alternativeText || 'Image'}
            width={250}
            height={500}
          />
          <Image
            className="mt-4 w-full rounded-lg lg:mt-10"
            src={getStrapiMedia(media2)}
            alt={media2?.data?.attributes?.alternativeText || 'Image'}
            width={250}
            height={500}
          />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSectionOne;
