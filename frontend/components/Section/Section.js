import styled from "@emotion/styled";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1 1 auto;
  padding: 3rem 1rem;
  height: calc(100vh - 9rem);
  background: #dfdfdf;
  margin: 0;
`;

const Container = styled.div`
  align-content: flex-start;
  display: inline-block;
  flex-direction: column;
  max-width: 1240px;
  height: 100%;
  margin: 5% 5%;
  gap: 1rem;
`;

const Section = ({ children }) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};

export default Section;
