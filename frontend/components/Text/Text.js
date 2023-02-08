import styled from "@emotion/styled";

const StyledTextWrap = styled.span`
  font-family: Poppins;
  font-size: ${({ fontSize }) => fontSize ?? "inherit"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "inherit"};
  text-align: ${({ textAlign }) => textAlign ?? "inherit"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ textColor }) => textColor};
  font-style: ${({ fontStyle }) => fontStyle};
`;

const Text = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  textColor,
  fontStyle,
  ...rest
}) => (
  <StyledTextWrap
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
    textAlign={textAlign}
    letterSpacing={letterSpacing}
    lineHeight={lineHeight}
    textColor={textColor}
    fontStyle={fontStyle}
    {...rest}
  >
    {children}
  </StyledTextWrap>
);

export default Text;
