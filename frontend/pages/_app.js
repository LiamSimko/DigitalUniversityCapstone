import "../styles/global.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import getConfig from "next/config.js";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps}></Component>
  </ApolloProvider>
);

export default App;
