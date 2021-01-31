/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const StyledFooter = styled.footer`
  padding: 2rem 0 1rem;

  a {
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.black};
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagram
          facebook
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <a href={data.site.siteMetadata.facebook} rel="nofollow noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} size="2x" transform="shrink-2.2" />
      </a>
      <a href={data.site.siteMetadata.instagram} rel="nofollow noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <Link to="/contact">
        <FontAwesomeIcon icon={faEnvelope} size="2x" transform="grow-1.2" />
      </Link>
    </StyledFooter>
  );
}
