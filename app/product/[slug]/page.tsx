import { apolloClient } from '@/app/api/apollo-client';
import {
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS_DETAILS,
  GET_PRODUCTS_RELATED_CONTENT,
} from '@/app/api/graphql/queries';
import { getStrapiMedia } from '@/app/api/urlBuilder';
import RelatedPost from '@/components/Blog/RelatedPost';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from 'next/image';
import SubDetail from '@/components/SubDetail';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const getProduct = async (slug: string) => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS_DETAILS,
    variables: { slug: slug },
  });
  const productAttrs = data?.products?.data[0]?.attributes;
  return productAttrs;
};

const getRelatedSolutions = async (slug: string) => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS_RELATED_CONTENT,
    variables: { slug },
  });
  const relatedSolutions = data?.products?.data[0]?.attributes?.solutions?.data;
  return relatedSolutions;
};

const getPopularProducts = async () => {
  const { data } = await apolloClient.query({
    query: GET_POPULAR_PRODUCTS,
  });
  const popularProducts = data?.products?.data;
  return popularProducts;
};

const ProductDetailsPage = async ({ params }: Props) => {
  const { slug } = params;
  const productAttrs = await getProduct(slug);
  const relatedSolutions = await getRelatedSolutions(slug);
  const popularProducts = await getPopularProducts();

  if (!productAttrs) {
    notFound();
    return null;
  }
  const { name, description, thumbnail, source, contents } = productAttrs;
  return (
    <>
      <title>{`PAMA Product | ${name}`}</title>
      <meta name="description" content={description} />
      <Breadcrumb pageName={name} description={description} source={source} />
      <section className="overflow-hidden pt-[35px] pb-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-9/12">
              <section className="lg:py-17 py-7 md:py-7">
                <Image
                  src={getStrapiMedia(thumbnail)}
                  alt="Thumbnail"
                  width={1000}
                  height={700}
                />
              </section>
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
            <div className="lg:py-17 w-full px-4 py-7 md:py-7 lg:w-3/12">
              <div className="mb-10  bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Related solutions of {name}
                </h3>
                <ul className="p-4">
                  {relatedSolutions.map((solution, i) => (
                    <li
                      className="mb-3 border-b border-body-color border-opacity-10 pb-3 dark:border-white dark:border-opacity-10"
                      key={i}
                    >
                      <RelatedPost
                        title={solution?.attributes?.name}
                        image={getStrapiMedia(solution?.attributes?.thumbnail)}
                        slug={`/solution/${solution?.attributes?.slug}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-10  bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular products
                </h3>
                <ul className="p-4">
                  {popularProducts?.map(({ attributes }, i) => (
                    <li
                      className="mb-3 border-b border-body-color border-opacity-10 pb-3 dark:border-white dark:border-opacity-10"
                      key={i}
                    >
                      <RelatedPost
                        title={attributes?.name}
                        image={getStrapiMedia(attributes?.thumbnail)}
                        slug={`/products/${attributes?.slug}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
