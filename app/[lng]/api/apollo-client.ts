import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getStrapiURL } from './urlBuilder';

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: getStrapiURL('/graphql'),
  cache,
});
