import Image from 'next/image';
import parse from 'html-react-parser';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const SingleFeature = ({ data }) => {
  const { feature, i } = data;
  const isDescription: boolean = feature?.description ? true : false;

  return (
    <div
      className="feature-card rounded bg-white p-5 pb-8 text-center"
      key={`feature-${i}`}
    >
      {feature?.media && (
        <Image
          className="mx-auto"
          src={getStrapiMedia(feature?.media)}
          width={30}
          height={30}
          alt={
            feature?.media?.data?.attributes?.alternativeText || 'Feature Image'
          }
        />
      )}
      {isDescription && (
        <div className="mt-4">
          <h4 className="mb-3 text-lg !font-semibold text-black">
            {feature?.name?.toUpperCase()}
          </h4>
          {/* <span className="mb-3 inline-block w-20 border-t-2 border-solid border-blue-200"></span> */}
          <div className="text-gray-700 dark:text-gray-400 ">
            {parse(feature?.description)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFeature;
