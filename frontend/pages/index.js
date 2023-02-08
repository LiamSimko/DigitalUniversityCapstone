import React, { useEffect, useState } from "react";
import {
  Section,
  Text,
  Button,
  Flex,
  Grid,
  Book,
  AddBookModal,
} from "../components";
import { useGetBooks } from "../api/books";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { books, booksLoading, booksError } = useGetBooks();
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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
        {!booksError && !booksLoading && books && (
          <Grid
            gap={"30px"}
            gridTemplate={"auto/ 1fr 1fr 1fr 1fr"}
            margin={"2em 0em 0em"}
          >
            {books.map((book) => {
              return (
                <Book
                  key={book.id}
                  title={book.title}
                  author={`${book.author.firstName} ${book.author.lastName}`}
                  href={`/book-details/${book.id}`}
                  breadCrumbPath={"/"}
                  breadCrumbName={"Home"}
                />
              );
            })}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;
