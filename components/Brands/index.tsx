import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const Brands = ({ data }) => {
  const { title, description, brands } = data || {};
  return (
    <section className="mb-10 bg-white dark:bg-gray-900">
      <div className="container">
        <SectionTitle title={title} paragraph={description} center={true} />
        <div className="slider -mx-4">
          <div className="slide-track">
            {brands?.map((brand, i) => (
              <SingleBrand key={i} brand={brand} />
            ))}
            {brands?.map((brand, i) => (
              <SingleBrand key={i} brand={brand} />
            ))}
            {brands?.map((brand, i) => (
              <SingleBrand key={i} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: any }) => {
  const { name, href, media } = brand || {};

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <Link
        href={href || '/'}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full"
      >
        <Image
          src={getStrapiMedia(media)}
          alt={media?.data?.attributes?.alternativeText || name}
          fill
        />
      </Link>
    </div>
  );
};
