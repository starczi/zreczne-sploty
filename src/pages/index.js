import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import indexStyles from './index.module.scss';

export default function Home() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1170, maxHeight: 585) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className={indexStyles.container}>
        <Img className={indexStyles.img} fluid={data.file.childImageSharp.fluid} alt="logo" />
      </div>
    </Layout>
  );
}
