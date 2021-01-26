import React from 'react';
import { Link } from 'gatsby';
import navStyles from './navigation.module.scss';

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link to="/" className={navStyles.navItem} activeClassName={navStyles.navItemActive}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className={navStyles.navItem} activeClassName={navStyles.navItemActive}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={navStyles.navItem} activeClassName={navStyles.navItemActive}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/about" className={navStyles.navItem} activeClassName={navStyles.navItemActive}>
            O nas
          </Link>
        </li>
        <li>
          <Link to="/contact" className={navStyles.navItem} activeClassName={navStyles.navItemActive}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
