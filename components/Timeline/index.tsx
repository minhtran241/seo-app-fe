'use client'; // This is a client component 👈🏽
import Image from 'next/image';
import { FaCalendarCheck } from 'react-icons/fa';
import { getStrapiMedia } from '@/app/[lng]/api/urlBuilder';
import SectionTitle from '../Common/SectionTitle';
import { Timeline } from 'flowbite-react';

const Milestones = ({ data }) => {
  const { title, milestones, historyImage } = data || {};
  return (
    <>
      <section className="lg:py-15  bg-white py-5 dark:bg-gray-800 ">
        <div className="container">
          <SectionTitle title={title} paragraph={null} center={true} />
          <div className="-mx-4 flex flex-wrap items-center">
            {historyImage?.data?.attributes && (
              <div className="h-full w-full px-4 pb-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto max-w-[500px] rounded lg:m-0"
                  data-wow-delay=".15s"
                >
                  <Image
                    src={getStrapiMedia(historyImage)}
                    alt={
                      historyImage?.data?.attributes?.alternativeText ||
                      'Timeline Image'
                    }
                    width={500}
                    height={1000}
                    className="rounded"
                  />
                </div>
              </div>
            )}
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                {/* <ol className="border-l-2 border-body-color">
                  {milestones?.map((milestone, i) => (
                    <li key={i}>
                      <div className="flex-start md:flex">
                        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-white">
                          <FaCalendarCheck />
                        </div>
                        <div className="mb-7 ml-6 block max-w-md rounded-lg bg-primary/[.05] p-6 shadow-md shadow-black/5 dark:bg-gray-900 dark:shadow-dark/10">
                          <div className="mb-2 flex justify-between">
                            <p className="text-xl font-bold text-primary-title-dark dark:text-primary-title">
                              {milestone?.name}
                            </p>
                          </div>
                          <div className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                            {parse(milestone?.description)}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol> */}
                <Timeline>
                  {milestones?.map((milestone, i) => (
                    <Timeline.Item key={i}>
                      <Timeline.Point icon={FaCalendarCheck} />
                      <Timeline.Content>
                        <Timeline.Time>
                          <p className="text-gray-600">{milestone?.time}</p>
                        </Timeline.Time>
                        <Timeline.Title className="font-bold text-black">
                          {milestone?.name}
                        </Timeline.Title>
                        <Timeline.Body className="text-gray-700">
                          {milestone?.description}
                        </Timeline.Body>
                      </Timeline.Content>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestones;
