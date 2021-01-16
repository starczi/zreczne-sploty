import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "../../../static/logo.png"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.topContainer}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={headerStyles.topContainerLogo}
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
  )
}
