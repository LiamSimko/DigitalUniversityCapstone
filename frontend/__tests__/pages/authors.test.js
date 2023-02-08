import { ApolloProvider } from "@apollo/client";
import { createMockClient } from "mock-apollo-client";
import { render, screen } from "@testing-library/react";
import { useGetBooks } from "../../api/books";
import { useGetAuthors } from "../../api/authors";
import Authors from "../../pages/authors";

jest.mock("../../api/books");

jest.mock("../../api/authors");

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/authors",
  })),
}));

describe("Authors Page", () => {
  let mockClient;

  beforeEach(() => {
    mockClient = createMockClient();
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

  it("should render the Authors Page", () => {
    render(
      <ApolloProvider client={mockClient}>
        <Authors />
      </ApolloProvider>
    );

    expect(screen.getByText(/AuthorFNa AuthorLNa/)).toBeInTheDocument();
  });
});
