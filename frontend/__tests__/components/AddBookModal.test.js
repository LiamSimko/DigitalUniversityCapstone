import { AddBookModal } from "../../components";
import { render, screen, waitFor } from "@testing-library/react";
import { createMockClient } from "mock-apollo-client";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useAddBook } from "../../api/books";
import { useAddAuthor, useGetAuthors } from "../../api/authors";
import userEvent from "@testing-library/user-event";

jest.mock("../../api/books");

jest.mock("../../api/authors");
describe("AddBookModal", () => {
  it("renders without error", async () => {
    useAddAuthor.mockReturnValue({
      addAuthorLoading: false,
      addAuthorError: false,
      addAuthorData: {
        data: {
          addAuthor: {
            id: "1",
            firstName: "test",
            lastName: "test",
            __typename: "Author",
          },
        },
      },
    });
    useAddBook.mockReturnValue({
      addBookLoading: false,
      addBookError: false,
      addBookData: {
        data: {
          addBook: {
            id: "13",
            title: "test",
            coverImage: null,
            author: {
              id: "1",
              firstName: "test",
              lastName: "test",
              __typename: "Author",
            },
            description: "test",
            __typename: "Book",
          },
        },
      },
    });
    useGetAuthors.mockReturnValue({
      authorsLoading: false,
      authorsError: false,
      authors: [],
    });
    render(
      <MockedProvider addTypename={false}>
        <AddBookModal></AddBookModal>
      </MockedProvider>
    );
    expect(await screen.findByText("Add New Book")).toBeInTheDocument();
  });
  const data = {
    data: {
      addAuthor: {
        id: "5",
        firstName: "name",
        lastName: "name",
        __typename: "Author",
      },
    },
  };
  const functionAddBook = jest.fn();
  it("renders without error", async () => {
    useAddAuthor.mockReturnValue({
      addAuthorLoading: false,
      addAuthorError: false,
      addAuthor: jest.fn(() => {
        return data;
      }),
      addAuthorData: data,
    });
    useAddBook.mockReturnValue({
      addBookLoading: false,
      addBookError: false,
      addBook: functionAddBook,
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
    useGetAuthors.mockReturnValue({
      authorsLoading: false,
      authorsError: false,
      authors: [
        {
          id: "1",
          firstName: "test",
          lastName: "test",
          __typename: "Author",
        },
        {
          id: "2",
          firstName: "test",
          lastName: "test",
          __typename: "Author",
        },
        {
          id: "3",
          firstName: "test",
          lastName: "test",
          __typename: "Author",
        },
        {
          id: "4",
          firstName: "test",
          lastName: "test",
          __typename: "Author",
        },
      ],
    });
    const onClose = jest.fn();
    render(
      <MockedProvider addTypename={false}>
        <AddBookModal closeModal={onClose}></AddBookModal>
      </MockedProvider>
    );
    expect(await screen.findByText("Add Book")).toBeInTheDocument();
    userEvent.type(screen.getAllByTestId("input")[0], "name");
    userEvent.type(screen.getAllByTestId("input")[1], "name");
    userEvent.type(screen.getByTestId("textarea"), "test");

    userEvent.click(screen.getByText("Add Book"));
    await waitFor(() => expect(functionAddBook).toHaveBeenCalled());
  });
});
