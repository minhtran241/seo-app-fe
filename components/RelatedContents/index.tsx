import SectionTitle from '../Common/SectionTitle';
import SingleContent from './SingleContent';

type RelatedContentsProps = {
  type: string;
  relatedContents: any;
};

const RelatedContents = ({ data }: { data: RelatedContentsProps }) => {
  const { type, relatedContents } = data || {};
  let properties;
  if (type === 'product') properties = relatedContents?.products?.data;
  else if (type === 'solution') properties = relatedContents?.solutions?.data;
  return (
    <section
      id="blog"
      className="lg:py-15 border-t-4 border-primary bg-secondary py-5 dark:border-blue-300 dark:bg-gray-900 md:py-5"
    >
      <div className="container">
        <SectionTitle title={relatedContents?.title} paragraph={null} center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {properties?.map(({ attributes }, i) => (
            <div key={i} className="w-full">
              <SingleContent type={type} content={attributes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContents;
