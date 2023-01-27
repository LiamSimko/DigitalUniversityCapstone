import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  Section,
  Header,
  Text,
  Footer,
  Button,
  Flex,
  Grid,
  Book,
  AddBookModal,
} from "../components";
import { useGetBooks } from "../api/books";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [displayBooks, setDisplayBooks] = useState(false);
  const { books, booksLoading, booksError } = useGetBooks();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (booksError || booksLoading || !books) {
      setDisplayBooks(false);
      console.log(books, booksLoading, booksError);
    } else {
      setDisplayBooks(true);
    }
  }, [books, booksError, booksLoading]);

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

      {showModal && (
        <AddBookModal closeModal={() => toggleModal()}></AddBookModal>
      )}
      <Section>
        <Flex direction={"row"} justify={"space-between"}>
          <Text fontWeight={"Bolder"} fontSize={"2.2rem"}>
            My Library
          </Text>
          <Button onClick={() => toggleModal()}>+ Add Book</Button>
        </Flex>
        {displayBooks && (
          <Grid
            gap={"30px"}
            gridTemplate={"auto/ 1fr 1fr 1fr 1fr"}
            margin={"2em 0em 0em"}
          >
            {books.map((book) => {
              return (
                <Book
                  title={book.title}
                  author={`${book.author.firstName} ${book.author.lastName}`}
                />
              );
            })}
          </Grid>
        )}
      </Section>
      <Footer></Footer>
    </>
  );
};

export default Home;
