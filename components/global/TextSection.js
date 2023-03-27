import styled from 'styled-components';
export default function TextSection({ children, topGap = false }) {
  return <StyledTextSection topGap={topGap}>{children}</StyledTextSection>;
}

const StyledTextSection = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 4rem 8rem;
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
`;
