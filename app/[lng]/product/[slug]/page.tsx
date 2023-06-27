import SubDetail from '@/components/SubDetail';
import { apolloClient } from '../../api/apollo-client';
import { GET_PRODUCT_DETAILS } from '../../api/graphql/queries';
import { redirect } from 'next/navigation';
import { SingleProps } from '@/types/lng';
import RelatedContents from '@/components/RelatedContents';
import Hero from '@/components/Hero';
import Seo from '@/components/Seo';

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
    return redirect('/');
  }
  const { seo, name, description, thumbnail, source, contents } =
    productAttrs || {};
  return (
    <>
      <Seo data={seo || {}} />
      <Hero
        data={{
          tag: null,
          title: name,
          description: description,
          media: thumbnail,
          buttons: source ? [{ label: name, link: source }] : [],
        }}
      />
      <section className="overflow-hidden bg-white pb-[60px] pt-[35px] dark:bg-gray-800">
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
            type: 'solution',
            relatedContents: productAttrs?.relatedSolutions,
          }}
        />
      )}
    </>
  );
};

export default ProductDetailsPage;
