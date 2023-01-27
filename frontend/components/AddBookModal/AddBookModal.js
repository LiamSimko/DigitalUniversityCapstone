import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Text from "../Text";
import Input from "../Input";
import Modal from "../Modal";
import TextArea from "../TextArea";
import Button from "../Button";
import { useAddBook } from "../../api/books";
import { useAddAuthor, useGetAuthors } from "../../api/authors";

const InputsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
  font-size: 20px;
  font-family: poppins;
  width: 100%;
`;
const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 20px;
  font-family: poppins;
  width: 100%;
`;
const StyledForm = styled.form`
  width: 100%;
`;

const AddBookModal = ({ closeModal, ...props }) => {
  const { addBook } = useAddBook();
  const { addAuthor } = useAddAuthor();
  const { authors } = useGetAuthors();
  const { register, handleSubmit } = useForm();
  const ref = React.createRef();
  const onSubmitForm = async (data) => {
    let authorId;
    const result = authors.filter(
      (author) => data.name == author.firstName + " " + author.lastName
    );
    if (result.length > 0) {
      authorId = result[0].id;
    } else {
      const newAuthor = await addAuthor(
        data.name.split(" ")[0],
        data.name.split(" ")[data.name.split(" ").length - 1]
      );

      authorId = newAuthor.data.addAuthor.id;
    }
    addBook(data.title, authorId, null, "n/a", data.description);
    closeModal();
  };

  return (
    <Modal title={"Add New Book"} closeModal={closeModal}>
      <StyledForm onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <InputsSection>
          <Text>Title</Text>
          <Input ref={ref} {...register("title")} margin={".5em 0em"}></Input>
          <Text>Author</Text>
          <Input margin={".5em 0em 7em"} {...register("name")}></Input>
          <Text>Description</Text>
          <TextArea margin={".5em 0em"} {...register("description")}></TextArea>
        </InputsSection>
        <ButtonSection>
          <Button
            onClick={closeModal}
            border={"none"}
            color={"red"}
            backgroundColor={"transparent"}
          >
            Cancel
          </Button>
          <Button type={"submit"}>Add Book</Button>
        </ButtonSection>
      </StyledForm>
    </Modal>
  );
};

export default AddBookModal;
