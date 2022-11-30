import styled from "@emotion/styled";
import Text from "../Text";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.1);
  z-index: 10;
`;

const StyledModal = styled.div`
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 8px;
  transform: translate(0, -20%);
  width: 30%;
  z-index: 11;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  padding: 10px 20px;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 1000;
  max-height: 1.5em;
`;
const CloseButton = styled.a`
  cursor: pointer;
  font-size: 45px;
  font-family: poppins;
  transform: translate(0, -30%);
`;

const Modal = ({ children, closeModal, title, ...props }) => (
  <Overlay>
    <StyledModal onClick={null}>
      <ModalHeader>
        <Text>{title}</Text>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalHeader>
      {children}
    </StyledModal>
  </Overlay>
);

export default Modal;
