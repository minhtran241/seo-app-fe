import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import Brands from '@/components/Brands';
import ScrollUp from '@/components/Common/ScrollUp';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Video from '@/components/Video';
// import { Roboto } from '@next/font/google';
import { getHomeData, getHomeBlogs } from './api/home/data';
import { use } from 'react';

// const inter = Roboto({ subsets: ['vietnamese'] });

export default function Home({}) {
  const homeData = use(getHomeData());
  const blogs = use(getHomeBlogs());
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
