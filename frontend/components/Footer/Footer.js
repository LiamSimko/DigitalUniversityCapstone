import styled from "@emotion/styled";
import Text from "../Text";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3rem;
  padding: 0;
  margin: 0;
  background-color: black;
  
`;

const Footer = () => (
  <StyledFooter>
    <Text textColor={"white"} fontSize={"20px"}>
      DIGITAL UNIVERSITY INCORPERATED
    </Text>
  </StyledFooter>
);

export default Footer;
