import { useQuery, useMutation } from "@apollo/client";
import {
  useAddBook,
  useGetBook,
  useGetBooks,
  useRemoveBook,
} from "../../api/books";

jest.mock("@apollo/client");

describe("Books tests", () => {
  describe("useGetBook", () => {
    it("should return data", () => {
      const data = {
        getBook: {
          id: "0",
          title: "test1",
          coverImage: null,
          author: {
            id: "1",
            firstName: "AuthorFNb",
            lastName: "AuthorLNb",
            __typename: "Author",
          },
          description: "test book number 1",
          __typename: "Book",
        },
      };

      useQuery.mockReturnValue({ loading: false, error: null, data });
      const { book, bookError, bookLoading } = useGetBook();
      expect(book).toEqual(data.getBook);
      expect(bookError).toEqual(null);
      expect(bookLoading).toEqual(false);
    });

    it("should return null", () => {
      useQuery.mockReturnValue({ loading: false, error: null, data: null });
      const { book, bookError, bookLoading } = useGetBook();
      expect(book).toEqual({});
      expect(bookError).toEqual(null);
      expect(bookLoading).toEqual(false);
    });
  });
  describe("useGetBooks", () => {
    it("should return data", () => {
      const data = {
        getBooks: [
          {
            id: "0",
            title: "test1",
            coverImage: null,
            author: {
              id: "1",
              firstName: "AuthorFNb",
              lastName: "AuthorLNb",
              __typename: "Author",
            },
            description: "test book number 1",
            __typename: "Book",
          },
          {
            id: "1",
            title: "test2",
            coverImage: null,
            author: {
              id: "2",
              firstName: "AuthorFNc",
              lastName: "AuthorLNc",
              __typename: "Author",
            },
            description: "test book number 2",
            __typename: "Book",
          },
        ],
      };

      useQuery.mockReturnValue({
        loading: false,
        error: null,
        data,
        refetch: jest.fn(),
      });
      const { books, booksError, booksLoading } = useGetBooks();
      expect(books).toEqual(data.getBooks);
      expect(booksError).toEqual(null);
      expect(booksLoading).toEqual(false);
    });

    it("should return null", () => {
      useQuery.mockReturnValue({
        loading: false,
        error: null,
        data: null,
        refetch: jest.fn(),
      });
      const { books, booksError, booksLoading } = useGetBooks();
      expect(books).toEqual([]);
      expect(booksError).toEqual(null);
      expect(booksLoading).toEqual(false);
    });
  });
  describe("useAddBook", () => {
    it("should return data", () => {
      const data = {
        addBook: {
          id: "4",
          title: "test5",
          coverImage: null,
          author: {
            id: "1",
            firstName: "AuthorFNb",
            lastName: "AuthorLNb",
            __typename: "Author",
          },
          description: "test book number 5",
          __typename: "Book",
        },
      };

      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data },
      ]);
      const { addBookData, addBookError, addBookLoading, addBook } =
        useAddBook();
      expect(addBookData).toEqual(data);
      expect(addBookError).toEqual(null);
      expect(addBookLoading).toEqual(false);
      expect(addBook.constructor.name).toBe("Function");
    });

    it("should return null", () => {
      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data: null },
      ]);
      const { addBookData, addBookError, addBookLoading, addBook } =
        useAddBook();

      expect(addBookData).toEqual(null);
      expect(addBookError).toEqual(null);
      expect(addBookLoading).toEqual(false);
      expect(addBook.constructor.name).toBe("Function");
    });
  });
  describe("useRemoveBook", () => {
    it("should return data", () => {
      const data = {
        removeBook: {
          id: "test",
        },
      };

      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data },
      ]);
      const { removeBookData, removeBookError, removeBookLoading, removeBook } =
        useRemoveBook();

      expect(removeBookData).toEqual(data);
      expect(removeBookError).toEqual(null);
      expect(removeBookLoading).toEqual(false);
      expect(removeBook.constructor.name).toBe("Function");
    });

    it("should return null", () => {
      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data: null },
      ]);
      const { removeBookData, removeBookError, removeBookLoading, removeBook } =
        useRemoveBook();

      expect(removeBookData).toEqual(null);
      expect(removeBookError).toEqual(null);
      expect(removeBookLoading).toEqual(false);
      expect(removeBook.constructor.name).toBe("Function");
    });
  });
});
