const SocialProof = ({ data }: { data: { proofs: any[] } }) => {
  const { proofs } = data || {};
  return (
    <section className=" bg-primary/[.08] dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
        <dl className="mx-auto grid max-w-screen-md gap-8 text-primary dark:text-white sm:grid-cols-3">
          {proofs?.map(({ title, description }, i) => (
            <div className="flex flex-col items-center justify-center" key={i}>
              <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
                {title}
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
export default SocialProof;
