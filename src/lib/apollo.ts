import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4q15t8n30tr01w7gyb82lkf/master",
  cache: new InMemoryCache(),
});
