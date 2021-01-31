import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledNavbarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.2rem;
  position: relative;

  &.active::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::after {
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
