import SingleBlog from '@/components/Blog/SingleBlog';
import blogData from '@/components/Blog/blogData';
import Breadcrumb from '@/components/Common/Breadcrumb';
import apolloClient from '../api/apollo-client';
import { GET_CATEGORIES_PRODUCTS } from '../api/graphql/queries';
import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '../api/urlBuilder';
import SectionTitle from '@/components/Common/SectionTitle';

const getCategoriesProducts = async () => {
  const { data } = await apolloClient().query({
    query: GET_CATEGORIES_PRODUCTS,
  });
  return data?.categories?.data;
};

const Blog = async () => {
  const categories = await getCategoriesProducts();
  return (
    <section className="py-16 md:py-20 lg:py-28">
      {categories.map((category, i) => {
        return (
          <div className="container" key={i}>
            <SectionTitle
              title={category?.attributes?.name}
              paragraph={category?.attributes?.description}
            />

            <section className="pb-8 md:pb-10 lg:pb-14">
              <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                  {category.attributes?.products?.data?.map((product, i) => (
                    <div
                      key={i}
                      className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                    >
                      <div
                        className="wow fadeInUp relative overflow-hidden rounded-md border border-primary bg-white shadow-one dark:bg-dark"
                        data-wow-delay=".1s"
                      >
                        <Link
                          href={`/product/${product?.attributes?.slug}`}
                          className="relative block h-[220px] w-full rounded-md"
                        >
                          <Image
                            src={getStrapiMedia(product?.attributes?.thumbnail)}
                            alt="image"
                            fill
                          />
                        </Link>
                        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                          <p>
                            <Link
                              href={`/product/${product?.attributes?.slug}`}
                              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                            >
                              {product?.attributes?.name}
                            </Link>
                          </p>
                          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-body-color dark:border-white dark:border-opacity-10">
                            {product?.attributes?.description}
                          </p>
                          <div className="flex items-center">
                            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                              <div className="w-full">
                                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                  {category?.attributes?.name}
                                </h4>
                              </div>
                            </div>
                            <div className="inline-block">
                              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                Published Product
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Blog;
