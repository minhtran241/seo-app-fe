import { ContactProps } from '@/types/contact';
import { FaPaperPlane } from 'react-icons/fa';
import parse from 'html-react-parser';

const ContactForm = ({ data }: { data: ContactProps }) => {
  const { title, details } = data;
  return (
    <div className="container mt-16 w-full shrink-0 grow-0 basis-auto">
      <section className="mb-16 text-gray-800">
        <div className="flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
            <h2 className="mb-6 text-3xl font-bold text-primary-title-dark">
              {title}
            </h2>
            <div className="mb-6">{parse(details || '')}</div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control m-0
              block
              w-full
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-primary focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="input7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control m-0
													block
													w-full
													border
													border-solid
													border-gray-300
													bg-white bg-clip-padding
													px-3 py-1.5 text-base
													font-normal
													text-gray-700
													transition
													ease-in-out
													focus:border-primary focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="input8"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
              form-control
              m-0
              block
              w-full
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-primary focus:bg-white focus:text-gray-700 focus:outline-none
            "
                  id="formControlTextarea13"
                  rows={3}
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex      
												w-full
												items-center
												justify-center
												bg-primary
												px-6
												py-2.5
												text-white
												shadow-md transition
												duration-150 ease-in-out hover:bg-primary-title-dark hover:shadow-lg
												focus:bg-primary-title-dark focus:shadow-lg
												focus:outline-none
												focus:ring-0
												active:bg-blue-800 active:shadow-lg"
                title="Send message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
