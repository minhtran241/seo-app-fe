import { apolloClient } from '@/app/api/apollo-client';
import { GET_CATEGORIES_PRODUCTS, GET_HEADER } from '@/app/api/graphql/queries';

import { cache } from 'react';
// import 'server-only';

export const preload = () => {
  void getCategoriesCache;
  void getHeaderDataCache;
};

export const getCategoriesCache = cache(async () => {
  const { data } = await apolloClient.query({
    query: GET_CATEGORIES_PRODUCTS,
  });
  return data?.categories?.data;
});

export const getHeaderDataCache = cache(async () => {
  const { data } = await apolloClient.query({
    query: GET_HEADER,
  });

  return data?.header?.data?.attributes;
});
