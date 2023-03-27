import styled from 'styled-components';
import ContactForm from './ContactForm';
export default function ContactSection({ topGap = false }) {
  return (
    <StyledContactSection topGap={topGap}>
      <div className="inner-contact-section">
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.div`
  background: #f9f9f9;
  margin-top: ${(props) => (props.topGap ? '4rem' : '')};
  .inner-contact-section {
    padding: 4rem 8rem;
    max-width: 1600px;
    margin: 0 auto;
  }
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
