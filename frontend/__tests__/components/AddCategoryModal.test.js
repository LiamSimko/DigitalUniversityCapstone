import { AddCategoryModal } from "../../components";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useAddCategory, useGetCategories } from "../../api/categories";
import userEvent from "@testing-library/user-event";

jest.mock("../../api/categories");

describe("AddCategoryModal", () => {
  it("renders without error", async () => {
    useAddCategory.mockReturnValue({
      addCategoryLoading: false,
      addCategoryError: false,
      addCategoryData: {
        data: {
          addCategory: {
            id: "5",
            name: "Nonfiction",
            books: [],
          },
        },
      },
    });
    useGetCategories.mockReturnValue({
      categoriesLoading: false,
      categoriesError: false,
      categories: [],
    });
    render(
      <MockedProvider>
        <AddCategoryModal></AddCategoryModal>
      </MockedProvider>
    );
    expect(await screen.findByText("Add New Category")).toBeInTheDocument();
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
  const functionAddCategory = jest.fn();
  it("renders without error", async () => {
    useAddCategory.mockReturnValue({
      addCategoryLoading: false,
      addCategoryError: false,
      addCategory: functionAddCategory,
      addCategoryData: {
        data: {
          addCategory: {
            id: "4",
            name: "Nonfiction",
            books: [],
          },
        },
      },
    });
    useGetCategories.mockReturnValue({
      categoriesLoading: false,
      categoriesError: false,
      categories: [
        {
          id: "1",
          name: "Fantasy",
          books: ["1", "2", "3"],
        },
        {
          id: "2",
          name: "Fiction",
          books: ["1", "2", "3"],
        },
        {
          id: "3",
          name: "Programming",
          books: ["4"],
        },
      ],
    });
    const onClose = jest.fn();
    render(
      <MockedProvider>
        <AddCategoryModal closeModal={onClose}></AddCategoryModal>
      </MockedProvider>
    );
    expect(await screen.findByText("Add Category")).toBeInTheDocument();
    userEvent.type(screen.getByTestId("input"), "name");
    userEvent.click(screen.getByText("Add Category"));
    await waitFor(() => expect(functionAddCategory).toHaveBeenCalled());
  });
});
