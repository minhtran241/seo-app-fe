const SectionTitle = ({
  title,
  paragraph,
  width = '750px',
  center,
  mb = '70px',
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
        <h2 className="mb-2 text-lg font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[30px]">
          {title}
        </h2>
        {paragraph && (
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
