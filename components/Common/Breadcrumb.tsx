import Link from 'next/link';

type BreadcrumbProps = {
  title: string;
  description: string;
  pages: any;
};

const Breadcrumb = ({ data }: { data: BreadcrumbProps }) => {
  const { title, description, pages } = data;
  return (
    <>
      <section className="relative overflow-hidden bg-primary/[.03] pt-14 sm:pb-14 lg:pb-0 lg:pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold uppercase text-primary-title-dark sm:text-3xl">
                  {title}
                </h1>
                {description && (
                  <p className="mb-2 text-base font-medium leading-relaxed text-gray-500">
                    {description}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full px-4 pb-5 sm:pb-5 md:w-4/12 lg:w-5/12 lg:pb-0">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  {pages?.slice(0, -1)?.map(({ name, path }, i) => (
                    <li className="flex items-center" key={i}>
                      <Link
                        href={path || '/'}
                        className="pr-1 text-base font-medium text-gray-500 hover:text-primary"
                      >
                        {name.toUpperCase()}
                      </Link>
                      <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-gray-600"></span>
                    </li>
                  ))}
                  <li className="text-base font-medium text-primary">
                    {pages[pages?.length - 1]?.name?.toUpperCase() ||
                      'Current Page'?.toUpperCase()}
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
