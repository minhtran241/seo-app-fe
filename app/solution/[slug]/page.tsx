import apolloClient from '@/app/api/apollo-client';
import { GET_SOLUTION_DETAILS } from '@/app/api/graphql/queries';
import Breadcrumb from '@/components/Common/Breadcrumb';
import SubDetail from '@/components/SubDetail';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const getSolution = async (slug: string) => {
  const { data } = await apolloClient().query({
    query: GET_SOLUTION_DETAILS,
    variables: { slug: slug },
  });
  const solutionAttrs = data?.solutions?.data[0]?.attributes;
  return solutionAttrs;
};

const SolutionDetailsPage = async ({ params }: Props) => {
  const { slug } = params;
  const solutionAttrs = await getSolution(slug);

  if (!solutionAttrs) {
    notFound();
    return null;
  }
  const { name, thumbnail, source, contents } = solutionAttrs;
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

export default SolutionDetailsPage;
