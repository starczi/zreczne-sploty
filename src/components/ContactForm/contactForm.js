import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 5px;

  label {
    display: block;
    padding: 1rem 0 0.25rem;
    text-transform: uppercase;
    font-size: 14px;
  }

  input,
  textarea {
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.black};
    padding: 0.5rem;
    border-radius: 5px;
  }
  input {
    width: 50%;
    margin: 0 auto;
  }
  textarea {
    width: 100%;
    min-height: 150px;
  }

  button {
    background: ${({ theme }) => theme.colors.black};
    padding: 0.5rem;
    color: white;
    border-radius: 5px;
    margin: 1rem 0;
    width: auto;
    text-transform: uppercase;
    transition: 0.3s background ease;
    &:hover {
      background: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

export default function ContactForm() {
  return (
    <StyledForm
      name="contact v1"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact v1" />
      <p hidden>
        <label>
          <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="Enter your email" />
      <label htmlFor="message">Message</label>
      <textarea type="text" name="message" placeholder="Enter your message" />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
