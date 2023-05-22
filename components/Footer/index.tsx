import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import { Footer } from '@/types/footer';
import { Props } from '@/types/lng';
import { getFooterDataCache, preload } from '@/utils/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
        {/* <footer
          classNameName="wow fadeInUp relative z-10 bg-primary pt-8 md:pt-10 lg:pt-12"
          data-wow-delay=".1s"
        >
          <div classNameName="container">
            <div classNameName="-mx-4 flex flex-wrap">
              <div classNameName="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                <div classNameName="mb-2 max-w-[360px] lg:mb-8">
                  <Link href="/" classNameName="mb-4 inline-block">
                    <Image
                      src={getStrapiMedia(footerAttributes?.logo)}
                      alt="logo"
                      classNameName="w-full"
                      width={280}
                      height={30}
                    />
                  </Link>
                  <p classNameName="mb-4 text-base font-medium leading-relaxed text-white ">
                    {footerAttributes?.text}
                  </p>
                </div>
              </div>

              {footerAttributes?.sections.map(({ name, Navs }, i) => (
                <div
                  classNameName="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
                  key={i}
                >
                  <div classNameName="mb-6 lg:mb-8">
                    <h2 classNameName="mb-2 text-lg font-bold text-white">
                      {name}
                    </h2>
                    <ul>
                      {Navs?.map(({ name, path }, i) => (
                        <li key={i}>
                          <a
                            href={path}
                            classNameName="mb-1 inline-block text-sm font-medium text-white hover:text-white/80 dark:hover:text-white/70"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div classNameName="border-t border-white py-4">
            <div classNameName="container">
              <p classNameName="text-center text-base text-white">
                PAMA © 2023. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer> */}
        <footer className="bg-primary p-4 dark:bg-gray-800 sm:p-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
              <div className="mb-6 max-w-[360px] md:mb-0">
                <Link href="/" className="items-center">
                  <Image
                    src={getStrapiMedia(footerAttributes?.logo)}
                    className="mb-3"
                    alt="Pama Logo"
                    width={180}
                    height={20}
                  />
                </Link>
                <p className="text-white">{footerAttributes?.text}</p>
              </div>
              <div
                className={`ml-12 grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-1`}
              >
                {footerAttributes?.sections.map(({ name, Navs }, i) => (
                  <div key={i}>
                    <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                      {name}
                    </h2>
                    <ul className="text-white dark:text-gray-400">
                      {Navs?.map(({ name, path }, i) => (
                        <li className="mb-2" key={i}>
                          <Link href={path} className="hover:underline">
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
                <a href="/app" className="hover:underline">
                  Pama™
                </a>
                . All Rights Reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <Link
                  href={footerAttributes?.facebookLink || '/'}
                  className="text-white hover:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href={footerAttributes?.websiteLink || '/'}
                  className="text-white hover:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
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
