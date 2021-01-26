import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import logoStyles from './logo.module.scss';

export default function Logo() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Link to="/" className={logoStyles.link}>
      <Img className={logoStyles.logo} style={{ width: '150px' }} fluid={data.file.childImageSharp.fluid} alt="logo" />
    </Link>
  );
}
