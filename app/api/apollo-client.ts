import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getStrapiURL } from './urlBuilder';

export const apolloClient = new ApolloClient({
  uri: getStrapiURL('/graphql'),
  cache: new InMemoryCache(),
});
