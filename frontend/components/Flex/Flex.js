import styled from "@emotion/styled";

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${({ direction }) => `flex-direction: ${direction};`}
  ${({ justify }) => `justify-content: ${justify};`}
  ${({ gap }) => `gap: ${gap};`}
`;

const Flex = ({ children, direction, justify, gap, ...props }) => (
  <StyledFlex direction={direction} justify={justify} gap={gap} {...props}>
    {children}
  </StyledFlex>
);

export default Flex;
