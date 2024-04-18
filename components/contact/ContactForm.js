import useForm from '@/lib/useForm';
import styled from 'styled-components';
export default function ContactForm({ setHeader }) {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleSubmit() {
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(inputs),
    }).then((res) => {
      clearForm();
      setHeader('Thank You');
      console.log(res);
      if (res.status === 200) {
      } else {
      }
    });
  }

  return (
    <StyledContactForm>
      <input
        onChange={handleChange}
        value={inputs.email}
        name="email"
        type="text"
        placeholder="Email Address"
      />
      <div className="two-col">
        <input
          onChange={handleChange}
          value={inputs.firstName}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={inputs.lastName}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        onChange={handleChange}
        value={inputs.subject}
        name="subject"
        type="text"
        placeholder="Subject"
      />
      <textarea
        onChange={handleChange}
        value={inputs.message}
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Leave Your Message Here..."
      ></textarea>
      <button type="button" onClick={() => handleSubmit()}>
        Send
      </button>
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
    color: black;
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
  @media only screen and (max-width: 1100px) {
    gap: 0.8rem;
    .two-col {
      gap: 0.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    .two-col {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
