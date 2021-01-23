/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import footerStyles from './footer.module.scss';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          instagram
          facebook
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>
      <a
        href={data.site.siteMetadata.facebook}
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="6x" />
      </a>
      <a
        href={data.site.siteMetadata.instagram}
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagramSquare} size="6x" />
      </a>
      <Link to="/contact">
        <FontAwesomeIcon icon={faEnvelope} size="6x" />
      </Link>
      <p>Footer text</p>
    </footer>
  );
}
