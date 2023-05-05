import Breadcrumb from '@/components/Common/Breadcrumb';
import { getAboutData } from '../api/about/data';
import { use } from 'react';
import Timeline from '@/components/Timeline';
import Detail from '@/components/Detail';
import Head from 'next/head';

const AboutPage = () => {
  const aboutUsData = use(getAboutData());
  const { name, description, details, media } = aboutUsData?.Development;
  return (
    <>
      <title>{aboutUsData?.Metadata?.title}</title>
      <meta name="description" content={aboutUsData?.Metadata?.description} />
      <Breadcrumb
        pageName={aboutUsData?.title}
        description={aboutUsData?.description}
      />
      {/* <Cover data={aboutUsData?.Cover} /> */}
      <Timeline data={aboutUsData?.Formation} />
      <Detail
        data={{ name, description, details, media, roundedImage: false }}
      />
    </>
  );
};

export default AboutPage;
