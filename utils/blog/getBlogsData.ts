import { apolloClient } from '@/app/[lng]/api/apollo-client';
import { GET_BLOG_PAGE, GET_BLOG_POSTS } from '@/app/[lng]/api/graphql/queries';
import { cache } from 'react';

export const preload = (lng: string) => {
  void blogsDataCache(lng);
  void blogPageDataCache(lng);
};

export const blogPageDataCache = cache(async (lng: string) => {
  const { data } = await apolloClient.query({
    query: GET_BLOG_PAGE,
    variables: { locale: lng },
  });
	return data?.blogPage?.data?.attributes;
});

export const blogsDataCache = cache(async (lng: string) => {
  const { data } = await apolloClient.query({
    query: GET_BLOG_POSTS,
    variables: { locale: lng },
  });

  return data?.blogPosts?.data;
});
