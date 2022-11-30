import styled from "@emotion/styled";

const StyledGrid = styled.div`
  display: grid;
  ${({ gap }) => `gap: ${gap};`}
  ${({ margin }) => `margin: ${margin};`}
  ${({ gridTemplate }) => `grid-template: ${gridTemplate};`}
`;

const Grid = ({ children, gridTemplate, margin, gap, ...props }) => (
  <StyledGrid gap={gap} gridTemplate={gridTemplate} margin={margin} {...props}>
    {children}
  </StyledGrid>
);

export default Grid;
