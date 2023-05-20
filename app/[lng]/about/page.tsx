import Breadcrumb from '@/components/Common/Breadcrumb';
import Timeline from '@/components/Timeline';
import { preload } from '@/utils/about/getAboutData';
import { aboutDataCache } from '@/utils/about/getAboutData';
import Image from 'next/image';
import { Props } from '@/types/lng';
import { getStrapiMedia } from '../api/urlBuilder';
import Features from '@/components/Features';
import Detail from '@/components/Detail';

const AboutPage = async ({ params: { lng } }: Props) => {
  preload(lng);
  const aboutUsData = await aboutDataCache(lng);
  const {
    metaTitle,
    metaDescription,
    metaImage,
    keywords,
    metaViewport,
    metaRobots,
    canonicalURL,
    metaSocial,
  } = aboutUsData?.seo || {};
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:image"
        content={getStrapiMedia(metaImage)}
        key="og:image"
      />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta name="viewport" content={metaViewport} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="robots" content={metaRobots}></meta>
      {metaSocial?.map((soc, i) => (
        <>
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:title`}
            content={soc?.title}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:description`}
            content={soc?.description}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:image`}
            content={getStrapiMedia(soc?.image)}
          />
        </>
      ))}
      <Breadcrumb
        pageName={aboutUsData?.title}
        description={aboutUsData?.description}
        source={null}
      />
      {aboutUsData?.Cover?.data?.attributes && (
        <section className="lg:py-17 bg-white py-7 dark:bg-gray-900 md:py-7">
          <div className="w-full px-4">
            <Image
              src={getStrapiMedia(aboutUsData?.Cover)}
              alt="About Us Cover"
              width={1500}
              height={300}
              className="mx-auto rounded object-cover object-center"
            />
          </div>
        </section>
      )}
      <Features data={aboutUsData?.Features} />
      <Timeline data={aboutUsData?.Formation} />
      <Detail data={{ roundedImage: true, ...aboutUsData?.Team }} />
    </>
  );
};

export default AboutPage;
