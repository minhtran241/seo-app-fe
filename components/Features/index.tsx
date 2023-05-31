import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';

// type FeatureProps = {
//   title: string;
//   description: string;
//   features: any[];
// };

const Features = ({ data }) => {
  const { title, description, features, col } = data || {};
  const lgGridCols: number = features?.length || 2;
  let gridEle = <></>;
  if (col === 3)
    gridEle = (
      <div
        className={`mb-12 grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3`}
      >
        {features?.map((feature, i) => (
          <SingleFeature key={i} data={{ feature, i }} />
        ))}
      </div>
    );
  else if (col === 4)
    gridEle = (
      <div
        className={`mb-12 grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-2`}
      >
        {features?.map((feature, i) => (
          <SingleFeature key={i} data={{ feature, i }} />
        ))}
      </div>
    );

  return (
    <>
      <section
        id="features"
        className="lg:py-18 bg-primary/[.08] py-8 dark:bg-gray-800 md:py-8"
      >
        <div className="container">
          <SectionTitle title={title} paragraph={description} center />
          {gridEle}
        </div>
      </section>
    </>
  );
};

export default Features;
