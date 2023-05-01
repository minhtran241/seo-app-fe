import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import { menuData, getProducts } from './menuData';
import apolloClient from '@/app/api/apollo-client';
import { GET_CATEGORIES_PRODUCTS, GET_HEADER } from '@/app/api/graphql/queries';
import { getStrapiMedia } from '@/app/api/urlBuilder';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [headerAttributes, setHeaderAttributes] = useState();
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    apolloClient()
      .query({
        query: GET_CATEGORIES_PRODUCTS,
      })
      .then((data) => {
        setCategories(data?.data?.categories?.data);
      });
    apolloClient()
      .query({
        query: GET_HEADER,
      })
      .then((data) =>
        setHeaderAttributes(data?.data?.header?.data?.attributes)
      );
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  console.log(headerAttributes);

  if (headerAttributes) {
    return (
      <>
        <header
          className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
            sticky
              ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-opacity-20'
              : 'absolute'
          }`}
        >
          <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-60 max-w-full px-4 xl:mr-12">
                <Link
                  href="/"
                  className={`header-logo block w-full ${
                    sticky ? 'py-5 lg:py-2' : 'py-8'
                  } `}
                >
                  <Image
                    src={getStrapiMedia(headerAttributes?.logo)}
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-full"
                  />
                  {/* <Image
										src="/images/logo/logo.svg"
										alt="logo"
										width={140}
										height={30}
										className="hidden w-full dark:block"
									/> */}
                </Link>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? ' top-[7px] rotate-45' : ' '
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? 'opacity-0 ' : ' '
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                      }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                      navbarOpen
                        ? 'visibility top-full opacity-100'
                        : 'invisible top-[120%] opacity-0'
                    }`}
                  >
                    <ul className="block lg:flex lg:space-x-12">
                      {headerAttributes?.navs.map((nav, index) => (
                        <li key={index} className="group relative">
                          {nav.path ? (
                            <Link
                              href={nav.path}
                              className={`text- flex py-2 text-base group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {nav.name}
                            </Link>
                          ) : (
                            <div
                              className={`text- flex py-2 text-base dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {nav.name}
                            </div>
                          )}
                        </li>
                      ))}
                      <li
                        key={headerAttributes?.navs?.length}
                        className="group relative"
                      >
                        <>
                          <a
                            onClick={() =>
                              handleSubmenu(headerAttributes?.navs?.length)
                            }
                            className="flex cursor-pointer items-center justify-between py-2 text-base group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                          >
                            Product
                            <span className="pl-3">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                          <div
                            style={{
                              backgroundColor: '#fff',
                              color: '#000',
                            }}
                            className={`submenu relative top-full left-0 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:grid lg:w-[750px] lg:grid-cols-${
                              categories.length
                            } lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === headerAttributes?.navs?.length
                                ? 'block'
                                : 'hidden'
                            }`}
                          >
                            {headerAttributes?.categories &&
                              headerAttributes?.categories?.data?.map(
                                (category, i) => (
                                  <div className="flex flex-col" key={i}>
                                    <div className="flex items-center rounded py-2.5 text-sm font-bold text-primary lg:px-3">
                                      {category?.attributes?.name}
                                    </div>
                                    {category?.attributes?.products?.data &&
                                      category?.attributes?.products?.data?.map(
                                        (product, i) => (
                                          <Link
                                            href={`/product/${product?.attributes?.slug}`}
                                            key={i}
                                            className="flex items-center rounded py-2.5 text-sm text-black hover:opacity-70 dark:text-white lg:px-3"
                                          >
                                            {product?.attributes?.name}
                                          </Link>
                                        )
                                      )}
                                  </div>
                                )
                              )}
                          </div>
                        </>
                      </li>
                      <li
                        key={headerAttributes?.navs?.length + 1}
                        className="group relative"
                      >
                        <>
                          <a
                            onClick={() =>
                              handleSubmenu(headerAttributes?.navs?.length + 1)
                            }
                            className="flex cursor-pointer items-center justify-between py-2 text-base group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                          >
                            Solution
                            <span className="pl-3">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                          <div
                            style={{
                              backgroundColor: '#fff',
                              color: '#000',
                            }}
                            className={`submenu relative top-full left-0 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:grid lg:w-[750px] lg:grid-cols-${
                              categories.length
                            } lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === headerAttributes?.navs?.length + 1
                                ? 'block'
                                : 'hidden'
                            }`}
                          >
                            {headerAttributes?.categories &&
                              headerAttributes?.categories?.data?.map(
                                (category, i) => (
                                  <div className="flex flex-col" key={i}>
                                    <div className="flex items-center rounded py-2.5 text-sm font-bold text-primary lg:px-3">
                                      {category?.attributes?.name}
                                    </div>
                                    {category?.attributes?.solutions?.data &&
                                      category?.attributes?.solutions?.data?.map(
                                        (solution, i) => (
                                          <Link
                                            href={`/solution/${solution?.attributes?.slug}`}
                                            key={i}
                                            className="flex items-center rounded py-2.5 text-sm text-black hover:opacity-70 dark:text-white lg:px-3"
                                          >
                                            {solution?.attributes?.name}
                                          </Link>
                                        )
                                      )}
                                  </div>
                                )
                              )}
                          </div>
                        </>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center justify-end pr-16 lg:pr-0">
                  <Link
                    href="/signup"
                    className="ease-in-up hidden bg-white py-2 px-5 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    Get Started
                  </Link>
                  <div>
                    <ThemeToggler />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
};

export default Header;
