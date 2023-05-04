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
                className="wow fadeInUp relative mx-auto max-w-[500px] border lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={getStrapiMedia(historyImage)}
                  alt="Timeline Image"
                  width={500}
                  height={1000}
                  className="border !border-primary"
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
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                          </svg>
                        </div>
                        <div className="mb-7 ml-6 block max-w-md rounded-lg bg-white p-6 shadow-md shadow-black/5 dark:bg-black dark:shadow-dark/10">
                          <div className="mb-2 flex justify-between">
                            <p className="text-xl font-medium text-primary">
                              {milestone.name}
                            </p>
                          </div>
                          <div className="sm:text-md font-medium text-black dark:text-white sm:text-sm">
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
