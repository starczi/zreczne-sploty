/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import footerStyles from './footer.module.scss';

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
    <footer className={footerStyles.footer}>
      <a href={data.site.siteMetadata.facebook} rel="nofollow noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} size="2x" transform="shrink-2.2" />
      </a>
      <a href={data.site.siteMetadata.instagram} rel="nofollow noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <Link to="/contact">
        <FontAwesomeIcon icon={faEnvelope} size="2x" transform="grow-1.2" />
      </Link>
    </footer>
  );
}
