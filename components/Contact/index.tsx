import Map from './Map';
import { ContactProps } from '@/types/contact';
import ContactSection from './ContactSection';

const Contact = ({ data }: { data: ContactProps }) => {
  return (
    <section id="contact" className="overflow-hidden bg-white dark:bg-gray-800">
      <div className="">
        <div className="block bg-white shadow-lg">
          <div className="flex flex-wrap items-center">
            <Map />
            <ContactSection data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
