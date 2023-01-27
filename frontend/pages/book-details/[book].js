import { useGetBook } from "../../api/books";
import { Header, Section } from "../../components";

const BookDetails = ({ bookId }) => {
  const { book, bookLoading, bookError } = useGetBook(bookId);

  return (
    <>
      <Header></Header>
      <Section></Section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { bookId } = context.query;

  return {
    props: {
      bookId: bookId ?? null,
    },
  };
}

export default BookDetails;
