import apolloClient from '@/app/api/apollo-client';
import { GET_PRODUCTS_DETAILS } from '@/app/api/graphql/queries';
import Breadcrumb from '@/components/Common/Breadcrumb';
import SubDetail from '@/components/SubDetail';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const getProduct = async (slug: string) => {
  const { data } = await apolloClient().query({
    query: GET_PRODUCTS_DETAILS,
    variables: { slug: slug },
  });
  const productAttrs = data?.products?.data[0]?.attributes;
  return productAttrs;
};

const ProductDetailsPage = async ({ params }: Props) => {
  const { slug } = params;
  const productAttrs = await getProduct(slug);

  if (!productAttrs) {
    notFound();
    return null;
  }
  const { name, thumbnail, source, contents } = productAttrs;
  return (
    <>
      <Breadcrumb pageName={name} description={null} />
      {/* <Cover data={thumbnail} /> */}
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
    </>
  );
};

export default ProductDetailsPage;
