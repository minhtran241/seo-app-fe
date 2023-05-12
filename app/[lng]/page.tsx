import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import ScrollUp from '@/components/Common/ScrollUp';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { Props } from '@/types/lng';
import { preload } from '@/utils/home/getHomeData';
import { getHomeData } from './api/home/data';
import Brands from '@/components/Brands';
// import { Roboto } from '@next/font/google';

export default async function Home({ params: { lng } }: Props) {
  preload(lng);
  const homeData = await getHomeData(lng);
  const featureData = {
    title: homeData?.Categories?.title,
    description: null,
    features: homeData?.Categories?.categories?.data?.map(
      (el) => el?.attributes
    ),
  };
  return (
    <>
      <title>{homeData?.Metadata?.title}</title>
      <meta name="description" content={homeData?.Metadata?.description} />
      <ScrollUp />
      <Hero data={homeData?.Hero} />
      <Features data={featureData} />
      <Brands data={homeData?.Brands} />
      <AboutSectionTwo data={homeData?.Sections[0]} />
      <Blog data={homeData?.Blogs} />
      {/* <Video /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
    </>
  );
}
