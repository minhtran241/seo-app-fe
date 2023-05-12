import { getHomeData } from '@/app/[lng]/api/home/data';
import { cache } from 'react';
// import 'server-only';

export const preload = (lng: string) => {
  void homeDataCache(lng);
};
export const homeDataCache = cache(async (lng: string) => {
  return await getHomeData(lng);
});
