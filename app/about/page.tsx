import Breadcrumb from '@/components/Common/Breadcrumb';
import { getAboutData } from '../api/about/data';
import { use } from 'react';
import Timeline from '@/components/Timeline';
import Detail from '@/components/Detail';
import Head from 'next/head';
import { preload } from '@/utils/about/getAboutData';
import { aboutDataCache } from '@/utils/about/getAboutData';
import Image from 'next/image';
import { getStrapiMedia } from '../api/urlBuilder';

const AboutPage = async () => {
  preload();
  const aboutUsData = await aboutDataCache();
  const { name, description, details, media } = aboutUsData?.Development;
  return (
    <>
      <title>{aboutUsData?.Metadata?.title}</title>
      <meta name="description" content={aboutUsData?.Metadata?.description} />
      <Breadcrumb
        pageName={aboutUsData?.title}
        description={aboutUsData?.description}
        source={null}
      />
      {aboutUsData?.Cover?.data?.attributes && (
        <section className="lg:py-17 py-7 md:py-7">
          <div className="w-full px-4">
            <Image
              src={getStrapiMedia(aboutUsData?.Cover)}
              alt="About Us Cover"
              width={1500}
              height={300}
              className="mx-auto border border-primary object-cover object-center"
            />
          </div>
        </section>
      )}
      <Timeline data={aboutUsData?.Formation} />
      <Detail
        data={{ name, description, details, media, roundedImage: false }}
      />
    </>
  );
};

export default AboutPage;
