import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/ContactForm/contactForm';

const StyledP = styled.p`
  max-width: ${({ theme }) => theme.devices.s};
  word-wrap: break-word;
  margin: 0 auto;

  &:first-of-type {
    margin-top: 3rem;
    padding-bottom: 0.5rem;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledP>
      <StyledP>Aenean non enim iaculis, molestie arcu eu, scelerisque mauris.</StyledP>
      <ContactForm />
      <StyledP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim iaculis, molestie
        arcu eu, scelerisque mauris. Nunc vel justo varius tellus scelerisque ultrices. Pellentesque
        metus turpis, porta eu dolor a, rutrum varius nulla.
      </StyledP>
    </Layout>
  );
}
