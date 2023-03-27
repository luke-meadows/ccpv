import styled from 'styled-components';
import Container from '../global/Container';
import ContactForm from './ContactForm';
export default function ContactSection({ topGap = false }) {
  return (
    <StyledContactSection topGap={topGap}>
      <Container>
        <h2>Contact Us</h2>
        <ContactForm />
      </Container>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.div`
  background: #f9f9f9;
  margin-top: ${(props) => (props.topGap ? '4rem' : '')};
  h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1100px) {
    margin-top: 0;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;
