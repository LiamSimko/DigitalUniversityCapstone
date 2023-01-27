import { useQuery, useMutation } from "@apollo/client";
import { useAddAuthor, useGetAuthor, useGetAuthors } from "../../api/authors";

jest.mock("@apollo/client");

describe("author tests", () => {
  describe("useGetAuthor", () => {
    it("should return data", () => {
      const data = {
        getAuthor: {
          id: "2",
          firstName: "AuthorFNc",
          lastName: "AuthorLNc",
          __typename: "Author",
        },
      };

      useQuery.mockReturnValue({ loading: false, error: null, data });
      const { author, authorError, authorLoading } = useGetAuthor();

      expect(author).toEqual(data.getAuthor);
      expect(authorError).toEqual(null);
      expect(authorLoading).toEqual(false);
    });

    it("should return null", () => {
      useQuery.mockReturnValue({ loading: false, error: null, data: null });
      const { author, authorError, authorLoading } = useGetAuthor();

      expect(author).toEqual([]);
      expect(authorError).toEqual(null);
      expect(authorLoading).toEqual(false);
    });
  });
  describe("useGetAuthors", () => {
    it("should return data", () => {
      const data = {
        getAuthors: [
          {
            id: "1",
            firstName: "AuthorFNb",
            lastName: "AuthorLNb",
            __typename: "Author",
          },
          {
            id: "2",
            firstName: "AuthorFNc",
            lastName: "AuthorLNc",
            __typename: "Author",
          },
        ],
      };

      useQuery.mockReturnValue({ loading: false, error: null, data });
      const { authors, authorsError, authorsLoading } = useGetAuthors();

      expect(authors).toEqual(data.getAuthors);
      expect(authorsError).toEqual(null);
      expect(authorsLoading).toEqual(false);
    });

    it("should return null", () => {
      useQuery.mockReturnValue({ loading: false, error: null, data: null });
      const { authors, authorsError, authorsLoading } = useGetAuthors();

      expect(authors).toEqual([]);
      expect(authorsError).toEqual(null);
      expect(authorsLoading).toEqual(false);
    });
  });
  describe("useAddAuthor", () => {
    it("should return data", () => {
      const data = {
        addAuthor: {
          id: "3",
          firstName: "AuthorFNd",
          lastName: "AuthorLNd",
          __typename: "Author",
        },
      };

      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data },
      ]);
      const { addAuthorData, addAuthorError, addAuthorLoading, addAuthor } =
        useAddAuthor();
      expect(addAuthorData).toEqual(data.addAuthor);
      expect(addAuthorError).toEqual(null);
      expect(addAuthorLoading).toEqual(false);
      expect(addAuthor.constructor.name).toBe("Function");
    });

    it("should return null", () => {
      useMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: null, data: null },
      ]);
      const { addAuthorData, addAuthorError, addAuthorLoading, addAuthor } =
        useAddAuthor();

      expect(addAuthorData).toEqual(null);
      expect(addAuthorError).toEqual(null);
      expect(addAuthorLoading).toEqual(false);
      expect(addAuthor.constructor.name).toBe("Function");
    });
  });
});
