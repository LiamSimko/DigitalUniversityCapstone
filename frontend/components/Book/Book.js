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

const Book = ({ children, title, author, ...props }) => (
  <StyledCard {...props}>
    <Text fontSize={"1.5em"} fontWeight={"Bolder"}>
      {title}
    </Text>
    <Text fontSize={"1em"} fontStyle={"Italic"}>
      {author}
    </Text>
  </StyledCard>
);

export default Book;
