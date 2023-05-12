import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';

// type FeatureProps = {
//   title: string;
//   description: string;
//   features: any[];
// };

const Features = ({ data }) => {
  const { title, description, features } = data || {};
  const lgGridCols: number = features?.length || 2;
  return (
    <>
      <section
        id="features"
        className="lg:py-18 bg-primary/[.03] py-8 dark:bg-gray-900 md:py-8"
      >
        <div className="container">
          <SectionTitle title={title} paragraph={description} center />
          <div
            className={`grid grid-cols-1 gap-x-7 gap-y-14 lg:grid-cols-${lgGridCols} mb-12 md:grid-cols-2`}
          >
            {features?.map((feature, i) => (
              <SingleFeature key={i} data={{ feature, i }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
