import "../styles/global.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import getConfig from "next/config.js";
import Head from "next/head";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Head>
      <title>DU Capstone</title>
      <meta
        name="description"
        content="Capstone project for Digital University Dev Team"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps}></Component>
  </ApolloProvider>
);

export default App;
