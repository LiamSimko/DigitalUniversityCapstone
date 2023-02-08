import styled from "@emotion/styled";
import { useRouter } from "next/router";

const StyledTabSelector = styled.a`
  font-family: Poppins;
  font-weight: Bolder;
  margin: 0.2em 0.2em 0px 1.5em;
  color: ${({ selected }) => (selected ? "DodgerBlue" : "DimGray")};
  cursor: ${({ selected }) => (selected ? "auto" : "pointer")};
`;

const TabSelector = ({ href, selected, children }) => {
  const router = useRouter();

  const select = () => {
    if (!selected) {
      router.push(href);
    }
  };

  return (
    <StyledTabSelector selected={selected} onClick={select}>
      {children}
    </StyledTabSelector>
  );
};
export default TabSelector;
