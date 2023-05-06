import { getAboutData } from '@/app/api/about/data';
import { cache } from 'react';
// import 'server-only';

export const preload = () => {
  void aboutDataCache;
};
export const aboutDataCache = cache(async () => {
  return await getAboutData();
});
