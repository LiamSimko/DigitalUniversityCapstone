import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 0.5em 1em;
  text-align: center;
  font-weight: bolder;
  font-size: 18px;
  border-radius: 8px;
  font-family: Poppins;
  cursor: pointer;
  ${({ border }) => `border: ${border};`}
  ${({ color }) => `color: ${color};`}
  ${({ backgroundColor }) => `background-color: ${backgroundColor ?? "white"};`}
`;

const Button = ({
  children,
  onClick,
  border,
  color,
  backgroundColor,
  ...props
}) => (
  <StyledButton
    onClick={onClick}
    border={border}
    color={color}
    backgroundColor={backgroundColor}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
