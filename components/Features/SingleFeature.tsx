import Image from 'next/image';
import parse from 'html-react-parser';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const SingleFeature = ({ data }) => {
  const { feature, i } = data;
  const isDescription: boolean = feature?.description ? true : false;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center bg-primary bg-opacity-10">
          <Image
            src={getStrapiMedia(feature?.media)}
            alt="Feature Icon"
            width={35}
            height={35}
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-primary-title-dark dark:text-primary-title sm:text-2xl lg:text-xl xl:text-2xl">
          {feature?.name}
        </h3>
        {isDescription && (
          <div className="pr-[10px] text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
            {parse(feature?.description)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleFeature;
