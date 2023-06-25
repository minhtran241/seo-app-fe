import SingleCaseStudy from '../CaseStudy/SingleCaseStudy';
import SectionTitle from '../Common/SectionTitle';

const CaseStudy = ({ data, lng, isHomePage }) => {
  const { title, case_studies } = data || {};
  return (
    <section
      id="blog"
      className={
        isHomePage
          ? 'bg-white py-5 dark:border-blue-300 dark:bg-gray-900 md:py-5 lg:py-16'
          : 'border-t-4 border-primary bg-secondary pb-10 pt-5 dark:border-blue-300 dark:bg-gray-900 md:pb-10 md:pt-5'
      }
    >
      <div className="container">
        <SectionTitle title={title} paragraph={null} center />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {case_studies?.data?.map(({ attributes }, i) => (
            <div key={i} className="w-full">
              <SingleCaseStudy caseStudy={attributes} lng={lng} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
