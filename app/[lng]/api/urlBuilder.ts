import { marked } from 'marked';

const assetsBaseUrl = process.env.STRAPI_ASSETS_BASE_URL;

const getStrapiURL = (path = '') => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
};

const getStrapiMedia = (media) => {
  const url = media?.data?.attributes?.url;
  const imageUrl = url?.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
};

const richTextReducer = (rawRichtext) => {
  const parsedRichText = marked.parse(rawRichtext);
  return parsedRichText;
};

const imageReducer = (imageField) => {
  const fields = imageField.data.attributes;
  return {
    url: `${assetsBaseUrl}${fields.url}`,
    alt: `${fields.caption}`,
    height: fields.height,
    width: fields.width,
    contentType: fields.mime,
  };
};

export { getStrapiURL, getStrapiMedia, richTextReducer };
