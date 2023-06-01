import { apolloClient } from '@/app/[lng]/api/apollo-client';
import { GET_HEADER } from '@/app/[lng]/api/graphql/queries';
import { languages } from '@/app/i18n/settings';
import { cache } from 'react';
// import 'server-only';

export const preload = (lng: string) => {
  void getHeaderDataCache(lng);
};

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

export const countryCode = { en: 'gb', vi: 'vn' };

export const getFlagEmoji = (countryCode) =>
  String.fromCodePoint(
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );
