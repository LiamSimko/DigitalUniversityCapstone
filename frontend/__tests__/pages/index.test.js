import { ApolloProvider } from "@apollo/client";
import { createMockClient } from "mock-apollo-client";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Index from "../../pages/index.js";
import { useAddBook, useGetBooks } from "../../api/books";
import { useAddAuthor, useGetAuthors } from "../../api/authors";

jest.mock("../../api/books");

jest.mock("../../api/authors");

describe("Homepage", () => {
  let mockClient;

  beforeEach(() => {
    mockClient = createMockClient();
    useAddAuthor.mockReturnValue({
      addAuthorLoading: false,
      addAuthorError: false,
      addAuthorData: {
        id: "1",
        firstName: "AuthorFN",
        lastName: "AuthorLN",
        __typename: "Author",
      },
    });
    useAddBook.mockReturnValue({
      addBookLoading: false,
      addBookError: false,
      addBook: jest.fn(),
      addBookData: {
        data: {
          addBook: {
            id: "13",
            title: "test",
            coverImage: null,
            author: {
              id: "1",
              firstName: "name",
              lastName: "name",
              __typename: "Author",
            },
            description: "test",
            __typename: "Book",
          },
        },
      },
    });
    useGetBooks.mockReturnValue({
      booksLoading: false,
      booksError: false,
      books: [
        {
          id: "13",
          title: "test",
          coverImage: null,
          author: {
            id: "1",
            firstName: "name",
            lastName: "name",
            __typename: "Author",
          },
        },
        {
          id: "14",
          title: "test1",
          coverImage: null,
          author: {
            id: "1",
            firstName: "name",
            lastName: "name",
            __typename: "Author",
          },
        },
      ],
    });
    useGetAuthors.mockReturnValue({
      authorsLoading: false,
      authorsError: false,
      authors: [
        {
          id: "0",
          firstName: "AuthorFNa",
          lastName: "AuthorLNa",
          __typename: "Author",
        },
      ],
    });
  });

  it("should render the Homepage", () => {
    render(
      <ApolloProvider client={mockClient}>
        <Index />
      </ApolloProvider>
    );

    expect(screen.getByText("Liam Simko Capstone")).toBeInTheDocument();
  });
  it("should open the add book modal", () => {
    render(
      <div id="app-root">
        <ApolloProvider client={mockClient}>
          <Index />
        </ApolloProvider>
      </div>
    );

    expect(screen.getByText("+ Add Book")).toBeInTheDocument();
    userEvent.click(screen.getByText("+ Add Book"));
    expect(screen.getByText("Add New Book")).toBeInTheDocument();
  });

  it("should close the add book modal", () => {
    render(
      <div id="app-root">
        <ApolloProvider client={mockClient}>
          <Index />
        </ApolloProvider>
      </div>
    );

    expect(screen.getByText("+ Add Book")).toBeInTheDocument();
    userEvent.click(screen.getByText("+ Add Book"));
    expect(screen.getByText("Add New Book")).toBeInTheDocument();
    expect(screen.getByTestId("close-button")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("close-button"));
    expect(screen.queryByText("Add New Book")).not.toBeInTheDocument();
  });
});
