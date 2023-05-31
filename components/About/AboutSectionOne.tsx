'use client';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import parse from 'html-react-parser';
import Image from 'next/image';

type AboutSectionOneProps = {
  title: string;
  description: string;
  media1: any;
  media2: any;
};

const AboutSectionOne = ({ data }: { data: AboutSectionOneProps }) => {
  const { title, description, media1, media2 } = data;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="mb-4">{parse(description || '')}</div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Image
            className="w-full rounded-lg"
            src={getStrapiMedia(media1)}
            alt={media1?.data?.attributes
							?.alternativeText || 'Image'}
            width={250}
            height={500}
          />
          <Image
            className="mt-4 w-full rounded-lg lg:mt-10"
            src={getStrapiMedia(media2)}
            alt={media2?.data?.attributes
							?.alternativeText || 'Image'}
            width={250}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
