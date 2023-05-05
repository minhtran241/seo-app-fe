import { apolloClient } from '@/app/api/apollo-client';
import { GET_FOOTER } from '@/app/api/graphql/queries';
import { getStrapiMedia } from '@/app/api/urlBuilder';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [footerAttributes, setFooterAttributes] = useState();
  useEffect(() => {
    apolloClient
      .query({
        query: GET_FOOTER,
      })
      .then(({ data }) => {
        setFooterAttributes(data?.footer?.data?.attributes);
      });
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
                </div>
              </div>

              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-6 lg:mb-8">
                  <h2 className="mb-2 text-lg font-bold text-white dark:text-black">
                    Useful Links
                  </h2>
                  <ul>
                    {footerAttributes?.links?.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link?.path}
                          className="mb-1 inline-block text-sm font-medium text-white hover:text-white/70 dark:text-black dark:hover:text-black/70"
                        >
                          {link?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-6 lg:mb-8">
                  <h2 className="mb-2 text-lg font-bold text-white dark:text-black">
                    Terms & Conditions
                  </h2>
                  <ul>
                    {footerAttributes?.terms?.map((term, i) => (
                      <li key={i}>
                        <a
                          href={term?.path}
                          className="mb-1 inline-block text-sm font-medium text-white hover:text-white/70 dark:text-black dark:hover:text-black/70"
                        >
                          {term?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                <div className="mb-6 lg:mb-8">
                  <h2 className="mb-2 text-lg font-bold text-white dark:text-black">
                    Contact & Support
                  </h2>
                  <ul>
                    {footerAttributes?.support?.map((support, i) => (
                      <li key={i}>
                        <a
                          href={support?.path}
                          className="mb-1 inline-block text-sm font-medium text-white hover:text-white/70 dark:text-black dark:hover:text-black/70"
                        >
                          {support?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
