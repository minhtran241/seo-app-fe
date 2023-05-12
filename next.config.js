/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'default',
    domains: ['localhost', '188.166.209.113', 'flagcdn.com', 'cms.pama.com.vn'],
  },
  // i18n: {
  //   defaultLocale: 'de',
  //   locales: ['de', 'en'],
  // },
};

module.exports = nextConfig;
