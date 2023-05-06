import { getHomeData, getHomeBlogs } from '@/app/api/home/data';
import { cache } from 'react';
// import 'server-only';

export const preload = () => {
  void homeDataCache;
  void blogsCache;
};
export const homeDataCache = cache(async () => {
  return await getHomeData();
});

export const blogsCache = cache(async () => {
  return await getHomeBlogs();
});
