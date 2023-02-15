import { gql, useQuery, useMutation } from "@apollo/client";

export const useGetCategories = () => {
  const query = gql`
    query getCategories {
      getCategories {
        id
        name
        books {
          id
          title
          author {
            id
            firstName
            lastName
          }
        }
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(query);

  return {
    categoriesLoading: loading,
    categoriesError: error,
    categories: data?.getCategories || [],
    refetchCategories: refetch(),
  };
};

export const useGetCategory = (id) => {
  const query = gql`
    query getCategory($id: ID!) {
      getCategory(id: $id) {
        id
        name
        books {
          id
          title
          author {
            id
            firstName
            lastName
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(query, { variables: { id } });
  return {
    categoryLoading: loading,
    categoryError: error,
    category: data?.getCategory || null,
  };
};

export const useAddCategory = (name) => {
  const mutation = gql`
    mutation addCategory($name: String!) {
      addCategory(name: $name) {
        id
        name
      }
    }
  `;
  const [addCategory, { loading, error, data }] = useMutation(mutation, {
    variables: { name },
  });
  return {
    addCategory: (name) =>
      addCategory({
        variables: {
          name,
        },
      }),
    addCategoryLoading: loading,
    addCategoryError: error,
    addCategoryData: data,
  };
};
