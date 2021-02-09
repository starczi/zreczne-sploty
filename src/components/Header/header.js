import React from 'react';
import styled from 'styled-components';
import Burger from './burger';
import Logo from './logo';

const StyledHeader = styled.header`
  width: 100%;
  min-width: ${({ theme }) => theme.devices.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    margin-bottom: 2rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Burger />
    </StyledHeader>
  );
}
