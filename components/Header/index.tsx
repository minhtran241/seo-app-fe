import Image from 'next/image';
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
import { getStrapiMedia } from '@/app/api/urlBuilder';
import { Dropdown, Navbar } from 'flowbite-react';
import { getHeaderDataCache, preload } from '@/utils/header';
import { useEffect, useState } from 'react';
import { Header } from '@/types/header';

const Header = () => {
  const [headerAttributes, setHeaderAttributes] = useState<Header>();
  useEffect(() => {
    preload();
    getHeaderDataCache().then((data) => {
      setHeaderAttributes(data);
    });
  }, []);
  if (headerAttributes) {
    return (
      <Navbar rounded={false} className=" bg-white dark:bg-black">
        <Navbar.Brand to="">
          <Image
            src={getStrapiMedia(headerAttributes?.logo)}
            alt="logo"
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
            className="flex w-full items-center justify-between bg-white pl-3 pr-4 font-medium text-gray-900 dark:bg-black dark:text-white dark:hover:text-blue-500 md:w-auto md:border-0 md:p-0 md:hover:text-blue-600 md:dark:hover:text-blue-500"
            arrowIcon={true}
            label="Products / Solutions"
            inline={true}
          >
            <Dropdown.Item
              id="mega-menu-full-cta-dropdown"
              className=" border-gray-200 bg-white shadow-sm dark:bg-black"
              title="Products"
            >
              <div className="mx-auto grid max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-4 ">
                {headerAttributes?.categories &&
                  headerAttributes?.categories?.data?.map((category, i) => (
                    <div key={i} className="px-2">
                      <div className="items-center pb-2 text-sm font-bold text-primary">
                        {category?.attributes?.name}
                      </div>
                      <ul
                        className="space-y-4 sm:mb-4 md:mb-0"
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
                  ))}
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              id="mega-menu-full-cta-dropdown"
              className=" border-gray-200 bg-white shadow-sm  dark:bg-black"
              title="Solutions"
            >
              <div className="mx-auto grid max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-4">
                {headerAttributes?.categories &&
                  headerAttributes?.categories?.data?.map((category, i) => (
                    <div key={i} className="px-2">
                      <div className="items-center pb-2 text-sm font-bold text-primary">
                        {category?.attributes?.name}
                      </div>
                      <ul
                        className="space-y-4 sm:mb-4 md:mb-0"
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
                  ))}
              </div>
            </Dropdown.Item>
          </Dropdown>

          {headerAttributes?.navs?.map((nav, i) => (
            <Navbar.Link key={i} href={nav.path}>
              {nav.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
        <div className="p-4 sm:p-4 md:p-0 lg:p-0">
          <ThemeToggler />
        </div>
      </Navbar>
    );
  }
};

export default Header;
