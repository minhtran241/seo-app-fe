import { apolloClient } from '@/app/api/apollo-client';
import { GET_FOOTER } from '@/app/api/graphql/queries';
import { cache } from 'react';

export const preload = () => {
  void getFooterDataCache;
};

export const getFooterDataCache = cache(async () => {
  const { data } = await apolloClient.query({
    query: GET_FOOTER,
  });
  return data?.footer?.data?.attributes;
});
