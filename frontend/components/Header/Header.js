import styled from "@emotion/styled";
import Text from "../Text";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  padding: 0;
  margin: 0;
  position: fixed;
  background-color: white;
`;
const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: Poppins;
  width: 100%;
  height: 100%;
  margin: 0;
  margin-left: 2%;
  padding: 0;
`;
const Logo = styled.img`
  width: 5%;
  height: 50%;
  padding: 1%;
`;

const Header = ({ children }) => (
  <HeaderWrapper>
    <Container>
      <Logo src="DU-Logo-Mark.svg" alt="Digital U Logo" />
      <Text fontWeight={"1000"} fontSize={"30px"}>
        Liam Simko Capstone
      </Text>
      {children}
    </Container>
  </HeaderWrapper>
);

export default Header;
