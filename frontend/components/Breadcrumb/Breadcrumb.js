import styled from "@emotion/styled";
import Text from "../Text";

const StyledBreadcrumbList = styled.ul`
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
`;

const StyledBreadcrumb = styled.li`
  display: inline;
  font-size: 18px;
`;

const StyledText = styled.a`
  font-family: Poppins;
  "&:hover": {
    text-decoration: underline;
  }
`;

const Breadcrumb = ({ children, links, ...props }) => (
  <StyledBreadcrumbList {...props}>
    {links.map((link) => {
      return <StyledBreadcrumb></StyledBreadcrumb>;
    })}
    <Text fontSize={"1.5em"} fontWeight={"Bolder"}>
      {title}
    </Text>
  </StyledBreadcrumbList>
);

export default Breadcrumb;
