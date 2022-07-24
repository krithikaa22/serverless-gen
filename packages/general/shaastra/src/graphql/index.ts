import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: "https://api.events.shaastra.org/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  credentials: "include",
});

export default client;
