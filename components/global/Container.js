import styled from 'styled-components';
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  padding: 4rem 8rem;
  max-width: 1600px;
  margin: 0 auto;
  /* ipad */
  @media screen and (max-width: 1100px) {
    padding: 2rem 2rem;
  }
  /* mobile */
  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;
