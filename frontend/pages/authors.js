import React, { useEffect, useState } from "react";
import {
  Section,
  Header,
  Text,
  Footer,
  Flex,
  Grid,
  Book,
  Breadcrumb,
} from "../components";
import { useGetBooks } from "../api/books";
import { useGetAuthors } from "../api/authors";

const Authors = () => {
  const [showModal, setShowModal] = useState(false);
  const { authors, authorsLoading, authorsError } = useGetAuthors();
  const { books, booksLoading, booksError } = useGetBooks();
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />

      <Section background={"#dfdfdf"}>
        <Breadcrumb
          links={[{ href: "/", name: "Home" }, { name: "Authors" }]}
        />
        <Flex direction={"row"} justify={"space-between"}>
          <Text fontWeight={"Bolder"} fontSize={"2.2rem"}>
            Authors
          </Text>
        </Flex>
        {!booksError &&
          !booksLoading &&
          books &&
          !authorsError &&
          !authorsLoading &&
          authors && (
            <Flex
              direction={"column"}
              gap={"1.5em"}
              justify={"flex-start"}
              align={"start"}
            >
              {authors.map((authorGrouping) => {
                if (
                  books.filter((book) => book.author.id === authorGrouping.id)
                    .length > 0
                ) {
                  return (
                    <>
                      <Text fontSize={"2em"} fontWeight={"Bolder"}>
                        {authorGrouping.firstName} {authorGrouping.lastName}:
                      </Text>
                      <Grid gap={"30px"} gridTemplate={"auto/ 1fr 1fr 1fr 1fr"}>
                        {books
                          .filter(
                            (book) => book.author.id === authorGrouping.id
                          )
                          .map((book) => {
                            return (
                              <Book
                                title={book.title}
                                author={`${book.author.firstName} ${book.author.lastName}`}
                                href={`/book-details/${book.id}`}
                                breadCrumbPath={"/authors"}
                                breadCrumbName={"Authors"}
                              />
                            );
                          })}
                      </Grid>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Text fontSize={"2em"} fontWeight={"Bolder"}>
                        {authorGrouping.firstName} {authorGrouping.lastName}:
                      </Text>
                      <Text fontSize={"1.5em"}>No Books Available</Text>
                    </>
                  );
                }
              })}
            </Flex>
          )}
      </Section>
      <Footer></Footer>
    </>
  );
};

export default Authors;
