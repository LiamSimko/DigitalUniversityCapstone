import styled from "@emotion/styled";
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
`;

const Book = ({ children, title, author, href, ...props }) => (
  <StyledLink href={href.pathname}>
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

export default Book;
