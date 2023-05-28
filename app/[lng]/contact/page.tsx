import Contact from '@/components/Contact';
import { Props } from '@/types/lng';
import { contactPageDataCache, preload } from '@/utils/contact/getContactData';
import { getStrapiMedia } from '../api/urlBuilder';
import Script from 'next/script';

const ContactPage = async ({ params: { lng } }: Props) => {
  preload(lng);
  const { seo, title, details, form, announcement } =
    (await contactPageDataCache(lng)) || {};
  const {
    metaTitle,
    metaDescription,
    metaImage,
    keywords,
    metaViewport,
    metaRobots,
    canonicalURL,
    metaSocial,
  } = seo || {};
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:image"
        content={getStrapiMedia(metaImage)}
        key="og:image"
      />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta name="viewport" content={metaViewport} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="robots" content={metaRobots}></meta>
      {metaSocial?.map((soc) => (
        <>
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:title`}
            content={soc?.title}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:description`}
            content={soc?.description}
          />
          <meta
            name={`${soc?.socialNetwork?.toLowerCase()}:image`}
            content={getStrapiMedia(soc?.image)}
          />
        </>
      ))}
      {/* <Breadcrumb pageName={title} description={description} source={source} /> */}
      <Contact
        data={{
          title: title,
          details: details,
          form: form,
          announcement: announcement,
        }}
      />
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
    </>
  );
};

export default ContactPage;
