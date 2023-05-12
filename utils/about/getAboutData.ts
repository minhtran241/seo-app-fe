import { getAboutData } from '@/app/[lng]/api/about/data';
import { cache } from 'react';
// import 'server-only';

export const preload = (lng: string) => {
  void aboutDataCache(lng);
};
export const aboutDataCache = cache(async (lng: string) => {
  return await getAboutData(lng);
});
