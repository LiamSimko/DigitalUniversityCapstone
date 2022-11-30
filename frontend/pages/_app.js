import "../styles/global.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import getConfig from "next/config.js";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();
const client = new ApolloClient({
  link: createUploadLink({
    uri: apiUrl,
  }),
  cache: new InMemoryCache({ addTypename: false }),
});

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps}></Component>
  </ApolloProvider>
);

export default App;
