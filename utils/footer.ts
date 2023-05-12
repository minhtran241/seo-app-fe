import { apolloClient } from '@/app/[lng]/api/apollo-client';
import { GET_FOOTER } from '@/app/[lng]/api/graphql/queries';
import { cache } from 'react';

export const preload = (lng: string) => {
  void getFooterDataCache(lng);
};

export const getFooterDataCache = cache(async (lng: any) => {
  const { data } = await apolloClient.query({
    query: GET_FOOTER,
    variables: { locale: lng },
  });
  return data?.footer?.data?.attributes;
});
