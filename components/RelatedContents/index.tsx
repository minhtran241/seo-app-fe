import SectionTitle from '../Common/SectionTitle';
import SingleContent from './SingleContent';

const RelatedContents = ({ data }) => {
  const { title, relatedContents } = data || {};
  return (
    <section
      id="blog"
      className="lg:py-15 border-t-4 border-primary bg-secondary py-5 dark:border-blue-300 dark:bg-gray-900 md:py-5"
    >
      <div className="container">
        <SectionTitle title={title} paragraph={null} center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {relatedContents?.map(({ attributes }, i) => (
            <div key={i} className="w-full">
              <SingleContent content={attributes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContents;
