import React, { useState, useMemo } from "react";
import {
  Section,
  Text,
  Button,
  Flex,
  AddCategoryModal,
  Table,
} from "../components";
import { useGetCategories } from "../api/categories";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    categories,
    categoriesLoading: categoriesLoading,
    categoriesError,
    refetchCategories,
  } = useGetCategories();
  const toggleModal = () => {
    setShowModal(!showModal);
    refetchCategories;
  };
  const columns = useMemo(
    () => [
      { Header: "Categories", accessor: "name" },
      { Header: "Number of Books", accessor: "books.length" },
    ],
    []
  );
  return (
    <>
      {showModal && (
        <AddCategoryModal
          categories={categories}
          closeModal={() => toggleModal()}
        ></AddCategoryModal>
      )}
      <Section background={"#dfdfdf"}>
        <Flex direction={"row"} justify={"space-between"}>
          <Text fontWeight={"Bolder"} fontSize={"2.2rem"}>
            Categories
          </Text>
          <Button onClick={() => toggleModal()}>+ Add Category</Button>
        </Flex>
        {!categoriesLoading && !categoriesError && categories && (
          <Table columns={columns} data={categories}></Table>
        )}
      </Section>
    </>
  );
};

export default Categories;
