import RelatedPost from '@/components/Blog/RelatedPost';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from 'next/image';
import SubDetail from '@/components/SubDetail';
import { apolloClient } from '../../api/apollo-client';
import {
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS_DETAILS,
  GET_PRODUCTS_RELATED_CONTENT,
} from '../../api/graphql/queries';
import { getStrapiMedia } from '../../api/urlBuilder';
import { notFound } from 'next/navigation';
import { SingleProps } from '@/types/lng';

type Product = {
  seo: any;
  name: string;
  description: string;
  thumbnail: any;
  source: string;
  contents: any;
};

const getProduct = async (lng: string, slug: string): Promise<Product> => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS_DETAILS,
    variables: { locale: lng, slug: slug },
  });
  const productAttrs: Product = data?.products?.data[0]?.attributes;
  return productAttrs;
};

const getRelatedSolutions = async (
  lng: string,
  slug: string
): Promise<[any]> => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS_RELATED_CONTENT,
    variables: { locale: lng, slug },
  });
  const relatedSolutions: any =
    data?.products?.data[0]?.attributes?.solutions?.data;
  return relatedSolutions;
};

const getPopularProducts = async (lng: string) => {
  const { data } = await apolloClient.query({
    query: GET_POPULAR_PRODUCTS,
    variables: { locale: lng },
  });
  const popularProducts = data?.products?.data;
  return popularProducts;
};

const ProductDetailsPage = async ({ params }: SingleProps) => {
  const { lng, slug } = params;
  const productAttrs = await getProduct(lng, slug);
  const relatedSolutions = await getRelatedSolutions(lng, slug);
  const popularProducts = await getPopularProducts(lng);

  if (!productAttrs) {
    notFound();
    return null;
  }
  const { seo, name, description, thumbnail, source, contents } =
    productAttrs || {};
  const {
    metaTitle,
    metaDescription,
    metaImage,
    keywords,
    metaViewport,
    metaRobots,
    canonicalURL,
    metaSocial,
  } = seo || {};
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:image"
        content={getStrapiMedia(metaImage)}
        key="og:image"
      />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta name="viewport" content={metaViewport} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="robots" content={metaRobots}></meta>
      {metaSocial?.map((soc) => (
        <>
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:title`}
            content={soc?.title}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:description`}
            content={soc?.description}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:image`}
            content={getStrapiMedia(soc?.image)}
          />
        </>
      ))}
      <Breadcrumb pageName={name} description={description} source={source} />
      <section className="overflow-hidden bg-white pt-[35px] pb-[60px] dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-9/12">
              <section className="lg:py-17 py-7 md:py-7">
                <Image
                  src={getStrapiMedia(thumbnail)}
                  alt="Thumbnail"
                  width={1000}
                  height={700}
                  className="rounded"
                />
              </section>
              {contents?.map((content, i) => {
                if (i % 2 == 0) {
                  return (
                    <SubDetail
                      key={i}
                      data={{
                        name: content?.name,
                        description: content?.description,
                        media: content?.media,
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
                        name: content?.name,
                        description: content?.description,
                        media: content?.media,
                        roundedImage: false,
                        reversed: true,
                      }}
                    />
                  );
                }
              })}
            </div>
            <div className="lg:py-17 w-full px-4 py-7 md:py-7 lg:w-3/12">
              {relatedSolutions?.length > 0 && (
                <div className="mb-10  bg-primary bg-opacity-5 dark:bg-opacity-10">
                  <h3 className="border-b border-body-color border-opacity-10 py-4 px-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    {lng === 'vi'
                      ? 'Các giải pháp liên quan'
                      : `Related solutions of ${name}`}
                  </h3>
                  <ul className="p-4">
                    {relatedSolutions?.map((solution, i) => (
                      <li
                        className="mb-3 border-b border-body-color border-opacity-10 pb-3 dark:border-white dark:border-opacity-10"
                        key={i}
                      >
                        <RelatedPost
                          title={solution?.attributes?.name}
                          image={getStrapiMedia(
                            solution?.attributes?.thumbnail
                          )}
                          slug={`/solution/${solution?.attributes?.slug}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {popularProducts?.length > 0 && (
                <div className="mb-10  bg-primary bg-opacity-5 dark:bg-opacity-10">
                  <h3 className="border-b border-body-color border-opacity-10 py-4 px-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    {lng === 'vi'
                      ? 'Các sản phẩm phổ biến'
                      : 'Popular products'}
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
                          slug={`/product/${attributes?.slug}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
