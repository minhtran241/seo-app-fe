import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact with Pama"
        description="We provide a free consultation service, if you have any questions or concerns, we will be happy to advise and answer."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
