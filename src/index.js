import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { App } from "./App";
import { Provider } from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-leidy-daza-leidydaza.vercel.app/graphql",
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
