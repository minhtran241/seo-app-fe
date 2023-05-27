import Timeline from '@/components/Timeline';
import { preload } from '@/utils/about/getAboutData';
import { aboutDataCache } from '@/utils/about/getAboutData';
import { Props } from '@/types/lng';
import { getStrapiMedia } from '../api/urlBuilder';
import Features from '@/components/Features';
import Brands from '@/components/Brands';
import SocialProof from '@/components/SocialProof';
import Hero from '@/components/Hero';

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
      <Hero data={aboutUsData?.hero} />
      <SocialProof data={aboutUsData?.socialProof} />
      <Timeline data={aboutUsData?.formation} />
      <Features
        data={{
          ...aboutUsData?.features,
          col: aboutUsData?.features?.features?.length,
        }}
      />
      <Brands data={aboutUsData?.brands} />
    </>
  );
};

export default AboutPage;
