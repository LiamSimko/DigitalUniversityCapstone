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
      <Header />

      {showModal && (
        <AddBookModal closeModal={() => toggleModal()}></AddBookModal>
      )}
      <Section background={"#dfdfdf"}>
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
                  href={{
                    pathname: `/book-details/${book.id}`,
                    query: { keyword: "book" },
                  }}
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
