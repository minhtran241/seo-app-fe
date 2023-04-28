import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './categoryIcon';

const Features = ({ data }) => {
  const { title, categories } = data;
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle title={title} paragraph={null} center />

          <div className="grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {categories?.data?.map(({ attributes }, i) => (
              <SingleFeature key={i} data={{ attributes, i }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
