import Timeline from '@/components/Timeline';
import { preload } from '@/utils/about/getAboutData';
import { aboutDataCache } from '@/utils/about/getAboutData';
import { Props } from '@/types/lng';
import Features from '@/components/Features';
import Brands from '@/components/Brands';
// import SocialProof from '@/components/SocialProof';
import AboutSectionOne from '@/components/About/AboutSectionOne';
import Seo from '@/components/Seo';

const AboutPage = async ({ params: { lng } }: Props) => {
  preload(lng);
  const aboutUsData = await aboutDataCache(lng);
  return (
    <>
      <Seo data={aboutUsData?.seo || {}} />
      <AboutSectionOne
        data={{
          title: aboutUsData?.title,
          description: aboutUsData?.description,
          backgroundImage: aboutUsData?.backgroundImage,
          media1: aboutUsData?.media1,
          media2: aboutUsData?.media2,
        }}
      />
      <Timeline data={aboutUsData?.formation} />
      <Brands data={aboutUsData?.brands} />
      <Features
        data={{
          ...aboutUsData?.features,
          col: aboutUsData?.features?.features?.length,
        }}
      />
      {/* <SocialProof data={aboutUsData?.socialProof} /> */}
    </>
  );
};

export default AboutPage;
