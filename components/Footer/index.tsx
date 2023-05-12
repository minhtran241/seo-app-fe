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
        <footer
          className="wow fadeInUp relative z-10 bg-primary pt-8 dark:bg-gray-800 md:pt-10 lg:pt-12"
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
                  <p className="mb-4 text-base font-medium leading-relaxed text-white ">
                    {footerAttributes?.text}
                  </p>
                </div>
              </div>

              {footerAttributes?.sections.map(({ name, Navs }, i) => (
                <div
                  className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
                  key={i}
                >
                  <div className="mb-6 lg:mb-8">
                    <h2 className="mb-2 text-lg font-bold text-white">
                      {name}
                    </h2>
                    <ul>
                      {Navs?.map(({ name, path }, i) => (
                        <li key={i}>
                          <a
                            href={path}
                            className="mb-1 inline-block text-sm font-medium text-white hover:text-white/80 dark:hover:text-white/70"
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
          <div className="border-t border-white py-4">
            <div className="container">
              <p className="text-center text-base text-white">
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
