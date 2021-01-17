/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} &copy; 2021</p>
    </footer>
  );
}
