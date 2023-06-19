import Image from 'next/image';
import Link from 'next/link';
// import ThemeToggler from './ThemeToggler';
import { Dropdown, Navbar } from 'flowbite-react';
import { getCurrentPath, getHeaderDataCache, preload } from '@/utils/header';
import { useEffect, useState } from 'react';
import { Header } from '@/types/header';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import { usePathname } from 'next/navigation';
import { Props } from '@/types/lng';
import LocaleSwitcher from '../LocaleSwitch';

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
        className="wow fadeInUp z-10 !bg-primary text-white dark:bg-gray-900"
      >
        <Navbar.Brand href="/">
          <Image
            src={getStrapiMedia(headerAttributes?.logo)}
            alt={
              headerAttributes?.logo?.data?.attributes?.alternativeText ||
              'Pama Logo'
            }
            width={140}
            height={20}
            className="w-full"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-white">
          <Dropdown
            id="mega-menu-full-cta-dropdown-button"
            data-collapse-toggle="mega-menu-full-cta-dropdown"
            data-dropdown-placement="bottom"
            className="!text-white"
            arrowIcon={true}
            label={headerAttributes?.groupedByCategory?.title?.toUpperCase()}
            inline={true}
          >
            <Dropdown.Item
              id="mega-menu-full-cta-dropdown"
              className="border-b border-gray-200 bg-white shadow-sm dark:bg-gray-900"
              title="Products / Sản phẩm"
            >
              <div className="mx-0 grid max-w-screen-xl px-4 text-gray-700 dark:text-white md:grid-cols-4 md:px-6">
                {headerAttributes?.groupedByCategory?.categories &&
                  headerAttributes?.groupedByCategory?.categories?.data?.map(
                    (category, i) => (
                      <div key={i} className="px-2 pb-3">
                        <div className="items-center pb-2 font-semibold uppercase text-primary-title-dark dark:text-secondary">
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
                                    className="font-medium hover:text-primary hover:underline dark:hover:text-blue-500"
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
              <div className="mx-0 grid max-w-screen-xl px-4 text-gray-700 dark:text-white md:grid-cols-4 md:px-6">
                {headerAttributes?.groupedByCategory?.categories &&
                  headerAttributes?.groupedByCategory?.categories?.data?.map(
                    (category, i) => (
                      <div key={i} className="px-2 pb-3">
                        <div className="items-center py-2 font-semibold uppercase text-primary-title-dark dark:text-secondary">
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
                                    className="font-medium hover:text-primary hover:underline dark:hover:text-blue-500"
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
            return nav.path === currentPath ? (
              <Link
                key={i}
                href={`/${lng}${nav.path}`}
                className="uppercase text-white underline"
              >
                {nav.name}
              </Link>
            ) : (
              <Link
                key={i}
                href={`/${lng}${nav.path}`}
                className="uppercase text-white hover:underline"
              >
                {nav.name}
              </Link>
            );
          })}
        </Navbar.Collapse>
        {/* <div className="border-l border-gray-400"> */}
        <LocaleSwitcher lng={lng} currentPath={currentPath} />
        {/* </div> */}
        {/* <ThemeToggler /> */}
      </Navbar>
    );
  }
};

export default Header;
