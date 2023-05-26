/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'default',
    domains: [
      'localhost',
      '188.166.209.113',
      'flagcdn.com',
      process.env.STRAPI_IMAGES_DOMAIN,
    ],
  },
  // i18n: {
  //   defaultLocale: 'de',
  //   locales: ['de', 'en'],
  // },
};

module.exports = nextConfig;
