import { apolloClient } from '@/app/[lng]/api/apollo-client';
import {
  GET_CATEGORIES_PRODUCTS,
  GET_HEADER,
} from '@/app/[lng]/api/graphql/queries';
import { languages } from '@/app/i18n/settings';
import { cache } from 'react';
// import 'server-only';

export const preload = (lng: string) => {
  void getCategoriesCache(lng);
  void getHeaderDataCache(lng);
};

export const getCategoriesCache = cache(async (lng: any) => {
  const { data } = await apolloClient.query({
    query: GET_CATEGORIES_PRODUCTS,
    variables: { locale: lng },
  });
  return data?.categories?.data;
});

export const getHeaderDataCache = cache(async (lng: any) => {
  const { data } = await apolloClient.query({
    query: GET_HEADER,
    variables: { locale: lng },
  });

  return data?.header?.data?.attributes;
});

export const getCurrentPath = (pathname: string): string => {
  let currentPath: string;
  languages.forEach((loc) => {
    if (pathname.startsWith(`/${loc}`)) {
      currentPath = pathname.replace(`/${loc}`, '');
    }
  });
  return currentPath;
};

export const countryCode = { vi: 'vn', en: 'us' };
