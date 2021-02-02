import React, { useState } from 'react';
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

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={formState.name}
        placeholder="Enter your name"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChange}
        value={formState.email}
        placeholder="Enter your email"
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        type="text"
        name="message"
        onChange={handleChange}
        value={formState.message}
        placeholder="Enter your message"
      />
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
