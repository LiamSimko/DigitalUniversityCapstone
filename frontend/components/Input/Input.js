import styled from "@emotion/styled";
import { forwardRef } from "react";

const StyledInput = styled.input`
  font-family: Poppins;
  font-size: ${({ fontSize }) => fontSize ?? "inherit"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "inherit"};
  text-align: ${({ textAlign }) => textAlign ?? "inherit"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ textColor }) => textColor};
  font-style: ${({ fontStyle }) => fontStyle};
  margin: ${({ margin }) => margin};
  border: 2px solid LightGrey;
  border-radius: 6px;
  padding: 5px 5px;
  width: 97%;
`;

const Input = forwardRef(
  (
    {
      children,
      fontFamily,
      fontSize,
      fontWeight,
      textAlign,
      letterSpacing,
      lineHeight,
      textColor,
      fontStyle,
      margin,
      ...rest
    },
    ref
  ) => (
    <StyledInput
      data-testid={"input"}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      textColor={textColor}
      fontStyle={fontStyle}
      margin={margin}
      ref={ref}
      {...rest}
      type={"text"}
    ></StyledInput>
  )
);

export default Input;
