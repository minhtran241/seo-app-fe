import { getStrapiMedia } from '@/app/api/urlBuilder';
import { Footer } from '@/types/footer';
import { getFooterDataCache, preload } from '@/utils/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [footerAttributes, setFooterAttributes] = useState<Footer>();
  useEffect(() => {
    if (window.localStorage.getItem('footerAttributes') != null) {
      setFooterAttributes(
        JSON.parse(window.localStorage.getItem('footerAttributes'))
      );
    } else {
      preload();
      getFooterDataCache().then((data) => {
        setFooterAttributes(data);
        window.localStorage.setItem('footerAttributes', JSON.stringify(data));
      });
    }
  }, []);
  if (footerAttributes) {
    return (
      <>
        <footer
          className="wow fadeInUp relative z-10 bg-primary pt-8 md:pt-10 lg:pt-12"
          data-wow-delay=".1s"
        >
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                <div className="mb-2 max-w-[360px] lg:mb-8">
                  <Link href="/" className="mb-4 inline-block">
                    <Image
                      src={getStrapiMedia(footerAttributes?.logo)}
                      alt="logo"
                      className="w-full"
                      width={280}
                      height={30}
                    />
                  </Link>
                  <p className="mb-4 text-base font-medium leading-relaxed text-white dark:text-black">
                    {footerAttributes?.text}
                  </p>
                  <div className="mb-4 flex text-base font-medium leading-relaxed text-white dark:text-black">
                    <Link
                      href={footerAttributes?.facebookLink}
                      target="_blank"
                      className="mr-3 hover:text-white/70 dark:hover:text-black/70"
                    >
                      <FaFacebookSquare />
                    </Link>
                    <Link
                      href={footerAttributes?.gmailLink}
                      target="_blank"
                      className="hover:text-white/70 dark:hover:text-black/70"
                    >
                      <FaEnvelope />
                    </Link>
                  </div>
                </div>
              </div>

              {footerAttributes?.sections.map(({ name, Navs }, i) => (
                <div
                  className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
                  key={i}
                >
                  <div className="mb-6 lg:mb-8">
                    <h2 className="mb-2 text-lg font-bold text-white dark:text-black">
                      {name}
                    </h2>
                    <ul>
                      {Navs?.map(({ name, path }, i) => (
                        <li key={i}>
                          <a
                            href={path}
                            className="mb-1 inline-block text-sm font-medium text-white hover:text-white/70 dark:text-black dark:hover:text-black/70"
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
          <div className="border-t border-white py-4 dark:border-black">
            <div className="container">
              <p className="text-center text-base text-white dark:text-black">
                PAMA © 2023. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default Footer;
