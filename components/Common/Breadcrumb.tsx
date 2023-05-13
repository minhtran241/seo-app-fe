import Link from 'next/link';
import { FaLink, FaHome } from 'react-icons/fa';

const Breadcrumb = ({
  pageName,
  description = null,
  source = null,
}: {
  pageName: string;
  description: string;
  source: string;
}) => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-14 sm:pb-14 lg:pb-0 lg:pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold uppercase text-white  sm:text-3xl">
                  {pageName}
                </h1>
                {description && (
                  <p className="mb-2 text-base font-medium leading-relaxed text-white ">
                    {description}
                  </p>
                )}
                {source && (
                  <Link
                    className="flex text-base font-medium leading-relaxed text-white underline "
                    href={source}
                  >
                    <FaLink className="h-[25px] w-[25px] pr-2" /> {source}
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full px-4 pb-5 sm:pb-5 md:w-4/12 lg:w-5/12 lg:pb-0">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-white "
                    >
                      <FaHome />
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-white"></span>
                  </li>
                  <li className="text-base font-medium text-white ">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#309FDD" />
                  <stop offset="1" stopColor="#309FDD" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#309FDD" />
                  <stop offset="1" stopColor="#309FDD" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#309FDD" />
                  <stop offset="1" stopColor="#309FDD" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
