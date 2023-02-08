import { ApolloProvider } from "@apollo/client";
import { createMockClient } from "mock-apollo-client";
import { render, screen } from "@testing-library/react";
import BookDetails from "../../pages/book-details/[book].js";
import { useGetBook } from "../../api/books";

jest.mock("../../api/books");

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/book-details/test",
    query: { breadCrumbPath: "/", breadCrumbName: "Home" },
  })),
}));

describe("Book Description Page", () => {
  let mockClient;

  beforeEach(() => {
    mockClient = createMockClient();
  });
  it("should render the Book Description Page", () => {
    useGetBook.mockReturnValue({
      bookLoading: false,
      bookError: false,
      book: {
        id: "13",
        title: "test",
        coverImage: null,
        author: {
          id: "1",
          firstName: "name",
          lastName: "name",
          __typename: "Author",
        },
        description: "this is a book",
        __typename: "Book",
      },
    });
    render(
      <ApolloProvider client={mockClient}>
        <BookDetails />
      </ApolloProvider>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("should not render the Book Description Page if there are errors", () => {
    useGetBook.mockReturnValue({
      bookLoading: true,
      bookError: true,
      book: {
        id: "13",
        title: "test",
        coverImage: null,
        author: {
          id: "1",
          firstName: "name",
          lastName: "name",
          __typename: "Author",
        },
        description: "this is a book",
        __typename: "Book",
      },
    });
    render(
      <ApolloProvider client={mockClient}>
        <BookDetails />
      </ApolloProvider>
    );

    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});
