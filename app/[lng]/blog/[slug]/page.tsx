import SharePost from '@/components/Blog/SharePost';
import parse from 'html-react-parser';
import { notFound } from 'next/navigation';
import { FaCalendar, FaUser } from 'react-icons/fa';
// import { useMutation } from '@apollo/client';
import React from 'react';
import { apolloClient } from '../../api/apollo-client';
import {
  GET_BLOG_POST,
  // UPDATE_BLOG_POST_VIEWS,
} from '../../api/graphql/queries';
import { getStrapiMedia } from '../../api/urlBuilder';
import { SingleProps } from '@/types/lng';
import getURL from '@/utils/blog/getURL';
import Blog from '@/components/Blog';
import Seo from '@/components/Seo';

type SingleBlog = {
  id: string;
  seo: any;
  title: string;
  description: string;
  thumbnail: any;
  views: number;
  author: any;
  publishedAt: string;
  content: string;
  translator: string;
  source: string;
  relatedBlogs: any;
};

const getBlog = async (lng: string, slug: string): Promise<SingleBlog> => {
  const { data } = await apolloClient.query({
    query: GET_BLOG_POST,
    variables: { locale: lng, slug },
  });
  return {
    id: data?.blogPosts?.data[0]?.id,
    ...data?.blogPosts?.data[0]?.attributes,
  };
};

// const updateBlogViews = async (id: string, views: number): Promise<void> => {
//   await apolloClient.mutate({
//     mutation: UPDATE_BLOG_POST_VIEWS,
//     variables: { id: id, views: views },
//   });
//   const blogViews: number = data?.updateBlogPost?.data?.attributes?.views || 0;
//   return blogViews;
// };

const BlogDetailsPage = async ({ params }: SingleProps) => {
  const { lng, slug } = params;
  const blogAttrs = await getBlog(lng, slug);
  const content: string =
    blogAttrs?.content?.replaceAll(
      'src="',
      `src="${process.env.STRAPI_ASSETS_BASE_URL}`
    ) || '';

  if (!blogAttrs) {
    notFound();
    return null;
  }
  // await apolloClient.mutate({
  //   mutation: UPDATE_BLOG_POST_VIEWS,
  //   variables: { id: blogAttrs?.id, views: blogAttrs?.views + 1 },
  // });
  return (
    <>
      <Seo data={blogAttrs?.seo || {}} />
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(https://mobidev.biz/wp-content/uploads/2020/02/online-workplace-app-development-highlights-scaled.jpg)`,
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-primary bg-opacity-20 py-12">
          <div className="text-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl text-center">
                <h1 className="text-2xl font-semibold leading-snug text-white dark:text-primary-title sm:text-xl md:text-[30px] lg:!leading-relaxed">
                  {blogAttrs?.title}
                </h1>
                <p className="mt-4 text-base !leading-relaxed text-white dark:text-primary-title md:text-lg">
                  {blogAttrs?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white pt-[60px] pb-[80px] dark:bg-gray-800">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                {/* <h2 className="mb-8 text-3xl font-bold leading-tight text-primary-title-dark dark:text-primary-title sm:text-4xl sm:leading-tight">
                  {blogAttrs?.title}
                </h2> */}
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <p className="mr-5  flex items-center text-base font-medium text-gray-600 dark:text-gray-400">
                        <span className="mr-2 text-primary">
                          <FaUser />
                        </span>
                        {blogAttrs?.author?.data?.attributes?.fullname}
                      </p>
                      <p className="mr-5 flex items-center text-base font-medium text-gray-600 dark:text-gray-400">
                        <span className="mr-2 text-primary">
                          <FaCalendar />
                        </span>
                        {new Date(blogAttrs?.publishedAt).toLocaleDateString()}
                      </p>
                      {/* <p className="flex items-center text-base font-medium text-gray-500 dark:text-gray-400">
                        <span className="mr-2 text-primary">
                          <FaEye />
                        </span>
                        {blogAttrs?.views}
                      </p> */}
                    </div>
                  </div>
                  <div className="mb-5">
                    <SharePost data={{ url: getURL(`/blog/${slug}`) }} />
                  </div>
                </div>
                <div>
                  {/* {blogAttrs?.description && (
                    <p className="mb-10 text-base font-medium leading-relaxed text-black dark:text-white  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {blogAttrs?.description}
                    </p>
                  )}
                  {blogAttrs?.thumbnail?.data?.attributes && (
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={getStrapiMedia(blogAttrs?.thumbnail)}
                          alt={
                            blogAttrs?.thumbnail?.data?.attributes
                              ?.alternativeText || 'Blog Thumbnail'
                          }
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  )} */}

                  <div className="blog-content mb-8 text-lg text-black dark:text-white">
                    {parse(content)}
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      {blogAttrs?.translator && lng === 'en' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Translator: {blogAttrs?.translator}
                        </h5>
                      )}
                      {blogAttrs?.translator && lng === 'vi' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Dịch giả: {blogAttrs?.translator}
                        </h5>
                      )}
                      {blogAttrs?.source && lng === 'en' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Source: {blogAttrs?.source}
                        </h5>
                      )}
                      {blogAttrs?.source && lng === 'vi' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Nguồn: {blogAttrs?.source}
                        </h5>
                      )}
                    </div>
                    <div className="mb-5">
                      {lng === 'en' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-right">
                          Share this blog :
                        </h5>
                      )}
                      {lng === 'vi' && (
                        <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-right">
                          Chia sẻ bài viết :
                        </h5>
                      )}
                      <div className="flex items-center sm:justify-end">
                        <SharePost data={{ url: getURL(`/blog/${slug}`) }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {blogAttrs?.relatedBlogs?.blog?.length > 0 && (
        <Blog data={blogAttrs?.relatedBlogs} />
      )}
    </>
  );
};

export default BlogDetailsPage;
