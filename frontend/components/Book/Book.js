import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Text from "../Text";

const StyledCard = styled.div`
  border: solid;
  border-color: white;
  color: black;
  height: 8em;
  padding: 2em 1em;
  text-align: start;
  text-decoration: none;
  font-size: 20px;
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLink = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
`;

const Book = ({ children, title, author, href, breadCrumbPath, breadCrumbName, ...props }) => {
  const router = useRouter();
  const bookLink = () => {
    router.push({ pathname: href, query: { breadCrumbPath: breadCrumbPath, breadCrumbName: breadCrumbName } });
  };
  return (
    <StyledLink onClick={bookLink} data-testid={"link"}>
      <StyledCard {...props}>
        <Text fontSize={"1.5em"} fontWeight={"Bolder"}>
          {title}
        </Text>
        <Text fontSize={"1em"} fontStyle={"Italic"}>
          {author}
        </Text>
      </StyledCard>
    </StyledLink>
  );
};

export default Book;
