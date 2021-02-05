import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';

const StyledBurger = styled.button`
  margin: 2rem 0;
  width: 1.5rem;
  height: 1.5rem;
  display: none;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.devices.s}) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    background: black;
    width: 1.5rem;
    height: 0.12rem;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;
    transform-origin: 3.8px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg) scaleX(1.4)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:last-child {
      transform: ${({ open }) => (open ? 'rotate(-45deg) scaleX(1.4)' : 'rotate(0)')};
    }
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Navbar open={open} />
    </>
  );
}
