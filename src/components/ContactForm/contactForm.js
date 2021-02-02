import React, { useState } from 'react';
// import { navigate } from 'gatsby-link';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  border: 2px solid #e74c3c;
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
    width: 100%;
    border: 2px solid #2980b9;
    padding: 0.5rem;
    font-size: 18px;
    border-radius: 5px;
  }

  button {
    border: 0;
    background: #343050;
    padding: 0.5rem;
    color: white;
    margin: 1rem 0;
    width: auto;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s background ease;
    &:hover {
      background: #3498db;
    }

    div {
      width: 100%;
    }
  }
`;

// const encode = (data) => {
//   Object.keys(data)
//     .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//     .join('&');
// };

export default function ContactForm() {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   // eslint-disable-next-line no-undef
  //   fetch('/contact/?no-cache=1', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': form.getAttribute('name'),
  //       ...formState,
  //     }),
  //   })
  //     .then(console.log(encode({ 'form-name': 'contact', ...formState })))
  //     // eslint-disable-next-line no-undef
  //     .catch((error) => alert(error));
  // };

  return (
    <StyledForm
      name="contact v1"
      method="post"
      data-netlify="true"
      // data-netlify-honeypot="bot-field"
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact v1" />
      <label htmlFor="name">Name</label>
      <input
        // id="name"
        type="text"
        name="name"
        // onChange={handleChange}
        // value={formState.name}
        placeholder="Enter your name"
      />
      <label htmlFor="email">Email</label>
      <input
        // id="email"
        type="email"
        name="email"
        // onChange={handleChange}
        // value={formState.email}
        placeholder="Enter your email"
      />
      <label htmlFor="message">Message</label>
      <textarea
        // id="message"
        type="text"
        name="message"
        // onChange={handleChange}
        // value={formState.message}
        placeholder="Enter your message"
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
