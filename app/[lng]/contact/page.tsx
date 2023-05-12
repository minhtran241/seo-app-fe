import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';
import { Props } from '@/types/lng';

const ContactPage = ({ params: { lng } }: Props) => {
  return (
    <>
      <title>PAMA | Contact</title>
      <meta name="description" content="Contact PAMA" />
      <Breadcrumb
        pageName="Contact with Pama"
        description="We provide a free consultation service, if you have any questions or concerns, we will be happy to advise and answer."
        source={null}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
