import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import ScrollUp from '@/components/Common/ScrollUp';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { Props } from '@/types/lng';
import { preload } from '@/utils/home/getHomeData';
import { getHomeData } from './api/home/data';
import Brands from '@/components/Brands';
import Seo from '@/components/Seo';

export default async function Home({ params: { lng } }: Props) {
  preload(lng);
  const homeData = await getHomeData(lng);
  const featureData = {
    title: homeData?.categories?.title,
    description: null,
    backgroundImage: homeData?.categories?.backgroundImage,
    features: homeData?.categories?.categories?.data?.map(
      (el) => el?.attributes
    ),
  };
  return (
    <>
      <Seo data={homeData?.seo || {}} />
      <ScrollUp />
      <Hero data={homeData?.hero} />
      <AboutSectionTwo data={homeData?.sections[0]} />
      <Brands data={homeData?.brands} />
      <Features data={{ ...featureData, col: featureData?.features?.length }} />
      <Blog data={homeData?.blogs} />
    </>
  );
}
