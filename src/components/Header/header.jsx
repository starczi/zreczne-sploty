import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import headerStyles from './header.module.scss';

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 125, maxHeight: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.topContainer}>
        <Link to="/">
          <Img
            //FIX STYLES!
            fixed={data.file.childImageSharp.fixed}
            alt="logo"
            // className={headerStyles.topContainerLogo}
          />
        </Link>
        <div className={headerStyles.topContainerTitle}>
          {data.site.siteMetadata.title}
        </div>
      </div>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.navItemActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.navItemActive}
            >
              Blog
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              to="/portfolio"
              className={headerStyles.navItem}
              activeClassName={headerStyles.navItemActive}
            >
              Portfolio
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.navItemActive}
            >
              O nas
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.navItemActive}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
