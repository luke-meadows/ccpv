import styled from 'styled-components';
export default function ContactForm() {
  return (
    <StyledContactForm>
      <input type="text" placeholder="Email Address" />
      <div className="two-col">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Subject" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Leave Your Message Here..."
      ></textarea>
      <button>Send</button>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-top: 2rem;

  input,
  textarea {
    background: #f9f9f9;
    border: 1px solid #bbbbbb;
    font-family: 'Montserrat';
    padding: 0.5rem;
    font-size: 1rem;
    resize: none;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #bbbbbb;
      opacity: 1; /* Firefox */
    }
  }

  .two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
  }

  button {
    color: white;
    border: 1px solid #009288;
    background: #009288;
    text-transform: uppercase;
    padding: 0.75rem 4rem;
    transition: all 0.3s ease;
    &:hover {
      background: #000000;
      border: 1px solid #000000;
    }
  }
`;
