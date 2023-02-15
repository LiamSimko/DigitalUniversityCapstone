import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Text from "../Text";
import Input from "../Input";
import Modal from "../Modal";
import Button from "../Button";
import { useAddCategory } from "../../api/categories";

const InputsSection = styled.div`
  display: flex;
  margin: 1em 0em;
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

const AddBookModal = ({ closeModal, categories }) => {
  const { addCategory } = useAddCategory();
  const { register, handleSubmit } = useForm();
  const ref = React.createRef();
  const onSubmitForm = async (data) => {
    let result = null;
    if (data.name != "" && categories) {
      result = categories.find((category) => data.name === category.name);
    }
    if (!result) {
      addCategory(data.name);
      closeModal();
    }
  };

  return (
    <Modal title={"Add New Category"} closeModal={closeModal}>
      <StyledForm onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <InputsSection>
          <Text>Name</Text>
          <Input ref={ref} {...register("name")} margin={".5em 0em"}></Input>
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
          <Button type={"submit"}>Add Category</Button>
        </ButtonSection>
      </StyledForm>
    </Modal>
  );
};

export default AddBookModal;
