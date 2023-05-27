import SubDetail from '@/components/SubDetail';
import { apolloClient } from '../../api/apollo-client';
import {
  GET_PRODUCT_DETAILS,
} from '../../api/graphql/queries';
import { getStrapiMedia } from '../../api/urlBuilder';
import { notFound } from 'next/navigation';
import { SingleProps } from '@/types/lng';
import RelatedContents from '@/components/RelatedContents';
import Hero from '@/components/Hero';

type Product = {
  seo: any;
  name: string;
  description: string;
  thumbnail: any;
  source: string;
  contents: any;
  relatedSolutions: any;
};

const getProduct = async (lng: string, slug: string): Promise<Product> => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCT_DETAILS,
    variables: { locale: lng, slug: slug },
  });
  const productAttrs: Product = data?.products?.data[0]?.attributes;
  return productAttrs;
};

// const getRelatedSolutions = async (
//   lng: string,
//   slug: string
// ): Promise<[any]> => {
//   const { data } = await apolloClient.query({
//     query: GET_PRODUCTS_RELATED_CONTENT,
//     variables: { locale: lng, slug },
//   });
//   const relatedSolutions: any =
//     data?.products?.data[0]?.attributes?.solutions?.data;
//   return relatedSolutions;
// };

const ProductDetailsPage = async ({ params }: SingleProps) => {
  const { lng, slug } = params;
  const productAttrs = await getProduct(lng, slug);
  // const relatedSolutions = await getRelatedSolutions(lng, slug);

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
      <Hero
        data={{
          tag: null,
          title: name,
          description: description,
          media: thumbnail,
          buttons: [{ label: name, link: source }],
        }}
      />
      <section className="overflow-hidden bg-white pt-[35px] pb-[60px] dark:bg-gray-800">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* <section className="">
                <Image
                  src={getStrapiMedia(thumbnail)}
                  alt="Thumbnail"
                  width={2000}
                  height={1000}
                  className="rounded"
                />
              </section> */}
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
          </div>
        </div>
      </section>

      {productAttrs?.relatedSolutions?.solutions?.data?.length > 0 && (
        <RelatedContents
          data={{
            type: 'product',
            relatedContents: productAttrs?.relatedSolutions,
          }}
        />
      )}
    </>
  );
};

export default ProductDetailsPage;
