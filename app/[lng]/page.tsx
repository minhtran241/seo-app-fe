import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import ScrollUp from '@/components/Common/ScrollUp';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { Props } from '@/types/lng';
import { preload } from '@/utils/home/getHomeData';
import { getHomeData } from './api/home/data';
import Brands from '@/components/Brands';
import { getStrapiMedia } from './api/urlBuilder';

export default async function Home({ params: { lng } }: Props) {
  preload(lng);
  const homeData = await getHomeData(lng);
  const {
    metaTitle,
    metaDescription,
    metaImage,
    keywords,
    metaViewport,
    metaRobots,
    canonicalURL,
    metaSocial,
  } = homeData?.seo || {};
  const featureData = {
    title: homeData?.categories?.title,
    description: null,
    features: homeData?.categories?.categories?.data?.map(
      (el) => el?.attributes
    ),
  };
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
      {metaSocial?.map((soc) => (
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
      <ScrollUp />
      <Hero data={homeData?.hero} />
      <Features data={{ ...featureData, col: featureData?.features?.length }} />
      <AboutSectionTwo data={homeData?.sections[0]} />
      <Brands data={homeData?.brands} />
      <Blog data={homeData?.blogs} />
    </>
  );
}
