import { apolloClient } from '@/app/api/apollo-client';
import { GET_BLOG_POSTS } from '@/app/api/graphql/queries';
import { cache } from 'react';

export const preload = () => {
  void blogsDataCache;
};

export const blogsDataCache = cache(async () => {
  const { data } = await apolloClient.query({
    query: GET_BLOG_POSTS,
  });

  return data?.blogPosts?.data;
});
