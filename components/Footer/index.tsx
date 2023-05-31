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
        <footer className="bg-secondary/60 p-4 dark:bg-gray-800 sm:p-6">
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
                    width={200}
                    height={48}
                  />
                </Link>
                <p className="text-gray-500">{footerAttributes?.text}</p>
              </div>
              <div
                className={`ml-12 grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-1`}
              >
                {footerAttributes?.sections.map(({ name, Navs }, i) => (
                  <div key={i}>
                    <h2 className="text-md mb-2 font-bold uppercase text-black">
                      {name}
                    </h2>
                    <ul className="text-black dark:text-gray-400">
                      {Navs?.map(({ name, path }, i) => (
                        <li className="mb-1" key={i}>
                          <Link
                            href={path}
                            className="text-gray-500 hover:text-primary"
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
              <span className="text-sm text-black dark:text-gray-400 sm:text-center">
                © {new Date().getFullYear()}{' '}
                <a href="/" className="hover:text-primary hover:underline">
                  Pama™
                </a>
                . All Rights Reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <Link
                  href={footerAttributes?.facebookLink || '/'}
                  className="text-black hover:text-primary dark:hover:text-black"
                >
                  <FaFacebookF className="h-4 w-4" />
                </Link>
                <Link
                  href={footerAttributes?.websiteLink || '/'}
                  className="text-black hover:text-primary dark:hover:text-black"
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
