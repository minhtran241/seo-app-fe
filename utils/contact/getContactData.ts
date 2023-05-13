import { apolloClient } from '@/app/[lng]/api/apollo-client';
import { GET_CONTACT_PAGE } from '@/app/[lng]/api/graphql/queries';
import { cache } from 'react';

export const preload = (lng: string) => {
  void contactPageDataCache(lng);
};

export const contactPageDataCache = cache(async (lng: string) => {
  const { data } = await apolloClient.query({
    query: GET_CONTACT_PAGE,
    variables: { locale: lng },
  });
  return data?.contact?.data?.attributes;
});
