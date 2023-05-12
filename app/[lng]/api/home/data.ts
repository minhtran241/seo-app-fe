import { apolloClient } from '../apollo-client';
import { GET_HOME_PAGE } from '../graphql/queries';

const getHomeData = async (lng: any) => {
  const data = await apolloClient.query({
    query: GET_HOME_PAGE,
    variables: { locale: lng },
  });

  return data?.data?.home?.data?.attributes;
};

export { getHomeData };
