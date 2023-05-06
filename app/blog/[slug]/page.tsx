import { apolloClient } from '@/app/api/apollo-client';
import {
  GET_BLOG_POST,
  UPDATE_BLOG_POST_VIEWS,
} from '@/app/api/graphql/queries';
import SharePost from '@/components/Blog/SharePost';
import Image from 'next/image';
import { getStrapiMedia } from '@/app/api/urlBuilder';
import parse from 'html-react-parser';
import { notFound } from 'next/navigation';
import { FaCalendar, FaEye } from 'react-icons/fa';

type Props = {
  params: { slug: string };
};

const getBlog = async (slug: string) => {
  const { data } = await apolloClient.query({
    query: GET_BLOG_POST,
    variables: { slug: slug },
  });
  return {
    id: data?.blogPosts?.data[0]?.id,
    ...data?.blogPosts?.data[0]?.attributes,
  };
};

const updateBlogViews = async (id: string, views: number) => {
  const { data } = await apolloClient.mutate({
    mutation: UPDATE_BLOG_POST_VIEWS,
    variables: { id: id, views: views },
  });
  const blogViews = data?.updateBlogPost?.data?.attributes?.views;
  return blogViews;
};

const BlogDetailsPage = async ({ params }: Props) => {
  const { slug } = params;
  const blogAttrs = await getBlog(slug);
  const blogViews = await updateBlogViews(blogAttrs?.id, blogAttrs?.views + 1);

  if (!blogAttrs) {
    notFound();
    return null;
  }

  return (
    <>
      <title>{`PAMA Blog | ${blogAttrs?.title}`}</title>
      <meta name="description" content={blogAttrs?.description} />
      <section className="pt-[80px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  {blogAttrs?.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-5 mb-5 items-center">
                      {/* <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div> */}
                      <div className="w-full">
                        <h4 className="text-base font-medium text-dark">
                          By{' '}
                          <span>
                            {blogAttrs?.author?.data?.attributes?.fullname}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-dark">
                        <span className="mr-2">
                          <FaCalendar />
                        </span>
                        {new Date(blogAttrs.publishedAt).toLocaleDateString()}
                      </p>
                      <p className="flex items-center text-base font-medium text-dark">
                        <span className="mr-2">
                          <FaEye />
                        </span>
                        {blogViews}
                      </p>
                    </div>
                  </div>
                  {/* <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                    >
                      Design
                    </a>
                  </div> */}
                </div>
                <div>
                  {blogAttrs.description && (
                    <p className="mb-10 text-base font-medium leading-relaxed text-black dark:text-white  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {blogAttrs?.description}
                    </p>
                  )}
                  {blogAttrs?.thumbnail?.data?.attributes && (
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={getStrapiMedia(blogAttrs?.thumbnail)}
                          alt="image"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  )}

                  <div className="mb-8 text-base leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {parse(blogAttrs?.content)}
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      {blogAttrs?.translator && (
                        <h5 className="mb-3 text-sm font-medium text-body-color">
                          Translator: {blogAttrs?.translator}
                        </h5>
                      )}
                      {blogAttrs?.source && (
                        <h5 className="mb-3 text-sm font-medium text-body-color">
                          Source: {blogAttrs?.source}
                        </h5>
                      )}
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this blog :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
