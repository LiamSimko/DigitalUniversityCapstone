import { useEffect, useState } from "react";
import { useGetBook } from "../../api/books";
import {
  Breadcrumb,
  Flex,
  Footer,
  Header,
  Section,
  Text,
  Grid,
} from "../../components";

const BookDetails = ({ bookId }) => {
  const { book, bookLoading, bookError } = useGetBook(bookId);
  const [displayDescription, setDisplayDescription] = useState(false);
  useEffect(() => {
    if (bookError || bookLoading || !book) {
      setDisplayDescription(false);
      console.log(book, bookLoading, bookError);
    } else {
      setDisplayDescription(true);
    }
  }, [book, bookError, bookLoading]);
  return (
    <>
      <Header />
      {displayDescription && (
        <Section>
          <Breadcrumb
            links={[
              { href: "/", name: "Home" },
              { name: `${book.title} Details` },
            ]}
          />
          <Grid gridTemplate={"auto/ .75fr 2fr .75fr"}>
            <Flex></Flex>
            <Flex
              direction={"column"}
              justify={"flex-start"}
              gap={".5em"}
              align={"start"}
            >
              <Text fontSize={"2em"} fontWeight={"Bolder"}>
                {book.title}
              </Text>
              <Text fontSize={"1.5em"}>
                {book.author.firstName} {book.author.lastName}
              </Text>
              <Text fontSize={"1.5em"} fontWeight={"Bolder"}>
                Description
              </Text>
              <Text fontSize={"1.15em"}>{book.description}</Text>
            </Flex>
          </Grid>
        </Section>
      )}
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const bookId = context.params.book;

  return {
    props: {
      bookId: bookId ?? null,
    },
  };
}

export default BookDetails;
