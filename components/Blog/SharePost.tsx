import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const SharePost = () => {
  return (
    <>
      <a
        href="#0"
        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-body-color duration-300 hover:bg-opacity-100 hover:text-white sm:ml-3"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="#0"
        className="ml-3 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
      >
        <FaTwitter />
      </a>
      <a
        href="#0"
        className="ml-3 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
      >
        <FaFacebookF/>
      </a>
    </>
  );
};

export default SharePost;
