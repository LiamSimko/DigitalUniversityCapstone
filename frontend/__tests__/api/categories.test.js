import { useQuery, useMutation } from "@apollo/client";
import {
  useAddCategory,
  useGetCategory,
  useGetCategories,
} from "../../api/categories";

jest.mock("@apollo/client");

describe("Categories tests", () => {
  describe("useGetCategory", () => {
    it("should return data", () => {
      const data = {
        getCategory: {
          id: "1",
          name: "Fantasy",
          books: ["1", "2", "3"],
        },
      };

      useQuery.mockReturnValue({ loading: false, error: null, data });
      const { category, categoryError, categoryLoading } = useGetCategory();
      expect(category).toEqual(data.getCategory);
      expect(categoryError).toEqual(null);
      expect(categoryLoading).toEqual(false);
    });

    it("should return null", () => {
      useQuery.mockReturnValue({ loading: false, error: null, data: null });
      const { category, categoryError, categoryLoading } = useGetCategory();
      expect(category).toEqual(null);
      expect(categoryError).toEqual(null);
      expect(categoryLoading).toEqual(false);
    });
  });
  describe("useGetCategories", () => {
    it("should return data", () => {
      const data = {
        getCategories: [
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
      };

      useQuery.mockReturnValue({
        loading: false,
        error: null,
        data,
        refetch: jest.fn(),
      });
      const { categories, categoriesError, categoriesLoading } =
        useGetCategories();
      expect(categories).toEqual(data.getCategories);
      expect(categoriesError).toEqual(null);
      expect(categoriesLoading).toEqual(false);
    });

    it("should return null", () => {
      useQuery.mockReturnValue({
        loading: false,
        error: null,
        data: null,
        refetch: jest.fn(),
      });
      const { categories, categoriesError, categoriesLoading } =
        useGetCategories();
      expect(categories).toEqual([]);
      expect(categoriesError).toEqual(null);
      expect(categoriesLoading).toEqual(false);
    });
  });
  describe("useAddCategory", () => {
    it("should return data", () => {
      const data = {
        addCategory: {
          id: "4",
          name: "Nonfiction",
          books: [],
        },
      };

      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data },
      ]);
      const {
        addCategoryData,
        addCategoryError,
        addCategoryLoading,
        addCategory,
      } = useAddCategory();
      expect(addCategoryData).toEqual(data);
      expect(addCategoryError).toEqual(null);
      expect(addCategoryLoading).toEqual(false);
      expect(addCategory.constructor.name).toBe("Function");
    });

    it("should return null", () => {
      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data: null },
      ]);
      const {
        addCategoryData,
        addCategoryError,
        addCategoryLoading,
        addCategory,
      } = useAddCategory();

      expect(addCategoryData).toEqual(null);
      expect(addCategoryError).toEqual(null);
      expect(addCategoryLoading).toEqual(false);
      expect(addCategory.constructor.name).toBe("Function");
    });
  });
  //   describe("useRemoveCategory", () => {
  //     it("should return data", () => {
  //       const data = {
  //         removeCategory: {
  //           id: "test",
  //         },
  //       };

  //       useMutation.mockReturnValue([
  //         jest.fn(),
  //         { loading: false, error: null, data },
  //       ]);
  //       const { removeCategoryData, removeCategoryError, removeCategoryLoading, removeCategory } =
  //         useRemoveCategory();

  //       expect(removeCategoryData).toEqual(data);
  //       expect(removeCategoryError).toEqual(null);
  //       expect(removeCategoryLoading).toEqual(false);
  //       expect(removeCategory.constructor.name).toBe("Function");
  //     });

  //     it("should return null", () => {
  //       useMutation.mockReturnValue([
  //         jest.fn(),
  //         { loading: false, error: null, data: null },
  //       ]);
  //       const { removeCategoryData, removeCategoryError, removeCategoryLoading, removeCategory } =
  //         useRemoveCategory();

  //       expect(removeCategoryData).toEqual(null);
  //       expect(removeCategoryError).toEqual(null);
  //       expect(removeCategoryLoading).toEqual(false);
  //       expect(removeCategory.constructor.name).toBe("Function");
  //     });
  //   });
});
