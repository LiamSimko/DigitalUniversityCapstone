import Head from "next/head";
import { Section, Header, Text, Footer } from "../components";

const Home = () => {
  return (
    <>
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

      <Header></Header>
      <Section>
        <Text fontSize={"3em"}>Hello World!</Text>
      </Section>
      <Footer></Footer>
    </>
  );
};

export default Home;
