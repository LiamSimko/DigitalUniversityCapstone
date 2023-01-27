import styled from "@emotion/styled";
import Text from "../Text";

const StyledBreadcrumbList = styled.ul`
  padding: 10px 0px;
  list-style: none;
`;

const StyledBreadcrumb = styled.li`
  display: inline;
  font-size: 18px;
`;

const StyledText = styled.a`
  font-family: Poppins;
  text-decoration: none;
  color: black;
  "&:hover": {
    text-decoration: underline;
  }
`;

const Breadcrumb = ({ children, links, ...props }) => (
  <StyledBreadcrumbList {...props}>
    {links.map((link) => {
      if (link.href) {
        return (
          <StyledBreadcrumb>
            <StyledText href={link.href}>{link.name} / </StyledText>
          </StyledBreadcrumb>
        );
      } else {
        return (
          <StyledBreadcrumb>
            <Text fontWeight={"Bolder"}>{link.name}</Text>
          </StyledBreadcrumb>
        );
      }
    })}
  </StyledBreadcrumbList>
);

export default Breadcrumb;
