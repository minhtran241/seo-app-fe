/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'default',
    domains: ['localhost', '188.166.209.113'],
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
