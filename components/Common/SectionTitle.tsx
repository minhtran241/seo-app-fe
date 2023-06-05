const SectionTitle = ({
  title,
  paragraph,
  width = '750px',
  center,
  mb = '30px',
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full pt-10 ${
          center ? 'mx-auto text-center' : ''
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="title-font mb-2 text-2xl font-semibold uppercase !leading-6 text-primary dark:text-primary-title sm:text-xl md:text-[30px]">
          {title}
        </h2>
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
