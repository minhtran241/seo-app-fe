const SectionTitle = ({
  title,
  paragraph,
  width = '750px',
  center,
  white,
  mb = '30px',
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  white?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`title wow fadeInUp w-full pt-10 ${
          center ? 'mx-auto text-center' : ''
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {white ? (
          <h1 className="title-white text-2xl leading-snug text-white dark:text-primary-title sm:text-xl md:text-[30px] lg:!leading-relaxed">
            {title}
          </h1>
        ) : (
          <h1 className="title-primary text-2xl !leading-relaxed text-primary dark:text-primary-title sm:text-xl md:text-[30px]">
            {title}
          </h1>
        )}
        {paragraph && (
          <p className="text-base !leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
