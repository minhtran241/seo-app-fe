import Contact from '@/components/Contact';
import { Props } from '@/types/lng';
import { contactPageDataCache, preload } from '@/utils/contact/getContactData';
import Seo from '@/components/Seo';

const ContactPage = async ({ params: { lng } }: Props) => {
  preload(lng);
  const { seo, title, details, form, announcement } =
    (await contactPageDataCache(lng)) || {};
  return (
    <>
      <Seo data={seo || {}} />
      {/* <Breadcrumb pageName={title} description={description} source={source} /> */}
      <Contact
        data={{
          title: title,
          details: details,
          form: form,
          announcement: announcement,
        }}
      />
    </>
  );
};

export default ContactPage;
