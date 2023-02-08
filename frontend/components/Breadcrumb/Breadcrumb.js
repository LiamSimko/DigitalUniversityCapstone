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

const StyledLink = styled.a`
  font-family: Poppins;
  text-decoration: none;
  color: black;
  &:hover {
    color: purple;
  }
`;

const Breadcrumb = ({ children, links, ...props }) => (
  <StyledBreadcrumbList {...props}>
    {links.map((link) => {
      if (link.href) {
        return (
          <StyledBreadcrumb key={"link"}>
            <StyledLink href={link.href}>{link.name}</StyledLink>
            <Text> / </Text>
          </StyledBreadcrumb>
        );
      } else {
        return (
          <StyledBreadcrumb key={"text"}>
            <Text fontWeight={"Bolder"}>{link.name}</Text>
          </StyledBreadcrumb>
        );
      }
    })}
  </StyledBreadcrumbList>
);

export default Breadcrumb;
