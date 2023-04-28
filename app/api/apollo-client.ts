import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getStrapiURL } from './urlBuilder';

const apolloClient = () => {
  try {
    const client = new ApolloClient({
      uri: getStrapiURL('/graphql'),
      cache: new InMemoryCache(),
    });
    return client;
  } catch {
    console.log('Error');
  }
};
export default apolloClient;
