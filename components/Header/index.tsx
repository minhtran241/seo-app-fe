import Image from 'next/image';
import Link from 'next/link';
// import ThemeToggler from './ThemeToggler';
import { Dropdown, Navbar } from 'flowbite-react';
import {
  countryCode,
  getCurrentPath,
  getHeaderDataCache,
  preload,
} from '@/utils/header';
import { useEffect, useState } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';
import { Header } from '@/types/header';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import { languages } from '@/app/i18n/settings';
import { usePathname } from 'next/navigation';
import { Props } from '@/types/lng';

const Header = ({ params: { lng } }: Props) => {
  const pathname = usePathname();
  const [headerAttributes, setHeaderAttributes] = useState<Header>();
  const [currentPath, setCurrentPath] = useState<string>('');
  useEffect(() => {
    preload(lng);
    getHeaderDataCache(lng).then((data) => {
      setHeaderAttributes(data);
    });
    setCurrentPath(getCurrentPath(pathname));
  }, [lng, pathname]);
  if (headerAttributes) {
    return (
      <Navbar
        rounded={false}
        className="wow fadeInUp z-10 bg-white dark:bg-gray-900"
      >
        <Navbar.Brand href="/">
          <Image
            src={getStrapiMedia(headerAttributes?.logo)}
            alt={
              headerAttributes?.logo?.data?.attributes?.alternativeText ||
              'Pama Logo'
            }
            width={140}
            height={30}
            className="w-full"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Dropdown
            id="mega-menu-full-cta-dropdown-button"
            data-collapse-toggle="mega-menu-full-cta-dropdown"
            data-dropdown-placement="bottom"
            className="flex w-full items-center justify-between bg-white pl-3 pr-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:text-blue-500 md:w-auto md:border-0 md:p-0 md:hover:text-blue-600 md:dark:hover:text-blue-500"
            arrowIcon={true}
            label={headerAttributes?.groupedByCategory?.title?.toUpperCase()}
            inline={true}
          >
            <Dropdown.Item
              id="mega-menu-full-cta-dropdown"
              className=" border-gray-700 bg-white shadow-sm dark:bg-gray-900"
              title="Products / Sản phẩm"
            >
              <div className="mx-auto grid max-w-screen-xl text-sm text-gray-500 dark:text-white md:grid-cols-4 ">
                {headerAttributes?.groupedByCategory?.categories &&
                  headerAttributes?.groupedByCategory?.categories?.data?.map(
                    (category, i) => (
                      <div key={i} className="px-2 pb-3">
                        <div className="items-center pb-2 text-sm font-bold uppercase text-primary-title-dark dark:text-secondary">
                          {category?.attributes?.name}
                        </div>
                        <ul
                          className="space-y-2 sm:mb-4 md:mb-0"
                          aria-labelledby="mega-menu-full-cta-button"
                          key={i}
                        >
                          {category?.attributes?.products?.data &&
                            category?.attributes?.products?.data?.map(
                              (product, i) => (
                                <li key={i}>
                                  <Link
                                    href={`/product/${product?.attributes?.slug}`}
                                    className="hover:text-blue-600 hover:underline dark:hover:text-blue-500"
                                  >
                                    {product?.attributes?.name}
                                  </Link>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    )
                  )}
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              id="mega-menu-full-cta-dropdown"
              className=" border-gray-700 bg-white shadow-sm dark:bg-gray-900"
              title="Solutions / Giải pháp"
            >
              <div className="mx-auto grid max-w-screen-xl text-sm text-gray-500 dark:text-white md:grid-cols-4">
                {headerAttributes?.groupedByCategory?.categories &&
                  headerAttributes?.groupedByCategory?.categories?.data?.map(
                    (category, i) => (
                      <div key={i} className="px-2 pb-3">
                        <div className="items-center pb-2 text-sm font-bold uppercase text-primary-title-dark dark:text-secondary">
                          {category?.attributes?.name}
                        </div>
                        <ul
                          className="space-y-2 sm:mb-4 md:mb-0"
                          aria-labelledby="mega-menu-full-cta-button"
                          key={i}
                        >
                          {category?.attributes?.solutions?.data &&
                            category?.attributes?.solutions?.data?.map(
                              (solution, i) => (
                                <li key={i}>
                                  <Link
                                    href={`/solution/${solution?.attributes?.slug}`}
                                    className="hover:text-blue-600 hover:underline dark:hover:text-blue-500"
                                  >
                                    {solution?.attributes?.name}
                                  </Link>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    )
                  )}
              </div>
            </Dropdown.Item>
          </Dropdown>

          {headerAttributes?.navs?.map((nav, i) => {
            return currentPath == '' && nav?.path == '/' ? (
              <Navbar.Link
                key={i}
                href={`/${lng}${nav.path}`}
                active={true}
                className="bg-primary uppercase"
              >
                {nav.name}
              </Navbar.Link>
            ) : (
              <Navbar.Link
                key={i}
                href={`/${lng}${nav.path}`}
                active={nav.path === currentPath}
                className="uppercase"
              >
                {nav.name}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
        <div className="flex p-4 sm:p-4 md:p-0 lg:p-0">
          <Trans i18nKey="languageSwitcher" className="pr-2">
            <div className="pr-2">
              <Image
                src={`https://flagcdn.com/${countryCode[lng]}.svg`}
                width="20"
                height="15"
                alt={lng}
                className="border border-primary"
              />
            </div>{' '}
            <div>{}</div>
          </Trans>
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <span key={l}>
                  {index > 0 && ' or '}
                  <Link href={`/${l}/${currentPath}`}>
                    <Image
                      src={`https://flagcdn.com/${countryCode[l]}.svg`}
                      width="20"
                      height="15"
                      alt={l}
                      className=""
                    />
                  </Link>
                </span>
              );
            })}
        </div>
        {/* <ThemeToggler /> */}
      </Navbar>
    );
  }
};

export default Header;
