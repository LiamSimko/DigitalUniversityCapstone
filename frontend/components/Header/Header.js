import { useState, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import Text from "../Text";
import TabSelector from "../TabSelector";
import { useRouter } from "next/router";

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
  img {
    width: 5%;
    height: 50%;
    padding: 1%;
  }
`;

const Header = () => {
  const [selected, setSelected] = useState([true, false]);
  const router = useRouter();
  useLayoutEffect(() => {
    if (router.pathname === "/") {
      setSelected([true, false, false]);
    } else if (router.pathname === "/authors") {
      setSelected([false, true, false]);
    } else if (router.pathname === "/categories") {
      setSelected([false, false, true]);
    } else {
      setSelected([false, false, false]);
    }
  }, [router.pathname]);
  return (
    <HeaderWrapper>
      <Container>
        <img src="/DU-Logo-Mark.svg" alt="Digital U Logo" />
        <Text fontWeight={"1000"} fontSize={"30px"}>
          Liam Simko Capstone
        </Text>
        <TabSelector selected={selected[0]} href={"/"}>
          Books
        </TabSelector>
        <TabSelector selected={selected[1]} href={"/authors"}>
          Authors
        </TabSelector>
        <TabSelector selected={selected[2]} href={"/categories"}>
          Categories
        </TabSelector>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
