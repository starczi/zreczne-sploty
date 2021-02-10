import React from 'react';
import styled from 'styled-components';
import { StyledNavbarLink } from './styled';

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;

  li {
    padding: 2rem 2rem 0 0;
  }

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    flex-flow: column nowrap;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '350px' : '0')};
    width: 100vw;
    transition: max-height 0.3s ease-in-out;

    li {
      padding: 1rem 0;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`;

export default function Navbar({ open }) {
  return (
    <StyledUl open={open}>
      <li>
        <StyledNavbarLink to="/" activeClassName="active">
          Home
        </StyledNavbarLink>
      </li>
      <li>
        <StyledNavbarLink to="/blog" activeClassName="active">
          Blog
        </StyledNavbarLink>
      </li>
      <li>
        <StyledNavbarLink to="/decorative" activeClassName="active">
          Sploty dekoracyjne
        </StyledNavbarLink>
      </li>
      <li>
        <StyledNavbarLink to="/functional" activeClassName="active">
          Sploty użytkowe
        </StyledNavbarLink>
      </li>
      <li>
        <StyledNavbarLink to="/contact" activeClassName="active">
          Kontakt
        </StyledNavbarLink>
      </li>
    </StyledUl>
  );
}
