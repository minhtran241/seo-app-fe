import { Props } from '@/types/lng';
import Seo from '@/components/Seo';
import SingleCaseStudy from '@/components/CaseStudy/SingleCaseStudy';
import {
  caseStudyPageDataCache,
  caseStudiesDataCache,
  preload,
} from '@/utils/case-study/getCaseStudiesData';

const CaseStudy = async ({ params: { lng } }: Props) => {
  preload(lng);
  const { seo, title } = (await caseStudyPageDataCache(lng)) || {};
  const caseStudyData = await caseStudiesDataCache(lng);
  return (
    <>
      <Seo data={seo || {}} />
      <section className="bg-white pb-[60px] pt-[60px] dark:bg-gray-800">
        <div className="container">
          <div className="title text-center">
            <h1 className="title-primary mb-2 text-2xl !leading-6 text-primary dark:text-primary-title sm:text-xl md:text-[30px]">
              {title?.toUpperCase()}
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-6 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {caseStudyData?.map(({ attributes }, i) => (
              <div key={i} className="w-full">
                <SingleCaseStudy caseStudy={attributes} lng={lng} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
