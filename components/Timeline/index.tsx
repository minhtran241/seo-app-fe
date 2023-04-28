import { getStrapiMedia } from '@/app/api/urlBuilder';
import Image from 'next/image';
import parse from 'html-react-parser';

const Timeline = ({ data }) => {
  const { History: milestones, historyImage } = data;
  return (
    <>
      <section className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="h-full w-full px-4 pb-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto max-w-[500px] rounded-md border lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={getStrapiMedia(historyImage)}
                  alt="Timeline Image"
                  width={500}
                  height={1000}
                  className="rounded-md border !border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <ol className="border-l-2 border-body-color">
                  {milestones?.map((milestone, i) => (
                    <li key={i}>
                      <div className="flex-start md:flex">
                        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mb-7 ml-6 block max-w-md rounded-lg bg-white p-6 shadow-md shadow-black/5 dark:bg-black dark:shadow-dark/10">
                          <div className="mb-2 flex justify-between">
                            <p className="text-xl font-medium text-primary">
                              {milestone.name}
                            </p>
                          </div>
                          <div className="sm:text-md font-medium text-body-color sm:text-sm">
                            {parse(milestone.description)}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
