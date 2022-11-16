import styled from "@emotion/styled";

const StyledTextWrap = styled.text`
  font-family: Poppins;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ textColor }) => textColor};
`;
const TextContainer = styled.div`
  display: inline-block;
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
  ...rest
}) => {
  return (
    <TextContainer>
      
      <StyledTextWrap
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        textColor={textColor}
        {...rest}
      >
        {children}
      </StyledTextWrap>
    </TextContainer>
  );
};

export default Text;
