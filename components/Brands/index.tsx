import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';

const Brands = ({ data }) => {
  const { title, description, brands } = data || {};
  return (
    <section className="mb-10 bg-white dark:bg-gray-900 lg:mb-20">
      <div className="container">
        <SectionTitle title={title} paragraph={description} center={true} />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp flex flex-wrap items-center justify-center border-b-4 border-primary bg-secondary py-8 px-8 dark:border-blue-300 dark:bg-gray-800 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]">
              {brands?.map((brand, i) => (
                <SingleBrand key={i} brand={brand} />
              ))}
            </div>
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
      {/* <Link
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={getStrapiMedia(media)} alt={name} fill />
      </Link> */}
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
