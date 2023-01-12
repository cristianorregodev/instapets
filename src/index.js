import React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { App } from "./App";
import { Provider } from "./Context";

const httpLink = createHttpLink({
  uri: "https://petgram-server-leidy-daza-leidydaza.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(
      ({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        ),
      window.sessionStorage.removeItem("token"),
      (window.location.href = "/user")
    );
  if (networkError)
    console.log(`[Network error]: ${networkError}`),
      window.sessionStorage.removeItem("token"),
      (window.location.href = "/user");
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
