import { FaPaperPlane } from 'react-icons/fa';
import parse from 'html-react-parser';
import Map from './Map';
import { ContactProps } from '@/types/contact';
import ContactForm from './ContactForm';

const Contact = ({ data }: { data: ContactProps }) => {
  return (
    <section id="contact" className="overflow-hidden bg-white dark:bg-gray-800">
      <div className="">
        <div className="block bg-white shadow-lg">
          <div className="flex flex-wrap items-center">
            <Map />
            <ContactForm data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
