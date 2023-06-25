import { apolloClient } from '@/app/[lng]/api/apollo-client';
import {
  GET_CASE_STUDY_PAGE,
  GET_CASE_STUDIES,
} from '@/app/[lng]/api/graphql/queries';
import { cache } from 'react';

export const preload = (lng: string) => {
  void caseStudiesDataCache(lng);
  void caseStudyPageDataCache(lng);
};

export const caseStudyPageDataCache = cache(async (lng: string) => {
  const { data } = await apolloClient.query({
    query: GET_CASE_STUDY_PAGE,
    variables: { locale: lng },
  });
  return data?.caseStudyPage?.data?.attributes;
});

export const caseStudiesDataCache = cache(async (lng: string) => {
  const { data } = await apolloClient.query({
    query: GET_CASE_STUDIES,
    variables: { locale: lng },
  });

  return data?.caseStudies?.data;
});
