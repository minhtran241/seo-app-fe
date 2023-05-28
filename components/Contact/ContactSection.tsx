import { ContactProps } from '@/types/contact';
import parse from 'html-react-parser';
import ContactForm from './ContactForm';

const ContactSection = ({ data }: { data: ContactProps }) => {
  const { title, details, form, announcement } = data;
  return (
    <div className="container mt-16 w-full shrink-0 grow-0 basis-auto">
      <section className="mb-16 text-gray-800">
        <div className="flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
            <h2 className="mb-6 text-3xl font-bold uppercase text-primary-title-dark">
              {title}
            </h2>
            <div className="mb-6">{parse(details || '')}</div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
            <ContactForm data={{ form: form, announcement: announcement }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
