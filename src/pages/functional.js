import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';

export default function Functional() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mak1.jpg" }) {
        childImageSharp {
          fixed(width: 268, height: 268, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1> Makramy użytkowe</h1>
      <div>
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
    </Layout>
  );
}
