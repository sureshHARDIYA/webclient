import Cookie from "js-cookie";
import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(process.env.GRAHPQL_URL, {
  headers: {
    authorization: `Bearer ${Cookie.get("access_token")}`
  }
});

export default (query, variables = {}) =>
  graphQLClient.request(query, variables);
