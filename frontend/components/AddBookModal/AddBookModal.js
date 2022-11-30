import styled from "@emotion/styled";
import Text from "../Text";
import Input from "../Input";
import Modal from "../Modal";
import TextArea from "../TextArea";
import Button from "../Button";
import Flex from "../Flex";

const InputsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
  font-size: 20px;
  font-family: poppins;
  width: 90%;
`;
const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 20px;
  font-family: poppins;
  width: 90%;
`;

const AddBookModal = ({ children, closeModal, ...props }) => (
  <Modal title={"Add New Book"} closeModal={closeModal}>
    <InputsSection>
      <Text>Title</Text> <Input margin={".5em 0em"}></Input>
      <Text>Author</Text>
      <Input margin={".5em 0em 7em"}></Input>
      <Text>Description</Text>
      <TextArea margin={".5em 0em"}></TextArea>
    </InputsSection>
    <ButtonSection>
      <Button border={"none"} color={"red"} backgroundColor={"transparent"}>
        Cancel
      </Button>
      <Button>Add Book</Button>
    </ButtonSection>
  </Modal>
);

export default AddBookModal;
