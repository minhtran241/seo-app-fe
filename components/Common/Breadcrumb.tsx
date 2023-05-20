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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#023E60] via-[#29ABE2] to-[#355F8E] pt-14 sm:pb-14 lg:pb-0 lg:pt-[50px]">
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
      </section>
    </>
  );
};

export default Breadcrumb;
