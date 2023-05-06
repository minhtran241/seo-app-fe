import { getStrapiMedia } from '@/app/api/urlBuilder';
import Image from 'next/image';
import parse from 'html-react-parser';
import { FaCalendarCheck } from 'react-icons/fa';

const Timeline = ({ data }) => {
  const { History: milestones, historyImage } = data;
  return (
    <>
      <section className="bg-primary/[.03] py-16 dark:bg-primary/10 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {historyImage?.data?.attributes && (
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
            )}
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <ol className="border-l-2 border-body-color">
                  {milestones?.map((milestone, i) => (
                    <li key={i}>
                      <div className="flex-start md:flex">
                        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-white">
                          <FaCalendarCheck />
                        </div>
                        <div className="mb-7 ml-6 block max-w-md rounded-lg bg-white p-6 shadow-md shadow-black/5 dark:bg-primary/10 dark:shadow-dark/10">
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
