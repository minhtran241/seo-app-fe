import { CaseStudy } from '@/types/caseStudy';
import Link from 'next/link';
import { FaDochub, FaArrowRight } from 'react-icons/fa';

const SingleCaseStudy = ({
  caseStudy,
  lng = 'en',
}: {
  caseStudy: CaseStudy;
  lng: string;
}) => {
  const { title, slug, product } = caseStudy;
  return (
    <>
      <div
        className="wow fadeInUp relative cursor-pointer overflow-hidden transition duration-500 ease-in-out hover:translate-y-[-5px]"
        data-wow-delay=".1s"
      >
        <div className="w-full py-3">
          <div className="flex h-full flex-col border-2 border-primary bg-white p-8">
            <div className="mb-3 flex items-center">
              <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <FaDochub />
              </div>
              {product?.data?.attributes?.slug?.length > 0 ? (
                <h2 className="text-lg font-medium text-primary">
                  <Link
                    href={`/product/${product?.data?.attributes?.slug}`}
                    target="_blank"
                  >
                    {product?.data?.attributes?.name ||
                      (lng === 'en' && 'Case study') ||
                      (lng === 'vi' && 'Dự án được triển khai')}
                  </Link>
                </h2>
              ) : (
                <h2 className="text-lg font-medium text-primary">
                  {product?.data?.attributes?.name ||
                    (lng === 'en' && 'Case study') ||
                    (lng === 'vi' && 'Dự án được triển khai')}
                </h2>
              )}
            </div>
            <div className="flex flex-grow flex-col justify-between">
              <p className="text-base leading-relaxed text-gray-800">{title}</p>
              <Link
                href={`/case-study/${slug}`}
                className="mt-3 inline-flex w-32 items-center rounded bg-primary p-2 capitalize text-white"
              >
                {lng === 'en' && 'Read More'} {lng === 'vi' && 'Đọc Thêm'}{' '}
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCaseStudy;
