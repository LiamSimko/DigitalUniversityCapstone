import "../styles/global.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Header, Footer } from "../components";
import getConfig from "next/config.js";
import Head from "next/head";
import { useEffect } from "react";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const siteWidth = 1280;
    const scale = screen.width / siteWidth;

    document
      .querySelector('meta[name="viewport"]')
      .setAttribute(
        "content",
        "width=" + siteWidth + ", initial-scale=" + scale + ""
      );
  }, []);
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>DU Capstone</title>
        <meta
          name="description"
          content="Capstone project for Digital University Dev Team"
        />
        <meta name="viewport" content="width=1280" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps}></Component>
      <Footer />
    </ApolloProvider>
  );
};

export default App;
