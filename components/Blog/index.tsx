import SectionTitle from '../Common/SectionTitle';
import SingleBlog from './SingleBlog';

const Blog = ({ data }) => {
  const blogData = data;
  return (
    <section id="blog" className="py-16] bg-primary/[.03] md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Pama Blog" paragraph={null} center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map(({ attributes }, i) => (
            <div key={i} className="w-full">
              <SingleBlog blog={attributes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
