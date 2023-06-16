import { apolloClient } from '../../api/apollo-client';
import { GET_SOLUTION_DETAILS } from '../../api/graphql/queries';
import SubDetail from '@/components/SubDetail';
import { notFound } from 'next/navigation';
import { SingleProps } from '@/types/lng';
import RelatedContents from '@/components/RelatedContents';
import Hero from '@/components/Hero';
import Seo from '@/components/Seo';

type Solution = {
  seo: any;
  name: string;
  description: string;
  thumbnail: any;
  source: string;
  contents: any;
  relatedProducts: any;
};

const getSolution = async (lng: string, slug: string): Promise<Solution> => {
  const { data } = await apolloClient.query({
    query: GET_SOLUTION_DETAILS,
    variables: { locale: lng, slug },
  });
  const solutionAttrs = data?.solutions?.data[0]?.attributes;
  return solutionAttrs;
};

// const getRelatedProducts = async (lng: string, slug: string) => {
//   const { data } = await apolloClient.query({
//     query: GET_SOLUTIONS_RELATED_CONTENTS,
//     variables: { locale: lng, slug },
//   });
//   const relatedProducts = data?.solutions?.data[0]?.attributes?.products?.data;
//   return relatedProducts;
// };

const SolutionDetailsPage = async ({ params }: SingleProps) => {
  const { lng, slug } = params;
  const solutionAttrs = await getSolution(lng, slug);
  // const relatedProducts = await getRelatedProducts(lng, slug);

  if (!solutionAttrs) {
    notFound();
    return null;
  }
  const { seo, name, description, thumbnail, source, contents } = solutionAttrs;
  return (
    <>
      <Seo data={seo || {}} />
      {/* <Breadcrumb pageName={name} description={description} source={source} /> */}
      <Hero
        data={{
          tag: null,
          title: name,
          description: description,
          media: thumbnail,
          buttons: source ? [{ label: name, link: source }] : [],
        }}
      />
      <section className="overflow-hidden bg-white pt-[35px] pb-[60px] dark:bg-gray-800">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* <div className="w-full px-4 lg:w-9/12"> */}
            <div className="w-full px-4">
              {/* <section className="lg:py-17  py-7 md:py-7">
                <Image
                  src={getStrapiMedia(thumbnail)}
                  alt="Thumbnail"
                  width={1800}
                  height={1000}
                  className="rounded"
                />
              </section> */}
              {contents.map((content, i) => {
                if (i % 2 == 0) {
                  return (
                    <SubDetail
                      key={i}
                      data={{
                        name: content.name,
                        description: content.description,
                        media: content.media,
                        roundedImage: false,
                        reversed: false,
                      }}
                    />
                  );
                } else {
                  return (
                    <SubDetail
                      key={i}
                      data={{
                        name: content.name,
                        description: content.description,
                        media: content.media,
                        roundedImage: false,
                        reversed: true,
                      }}
                    />
                  );
                }
              })}
            </div>
            {/* <div className="lg:py-17 w-full px-4 py-7 md:py-7 lg:w-3/12">
              {popularSolutions?.length > 0 && (
                <div className="mb-10">
                  <h3 className="border-b border-body-color border-opacity-10 py-4 px-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    {lng === 'vi'
                      ? 'Các giải pháp phổ biến'
                      : 'Popular products'}
                  </h3>
                  <ul className="p-4">
                    {popularSolutions?.map(({ attributes }, i) => (
                      <li
                        className="mb-3 border-b border-body-color border-opacity-10 pb-3 dark:border-white dark:border-opacity-10"
                        key={i}
                      >
                        <RelatedPost
                          title={attributes?.name}
                          image={getStrapiMedia(attributes?.thumbnail)}
                          slug={`/solution/${attributes?.slug}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}
          </div>
          {/* </div> */}
        </div>
      </section>
      {solutionAttrs?.relatedProducts?.products?.data?.length > 0 && (
        <RelatedContents
          data={{
            type: 'product',
            relatedContents: solutionAttrs?.relatedProducts,
          }}
        />
      )}
    </>
  );
};

export default SolutionDetailsPage;
