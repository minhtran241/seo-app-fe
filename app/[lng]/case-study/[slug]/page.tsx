import SharePost from '@/components/Blog/SharePost';
import parse from 'html-react-parser';
import { redirect } from 'next/navigation';
import React from 'react';
import { apolloClient } from '../../api/apollo-client';
import { GET_CASE_STUDY } from '../../api/graphql/queries';
import { SingleProps } from '@/types/lng';
import getURL from '@/utils/blog/getURL';
import Seo from '@/components/Seo';
import { FaHandshake, FaLink } from 'react-icons/fa';
import Link from 'next/link';
import CaseStudy from '@/components/CaseStudy';

type SingleCaseStudy = {
  id: string;
  seo: any;
  title: string;
  product: any;
  description: string;
  content: string;
  source: string;
  link: string;
  relatedCaseStudies: any;
};

const getCaseStudy = async (
  lng: string,
  slug: string
): Promise<SingleCaseStudy> => {
  const { data } = await apolloClient.query({
    query: GET_CASE_STUDY,
    variables: { locale: lng, slug },
  });
  return {
    id: data?.caseStudies?.data[0]?.id,
    ...data?.caseStudies?.data[0]?.attributes,
  };
};

const CaseStudyDetailsPage = async ({ params }: SingleProps) => {
  const { lng, slug } = params;
  const caseStudyAttrs = await getCaseStudy(lng, slug);
  const productName = caseStudyAttrs?.product?.data?.attributes?.name || '';
  const productSlug = caseStudyAttrs?.product?.data?.attributes?.slug || '';
  const content: string =
    caseStudyAttrs?.content?.replaceAll(
      'src="',
      `src="${process.env.STRAPI_ASSETS_BASE_URL}`
    ) || '';

  if (!caseStudyAttrs || !caseStudyAttrs?.content) {
    return redirect('/');
  }

  return (
    <>
      <Seo data={caseStudyAttrs?.seo || {}} />
      <section className="bg-white py-[40px] dark:bg-gray-800">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold !leading-tight text-primary-title-dark dark:text-primary-title sm:text-4xl">
                  {caseStudyAttrs?.title}
                </h2>
                <div className="flex flex-wrap items-center justify-between ">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 items-center">
                      {productName?.length > 0 && (
                        <p className="mb-2 mr-5 flex  items-center text-base font-light text-black dark:text-gray-400">
                          <span className="mr-2 text-gray-400">
                            {' '}
                            <FaHandshake />
                          </span>
                          {lng === 'en' && (
                            <span className="mr-2 text-gray-500">Product:</span>
                          )}
                          {lng === 'vi' && (
                            <span className="mr-2 text-gray-500">
                              Sản phẩm:
                            </span>
                          )}
                          {productSlug?.length > 0 ? (
                            <Link
                              href={`/product/${productSlug}`}
                              className=" text-primary transition duration-150 ease-in-out hover:text-blue-600"
                              target="_blank"
                            >
                              {productName}
                            </Link>
                          ) : (
                            <span className="text-gray-400">{productName}</span>
                          )}
                        </p>
                      )}
                      {caseStudyAttrs?.link?.length > 0 && (
                        <p className="mr-5 flex  items-center text-base font-light text-black dark:text-gray-400">
                          <span className="mr-2 text-gray-400">
                            {' '}
                            <FaLink />
                          </span>
                          {lng === 'en' && (
                            <span className="mr-2 text-gray-500">
                              Case study:
                            </span>
                          )}
                          {lng === 'vi' && (
                            <span className="mr-2 text-gray-500">Dự án:</span>
                          )}
                          <Link
                            href={caseStudyAttrs?.link}
                            className="italic text-primary underline transition duration-150 ease-in-out hover:text-blue-600"
                            target="_blank"
                          >
                            {caseStudyAttrs?.link?.length > 36
                              ? `${caseStudyAttrs?.link?.slice(
                                  0,
                                  17
                                )}...${caseStudyAttrs?.link?.slice(
                                  caseStudyAttrs?.link?.length - 19,
                                  caseStudyAttrs?.link?.length - 1
                                )}`
                              : caseStudyAttrs?.link}
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-5">
                    <SharePost data={{ url: getURL(`/case-study/${slug}`) }} />
                  </div>
                </div>
                <div className="mb-5 border-b border-[#e9e9e9] pb-[20px] text-justify text-lg font-light italic text-primary dark:border-white dark:border-opacity-10">
                  {caseStudyAttrs?.description}
                </div>
                <div>
                  <div className="rich-content mb-8 pt-[5px] text-lg text-black dark:text-white">
                    {parse(content)}
                  </div>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      {caseStudyAttrs?.source && lng === 'en' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Source: {caseStudyAttrs?.source}
                        </h5>
                      )}
                      {caseStudyAttrs?.source && lng === 'vi' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Nguồn: {caseStudyAttrs?.source}
                        </h5>
                      )}
                    </div>
                    <div className="mb-5">
                      {lng === 'en' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-right">
                          Share this case study :
                        </h5>
                      )}
                      {lng === 'vi' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-right">
                          Chia sẻ dự án này :
                        </h5>
                      )}
                      <div className="flex items-center sm:justify-end">
                        <SharePost
                          data={{ url: getURL(`/case-study/${slug}`) }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {caseStudyAttrs?.relatedCaseStudies?.case_studies?.data?.length > 0 && (
        <CaseStudy
          data={caseStudyAttrs?.relatedCaseStudies}
          lng={lng}
          isHomePage={false}
        />
      )}
    </>
  );
};

export default CaseStudyDetailsPage;
