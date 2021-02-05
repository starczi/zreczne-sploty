import React from 'react';
import styled from 'styled-components';
import { StyledNavbarLink } from './styled';

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;

  li {
    padding: 2rem 1rem;
  }

  @media (max-width: ${({ theme }) => theme.devices.s}) {
    flex-flow: column nowrap;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '350px' : '0')};
    width: 100vw;
    transition: max-height 0.3s ease-in-out;

    li {
      padding: 1rem 0;

      &:last-child {
        padding-bottom: 2rem;
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
        <StyledNavbarLink to="/portfolio" activeClassName="active">
          Portfolio
        </StyledNavbarLink>
      </li>
      <li>
        <StyledNavbarLink to="/about" activeClassName="active">
          O nas
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
