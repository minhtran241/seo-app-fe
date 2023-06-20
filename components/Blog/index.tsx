import SectionTitle from '../Common/SectionTitle';
import SingleBlog from './SingleBlog';

const Blog = ({ data, lng, isHomePage }) => {
  const { title, blogs } = data || {};
  return (
    <section
      id="blog"
      className={
        isHomePage
          ? 'lg:py-15 bg-white py-5 dark:border-blue-300 dark:bg-gray-900 md:py-5'
          : 'lg:py-15 border-t-4 border-primary bg-secondary py-5 dark:border-blue-300 dark:bg-gray-900 md:py-5'
      }
    >
      <div className="container">
        <SectionTitle title={title} paragraph={null} center />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs?.data?.map(({ attributes }, i) => (
            <div key={i} className="w-full">
              <SingleBlog blog={attributes} lng={lng} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
