import styled from "@emotion/styled";
import Text from "../Text";

const StyledBreadcrumbList = styled.ul`
  padding: 10px 0px;
  list-style: none;
  li {
    display: inline;
    font-size: 18px;
  }
  a {
    font-family: Poppins;
    text-decoration: none;
    color: black;
    &:hover {
      color: purple;
    }
  }
`;

const Breadcrumb = ({ children, links, ...props }) => (
  <StyledBreadcrumbList {...props}>
    {links.map((link) => {
      if (link.href) {
        return (
          <li key={"link"}>
            <a href={link.href}>{link.name}</a>
            <Text> / </Text>
          </li>
        );
      } else {
        return (
          <li key={"text"}>
            <Text fontWeight={"Bolder"}>{link.name}</Text>
          </li>
        );
      }
    })}
  </StyledBreadcrumbList>
);

export default Breadcrumb;
