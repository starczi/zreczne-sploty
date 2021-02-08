import React from 'react';
import styled from 'styled-components';
import Burger from './burger';
import Logo from './logo';

const StyledHeader = styled.header`
  width: 100%;
  min-width: 409px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Burger />
    </StyledHeader>
  );
}
