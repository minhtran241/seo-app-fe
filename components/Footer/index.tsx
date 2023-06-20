import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import { Footer } from '@/types/footer';
import { Props } from '@/types/lng';
import { getFooterDataCache, preload } from '@/utils/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaGlobe } from 'react-icons/fa';

const Footer = ({ params: { lng } }: Props) => {
  const [footerAttributes, setFooterAttributes] = useState<Footer>();
  useEffect(() => {
    preload(lng);
    getFooterDataCache(lng).then((data) => {
      setFooterAttributes(data);
    });
  }, [lng]);
  if (footerAttributes) {
    return (
      <>
        <footer className="bg-primary p-4 dark:bg-gray-800 sm:p-6">
          <div className="container mx-auto">
            <div className="md:flex md:justify-between">
              <div className="mb-6 max-w-[360px] md:mb-0">
                <Link href="/" className="items-center">
                  <Image
                    src={getStrapiMedia(footerAttributes?.logo)}
                    className="mb-3"
                    alt={
                      footerAttributes?.logo?.data?.attributes
                        ?.alternativeText || 'Pama Logo'
                    }
                    width={110}
                    height={20}
                  />
                </Link>
                <p className="text-justify text-white">
                  {footerAttributes?.text}
                </p>
              </div>
              <div
                className={`ml-12 grid grid-cols-3 gap-2 space-x-4 sm:grid-cols-3 sm:gap-1`}
              >
                {footerAttributes?.sections.map(({ name, Navs }, i) => (
                  <div key={i}>
                    <h2 className="text-md mb-1 font-bold text-white">
                      {name}
                    </h2>
                    <span className="mb-3 inline-block w-10 border-t border-solid border-white"></span>
                    <ul className="text-white/90 dark:text-gray-400">
                      {Navs?.map(({ name, path }, i) => (
                        <li className="mb-1" key={i}>
                          <Link
                            href={path}
                            className="text-white/90 hover:text-white hover:underline"
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-white dark:text-gray-400 sm:text-center">
                © {new Date().getFullYear()}{' '}
                <a
                  href="/"
                  className="font-semibold hover:text-white hover:underline"
                >
                  Pama™.
                </a>
                {lng === 'en' && ' All rights reserved.'}
                {lng === 'vi' && ' Đã đăng ký Bản quyền.'}
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <Link
                  href={footerAttributes?.facebookLink || '/'}
                  className="text-white/90 hover:text-white dark:hover:text-white"
                >
                  <FaFacebookF className="h-4 w-4" />
                </Link>
                <Link
                  href={footerAttributes?.websiteLink || '/'}
                  className="text-white/90 hover:text-white dark:hover:text-white"
                >
                  <FaGlobe className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default Footer;
