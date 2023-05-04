import apolloClient from '@/app/api/apollo-client';
import { GET_SOLUTION_DETAILS } from '@/app/api/graphql/queries';
import Breadcrumb from '@/components/Common/Breadcrumb';
import SubDetail from '@/components/SubDetail';
import { notFound } from 'next/navigation';
import RelatedPost from '@/components/Blog/RelatedPost';
import SharePost from '@/components/Blog/SharePost';
import TagButton from '@/components/Blog/TagButton';
import NewsLatterBox from '@/components/Contact/NewsLatterBox';
import Image from 'next/image';
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
      <section className="overflow-hidden pt-[35px] pb-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-9/12">
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
            </div>
            <div className="lg:py-17 w-full px-4 py-7 md:py-7 lg:w-3/12">
              <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Related Posts
                </h3>
                <ul className="p-8">
                  <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                    <RelatedPost
                      title="Best way to boost your online sales."
                      image="/images/blog/post-01.jpg"
                      slug="#"
                      date="12 Feb 2025"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                    <RelatedPost
                      title="50 Best web design tips & tricks that will help you."
                      image="/images/blog/post-02.jpg"
                      slug="#"
                      date="15 Feb, 2024"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="The 8 best landing page builders, reviewed"
                      image="/images/blog/post-03.jpg"
                      slug="#"
                      date="05 Jun, 2024"
                    />
                  </li>
                </ul>
              </div>
              <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Category
                </h3>
                <ul className="py-6 px-8">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Tailwind Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Multipurpose
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap py-6 px-8">
                  <TagButton text="Themes" />
                  <TagButton text="UI Kit" />
                  <TagButton text="Tailwind" />
                  <TagButton text="Startup" />
                  <TagButton text="Business" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionDetailsPage;
