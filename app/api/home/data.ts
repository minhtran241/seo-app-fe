import { apolloClient } from '../apollo-client';
import { GET_HOME_BLOGS, GET_HOME_PAGE } from '../graphql/queries';

const getHomeData = async () => {
  const data = await apolloClient.query({
    query: GET_HOME_PAGE,
  });

  return data.data.home.data.attributes;
};

const getHomeBlogs = async () => {
  const data = await apolloClient.query({
    query: GET_HOME_BLOGS,
  });
  return data.data.blogPosts.data;
};

export { getHomeData, getHomeBlogs };
