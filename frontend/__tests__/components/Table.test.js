import { Table } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useGetCategories } from "../../api/categories";

jest.mock("../../api/categories");

describe("Table", () => {
  it("renders without error", async () => {
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
    const { categories } = useGetCategories();
    const columns = [
      { Header: "Categories", accessor: "name" },
      { Header: "Number of Books", accessor: "books.length" },
    ];
    render(
      <MockedProvider>
        <Table columns={columns} data={categories}></Table>
      </MockedProvider>
    );
    expect(await screen.findByText("Fantasy")).toBeInTheDocument();
  });
});
