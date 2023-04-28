import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { getAboutData } from '../api/about/data';
import { use } from 'react';
import Timeline from '@/components/Timeline';
import parse from 'html-react-parser';
import Detail from '@/components/Detail';

const AboutPage = () => {
  const aboutUsData = use(getAboutData());
  const { name, description, details, media } = aboutUsData?.Development;
  return (
    <>
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
