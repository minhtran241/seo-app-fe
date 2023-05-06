import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import ScrollUp from '@/components/Common/ScrollUp';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { blogsCache, homeDataCache, preload } from '@/utils/home/getHomeData';
// import { Roboto } from '@next/font/google';

export default async function Home({}) {
  preload();
  const homeData = await homeDataCache();
  const blogs = await blogsCache();
  return (
    <>
      <title>{homeData?.Metadata?.title}</title>
      <meta name="description" content={homeData?.Metadata?.description} />
      <ScrollUp />
      <Hero data={homeData?.Hero} />
      <Features data={homeData?.Categories} />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo data={homeData?.Sections[0]} />
      {/* <Brands /> */}
      <Blog data={blogs} />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
    </>
  );
}
