import styled from 'styled-components';
import Container from './Container';
export default function TextSection({ children, topGap = false }) {
  return (
    <Container>
      <StyledTextSection topGap={topGap}>{children}</StyledTextSection>
    </Container>
  );
}

const StyledTextSection = styled.div`
  margin-top: ${(props) => (props.topGap ? '2rem' : '')};
  h3 {
    font-size: 2.5rem;
    max-width: 24ch;
    margin-bottom: 3rem;
  }
  .text {
    display: flex;
    font-weight: 200;
    line-height: 1.5rem;
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .left {
    font-weight: 400;
    border-right: 1px solid #d7d7d7;
    padding-right: 2.5rem;
    min-width: 25rem;
    width: 25rem;
  }
  .right {
    padding-left: 2.5rem;
  }
  button {
    color: #009288;
    border: 1px solid #009288;
    transition: all 0.3s ease;
    &:hover {
      background: #009288;
      color: white;
    }
  }
  @media only screen and (max-width: 1100px) {
    .text {
      flex-direction: column;
      gap: 1.5rem;
    }
    .left,
    .right {
      gap: 0.5rem;
    }
    .left {
      border-bottom: 1px solid #d7d7d7;
      border-right: none;
      width: 100%;
      padding-bottom: 0.8rem;
      p {
        width: 25rem;
        min-width: 25rem;
      }
    }
    .right {
      padding-left: 0;
      p {
        padding-bottom: 0.8rem;
      }
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  /* mobile */
  @media screen and (max-width: 600px) {
    margin-top: ${(props) => (props.topGap ? '.5rem' : '')};
    .left {
      border-bottom: 1px solid #d7d7d7;
      border-right: none;
      width: 100%;
      min-width: 100%;
      padding-bottom: 0.8rem;
      p {
        width: 100%;
        min-width: 100%;
      }
    }
  }
`;
