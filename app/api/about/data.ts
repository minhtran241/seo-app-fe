import apolloClient from '../apollo-client';
import { GET_ABOUT_US_PAGE } from '../graphql/queries';

const getAboutData = async () => {
  const data = await apolloClient().query({
    query: GET_ABOUT_US_PAGE,
  });

  return data.data.aboutUs.data.attributes;
};

export { getAboutData };
