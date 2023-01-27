import styled from "@emotion/styled";

const StyledFlex = styled.div`
  display: flex;
  align-items: ${({ align }) => align ?? "center"};
  flex-wrap: wrap;
  ${({ direction }) => `flex-direction: ${direction};`}
  ${({ justify }) => `justify-content: ${justify};`}
  ${({ gap }) => `gap: ${gap};`}
`;

const Flex = ({ children, direction, justify, gap, align, ...props }) => (
  <StyledFlex
    direction={direction}
    align={align}
    justify={justify}
    gap={gap}
    {...props}
  >
    {children}
  </StyledFlex>
);

export default Flex;
