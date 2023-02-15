import { useEffect, useState } from "react";
import { useGetBook } from "../../api/books";
import {
  Breadcrumb,
  Flex,
  Section,
  Text,
  Grid,
} from "../../components";

const BookDetails = ({ bookId, breadCrumbPath, breadCrumbName }) => {
  const { book, bookLoading, bookError } = useGetBook(bookId);
  const [displayDescription, setDisplayDescription] = useState(false);
  useEffect(() => {
    if (bookError || bookLoading || !book) {
      setDisplayDescription(false);
    } else {
      setDisplayDescription(true);
    }
  }, [book, bookError, bookLoading]);
  return (
    <>
      {displayDescription && (
        <Section>
          <Breadcrumb
            links={[
              { href: `${breadCrumbPath}`, name: `${breadCrumbName}` },
              { name: `${book.title} Details` },
            ]}
          />
          <Grid gridTemplate={"auto/ .75fr 2fr .75fr"}>
            <Flex>{/* Filler */}</Flex>
            <Flex
              direction={"column"}
              justify={"flex-start"}
              gap={"1em"}
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
    </>
  );
};

export async function getServerSideProps(context) {
  const bookId = context.params.book;
  const { breadCrumbPath, breadCrumbName } = context.query;

  return {
    props: {
      breadCrumbPath,
      breadCrumbName,
      bookId,
    },
  };
}

export default BookDetails;
